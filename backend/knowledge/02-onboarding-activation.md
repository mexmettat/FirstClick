# Onboarding ve aktivasyon (aha moment)

Onboarding risk skoru yüksekse genelde kurulum sürtünmesi vardır. Bu doküman FirstClick'in onboarding değerlendirme standardıdır.

## İlk başarı (time-to-value)
- İdeal: kayıt → ilk değer ≤ 5 dakika.
- "Empty state" bir görev vermeli: "İlk panonu oluştur", "İlk faturayı kes".
- Rehbersiz boş ekran = yüksek onboarding riski.
- Progress checklist (3–5 adım) busy-professional için motivasyon sağlar.
- Kart istemeden deneme (no credit card) price-sensitive ve student için kritik.

## Kurulum sürtünmesi
- Zorunlu alan sayısı ↑ → drop-off ↑.
- OAuth ile hızlı giriş iyi; ama sadece Google zorunluysa bazı kullanıcılar kaçar.
- Entegrasyon (Slack/Jira) ilk günde zorunluysa aha gecikir — opsiyonel tut.
- "Tek tıkla" vaadi varsa adım sayısı 1–3 olmalı; aksi halde citation'lı çelişki.

## Aktivasyon metrikleri (ürün dili)
- Aktivasyon olayı net tanımlı olmalı: "ilk sprint oluşturuldu", "ilk invite gönderildi".
- Invite loop: tek kullanıcı ürünlerde takım ürün vaadi varsa yalnız bırakılma hissi.
- Template / örnek veri: first-timer'ı hızlandırır.

## Persona × onboarding
- non-technical: adım adım wizard, tooltip, video.
- busy-professional: skip tour + hızlı yol.
- skeptical: "neden bu izni istiyorsunuz?" açıklaması.
- first-timer: jargon sözlüğü, örnek senaryo.

## Session timeline eşlemesi
Kurulum adımında takılma = friction high. Landing OK ama setup'ta kaybolma klasik pattern.

## Genişletilmiş uzman notları

] genel kuralı uygulanır. Persona tepkisinde CTA sürtünmesi timeline'a yazılır. Somut öneri: hero metnini tek cümleye indir, değer önerisi için görsel kanıt koy, CTA için mikro güvence ekle. Skor etkisi: clarity ve adoption landing kalitesine duyarlıdır; onboardingRisk değer önerisi eksikliğinde yükselir.

### Derinlik notu Onboarding-1
FirstClick analisti Onboarding alanında wizard, empty state ve aha moment sinyallerini birlikte okur. Ürün corpus'unda wizard vaadi varsa UI/empty state ile çelişki aranır; yoksa [kb] genel kuralı uygulanır. Persona tepkisinde aha moment sürtünmesi timeline'a yazılır. Somut öneri: wizard metnini tek cümleye indir, empty state için görsel kanıt koy, aha moment için mikro güvence ekle. Skor etkisi: clarity ve adoption onboarding kalitesine duyarlıdır; onboardingRisk empty state eksikliğinde yükselir.

### Derinlik notu Fiyat-1
FirstClick analisti Fiyat alanında freemium, trial ve seat sinyallerini birlikte okur. Ürün corpus'unda freemium vaadi varsa UI/trial ile çelişki aranır; yoksa [kb] genel kuralı uygulanır. Persona tepkisinde seat sürtünmesi timeline'a yazılır. Somut öneri: freemium metnini tek cümleye indir, trial için görsel kanıt koy, seat için mikro güvence ekle. Skor etkisi: clarity ve adoption fiyat kalitesine duyarlıdır; onboardingRisk trial eksikliğinde yükselir.

### Derinlik notu Güven-1
FirstClick analisti Güven alanında sosyal kanıt, KVKK ve case study sinyallerini birlikte okur. Ürün corpus'unda sosyal kanıt vaadi varsa UI/KVKK ile çelişki aranır; yoksa [kb] genel kuralı uygulanır. Persona tepkisinde case study sürtünmesi timeline'a yazılır. Somut öneri: sosyal kanıt metnini tek cümleye indir, KVKK için görsel kanıt koy, case study için mikro güvence ekle. Skor etkisi: clarity ve adoption güven kalitesine duyarlıdır; onboardingRisk KVKK eksikliğinde yükselir.

### Derinlik notu Persona-1
FirstClick analisti Persona alanında şüpheci, fiyat hassas ve yoğun profesyonel sinyallerini birlikte okur. Ürün corpus'unda şüpheci vaadi varsa UI/fiyat hassas ile çelişki aranır; yoksa [kb] genel kuralı uygulanır. Persona tepkisinde yoğun profesyonel sürtünmesi timeline'a yazılır. Somut öneri: şüpheci metnini tek cümleye indir, fiyat hassas için görsel kanıt koy, yoğun profesyonel için mikro güvence ekle. Skor etkisi: clarity ve adoption persona kalitesine duyarlıdır; onboardingRisk fiyat hassas eksikliğinde yükselir.

### Derinlik notu Aktivasyon-1
FirstClick analisti Aktivasyon alanında invite, retention ve paywall sinyallerini birlikte okur. Ürün corpus'unda invite vaadi varsa UI/retention ile çelişki aranır; yoksa [kb] genel kuralı uygulanır. Persona tepkisinde paywall sürtünmesi timeline'a yazılır. Somut öneri: invite metnini tek cümleye indir, retention için görsel kanıt koy, paywall için mikro güvence ekle. Skor etkisi: clarity ve adoption aktivasyon kalitesine duyarlıdır; onboardingRisk retention eksikliğinde yükselir.

### Derinlik notu Netlik-1
FirstClick analisti Netlik alanında jargon, fayda dili ve mikro kopya sinyallerini birlikte okur. Ürün corpus'unda jargon vaadi varsa UI/fayda dili ile çelişki aranır; yoksa [kb] genel kuralı uygulanır. Persona tepkisinde mikro kopya sürtünmesi timeline'a yazılır. Somut öneri: jargon metnini tek cümleye indir, fayda dili için görsel kanıt koy, mikro kopya için mikro güvence ekle. Skor etkisi: clarity ve adoption netlik kalitesine duyarlıdır; onboardingRisk fayda dili eksikliğinde yükselir.

### Derinlik notu B2B-1
FirstClick analisti B2B alanında ROI, S
