# Aktivasyon: aha anı ve değer olayı

Aktivasyon, kullanıcının ürünün vaat ettiği değeri ilk kez deneyimlediği andır. FirstClick aktivasyonu “kayıt oldu” ile karıştırmaz; kayıt ≠ aktivasyon. Bu dosya aktivasyon değerlendirme standardıdır. [kb:62-activation]

## Kapsam

Kapsam: aktivasyon olayının tanımı, time-to-value, aha moment tasarımı, template/örnek veri ile hızlandırma, invite’ın aktivasyona etkisi, paywall’un aktivasyon öncesi/sonrası konumu, ve metrik dili. Kapsam dışı: onboarding UI mekanikleri ([kb:61-onboarding]), haftalık geri dönüş ([kb:63-retention]), deney tasarımı ([kb:27-experimentation-ab]), ham analitik enstrümantasyon ([kb:65-product-analytics]).

Heuristic: Aktivasyon olayı ürün vaadiyle aynı cümlede anlatılabilmelidir. “İlk sprint panosu oluştu”, “ilk fatura PDF indi”, “ilk adayla mesajlaşıldı”. Belirsiz “engaged user” tanımı analisti yanıltır.

## Tanı sinyalleri

1. **Aktivasyon tanımsız**: Ürün “kullanıma başla” diyor ama başarı olayı belirsiz; analist corpus’tan çıkaramaz.
2. **Aha gecikmesi**: Değer 2. haftada; ilk oturumda yalnızca kurulum. onboardingRisk + zayıf adoption.
3. **Paywall önce**: Değer görmeden kilit. price-sensitive ve skeptical terk.
4. **Takım zorunluluğu**: Tek kullanıcı aha’ya ulaşamıyor; invite şart ([kb:43-invite-loops]).
5. **Boş başarı**: “Tebrikler!” ama ekranda sonuç yok; tiyatro.
6. **Yanlış aha**: Profil tamamlamak aktivasyon sayılıyor; vaad “rapor” iken.
7. **Template yok**: First-timer sıfırdan yapı kurmak zorunda; time-to-value uzar.
8. **Entegrasyon kapısı**: Değer yalnızca dış sistem bağlanınca; erken zorunluluk.
9. **Vaad–olay drift**: Landing “2 dakikada rapor” ama rapor için 20 alan + onay.
10. **Mobilde aha yok**: Aktivasyon yalnızca desktop’ta mümkün.

Olumlu sinyaller: net aktivasyon olayı, template, örnek çıktı, paywall’un değer sonrası yumuşak yükselmesi, tek kullanıcı yolu, checklist’in aha’ya bağlanması, başarıda gerçek artefakt (grafik, PDF, gönderilmiş davet).

## Persona tepkileri

- **busy-professional**: “Bana ne kazandırdı?” somut çıktı ister. Süre kısa olmalı. ROI mikro sinyali.
- **non-technical**: Sihirli ama anlaşılır sonuç; teknik kurulum aha’dan önce gelmemeli.
- **skeptical**: Örnek çıktının “sahte demo” olmadığını veya örnek olduğunu net görmek ister. Kanıtlı aha.
- **price-sensitive**: Aha ücretsiz planda mümkün olmalı; değilse bait. Limit sonrası yükseltme.
- **student / first-timer**: Template ve rehberli ilk başarı. Yalnız bırakılma hissi churn.

## İyi ve kötü örnekler

**Kötü**
Aktivasyon = e-posta doğrulama + tema seçimi. Ürün vaadi “müşteri destek süresini kısalt” iken.

**İyi**
Aktivasyon = ilk destek yanıt şablonunun gönderilmesi veya ilk ticket’ın çözüldü işaretlenmesi. Checklist buna bağlı.

**Kötü paywall**
İlk grafik oluşmadan “Pro’ya geç”. 

**İyi paywall**
İlk grafik oluşur; dışa aktarma veya 4. proje ücretli. Değer görülmüştür.

**Kötü invite zorunluluğu**
“Takımın olmadan devam edemezsin.” Tek başına denemek isteyen kaçar.

**İyi**
Tek kullanıcı aha’sı var; invite “daha hızlı ilerlersin” ikincil. 

**Kötü template**
Boş form + “istediğini yaz”.

**İyi template**
Sektör/amaç seç → dolu örnek → düzenle → kaydet (aktivasyon).

## FirstClick skor etkileri

- **clarity**: Kullanıcı “başarı nedir?”i anlıyor mu. Belirsiz aha clarity↓.
- **adoption**: Aktivasyon adoption’ın kalbidir. Olay yok/geç/kilitliyse adoption↓.
- **onboardingRisk**: Aktivasyona giden yol tıkalıysa risk↑.
- Retention ile bağ: aktive olmayan kullanıcıda retention konuşması erken kalır ([kb:63-retention]).
- Skor gerekçesinde aktivasyon olayını ürün dilinde yaz; genel “engagement” deme.

## Eylem kontrol listesi

1. Corpus’tan vaad cümlesini al; aktivasyon olayını aynı cümleye oturt — oturmuyorsa drift yaz.
2. İlk başarıya giden adım sayısını çıkar.
3. Template / örnek veri var mı bak.
4. Paywall’un aha öncesi mi sonrası mı olduğunu işaretle.
5. Invite zorunlu mu kontrol et.
6. Mobilde aynı aha mümkün mü not et.
7. Checklist maddelerini aktivasyonla eşle; alakasızları işaretle.
8. Öneri: olayı netleştir, engeli ertele, template ekle — metrik uydurma.

## Atıf disiplini

- Vaad ve UI: [doc:…] / [web:…].
- Aktivasyon standardı: [kb:62-activation]; metrik notları [kb:41-activation-metrics].
- Onboarding köprüsü: [kb:61-onboarding].
- “Aktivasyon oranı sektörde %X” uydurma.
- Heuristic time-to-value sürelerini ölçüm gibi sunma.

## Derin uygulama: aktivasyon kalitesi

Aktivasyonun “oyuncu” versiyonu tehlikelidir: rozet, streak, zorla paylaşım. Bunlar bazı ürünlerde tutma aracı olabilir ama FirstClick önce vaad ile hizayı sorar. Öğrenci persona rozeti sevebilir; skeptical “oyunlaştırma maskesi” diyebilir. Bağlamı yaz.

Çok taraflı marketplace’te aktivasyon tarafa göre değişir ([kb:07-marketplace-two-sided]): alıcıda ilk satın alma/iletişim, satıcıda ilk ilan. Tek tanımla iki tarafı ezme. Analist corpus’ta hangi tarafın akışını gördüğünü belirtir.

B2B’de aktivasyon bireysel aha ile ekip aha’sı arasında kalabilir. Birey değeri görüp admin onayı bekliyorsa timeline’a “aktivasyon kapısı: admin” yaz. SSO zorunluluğu aha’yı geciktiriyorsa ([kb:08-b2b-buying]) sürtünmeyi net ayır: satın alma sürtünmesi vs ürün aha sürtünmesi.

Başarı anında sıradaki adım: aşırı satış (paywall) veya aşırı istek (NPS/invite) aha’nın tadını kaçırır. Heuristic: önce artefaktı göster, sonra tek yumuşak sonraki adım.

## Analist uygulama notu

Aktivasyon chunk: vaad alıntısı, önerilen/görülen aktivasyon olayı, engel (paywall|invite|entegrasyon|form), persona, adoption/onboardingRisk. Örnek: “price-sensitive, aha öncesi kart duvarı → adoption↓ onboardingRisk↑; öneri değeri önce göster.”


## Senaryo laboratuvarı: aha engelleri

**A:** Paywall grafik öncesi. Price-sensitive. adoption↓.

**B:** Invite zorunlu. Tek kullanıcı aha yok. onboardingRisk↑.

**C:** Aktivasyon = avatar yükleme. Vaad rapor. Drift.

**D:** Template yok; 20 alan. First-timer. 

**E:** Tebrik modal, artefakt yok. Tiyatro. skeptical.

## Operasyonel kontrol
Vaad–olay hizası, adım sayısı, template, paywall konumu, invite zorunluluğu, mobil aha, checklist eşlemesi, başarı artefaktı.


## Karar çerçevesi: aktivasyonu cümleleştir

Aktivasyon tanımı tek cümlede kurulamazsa ürün ekibi de kullanıcı da bulanıktır. Şablon: “[Persona] için aktivasyon, [artefakt/sonuç] üretildiğinde gerçekleşir; çünkü vaad [alıntı] bunu söyler.” Bu cümle kurulamıyorsa drift vardır.

Engelleri sınıflandır: yapısal (özellik yok), sıralama (paywall erken), sosyal (invite zorunlu), bilişsel (template yok), teknik (hata/ performans). Her sınıf farklı öneri üretir. “Daha iyi onboarding” jenerik önerisi zayıf RAG chunk’ıdır.

Aha tiyatrosu ile aha gerçeğini ayır. Konfeti + “harika” ama ekranda sonuç yoksa tiyatrodur. PDF indi, grafik oluştu, mesaj gönderildi = artefakt. Artefakt yoksa adoption gerekçesi zayıftır.

Çok taraflı ürünlerde taraf belirtmeden aktivasyon yazma. Alıcı aha’sı satıcıya dayatılırsa yanlış skor doğar. B2B’de bireysel aha ile hesap seviyesi aha’sını ayır: kullanıcı değeri gördü ama admin kilidi varsa timeline’a kapıyı yaz.

Paywall sonrası değer bazen meşrudur (maliyetli AI işlemi). FirstClick otomatik “paywall kötü” demez; “değer görülmeden mi?” sorar. Değer sonrası yumuşak yükseltme ile değer öncesi duvarı ayır.


## Birleşik okuma: aktivasyon × paywall × invite × retention

Aktivasyon paywall’dan önce gelmiyorsa price-sensitive adoption düşer ([kb:42-paywall], [kb:12-freemium-and-trial]). Invite zorunluluğu iki taraflı yapışkanlık yaratmadan önce yalnız bırakır ([kb:43-invite-loops]). Aktivasyon olmayan kullanıcıda retention konuşmak erken kalır ([kb:63-retention]) — nedensellik zincirini bu sırayla yaz.

Metrik dosyası ile bağ: ekip “aktivasyon” diye login sayıyorsa hiza bozuktur ([kb:65-product-analytics], [kb:41-activation-metrics]). Analist ürün vaadinden doğru olayı türetir ve corpus’ta karşılığını arar; yoksa “tanımsız” der.

Başarı anındaki NPS/invite isteği aha’yı kesebilir. Heuristic: artefaktı göster, tek yumuşak sonraki adım sun, ölçüm tiyatrosunu ertele.


## Analist sözlüğü: aktivasyon cümle bankası

İyi tanı örnekleri (ürün tipine göre uyarlanır, kopyala-yapıştır gerçek sayılmaz): “İlk fatura PDF’i indirildi.” “İlk destek yanıtı gönderildi.” “İlk proje board’u oluşturuldu ve bir kart eklendi.” “İlk aday mesajı iletildi.” Kötü tanı örnekleri: “Engaged oldu.” “Kurulumu bitirdi.” “Giriş yaptı.” “Profili tamamladı.” Analist kötü tanıyı görünce vaadle çelişkisini yazar. Engeli tarif ederken “kullanıcı aktivasyona ulaşamadı çünkü [paywall|invite|template yok|hata|form]” şablonunu kullan.


## Kapanış notu (RAG)

Bu bölüm bağımsız chunk olarak da anlamlıdır: FirstClick analisti konuyu ürün corpus alıntısıyla birleştirir, heuristic’i istatistik gibi sunmaz, persona tepkisini somut UI metnine bağlar, skor gerekçesinde clarity / adoption / onboardingRisk / trust ayrımını korur ve uydurma özellik önermez. Eksik kanıtta “corpus’ta görmedim” der.
 Aktivasyon chunk’ında vaad cümlesi ile olay tanımı yan yana durmalıdır.


## Kapanış notu (RAG)

Bu bölüm bağımsız chunk olarak da anlamlıdır: FirstClick analisti aktivasyonu kayıtla karıştırmaz; vaad cümlesini olay tanımıyla hizalar, engeli (paywall, invite, template yokluğu, hata) adlandırır, persona tepkisini artefakt varlığına bağlar ve heuristic süreleri ölçüm gibi sunmaz. Corpus’ta aha yoksa “aktivasyon olayı tanımlanamadı” der; uydurma metrik yazmaz.

Persona hatırlatması: busy-professional süre ve çıktı ister; non-technical durum metni ister; skeptical vaad-dürüstlük ister; price-sensitive kilit/erken satışa tepki verir; first-timer ise net sıradaki adımı arar. Bulguyu bu tepkilerden biriyle somutlaştır.


## Eylem tarifleri (aktivasyon)

**Tarif 1 — Olayı cümleleştir:** Şablon: “[Persona] için aktivasyon, [artefakt] üretildiğinde olur; çünkü vaad [alıntı] bunu söyler.” Cümle kurulamıyorsa drift bulgusu zorunlu. “Engaged user” dilini reddet.

**Tarif 2 — Engeli sınıflandır:** Yapısal (özellik yok), sıralama (paywall erken), sosyal (invite zorunlu), bilişsel (template yok), teknik (hata/yavaş). Sınıfa göre öneri yaz; “daha iyi onboarding” jenerikliği zayıf chunk’tır.

**Tarif 3 — Paywall konumu:** Değer artefaktı görülmeden kilit varsa price-sensitive + skeptical için adoption↓. Değer sonrası yumuşak yükseltme ile erken duvarı ayır. Maliyetli işlem paywall’u otomatik kötü sayılmaz — soru “değer görülmeden mi?”

**Tarif 4 — Template hızlandırma:** First-timer sıfırdan yapı kuruyorsa time-to-value uzar. Sektör/amaç → dolu örnek → düzenle → kaydet yolu öner; yeni sektör paketleri uydurma.

**Tarif 5 — Başarı anı disiplini:** Artefaktı göster, sonra tek yumuşak sonraki adım. Aynı anda paywall + NPS + zorunlu invite = aha tiyatrosunu bozar.

## Kenar durumlar

- **Marketplace iki taraf:** Alıcı ve satıcı aktivasyonu farklıdır ([kb:07-marketplace-two-sided]); taraf belirtmeden skorlama.
- **B2B birey vs hesap:** Kullanıcı aha gördü, admin/SSO bekliyor — timeline’a “aktivasyon kapısı: admin” yaz.
- **Yanlış aha:** Profil/tema/avatar tamamlamak vaad “rapor” iken aktivasyon değildir.
- **Mobilde aha yok:** Aktivasyon yalnızca desktop’ta mümkünse busy-professional hafta içi mobil kullanımda düşer.
- **Boş tebrik:** Konfeti var, PDF/grafik/mesaj yok — tiyatro; skeptical trust riski.
- **Invite şartı:** Tek kullanıcı yolu yoksa onboardingRisk↑ ([kb:43-invite-loops]).

## Persona-özel yorum şablonu

“Vaad [alıntı]; görülen/önerilen olay […]; engel [sınıf]; [persona] için etki [adoption/onboardingRisk]; öneri [ertele|template|tek kullanıcı yolu|artefakt göster].”

Busy-professional somut çıktı ve kısa süre ister. Non-technical kurulumdan önce anlaşılır sonuç ister. Skeptical örnek vs gerçek ayrımı ve kanıtlı aha ister. Price-sensitive ücretsiz planda aha ister; yoksa bait. Student/first-timer template ve rehberli ilk başarı ister.

## Analist kontrol listesi (geniş)

1. Vaad cümlesini alıntıla; aktivasyon olayını aynı cümleye oturt.
2. İlk başarıya giden adım sayısını çıkar.
3. Template / örnek çıktı var mı?
4. Paywall aha öncesi mi sonrası mı?
5. Invite zorunlu mu; tek kullanıcı aha’sı var mı?
6. Mobilde aynı aha mümkün mü?
7. Checklist maddeleri aktivasyonla eşleşiyor mu?
8. Başarı anında gerçek artefakt var mı?
9. Çok taraflı ürünse tarafı belirt.
10. B2B’de admin/SSO kapısını ürün aha’sından ayır.
11. Öneri: olayı netleştir, engeli ertele, template — “sektör aktivasyon oranı %X” uydurma.
12. Heuristic süreleri ölçülmüş TTV diye sunma.
