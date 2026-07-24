import asyncio
import json
import logging
import re
from collections.abc import AsyncIterator, Awaitable, Callable

import httpx

from app.config import settings
from app.constants import PERSONA_LABELS
from app.rag.retrieve import RetrievedChunk, format_rag_context
from app.schemas.analysis import AnalysisFormData, AnalysisResult, PersonaAnalysis

logger = logging.getLogger(__name__)


PERSONA_SCHEMA = """{
  "firstImpression": string (alıntı varsa metinde [doc:...] / [web:...] / [past:...] / [kb:...] etiketi kullan),
  "understood": string,
  "confusion": string,
  "likelihood": "Yüksek" | "Orta" | "Düşük",
  "dropOffReason": string,
  "suggestion": string,
  "citations": string[] (kullandığın citation etiketleri; kb = FirstClick uzmanlık bilgisi),
  "dropOffTimeline": [
    {"step": "Landing"|"CTA"|"Kurulum"|"Fiyat"|"Dashboard", "moment": string, "friction": "low"|"med"|"high"}
  ] (tam 4 adım; session replay hissi)
}"""


PERSONA_TRAITS: dict[str, str] = {
    "non-technical": "Teknik terimlere aşina değilsin, karmaşık arayüzler veya jargon seni hemen ürkütür. Bir şeyi kullanmak için önce birinin sana adım adım anlatması gerekir.",
    "student": "Bütçen çok kısıtlı, zamanının çoğu ders ve sınavlarla geçiyor. Fiyat/performans senin için her şeyden önce gelir. Karmaşık veya pahalı görünen şeylere hemen kapanırsın.",
    "busy-professional": "Zamanın son derece kısıtlı, dikkatin dağınık. Bir ürünü ilk 10 saniyede anlamazsan direkt çıkarsın. Verimlilik dışında hiçbir şey seni ikna etmez.",
    "price-sensitive": "Her harcamayı gözden geçirirsin, ücretsiz alternatifleri hep aklında tutarsın. Fiyat/değer dengesini net göremezsen vazgeçersin.",
    "skeptical": "Pazarlama diline ve abartılı vaatlere güvenmezsin. 'Bu gerçekten işe yarıyor mu' diye sorgularsın, somut kanıt ve detay istersin, boş sloganlardan rahatsız olursun.",
    "first-timer": "Bu kategoriden bir ürünü ilk kez deniyorsun, hiç önceki deneyimin yok. Basit ve yönlendirici olmayan her şey seni kaybeder.",
}

DEFAULT_TRAIT_TEMPLATE = (
    "'{persona}' profiline uygun tipik davranış, öncelik ve endişelere sahip bir kullanıcısın."
)


def _persona_label(persona_id: str, custom: dict[str, dict[str, str]] | None = None) -> str:
    if persona_id.startswith("custom:") and custom:
        info = custom.get(persona_id.removeprefix("custom:"))
        if info:
            return info.get("name") or persona_id
    return PERSONA_LABELS.get(persona_id, persona_id)


def _persona_trait(persona_id: str, custom: dict[str, dict[str, str]] | None = None) -> str:
    if persona_id.startswith("custom:") and custom:
        info = custom.get(persona_id.removeprefix("custom:"))
        if info:
            traits = (info.get("traits") or "").strip()
            name = info.get("name") or "Özel persona"
            if traits:
                return f"{name}: {traits}"
            return DEFAULT_TRAIT_TEMPLATE.format(persona=name)
    return PERSONA_TRAITS.get(
        persona_id.strip().lower(),
        DEFAULT_TRAIT_TEMPLATE.format(persona=_persona_label(persona_id, custom)),
    )


def _build_persona_prompt(
    persona_id: str,
    form: AnalysisFormData,
    rag_context: str = "",
    custom: dict[str, dict[str, str]] | None = None,
) -> str:
    label = _persona_label(persona_id, custom)
    trait = _persona_trait(persona_id, custom)
    rag_block = f"\n{rag_context}\n" if rag_context else ""
    return f"""
Sen FirstClick adlı ürün simülasyon platformunda tek bir kullanıcı personasısın: "{label}".

Karakterin:
{trait}

Kurallar:
- SADECE bu personanın bakış açısıyla konuş, genel/nötr bir "kullanıcı" gibi değil
- "Ben" dili kullan, ilk kişi ağzından gerçek bir iç ses gibi yaz
- Genel geçer, klişe ifadeler KESİNLİKLE YASAK: "kullanıcı dostu", "harika bir fikir", "innovatif çözüm", "pazar potansiyeli yüksek", "değer önerisi net değil" gibi boş şablonlar yazma
- Spesifik ol: ürün adını, somut özellik/cümle/fiyat/CTA veya rakip farkını doğrudan an; hangi detay seni ikna etti ya da caydırdı, onu belirt
- Kısa ve yoğun yaz, laf kalabalığı yapma; ama somut ürün detayı eksik bırakma
- Retrieved Context varsa ürün dokümanı, web sayfası, geçmiş test VE FirstClick uzmanlık bilgisine ([kb:…]) dayan; uydurma özellik uydurma
- Ürüne özel iddia için [doc:…]/[web:…]/[past:…]; genel UX/conversion kuralı için [kb:…] kullan
- Retrieved Context'ten bir cümleye/özelliğe tepki verirken metinde kısa alıntı yap ve hemen ardından [citation] etiketi koy
  Örn: Dokümanda "tek tıkla kurulum" yazıyor [doc:…] ama onboarding best-practice'ine göre 3 adımdan fazla olmamalı [kb:onboarding-activation].
- Kullandığın tüm citation etiketlerini citations dizisine de yaz (yoksa boş dizi)
{rag_block}
Ürün bilgileri:
- Ürün adı: {form.product_name}
- Ürün açıklaması: {form.product_description}
- Hedef kitle: {form.target_audience}
- Temel özellikler: {form.core_features}
- Rakiplerden farkı: {form.differentiator}

Bu ürünle ilk karşılaştığında "{label}" olarak ne düşünürsün, nerede tereddüt edersin, seni neyin ikna edeceğini yaz.

Yanıtı SADECE geçerli JSON olarak döndür, açıklama ekleme.

Şema:
{PERSONA_SCHEMA}
"""


SYNTHESIS_SCHEMA = """{
  "overallScore": number (0-100),
  "clarityScore": number (0-100),
  "adoptionScore": number (0-100),
  "onboardingRiskScore": number (0-100, higher = more risk),
  "targetFitScore": number (0-100),
  "blindSpots": string[] (exactly 5 items),
  "dropOffPoints": string[],
  "actionPlan": string[],
  "improvedPitch": string,
  "toughQuestions": string[] (exactly 5 items)
}"""


def _build_synthesis_prompt(
    form: AnalysisFormData,
    personas: list[PersonaAnalysis],
    rag_context: str = "",
) -> str:
    persona_summary = "\n".join(
        f"- {p.name}: izlenim=\"{p.first_impression}\" | kafa karışıklığı=\"{p.confusion}\" "
        f"| olasılık={p.likelihood} | çıkış nedeni=\"{p.drop_off_reason}\""
        for p in personas
    )
    rag_block = f"\n{rag_context}\n" if rag_context else ""
    return f"""
Sen FirstClick adlı ürün simülasyon platformunun kıdemli analiz motorusun.
Aşağıda farklı kullanıcı personalarından bağımsız olarak toplanmış gerçek tepkiler var.
Bu tepkileri sentezleyerek ürünün genelini değerlendir.
{rag_block}
Ürün bilgileri:
- Ürün adı: {form.product_name}
- Ürün açıklaması: {form.product_description}
- Hedef kitle: {form.target_audience}
- Temel özellikler: {form.core_features}
- Rakiplerden farkı: {form.differentiator}

Persona tepkileri:
{persona_summary}

Kurallar:
- Genel ve klişe ifadeler YASAK
- Skorları persona tepkilerindeki gerçek sinyallere dayandır (uydurma sayı verme)
- blindSpots, dropOffPoints ve toughQuestions persona tepkilerinden çıkan somut örüntülere dayansın
- Retrieved Context varsa doküman, web, geçmiş analiz ve FirstClick [kb:…] uzmanlık bilgisine atıf ederek somutlaştır; mümkünse [doc:…] / [web:…] / [past:…] / [kb:…] etiketleri kullan
- Kısa ama yoğun yaz

Yanıtı SADECE geçerli JSON olarak döndür, açıklama ekleme.

Şema:
{SYNTHESIS_SCHEMA}
"""


def _strip_json_fences(raw: str) -> str:
    cleaned = re.sub(r"```json\n?", "", raw)
    cleaned = re.sub(r"```\n?", "", cleaned).strip()
    return cleaned


async def _call_openai(
    client: httpx.AsyncClient,
    prompt: str,
    *,
    model: str | None = None,
    temperature: float = 0.8,
    max_tokens: int | None = None,
) -> dict | None:
    payload = {
        "model": model or settings.openai_model,
        "temperature": temperature,
        "response_format": {"type": "json_object"},
        "messages": [
            {
                "role": "system",
                "content": (
                    "Sen ürün stratejisi ve UX analizi uzmanısın. "
                    "Yanıtlarını her zaman geçerli JSON formatında ver."
                ),
            },
            {"role": "user", "content": prompt},
        ],
    }
    if max_tokens:
        payload["max_tokens"] = max_tokens

    try:
        response = await client.post(
            "https://api.openai.com/v1/chat/completions",
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {settings.openai_api_key}",
            },
            json=payload,
        )
    except Exception as exc:
        logger.exception("OpenAI request failed: %s", exc)
        return None

    if response.status_code != 200:
        logger.error("OpenAI API error: %s %s", response.status_code, response.text)
        return None

    content = response.json().get("choices", [{}])[0].get("message", {}).get("content")
    if not content:
        return None

    try:
        return json.loads(_strip_json_fences(content))
    except Exception:
        logger.warning("OpenAI response JSON parse edilemedi: %s", content[:300])
        return None


async def _analyze_persona(
    client: httpx.AsyncClient,
    persona_id: str,
    form: AnalysisFormData,
    rag_context: str = "",
    custom: dict[str, dict[str, str]] | None = None,
) -> PersonaAnalysis | None:
    prompt = _build_persona_prompt(persona_id, form, rag_context=rag_context, custom=custom)
    data = await _call_openai(
        client,
        prompt,
        model=settings.openai_model,
        max_tokens=800,
    )
    if not data:
        return None
    try:
        return PersonaAnalysis.model_validate({**data, "name": _persona_label(persona_id, custom)})
    except Exception:
        logger.warning("Persona '%s' için sonuç şemaya uymuyor: %s", persona_id, data)
        return None


async def analyze_with_openai(
    form: AnalysisFormData,
    rag_chunks: list[RetrievedChunk] | None = None,
    custom_personas: dict[str, dict[str, str]] | None = None,
    on_progress: Callable[[dict], Awaitable[None]] | None = None,
) -> AnalysisResult | None:
    if not settings.openai_api_key:
        return None

    async def emit(event: dict) -> None:
        if on_progress:
            await on_progress(event)

    personas = form.selected_personas[:6]
    rag_context = format_rag_context(rag_chunks or [])
    custom = custom_personas or {}
    total = len(personas)

    async with httpx.AsyncClient(timeout=120.0) as client:
        for index, persona_id in enumerate(personas, start=1):
            await emit(
                {
                    "type": "persona",
                    "status": "running",
                    "index": index,
                    "total": total,
                    "name": _persona_label(persona_id, custom),
                }
            )

        async def run_one(index: int, persona_id: str) -> tuple[int, PersonaAnalysis | None]:
            result = await _analyze_persona(
                client, persona_id, form, rag_context=rag_context, custom=custom
            )
            return index, result

        tasks = [
            asyncio.create_task(run_one(index, persona_id))
            for index, persona_id in enumerate(personas, start=1)
        ]
        by_index: dict[int, PersonaAnalysis | None] = {}
        for finished in asyncio.as_completed(tasks):
            index, persona_result = await finished
            by_index[index] = persona_result
            await emit(
                {
                    "type": "persona",
                    "status": "done",
                    "index": index,
                    "total": total,
                    "name": _persona_label(personas[index - 1], custom),
                    "ok": persona_result is not None,
                }
            )

        valid_personas = [p for p in (by_index.get(i) for i in range(1, total + 1)) if p is not None]
        if not valid_personas:
            return None

        await emit({"type": "synthesis", "status": "running"})
        synthesis_prompt = _build_synthesis_prompt(form, valid_personas, rag_context=rag_context)
        synthesis_data = await _call_openai(
            client,
            synthesis_prompt,
            model=settings.openai_synthesis_model,
            temperature=0.5,
            max_tokens=1600,
        )
        await emit({"type": "synthesis", "status": "done"})
        if not synthesis_data:
            return None

    try:
        return AnalysisResult.model_validate({**synthesis_data, "personas": valid_personas})
    except Exception:
        logger.warning("Sentez sonucu şemaya uymuyor: %s", synthesis_data)
        return None
