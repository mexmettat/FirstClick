# FirstClick

**FirstClick**, ürün fikirlerini gerçek kullanıcıya çıkmadan önce test etmeyi sağlayan AI destekli bir kullanıcı simülasyonu platformudur.

Slogan: **"Ürününü kullanıcı gözünden test et."**

## Mimari

| Katman | Teknoloji | Port |
|--------|-----------|------|
| **Frontend** | Next.js 14, TypeScript, Tailwind | `3000` |
| **Backend** | FastAPI, Python | `8000` |

Frontend yalnızca UI sunar. Tüm analiz mantığı, OpenAI entegrasyonu ve mock fallback **ayrı backend servisinde** çalışır.

```
Frontend (Next.js)  ──POST──▶  Backend (FastAPI)  ──▶  OpenAI / Mock
     :3000                         :8000
```

## Kurulum

```bash
cd firstclick
make install
```

### Backend ortam değişkenleri

`backend/.env` oluştur (`backend/.env.example` referans):

```bash
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

### Frontend ortam değişkenleri

`.env.local`:

```bash
NEXT_PUBLIC_API_BASE=http://127.0.0.1:8000
```

## Çalıştırma

İki ayrı terminal:

```bash
make run-backend   # http://127.0.0.1:8000
make run-frontend  # http://localhost:3000
```

API dokümantasyonu: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

## Backend yapısı

```
backend/
  app/
    main.py              # FastAPI uygulaması, CORS
    config.py            # Ortam ayarları
    constants.py         # Persona tanımları
    routers/
      analyze.py         # POST /api/v1/analyze
      health.py          # GET /health
    schemas/
      analysis.py        # Pydantic modelleri
    services/
      analyze.py         # Analiz orchestrator
      mock_analyzer.py   # Kişiselleştirilmiş mock
      openai_analyzer.py # OpenAI entegrasyonu
  requirements.txt
```

## Frontend yapısı

```
app/           # Sayfalar (landing, analyze, results)
components/    # UI bileşenleri
lib/api.ts     # Backend API client
types/         # TypeScript tipleri
```

## Gelecek geliştirmeler

- Multi-agent persona sistemi (backend servis katmanında)
- Supabase ile kullanıcı ve analiz geçmişi
- Analiz versiyon karşılaştırma
- Prototip / ekran görüntüsü yükleme
