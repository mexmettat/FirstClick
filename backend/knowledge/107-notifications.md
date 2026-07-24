# Bildirimler: dikkat vergisi ve izin ekonomisi

FirstClick analisti bildirimleri değerlendirirken şunu sorar: push, e-posta, SMS ve ürün içi uyarılar kullanıcıya zamanında, ilgili ve kontrol edilebilir mi — yoksa izin istismarı ve gürültü mü? Bu doküman, FirstClick bilgi tabanında notifications değerlendirmesinin standart çerçevesidir. [kb:107-notifications]

## Kapsam

Bu dosya şu alanları kapsar: izin isteme zamanlaması (permission priming), bildirim türleri ve öncelik, kanal seçimi, gruplama/sessize alma, pazarlama vs işlemsel ayrımı, ve yorgunluk belirtileri. Kapsam dışı: yaşam döngüsü kampanya stratejisi (bkz. [kb:106-lifecycle-messaging]), A/B ile bildirim metni deneyi (bkz. [kb:108-ab-experimentation]). Notification “şimdi dikkat” ister; lifecycle “bu aşamada anlatı” kurar.

Heuristic: İyi bildirim, kullanıcının kaçırırsa zarar edeceği veya net fayda göreceği bir olayı taşır. Bu CTR iddiası değildir.

## Tanı sinyalleri (diagnostic signals)

1. **Erken izin bombası**: İlk ekranda sistem push prompt; değer yokken “Allow”.
2. **İşlemsel maskeli pazarlama**: “Hesap bildirimi” aslında indirim.
3. **Öncelik yok**: Her olay kırmızı badge; önemli kaçıyor.
4. **Kontrol paneli yok**: Tür bazlı kapatma yok; hepsi veya hiç.
5. **Çok kanal aynı an**: Push + mail + in-app aynı içerik.
6. **Deep link kırık**: Bildirim açılınca yanlış sayfa veya login döngüsü.
7. **Sessiz saat yok**: Gece pazarlama push’u.
8. **Badge hapishanesı**: Okunmamış sayısı şişer, temizlenemez.

Olumlu sinyaller: izin öncesi açıklama (“sipariş durumu için”), varsayılanlar muhafazakâr, tercih merkezi, gruplanmış özet, işlemsel zorunlu / pazarlama opt-in ayrımı, çalışan deep link.

## Kullanıcı itirazları

- **“Daha hiçbir şey yapmadan bildirim istiyor.”**
- **“Bu gerçekten önemli miydi?”**
- **“Nasıl kapatırım?”**
- **“Aynı şeyi mail ve push’ta gördüm.”**
- **“Gece yarısı neden?”**

## Persona tepkileri

- **busy-professional**: Yüksek sinyal/gürültü oranı ister; özet mail > anlık spam.
- **non-technical**: İzin diyaloğu korkutucuysa “Don’t Allow”a kaçar; sonra kritik uyarıyı kaçırır.
- **skeptical**: Maskeli pazarlama trust↓; izin istismarı ürünü “manipülatif” kodlar.
- **price-sensitive**: Sürekli upsell bildirimi ürünü reklam gibi gösterir.
- **student / first-timer**: Öğretici in-app ipucu yararlı; sistem push erken istenmesin.

## İyi ve kötü örnekler

**Kötü — anında OS prompt**
Splash sonrası sistem diyaloğu. Reddedilince bir daha anlatılamaz (platform kısıtı — analist bunu nitel not eder).

**İyi — priming**
Önce ürün içi kart: “Kargo güncellemelerini push ile ister misin?” → Evet ise OS prompt.

**Kötü — her şey acil**
Beğeni, pazarlama, fatura, güvenlik aynı stil.

**İyi — katmanlar**
Güvenlik/ödeme: yüksek öncelik. Sosyal: özet. Pazarlama: opt-in + sessiz saat.

**Kötü — kapatılamaz upsell badge**
Kalıcı kırmızı 1; içerik “Pro’ya geç”.

**İyi — tercih**
“Ürün ipuçları / pazarlama / ekip aktivitesi” ayrı toggle.

## FirstClick skor etkileri

- **trust**: İzin istismarı ve maskeli pazarlama trust↓.
- **clarity**: Bildirim dili ve deep link net değilse clarity↓.
- **adoption**: Erken prompt reddi sonra kritik uyarının kaçması adoption’ı dolaylı zedeler.
- **onboardingRisk**: İlk oturum izin bombası + gürültü risk↑.
- Timeline: “permission timing”, “channel spam”, “preference gap”.

Heuristic: “Push açınca retention artar” diye yüzde yazma.

## Eylem kontrol listesi

1. İzin isteme anını corpus’tan tespit et.
2. Bildirim örneklerini türüne ayır (işlemsel/pazarlama/sosyal).
3. Tercih merkezi var mı bak.
4. Deep link hedefini kontrol et.
5. Çoklu kanal tekrarını not et.
6. Persona itirazı yaz.
7. Lifecycle ile sınır çiz: anlık mı kampanya mı?
8. Tek cümle öneri: priming + muhafazakâr varsayılan.

## Derin tanı senaryoları

**Senaryo A — Çift prompt.** Web push + mobil push + e-posta izni ardışık ilk oturumda. Reddetme ihtimali artar (yüzde uydurma; sürtünme kalıbı).

**Senaryo B — Badge yalanı.** Okunmamış 3; açılınca pazarlama kartları. Trust↓.

**Senaryo C — Deep link login döngüsü.** Bildirim → auth → kayıp bağlam → kullanıcı işi unutur.

**Senaryo D — Sessiz saat ihlali.** Gece pazarlama; işlemsel değil. Skeptical ve busy-professional öfkesı.

**Senaryo E — Zorunlu pazarlama.** Hesap için gerekli mail ile kampanya aynı opt-out’ta — çıkınca işlemsel de kesiliyor izlenimi.

**Senaryo F — Ekip gürültüsü.** Her yorum/atama anlık push; özet yok. Yorgunluk → tüm bildirimleri kapatma.

## İzin ekonomisi

İzin, tek seferlik bir OS diyaloğu sermayesidir. Değer görülmeden harcanırsa kritik işlemsel kanal kaybolabilir. Priming kartı bu sermayeyi açıklar. FirstClick onboardingRisk gerekçesinde erken izin bombasını yükseltir. Platform farklarını (iOS/Android/web) uydurma kısıtlarla anlatma; genel princibi yaz.

## Öncelik katmanları

1. Güvenlik ve ödeme — yüksek.
2. Kullanıcının beklediği iş sonucu (kargo, onay) — yüksek/orta.
3. İşbirliği aktivitesi — orta, özetlenebilir.
4. Ürün ipuçları — düşük, in-app tercih.
5. Pazarlama — opt-in.
Katmanlar heuristic’tir; her ürün eşlemesi corpus’a göre yapılır.

## Analistin sık hataları

1. Tüm bildirimleri kapatmayı önermek — işlemsel olanlar gerekir.
2. Push yokluğunu otomatik zayıflık saymak.
3. CTR uplift uydurmak.
4. Lifecycle kampanyasını notification bulgusuna gömmek.
5. OS diyaloğu metnini ürün UI’sı sanmak — ayır.

## RAG bağımsız chunk notu

Chunk soruları: izin zamanı doğru mu; türler ayrılmış mı; tercih var mı; deep link çalışıyor mu? İzin, push, badge, işlemsel, tercih merkezi terimlerini koru.

## Türkiye ve dil notları

Mobil izin ve batarya ayarları push kapatmaya yol açabilir — oran uydurma; in-app özet alternatifi var mı bak. Pazarlama SMS’i izinsizse trust düşer. Türkçe aşırı kısaltma clarity bozar. Sessiz saat ayarı var mı kontrol et.

## Audit protokolü ve işlemsel tanım

Örnekleri türe ayır; kanal, öncelik, deep link, kapatılabilirlik sor. İşlemsel: OTP, fatura, güvenlik. Pazarlama: plan satışı ve kampanya. Gri alan (ipucu) varsayılan kapalı veya tercihle yönetilmeli.

## Özet sindirme

İşbirliği olaylarında günlük veya haftalık özet gürültüyü azaltır; retention garantisi diye yazılmaz.

## FirstClick rapor paragrafı

“Bildirim/izin anı [alıntı]. Priming [var/yok]. Tür [işlemsel/pazarlama/gri]. Tercih merkezi [var/yok]. Deep link [sağlam/kırık]. Öneri: [priming + muhafazakâr varsayılan]. Skor: trust/onboardingRisk — notifications.”

## Reddetme sonrası kurtarma

Kullanıcı OS iznini reddettiyse ürünün in-app veya e-posta ile kritik işlemsel yolu anlatması gerekir. Kurtarma yoksa “izin kaybı = kör ürün” riski oluşur. Kurtarma UI’sını zorla tekrar OS prompt’a bağlamak kötü pattern’dir; ayarlardan nasıl açılacağını göster.

## Sık görülen corpus çelişkileri

İlk ekranda OS push prompt’u çıkar; ürün değerini kimse görmemiştir. “Hesap bildirimi” başlığıyla plan satış push’u gelir — maskeli pazarlama. Badge 5 gösterir; açılınca üçü upsell kartıdır. Bildirim kargo sayfasına değil homepage’e düşer; bağlam kaybolur. Tercih merkezinde “tüm bildirimler” tek toggle’dır; işlemsel ile pazarlama ayrılamaz. Gece saatlerinde kampanya push’u vardır; sessiz saat ayarı yoktur. Analist izin zamanı, tür ayrımı ve deep link’i ayrı satırlarda yazar. Öneri: priming, muhafazakâr varsayılan, tür bazlı tercih, çalışan deep link.

## Persona itiraz diyalogları (örnek dil)

busy-professional: “Bu bildirim gerçekten şimdi mi gelmeliydi?”
skeptical: “İzin isterken başka şey, sonra satış mı çıkacak?”
non-technical: “Allow’a basmazsam kritik uyarıyı kaçırır mıyım?”
price-sensitive: “Badge’ler hep yükseltme mi?”
student: “Gece neden bildirim geliyor?”
Diyaloglar izin ekonomisi ve tür ayrımını test eder. Ürün cevaplayamıyorsa trust ve onboardingRisk gerekçesi güçlenir (yüzde yok).

## Kısa analist özeti

Bildirim değerlendirmesi izin zamanı, tür ayrımı, tercih kontrolü ve deep link sağlamlığına dayanır. Erken OS prompt’u, maskeli pazarlama ve şişik badge klasik zayıf sinyallerdir. İşlemsel kanal ile kampanya aynı opt-out’ta birleşmemelidir. Reddetme sonrası in-app kurtarma yoksa kritik uyarı riski oluşur. CTR veya retention uplift uydurma; priming ve muhafazakâr varsayılan öner.

İzin istemeden önce kullanıcıya neden bildirim istediğini bir cümleyle anlatmayan ürünlerde onboardingRisk gerekçesini yükselt. İşlemsel ve pazarlama kanallarını aynı anahtarla kapatan tercih merkezi trust kırığıdır; ayrıştırılmasını öner.

Deep link kırıkse bildirim değeri sıfıra iner; hedef ekranı ve login döngüsünü mutlaka kontrol et, yalnızca metin kalitesine bakma.

## Kanıt/atıf disiplini (notifications özelinde)

Bildirim bulgusu, izin isteme anının ve bildirim örneğinin somut kanıtıyla güçlenir. Analist “muhtemelen erken izin istiyorlar” demez; corpus’ta ilk oturum akışı veya ekran [doc:…] / [web:…] gösteriyorsa yazar, yoksa “izin zamanlaması gözlemlenemedi” diye işaretler. Deep link hedefi, badge davranışı ve tercih merkezi toggle’ları mümkünse alıntılanır. CTR, açılma ve retention sayıları yalnızca corpus’ta açık kaynak varsa aktarılır; yoksa analist yalnızca sürtünme kalıbını (izin bombası, kanal spam’i, kontrol yok) adlandırır. Platform kısıtları (iOS tek prompt gibi) genel prensip olarak yazılır, uydurma teknik sınır eklenmez.

## Öncelik yanlış sınıflandırma tanısı

En sık kök neden, işlemsel–pazarlama sınırının bulanması ve öncelik katmanının çökmesidir. Analist her bildirim örneğini önce türe (işlemsel/pazarlama/sosyal/ipucu) ayırır, sonra doğru katmanda mı diye sorar. Pazarlama, işlemsel kılığına girmişse (“hesap bildirimi” aslında kampanya) bu doğrudan trust bulgusudur. Her olayın kırmızı badge alması “öncelik yok” sinyalidir; kritik güvenlik uyarısı sosyal gürültü içinde kaybolur. Analist bulguyu katman diliyle yazar: “ödeme uyarısı ile ‘arkadaşın beğendi’ aynı görsel ağırlıkta → sinyal/gürültü bozuk.”

## Persona’ya göre yorum ve aksiyon reçetesi

**busy-professional** yüksek sinyal/gürültü oranı ve özet ister; her yoruma push atan ekip aracı onu tüm bildirimleri kapatmaya iter (aşırı düzeltme riski). **non-technical** korkutucu izin diyaloğunda “Don’t Allow”a kaçar, sonra kritik uyarıyı kaçırır — priming bu yüzden önemlidir. **skeptical** maskeli pazarlamayı manipülasyon olarak kodlar. Reçete: (1) izin anını ve öncesindeki priming’i tespit et; (2) örnekleri türe ayır; (3) tür bazlı tercih ve sessiz saat var mı bak; (4) deep link’i uçtan uca izle; (5) çoklu kanal tekrarını işaretle. Kenar durumlar: **push’suz ürün** otomatik zayıf değildir, in-app özet alternatifi varsa yeterli olabilir; **B2B işbirliği aracı** için varsayılan “özet”, tekil push’tan sağlıklıdır; **acil/operasyonel ürün** (uyarı sistemleri) için agresif bildirim meşrudur, aynı eşikle yargılanmaz.

## Atıf disiplini

- Bildirim metinleri: [doc:…] / [web:…].
- [kb:107-notifications]; lifecycle: [kb:106-lifecycle-messaging].
- CTR/retention istatistiği uydurma.

## Analist uygulama notu

Şablon: “[Persona] ‘[alıntı bildirim/izin]’ ile karşılaşıyor; [erken prompt|maskeli pazarlama|kontrol yok] nedeniyle [trust↓|friction]. Öneri: [priming + tercih]. Skor: trust↓ / onboardingRisk↑ gerekçesi notifications.” RAG’de izin, push, badge, işlemsel, tercih merkezi kelimelerini tut.
