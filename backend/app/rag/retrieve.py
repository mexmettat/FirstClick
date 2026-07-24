"""Hybrid RAG retrieval: vector + keyword, user corpus + global knowledge, RRF fusion."""

from __future__ import annotations

import logging
from dataclasses import dataclass

from app.rag.embed import embed_query
from app.schemas.analysis import AnalysisFormData
from app.services.supabase_client import get_supabase

logger = logging.getLogger(__name__)


@dataclass
class RetrievedChunk:
    id: str
    content: str
    source_type: str
    citation: str
    score: float
    metadata: dict
    scope: str = "user"


def build_search_query(form: AnalysisFormData, persona_id: str | None = None) -> str:
    parts = [
        form.product_name,
        form.product_description,
        form.target_audience,
        form.core_features,
        form.differentiator,
        # Bias retrieval toward FirstClick knowledge topics
        "onboarding conversion pricing trust clarity drop-off activation",
    ]
    if persona_id:
        parts.append(persona_id.replace("-", " "))
    return " ".join(p for p in parts if p and p.strip())[:2200]


def _rrf_fuse(
    ranked_lists: list[list[dict]],
    *,
    k: int = 60,
) -> list[dict]:
    scores: dict[str, float] = {}
    items: dict[str, dict] = {}
    for ranked in ranked_lists:
        for rank, item in enumerate(ranked):
            item_id = str(item["id"])
            scores[item_id] = scores.get(item_id, 0.0) + 1.0 / (k + rank + 1)
            items[item_id] = item
    ordered = sorted(scores.items(), key=lambda pair: pair[1], reverse=True)
    return [{**items[item_id], "_rrf": score} for item_id, score in ordered]


def _diversify(chunks: list[RetrievedChunk], limit: int) -> list[RetrievedChunk]:
    """Keep mix of global kb + user sources; drop near-duplicate prefixes."""
    selected: list[RetrievedChunk] = []
    seen_prefixes: list[str] = []
    global_count = 0
    user_count = 0
    # Aim ~40% global knowledge, 60% user corpus when both exist
    max_global = max(2, limit // 2)

    for chunk in chunks:
        prefix = chunk.content[:120].lower()
        if any(prefix[:80] == seen[:80] for seen in seen_prefixes):
            continue
        if chunk.scope == "global" or chunk.source_type == "knowledge":
            if global_count >= max_global:
                continue
            global_count += 1
        else:
            user_count += 1
        selected.append(chunk)
        seen_prefixes.append(prefix)
        if len(selected) >= limit:
            break

    # If we under-filled because of caps, backfill
    if len(selected) < limit:
        selected_ids = {c.id for c in selected}
        for chunk in chunks:
            if chunk.id in selected_ids:
                continue
            prefix = chunk.content[:120].lower()
            if any(prefix[:80] == seen[:80] for seen in seen_prefixes):
                continue
            selected.append(chunk)
            seen_prefixes.append(prefix)
            if len(selected) >= limit:
                break
    return selected


def _to_retrieved(row: dict, rrf_score: float) -> RetrievedChunk:
    source_type = row.get("source_type") or "document"
    meta = row.get("metadata") or {}
    scope = row.get("scope") or ("global" if source_type == "knowledge" else "user")
    if source_type == "knowledge" or scope == "global":
        slug = meta.get("slug") or row.get("knowledge_slug") or meta.get("title") or "kb"
        citation = f"kb:{slug}"
    elif source_type == "analysis":
        citation = f"past:{(row.get('analysis_id') or row.get('id') or '')[:8]}"
    elif source_type == "web":
        host = (meta.get("url") or meta.get("title") or "web")[:40]
        citation = f"web:{host}:{str(row.get('id', ''))[:8]}"
    else:
        title = meta.get("title") or "doc"
        citation = f"doc:{title}:{str(row.get('id', ''))[:8]}"
    return RetrievedChunk(
        id=str(row["id"]),
        content=row.get("content") or "",
        source_type=source_type,
        citation=citation,
        score=float(rrf_score),
        metadata=meta,
        scope=scope,
    )


def _split_ranks(rows: list[dict]) -> tuple[list[dict], list[dict]]:
    vector_ranked = sorted(
        [r for r in rows if float(r.get("vector_score") or 0) > 0],
        key=lambda r: float(r.get("vector_score") or 0),
        reverse=True,
    )
    text_ranked = sorted(
        [r for r in rows if float(r.get("text_score") or 0) > 0],
        key=lambda r: float(r.get("text_score") or 0),
        reverse=True,
    )
    return vector_ranked, text_ranked


async def hybrid_retrieve(
    *,
    user_id: str,
    form: AnalysisFormData,
    product_id: str | None = None,
    persona_id: str | None = None,
    top_k: int = 10,
) -> list[RetrievedChunk]:
    client = get_supabase()
    if client is None:
        return []

    query_text = build_search_query(form, persona_id)
    if not query_text.strip():
        return []

    try:
        embedding = await embed_query(query_text)
    except Exception as exc:
        logger.warning("RAG embed failed, skipping retrieval: %s", exc)
        return []

    def fetch(*, scope: str, source_type: str | None, count: int) -> list[dict]:
        try:
            params = {
                "query_embedding": embedding,
                "query_text": query_text,
                "match_user_id": user_id,
                "match_product_id": product_id if scope == "user" else None,
                "match_source_type": source_type,
                "match_count": count,
                "match_scope": scope,
            }
            response = client.rpc("match_chunks", params).execute()
            return list(response.data or [])
        except Exception as exc:
            logger.warning("match_chunks failed (scope=%s type=%s): %s", scope, source_type, exc)
            return []

    # User corpus
    doc_rows = fetch(scope="user", source_type="document", count=top_k)
    web_rows = fetch(scope="user", source_type="web", count=top_k)
    analysis_rows = fetch(scope="user", source_type="analysis", count=top_k)
    # Our global knowledge
    kb_rows = fetch(scope="global", source_type="knowledge", count=top_k)

    lists: list[list[dict]] = []
    for rows in (doc_rows, web_rows, analysis_rows, kb_rows):
        v, t = _split_ranks(rows)
        if v:
            lists.append(v)
        if t:
            lists.append(t)

    if not lists:
        return []

    fused = _rrf_fuse(lists)
    retrieved = [_to_retrieved(row, float(row.get("_rrf") or 0)) for row in fused if row.get("content")]
    return _diversify(retrieved, top_k)


def format_rag_context(chunks: list[RetrievedChunk]) -> str:
    if not chunks:
        return ""
    lines = [
        "Retrieved Context (alıntılara dayan, uydurma):",
        "- [kb:…] = FirstClick uzmanlık bilgisi (bizim corpus)",
        "- [doc:…]/[web:…]/[past:…] = kullanıcının ürün corpus’u",
    ]
    for chunk in chunks:
        scope_label = "global-kb" if chunk.scope == "global" or chunk.source_type == "knowledge" else "user"
        lines.append(f"[{chunk.citation}] ({chunk.source_type}/{scope_label})\n{chunk.content}")
    return "\n\n".join(lines)
