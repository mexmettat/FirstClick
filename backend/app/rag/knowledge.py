"""Ingest FirstClick global knowledge markdown into chunks (scope=global)."""

from __future__ import annotations

import logging
import re
import uuid
from pathlib import Path

from app.rag.chunking import chunk_text
from app.rag.embed import embed_texts
from app.services.supabase_client import get_supabase

logger = logging.getLogger(__name__)

KNOWLEDGE_DIR = Path(__file__).resolve().parents[2] / "knowledge"


def _slug_from_filename(name: str) -> str:
    base = Path(name).stem
    # 01-first-impression-10s -> first-impression-10s
    return re.sub(r"^\d+-", "", base)


def _category_from_filename(name: str) -> str:
    match = re.match(r"^(\d+)-", name)
    number = int(match.group(1)) if match else 0
    if number <= 50:
        return "foundation"
    if number <= 65:
        return "ux-product"
    if number <= 80:
        return "sector"
    if number <= 95:
        return "persona-research"
    return "growth-trust"


async def ingest_global_knowledge(
    *,
    knowledge_dir: Path | None = None,
    replace_all: bool = True,
) -> dict[str, int]:
    """Embed all markdown files under backend/knowledge into global chunks."""
    client = get_supabase()
    if client is None:
        raise RuntimeError("Supabase yapılandırılmamış.")

    root = knowledge_dir or KNOWLEDGE_DIR
    if not root.is_dir():
        raise RuntimeError(f"Knowledge dizini yok: {root}")

    files = sorted(root.glob("*.md"))
    if not files:
        raise RuntimeError(f"Knowledge markdown bulunamadı: {root}")

    if replace_all:
        client.table("chunks").delete().eq("scope", "global").eq("source_type", "knowledge").execute()

    stats: dict[str, int] = {}
    batch_contents: list[str] = []
    batch_meta: list[dict] = []

    for path in files:
        slug = _slug_from_filename(path.name)
        category = _category_from_filename(path.name)
        title = slug
        text = path.read_text(encoding="utf-8")
        # Prefer H1 as title
        for line in text.splitlines():
            if line.startswith("# "):
                title = line[2:].strip()
                break
        pieces = chunk_text(text, chunk_size=900, overlap=120)
        if not pieces:
            stats[slug] = 0
            continue
        for i, content in enumerate(pieces):
            batch_contents.append(content)
            batch_meta.append(
                {
                    "slug": slug,
                    "title": title,
                    "category": category,
                    "corpus": "firstclick-global",
                    "language": "tr",
                    "chunk_index": i,
                    "filename": path.name,
                }
            )
        stats[slug] = len(pieces)

    if not batch_contents:
        return stats

    # Embed in batches of 64
    embeddings: list[list[float]] = []
    step = 64
    for i in range(0, len(batch_contents), step):
        embeddings.extend(await embed_texts(batch_contents[i : i + step]))

    rows = []
    for content, embedding, meta in zip(batch_contents, embeddings, batch_meta):
        rows.append(
            {
                "id": str(uuid.uuid4()),
                "user_id": None,
                "product_id": None,
                "document_id": None,
                "analysis_id": None,
                "source_type": "knowledge",
                "scope": "global",
                "knowledge_slug": meta["slug"],
                "content": content,
                "embedding": embedding,
                "metadata": meta,
            }
        )

    # Insert in chunks of 100
    for i in range(0, len(rows), 100):
        client.table("chunks").insert(rows[i : i + 100]).execute()

    logger.info("Global knowledge ingested: %s files, %s chunks", len(files), len(rows))
    stats["_total_chunks"] = len(rows)
    stats["_files"] = len(files)
    return stats
