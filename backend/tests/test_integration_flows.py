from app.schemas.analysis import AnalysisFormData
from app.services.mock_analyzer import generate_mock_analysis


SAMPLE_FORM = AnalysisFormData(
    productName="TaskFlow",
    productDescription="Küçük ekipler için görev yönetimi",
    targetAudience="startup ekipleri",
    coreFeatures="kanban",
    differentiator="hızlı kurulum",
    selectedPersonas=["student", "skeptical"],
)


def test_analyze_endpoint_returns_mock_result(authed_client, monkeypatch):
    async def fake_run(form, user_id=None):
        return generate_mock_analysis(form), "mock", []

    async def fake_persist(**kwargs):
        return "analysis-test-123"

    monkeypatch.setattr("app.routers.analyze.run_analysis", fake_run)
    monkeypatch.setattr("app.routers.analyze.persist_analysis", fake_persist)

    response = authed_client.post(
        "/api/v1/analyze",
        json=SAMPLE_FORM.model_dump(by_alias=True),
    )
    assert response.status_code == 200
    body = response.json()
    assert body["success"] is True
    assert body["source"] == "mock"
    assert body["analysisId"] == "analysis-test-123"
    assert body["data"]["overallScore"] >= 0
    assert len(body["data"]["personas"]) == 2


def test_analyze_stream_complete_event(authed_client, monkeypatch):
    async def fake_iter(form, user_id=None):
        result = generate_mock_analysis(form)
        yield {"type": "stage", "message": "test"}
        yield {
            "type": "complete",
            "payload": {
                "success": True,
                "data": result.model_dump(by_alias=True),
                "source": "mock",
                "analysisId": "stream-id",
                "ragSources": [],
            },
        }

    monkeypatch.setattr("app.routers.analyze.iter_analysis_events", fake_iter)

    response = authed_client.post(
        "/api/v1/analyze/stream",
        json=SAMPLE_FORM.model_dump(by_alias=True),
    )
    assert response.status_code == 200
    lines = [line for line in response.text.strip().split("\n") if line]
    assert any('"type": "complete"' in line for line in lines)


def test_ab_analyze_returns_winner(authed_client, monkeypatch):
    async def fake_run(form, user_id=None):
        result = generate_mock_analysis(form)
        # Make pitch B score higher via longer description hash
        if "14 gün" in form.product_description:
            result.overall_score = 75
        else:
            result.overall_score = 55
        return result, "mock", []

    async def fake_persist(**kwargs):
        return "ab-id"

    monkeypatch.setattr("app.routers.ab_analyze.run_analysis", fake_run)
    monkeypatch.setattr("app.routers.ab_analyze.persist_analysis", fake_persist)

    response = authed_client.post(
        "/api/v1/analyze/ab",
        json={
            "productName": "TaskFlow",
            "pitchA": "Kısa pitch A metni yeterince uzun",
            "pitchB": "14 gün deneme ile güçlü pitch B metni",
            "selectedPersonas": ["student", "skeptical"],
        },
    )
    assert response.status_code == 200
    body = response.json()
    assert body["winner"] in ("A", "B", "tie")
    assert body["resultA"]["overallScore"] >= 0
    assert body["resultB"]["overallScore"] >= 0


def test_compare_endpoint_with_mocked_service(authed_client, monkeypatch):
    from app.schemas.analysis import CompareResponse, ScoreDelta

    async def fake_compare(**kwargs):
        return CompareResponse(
            before_id=kwargs["before_id"],
            after_id=kwargs["after_id"],
            before_label="Önce",
            after_label="Sonra",
            score_deltas=[
                ScoreDelta(key="overallScore", label="Genel", before=60, after=72, delta=12)
            ],
            improved=["Clarity arttı"],
            regressed=[],
            unchanged_risks=["Fiyat belirsizliği"],
            narrative="Pitch netleşti.",
            recommendation="Landing hero güncelle.",
        )

    def fake_load(client, user_id, analysis_id):
        return {
            "id": analysis_id,
            "user_id": user_id,
            "form_data": {"productName": "TaskFlow"},
            "result": {"overallScore": 72 if analysis_id == "after" else 60},
            "source": "mock",
        }

    monkeypatch.setattr("app.routers.analyses.compare_analyses", fake_compare)
    monkeypatch.setattr("app.routers.analyses.load_accessible_analysis", fake_load)

    response = authed_client.post(
        "/api/v1/analyses/compare",
        json={"beforeId": "before", "afterId": "after"},
    )
    assert response.status_code == 200
    body = response.json()
    assert body["beforeId"] == "before"
    assert body["afterId"] == "after"
    assert body["scoreDeltas"][0]["delta"] == 12
    assert body["narrative"]
