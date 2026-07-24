"""Document / analysis ingest into Storage + chunks table."""

from __future__ import annotations

import logging
import uuid
from io import BytesIO

from app.rag.chunking import chunk_text
from app.rag.embed import embed_texts
from app.schemas.analysis import AnalysisFormData, AnalysisResult
from app.services.supabase_client import get_supabase

logger = logging.getLogger(__name__)


def extract_text_from_bytes(data: bytes, filename: str, mime_type: str | None) -> str:
    name = (filename or "").lower()
    mime = (mime_type or "").lower()

    if name.endswith(".pdf") or "pdf" in mime:
        try:
            from pypdf import PdfReader

            reader = PdfReader(BytesIO(data))
            pages = [page.extract_text() or "" for page in reader.pages]
            return "\n".join(pages).strip()
        except Exception as exc:
            logger.exception("PDF parse failed: %s", exc)
            raise ValueError("PDF okunamadı.") from exc

    # md / txt / plain
    try:
        return data.decode("utf-8")
    except UnicodeDecodeError:
        return data.decode("latin-1", errors="ignore")


async def ingest_document_text(
    *,
    user_id: str,
    product_id: str,
    document_id: str,
    title: str,
    text: str,
    source_type: str = "document",
    source_url: str | None = None,
) -> int:
    client = get_supabase()
    if client is None:
        raise RuntimeError("Supabase yapılandırılmamış.")

    if source_type not in ("document", "web"):
        source_type = "document"

    pieces = chunk_text(text)
    if not pieces:
        return 0

    embeddings = await embed_texts(pieces)
    rows = []
    for i, (content, embedding) in enumerate(zip(pieces, embeddings)):
        meta: dict = {"title": title, "chunk_index": i}
        if source_url:
            meta["url"] = source_url
        rows.append(
            {
                "id": str(uuid.uuid4()),
                "user_id": user_id,
                "product_id": product_id,
                "document_id": document_id,
                "source_type": source_type,
                "scope": "user",
                "content": content,
                "embedding": embedding,
                "metadata": meta,
            }
        )

    # Delete previous chunks for this document then insert
    client.table("chunks").delete().eq("document_id", document_id).execute()
    client.table("chunks").insert(rows).execute()
    return len(rows)


async def delete_document_chunks(document_id: str) -> None:
    client = get_supabase()
    if client is None:
        return
    client.table("chunks").delete().eq("document_id", document_id).execute()


def _analysis_to_texts(form: AnalysisFormData, result: AnalysisResult) -> list[tuple[str, dict]]:
    texts: list[tuple[str, dict]] = []
    texts.append(
        (
            f"Ürün: {form.product_name}. Açıklama: {form.product_description}. "
            f"Hedef: {form.target_audience}. Özellikler: {form.core_features}. "
            f"Fark: {form.differentiator}",
            {"section": "product"},
        )
    )
    texts.append((f"Geliştirilmiş pitch: {result.improved_pitch}", {"section": "pitch"}))
    if result.blind_spots:
        texts.append(("Kör noktalar: " + "; ".join(result.blind_spots), {"section": "blind_spots"}))
    if result.drop_off_points:
        texts.append(("Çıkış noktaları: " + "; ".join(result.drop_off_points), {"section": "drop_off"}))
    if result.action_plan:
        texts.append(("Aksiyon planı: " + "; ".join(result.action_plan), {"section": "action_plan"}))
    for persona in result.personas:
        texts.append(
            (
                f"Persona {persona.name}: izlenim={persona.first_impression}; "
                f"kafa karışıklığı={persona.confusion}; olasılık={persona.likelihood}; "
                f"çıkış={persona.drop_off_reason}; öneri={persona.suggestion}",
                {"section": "persona", "persona": persona.name},
            )
        )
    return texts


async def ingest_analysis_result(
    *,
    user_id: str,
    product_id: str | None,
    analysis_id: str,
    form: AnalysisFormData,
    result: AnalysisResult,
) -> int:
    client = get_supabase()
    if client is None:
        return 0

    pieces: list[tuple[str, dict]] = []
    for content, meta in _analysis_to_texts(form, result):
        for piece in chunk_text(content, chunk_size=900, overlap=100) or [content]:
            pieces.append((piece, meta))

    if not pieces:
        return 0

    embeddings = await embed_texts([c for c, _ in pieces])
    rows = [
        {
            "id": str(uuid.uuid4()),
            "user_id": user_id,
            "product_id": product_id,
            "analysis_id": analysis_id,
            "source_type": "analysis",
            "scope": "user",
            "content": content,
            "embedding": embedding,
            "metadata": meta,
        }
        for (content, meta), embedding in zip(pieces, embeddings)
    ]
    client.table("chunks").insert(rows).execute()
    return len(rows)
