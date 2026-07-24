import secrets
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException

from app.auth import AuthUser, get_current_user
from app.schemas.analysis import (
    InviteMemberRequest,
    MemberOut,
    PendingInviteOut,
    ProductLinkRequest,
    ProductOut,
    ShareCreateRequest,
    ShareOut,
    WorkspaceCreate,
    WorkspaceOut,
)
from app.services.share_links import default_share_expires_at
from app.services.supabase_client import get_supabase

router = APIRouter(prefix="/workspaces", tags=["workspaces"])


@router.get("/invites/pending", response_model=list[PendingInviteOut])
async def list_pending_invites(
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> list[PendingInviteOut]:
    """Davetler e-posta ile gelir; kullanıcı giriş yapınca burada görür ve kabul eder."""
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    email = (user.email or "").strip().lower()
    if not email:
        return []

    response = (
        client.table("workspace_members")
        .select("id, email, role, status, workspace_id, workspaces(name)")
        .eq("email", email)
        .eq("status", "pending")
        .order("created_at", desc=True)
        .execute()
    )
    out: list[PendingInviteOut] = []
    for row in response.data or []:
        ws = row.get("workspaces") or {}
        name = ws.get("name") if isinstance(ws, dict) else None
        out.append(
            PendingInviteOut(
                id=row["id"],
                workspace_id=row["workspace_id"],
                workspace_name=name or "Workspace",
                role=row["role"],
                email=row["email"],
                status=row["status"],
            )
        )
    return out


@router.post("/invites/{member_id}/accept", response_model=MemberOut)
async def accept_invite(
    member_id: str,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> MemberOut:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    email = (user.email or "").strip().lower()
    if not email:
        raise HTTPException(status_code=400, detail="Hesabınızda e-posta yok.")

    existing = (
        client.table("workspace_members")
        .select("*")
        .eq("id", member_id)
        .eq("email", email)
        .eq("status", "pending")
        .limit(1)
        .execute()
    )
    if not existing.data:
        raise HTTPException(status_code=404, detail="Bekleyen davet bulunamadı.")

    response = (
        client.table("workspace_members")
        .update({"status": "active", "user_id": user.id})
        .eq("id", member_id)
        .eq("email", email)
        .execute()
    )
    if not response.data:
        raise HTTPException(status_code=500, detail="Davet kabul edilemedi.")
    m = response.data[0]
    return MemberOut(
        id=m["id"],
        email=m["email"],
        role=m["role"],
        status=m["status"],
        user_id=m.get("user_id"),
    )


@router.post("/invites/{member_id}/decline")
async def decline_invite(
    member_id: str,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> dict:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    email = (user.email or "").strip().lower()
    if not email:
        raise HTTPException(status_code=400, detail="Hesabınızda e-posta yok.")

    existing = (
        client.table("workspace_members")
        .select("id")
        .eq("id", member_id)
        .eq("email", email)
        .eq("status", "pending")
        .limit(1)
        .execute()
    )
    if not existing.data:
        raise HTTPException(status_code=404, detail="Bekleyen davet bulunamadı.")

    client.table("workspace_members").delete().eq("id", member_id).eq("email", email).execute()
    return {"ok": True}


@router.get("", response_model=list[WorkspaceOut])
async def list_workspaces(user: Annotated[AuthUser, Depends(get_current_user)]) -> list[WorkspaceOut]:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    owned = (
        client.table("workspaces")
        .select("*")
        .eq("owner_id", user.id)
        .order("created_at", desc=True)
        .execute()
    )
    member_rows = (
        client.table("workspace_members")
        .select("workspace_id, role, status")
        .eq("user_id", user.id)
        .eq("status", "active")
        .execute()
    )
    member_map = {r["workspace_id"]: r["role"] for r in (member_rows.data or [])}
    ws_ids = list(member_map.keys())
    shared = []
    if ws_ids:
        shared = (
            client.table("workspaces")
            .select("*")
            .in_("id", ws_ids)
            .execute()
        ).data or []

    out: list[WorkspaceOut] = []
    seen: set[str] = set()
    for row in owned.data or []:
        seen.add(row["id"])
        out.append(
            WorkspaceOut(
                id=row["id"],
                name=row["name"],
                owner_id=row["owner_id"],
                created_at=row.get("created_at"),
                role="owner",
            )
        )
    for row in shared:
        if row["id"] in seen:
            continue
        out.append(
            WorkspaceOut(
                id=row["id"],
                name=row["name"],
                owner_id=row["owner_id"],
                created_at=row.get("created_at"),
                role=member_map.get(row["id"], "viewer"),
            )
        )
    return out


@router.post("", response_model=WorkspaceOut)
async def create_workspace(
    body: WorkspaceCreate,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> WorkspaceOut:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    response = (
        client.table("workspaces")
        .insert({"name": body.name.strip(), "owner_id": user.id})
        .execute()
    )
    if not response.data:
        raise HTTPException(status_code=500, detail="Workspace oluşturulamadı.")
    row = response.data[0]
    client.table("workspace_members").insert(
        {
            "workspace_id": row["id"],
            "user_id": user.id,
            "email": user.email or "",
            "role": "owner",
            "status": "active",
        }
    ).execute()
    return WorkspaceOut(
        id=row["id"],
        name=row["name"],
        owner_id=row["owner_id"],
        created_at=row.get("created_at"),
        role="owner",
    )


@router.get("/{workspace_id}/members", response_model=list[MemberOut])
async def list_members(
    workspace_id: str,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> list[MemberOut]:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")
    _require_member(client, workspace_id, user.id)

    response = (
        client.table("workspace_members")
        .select("*")
        .eq("workspace_id", workspace_id)
        .order("created_at")
        .execute()
    )
    return [
        MemberOut(
            id=row["id"],
            email=row["email"],
            role=row["role"],
            status=row["status"],
            user_id=row.get("user_id"),
        )
        for row in (response.data or [])
    ]


@router.post("/{workspace_id}/invite", response_model=MemberOut)
async def invite_member(
    workspace_id: str,
    body: InviteMemberRequest,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> MemberOut:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")
    _require_owner_or_editor(client, workspace_id, user.id)

    email = body.email.strip().lower()
    if email == (user.email or "").strip().lower():
        raise HTTPException(status_code=400, detail="Kendinizi davet edemezsiniz.")

    row = {
        "workspace_id": workspace_id,
        "email": email,
        "role": body.role,
        "status": "pending",
        "user_id": None,
    }
    # Invitee hesabıyla giriş yapınca /invites/pending üzerinden kabul eder.
    response = client.table("workspace_members").upsert(row, on_conflict="workspace_id,email").execute()
    if not response.data:
        raise HTTPException(status_code=500, detail="Davet gönderilemedi.")
    m = response.data[0]

    ws = (
        client.table("workspaces")
        .select("name")
        .eq("id", workspace_id)
        .limit(1)
        .execute()
    )
    ws_name = (ws.data or [{}])[0].get("name") or "Workspace"
    # Davetli zaten üye tablosunda active user_id ile başka yerde varsa bildirim at
    invitee = (
        client.table("workspace_members")
        .select("user_id")
        .eq("email", email)
        .eq("status", "active")
        .not_.is_("user_id", "null")
        .limit(1)
        .execute()
    )
    invitee_user_id = (invitee.data or [{}])[0].get("user_id")
    if invitee_user_id:
        client.table("notifications").insert(
            {
                "user_id": invitee_user_id,
                "kind": "workspace_invite",
                "title": f"{ws_name} workspace daveti",
                "body": f"{user.email or 'Bir takım üyesi'} sizi {body.role} olarak davet etti.",
                "href": "/team",
            }
        ).execute()

    return MemberOut(
        id=m["id"],
        email=m["email"],
        role=m["role"],
        status=m["status"],
        user_id=m.get("user_id"),
    )


@router.post("/share", response_model=ShareOut)
async def create_share(
    body: ShareCreateRequest,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> ShareOut:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    analysis = (
        client.table("analyses")
        .select("id")
        .eq("id", body.analysis_id)
        .eq("user_id", user.id)
        .limit(1)
        .execute()
    )
    if not analysis.data:
        raise HTTPException(status_code=404, detail="Analiz bulunamadı.")

    token = secrets.token_urlsafe(16)
    client.table("share_links").insert(
        {
            "analysis_id": body.analysis_id,
            "token": token,
            "role": body.role,
            "created_by": user.id,
            "expires_at": default_share_expires_at(),
        }
    ).execute()
    return ShareOut(
        token=token,
        role=body.role,
        analysis_id=body.analysis_id,
        url_path=f"/share/{token}",
    )


def _product_out(row: dict) -> ProductOut:
    return ProductOut(
        id=row["id"],
        name=row["name"],
        description=row.get("description") or "",
        created_at=row.get("created_at"),
        workspace_id=row.get("workspace_id"),
    )


@router.get("/{workspace_id}/products", response_model=list[ProductOut])
async def list_workspace_products(
    workspace_id: str,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> list[ProductOut]:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")
    _require_member(client, workspace_id, user.id)

    response = (
        client.table("products")
        .select("*")
        .eq("workspace_id", workspace_id)
        .order("created_at", desc=True)
        .execute()
    )
    return [_product_out(row) for row in (response.data or [])]


@router.post("/{workspace_id}/products", response_model=ProductOut)
async def link_product_to_workspace(
    workspace_id: str,
    body: ProductLinkRequest,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> ProductOut:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")
    _require_owner_or_editor(client, workspace_id, user.id)

    product = (
        client.table("products")
        .select("*")
        .eq("id", body.product_id)
        .eq("user_id", user.id)
        .limit(1)
        .execute()
    )
    if not product.data:
        raise HTTPException(status_code=404, detail="Ürün bulunamadı veya size ait değil.")

    response = (
        client.table("products")
        .update({"workspace_id": workspace_id})
        .eq("id", body.product_id)
        .eq("user_id", user.id)
        .execute()
    )
    if not response.data:
        raise HTTPException(status_code=500, detail="Ürün workspace'e bağlanamadı.")
    return _product_out(response.data[0])


def _require_member(client, workspace_id: str, user_id: str) -> None:
    owned = (
        client.table("workspaces")
        .select("id")
        .eq("id", workspace_id)
        .eq("owner_id", user_id)
        .limit(1)
        .execute()
    )
    if owned.data:
        return
    member = (
        client.table("workspace_members")
        .select("id")
        .eq("workspace_id", workspace_id)
        .eq("user_id", user_id)
        .eq("status", "active")
        .limit(1)
        .execute()
    )
    if not member.data:
        raise HTTPException(status_code=403, detail="Bu workspace’e erişiminiz yok.")


def _require_owner_or_editor(client, workspace_id: str, user_id: str) -> None:
    owned = (
        client.table("workspaces")
        .select("id")
        .eq("id", workspace_id)
        .eq("owner_id", user_id)
        .limit(1)
        .execute()
    )
    if owned.data:
        return
    member = (
        client.table("workspace_members")
        .select("role")
        .eq("workspace_id", workspace_id)
        .eq("user_id", user_id)
        .eq("status", "active")
        .limit(1)
        .execute()
    )
    if not member.data or member.data[0]["role"] not in ("owner", "editor"):
        raise HTTPException(status_code=403, detail="Davet için editor veya owner olmalısınız.")
