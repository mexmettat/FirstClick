from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException

from app.auth import AuthUser, get_current_user
from app.rag.knowledge import ingest_global_knowledge
from app.services.supabase_client import get_supabase

router = APIRouter(prefix="/knowledge", tags=["knowledge"])


@router.get("/status")
async def knowledge_status(
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> dict:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")
    response = (
        client.table("chunks")
        .select("id", count="exact")
        .eq("scope", "global")
        .eq("source_type", "knowledge")
        .limit(1)
        .execute()
    )
    count = response.count if response.count is not None else len(response.data or [])
    return {
        "globalChunks": count,
        "ready": bool(count and count > 0),
        "label": "FirstClick uzmanlık corpus’u",
    }


@router.post("/reseed")
async def reseed_knowledge(
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> dict:
    """Re-embed global knowledge (authenticated; uses service role client)."""
    try:
        stats = await ingest_global_knowledge(replace_all=True)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc
    return {
        "ok": True,
        "files": stats.get("_files", 0),
        "chunks": stats.get("_total_chunks", 0),
    }
