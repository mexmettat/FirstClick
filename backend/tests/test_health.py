def test_health_ok(client):
    response = client.get("/health")
    assert response.status_code == 200
    body = response.json()
    assert body["status"] == "ok"
    assert body["service"] == "firstclick-api"
    assert "openaiConfigured" in body
    assert "supabaseConfigured" in body
