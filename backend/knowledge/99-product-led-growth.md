# Ürün odaklı büyüme (PLG): ürünün kendisi satış kanalı

FirstClick analisti product-led growth’u değerlendirirken şunu sorar: kullanıcı satış görüşmesi olmadan corpus’taki self-serve yollarla değeri bulup ekibini veya iş akışını genişletebiliyor mu? Bu doküman, FirstClick bilgi tabanında PLG değerlendirmesinin standart çerçevesidir. [kb:99-product-led-growth]

## Kapsam

Bu dosya şu alanları kapsar: self-serve aktivasyon, viral/işbirliği döngüleri (davet, paylaşım, ortak çalışma), ürün içi genişleme (seat, workspace), usage-based yükseltme sinyalleri, ve satışın PLG’yi boğmadığı hibrit modeller. Kapsam dışı: saf satış odaklı B2B (bkz. [kb:100-sales-led-b2b]), paywall anı detayı (bkz. [kb:98-paywalls]), bildirim taktikleri (bkz. [kb:107-notifications]). PLG “ürün deneyimi büyümeyi taşır” hipotezidir; her SaaS PLG olmak zorunda değildir — analist modeli yanlış etiketlememelidir.

Heuristic: PLG sinyalinin özü, ilk değerin self-serve gelmesi ve doğal bir “başkasını/başka işi dahil etme” adımının ürün içinde bulunmasıdır. Bu bir viral katsayı iddiası değildir.

## Tanı sinyalleri (diagnostic signals)

1. **Zorunlu demo kapısı**: “Başla” aslında takvim linki; ürün denenemiyor.
2. **Davet kilitli**: İşbirliği vaadi var ama davet yalnızca ücretli planda; viral döngü kopuk.
3. **Boş aktivasyon**: Self-serve kayıt var ama empty state + rehber yok; kullanıcı ne yapacağını bilmiyor.
4. **Satış engeli erken**: 3. günde zorunlu “başarı yöneticisi” görüşmesi olmadan özellik açılmıyor.
5. **Paylaşım sürtünmesi**: Public link / misafir erişimi yok; her ortak çalışma full seat ve ödeme istiyor.
6. **Genişleme körü**: Kullanım artıyor ama ürün içinde “ekip için hazır” yükseltme yolu yok; yalnızca outbound satış.
7. **Rol karmaşası**: End-user değer üretir, admin satın alır — PLG’de ikisi için yol yoksa expansion tıkanır.
8. **Mobil/self-serve çelişkisi**: Mobilde sadece “satışa yaz”; masaüstünde self-serve — tutarsız büyüme yüzeyi.

Olumlu sinyaller: kartsız veya düşük sürtünmeli başlama, ilk değere giden kısa yol, davet/paylaşımın ücretsiz veya adil limitli olması, kullanım limitlerinin şeffaf yükseltmeye bağlanması, isteğe bağlı demo (zorunlu değil), dilin “hemen dene” ile uyumu.

## Kullanıcı itirazları

- **“Neden konuşmadan kullanamıyorum?”** Sales-gated PLG vaadi.
- **“Ekibimi davet edemeden değeri göremiyorum.”** Viral özellik kilitli.
- **“Bu bireysel araç mı, ekip aracı mı?”** Positioning belirsiz.
- **“Büyümek için satış mı beklemeliyim?”** Expansion self-serve değilse KOBİ itirazı.
- **“Paylaştığım link karşı tarafı ödeme duvarına mı atıyor?”** Negatif viral deneyim.

## Persona tepkileri

- **busy-professional**: Demo beklemeye tahammülü düşük. Self-serve aha + sonra isteğe bağlı yardım ister.
- **non-technical**: PLG jargonu (“PQLs”, “viral loop”) UI’da görünmemeli; “Davet et”, “Paylaş” yeterli.
- **skeptical**: “Ürün kendini satar” iddiası varken zorunlu satış çağrısı çelişki.
- **price-sensitive**: Seat başına büyüme maliyeti şeffaf olmalı; sürpriz zorunlu upgrade PLG’yi zehirler.
- **student / first-timer**: Düşük bariyerli Free + paylaşılabilir çıktı (link, export) büyüme yüzeyidir.

## İyi ve kötü örnekler

**Kötü — sahte PLG**
Landing “dakikalar içinde başla”. CTA → form → “sizi arayacağız”. Ürün erişimi yok.

**İyi — self-serve çekirdek**
Kayıt → örnek veri veya şablon → ilk çıktı → “ekip arkadaşını davet et (2 davet Free)”. Demo menüde isteğe bağlı.

**Kötü — işbirliği tuzağı**
Davet edilen kullanıcı kaydolunca hemen kredi kartı. Davet eden utanç yaşar; döngü ölür.

**İyi — adil misafir yolu**
Misafir görüntüleme veya sınırlı düzenleme ücretsiz; düzenli seat’e yükseltme şeffaf.

**Kötü — yalnızca satış expansion**
Kullanım tavanına gelince “hesap yöneticiniz yazacak”. Self-serve fatura yok.

**İyi — ürün içi genişleme**
“Limitin %80’i doldu — plan karşılaştır veya seat ekle” + self-serve checkout.

## FirstClick skor etkileri

- **adoption**: Self-serve değer yolu yoksa PLG iddiası altında adoption↓.
- **onboardingRisk**: Zorunlu satış kapısı + boş empty state yüksek risk.
- **clarity**: Bireysel vs ekip yolu karışıksa clarity↓.
- **trust**: Davet edilenin kötü paywall deneyimi trust↓ (davet eden üzerinden).
- Timeline: “PLG claim vs sales gate” çelişkisini citation ile yaz.

## Eylem kontrol listesi

1. Landing büyüme vaadini alıntıla (self-serve mi, demo mu).
2. Kayıttan ilk değere adımları say; satış zorunluluğu var mı bak.
3. Davet/paylaşım limitlerini ve ücretli kilitleri çıkar.
4. Expansion’ın self-serve olup olmadığını kontrol et.
5. End-user vs buyer yollarını ayır.
6. Persona itirazı ekle.
7. Hibrit modelse “isteğe bağlı satış”ı olumlu sinyal olarak ayır; zorunlu satışı olumsuz.
8. Tek cümle öneri yaz.

## Derin tanı senaryoları

**Senaryo A — Hibrit körlüğü.** Ürün kullanım sinyali satışa düşecek diye vaat edilmiş; corpus’ta süreç veya “ürün içi yükselt” yok. Çelişki yaz.

**Senaryo B — Negatif viral.** Paylaşılan link açanı kart veya ağır signup’a atar. Davet eden utanç yaşar.

**Senaryo C — Aktivasyon ölü ucu.** Self-serve kayıt → boş dashboard → yol yok. PLG empty state ile ölür.

**Senaryo D — Seat bombası.** Marketing “sınırsız ekip”; her görüntüleyici seat. Sticker shock.

**Senaryo E — Mobil asimetri.** Mobil yalnızca pazarlama kabuğu; iş masaüstünde. FirstImpression kırılır.

**Senaryo F — Admin tavanı.** End-user değer üretir; yükseltme yalnızca org admin + satış. Expansion yolu belirsizse KOBİ PLG boğulur.

## PLG vs sales-led karar ızgarası

Analist ürünü zorla PLG ilan etmez. Izgara: (1) self-serve ilk değer mümkün mü, (2) doğal paylaşım/davet var mı, (3) expansion ürün içinden bitiyor mu, (4) satış zorunlu kapı mı isteğe bağlı mı. 1–3 evet ve 4 isteğe bağlı → PLG uyumlu. 1 hayır ve demo zorunlu → sales-led (bkz. [kb:100-sales-led-b2b]); bu başarısızlık değil, vaad uyumu önemlidir. Izgarayı skor gerekçesinde açık yaz.

## Genişleme (expansion) okuma

PLG’de genişleme seat, kullanım paketi veya yeni workspace olabilir. Corpus’ta limit uyarısı self-serve checkout’a gidiyorsa olumlu. Yalnızca “hesap yöneticiniz yazacak” ise sales-led expansion — KOBİ segmentinde sürtünme. Price-sensitive için birim ekonomi şeffaflığı (kişi başı / kredi başı) şart; uydurma CAC/LTV yazma.

## Analistin sık hataları

1. “Demo var = PLG değil” mutlaklığı.
2. Viral döngüyü yalnızca referral sanmak.
3. Freemium yoksa PLG olmaz demek.
4. k-factor veya büyüme yüzdesi uydurmak.
5. Marketplace iki taraflı friksiyonu PLG diye yanlış etiketlemek.

## RAG bağımsız chunk notu

Chunk soruları: self-serve aha var mı; davet/paylaşım adil mi; expansion sales-only mu; vaad–kapı çelişkisi var mı? Self-serve, davet, expansion, demo kapısı terimlerini koru.

## Türkiye ve dil notları

TR KOBİ segmentinde “satışa yaz” kültürü yaygındır; bu tek başına PLG’yi reddettirmez. Asıl soru: ürün içinde değer üretilmeden zorunlu insan kapısı var mı? Yerel ödeme yokluğu expansion’ı boğabilir — procurement ile çaprazla. Davet metinlerinin Türkçe olması viral döngüyü etkiler.

## Aktivasyon olayı seçimi

PLG’de aktivasyon “kayıt tamam” değildir. Vaade bağlı ilk çıktıyı seç: ilk paylaşım, ilk fatura, ilk ekip katılımı. Olay ücretsiz veya trial içinde yapılamıyorsa PLG vaadi zayıftır. Metrik yüzdesi yazma.

## İşbirliği yüzeyi ve buyer ayrımı

Misafir erişimi, salt okunur link, davet limiti ve davet edilenin ilk ekranı kontrol listesine eklenir. End-user aktivasyonu buyer satın almasından önce gelebilir; buyer’a güvenlik/fiyat yüzeyi yoksa expansion tıkanır.

## FirstClick rapor paragrafı

PLG bulgusunu rapora dökerken şu paragraf iskeletini kullan: “Ürün [alıntı vaad] ile self-serve büyüme vaat ediyor. Corpus’ta [davet/paylaşım/checkout] yüzeyi [var/yok/kilitli]. [Persona] için bu [friction türü] üretir çünkü [gerekçe]. Öneri: [tek cümle]. Skor gerekçesi: adoption/onboardingRisk — PLG kopukluğu; uydurma viral katsayı yok.” Paragraf RAG’ten tek chunk olarak gelse bile konu terimlerini taşır.

## Negatif döngü envanteri

Davet edilen kart ister; public link 404 verir; paylaşılan dosya watermark yüzünden utandırır; seat sürprizi workspace’i kilitler. Her biri ayrı bulgu satırıdır. Envanter boşsa “negatif viral sinyal görmedim” diye yazmak da geçerlidir — yokluğu olumlu saymak zorunda değilsin, sadece abartma.

## Atıf disiplini

- Ürün akışları: [doc:…] / [web:…].
- [kb:99-product-led-growth]; satış modeli: [kb:100-sales-led-b2b]; trial: [kb:97-free-trial-freemium]; davet bağlamı için mevcut invite bilgisiyle çelişki aranırsa citation.
- Viral “%X büyüme” istatistiği uydurma.

## Analist uygulama notu

Şablon: “[Persona] PLG vaadi ‘[alıntı]’ görüyor ama [demo kapısı|davet kilidi|expansion sales-only] nedeniyle [friction]. Öneri: [self-serve aha + adil paylaşım]. Skor: adoption↓ / onboardingRisk↑ gerekçesi PLG kopukluğu.” RAG’de self-serve, davet, expansion, PQL jargonsuz karşılıkları kullan.
