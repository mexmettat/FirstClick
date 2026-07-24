# Lojistik sektör playbooku

Bu dosya FirstClick analizinde sektör paketi **lojistik** seçildiğinde ağırlık kazanır. Her bölüm bağımsız RAG parçası olarak retrieval edilebilir; bölüm kendi içinde sektör adını taşır. Uydurma istatistik, dönüşüm oranı veya kesin regülasyon hükmü yazılmaz. Heuristikler açıkça işaretlenir.

## Kapsam ve iş modeli bağlamı (lojistik)

Lojistik ürünleri kargo takip, taşıyıcı eşleştirme, filo, depo WMS, teslimat slotu veya B2B freight olabilir. Gelir işlem, abonelik veya komisyon olabilir. Operasyonel güvenilirlik vaadi (SLA, ETA, istisna) UI'da görünmelidir. Taşıyıcı–gönderici iki taraflılığı varsa rol ayrımı gerekir. Tüketici takip ile enterprise TMS karışıksa clarity düşer.

## İlk izlenim soruları (lojistik)

Kim — gönderici, taşıyıcı, alıcı, depo? Sonuç: maliyet, süre, görünürlük? Entegrasyon zorunlu mu? Fiyat nasıl hesaplanıyor? Canlı ETA ve istisna yönetimi var mı? Busy ops hız; skeptical SLA iddiası; saha non-technical sade mobil ister.

## Onboarding ve aktivasyon (lojistik)

Aktivasyon: ilk gönderi, etiket, takip linki, rota veya sync. Zorunlu ERP early drop-off olabilir; CSV/manuel yol heuristic. Boş harita yerine örnek gönderi. Fiyat calculator yoksa confusion.

## Fiyat, güven ve uyum uyarıları (lojistik)

Ağırlık/bölge matrisleri calculator ister. "Her yere" istisnalarla çelişmesin. Adres/telefon paylaşımı KVKK bağlamında. Tehlikeli madde kısıtları görünür olmalı. Gizli ek ücret distrust.

## Persona tepkileri (lojistik)

Busy ops: çok tıklama. Skeptical: ETA sapması iletişimsiz. Price-sensitive: ek ücret. Saha non-technical: küçük buton/jargon. Economic buyer: tasarruf kanıtı — yüzde uydurma yok.

## Drop-off zaman çizelgesi örüntüleri (lojistik)

Belirsiz rol → ağır kurulum → entegrasyon duvarı → fiyat belirsiz → istisna yok. Aşamalar: Setup, First shipment, Tracking, Exception.

## Corpus'ta aranacak kanıtlar (lojistik)

Rol CTA, calculator, gönderi formu, takip, ETA, istisna, entegrasyon, mobil saha, SLA, KVKK. Çelişki: anında fiyat vs "teklif bekleyin" tek yol.

## FirstClick skor etkileri (lojistik)

Clarity: rol+sonuç. Adoption: ilk gönderi. OnboardingRisk: entegrasyon. Trust: ETA/SLA ve ek ücret şeffaflığı.

## Aksiyon kontrol listesi (lojistik)

1) Rol netleştir. 2) Manuel ilk gönderi. 3) Calculator. 4) Takip linki aha. 5) İstisna UI. 6) Ek ücret şeffaf. 7) Saha mobil sade. 8) Entegrasyonu ertele. 9) KVKK. 10) Alıntıla.

## İlk gönderi aktivasyonu (lojistik)

Lojistikte aha genelde etiket/gönderi oluşturma veya takip linki paylaşımıdır. Zorunlu ERP entegrasyonu early drop-off üretebilir; CSV/manuel yol heuristic. Fiyat calculator yoksa ağırlık/bölge karmaşası confusion yaratır. "Her yere teslim" istisna listesiyle çelişmesin. FirstClick teslimat başarı oranı uydurmaz.

## Görünürlük ve istisna yönetimi (lojistik)

Takip ekranı yalnızca "transit" diyorsa operasyonel gerçekçilik zayıf kalır. İstisna (gecikme, teslim edilemedi) neden + sonraki adım göstermelidir. SLA/ETA iddiası UI'da sapma iletişimi olmadan skeptical distrust üretir. POD fotoğrafı varsa gizlilik uyarısı transient olmalıdır.

## Saha mobil ve rol ayrımı (lojistik)

Saha personeli non-technical persona gibi davranır: büyük CTA, az jargon. Offline vaadi varsa kuyruk sinyali ara. Gönderici–taşıyıcı–depo rolleri karışıksa clarity↓. Freight ile son mil aynı hero'da karışmamalı.

## Operasyonel aha ve calculator (lojistik)

Lojistikte aha çoğu zaman gönderi/etiket oluşturma veya paylaşılabilir takip linkidir. Zorunlu ERP/TMS entegrasyonu early drop-off üretebilir; CSV veya manuel form heuristic alternatifidir. Fiyat calculator yoksa ağırlık, hacim, bölge ve ek hizmet karmaşası confusion yaratır. "Kapıdan kapıya her yere" istisna listesiyle çelişiyorsa distrust. FirstClick teslimat KPI'sı uydurmaz.

İstisna yönetimi (gecikme, adreste yok, hasar) takip ekranında neden + sonraki adım göstermiyorsa operasyonel gerçekçilik zayıf kalır. ETA/SLA iddiası sapma iletişimi olmadan skeptical için boş vaaddir. POD (teslim kanıtı) fotoğrafı varsa geçici gizlilik uyarısı aranır.

## Rol ve saha mobil deneyimi (lojistik)

Gönderici, taşıyıcı, depo ve alıcı rolleri aynı onboarding'de karışmamalıdır. Saha personeli non-technical gibi tasarlanmalıdır: büyük CTA, az jargon, düşük bağlantı senaryosu. Offline vaadi varsa kuyruk/senkron sinyali ara. Freight teklif akışı ile son mil slot/teslim kanıtı aynı hero'da karışırsa clarity↓.

## Lojistik skor özeti

Clarity rol+sonuç, Adoption ilk gönderi, OnboardingRisk entegrasyon, Trust ETA/SLA+ek ücret şeffaflığı. Timeline: Setup, First shipment, Tracking, Exception, Billing.

## Çoklu taşıyıcı, gümrük ve B2B freight (lojistik)

Çoklu taşıyıcı fiyat karşılaştırması sıralama mantığını (fiyat, süre, güvenilirlik) açıklamıyorsa skeptical confusion yaşar. Gümrük/uluslararası gönderi vaadi evrak checklist'i olmadan zayıf kalır; analist gümrük hukuku yorumlamaz. B2B freight'te teklif, kontrat fiyatı ve spot fiyat karışıklığı pricing netliği ister. Fatura ve maliyet merkezi alanları economic buyer için kritik olabilir.

Filo yönetiminde sürücü mobilinin vardiya ve durak listesi sade olmalıdır. Tehlikeli madde veya soğuk zincir kısıtları görünür değilse operasyonel risk iletişimi eksik. Sigorta add-on fiyatı checkout'ta sürpriz olmamalı.

## İstisna iletişimi ve müşteri deneyimi (lojistik)

Alıcı SMS/e-posta takip dili jargonluysa non-technical confusion. Gecikmede proaktif durum güncellemesi vaadi automation yoksa çelişki. Teslimat slotu seçimi e-ticaret checkout ile entegre vaat edilip yoksa eksik. İade lojistiği (reverse) ayrı akışsa empty state ve etiket oluşturma aha'sı ayrı tanımlanmalıdır. Analist NPS uydurmaz.

Depo WMS'te sayım, yerleştirme ve picking rolleri karışık menüdeyse saha hatası riski — UI sadeleştirme öner. Çok depolu stok görünürlüğü vaadi tek depo UI ile çelişir.

## Analist için örnek bulgu cümleleri (lojistik)

Örnek: "Landing '[alıntı]' hem TMS hem tüketici takip vaat ediyor; confusion; clarity↓; birincil rolü netleştir." Örnek: "Gönderi formu entegrasyon zorunlu; busy ops friction; Setup; onboardingRisk↑; CSV/manuel yol aç." Örnek: "Takip yalnızca 'transit'; skeptical distrust; Tracking; istisna nedeni + sonraki adım ekle."

İyi/zayıf: İyi — calculator + manuel ilk gönderi + istisna UI + saha büyük CTA. Zayıf — yalnız demo satış + gizli ek ücret + jargonlu alıcı SMS. KPI yüzdesi uydurma. Rol etiketli timeline kullan.

## Teşhis soru bankası (lojistik)

1) Birincil rol kim? 2) Manuel ilk gönderi mümkün mü? 3) Calculator var mı? 4) Ek ücretler nerede? 5) Takip istisna durumu gösteriyor mu? 6) ETA sapması nasıl iletiliyor? 7) Saha mobil sade mi? 8) Offline vaadi var mı? 9) Entegrasyon zorunlu mu? 10) Reverse lojistik ayrı mı? Sinyal yoksa belirt.

## Drop-off senaryo matrisi ve skor bağlama (lojistik)

Senaryo A — KOBİ gönderici: entegrasyon duvarı + calculator yok → onboardingRisk↑, clarity↓. Senaryo B — operasyon yöneticisi: istisna UI yok + ETA sapması sessiz → trust↓. Senaryo C — saha görevlisi: küçük butonlar + jargon → adoption↓. Senaryo D — freight buyer: spot/kontrat fiyat belirsiz → economic buyer friction. KPI uydurma yok.

Skor: Clarity rol+sonuç; Adoption ilk gönderi/takip linki; OnboardingRisk zorunlu entegrasyon; Trust ETA/SLA iletişimi ve ek ücret şeffaflığı. Timeline etiketleri Setup / First shipment / Tracking / Exception / Billing. Öneri örnekleri: manuel yol aç, calculator koy, istisna nedeni yaz, saha CTA büyüt.

## Corpus tarama checklist'i (lojistik)

İşaretle: rol CTA; manuel gönderi; calculator; ek ücretler; takip durumu; istisna nedeni; ETA dili; saha mobil; offline vaadi; entegrasyon zorunluluğu; reverse lojistik; KVKK adres verisi; sigorta add-on. Var/yok/çelişkili. Çelişki: "her yere teslim" vs uzun istisna listesi. KPI uydurma yok. Timeline'a rol etiketi ekle.

## Antipattern ve düzeltme çiftleri (lojistik)

Antipattern → düzeltme çiftleri FirstClick öneri yazımını hızlandırır. Genel slogan → rol+sonuç cümlesi. Aha öncesi sert engel → değeri önce göster. Gizli ücret → erken kırılım. Belirsiz hata → eyleme dönük mikro kopya. Kanıtsız garanti → kaldır veya yöntem ekle. Boş durum → tek CTA + örnek. Vaad-UI çelişkisi → iki alıntıyı yan yana koyup skor düşür. lojistik paketinde bu çiftler yukarıdaki teşhis soruları ve checklist ile birlikte uygulanır; istatistik eklenmez.

## Kapanış: lojistik FirstClick uygulama notu

Lojistik paketinde analist önce rolü, sonra ilk gönderi yolunu, sonra görünürlük/istisna ve ücret şeffaflığını okur. Kanıtsız SLA yüzdesi yazılmaz. Öneri somut UI değişikliği olmalıdır. Bu dosya marketplace iki taraflılık kurallarıyla kesişebilir; taşıyıcı–gönderici varsa her iki tarafı etiketle.

## Persona toughQuestions örnekleri (lojistik)

Örnek sorular (corpus'tan cevaplanmalı): "İlk gönderiyi entegrasyonsuz atabilir miyim?", "Ek ücretler teklifte mi checkout'ta mı?", "Gecikmede müşteriye ne otomatik gider?", "Saha uygulaması çevrimdışında ne kaydeder?". Cevap yoksa sinyal eksik.

FirstClick lojistik bulgularında her zaman rol etiketi ve ürün corpus alıntısı kullan; genel sektör klişesi skor gerekçesi olamaz.

## Kullanıcı yolculukları (lojistik)

Lojistikte FirstClick yolculuğu role göre ayrılmalıdır. Tek "kullanıcı kaydı → dashboard" özeti yetersizdir.

**Gönderici (shipper) yolu:** Rol seçimi → fiyat/calculator veya teklif → gönderi oluşturma (manuel/CSV) → etiket → takip linki paylaşımı → istisna bildirimi → faturalama. Drop-off: rol belirsiz, calculator yok, ERP zorunlu, ek ücret sürprizi, istisna ekranı boş.

**Taşıyıcı / sürücü yolu:** Davet veya kayıt → iş/rota kabul → mobil durak listesi → POD → ödeme/hak ediş. Drop-off: küçük CTA, jargon, offline vaadi karşılıksız, hak ediş belirsiz.

**Alıcı (consignee) yolu:** SMS/e-posta linki → takip durumu → slot/yeniden planlama → teslim/imza. Drop-off: jargonlu durum, gecikmede sessizlik, slot yokken vaat.

**Depo / WMS yolu:** Rol (sayım, yerleştirme, picking) → görev listesi → doğrulama. Menü karışıklığı saha hatası riski — hata oranı uydurma yok.

**Freight / B2B yolu:** RFQ → spot vs kontrat fiyat → onay → booking → doküman. Teklif belirsizliği economic buyer friction.

Timeline etiketleri: Setup, First shipment, Tracking, Exception, Billing, Driver mobile, Warehouse task. Freight ile son mil aynı bulguda karıştırılmamalı.

## Güven ve drop-off sinyalleri matrisi (lojistik)

Trust↑ adayları: canlı ETA + sapma iletişimi, istisna nedeni+sonraki adım, ek ücret kırılımı, SLA metni UI karşılığı, calculator, manuel ilk gönderi, POD gizlilik uyarısı, tehlikeli madde/soğuk zincir kısıt görünürlüğü.

Trust↓ / drop-off: "her yere" + istisna listesi çelişkisi, gizli ek ücret, yalnız "transit" takip, entegrasyon duvarı, saha jargonu, gümrük vaadi evraksız, sigorta sürpriz fiyatı, reverse lojistik empty state yokluğu. Teslimat başarı yüzdesi veya NPS uydurma.

Drop-off zinciri heuristic: belirsiz rol → ağır kurulum → entegrasyon zorunlu → fiyat belirsiz → istisna yok → billing sürprizi. Her halka ayrı kanıt ister.

## Persona çatışmaları (lojistik)

- **Busy ops vs IT entegrasyon:** Ops ilk gönderiyi ister; IT ERP sync ister. Heuristic: CSV/manuel first shipment, entegrasyonu sonraya bırak — "entegrasyon gereksiz" iddiası yok.
- **Skeptical vs marketing SLA:** Pazarlama "zamanında teslim" der; UI sapma iletişimi yoksa distrust. İki metni alıntıla.
- **Price-sensitive vs accessorial fees:** Base fiyat düşük, yakıt/uzaktan bölge/bekletme gizliyse distrust. Calculator veya checkout kırılımı.
- **Saha non-technical vs desktop TMS:** Küçük buton, çok alan, İngilizce jargon → adoption↓. Büyük CTA, az alan, yerel dil heuristic.
- **Economic buyer vs tasarruf iddiası:** "Maliyet düşür" kanıtsızsa toughQuestions; yüzde tasarruf uydurma.
- **Alıcı vs gönderici bilgilendirme:** Alıcı sade durum ister; gönderici operasyonel detay. SMS dili alıcıya göre sade olmalı.

Çatışmayı tek skorla ezme; persona etiketli bulgular yaz.

## Kanıt ve alıntı disiplini (lojistik)

1) KPI, on-time %, hasar oranı, maliyet tasarrufu uydurma.
2) ETA/SLA iddiası ile istisna UI yokluğunu birlikte değerlendir; iddiayı alıntıla.
3) "Anında fiyat" ile "teklif bekleyin" çelişkisinde her iki yolu belirt.
4) Gümrük/tehlikeli madde için hukuki yorum yok; checklist veya uyarı UI'sı var mı bak.
5) Offline vaadi için kuyruk/senkron sinyali ara; yoksa eksik sinyal.
6) Bulgu: alıntı + rol + aşama + skor + aksiyon.

## Somut senaryolar (lojistik)

**Senaryo A — Rol karışık hero:** Hero hem "TMS ile filonu yönet" hem "kargon nerede?" diyor. Clarity↓; birincil rol netleştir; tüketici takip ile enterprise'ı ayır.

**Senaryo B — ERP duvarı:** İlk gönderi için API anahtarı zorunlu; CSV yok. Busy ops; Setup; onboardingRisk↑; manuel yol aç.

**Senaryo C — Kör takip:** Durum yalnızca "transit"; gecikme nedeni yok. Skeptical; Tracking; istisna nedeni + sonraki adım.

**Senaryo D — Ek ücret sürprizi:** Calculator base fiyat; checkout'ta yakıt+uzun bekletme. Price-sensitive; Billing; kırılımı erken göster. Oran yok.

**Senaryo E — Saha mobil jargon:** Durak listesinde "exception code EX-14". Non-technical; Driver mobile; sade dil + büyük CTA.

**Senaryo F — Reverse boşluğu:** İade lojistiği vaat, empty state/etiket yok. Adoption eksik; reverse first label aha'sı tanımla.

## Skor etkileri derinleştirme (lojistik)

- **Clarity:** Gönderici/taşıyıcı/depo/alıcı; freight vs son mil. Karışık hero clarity↓.
- **Adoption:** First shipment time; etiket veya takip linki aha. Entegrasyon zorunlu adoption↓.
- **OnboardingRisk:** ERP/TMS zorunluluğu, çok alanlı form, rol seçimsiz kurulum.
- **Trust:** ETA/SLA gerçekçiliği, ek ücret, istisna iletişimi, KVKK adres/telefon, POD gizlilik.
- **Tough questions:** Kanıtsız "en hızlı ağ", gümrük "sorunsuz" iddiası evraksız.

Billing aşaması economic buyer için ayrı trust/adoption notu taşıyabilir.

## Aksiyon tarifleri (lojistik)

1) **Rol netleştirme:** Birincil CTA tek rol; diğer roller ikincil link.
2) **Manuel first shipment:** 3–5 alanlık form veya CSV şablon; entegrasyon "sonra".
3) **Calculator paketi:** Ağırlık, hacim, bölge, ek hizmet; "teklif" alternatifini etiketle.
4) **Takip gerçekçiliği:** Durum + neden + sonraki adım + ETA sapması iletişimi.
5) **Saha mobil:** Büyük dokunma hedefleri, az jargon, offline kuyruk göstergesi (vaat varsa).
6) **Ücret şeffaflığı:** Accessorial'ları checkout öncesi listele; sigorta add-on fiyatı erken.
7) **Reverse aha:** İade etiketi oluşturma ayrı empty state.
8) **WMS sadeleştirme:** Sayım/yerleştirme/picking ayrı görev görünümü.

## Kenar durumlar (lojistik)

- Çoklu taşıyıcı sıralama: fiyat/süre/güvenilirlik mantığı açıklanmalı; "en iyi" kanıtsızsa toughQuestions.
- Uluslararası: evrak checklist UI; gümrük hukuku yorumlama yok.
- Soğuk zincir/tehlikeli madde: kısıt görünür değilse operasyonel risk iletişimi eksik.
- Çok depolu stok vaadi tek depo UI ile çelişmesin.
- Filo vardiya: sürücü mobilinde durak listesi sade; yorgunluk/regülasyon hükmü yazma.
- Alıcı slot vaadi e-ticaret checkout'ta yoksa eksik sinyal.
- POD fotoğrafı: geçici gizlilik uyarısı; KVKK kesin hükmü yok.

## Genişletilmiş kontrol listesi (lojistik)

( ) Birincil rol ( ) Manuel/CSV ilk gönderi ( ) Calculator veya teklif etiketi ( ) Ek ücret kırılımı ( ) Takip istisna nedeni ( ) ETA sapma iletişimi ( ) Saha mobil sadelik ( ) Offline vaadi↔kuyruk ( ) Entegrasyon zorunlu mu ( ) Reverse ayrı aha ( ) Freight vs last-mile ayrımı ( ) SLA alıntısı↔UI ( ) KVKK/POD uyarısı ( ) Tehlikeli madde/soğuk zincir uyarı ( ) Timeline rol etiketli ( ) KPI uydurulmadı. Yoksa "bulunamadı".
