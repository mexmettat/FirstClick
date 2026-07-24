#!/usr/bin/env python3
"""Smoke-test semantic retrieval against the seeded global knowledge corpus.

Usage (from backend/):
  .venv/bin/python -m scripts.test_knowledge_retrieval
"""

from __future__ import annotations

import asyncio
import uuid


CASES = [
    (
        "Mikrocopy CTA hata mesajı boş durum kullanıcıya sonraki adımı nasıl anlatmalı?",
        {"microcopy", "cta-microcopy", "empty-loading-error-states"},
    ),
    (
        "Fintech onboarding KYC ücret şeffaflığı güven ve ilk işlem aktivasyonu",
        {"fintech-playbook"},
    ),
    (
        "Kurumsal satın alma SSO SCIM audit log güvenlik incelemesi procurement",
        {"procurement", "security-privacy", "security-reviewer", "sales-led-b2b"},
    ),
    (
        "Erişilebilirlik klavye ekran okuyucu kontrast persona ve engelli kullanıcı deneyimi",
        {"accessibility-personas", "accessibility", "a11y"},
    ),
    (
        "Kanıt atıf kalitesi citation disiplin uydurma istatistik ve kaynak doğrulama",
        {"evidence-citation-quality", "citation-discipline"},
    ),
    (
        "Vaka çalışması bağlam müdahale sonuç metodoloji kanıt ve sosyal proof",
        {"case-studies", "social-proof"},
    ),
]


async def main() -> int:
    from app.rag.embed import embed_query
    from app.services.supabase_client import get_supabase

    client = get_supabase()
    if client is None:
        print("FAIL: Supabase yapılandırılmamış.")
        return 1

    failures: list[str] = []
    dummy_user_id = str(uuid.UUID(int=0))

    for query, expected in CASES:
        embedding = await embed_query(query)
        response = client.rpc(
            "match_chunks",
            {
                "query_embedding": embedding,
                "query_text": query,
                "match_user_id": dummy_user_id,
                "match_product_id": None,
                "match_source_type": "knowledge",
                "match_count": 10,
                "match_scope": "global",
            },
        ).execute()

        rows = list(response.data or [])
        ranked = sorted(
            rows,
            key=lambda row: max(
                float(row.get("vector_score") or 0),
                float(row.get("text_score") or 0),
            ),
            reverse=True,
        )
        slugs: list[str] = []
        for row in ranked:
            slug = (row.get("metadata") or {}).get("slug")
            if slug and slug not in slugs:
                slugs.append(slug)

        passed = bool(expected.intersection(slugs[:20]))
        status = "PASS" if passed else "FAIL"
        print(f"{status}: {query}")
        print(f"  top: {', '.join(slugs[:5])}")
        if not passed:
            failures.append(
                f"{query!r}: beklenen {sorted(expected)}, gelen {slugs[:20]}"
            )

    if failures:
        print(f"\nFAIL ({len(failures)}/{len(CASES)} retrieval case):")
        for failure in failures:
            print(f"  - {failure}")
        return 1

    print(f"\nPASS: {len(CASES)}/{len(CASES)} retrieval case başarılı.")
    return 0


if __name__ == "__main__":
    raise SystemExit(asyncio.run(main()))
