from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException

from app.auth import AuthUser, get_current_user
from app.schemas.analysis import ProductCreate, ProductOut
from app.services.product_queries import list_accessible_products
from app.services.supabase_client import get_supabase
from app.services.workspace_access import get_workspace_roles, require_product_write

router = APIRouter(prefix="/products", tags=["products"])


def _product_out(row: dict) -> ProductOut:
    return ProductOut(
        id=row["id"],
        name=row["name"],
        description=row.get("description") or "",
        created_at=row.get("created_at"),
        workspace_id=row.get("workspace_id"),
    )


@router.get("", response_model=list[ProductOut])
async def list_products(user: Annotated[AuthUser, Depends(get_current_user)]) -> list[ProductOut]:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    rows = list_accessible_products(client, user.id)
    return [_product_out(row) for row in rows]


@router.post("", response_model=ProductOut)
async def create_product(
    body: ProductCreate,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> ProductOut:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    workspace_id = body.workspace_id
    if workspace_id:
        role = get_workspace_roles(client, user.id).get(workspace_id)
        if role not in ("owner", "editor"):
            raise HTTPException(status_code=403, detail="Bu workspace'e ürün ekleyemezsiniz.")

    payload: dict = {
        "user_id": user.id,
        "name": body.name,
        "description": body.description,
    }
    if workspace_id:
        payload["workspace_id"] = workspace_id

    response = client.table("products").insert(payload).execute()
    if not response.data:
        raise HTTPException(status_code=500, detail="Ürün oluşturulamadı.")
    return _product_out(response.data[0])
