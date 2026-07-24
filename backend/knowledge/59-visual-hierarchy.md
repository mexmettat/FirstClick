# Görsel hiyerarşi: dikkat ekonomisi ve birincil eylem

FirstClick görsel hiyerarşiyi “güzel görünüyor mu?” sorusuyla değil, kullanıcının 3–5 saniyede doğru unsuru seçip seçemediğiyle değerlendirir. Tipografi, boşluk, kontrast ve boyut; clarity ve adoption’ın sessiz motorudur. Bu dosya görsel hiyerarşi standardıdır. [kb:59-visual-hierarchy]

## Kapsam

Kapsam: sayfa içi önem sırası, tipografik skalası, CTA ağırlığı, boşluk (whitespace), renk ile vurgu, kart/gölge gürültüsü, rekabet eden birinciller, landing hero hiyerarşisi ile app içi tutarlılık. Kapsam dışı: bilgi mimarisi grupları ([kb:51-information-architecture]), navigasyon bileşenleri ([kb:52-navigation]), marka estetiği eleştirisi (FirstClick tasarım ödülü vermez).

Heuristic: Her görünümde tek birincil eylem görsel olarak baskın olmalıdır. İki eşit “birincil” buton karar felci üretir (yönsel kural; kesin dönüşüm oranı iddiası değil).

## Tanı sinyalleri

1. **Çoklu birincil**: Aynı satırda iki dolu/renkli CTA (“Başla” ve “Demo”) eşit ağırlıkta. busy-professional tereddüt eder.
2. **Gürültülü kart ormanı**: Her blok gölgeli kart; hiçbiri öne çıkmaz. Dashboard ve pricing’de sık.
3. **Başlık–gövde tersi**: Dekoratif büyük illüstrasyon, küçük fayda metni; değer okunmaz.
4. **Link gibi buton / buton gibi link**: Etkileşim affordance’ı belirsiz; non-technical tıklayamaz.
5. **Renk bağırıyor**: Her öğe marka renginde; vurgu yok. Veya tersi: kritik silme birincil renkte.
6. **Sıkışık ritim**: Padding yok, satırlar yapışık; tarama (scan) zorlaşır.
7. **Fiyat/plan hiyerarşisi yok**: Üç plan eşit kart; önerilen plan belirsiz — price-sensitive şaşırır.
8. **Formda gömülü CTA**: Gönder butonu metin linki kadar zayıf; tamamlanma düşer.
9. **Mobilde hiyerarşi çöküşü**: Desktop’ta net sıra, mobilde her şey aynı punto ([kb:57-mobile-ux]).
10. **Vaad–görsel drift**: “Sade arayüz” iddiası + yoğun UI screenshot.

Olumlu sinyaller: net H1 → alt metin → birincil CTA → ikincil metin link; tutarlı tipografi skalası; bol nefes alanı; tek vurgu rengi; önerilen plan görsel olarak işaretli ama dürüst; yıkıcı eylemler (sil) ikincil/outline.

## Persona tepkileri

- **busy-professional**: 10 saniyede CTA’yı bulamazsa ürünü “dağınık” sayar. ROI/süre vaadi görsel olarak üstte olmalı.
- **non-technical**: Affordance belirsizse “ne tıklanır?” confusion. Büyük, metinli düğme ister.
- **skeptical**: Aşırı satış görseli (parıltı, sahte rozet yığını) güven kırar. Dürüst hiyerarşi > marketing gürültüsü.
- **price-sensitive**: Fiyatın gizlenmesi veya en pahalı planın sahte “önerilen” ile şişirilmesi manipülasyon hissi.
- **student / first-timer**: Öğrenme yolu görsel olarak zayıfsa özellik ormanında kaybolur. “Başlangıç” yolu baskın olmalı.

## İyi ve kötü örnekler

**Kötü hero**
Eşit üç sütun: özellik, özellik, özellik; altta dört buton. Marka adı küçük. Değer cümlesi yok.

**İyi hero**
Tek sonuç vaadi (büyük), bir cümle kim için, bir birincil CTA, bir ikincil “Nasıl çalışır”. Sosyal kanıt CTA’nın altında daha düşük ağırlıkta.

**Kötü app ekranı**
Her panel aynı border+shadow; “Davet et” soluk link, “Tema rengi” dolu buton. Öncelik ters.

**İyi app ekranı**
Sayfa başlığı + kısa açıklama; birincil “Davet et”; liste içeriği; tehlikeli “Çalışma alanını sil” sayfa altında outline/kırmızı metin.

**Kötü pricing**
Üç plan, hepsi “En popüler” rozetli veya hiçbiri; fiyat punto eşit, özellik listesi duvar.

**İyi pricing**
Bir plan görsel olarak önerilmiş (tek rozet), farklar kısa, CTA her kartta ama önerilende dolu. Yıllık/aylık toggle net.

## FirstClick skor etkileri

- **clarity**: Tarama düzeni ve vurgu. Gürültü clarity↓.
- **adoption**: Birincil eylemin bulunabilirliği. CTA kaybolursa adoption↓.
- **onboardingRisk**: İlk ekranda hiyerarşi yok + çok CTA = yüksek risk.
- Pricing hiyerarşisi manipülatifse trust↓ (özellikle skeptical/price-sensitive).
- Timeline: Landing’de confusion genelde hiyerarşi kaynaklıdır; alıntılanan başlık/CTA ile yaz.

## Eylem kontrol listesi

1. İlk görünümdeki birincil eylemi işaretle; rakip eşit CTA var mı say.
2. Tipografi sırasını not et (başlık > alt > gövde > meta).
3. Renk vurgusunun tek işe hizmet edip etmediğine bak.
4. Yıkıcı eylemlerin görsel olarak birincil olup olmadığını kontrol et.
5. Pricing/plan kartlarında dürüst öneri işaretini değerlendir.
6. Mobilde aynı hiyerarşinin korunup korunmadığını not et.
7. Landing vaadi “sade” ise gürültü sinyallerini citation’la bağla.
8. Öneri: CTA birleştir, ağırlık düşür, boşluk artır — yeni illüstrasyon uydurma.

## Atıf disiplini

- Ekran metinleri ve CTA’lar: [doc:…] / [web:…].
- Hiyerarşi kuralları: [kb:59-visual-hierarchy]; kısa önceki not [kb:40-visual-hierarchy] ile birlikte kullanılabilir.
- “F tipi okuma %X” gibi uydurma eye-tracking iddiası yazma.
- Heuristic’leri “kanıtlandı” diye sunma.

## Derin uygulama: FirstClick oturum dili

Görsel hiyerarşi bulgusunu persona tepkisine çevirirken şu şablonu kullan: “[Persona] ilk bakışta [alıntılanan birincil metin] yerine [rakip unsur] görüyor; [eşit CTA / gürültü / ters öncelik] nedeniyle [confusion|friction]. Öneri: tek birincil [eylem], ikincil [link]. Skor: clarity↓ / adoption↓.”

Landing analizinde hero bütçesini hatırla: marka/ürün adı, bir başlık, bir destek cümlesi, bir CTA grubu. Hero’ya istatistik şeridi, üç fiyat kartı ve özellik ızgarası sıkıştırmak hiyerarşiyi bozar; FirstClick bunu “ilk ekran aşırı yük” olarak timeline’a yazar.

App içinde hiyerarşi çoğu zaman dashboard ve liste sayfalarında çöker. Eşit kartlar + eşit rozetler + eşit ikonlar = tarama maliyeti. Busy-professional için maliyet zamandır; non-technical için maliyettir “yanlış şey mi tıklarım?” korkusu. Skeptical için aşırı badge (“AI powered”, “New”, “Hot”) pazarlama gürültüsüdür — özellikle rozet içerik boşsa.

Renk semantiğini tutarlı tut: birincil eylem marka/vurgu rengi, nötr ikinciller, yıkıcı kırmızı/outline. Aynı kırmızıyı hem “Sil” hem “Satın al” için kullanmak clarity’yi bozar. Fiyat hassas personada “Satın al”ın aşırı parlak, “Ücretsiz dene”nin soluk olması manipülasyon sinyali olarak okunabilir.

Boşluk bir lüks değil, hiyerarşi aracıdır. Sıkışık fiyat tablosu özellik karşılaştırmasını okunmaz kılar; sıkışık onboarding checklist adımları birbirine karışır. Öneri yazarken “daha fazla whitespace” tek başına zayıf kalır — hangi iki unsurun ayrılması gerektiğini söyle.

## Analist uygulama notu

Hiyerarşi chunk’ı: görünüm (landing|dashboard|pricing|form), birincil aday, rakip gürültü, persona, skor. RAG için domain kelimeleri: CTA ağırlığı, tipografi skalası, whitespace, affordance, önerilen plan, yıkıcı eylem.


## Senaryo laboratuvarı: dikkat çöküşü

**A — Hero:** Dört eşit CTA. First-timer karar felci. clarity↓ adoption↓. Öneri: tek birincil.

**B — Pricing:** Üç plan “en popüler”. Price-sensitive manipülasyon hissi. trust↓. Öneri: tek dürüst öneri.

**C — App:** Sil birincil renkte, Davet et soluk. Ters öncelik. Öneri: yıkıcıyı outline yap.

**D — Dashboard:** Eşit gölgeli 12 kart. Busy-professional tarama maliyeti. Öneri: eylem bandı + 3 KPI.

**E — Mobil:** Desktop H1 mobilde gövde puntoyla aynı. Hiyerarşi çöküşü ([kb:57-mobile-ux]).

## Operasyonel kontrol
Birincil CTA sayısı, tipografi sırası, vurgu rengi kullanımı, whitespace, yıkıcı eylem ağırlığı, pricing rozeti dürüstlüğü, mobil korunum, sade vaad drift.


## Karar çerçevesi: gözün ilk durduğu yer

Analist bir ekrana bakarken (veya corpus screenshot’ında) şu soruyu sorar: marka/vaad/CTA üçlüsünden hangisi gerçekten baskın? Çoğu zayıf landing’de dekoratif illüstrasyon baskındır; metin ve CTA kaybolur. FirstClick marka ve sonucu hero bütçesinde tutmayı önerir; bu bir “tasarım zevki” değil, ilk 10 sn netliği ile bağlıdır ([kb:01-first-impression-10s]).

App içinde aynı soru: “Davet et” mi baskın, “Tema” mı? Öncelik tersse adoption gerekçesi görsel hiyerarşiden gelir. Renk semantiği bozulmuşsa (kırmızı hem sil hem satın al) clarity↓. Pricing’de çoklu “en popüler” manipülasyon sinyalidir; tek rozet + gerekçe mikro metni daha dürüsttür.

Whitespace “boşluk bırakın” sloganına indirgenmemelidir. Hangi iki unsurun birbirine yapıştığı ve bu yapışıklığın hangi kararı zorlaştırdığı yazılmalıdır: fiyat ile özellik listesi, CTA ile yasal dipnot, başlık ile ikincil nav gibi.

Hiyerarşi hareketle de bozulur: her kart hover’da büyüyorsa öncelik yok olur. Reduced-motion kapalıyken süs animasyonları hem a11y hem dikkat ekonomisini etkiler. Analist hareketi “modern” diye övmez; birincil eyleme yardım edip etmediğini sorar.


## Birleşik okuma: hiyerarşi × CTA mikro kopyası

Görsel olarak baskın ama metinsel olarak belirsiz CTA (“Devam”) çift sorundur: [kb:59-visual-hierarchy] + [kb:60-microcopy]. Önce ağırlığı düzeltmek mi, metni düzeltmek mi? İkisi birden: birincil tek olsun, etiketi fiil+nesne olsun. RAG’de bu iki dosyayı birlikte citation’lamak analist tutarlılığını artırır.

Pricing hiyerarşisi fiyat psikolojisiyle kesişir ([kb:04-pricing-psychology]). Görsel manipülasyon (sahte scarcity rozeti yığını) ile fiyat kurgusu ayrı yazılmalıdır. FirstClick “pahalı” demez; dürüst karşılaştırılabilirlik ve net birincil plan işareti arar.

Dashboard gürültüsü hiyerarşi + dashboard dosyalarının ortak alanıdır. Eşit kart ormanı için birincil çerçeveyi seç: yoğunluk bütçesi dashboard, tipografi/CTA ağırlığı hiyerarşi. Çift sayma skor gerekçesini şişirmez; net kök neden seç.
