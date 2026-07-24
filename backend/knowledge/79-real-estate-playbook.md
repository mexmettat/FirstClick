# Gayrimenkul sektör playbooku

Bu dosya FirstClick analizinde sektör paketi **gayrimenkul / real estate** seçildiğinde ağırlık kazanır. Her bölüm bağımsız RAG parçası olarak retrieval edilebilir; bölüm kendi içinde sektör adını taşır. Uydurma istatistik, dönüşüm oranı veya kesin regülasyon hükmü yazılmaz. Heuristikler açıkça işaretlenir.

## Kapsam ve iş modeli bağlamı (gayrimenkul / real estate)

Gayrimenkul ürünleri ilan portalı, aracı CRM, sanal tur, kredi bağlama, proptech yönetim veya kiralama operasyonu olabilir. Gelir ilan ücreti, lead, abonelik veya komisyon olabilir. Güven (doğrulanmış/güncel ilan, ajan kimliği) ve arama kalitesi öne çıkar. Alıcı–satıcı/kiracı–ev sahibi iki taraflılığı varsa rol ayrımı gerekir. "Garantili getiri" distrust üretir.

## İlk izlenim soruları (gayrimenkul / real estate)

Satılık/kiralık/proje mi? Coğrafya dürüst mü? İlan güncelliği? Ajans mı sahibi mi? Ücret kimden? Kredi aracı? Skeptical sahte ilan; price-sensitive aidat; busy hızlı filtre ister.

## Onboarding ve aktivasyon (gayrimenkul / real estate)

Alıcı: kayıtlı arama, mesaj, randevu. Emlakçı: ilan, lead yanıtı. Ağır ajan kaydı early drop-off. Boş harita zayıf likidite algısı — oran uydurma yok.

## Fiyat, güven ve uyum uyarıları (gayrimenkul / real estate)

Aidat ve ek maliyet şeffaflığı. Rozet anlamı. KVKK lead paylaşımı. ROI abartısı kırmızı bayrak. İlan yenileme ücreti net olmalı.

## Persona tepkileri (gayrimenkul / real estate)

First-timer: süreç korkusu. Skeptical: stock foto. Busy: geri aranmayan form. Price-sensitive: gizli komisyon. Agent: lead kalitesi belirsiz.

## Drop-off zaman çizelgesi örüntüleri (gayrimenkul / real estate)

Filtre karmaşası → eski ilan → üyelikli iletişim → yanıtsız lead. Aşamalar: Search, Listing, Contact, Agent onboarding.

## Corpus'ta aranacak kanıtlar (gayrimenkul / real estate)

Filtre, harita, ilan tarihi, doğrulama, ücret, kredi calculator, ajan profili, sanal tur, KVKK, kat planı.

## FirstClick skor etkileri (gayrimenkul / real estate)

Clarity: işlem tipi+coğrafya. Adoption: arama→iletişim. OnboardingRisk: ağır ajan kurulumu. Trust: güncellik+doğrulama.

## Aksiyon kontrol listesi (gayrimenkul / real estate)

1) Satılık/kiralık net. 2) İlan tarihi. 3) Aidat/ek maliyet. 4) Doğrulama tanımı. 5) İletişim sürtünmesini azalt. 6) ROI abartısını kırp. 7) Boş harita yönetimi. 8) Ajan yanıt yolu. 9) KVKK. 10) Alıntıla.

## İlan güveni ve güncellik (gayrimenkul / real estate)

Gayrimenkulde trust büyük ölçüde ilan güncelliği, tekrarlayan ilan kontrolü ve doğrulama rozetinin anlamına bağlıdır. "Yeni" etiketi tarihsizse zayıf. Stock foto şüphesi skeptical toughQuestions üretir. FirstClick sahte ilan oranı uydurmaz; tarih/doğrulama UI'sına bakar.

## Arama → iletişim sürtünmesi (gayrimenkul / real estate)

Zorunlu üyelik + zorunlu telefon her mesajda busy alıcıyı iter. Progressive contact heuristic. Aidat ve ek maliyet PDP'de yoksa price-sensitive distrust. Yatırım ROI garantisi fintech abartısı gibi işler — kırp veya kanıtla.

## Ajan / mal sahibi onboarding (gayrimenkul / real estate)

Ağır ajan kaydı early drop-off. Lead kalitesi belirsizse economic buyer itiraz eder. Yanıt SLA vaadi yoksa alıcı hayaletleme algısı oluşur; oran yazma. Kredi ön onay üçüncü parti ise ilişki açık olmalıdır. Kat planı mobilde okunaksızsa vaad-UI çelişkisi.

## İlan güveni ve arama kalitesi (gayrimenkul / real estate)

Gayrimenkulde trust büyük ölçüde ilan güncelliği, tekrarlayan ilan kontrolü ve doğrulama rozetinin açık anlamına bağlıdır. "Yeni / fırsat" tarihsizse zayıf sinyal. FirstClick sahte ilan oranı uydurmaz. Stock foto ve gerçek cephe uyumsuzluğu skeptical toughQuestions üretir. Aidat, tapu/masraf iması ve "fiyata dahil değil" kalemleri PDP'de yoksa price-sensitive distrust.

Arama filtreleri aşırı karmaşık veya sonuçlar alakasızsa busy alıcı terk eder — precision metriği yok, empty/çok gürültülü sonuç hallerini nitel yaz. Zorunlu üyelik + telefon her iletişimde progressive disclosure'a aykırı olabilir. Yatırım "garantili getiri" dili kırmızı bayrak.

## Ajan/mal sahibi ve lead gerilimi (gayrimenkul / real estate)

Ağır ajan kaydı early drop-off. Lead kalitesi belirsizse economic buyer itiraz eder. Alıcı "hemen soru sor", ajan "kaliteli lead" ister; zorunlu telefon her iki tarafı da yorabilir. Yanıt yolu/SLA vaadi yoksa hayaletleme algısı — oran yazma. Kredi ön onay üçüncü parti ise ilişki açıklanmalıdır. Kat planı mobilde okunaksızsa vaad-UI çelişkisi. Proje teslim tarihi güncellenmiyorsa distrust.

## Gayrimenkul skor özeti

Clarity işlem tipi+coğrafya, Adoption arama→iletişim, OnboardingRisk ajan kurulumu, Trust güncellik+doğrulama+maliyet şeffaflığı. Timeline: Search, Listing detail, Contact, Agent onboarding, Financing CTA.

## Kiralama operasyonu ve proptech yönetim (gayrimenkul / real estate)

Kiralık odaklı ürünlerde sözleşme, depozito, bakım talebi ve ödeme hatırlatması aktivasyon sonrası güveni etkiler. "Dijital sözleşme" vaadi imza akışı olmadan çelişir. Site/apartman yönetiminde sakin uygulaması ile yönetici paneli karışmamalıdır. Aidat borcu gösterimi KVKK/şeffaflık dengesinde amaç metni ister; hukuki hüküm yok.

Yeni proje (off-plan) satışında teslim tarihi, yapı ruhsatı ve ödeme planı güncelliği trust omurgasıdır. Sanal tur vaadi düşük kaliteli panora ile çelişiyorsa adoption zayıflar. Ekspertiz/kredi entegrasyonu üçüncü parti ise marka ilişkisi açık yazılmalıdır.

## Harita, mahalle ve karar desteği (gayrimenkul / real estate)

Mahalle skoru, okul, ulaşım katmanları karar desteğidir; metodoloji yoksa skeptical "ne ölçülüyor?" sorar. FirstClick mahalle kalitesi ölçmez. Isı haritası vaadi boş pinlerle çelişmesin. Favori karşılaştırma tablosu (fiyat m², aidat, oda) yoksa busy alıcı sürtünür. Mortgage calculator varsayımları (faiz, vade) görünür olmalıdır; finansal tavsiye yazma.

Emlakçı CRM'de otomatik lead atama kuralları belirsizse iç friction. Toplu ilan giriş (XML/portal sync) vaadi hata raporu olmadan zayıf. Analist portal market share uydurmaz.

## Analist için örnek bulgu cümleleri (gayrimenkul / real estate)

Örnek: "İlan '[alıntı]' tarihsiz 'yeni' rozeti; skeptical distrust; Listing; trust↓; güncelleme tarihi ekle." Örnek: "İletişim formu üyelik+telefon zorunlu; busy friction; Contact; adoption↓; progressive contact." Örnek: "ROI 'garantili' dili; distrust; Financing CTA; iddiayı kırp veya yöntem ekle."

İyi/zayıf: İyi — ilan tarihi + aidat + doğrulama tanımı + okunaklı kat planı. Zayıf — stock foto + gizli komisyon + yanıtsız lead formu. Sahte ilan oranı uydurma. Alıcı/ajan timeline etiketleri kullan.

## Teşhis soru bankası (gayrimenkul / real estate)

1) Satılık/kiralık/proje net mi? 2) İlan tarihi var mı? 3) Aidat görünüyor mu? 4) Doğrulama neyi doğruluyor? 5) İletişim progressive mi? 6) ROI garantisi var mı? 7) Kat planı okunaklı mı? 8) Ajan yanıt yolu var mı? 9) Kredi CTA üçüncü parti mi? 10) KVKK lead paylaşımı açık mı? Sinyal yoksa yaz.

## Drop-off senaryo matrisi ve skor bağlama (gayrimenkul / real estate)

Senaryo A — ilk kez alıcı: tarihsiz ilan + gizli aidat → trust↓. Senaryo B — busy alıcı: zorunlu telefon formu → adoption↓. Senaryo C — ajan: ağır kayıt + belirsiz lead → onboardingRisk↑. Senaryo D — yatırımcı: garantili ROI dili → skeptical distrust. Sahte ilan oranı uydurma.

Skor: Clarity işlem tipi+coğrafya; Adoption arama→iletişim; OnboardingRisk ajan kurulumu; Trust güncellik+doğrulama+maliyet. Timeline: Search / Listing / Contact / Agent onboarding / Financing. Öneriler: tarih göster, aidat yaz, progressive contact, ROI kırp, kat planı okunaklılığı.

## Corpus tarama checklist'i (gayrimenkul / real estate)

İşaretle: işlem tipi; coğrafya; ilan tarihi; aidat; doğrulama tanımı; iletişim alanları; ROI dili; kat planı; ajan profili; lead yanıt yolu; kredi CTA ilişkisi; KVKK; harita pinleri; sanal tur. Var/yok/çelişkili. Çelişki: "doğrulanmış" belirsiz rozet. Sahte ilan oranı yok. Alıcı/ajan etiketleri kullan.

## Antipattern ve düzeltme çiftleri (gayrimenkul)

Antipattern → düzeltme çiftleri FirstClick öneri yazımını hızlandırır. Genel slogan → rol+sonuç cümlesi. Aha öncesi sert engel → değeri önce göster. Gizli ücret → erken kırılım. Belirsiz hata → eyleme dönük mikro kopya. Kanıtsız garanti → kaldır veya yöntem ekle. Boş durum → tek CTA + örnek. Vaad-UI çelişkisi → iki alıntıyı yan yana koyup skor düşür. gayrimenkul paketinde bu çiftler yukarıdaki teşhis soruları ve checklist ile birlikte uygulanır; istatistik eklenmez.

## Kapanış: gayrimenkul FirstClick uygulama notu

Gayrimenkul paketinde güncellik, maliyet şeffaflığı ve iletişim sürtünmesi omurgadır. ROI garantisi ve belirsiz rozet distrust üretir. Alıcı ile ajan yollarını ayır. Sahte ilan istatistiği yok. Öneriler tarih, aidat, progressive contact ve okunaklı plan üzerine kurulsun.

## Persona toughQuestions örnekleri (gayrimenkul / real estate)

Örnek sorular: "İlan en son ne zaman güncellendi?", "Aidat ve ek maliyetler fiyata dahil mi?", "Doğrulanmış rozeti neyi kapsıyor?", "Mesaj için telefon zorunlu mu?". Cevap yoksa sinyal eksik; piyasa fiyat endeksi uydurma.

## Kullanıcı yolculukları (gayrimenkul / real estate)

Gayrimenkulde alıcı/kiracı, satıcı/mal sahibi, ajan ve (varsa) yönetici yolları ayrılır.

**Alıcı / kiracı yolu:** Coğrafya+işlem tipi seçimi → filtre/harita → ilan detayı (tarih, aidat, doğrulama) → iletişim (progressive) → randevu/mesaj → (opsiyonel) kredi calculator. Drop-off: filtre karmaşası, eski ilan, üyelik+telefon duvarı, yanıtsız form, gizli aidat.

**Ajan yolu:** Kayıt/doğrulama → ilan girişi veya XML sync → lead gelen kutusu → yanıt → CRM. Drop-off: ağır KYC, lead kalitesi belirsiz, sync hata raporu yok.

**Mal sahibi yolu:** İlan oluştur → foto/plan → yayın → mesaj. Ajan akışıyla karışmamalı.

**Kiralama operasyonu / proptech:** Sözleşme → depozito → bakım talebi → aidat/ödeme. "Dijital sözleşme" imza akışı olmadan çelişir.

**Off-plan proje:** Ödeme planı → teslim tarihi → ruhsat bilgisi güncelliği.

Timeline: Search, Listing detail, Contact, Agent onboarding, Financing CTA, Lease ops, Project update.

## Güven ve drop-off sinyalleri matrisi (gayrimenkul / real estate)

Trust↑: ilan güncelleme tarihi, doğrulama rozeti tanımı, aidat/ek maliyet, ajan profili, okunaklı kat planı, yanıt yolu/SLA metni (oran yok), KVKK lead amacı, mortgage varsayımları görünür, sanal tur kalitesi ile vaat uyumu.

Trust↓ / drop-off: tarihsiz "yeni", stock foto–cephe uyumsuzluğu, garantili getiri, gizli komisyon, üyelikli her mesaj, boş harita zayıf likidite algısı (oran uydurma yok), yanıtsız lead, proje teslim tarihi bayat, mahalle skoru metodolojisiz.

Zincir: filtre karmaşası → eski ilan → iletişim duvarı → hayaletleme → ROI abartısı.

## Persona çatışmaları (gayrimenkul / real estate)

- **Busy alıcı vs zorunlu telefon+üyelik:** Hızlı soru ister; her adımda lead formu adoption↓. Progressive contact.
- **Skeptical vs stock foto / tarihsiz rozet:** Sahte ilan kaygısı; FirstClick oran uydurmaz, tarih/doğrulama UI'sına bakar.
- **Price-sensitive vs aidat/komisyon gizliği:** PDP'de maliyet yoksa distrust.
- **First-timer vs süreç belirsizliği:** "Nasıl ilerler" boşluğu; checklist heuristic — hukuki süreç hükmü yok.
- **Agent economic buyer vs lead kalitesi:** "Kaliteli lead" vaadi tanımsızsa itiraz; kalite skoru uydurma.
- **Alıcı "hemen sor" vs ajan "nitelikli lead":** Zorunlu telefon iki tarafı da yorabilir; kademeli iletişim.
- **Yönetici vs sakin uygulaması:** Aynı menüde karışırsa clarity↓.

## Kanıt ve alıntı disiplini (gayrimenkul / real estate)

1) Sahte ilan %, portal market share, fiyat artış tahmini, ROI garantisi uydurma.
2) "Yeni/fırsat" için tarih alanını alıntıla veya yokluğunu yaz.
3) Doğrulama rozeti: neyin doğrulandığı metinde yoksa "anlamı belirsiz" de.
4) Kredi/mortgage: varsayımları göster; finansal tavsiye yazma.
5) Mahalle skoru: metodoloji yoksa skeptical soru; kalite ölçme.
6) KVKK: lead paylaşım amacı UI'da var mı; kesin hukuki hüküm yok.
7) Bulgu formatı: alıntı + persona + aşama + skor + aksiyon.

## Somut senaryolar (gayrimenkul / real estate)

**Senaryo A — Tarihsiz yeni:** Rozet "yeni", güncelleme tarihi yok. Skeptical; Listing; trust↓; tarih ekle.

**Senaryo B — İletişim duvarı:** Mesaj için üyelik+telefon+SMS doğrulama. Busy; Contact; adoption↓; progressive contact.

**Senaryo C — Aidat yok:** Satılık PDP'de aidat/aidat dahil mi belirsiz. Price-sensitive; Listing; maliyet alanları.

**Senaryo D — Garantili getiri:** "Garantili % getiri" yatırım dili. Distrust; Financing CTA; kırp veya yöntem/kanıt (kanıt yoksa kırp). Yüzde uydurma yok — metindeki iddiayı alıntıla.

**Senaryo E — Ajan lead belirsiz:** "Premium lead" tanımsız, fiyat yüksek. Economic buyer; Agent onboarding; tanım veya şeffaf fiyatlandırma.

**Senaryo F — Kat planı mobil:** Plan okunaksız, pinch yok. Vaad-UI; Listing; mobil okunabilir plan.

**Senaryo G — Off-plan bayat teslim:** Teslim "2024 Q2" güncellenmemiş. Trust↓; Project update; güncel tarih veya "güncelleniyor" netliği.

**Senaryo H — Dijital sözleşme çelişkisi:** Vaad var, imza akışı yok. Lease ops; akış ekle veya vaadi kırp.

## Skor etkileri derinleştirme (gayrimenkul / real estate)

- **Clarity:** Satılık/kiralık/proje + coğrafya dürüstlüğü; alıcı vs ajan CTA.
- **Adoption:** Search→contact sürtünmesi; kayıtlı arama/favori; randevu.
- **OnboardingRisk:** Ağır ajan kurulumu, XML sync hatasız vaat, zorunlu telefon her adım.
- **Trust:** Güncellik, doğrulama anlamı, maliyet şeffaflığı, yanıt yolu, ROI dili, KVKK.
- **Tough questions:** Garantili getiri, metodolojisiz mahalle skoru, stock foto şüphesi.

Boş harita: likidite oranı yazma; empty state yönetimi ve coğrafya vaadi çelişkisini nitel yaz.

## Aksiyon tarifleri (gayrimenkul / real estate)

1) **İşlem tipi netliği:** Hero ve filtrede satılık/kiralık/proje ayrımı.
2) **İlan tarihi zorunlu alan:** "Son güncelleme" görünür; tarihsiz "yeni" kaldır.
3) **Doğrulama sözlüğü:** Rozet tooltip — kimlik, tapu, foto, ajan lisansı vb. hangisi (corpus ne diyorsa).
4) **Maliyet şeffaflığı:** Aidat, aidat dahil mi, komisyon kimden.
5) **Progressive contact:** Önce mesaj, telefon sonra veya opsiyonel.
6) **Yanıt yolu:** "Yanıt süreci" açıklaması; SLA yüzdesi uydurma.
7) **ROI dili:** Garanti kaldır; varsayım/ senaryo veya tamamen kırp.
8) **Kat planı mobil:** Yüksek çözünürlük + zoom.
9) **Kredi CTA:** Üçüncü parti ilişkisi + calculator varsayımları.
10) **Lease ops:** İmza akışı veya vaadi hizala; sakin/yönetici ayır.

## Kenar durumlar (gayrimenkul / real estate)

- Tekrarlayan ilan: UI kontrolü yoksa eksik sinyal; oran yok.
- Favori karşılaştırma (₺/m², aidat, oda) yoksa busy sürtünür.
- Isı haritası vaadi boş pinlerle çelişmesin.
- Toplu XML sync: hata raporu yoksa zayıf.
- Ekspertiz entegrasyonu üçüncü parti marka açık olmalı.
- Aidat borcu gösterimi: amaç metni; hukuki hüküm yok.
- Sanal tur düşük kalite panora ile vaat çelişkisi adoption↓.
- CRM otomatik lead atama kuralı belirsizse iç friction — ajan persona.

## Genişletilmiş kontrol listesi (gayrimenkul / real estate)

( ) Satılık/kiralık/proje ( ) İlan tarihi ( ) Aidat/ek maliyet ( ) Doğrulama tanımı ( ) Progressive contact ( ) ROI garanti dili yok/var ( ) Kat planı mobil ( ) Ajan yanıt yolu ( ) Kredi üçüncü parti açıklaması ( ) KVKK lead amacı ( ) Host/mal sahibi vs ajan ayrımı ( ) Off-plan teslim güncelliği ( ) Sözleşme imza akışı vaadi ( ) Mahalle skoru metodoloji ( ) Karşılaştırma tablosu ( ) Sahte ilan % uydurulmadı ( ) Alıcı/ajan timeline ayrımı. Eksik = bulunamadı.
