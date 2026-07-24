from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException

from app.auth import AuthUser, get_current_user
from app.schemas.analysis import CustomPersonaCreate, CustomPersonaOut
from app.services.supabase_client import get_supabase

router = APIRouter(prefix="/personas", tags=["personas"])


def _out(row: dict) -> CustomPersonaOut:
    return CustomPersonaOut(
        id=row["id"],
        name=row["name"],
        traits=row.get("traits") or "",
        created_at=row.get("created_at"),
    )


@router.get("", response_model=list[CustomPersonaOut])
async def list_personas(user: Annotated[AuthUser, Depends(get_current_user)]) -> list[CustomPersonaOut]:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    response = (
        client.table("custom_personas")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", desc=True)
        .execute()
    )
    return [_out(row) for row in (response.data or [])]


@router.post("", response_model=CustomPersonaOut)
async def create_persona(
    body: CustomPersonaCreate,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> CustomPersonaOut:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    row = {
        "user_id": user.id,
        "name": body.name.strip(),
        "traits": body.traits.strip(),
    }
    response = client.table("custom_personas").insert(row).execute()
    if not response.data:
        raise HTTPException(status_code=500, detail="Persona oluşturulamadı.")
    return _out(response.data[0])


@router.delete("/{persona_id}")
async def delete_persona(
    persona_id: str,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> dict[str, bool]:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    response = (
        client.table("custom_personas")
        .delete()
        .eq("id", persona_id)
        .eq("user_id", user.id)
        .execute()
    )
    if not response.data:
        raise HTTPException(status_code=404, detail="Persona bulunamadı.")
    return {"ok": True}
