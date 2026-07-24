"""Compare two analyses and persona follow-up Q&A."""

from __future__ import annotations

import json
import logging
import re

import httpx

from app.config import settings
from app.rag.retrieve import format_rag_context, hybrid_retrieve
from app.schemas.analysis import (
    AnalysisFormData,
    CompareResponse,
    FollowupRequest,
    FollowupResponse,
    ScoreDelta,
)

logger = logging.getLogger(__name__)

SCORE_KEYS = [
    ("overallScore", "Genel skor"),
    ("clarityScore", "Anlaşılabilirlik"),
    ("adoptionScore", "Kullanma isteği"),
    ("onboardingRiskScore", "Onboarding riski"),
    ("targetFitScore", "Hedef kitle uyumu"),
]


def _strip_json_fences(raw: str) -> str:
    cleaned = re.sub(r"```json\n?", "", raw)
    cleaned = re.sub(r"```\n?", "", cleaned).strip()
    return cleaned


async def _chat_json(
    prompt: str,
    *,
    max_tokens: int = 700,
    model: str | None = None,
    temperature: float = 0.5,
) -> dict | None:
    if not settings.openai_api_key:
        return None
    async with httpx.AsyncClient(timeout=90.0) as client:
        response = await client.post(
            "https://api.openai.com/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {settings.openai_api_key}",
                "Content-Type": "application/json",
            },
            json={
                "model": model or settings.openai_model,
                "temperature": temperature,
                "response_format": {"type": "json_object"},
                "max_tokens": max_tokens,
                "messages": [
                    {
                        "role": "system",
                        "content": "Ürün UX analisti olarak geçerli JSON yanıt ver.",
                    },
                    {"role": "user", "content": prompt},
                ],
            },
        )
    if response.status_code != 200:
        logger.error("OpenAI compare/followup error: %s %s", response.status_code, response.text)
        return None
    content = response.json().get("choices", [{}])[0].get("message", {}).get("content")
    if not content:
        return None
    try:
        return json.loads(_strip_json_fences(content))
    except Exception:
        return None


def compute_score_deltas(before: dict, after: dict) -> list[ScoreDelta]:
    deltas: list[ScoreDelta] = []
    for key, label in SCORE_KEYS:
        b = int(before.get(key) or 0)
        a = int(after.get(key) or 0)
        # Onboarding risk: lower is better — flip delta sign for "improvement"
        delta = b - a if key == "onboardingRiskScore" else a - b
        deltas.append(ScoreDelta(key=key, label=label, before=b, after=a, delta=delta))
    return deltas


async def compare_analyses(
    *,
    before_id: str,
    after_id: str,
    before_row: dict,
    after_row: dict,
) -> CompareResponse:
    before_result = before_row.get("result") or {}
    after_result = after_row.get("result") or {}
    before_form = before_row.get("form_data") or {}
    after_form = after_row.get("form_data") or {}

    deltas = compute_score_deltas(before_result, after_result)
    before_label = (
        f"{before_form.get('productName') or 'Önce'} · "
        f"{(before_row.get('created_at') or '')[:10]}"
    )
    after_label = (
        f"{after_form.get('productName') or 'Sonra'} · "
        f"{(after_row.get('created_at') or '')[:10]}"
    )

    prompt = f"""
İki FirstClick kullanıcı simülasyonu sonucunu karşılaştır. "Ne değişti?" sorusuna ürün ekibi için net cevap ver.

ÖNCE ({before_label}):
Skorlar: overall={before_result.get('overallScore')}, clarity={before_result.get('clarityScore')},
adoption={before_result.get('adoptionScore')}, onboardingRisk={before_result.get('onboardingRiskScore')},
targetFit={before_result.get('targetFitScore')}
Kör noktalar: {before_result.get('blindSpots')}
Çıkış noktaları: {before_result.get('dropOffPoints')}
Aksiyon: {before_result.get('actionPlan')}

SONRA ({after_label}):
Skorlar: overall={after_result.get('overallScore')}, clarity={after_result.get('clarityScore')},
adoption={after_result.get('adoptionScore')}, onboardingRisk={after_result.get('onboardingRiskScore')},
targetFit={after_result.get('targetFitScore')}
Kör noktalar: {after_result.get('blindSpots')}
Çıkış noktaları: {after_result.get('dropOffPoints')}
Aksiyon: {after_result.get('actionPlan')}

Yanıt SADECE JSON:
{{
  "improved": string[] (düzelen somut noktalar, max 5),
  "regressed": string[] (kötüleşen noktalar, max 5),
  "unchangedRisks": string[] (hâlâ duran riskler, max 5),
  "narrative": string (3-5 cümle, Türkçe),
  "recommendation": string (bir sonraki sprint için 1-2 cümle)
}}
"""
    data = await _chat_json(
        prompt,
        model=settings.openai_synthesis_model,
        max_tokens=800,
        temperature=0.4,
    )
    if not data:
        improved = [d.label for d in deltas if d.delta > 3]
        regressed = [d.label for d in deltas if d.delta < -3]
        data = {
            "improved": improved or ["Belirgin skor iyileşmesi yok"],
            "regressed": regressed or [],
            "unchangedRisks": (after_result.get("blindSpots") or [])[:3],
            "narrative": (
                f"Genel skor {before_result.get('overallScore')} → {after_result.get('overallScore')}. "
                "Detaylı AI anlatımı için OPENAI_API_KEY gerekir."
            ),
            "recommendation": "Zayıf skor alanına odaklanıp bir iterasyon daha test edin.",
        }

    return CompareResponse(
        before_id=before_id,
        after_id=after_id,
        before_label=before_label,
        after_label=after_label,
        score_deltas=deltas,
        improved=list(data.get("improved") or []),
        regressed=list(data.get("regressed") or []),
        unchanged_risks=list(data.get("unchangedRisks") or data.get("unchanged_risks") or []),
        narrative=str(data.get("narrative") or ""),
        recommendation=str(data.get("recommendation") or ""),
    )


async def answer_followup(
    *,
    user_id: str,
    body: FollowupRequest,
) -> FollowupResponse:
    form = AnalysisFormData(
        productName=body.product_name or "Ürün",
        productDescription=body.product_description or body.question,
        selectedPersonas=["skeptical"],
        productId=body.product_id,
    )
    chunks = []
    try:
        chunks = await hybrid_retrieve(
            user_id=user_id,
            form=form,
            product_id=body.product_id,
            top_k=6,
        )
    except Exception as exc:
        logger.warning("followup retrieve failed: %s", exc)

    rag = format_rag_context(chunks)
    prior = body.prior_persona or {}
    history_lines = []
    for turn in body.history[-8:]:
        who = "Kullanıcı" if turn.role == "user" else body.persona_name
        history_lines.append(f"{who}: {turn.content}")
    history_block = "\n".join(history_lines) if history_lines else "(önceki tur yok)"

    prompt = f"""
Sen FirstClick persona simülasyonundasın. Persona adın: "{body.persona_name}".
Önceki tepkin (özet):
- izlenim: {prior.get('firstImpression') or prior.get('first_impression') or '-'}
- kafa karışıklığı: {prior.get('confusion') or '-'}
- vazgeçme: {prior.get('dropOffReason') or prior.get('drop_off_reason') or '-'}

Önceki sohbet:
{history_block}

{rag}

Kullanıcının follow-up sorusu: {body.question}

Kurallar:
- Bu persona olarak "ben" diliyle cevapla
- Ürün dokümanı / web / geçmiş test bağlamına dayan; uydurma
- Önceki sohbeti hatırla; çelişme
- Metinde kullandığın kaynaklara [doc:…] / [web:…] / [past:…] / [kb:…] etiketi ekle
- Genel UX kuralı için [kb:…], ürün iddiası için kullanıcı corpus etiketleri kullan

JSON:
{{
  "answer": string,
  "citations": string[]
}}
"""
    data = await _chat_json(prompt, max_tokens=400)
    if not data:
        return FollowupResponse(
            answer=(
                f"({body.persona_name} olarak) Bu soruyu net cevaplamak için daha fazla ürün bağlamı lazım. "
                "Doküman veya web sayfası corpus’una ekleyip tekrar dene."
            ),
            persona_name=body.persona_name,
            citations=[],
            source="mock",
        )

    return FollowupResponse(
        answer=str(data.get("answer") or ""),
        persona_name=body.persona_name,
        citations=list(data.get("citations") or []),
        source="openai",
    )
