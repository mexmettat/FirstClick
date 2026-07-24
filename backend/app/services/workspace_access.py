"""Workspace membership and shared product access helpers."""

from __future__ import annotations

from fastapi import HTTPException


def get_workspace_roles(client, user_id: str) -> dict[str, str]:
    """workspace_id -> role (owner | editor | viewer)."""
    roles: dict[str, str] = {}
    owned = client.table("workspaces").select("id").eq("owner_id", user_id).execute()
    for row in owned.data or []:
        roles[row["id"]] = "owner"
    members = (
        client.table("workspace_members")
        .select("workspace_id, role")
        .eq("user_id", user_id)
        .eq("status", "active")
        .execute()
    )
    for row in members.data or []:
        ws_id = row["workspace_id"]
        if ws_id not in roles:
            roles[ws_id] = row["role"]
    return roles


def get_shared_product_ids(client, user_id: str) -> list[str]:
    workspace_ids = list(get_workspace_roles(client, user_id).keys())
    if not workspace_ids:
        return []
    response = (
        client.table("products")
        .select("id")
        .in_("workspace_id", workspace_ids)
        .execute()
    )
    return [row["id"] for row in (response.data or [])]


def _product_row(client, product_id: str) -> dict | None:
    response = (
        client.table("products")
        .select("id, user_id, workspace_id")
        .eq("id", product_id)
        .limit(1)
        .execute()
    )
    if not response.data:
        return None
    return response.data[0]


def can_read_product(client, user_id: str, product_id: str) -> bool:
    row = _product_row(client, product_id)
    if not row:
        return False
    if row.get("user_id") == user_id:
        return True
    ws_id = row.get("workspace_id")
    if not ws_id:
        return False
    return ws_id in get_workspace_roles(client, user_id)


def can_write_product(client, user_id: str, product_id: str) -> bool:
    row = _product_row(client, product_id)
    if not row:
        return False
    if row.get("user_id") == user_id:
        return True
    ws_id = row.get("workspace_id")
    if not ws_id:
        return False
    role = get_workspace_roles(client, user_id).get(ws_id)
    return role in ("owner", "editor")


def require_product_read(client, user_id: str, product_id: str) -> None:
    if not can_read_product(client, user_id, product_id):
        raise HTTPException(status_code=404, detail="Ürün bulunamadı.")


def require_product_write(client, user_id: str, product_id: str) -> None:
    if not can_write_product(client, user_id, product_id):
        raise HTTPException(status_code=404, detail="Ürün bulunamadı.")


def load_accessible_analysis(client, user_id: str, analysis_id: str) -> dict | None:
    response = (
        client.table("analyses")
        .select("*")
        .eq("id", analysis_id)
        .limit(1)
        .execute()
    )
    if not response.data:
        return None
    row = response.data[0]
    if row.get("user_id") == user_id:
        return row
    product_id = row.get("product_id")
    if product_id and can_read_product(client, user_id, product_id):
        return row
    return None


def list_accessible_analyses(client, user_id: str, *, limit: int = 50) -> list[dict]:
    own = (
        client.table("analyses")
        .select("id, form_data, result, source, created_at, product_id")
        .eq("user_id", user_id)
        .order("created_at", desc=True)
        .limit(limit)
        .execute()
    )
    rows = list(own.data or [])
    seen = {row["id"] for row in rows}

    shared_product_ids = get_shared_product_ids(client, user_id)
    if shared_product_ids:
        shared = (
            client.table("analyses")
            .select("id, form_data, result, source, created_at, product_id")
            .in_("product_id", shared_product_ids)
            .order("created_at", desc=True)
            .limit(limit)
            .execute()
        )
        for row in shared.data or []:
            if row["id"] not in seen:
                rows.append(row)
                seen.add(row["id"])

    rows.sort(key=lambda r: r.get("created_at") or "", reverse=True)
    return rows[:limit]
