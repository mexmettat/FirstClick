# Davranışsal segmentasyon

Bu belge kullanıcıları demografi yerine davranış, motivasyon ve kısıta göre ayırmanın FirstClick teşhisine nasıl bağlanacağını anlatır. Amaç segment posterleri üretmek değil; hangi davranış kümesinin hangi sürtünmeyi ürettiğini ve skorları nasıl etkilediğini netleştirmektir. Her bölüm RAG için bağımsız okunabilir; segmentasyon jargonu bilmeyen analist de uygulayabilir.

## Amaç ve kapsam

Davranışsal segmentasyon, kişilerin ne yaptıkları, neyi erteledikleri, hangi kanıt eşiğinde ilerledikleri ve hangi kısıtta terk ettikleri üzerinden gruplar. Tipik eksenler şunlardır: ilk değer hızı ihtiyacı, kanıt eşiği, bütçe duyarlılığı, işbirliği ihtiyacı, teknik yetkinlik, risk ve uyum kaygısı, kanal (masaüstü versus mobil), erişilebilirlik ihtiyacı. FirstClick bağlamında segment; hangi persona paketinin seçileceğini, toughQuestions'ın nereye yoğunlaşacağını ve suggestion önceliğini belirler.

Kapsam dışında tutulanlar: yaş, cinsiyet, şehir ile segment uydurmak; tek seferlik reklam kampanyası etiketlerini kalıcı persona sanmak; örneklem olmadan pazar payı yüzdeleri yazmak; segmenti "kişilik tipi"ne indirgemek. Kapsam içinde olanlar: davranış eksenlerinin tanımlanması, segment çakışmaları, ürün yollarının ayrılması, mesaj ve fiyat etkileri, skor eşlemesi, kaybeden segment teşhisi.

## Davranış eksenleri

Hız ekseni, "hemen değer" ile "doğru kurulum sonra değer" arasında uzanır. Hemen değer arayan segment uzun sihirbazlarda, zorunlu entegrasyonlarda ve eğitim videolarında terk eder. Doğru kurulum arayan segment ise boş örnek veri ve "sonra ayarla" diliyle güvensiz hissedebilir. Ürün tek yol dayatıyorsa bir segment kazanır, diğeri sistematik kaybeder; FirstClick bunu timeline'da açıkça yazar.

Kanıt ekseni, düşük eşik (dene ve gör) ile yüksek eşik (referans, güvenlik incelemesi, sözleşme, KVKK) arasındadır. Yüksek eşik segmenti gizli fiyat, süperlatif slogan ve kaynaksız sosyal kanıtta düşer. Trust skoru bu eksene özellikle duyarlıdır. Düşük eşik segmenti ise aşırı formal "demo talep et" duvarında boğulur.

Bütçe ekseni; kartla anında deneme, aylık görünür plan, yıllık taahhüt, satın alma onayı gerektiren kurumsal ödeme gibi davranışları ayırır. Aynı landing'de tek "iletişime geç" kartı, bütçe duyarlı self-serve segmentini kaybeder. Fiyat sayfasının yokluğu FirstClick'te price ve trust'ı birlikte baskılar.

İşbirliği ekseni, işi tek başına bitiren ile onay veya ekip daveti gerektirenleri ayırır. Davet zorunlu onboarding, bireysel segmenti cezalandırır. Tersine, ekip özelliği hiç yoksa admin segmenti B2B'de takılır.

Yetkinlik ekseni novice ile expert ayrımıdır; ayrı belgede derinleşir. Burada segment seçim sinyali olarak yeter: varsayılan UI hangi tarafı varsayıyor?

Risk ekseni tüketici rahatlığı ile kurumsal veto arasındadır. SSO, audit log, veri lokasyonu, rol bazlı erişim sinyalleri bu eksende aranır. Yoksa özellik uydurulmaz; toughQuestions üretilir.

## Segment tanımlama yöntemi

Birinci adımda davranışsal bir olay seçilir: ilk oturumda export, davet gönderme, fiyat sayfası ziyareti, destek açma, demo formu doldurma, mobil terk. İkinci adımda bu olayla birlikte görülen kısıtlar yazılır. Üçüncü adımda segment tek cümleyle adlandırılır; örneğin "kart vermeden kanıt arayan denemeci". Dördüncü adımda birincil sürtünme ürün yoluna map edilir. Beşinci adımda FirstClick persona paketine bağlanır: şüpheci, fiyat hassas, yoğun profesyonel, B2B komite rolleri.

Segment isimleri iç dil olabilir; dış iletişime demografi sızdırılmaz. "Ankara'daki yirmi sekiz yaş" yerine "mobilde hızlı karşılaştırma yapan fiyat duyarlı alıcı" yazılır. İsimlendirme davranışsal fiil içermelidir; aksi halde poster riski doğar.

Önceliklendirme: veto ve ödeme engeli üreten segment önce düzeltilir; sonra hacmi yüksek ama onarılabilir sürtünmeler gelir. "Kolay zafer" diye yalnızca renk değiştirip güven sorununu ertelemek anti-pattern'dir.

## Somut örnekler

Örnek A — PLG üretkenlik aracı. Segment bir: yoğun bireysel, ilk notu iki dakikada ister. Segment iki: ekip admini, rol ve SSO ister. Segment üç: şüpheci değerlendirici, fiyat ve KVKK tarar. Tek onboarding herkesi aynı sıraya zorlar: şirket boyutu sor, ekip davet et, entegrasyon bağla, sonra editör. Segment bir ölür. FirstClick önerisi: kişisel yolu varsayılan yap, admin ve güvenlik adımlarını ikinci yola al, fiyatı erken göster.

Örnek B — E-ticaret. Segmentler: indirim avcısı, sadakatli tekrar alıcı, ilk kez gelen, iade kaygılı. Hero yalnızca "sezonun en iyisi" ise iade ve kargo netliği zayıf kalır; iade kaygılı güven skorunda düşer. Suggestion: iade politikasını görünür kıl, sosyal kanıtı ürüne bağla, sahte countdown kullanma.

Örnek C — Eğitim platformu. Segmentler: sınav haftası panikleyen öğrenci, uzun dönem planlayan, veli karar veren. Panikleyen için ilk ders hızı; veli için iptal, fatura ve güvenlik dili kritiktir. Tek mesaj ikisini de kaçırabilir; giriş yollarını ayırmak gerekir.

Örnek D — Yanlış segmentasyon. "Millennial" ve "Gen Z" diye iki grup tanımlanır; davranış aynıdır: fiyat karşılaştırıp terk. Demografi gürültüdür. Davranış teşhisi fiyat şeffaflığı ve deneme sürtünmesine kaydırılmalıdır.

Örnek E — Marketplace iki taraf. Alıcı hızlı güven; satıcı hızlı ilan ve ödeme netliği ister. Tek onboarding "topluluk kuralları" duvarı her iki tarafı da yavaşlatıyorsa taraf bazlı yollar gerekir. Marketplace belgesi ile birlikte okunur ama bu belgedeki ders davranışsal ayrımıdır.

## Tanı soruları

Hangi davranışsal olay segmenti tanımlıyor? Segment demografiye mi yoksa kısıta mı dayanıyor? Aynı ürün yolunda hangi segment sistematik kaybediyor? Kanıt eşiği yüksek segment için trust sinyali var mı? Fiyat duyarlı segment için plan karşılaştırması görünür mü? İşbirliği zorunluluğu bireysel segmenti bloke ediyor mu? Mobilde başlayan segment masaüstü varsayımlarıyla mı karşılaşıyor? Güvenlik segmenti toughQuestions'ta temsil ediliyor mu? Segment isimleri dış iletişime demografi olarak sızmış mı? Önceki analizde aynı segment sürtünmesi tekrar ediyor mu? Bir segment için yapılan iyileştirme diğerini bozuyor mu? Proxy metrik (export, davet, fiyat sayfası, terk adımı) net mi? Self-serve ve demo yolları farklı segmentlere göre ayrılmış mı?

## Yanıt kalıpları

Kalıp 1 — kaybeden segment. Hız segmenti zorunlu entegrasyonda düşüyor. Öneri: örnek veri ile aha moment; entegrasyon opsiyonel. Adoption baskıdan çıkar, onboardingRisk düşer.
Kalıp 2 — çakışma. Şüpheci fiyat ister; satış demo ister. İki yol yoksa likelihood düşük. Suggestion: görünür fiyat sayfası artı isteğe bağlı demo.
Kalıp 3 — ölçüm. Segment 'davet gönderen admin' davranışla ayrılabiliyor; onboarding'de davet zorunlu. B2B için daveti değerden sonraya al.
Kalıp 4 — demografi reddi. Yaş dilimi davranış üretmiyor; fiyat karşılaştırma davranışı üretiyor. Teşhisi fiyata kaydırıyorum.
Kalıp 5 — yan etki. Novice için rehber eklendi; expert için atlanabilir değil. Skip tour ekle, yan etkiyi not et.
Kalıp 6 — risk segmenti. Kurumsal veto sinyali var; trust center yok. Özellik uydurmuyorum; toughQuestions'a SSO ve veri lokasyonu ekliyorum.

## Anti-pattern'ler

Demografiye segment demek. Sonsuz mikro segment şişirmek. Tek segment için tasarlayıp diğerini yok saymak. Segment yüzdeleri uydurmak. Segmenti reklam hedefleme etiketiyle karıştırmak. FirstClick'te görülmeyen davranışı segment diye yazmak. Tüm skorları tek segmente bağlamak. Segment adını skor gerekçesinin tamamı yapmak. Kolay kopya değişikliğiyle güven sorununu ertelemek. İki tarafı olan ürünü tek davranışa indirgemek.

## FirstClick prompt ve skor etkileri

Prompt iskeleti: birincil davranış segmenti, ikincil segment, kaybeden yol, corpus sinyali, çelişki, skor etkisi, mikro aksiyon, citation. Persona paketi seçimi bu eksenlere göre yapılır; rastgele veya yalnızca alışkanlıkla persona seçilmez. Likelihood, birincil segmentin kritik yolu tamamlayabilmesine bağlanır.

Skor eşlemesi: Clarity mesajın segment diline uyumu; Trust kanıt eşiğinin karşılanması; Adoption hız ve engel yapısı; Price bütçe ekseni ve görünürlük; B2B risk ve rol ekseni; OnboardingRisk yanlış sıradaki zorunluluklar. Suggestion çoğu zaman tek segmente özel yazılır ama yan etki cümlesi eklenir: "Admin yolu korunmalı".

Citations: davranış iddiası telemetri veya doc ile geliyorsa ilgili etiket; genel kural kb; site vaadi web; tekrar past. Görmediğin segment hacmini yüzdeyle yazma.

## Aksiyon kontrol listesi

- [ ] Davranış eksenlerini seç ve adlandır - [ ] Segmentleri durum cümlesiyle yaz - [ ] Kaybeden segmentin ürün yolunu işaretle - [ ] Demografiye yaslanma - [ ] Fiyat ve kanıt sinyallerini yüksek eşik için kontrol et - [ ] Bireysel ve ekip yollarını ayır - [ ] Mobil varsayımlarını doğrula - [ ] ToughQuestions'ı risk segmentine göre yaz - [ ] Suggestion yan etkisini not et - [ ] Citations ile iddiayı sınırla - [ ] Sahte pazar payı yazma - [ ] [past] ile tekrarlayan sürtünmeyi kontrol et - [ ] Önceliği veto/ödeme engeline göre dizer

## Segment ve persona ilişkisi

Segment davranışsal kümedir; persona FirstClick simülasyonunda o kümeyi seslendiren bakış açısıdır. "Fiyat duyarlı mobil karşılaştırıcı" segmenti, persona-price-sensitive ve şüpheci paketleriyle konuşturulabilir. Segment olmadan persona seçmek spekülasyondur; persona olmadan segment teşhisi kuru kalır. İkisini birlikte bağlamak bu belgenin ana uygulamasıdır.

Çok segmentli ürünlerde analiz özeti "kim kazandı / kim kaybetti" cümlesiyle bitmelidir. Yalnızca ortalama kullanıcı dili, davranışsal gerçeği siler.
