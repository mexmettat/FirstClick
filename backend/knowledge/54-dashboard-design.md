# Dashboard tasarımı: özet, eylem ve aşırı yük

FirstClick’te dashboard, kullanıcının giriş sonrası “ne yapmalıyım?” sorusuna verdiği ilk cevaptır. Boş grafik duvarı, vanity metrikleri veya eylem çağrısı olmayan özetler aktivasyonu geciktirir. Bu dosya dashboard tasarımı değerlendirme standardıdır. [kb:54-dashboard-design]

## Kapsam

Kapsam: ana sayfa / home / overview düzeni, KPI kartları, feed’ler, “sıradaki iş” listeleri, kişiselleştirme, rol bazlı varsayılanlar, boş dashboard, widget aşırı yükü, ve landing screenshot’ındaki dashboard vaadi ile gerçek ekranın uyumu. Kapsam dışı: genel IA ([kb:51-information-architecture]), empty/loading/error durumlarının genel kuralları ([kb:55-empty-loading-error-states]), analitik ürün metrik seçimi ([kb:65-product-analytics]) — dashboard’da gösterilen metriklerin anlamlılığı burada UX açısından ele alınır.

Heuristic: İyi dashboard “bilgi vitrini” değil “eylem konsolu”dur. İlk ekranda en az bir net sonraki adım görünmelidir.

## Tanı sinyalleri

1. **Vanity wall**: Büyük sayılar (toplam tıklama, toplam kullanıcı) ama “bugün ne yapacağım?” yok. Busy-professional değeri sorgular.
2. **Boş grafik iskeleti**: Eksenler var, veri yok, CTA yok — klasik yüksek onboardingRisk ([kb:13-empty-states-aha] ile ilişkili).
3. **Eşit ağırlıklı 12 widget**: Hepsi aynı boyutta; görsel hiyerarşi yok ([kb:59-visual-hierarchy]). Karar felci.
4. **Rol körü özet**: CEO, operasyon ve stajyer aynı KPI’ları görüyor; alakasız metrik confusion.
5. **Yalnızca geçmiş**: “Geçen ay” grafikleri; “bekleyen onaylar / bugünkü görevler” yok. Adoption için aksiyon eksik.
6. **Landing–dashboard drift**: Marketing screenshot dolu ve renkli; gerçek hesap boş veya farklı IA. Citation’lı çelişki.
7. **Bildirim + dashboard çift gürültü**: Aynı uyarı hem banner hem widget hem toast; skeptical aşırı satış hisseder.
8. **Özelleştirme zorunlu**: Kullanıcı değer görmeden önce 10 widget yerleştirmek zorunda — kurulum sürtünmesi.
9. **Mobilde yatay scroll cehennemi**: Kartlar kesilmiş, grafikler okunaksız ([kb:57-mobile-ux]).

Olumlu sinyaller: “Bugün” / “Sizin için” bölümü, 1 birincil CTA, 3–5 KPI max üst sıra, rol veya işe göre varsayılan, örnek veri veya demo modu açık etiketi, “gizle/özelleştir” isteğe bağlı, son aktivite + bekleyen iş bir arada.

## Persona tepkileri

- **busy-professional**: 10 saniyede “sıradaki 3 iş” ister. Uzun onboarding overlay dashboard’u kapatıyorsa skip + net CTA şart. ROI sinyali (tasarruf, tamamlanan iş) üstte olmalı.
- **non-technical**: Grafik jargonı (cohort, churn, NPS) korkutur. Düz dil: “Cevap bekleyen 4 talep”. Boş grafik + İngilizce etiket = leave.
- **skeptical**: Şişkin demo sayıları “sahte” algısı yaratabilir; örnek veri açıkça “örnek” etiketlenmeli. Gerçek veri yoksa dürüst empty + CTA daha güvenilir.
- **price-sensitive**: Dashboard’da kilitli widget’lar ve sürekli upgrade; değeri görmeden satış. Limitleri net, yumuşak yükseltme.
- **student / first-timer**: Ne okuyacağını bilmez. Checklist + “ilk kaydını ekle” empty dashboard’u aktivasyona çevirir.

## İyi ve kötü örnekler

**Kötü — analitik müze**
6 çizgi grafik, 4 pasta, 2 heat map; hiçbiri tıklanınca göreve gitmiyor. Kullanıcı izleyici; ürün “rapor aracı” gibi ama eylem yok.

**İyi — eylem konsolu**
Üst: “Bugün: 3 onay bekliyor” + buton “Onaylara git”. Orta: son 5 aktivite. Alt: isteğe bağlı trend (haftalık tamamlanan iş). KPI’lar tıklanabilir filtre.

**Kötü — sahte dolu screenshot**
Landing’de dolu dashboard; kayıt sonrası “Henüz veri yok” ve yalnızca “Dokümantasyonu oku”. Vaad kırılır; skeptical trust↓.

**İyi — dürüst ilk dashboard**
“Henüz müşterin yok — 2 dakikada ilkini ekle” + template + “Örnek veriyle gez” (net etiket). Aha’ya giden yol görünür.

**Kötü — özelleştirme tuzağı**
İlk giriş: boş grid + “Widget ekle”. Kullanıcı bilgi mimarisini bilmeden layout tasarlıyor. onboardingRisk↑.

**İyi — akıllı varsayılan**
Rol seçimine göre 4 widget; “Düzenle” ikincil. 7 gün sonra “Kullanmadığınız 2 paneli gizleyelim mi?” (isteğe bağlı).

## FirstClick skor etkileri

- **clarity**: Kart başlıkları, birincil CTA, neyin önemli olduğu. Eşit gürültü clarity↓.
- **adoption**: Dashboard’dan değer üreten eyleme geçiş. Salt izleme adoption’ı zayıflatır.
- **onboardingRisk**: Boş + rehbersiz dashboard klasik yüksek risk. Örnek veri etiketsizse trust de zarar görür.
- Time-to-value: dashboard ilk değerin kendisi olabilir (ör. ilk insight) veya yalnızca köprü; hangisi olduğu ürün vaadine göre [doc:…] ile doğrulanmalı.
- Performance: ağır widget’lar algılanan hızı bozar ([kb:64-performance-perception]).

## Eylem kontrol listesi

1. Ana giriş ekranındaki birincil CTA’yı alıntıla; yoksa “eylem yok” bulgusu yaz.
2. Üst sıra KPI sayısını say; 5’ten fazla ve eşit ağırlıktaysa aşırı yük notu düş.
3. Boş / örnek / gerçek veri durumunu ayırt et; örnek veri etiketi var mı bak.
4. Landing screenshot ile corpus dashboard’unu karşılaştır.
5. Rol bazlı fark var mı kontrol et.
6. Her widget’ın tıklanınca bir göreve gidip gitmediğini işaretle.
7. Mobil kırılımı not et: kesilen kartlar, okunaksız grafikler.
8. Öneri: widget silmek/birleştirmek, “Bugün” bölümü eklemek, empty’yi göreve bağlamak — özellik uydurmadan.

## Atıf disiplini

- Dashboard içeriği ve metinleri: [doc:…] / [web:…].
- Dashboard UX kuralları: [kb:54-dashboard-design].
- Empty state derinliği: [kb:55-empty-loading-error-states].
- Metrik seçiminin ürün anlamı: [kb:65-product-analytics] (UX vs analitik ayrımını karıştırma).
- “Doğru dashboard dönüşümü %X artırır” yazma; eylem konsolu heuristic’ini kullan.

## Analist uygulama notu

Dashboard chunk’ında şu ayrımı koru: bilgilendirme vs eylem. Persona cümlesi örneği: “skeptical, etiketsiz örnek KPI’lar görüyor → trust↓; öneri: ‘Örnek veri’ rozeti + gerçek empty CTA. Skor: onboardingRisk↑, clarity orta.”


## Derin uygulama: dashboard’u persona ve role göre okumak

Dashboard tek ekran değildir; persona’ya göre farklı “doğru” konsollar vardır. FirstClick tek ideal layout dayatmaz; corpus’taki varsayılanın kim için olduğunu sorar.

**Operasyon konsolu**: Bekleyen işler, SLA, onay kuyruğu. Busy-professional burada yaşar. Grafik ikincildir.

**Analitik konsolu**: Trend, karşılaştırma, drill-down. Anlamlıdır ama ilk oturumda tek başına aktivasyon sağlamayabilir. First-timer’ı grafik müzesine bırakma.

**Öğrenme konsolu**: Checklist, template, “şimdi yap”. OnboardingRisk’i düşüren tür. Aktivasyona köprü ([kb:62-activation]).

Rol seçimi yoksa analist “varsayılan dashboard rol körü” notu düşer. Rol seçimi var ama sonuç aynıysa tiyatrodur — alıntıyla göster.

**Tıklanabilirlik denetimi**: KPI kartı tıklanınca filtreli listeye gitmeli. Gitmiyorsa vanity. “+12%” rozeti neye göre hesaplandığını söylemiyorsa skeptical sorar; açıklama yoksa clarity↓.

**Örnek veri politikası**: Demo modu açık etiketlenmeli, tek tıkla temizlenmeli, gerçek veri ile karışmamalı. Karışma trust krizidir. Landing screenshot’ı örnek veriyle doluysa ve gerçek empty rehbersizse drift + onboardingRisk.

**Yoğunluk bütçesi (heuristic)**: Üst katmanda 1 eylem alanı + en fazla 3–5 özet metrik + 1 feed. Fazlası “özelleştirmede sonra”ya. Bu sayı yasa değildir; aşırı yük okuma kuralıdır.

**Bildirim çakışması**: Dashboard banner + toast + bel + e-posta aynı uyarıyı çoğaltıyorsa retention ve trust zarar görür ([kb:63-retention], [kb:35-notifications]).

RAG chunk anahtarları: eylem konsolu, vanity KPI, rol varsayılanı, örnek veri etiketi, tıklanabilir metrik, landing drift, mobil kırılım, yoğunluk bütçesi.


## Senaryo laboratuvarı: dashboard’da ilk 15 saniye

**Senaryo A — Landing drift:** [web:…] dolu grafik vaadi; kayıt sonrası empty + “docs”. Skeptical trust↓ onboardingRisk↑. Öneri: dürüst empty + template; screenshot’ı gerçek durumla hizala.

**Senaryo B — Vanity wall:** 8 KPI, 0 CTA. Busy-professional “rapor müzesi”. adoption↓. Öneri: “Bugün” eylem bandı.

**Senaryo C — Etiketsiz demo:** Sahte ARR. Non-technical gerçek sanır; skeptical “sahte”. Trust↓. Öneri: örnek rozeti + temizle.

**Senaryo D — Mobil:** Kartlar yarıda kesik, grafik okunaksız. Student trafiği mobilden geliyorsa onboardingRisk↑ ([kb:57-mobile-ux]).

Dashboard kişiselleştirme: güç kullanıcıya “düzenle” ikincil sunulabilir. İlk gün zorunlu grid kurmak onboarding’i tasarım aracına çevirir — anti-pattern. Heuristic: akıllı varsayılan önce, özelleştirme sonra.


## Operasyonel kontrol: dashboard QA listesi (analist)

1. Birincil CTA alıntısı. 2. Üst sıra metrik sayısı. 3. Örnek/gerçek/empty ayrımı. 4. Landing screenshot drift. 5. Rol farkı. 6. Kart tıklanabilirliği. 7. Mobil kesilme. 8. Bildirim çakışması. 9. Özelleştirme zorunlu mu. 10. Persona başına “15 sn yargısı”.

Dashboard bazen aktivasyonun kendisidir (ilk insight). O zaman empty dashboard doğrudan aha engelidir ([kb:62-activation]). Bazen yalnızca köprüdür; o zaman CTA kalitesi yeter. Hangisi olduğunu vaad cümlesiyle karar ver — uydurma “sektör best practice dashboard” dayatma.


## Karar çerçevesi: dashboard’u “evet/hayır” ile elemek

FirstClick analisti dashboard bulgusunu yazmadan önce üç evet/hayır sorusu sorar. Birincisi: Bu ekran kullanıcının bir sonraki eylemini söylüyor mu? Hayırsa vanity veya müze riski vardır. İkincisi: Veri durumu dürüst mü (gerçek / örnek etiketli / empty rehberli)? Hayırsa trust veya onboardingRisk yükselir. Üçüncüsü: Landing’deki vitrin ile aynı dilde mi? Hayırsa citation’lı drift gerekir.

Bu üç sorunun hepsi “evet” olsa bile persona kırılganlığı kalabilir. Busy-professional eylem ister; non-technical düz dil ister; skeptical örnek veri etiketi ister; price-sensitive kilitli widget baskısından hoşlanmaz; first-timer checklist ister. Aynı dashboard beş persona için farklı skor gerekçesi üretebilir — tek genel “dashboard kötü” cümlesi RAG’de zayıf kalır.

Widget enflasyonu çoğu zaman özellik ekibinin “görünürlük” talebinden doğar. FirstClick görünürlüğü önem sırasıyla karıştırmaz. Her widget için “bu kart silinirse kim üzülür?” sorusu heuristic’tir. Cevap “kimse” ise aşırı yük adayıdır. Cevap “operasyon ekibi onay kuyruğunu kaçırır” ise eylem konsolu parçasıdır.

Rapor ürünlerinde dashboard aktivasyonun kendisi olabilir. O zaman ilk insight’ın time-to-value’su kritiktir; boş grafik iskeleti doğrudan aha engelidir. İş akışı ürünlerinde dashboard köprüdür; köprüde CTA yoksa kullanıcı nehri geçemez. Analist ürün tipini corpus vaadinden çıkarır, varsayılan “her SaaS dashboard’u şöyle olmalı” dayatmaz.
