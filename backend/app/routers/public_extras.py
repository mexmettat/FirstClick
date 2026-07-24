from datetime import datetime, timedelta, timezone
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException

from app.auth import AuthUser, get_current_user
from app.schemas.analysis import AnalysisDetail, NotificationOut, PublicStatsOut
from app.services.demo_data import DEMO_ANALYSIS, DEMO_FORM
from app.services.share_links import assert_share_active
from app.services.supabase_client import get_supabase

router = APIRouter(tags=["public"])


@router.get("/api/v1/stats/public", response_model=PublicStatsOut)
async def public_lab_stats() -> PublicStatsOut:
    """Landing social proof — best-effort from analyses; falls back to demo numbers."""
    client = get_supabase()
    tests = 24
    avg = 63.0
    products = 11
    if client is not None:
        try:
            week_ago = (datetime.now(timezone.utc) - timedelta(days=7)).isoformat()
            response = (
                client.table("analyses")
                .select("result, product_id, created_at")
                .gte("created_at", week_ago)
                .limit(200)
                .execute()
            )
            rows = response.data or []
            if rows:
                tests = len(rows)
                scores = []
                product_ids = set()
                for row in rows:
                    result = row.get("result") or {}
                    score = result.get("overallScore")
                    if isinstance(score, (int, float)):
                        scores.append(float(score))
                    if row.get("product_id"):
                        product_ids.add(row["product_id"])
                if scores:
                    avg = round(sum(scores) / len(scores), 1)
                products = max(len(product_ids), 1)
        except Exception:
            pass

    return PublicStatsOut(
        tests_this_week=tests,
        avg_score_this_week=avg,
        products_tested=products,
        headline=f"Bu hafta {tests} lab testi · ortalama skor {avg:.0f}",
    )


@router.get("/api/v1/demo")
async def public_demo() -> dict:
    """Girişsiz örnek analiz — conversion ‘vay’ anı."""
    return {
        "success": True,
        "source": "demo",
        "formData": DEMO_FORM,
        "data": DEMO_ANALYSIS,
        "ragSources": [
            {
                "citation": "kb:onboarding-activation",
                "sourceType": "knowledge",
                "scope": "global",
                "title": "Onboarding ve aktivasyon",
                "category": "foundation",
                "excerpt": "İlk oturumda tek net sonuç, boş durumda örnek veri ve aktivasyon olayı tanımı adoption için kritik sinyallerdir.",
            },
            {
                "citation": "doc:guide:demo01",
                "sourceType": "document",
                "scope": "user",
                "title": "Ürün kılavuzu",
                "excerpt": "Tek tıkla kurulum — 2 dakikada sprint panosu.",
            },
        ],
        "analysisId": "demo-public",
    }


@router.get("/api/v1/share/{token}", response_model=AnalysisDetail)
async def get_shared_analysis(token: str) -> AnalysisDetail:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    link = (
        client.table("share_links")
        .select("*")
        .eq("token", token)
        .limit(1)
        .execute()
    )
    if not link.data:
        raise HTTPException(status_code=404, detail="Paylaşım linki geçersiz.")
    row_link = link.data[0]
    assert_share_active(row_link.get("expires_at"))
    share_role = row_link.get("role") or "viewer"

    analysis = (
        client.table("analyses")
        .select("*")
        .eq("id", row_link["analysis_id"])
        .limit(1)
        .execute()
    )
    if not analysis.data:
        raise HTTPException(status_code=404, detail="Analiz bulunamadı.")
    row = analysis.data[0]
    return AnalysisDetail(
        id=row["id"],
        form_data=row.get("form_data") or {},
        result=row.get("result") or {},
        source=row.get("source") or "mock",
        rag_sources=row.get("rag_sources") or [],
        created_at=row.get("created_at"),
        product_id=row.get("product_id"),
        share_role=share_role,
        read_only=share_role == "viewer",
    )


@router.get("/api/v1/notifications", response_model=list[NotificationOut])
async def list_notifications(
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> list[NotificationOut]:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")

    # Generate soft retest reminders for stale products
    await _ensure_retest_reminders(client, user.id)

    response = (
        client.table("notifications")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", desc=True)
        .limit(20)
        .execute()
    )
    return [
        NotificationOut(
            id=row["id"],
            kind=row.get("kind") or "info",
            title=row["title"],
            body=row.get("body") or "",
            href=row.get("href"),
            read=bool(row.get("read")),
            created_at=row.get("created_at"),
        )
        for row in (response.data or [])
    ]


@router.post("/api/v1/notifications/{notification_id}/read")
async def mark_read(
    notification_id: str,
    user: Annotated[AuthUser, Depends(get_current_user)],
) -> dict[str, bool]:
    client = get_supabase()
    if client is None:
        raise HTTPException(status_code=503, detail="Supabase yapılandırılmamış.")
    client.table("notifications").update({"read": True}).eq("id", notification_id).eq(
        "user_id", user.id
    ).execute()
    return {"ok": True}


async def _ensure_retest_reminders(client, user_id: str) -> None:
    week_ago = (datetime.now(timezone.utc) - timedelta(days=7)).isoformat()
    products = (
        client.table("products")
        .select("id, name, last_tested_at")
        .eq("user_id", user_id)
        .execute()
    )
    for p in products.data or []:
        last = p.get("last_tested_at")
        stale = last is None or last < week_ago
        if not stale:
            continue
        existing = (
            client.table("notifications")
            .select("id")
            .eq("user_id", user_id)
            .eq("kind", "retest")
            .ilike("href", f"%{p['id']}%")
            .eq("read", False)
            .limit(1)
            .execute()
        )
        if existing.data:
            continue
        client.table("notifications").insert(
            {
                "user_id": user_id,
                "kind": "retest",
                "title": f"{p['name']}: tekrar ölçme zamanı",
                "body": "Pitch’i değiştirip aynı personalarla tekrar test edin — skor farkı görünür.",
                "href": f"/analyze?productId={p['id']}&retest=1",
                "read": False,
            }
        ).execute()

    # Weekly lab summary (one unread max)
    summary = (
        client.table("notifications")
        .select("id")
        .eq("user_id", user_id)
        .eq("kind", "weekly")
        .eq("read", False)
        .limit(1)
        .execute()
    )
    if not summary.data:
        analyses = (
            client.table("analyses")
            .select("id, result")
            .eq("user_id", user_id)
            .gte("created_at", week_ago)
            .execute()
        )
        rows = analyses.data or []
        if rows:
            scores = [
                r["result"].get("overallScore")
                for r in rows
                if isinstance((r.get("result") or {}).get("overallScore"), (int, float))
            ]
            avg = round(sum(scores) / len(scores), 0) if scores else 0
            client.table("notifications").insert(
                {
                    "user_id": user_id,
                    "kind": "weekly",
                    "title": "Haftalık lab özeti",
                    "body": f"Bu hafta {len(rows)} test · ortalama skor {avg:.0f}. Karşılaştırma lab’ına bakın.",
                    "href": "/compare",
                    "read": False,
                }
            ).execute()
