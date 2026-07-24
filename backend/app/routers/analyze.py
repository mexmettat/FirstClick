from typing import Annotated
import json

from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse

from app.auth import AuthUser, get_current_user
from app.constants import VALID_PERSONA_IDS
from app.schemas.analysis import AnalysisFormData, AnalyzeResponse
from app.services.analyze import chunks_to_rag_sources, iter_analysis_events, persist_analysis, run_analysis
from app.services.supabase_client import get_supabase

router = APIRouter(prefix="/analyze", tags=["analyze"])


def _is_custom_persona_id(persona_id: str) -> bool:
    return persona_id.startswith("custom:")


async def _validate_personas(user_id: str, selected: list[str]) -> None:
    unknown = [p for p in selected if p not in VALID_PERSONA_IDS and not _is_custom_persona_id(p)]
    if unknown:
        raise HTTPException(status_code=400, detail="Geçersiz persona seçimi.")

    custom_ids = [p.removeprefix("custom:") for p in selected if _is_custom_persona_id(p)]
    if not custom_ids:
        return

    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    response = (
        client.table("custom_personas")
        .select("id")
        .eq("user_id", user_id)
        .in_("id", custom_ids)
        .execute()
    )
    found = {row["id"] for row in (response.data or [])}
    missing = [cid for cid in custom_ids if cid not in found]
    if missing:
        raise HTTPException(status_code=400, detail="Özel persona bulunamadı.")


@router.post("", response_model=AnalyzeResponse)
async def analyze_product(
    form: AnalysisFormData,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> AnalyzeResponse:
    await _validate_personas(user.id, form.selected_personas)

    result, source, rag_chunks = await run_analysis(form, user_id=user.id)
    rag_sources = chunks_to_rag_sources(rag_chunks)
    analysis_id = await persist_analysis(
        user_id=user.id,
        form=form,
        result=result,
        source=source,
        rag_sources=rag_sources,
    )

    return AnalyzeResponse(
        success=True,
        data=result,
        source=source,
        analysis_id=analysis_id,
        rag_sources=rag_sources,
    )


@router.post("/stream")
async def analyze_product_stream(
    form: AnalysisFormData,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> StreamingResponse:
    await _validate_personas(user.id, form.selected_personas)

    async def event_bytes():
        async for event in iter_analysis_events(form, user_id=user.id):
            yield (json.dumps(event, ensure_ascii=False) + "\n").encode("utf-8")

    return StreamingResponse(
        event_bytes(),
        media_type="application/x-ndjson",
        headers={
            "Cache-Control": "no-cache",
            "X-Accel-Buffering": "no",
        },
    )
