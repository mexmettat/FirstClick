# AI-native ürünler sektör playbooku

Bu dosya FirstClick analizinde sektör paketi **AI-native ürünler** seçildiğinde ağırlık kazanır. Her bölüm bağımsız RAG parçası olarak retrieval edilebilir; bölüm kendi içinde sektör adını taşır. Uydurma istatistik, dönüşüm oranı veya kesin regülasyon hükmü yazılmaz. Heuristikler açıkça işaretlenir.

## Kapsam ve iş modeli bağlamı (AI-native ürünler)

AI-native ürünlerde çekirdek değer üretim veya otomasyon yapay zekâya dayanır; yan özellik AI rozeti yeterli değildir. Gelir usage/kredi, seat veya paket olabilir. Abartılı otonomi ile yardımcı araç dili ayrılmalıdır. Halüsinasyon, kaynak, insan kontrolü ve veri kullanımı trust merkezidir. Kanıtsız "10x" citation disiplinine aykırıdır. Bu playbook `37-ai-trust` ile birlikte okunur.

## İlk izlenim soruları (AI-native ürünler)

Hangi çıktı üretiliyor? İnsan denetimi nerede? Veri eğitiminde kullanılıyor mu? Kredi/usage net mi? Örnek çıktı gerçekçi mi? Gizlilik? Skeptical kaynak ister; busy ilk iyi çıktı; non-technical prompt korkusu; price-sensitive kredi şoku arar.

## Onboarding ve aktivasyon (AI-native ürünler)

Aktivasyon: ilk başarılı çıktı, kayıtlı şablon, paylaşım veya entegrasyon. Boş chat zayıf; örnek prompt güçlü. Uzun fine-tune early drop-off. Guardrail uyarıları bilgilendirici olmalı.

## Fiyat, güven ve uyum uyarıları (AI-native ürünler)

Kredi çarpanları, pahalı model sürprizi, "sınırsız" throttle. Eğitim verisi opt-out. KVKK ve kurumsal sınırlar. Tıbbi/hukuki/finansal AI'da sınır dili. Çocuk güvenliği.

## Persona tepkileri (AI-native ürünler)

Skeptical: kaynak yok, abartılı otonomi. Busy: yavaş/kötü ilk çıktı. Non-technical: prompt dayatması. Price-sensitive: kredi şoku. Security reviewer: veri akışı belirsiz. Student: akademik dürüstlük uyarısı yokluğu.

## Drop-off zaman çizelgesi örüntüleri (AI-native ürünler)

Hype landing → boş chat → zayıf çıktı → kredi paywall → gizlilik terk. Aşamalar: First generation, Refine, Export, Paywall.

## Corpus'ta aranacak kanıtlar (AI-native ürünler)

Örnek çıktı, citation UI, veri politikası, kredi pricing, model/sınır, insan review, güvenlik, örnek promptlar, admin. Çelişki: hiç hata yapmaz vs bilmeme yok.

## FirstClick skor etkileri (AI-native ürünler)

Clarity: çıktı türü (hype değil). Adoption: time-to-first-good-output. OnboardingRisk: boş chat/ağır kurulum. Trust: şeffaflık, veri, sınırlar.

## Aksiyon kontrol listesi (AI-native ürünler)

1) Çıktı odaklı hero. 2) Örnek promptlar. 3) İlk kaliteli çıktıyı hızlandır. 4) Citation. 5) Opt-out. 6) Kredi şeffaflığı. 7) Sınır dili. 8) İnsan kontrolü. 9) 10x abartıyı kırp. 10) Alıntıla.

## Time-to-first-good-output (AI-native ürünler)

AI-native üründe aha "hesap açıldı" değil, kullanıcıya göre yeterli ilk çıktıdır. Boş chat zayıf empty state'tir; örnek prompt + şablon + yeniden üret güçlü pattern. İlk çıktı generic veya hatalıysa adoption düşer. FirstClick kalite skoru uydurmaz; düzenleme kolaylığı ve örnek kalitesine bakar.

## Şeffaflık, veri ve sınırlar (AI-native ürünler)

Kaynak/citation, bilmeme ifadesi, veri eğitimi opt-out ve tehlike kategorileri trust omurgasıdır. "Hiç hata yapmaz / insan yerine geçer" kırmızı bayrak. Kredi çarpanları ve pahalı model sürprizi price-sensitive distrust. Tıbbi/hukuki/finansal kullanımda sınır dili zorunlu heuristic.

## Enterprise ve güvenlik (AI-native ürünler)

DPA, veri bölgesi, admin kontrol, prompt injection uyarısı security reviewer sorularıdır; docs yoksa eksik sinyal. Eval panosu müşteriye açıksa güçlü trust olabilir. Orkestrasyon/multi-agent jargonu ilk izlenimde confusion üretir; çıktı odaklı dil tercih et. Bu playbook `37-ai-trust` ile birlikte retrieval edilmelidir.

## İlk kaliteli çıktı ve empty state (AI-native ürünler)

AI-native üründe aktivasyon "kayıt" değil kullanıcıya göre yeterli ilk çıktıdır. Boş chat "bir şey sor" zayıf empty state'tir. Örnek promptlar, şablonlar, örnek girdi ve yeniden üret/düzenle güçlü pattern'lerdir. İlk çıktı generic veya hatalıysa adoption düşer. FirstClick otomatik kalite skoru uydurmaz; düzenleme kolaylığı, örnek kalitesi ve kaynak gösterme varlığına bakar.

Abartılı otonomi ("insan yerine geçer", "hiç hata yapmaz") distrust üretir. Yardımcı araç dili + sınır + bilmeme ifadesi daha güvenlidir. Kredi/usage çarpanları ve pahalı model sürprizi price-sensitive için kritiktir. Veri eğitimi opt-out ve kurumsal veri sınırları security reviewer sorularıdır.

## Sektörel sınırlar ve enterprise (AI-native ürünler)

Tıbbi, hukuki, finansal kullanımda sınır dili ve insan yönlendirme zorunlu heuristic'tir; yoksa trust↓. Prompt injection / güvenlik uyarısı docs'ta yoksa enterprise eksik sinyal. Eval/kalite panosu müşteriye açıksa olumlu trust. Multi-agent/orkestrasyon jargonu ilk izlenimde confusion üretir; çıktı odaklı hero tercih et. Bu playbook `37-ai-trust` ile birlikte retrieval edilmelidir.

## AI-native skor özeti

Clarity çıktı türü netliği, Adoption time-to-first-good-output, OnboardingRisk boş chat/ağır kurulum, Trust şeffaflık+veri+sınırlar+abartısız dil. Timeline: First generation, Refine, Cite/export, Paywall/credits, Admin controls.

## Prompt UX, değerlendirme ve maliyet kontrolü (AI-native ürünler)

Prompt kutusu tek başına onboarding değildir; değişkenler, stiller, negatif örnekler ve "neden bu çıktı" açıklaması adoption'ı destekler. Kullanıcı düzenlemesi (edit & regenerate) yoksa AI çıktısı kör güvene zorlar. Batch/job kuyruğu enterprise kullanımında progress ve iptal ister. Maliyet keşif (cost explorer) yoksa price-sensitive kredi şoku yaşar.

Model adı, sıcaklık/parametre ve versiyon gizlenmişse skeptical tekrarlanabilirlik sorar. Takım workspace'inde prompt paylaşımı permission modeli collaboration playbook ile kesişir. Çocuklara yönelik AI'da yaş gate ve güvenli içerik filtresi aranır. Analist benchmark liderliği iddiasını corpus kanıtı olmadan tekrarlamaz.

## İnsan-AI işbirliği deseni (AI-native ürünler)

İyi AI-native UX human-in-the-loop için açık adımlar sunar: öner → düzenle → onayla → dışa aktar. Otomatik gönder/otomatik yayın varsayılanı yüksek riskli alanlarda distrust. Çıktıya kaynak veya belirsizlik göstergesi eklemek trust'ı destekler. Takımda kimin prompt'u / kimin onayı audit için önemli olabilir.

Fiyatlandırmada "sınırsız" ile gizli TPM/throttle çelişkisi price-sensitive+skeptical birlikte yükseltir. Bölgesel model hosting vaadi enterprise security için kritikse docs karşılığı ara. FirstClick model leaderboard sırası uydurmaz; ürünün kendi eval iddiasını kanıtla eşleştirir.

## Analist için örnek bulgu cümleleri (AI-native ürünler)

Örnek: "Hero '[alıntı]' hiç hata yapmaz diyor; skeptical distrust; trust↓; sınır ve bilmeme dili ekle." Örnek: "Boş chat önerisiz; first-timer friction; First generation; onboardingRisk↑; örnek promptlar koy." Örnek: "Kredi çarpanı gizli; price-sensitive; Paywall/credits; trust↓; pricing'de model maliyetini göster."

İyi/zayıf: İyi — örnek prompt + düzenle/yeniden üret + citation + opt-out + kredi şeffaflığı. Zayıf — hype hero + boş chat + aha öncesi kredi duvarı + veri eğitimi belirsiz. Benchmark sırası uydurma. `37-ai-trust` ile birlikte cite et.

## Teşhis soru bankası (AI-native ürünler)

1) Çıktı türü hero'da net mi? 2) Örnek prompt var mı? 3) İlk çıktı düzenlenebiliyor mu? 4) Citation/kaynak var mı? 5) Veri opt-out var mı? 6) Kredi/model maliyeti şeffaf mı? 7) Sınır dili var mı? 8) İnsan onay adımı var mı? 9) Enterprise admin/DPA sinyali var mı? 10) Abartılı otonomi dili var mı? Kanıtsız benchmark yok.

## Drop-off senaryo matrisi ve skor bağlama (AI-native ürünler)

Senaryo A — non-technical: boş chat + prompt korkusu → onboardingRisk↑. Senaryo B — skeptical: hype + kaynak yok → trust↓. Senaryo C — price-sensitive: gizli kredi çarpanı → trust↓ adoption↓. Senaryo D — security reviewer: veri eğitimi belirsiz → enterprise friction. Benchmark uydurma yok.

Skor: Clarity çıktı türü; Adoption first-good-output; OnboardingRisk empty prompt deneyimi; Trust sınırlar+veri+citation+abartısız dil. Timeline: First generation / Refine / Cite-export / Credits / Admin. Öneriler: örnek prompt, düzenle, citation, opt-out, kredi tablosu, insan onay. `37-ai-trust` ile birlikte kullan.

## Corpus tarama checklist'i (AI-native ürünler)

İşaretle: çıktı odaklı hero; örnek prompt; düzenle/yeniden üret; citation; veri opt-out; kredi/model fiyatı; sınır dili; insan onay; admin/DPA; abartılı otonomi; eval panosu; güvenlik uyarısı. Var/yok/çelişkili. Çelişki: "hiç hata yapmaz" vs bilmeme yok. Benchmark uydurma yok. `37-ai-trust` ile çapraz oku.

## Antipattern ve düzeltme çiftleri (AI-native)

Antipattern → düzeltme çiftleri FirstClick öneri yazımını hızlandırır. Genel slogan → rol+sonuç cümlesi. Aha öncesi sert engel → değeri önce göster. Gizli ücret → erken kırılım. Belirsiz hata → eyleme dönük mikro kopya. Kanıtsız garanti → kaldır veya yöntem ekle. Boş durum → tek CTA + örnek. Vaad-UI çelişkisi → iki alıntıyı yan yana koyup skor düşür. AI-native paketinde bu çiftler yukarıdaki teşhis soruları ve checklist ile birlikte uygulanır; istatistik eklenmez.

## Kapanış: AI-native FirstClick uygulama notu

AI-native paketinde time-to-first-good-output, şeffaflık ve abartısız dil omurgadır. Boş chat ve gizli kredi maliyeti sık düşüş nedenidir. `37-ai-trust` ile birlikte retrieval et. Benchmark liderliği uydurma. Öneriler örnek prompt, citation, opt-out ve insan onay adımlarına bağlansın.

## Kullanıcı yolculukları (AI-native ürünler)

AI-native FirstClick yolculuğu "kayıt → chat"a indirgenmemelidir; aha ilk iyi çıktıdır. Bu playbook `37-ai-trust` ile birlikte okunur.

**Bireysel üretim yolu:** Hero (çıktı türü) → örnek prompt/şablon seç → ilk generation → düzenle/yeniden üret → cite/export → (opsiyonel) kayıt → kredi/paywall. Drop-off: hype hero, boş chat, zayıf ilk çıktı, aha öncesi kredi duvarı, kaynak yokluğu.

**Takım / workspace yolu:** Davet → izinler → paylaşılan prompt → onay/audit → admin politika. Permission belirsizse collaboration sürtünmesi.

**Enterprise güvenlik yolu:** SSO/admin → veri bölgesi/DPA docs → opt-out → model/hosting → eval. Docs yoksa eksik sinyal; güvenlik skoru uydurma.

**Otomasyon / batch yolu:** Job tanımla → kuyruk progress → iptal → sonuç inceleme → insan onayı → dış sisteme gönder. Otomatik yayın varsayılanı yüksek riskli alanda distrust.

Timeline: First generation, Refine, Cite/export, Paywall/credits, Admin controls, Human approval, Batch job.

## Güven ve drop-off sinyalleri matrisi (AI-native ürünler)

Trust↑: çıktı odaklı hero, örnek promptlar, citation/kaynak UI, bilmeme ifadesi, veri eğitimi opt-out, sınır dili (tıbbi/hukuki/finansal), human-in-the-loop adımları, kredi/model maliyet şeffaflığı, eval panosu (varsa), çocuk güvenliği sinyali.

Trust↓ / drop-off: "hiç hata yapmaz / insan yerine geçer", boş chat, generic hatalı ilk çıktı, gizli kredi çarpanı, "sınırsız" vs throttle çelişkisi, opt-out yokluğu, abartılı 10x, orkestrasyon jargonu ilk ekranda, otomatik gönder yüksek risk. Benchmark liderliği veya kalite skoru uydurma.

Zincir: hype landing → boş chat → zayıf çıktı → kredi paywall → gizlilik terk.

## Persona çatışmaları (AI-native ürünler)

- **Skeptical vs hype marketing:** Kaynak ve sınır ister; "otonom çalışan" dili distrust. Alıntı + sınır dili aksiyonu.
- **Busy vs time-to-first-good-output:** Hızlı işe yarar çıktı ister; uzun fine-tune veya boş chat adoption↓.
- **Non-technical vs prompt dayatması:** "İyi prompt yaz" korkusu; şablon/değişken UI heuristic.
- **Price-sensitive vs usage sürprizi:** Ucuz giriş, pahalı model çarpanı gizli → distrust. Cost explorer / çarpan tablosu.
- **Security reviewer vs tüketici onboarding:** DPA/veri akışı belirsiz enterprise'da eksik; tüketici akışına DPA dayatma — rol ayır.
- **Student vs akademik dürüstlük:** Uyarı yokluğu eksik sinyal; intihal oranı uydurma.
- **Otomasyon isteyen power user vs risk:** Power user otomatik gönderir; yüksek risk alanda onay şartı trust için gerekli heuristic.

## Kanıt ve alıntı disiplini (AI-native ürünler)

1) 10x, benchmark sırası, halüsinasyon oranı, tasarruf yüzdesi uydurma; corpus iddiasını alıntıla veya yazma.
2) Otonomi abartısı ile "bilmeme"/sınır UI çelişkisinde çift alıntı.
3) Veri eğitimi: opt-out veya politika linki var mı; yoksa eksik — "muhtemelen eğitiyor" spekülasyonu yok.
4) Kredi: model adı/çarpan görünürlüğü; "sınırsız" ile throttle metnini birlikte değerlendir.
5) Tıbbi/hukuki/finansal: sınır dili yoksa trust↓; yasal uygunluk hükmü yazma.
6) `37-ai-trust` ile çelişen bulgu üretme; birlikte cite et.
7) Bulgu: alıntı + persona + aşama + skor + aksiyon.

## Somut senaryolar (AI-native ürünler)

**Senaryo A — Hype otonomi:** Hero "insan yerine geçer, hiç hata yapmaz". Skeptical; trust↓; sınır+bilmeme+yardımcı araç dili.

**Senaryo B — Boş chat:** "Bir şey sor" only. First-timer/non-technical; First generation; onboardingRisk↑; 5 örnek prompt + şablon.

**Senaryo C — Aha öncesi paywall:** İlk çıktı öncesi kredi kartı. Adoption↓; Paywall; ücretsiz ilk iyi çıktı heuristic (vaat varsa corpus ile hizala).

**Senaryo D — Gizli çarpan:** UI "1 kredi = 1 istek"; pahalı model 20×. Price-sensitive; credits; çarpanı pricing'de göster.

**Senaryo E — Kaynaksız iddia:** Araştırma asistanı kaynak göstermiyor. Skeptical; Cite/export; citation UI.

**Senaryo F — Otomatik yayın:** Destek cevabını otomatik gönder varsayılan. Trust↓ yüksek risk; Human approval varsayılanı.

**Senaryo G — Enterprise docs boş:** "SOC-ready" marketing, DPA/veri bölgesi yok. Security reviewer; Admin; eksik sinyal veya vaadi kırp.

**Senaryo H — Jargon hero:** "Multi-agent orchestration mesh". Confusion; clarity↓; çıktı odaklı hero.

## Skor etkileri derinleştirme (AI-native ürünler)

- **Clarity:** Çıktı türü (metin, görsel, kod, özet, ajan görevi); hype değil sonuç.
- **Adoption:** Time-to-first-good-output; örnek kalitesi; edit/regenerate.
- **OnboardingRisk:** Boş chat, zorunlu fine-tune, aha öncesi ağır kurulum/paywall.
- **Trust:** Citation, sınırlar, opt-out, abartısız dil, human loop, kredi şeffaflığı, çocuk güvenliği.
- **Tough questions:** Kanıtsız 10x, "halüsinasyon yok", veri belirsizliği, sınırsız/throttle çelişkisi.

Eval panosu varsa trust↑ adayı; yok diye ceza uydurma — fırsat notu olabilir.

## Aksiyon tarifleri (AI-native ürünler)

1) **Çıktı hero:** "X üretir" + örnek çıktı görseli/metni; otonomi abartısını kırp.
2) **Örnek prompt paketi:** Rol bazlı 5+ şablon; değişken alanları.
3) **Edit loop:** Düzenle → yeniden üret → sürüm geçmişi (varsa).
4) **Citation:** Kaynak listesi veya "kaynak yok / emin değilim" durumu.
5) **Opt-out:** Eğitim verisi kontrolü + politika linki.
6) **Kredi şeffaflığı:** Model×çarpan tablosu; throttle "sınırsız" ile çelişmesin.
7) **Sınır dili:** Yüksek risk kategorilerde uyarı + insan yönlendirme.
8) **Human-in-the-loop:** Öner → düzenle → onayla → export; otomatik gönder opt-in.
9) **Cost explorer:** Tahmini kredi tüketimi job öncesi.
10) **Enterprise paket:** Admin, veri bölgesi, DPA linki — yoksa eksik sinyal yaz.
11) **Çocuk güvenliği:** Yaş gate / güvenli filtre sinyali ara.

## Kenar durumlar (AI-native ürünler)

- Batch job: progress+iptal yoksa enterprise friction.
- Model versiyon/sıcaklık gizli: skeptical tekrarlanabilirlik sorar.
- Prompt injection uyarısı docs'ta yoksa enterprise eksik sinyal — exploit yazma, var/yok de.
- Takım prompt paylaşımı permission modeli collaboration ile kesişir.
- Bölgesel hosting vaadi docs karşılığı ister.
- Akademik dürüstlük uyarısı öğrenci segmente hitap ediyorsa aranır.
- "Sınırsız" + gizli TPM: price-sensitive+skeptical birlikte.
- Yan özellik AI rozeti: çekirdek değer AI değilse sektör paketi yanlış seçilmiş olabilir — clarity notu.

## Genişletilmiş kontrol listesi (AI-native ürünler)

( ) Çıktı türü hero'da ( ) Örnek prompt/şablon ( ) İlk çıktı düzenlenebilir ( ) Citation/bilmeme ( ) Veri opt-out ( ) Kredi/model çarpan şeffaf ( ) Sınır dili yüksek risk ( ) İnsan onay adımı ( ) Admin/DPA/veri bölgesi sinyali ( ) Abartılı otonomi dili ( ) Aha öncesi paywall ( ) Batch progress/iptal ( ) Çocuk güvenliği sinyali ( ) `37-ai-trust` ile birlikte cite ( ) Benchmark/10x uydurulmadı ( ) Timeline aşama etiketleri. Eksik = bulunamadı; spekülasyon yok.
