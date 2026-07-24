# Ekonomik alıcı persona derinliği

Bu belge B2B satın almada bütçeyi onaylayan ekonomik alıcının FirstClick'te nasıl modelleneceğini tanımlar. Ekonomik alıcı champion değildir; TCO, risk, satıcı kilidi ve ölçülebilir getiri sorar. Bölümler RAG için bağımsızdır.

## Amaç ve kapsam

Ekonomik alıcı finans, genel müdür, operasyon direktörü veya bütçe sahibi olabilir. Davranış: fiyatı toplam maliyet olarak okur, gizli eklentilerden hoşlanmaz, amortisman ve fırsat maliyetini düşünür, sözleşme süresi ve çıkış koşullarını sorar, "bu yıl neden şimdi" sorusuna cevap ister. İkna: şeffaf paketleme, kanıtlı tasarruf veya risk azaltımı, referans bağlamı, güvenlik veto'sunun yönetilebilirliği. Caydıran: belirsiz fiyat, abartılı ROI, sonsuz taahhüt, belirsiz veri çıkışı, champion coşkusu dışında kanıt yokluğu.

Kapsam dışı: indirim pazarlığı scripti, uydurma tasarruf yüzdeleri. Kapsam içi: TCO okuması, champion ile fark, skor etkileri.

## Davranış modeli

Ekonomik alıcı ürünü nadiren günlük kullanır. Karar paketine bakar: maliyet, risk, alternatif (hiçbir şey yapmama dahil), uygulama yükü. FirstClick corpus'unda fiyat sayfası, case, güvenlik ve uygulama süresi sinyallerini arar.

"Hiçbir şey yapmama" alternatifi güçlüdür. Ürün aciliyeti ve maliyeti anlatamazsa erteleme kazanır. Likelihood düşer; bu champion heyecanından bağımsızdır.

## Somut örnekler

Örnek A — Fiyat yalnızca demo sonrası. Ekonomik alıcı erken elenir veya satış döngüsü uzar. Suggestion: paket mantığı veya aralık.

Örnek B — ROI "10x" kanıtsız. Güven kırılır. Bağlamlı metrik veya toughQuestions.

Örnek C — Seat düşük, zorunlu profesyonel servis yüksek. TCO sürprizi. Şeffaflaştır.

Örnek D — Yıllık kilit, veri export yok. Çıkış riski. Trust ve price etkilenir.

Örnek E — Champion trial seviyor; ekonomik alıcı güvenlik formunun boş olduğunu görüyor. Veto riski.

Örnek F — Rakip karşılaştırma spekülatif. Dürüst fark veya sessiz kal.

## Tanı soruları

Fiyat/TCO şeffaf mı? ROI kanıtlı mı? Sözleşme ve çıkış net mi? Uygulama maliyeti görünür mü? Güvenlik veto'su için materyal var mı? Champion kanıtı ekonomik diline çevrilebilir mi? Eklenti sürprizi var mı? Hiçbir şey yapmama alternatifine karşı argüman var mı? Ödeme dönemi esnek mi? Önceki analizde bütçe takılması var mı?

## Yanıt kalıpları

Kalıp 1 — TCO belirsiz. Fiyat gizli veya eklentili. Şeffaf paket öner; price/trust baskıda.

Kalıp 2 — abartılı ROI. Kır; kanıt iste veya soruya çevir.

Kalıp 3 — çıkış riski. Export/iptal belirsiz. Netleştir.

Kalıp 4 — champion-ekonomik kopukluğu. Paylaşılabilir maliyet-fayda özeti ekle.

Kalıp 5 — güvenlik boş. Ekonomik onay güvenlikten önce gelmez. FAQ/toughQuestions.

Kalıp 6 — demo-only fiyat. Erken aralık göster.

## Anti-pattern'ler

Uydurma tasarruf yüzdesi. Ekonomik alıcıyı champion sanmak. Yalnızca indirim önerisi. TCO'yu yok saymak. Çıkış koşullarını gizlemek. Spekülatif rakip fiyatı. Güvenlik sorununu ertelemek. "Kurumsal olduğu için fiyat gizli"yi PLG ile çelişik bırakmak.

## FirstClick prompt ve skor etkileri

Prompt: TCO sinyalleri, ROI kalitesi, çıkış riski, güvenlik hazırlığı, skor, mikro aksiyon. PersonaReaction: toplam maliyet ne, ne kadar sürede döner, kilit var mı, risk ne?

Skor: Price ve Trust birincil; B2B karar olgunluğu; Likelihood şeffaflık ve kanıtla artar. Suggestion: paket şeffaflığı, dürüst metrik, export/çıkış, trust materyali, paylaşılabilir özet.

## Aksiyon kontrol listesi

- [ ] Fiyat/TCO görünürlüğünü kontrol et
- [ ] ROI iddiasını kanıtla veya kır
- [ ] Çıkış/export netliğini tara
- [ ] Eklenti sürprizlerini işaretle
- [ ] Güvenlik materyalini kontrol et
- [ ] Champion ile ekonomik dil köprüsünü kur
- [ ] Uydurma yüzde yazma
- [ ] ToughQuestions'a TCO maddeleri ekle
- [ ] Citations doğru seç
- [ ] [past] bütçe takılmasını kontrol et

## Ekonomik alıcı versus bütçe kısıtlı

Bütçe kısıtlı ödenebilirlik ve sürpriz kart korkusu taşır. Ekonomik alıcı kurumsal bütçe, risk ve satıcı yönetişimi sorar. Suggestion dili buna göre değişir: birinde plan şeffaflığı ve trial, diğerinde TCO ve çıkış.

## İç onay paketi

Ekonomik alıcının istediği paket: sorun, seçenekler, maliyet, risk, başarı metriği, zaman planı. Corpus bu paketin parçalarını sunuyor mu? Sunmuyorsa champion belgesindeki "üç cümle testi" buraya genişler.

## Timeline

1) Fiyat/TCO arar. 2) ROI abartısı görür veya kanıt bulamaz. 3) Güvenlik/çıkış sorar. 4) Erteleme veya demo talebi. Skor bu sırayı izler.

## Hiçbir şey yapmama alternatifi

Ekonomik alıcı ertelemeyi sever. Ürün "neden şimdi"yi maliyet, risk veya tarih (denetim, sezon) ile bağlamıyorsa erteleme kazanır. FirstClick bunu düşük likelihood gerekçesi yapabilir; sahte aciliyet countdown önermez.

## Sözleşme ve çıkış

Yıllık kilit, veri export yokluğu, geçiş ücreti belirsizliği TCO'yu şişirir. Suggestion çıkış netliği ister. Security reviewer veri çıkışını da risk olarak görür; iki belge birlikte güçlenir.

## Kanıtlı tasarruf dili

"Saat kazancı" veya "hata azalması" iddiası bağlam (kim, ne kadar süre, hangi süreç) ister. Yoksa toughQuestions'a çevrilir. Citation olmadan yüzde yazılmaz.

## Tamamlayıcı not

## Hiçbir şey yapmama alternatifi

Ekonomik alıcı ertelemeyi sever. Ürün "neden şimdi"yi maliyet, risk veya tarih (denetim, sezon) ile bağlamıyorsa erteleme kazanır. FirstClick bunu düşük likelihood gerekçesi yapabilir; sahte aciliyet countdown önermez.

## Tamamlayıcı not

## Sözleşme ve çıkış

Yıllık kilit, veri export yokluğu, geçiş ücreti belirsizliği TCO'yu şişirir. Suggestion çıkış netliği ister. Security reviewer veri çıkışını da risk olarak görür; iki belge birlikte güçlenir.

## Tamamlayıcı not

## Kanıtlı tasarruf dili

"Saat kazancı" veya "hata azalması" iddiası bağlam (kim, ne kadar süre, hangi süreç) ister. Yoksa toughQuestions'a çevrilir. Citation olmadan yüzde yazılmaz.

## Saha uygulama notu 1

## Sözleşme ve çıkış

Yıllık kilit, veri export yokluğu, geçiş ücreti belirsizliği TCO'yu şişirir. Suggestion çıkış netliği ister. Security reviewer veri çıkışını da risk olarak görür; iki belge birlikte güçlenir.

## Saha uygulama notu 2

## Kanıtlı tasarruf dili

"Saat kazancı" veya "hata azalması" iddiası bağlam (kim, ne kadar süre, hangi süreç) ister. Yoksa toughQuestions'a çevrilir. Citation olmadan yüzde yazılmaz.

## Saha uygulama notu 3

## Hiçbir şey yapmama alternatifi

Ekonomik alıcı ertelemeyi sever. Ürün "neden şimdi"yi maliyet, risk veya tarih (denetim, sezon) ile bağlamıyorsa erteleme kazanır. FirstClick bunu düşük likelihood gerekçesi yapabilir; sahte aciliyet countdown önermez.

## Saha uygulama notu 4

## Sözleşme ve çıkış

Yıllık kilit, veri export yokluğu, geçiş ücreti belirsizliği TCO'yu şişirir. Suggestion çıkış netliği ister. Security reviewer veri çıkışını da risk olarak görür; iki belge birlikte güçlenir.

## Saha uygulama notu 5

## Kanıtlı tasarruf dili

"Saat kazancı" veya "hata azalması" iddiası bağlam (kim, ne kadar süre, hangi süreç) ister. Yoksa toughQuestions'a çevrilir. Citation olmadan yüzde yazılmaz.

## Saha uygulama notu 6

## Hiçbir şey yapmama alternatifi

Ekonomik alıcı ertelemeyi sever. Ürün "neden şimdi"yi maliyet, risk veya tarih (denetim, sezon) ile bağlamıyorsa erteleme kazanır. FirstClick bunu düşük likelihood gerekçesi yapabilir; sahte aciliyet countdown önermez.

## Saha uygulama notu 7

## Sözleşme ve çıkış

Yıllık kilit, veri export yokluğu, geçiş ücreti belirsizliği TCO'yu şişirir. Suggestion çıkış netliği ister. Security reviewer veri çıkışını da risk olarak görür; iki belge birlikte güçlenir.

## Saha uygulama notu 8

## Kanıtlı tasarruf dili

"Saat kazancı" veya "hata azalması" iddiası bağlam (kim, ne kadar süre, hangi süreç) ister. Yoksa toughQuestions'a çevrilir. Citation olmadan yüzde yazılmaz.

## Saha uygulama notu 9

## Hiçbir şey yapmama alternatifi

Ekonomik alıcı ertelemeyi sever. Ürün "neden şimdi"yi maliyet, risk veya tarih (denetim, sezon) ile bağlamıyorsa erteleme kazanır. FirstClick bunu düşük likelihood gerekçesi yapabilir; sahte aciliyet countdown önermez.

## Saha uygulama notu 10

## Sözleşme ve çıkış

Yıllık kilit, veri export yokluğu, geçiş ücreti belirsizliği TCO'yu şişirir. Suggestion çıkış netliği ister. Security reviewer veri çıkışını da risk olarak görür; iki belge birlikte güçlenir.

## Satın alma komitesinde konum

Ekonomik alıcı genellikle son imzadır ama tek başına değildir. Champion değer üretir, güvenlik veto edebilir, hukuk sözleşme okur. FirstClick analizinde ekonomik alıcı soruları fiyat ve TCO ile sınırlı kalmamalı; veto hazırlığı da görünmelidir. Aksi halde champion başarılı, imza yok senaryosu kaçırılır.

## Paketleme ve müzakere alanı

Şeffaf paket müzakereyi azaltmaz; kötü sürprizleri azaltır. "Özel fiyat" tek seçenekse self-serve ekonomik alıcı erken elenir. Kurumsal satış modelinde bile aralık veya paket mantığı iç onay paketini hızlandırır. Suggestion: en azından hangi değişkenlerin fiyatı etkilediğini (seat, kullanım, destek) yaz.
