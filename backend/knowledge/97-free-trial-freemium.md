# Ücretsiz deneme ve freemium: değer kapısı tasarımı

FirstClick analisti trial ve freemium’u değerlendirirken şunu sorar: kullanıcı corpus’taki kayıt, limit ve yükseltme metinlerinden “ücretsiz ne yapabilirim, ne zaman öderim, kartım ne zaman çekilir?” sorularına net ve dürüst cevap bulabiliyor mu? Bu doküman, FirstClick bilgi tabanında free trial / freemium değerlendirmesinin standart çerçevesidir. [kb:97-free-trial-freemium]

## Kapsam

Bu dosya şu alanları kapsar: zaman sınırlı deneme (trial) ile özellik/limit sınırlı ücretsiz katman (freemium) ayrımı, kart zorunluluğu, deneme süresi ve iptal dili, ücretsiz planda aha moment’e ulaşılabilirlik, yükseltme tetikleyicileri, ve vaad ile ücretsiz deneyim tutarlılığı. Kapsam dışı: plan mimarisi detayı (bkz. [kb:96-pricing-packaging]), paywall UI anı (bkz. [kb:98-paywalls]), ürün odaklı büyüme döngüsü (bkz. [kb:99-product-led-growth]). Trial “süreli tam/geniş erişim”dir; freemium “süresiz dar erişim”dir; ikisini aynı cümlede karıştırmak confusion üretir.

Heuristic: İyi trial/freemium, kullanıcının ücret ödemeden önce ürünün temel değerini bir kez üretmesine izin verir. Bu bir dönüşüm oranı iddiası değildir; FirstClick’te activation ve onboardingRisk okurken kullanılan çalışma hipotezidir.

## Tanı sinyalleri (diagnostic signals)

Corpus’ta şu sinyaller trial/freemium sorununa işaret eder:

1. **Model belirsizliği**: “Ücretsiz dene” CTA’sı hem 14 günlük trial hem kalıcı Free plan anlamına geliyor; hangisi olduğu yazılmamış.
2. **Kart sürprizi**: Landing “kredi kartı gerekmez” der; checkout kart ister. Vaad–UI çelişkisi; skeptical drop-off.
3. **Değer öncesi duvar**: Ücretsiz katmanda aha moment’e giden kritik adım kilitli (dışa aktarma, davet, ilk rapor). Adoption düşer, onboardingRisk yükselir.
4. **Süre sessizliği**: Trial gün sayısı, bitiş tarihi ve ne olacağı (downgrade / charge) görünür değil.
5. **Otomatik ücret belirsizliği**: “Deneme bitince otomatik yenilenir” küçük punto veya hiç yok; iptal yolu gizli.
6. **Freemium tuzak**: Free plan var ama pratikte kullanılamayacak kadar kısıtlı (1 proje + watermark + destek yok + marka zorunlu). Price-sensitive “sahte ücretsiz” der.
7. **Trial’da Enterprise labirenti**: Deneme hesabında SSO, sözleşme, zorunlu demo — self-serve PLG ile çelişir.
8. **Limit sürprizi mid-flow**: Kullanıcı işin ortasında “limit doldu” görür; önceden sayaç veya uyarı yok.

Olumlu sinyaller: modelin tek cümlede açıklanması (“14 gün Pro; kart yok” veya “Free sonsuz; Pro’ya yükselt”), trial bitişinin ürün içinde geri sayımla gösterilmesi, ücretsiz planda en az bir tamamlanmış değer döngüsü, iptal/upgrade CTA’larının bulunabilirliği, limitlerin sayısal ve önceden görünür olması.

## Kullanıcı itirazları

- **“Kartımı şimdi mi isteyeceksiniz?”** Kart zorunluluğu belirsizse firstImpression’da sürtünme.
- **“Deneme bitince ne olacak?”** Otomatik ücret korkusu; skeptical için birincil itiraz.
- **“Ücretsiz planda işimi bitirebilir miyim?”** Freemium’da değer yoksa “reklam ürünü” algısı.
- **“Neden 7 gün / neden 30 gün?”** Süre gerekçesizse veya rakipten kopuk vaad varsa güven sorunu (yüzde uydurma; süre gerekçesini ürün karmaşıklığına bağla).
- **“İptal etmek zor mu?”** İptal akışı gizliyse trial’a girmek istemezler.
- **“Yükseltmeden ekip davet edebilir miyim?”** Viral/işbirliği özelliğinin ücretli kilitlenmesi PLG’yi bozar (bkz. [kb:99-product-led-growth]).

İtirazı yazarken CTA ve limit metnini corpus’tan alıntıla.

## Persona tepkileri

- **busy-professional**: Kısa trial’da hızlı aha ister. Kart + uzun form + zorunlu demo zinciri zaman maliyeti; skip edilemeyen onboarding ile birleşince bırakır.
- **non-technical**: “Freemium”, “soft paywall”, “quota” açıklanmadan kullanılırsa panik. “Ücretsiz planda şunları yaparsınız” örnek senaryosu ister.
- **skeptical**: Kart zorunlu + otomatik yenileme + gizli iptal üçlüsünü manipülasyon sayar. Şeffaf “kart yok, gün X’te Free’ye düşersiniz” metni güven artırır.
- **price-sensitive**: Gerçekten ücretsiz kalabilen katman arar. Trial’ı “erteleme tuzağı” gibi görürse Free’ye yönelir; Free işe yaramazsa rakibe gider.
- **student / first-timer**: Eğitim indirimi veya cömert Free katman bekler. Trial’da kurumsal jargon ve zorunlu iş e-postası engeli drop-off üretir.

## İyi ve kötü örnekler

**Kötü — CTA yalanı**
Hero: “Ücretsiz başla — kart gerekmez”. Kayıt sonrası ödeme formu. Skeptical güveni kırar; skor yorumunda citation zorunlu.

**İyi — model tek cümle**
“14 gün boyunca Pro özelliklerinin tamamı. Kart istemiyoruz. Süre bitince hesabınız Free limitlerine düşer; veriniz silinmez.” İptal/“erken yükselt” linkleri ayarlarda görünür.

**Kötü — değer öncesi kilit**
Free’de proje oluşturma var, paylaşma ve dışa aktarma yok; ürünün vaadi “ekiple paylaş”. Aha moment ücretsiz ulaşılamaz.

**İyi — ücretsiz aha**
Free’de tek proje + bir dışa aktarma + iki davet. Yükseltme “daha fazla proje / gelişmiş rapor” için gelir; ilk başarı engellenmez.

**Kötü — sessiz charge**
Trial biter, kart çekilir, e-posta gecikir. Trust ve olası yasal/iletişim riski; analist uydurma yasa maddesi yazmaz, şeffaflık eksikliğini not eder.

**İyi — önceden haber**
Bitişten önce ürün içi banner + e-posta: kalan gün, ne olacak, nasıl iptal/yükselt. Sayaç her oturumda görünür.

**Kötü — sahte freemium**
Free: 1 kullanıcı, 1 belge, watermark, “Powered by”, destek yok, API yok. Landing’de “güçlü ücretsiz plan” iddiası.

**İyi — dürüst dar katman**
Free limitleri düşük ama bir persona’nın gerçek işini bitirecek kadar. “Bireysel kullanım için yeterli; ekip için Pro” cümlesi açık.

## FirstClick skor etkileri

- **clarity**: Trial mi freemium mu, kart var mı, bitince ne olur — bu üçü net değilse clarity düşer.
- **adoption**: Ücretsiz yolda aha yoksa adoption düşer; kullanıcı ürünü değil duvarı deneyimler.
- **onboardingRisk**: Değer öncesi paywall veya kart sürprizi riski yükseltir. Limit sürprizi mid-flow klasik yüksek risk pattern’idir.
- **trust / firstImpression**: Kart/iptal/otomatik ücret şeffaflığı; vaad–checkout çelişkisi early trust kırığı.
- Timeline: “ücretsiz başla” → ödeme formu = friction high + trust hit; “trial opacity” etiketi önerilir.

Heuristic: “14 gün herkese uyar” diye istatistik yazma. Süre ürünün aha süresine göre nitel değerlendirilir.

## Eylem kontrol listesi

1. Modelı etiketle: trial, freemium, reverse trial, veya hibrit — corpus diline göre.
2. Kart zorunluluğunu landing, kayıt ve checkout’ta karşılaştır; drift varsa citation yaz.
3. Ücretsiz yolda aha moment’e giden adımları listele; kilitli kritik adım var mı bak.
4. Bitiş/yenileme/iptal dilini bul; yoksa eksiklik bulgusu yaz.
5. Limitleri sayısal çıkar; “sınırsız” iddiasını dipnotla çapraz kontrol et.
6. Persona itirazı yaz (skeptical → otomatik ücret; price-sensitive → sahte Free).
7. Davet/paylaşımın ücretsiz planda olup olmadığını PLG açısından not et.
8. Öneriyi tek cümle eylem + gerekçe ile yaz.

## Derin tanı senaryoları

**Senaryo A — Reverse trial belirsizliği.** Kullanıcı Pro özellikleriyle başlar; süre bitince Free’ye düşer. Corpus’ta “Pro ile başla” var ama düşüş anında hangi özelliklerin kaybolacağı listelenmemiş. Busy-professional sürpriz kayıp yaşar; timeline’a “feature cliff” yaz. Öneri: bitişten önce kaybolacak özelliklerin üç maddelik listesi.

**Senaryo B — Freemium + trial hibrit.** Hem kalıcı Free hem 14 gün Pro denemesi var; CTA ikisini de “ücretsiz” diye çağırıyor. Non-technical hangisine bastığını bilmez. Clarity↓. Öneri: iki ayrı CTA etiketi — “Free ile devam” / “14 gün Pro dene”.

**Senaryo C — İş e-postası zorunluluğu.** Trial self-serve görünür ama yalnızca kurumsal domain. Student ve freelancer elenir; PLG vaadiyle çelişki (bkz. [kb:99-product-led-growth]). Segment kısıtını açık yaz veya tüketici yolunu ayır.

**Senaryo D — Limit sayacı yok.** Free planda kredi/kontör var; kullanıcı limit dolmadan uyarı görmez, iş yarım kalır. Soft paywall öfkeye döner (bkz. [kb:98-paywalls]). Heuristic: limit yaklaşırken görünür sayaç.

**Senaryo E — Veri tehdidiyle yenileme.** “Ödemezseniz projeleriniz silinir” dili trial bitişinde. Export ve Free’ye düşüş seçenekleri yoksa trust↓. Dürüst alternatif: Free limit + export.

Bu senaryolar istatistik iddiası değildir; FirstClick oturum timeline’ında tekrarlayan sürtünme kalıplarıdır.

## Ücretsiz değere giden yol haritası

Analist ücretsiz yolu şu sırayla okur: (1) kayıt sürtünmesi, (2) empty state / örnek veri, (3) bir tamamlanmış çıktı, (4) paylaşım veya kaydetme, (5) limit veya yükseltme konuşması. 3. adımdan önce hard engel varsa onboardingRisk yükselir. 5. adım değerden önce geliyorsa paywall dosyasına çapraz bulgu yaz. Yol haritası ürün türüne göre değişir; marketplace’te “ilk başarılı eşleşme”, B2B’de “ilk rapor”, içerik aracında “ilk dışa aktarma” olabilir — uydurma metrik koyma, olayı ürün dilinden al.

## Analistin sık hataları

1. Trial ile freemium’u eşanlamlı kullanmak — skor gerekçesini bulandırır.
2. “Kart zorunlu her zaman kötü” demek — şeffaflık asıl meseledir; B2B fraud gerekçesi olabilir.
3. Ücretsiz planda her özellik açık olmalı sanmak — dürüst dar katman meşrudur; aha’nın kilitli olması sorundur.
4. Dönüşüm yüzdesi uydurmak — yasak.
5. İptal yolunu kontrol etmeden “güvenilir trial” yazmak.
6. Landing’deki “ücretsiz” kelimesini tek kanıt saymak — checkout ile çaprazlama şart.

## RAG bağımsız chunk notu

Bu dosyadan alınan herhangi bir bölüm tek başına şu soruları cevaplayabilmelidir: model trial mı freemium mı; kart ve bitiş şeffaf mı; ücretsiz yolda aha var mı? Chunk’larda ücretsiz, deneme, limit, iptal, kart kelimeleri korunmalıdır.

## Türkiye ve dil notları

TR odaklı SaaS’ta “14 gün ücretsiz” yaygın bir vaad dilidir; süre istatistiksel optimum diye yazılmaz. Kart zorunluluğu yerel kart sürtünmesiyle birleşince firstImpression ağırlaşabilir — oran uydurma. “Ücretsiz” ile “ücretsiz deneme” Türkçe’de sık karışır; CTA’da ayrıştır. Eğitim veya öğrenci indirimi landing’de kalıp checkout’ta yoksa drift yaz.

## Limit iletişimi protokolü

1. Limit birimini günlük dille yaz.
2. Kalan kotayı ürün içinde göster.
3. Limit yaklaşırken uyarı göster (eşik heuristic’tir; başarı yüzdesi değildir).
4. Bitişte kayıp envanteri ve escape sun.
Protokol freemium ve trial bitişi için ortaktır.

## Atıf disiplini

- CTA, limit, kart metinleri: [doc:…] / [web:…]. Yoksa “corpus’ta trial koşullarını görmedim”.
- Genel kurallar: [kb:97-free-trial-freemium].
- Paketleme: [kb:96-pricing-packaging]; paywall UI: [kb:98-paywalls]; PLG: [kb:99-product-led-growth].
- İstatistik uydurma yasağı: dönüşüm yüzdeleri icat etme; heuristic dil kullan.

## Analist uygulama notu

Şablon: “[Persona] ‘[alıntı CTA/limit]’ görüyor; [kart sürprizi|değer öncesi kilit|bitiş belirsizliği] nedeniyle [friction|trust↓]. Öneri: [şeffaf model cümlesi + ücretsiz aha]. Skor: clarity↓ / adoption↓ / onboardingRisk↑ gerekçesi trial/freemium.” RAG için her bölümde trial, freemium, kart, limit, iptal kelimelerini taşı.
