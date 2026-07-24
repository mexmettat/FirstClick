#!/usr/bin/env python3
"""Seed FirstClick global knowledge corpus into Supabase.

Usage (from backend/):
  .venv/bin/python -m scripts.seed_knowledge
"""

from __future__ import annotations

import asyncio
import logging
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")


async def main() -> int:
    from scripts.audit_knowledge import main as audit_knowledge

    print("Running knowledge quality gate...\n")
    if audit_knowledge() != 0:
        print("\nSeed aborted: corpus quality gate failed.")
        return 1

    from app.rag.knowledge import ingest_global_knowledge

    print("\nQuality gate passed. Starting embeddings...\n")
    stats = await ingest_global_knowledge(replace_all=True)
    total = stats.pop("_total_chunks", 0)
    files = stats.pop("_files", 0)
    print(f"\nSeeded {files} knowledge files → {total} global chunks\n")
    for slug, count in sorted(stats.items()):
        print(f"  {slug}: {count} chunks")
    return 0 if total > 0 else 1


if __name__ == "__main__":
    raise SystemExit(asyncio.run(main()))
