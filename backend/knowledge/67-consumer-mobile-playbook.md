# Tüketici mobil uygulama sektör playbooku

Bu dosya FirstClick analizinde sektör paketi **tüketici mobil (consumer mobile)** seçildiğinde ağırlık kazanır. Bölümler bağımsız retrieval için sektör bağlamını kendi içinde tekrarlar.

## Kapsam ve iş modeli bağlamı

Tüketici mobil ürünlerde gelir genelde reklam, abonelik (IAP), freemium veya işlem komisyonundan gelir. Dağıtım App Store / Play Store listesi, deep link ve push ile olur. İlk izlenim mağaza ekranı + ilk açılış (splash, permission, onboarding) birleşimidir. B2B SaaS'tan farkı: alıcı komitesi yoktur; karar bireysel ve hızlıdır; dikkat süresi kısadır. Heuristik: izin istekleri değerden önce gelirse drop-off artar; paywall değer görülmeden çıkarsa distrust oluşur. FirstClick consumer mobile analizinde pitch "basit ve hızlı" diyorsa corpus'ta ilk oturum adım sayısı, permission zamanlaması ve offline/performans vaadi aranır. İstatistik uydurma; mağaza rating'i corpus'ta yoksa iddia etme.

## İlk izlenim soruları (tüketici mobil)

Analist sorar: (1) Uygulama ne işe yarıyor — mağaza alt başlığı ve ilk ekran aynı dili mi konuşuyor? (2) İlk ekranda kayıt zorunlu mu, değeri önce mi gösteriyor? (3) Konum/bildirim/rehber izinleri ne zaman isteniyor? (4) Ana CTA başparmak bölgesinde mi? (5) Performans vaadi (hızlı, hafif) ile yükleme hissi uyumlu mu? (6) Abonelik varsa fiyat ve iptal yolu görünür mü? First-timer ve student personalar jargonsuz, görsel rehber ister; price-sensitive IAP şeffaflığı ister; skeptical sahte sosyal kanıt ve aşırı izin ister. "Hayatını değiştir" gibi abartılı sloganlar clarity yerine hype üretir.

## Onboarding ve aktivasyon (tüketici mobil)

Aktivasyon genelde ilk başarılı çekirdek eylem: ilk kayıtlı içerik, ilk antrenman, ilk gönderi, ilk liste, ilk ödeme akışı denemesi. Onboarding carousel 5+ slaytsa busy kullanıcı atlar; değerli etkileşim gecikir. İyi pattern: skip edilebilir kısa tur + boş durumda tek net CTA + örnek içerik. Kötü pattern: zorunlu hesap + e-posta doğrulama + profil fotoğrafı + arkadaş daveti zinciri değerden önce. Permission: bildirim iznini aha sonrasına ertelemek yaygın iyi uygulamadır (heuristic). Deep link ile gelen kullanıcıda onboarding'i kısaltmak adoption'ı destekler. FirstClick Onboarding timeline'ında adım sayısı, skip varlığı ve permission sırası yazılır.

## Fiyat, güven ve uyum uyarıları (tüketici mobil)

IAP ve abonelikte fiyat, deneme süresi, yenileme ve iptal dili mağaza kuralları ve yerel tüketici beklentisiyle uyumlu olmalıdır. "Ücretsiz" deyip hemen soft-paywall göstermek price-sensitive ve skeptical'da distrust üretir. KVKK: hangi verinin neden istendiği izin diyalogunda ve gizlilik metninde açıklanmalıdır; çocuklara yönelik ürünlerde ek dikkat gerekir — kesin yasal hüküm verme, eksik aydınlatmayı risk sinyali olarak işaretle. Tracking / ATT benzeri şeffaflık metinleri varsa tutarlılık kontrol et. Sahte indirim geri sayımı ve manipülatif dark pattern'ler etik ve trust skorunu baskılar.

## Persona tepkileri (tüketici mobil)

Busy-professional: uzun carousel ve zorunlu sosyal login'de terk. Price-sensitive: yıllık plan baskısı ve gizli iptal. Skeptical: şişirilmiş rating iddiası, stok testimonial. Non-technical: ayar labirenti ve jargon. Student: reklam sıklığı ve "premium gerekli" duvarı. First-timer: kategori belirsizliği. Persona tepkisinde mağaza metni, screenshot ve ilk ekran kopyasından alıntı yap. "Kullanıcıların %90'ı..." gibi corpus'ta olmayan iddiaları persona ağzından uydurma.

## Drop-off zaman çizelgesi örüntüleri (tüketici mobil)

Heuristic drop-off noktaları: Store listing — belirsiz screenshot. İlk açılış — splash + zorunlu update. Permission — erken bildirim/konum. Signup — zorunlu hesap. Onboarding — uzun tur. Aha öncesi paywall. Push opt-in reddi sonrası sessizlik (retention riski). Performans — ilk frame gecikmesi confusion değil friction olarak işaretlenebilir. Timeline'da mobil özel aşamalar: Permission, Soft-paywall, Push. Oran yazma; gözlenen UI sırasını yaz.

## Corpus'ta aranacak kanıtlar (tüketici mobil)

Mağaza açıklaması, screenshot metinleri, onboarding slaytları, permission diyalog kopyası, paywall ekranı, iptal/abonelik SSS, gizlilik politikası linki, boş durum CTA, tab bar etiketleri, performans iddiaları, yaş/uygunluk işaretleri. Çelişki: "Hesap gerekmez" vs zorunlu signup; "Gizliliğe önem veriyoruz" vs aşırı izin; "3 saniyede başla" vs 7 adım. Kanıt yoksa eksik sinyal notu.

## FirstClick skor etkileri (tüketici mobil)

ClarityScore: mağaza + ilk ekran tutarlılığı. AdoptionScore: aha öncesi adım sayısı ve skip. OnboardingRisk: permission ve zorunlu hesap ile yükselir. Trust: IAP şeffaflığı, KVKK, manipülatif paywall. Performans vaadi bozulursa adoption ve firstImpression birlikte etkilenir. Gerekçeyi alıntıyla bağla.

## Aksiyon kontrol listesi (tüketici mobil)

1. Mağaza alt başlığı ile ilk ekran vaadini hizala. 2. Değeri signup'tan önce göster (mümkünse). 3. Permission'ı gerekçe cümlesiyle ve aha sonrasına taşı. 4. Onboarding'i 3 slayttan aza indir, skip ekle. 5. Paywall'u ilk değerden sonraya al; fiyat/iptal net olsun. 6. Boş duruma tek CTA koy. 7. KVKK/izin metinlerini sadeleştir. 8. Dark pattern geri sayımlarını kaldır. 9. Thumb-zone birincil aksiyon kontrolü yap. 10. FirstClick bulgularını ekran alıntısıyla kilitle.

## Derin teşhis: mağaza listesi ile uygulama içi tutarlılık (tüketici mobil)

Tüketici mobilinde ilk izlenim çoğu zaman mağaza listesinde başlar. FirstClick corpus'unda store screenshot metinleri, alt başlık ve uygulama içi ilk ekran birlikte okunmalıdır. Çelişki örnekleri: screenshot "Tek dokunuşla başla" gösterirken uygulama zorunlu 6 adımlı profil ister; alt başlık "ücretsiz" iken ilk oturumda soft-paywall çıkar. Bu çelişkiler firstImpression ve trust'ı birlikte etkiler. Analist mağaza metni yoksa yalnızca uygulama içi kanıta dayanır ve "store sinyali yok" notunu düşer. Rating/indirilme sayısı corpus'ta yoksa abartılı sosyal kanıt iddiası ürün metninden geliyorsa skeptical toughQuestion üretir.

## Derin teşhis: izin mimarisi ve değer sırası (tüketici mobil)

İzin istemek teknik ihtiyaçtır; zamanlama ürün kararlıdır. Heuristik sıra: önce çekirdek değeri göster, sonra izin gerekçesini tek cümlede açıkla, sonra sistem diyalogunu aç. Konum izni harita özelliği görülmeden istenirse non-technical ve skeptical distrust yazar. Bildirim izni aha öncesi istenirse reddedilme ve sonraki sessizlik riski artar (oran uydurma). Rehber/kişiler erişimi "arkadaş bul" için erken isteniyorsa privacy kaygısı yükselir. FirstClick timeline'da Permission olayını ayrı tut; "kullanıcı izin vermedi" varsayımı uydurma — UI sırasını yaz.

## Derin teşhis: abonelik ve soft-paywall (tüketici mobil)

Consumer mobile'da freemium, trial ve lifetime paketler karışabilir. Analist sorar: Ücretsiz katmanda anlamlı iş yapılabiliyor mu? Paywall hangi eylemde çıkıyor? Fiyat yerel para ve dönem net mi? İptal yolu uygulamada mı yoksa yalnızca mağazada mı anlatılıyor? "3 günde iptal etmezsen ücretlenirsin" dili şeffaf olabilir; gizlenmişse dark pattern sayılır. Price-sensitive persona yıllık planı varsayılan seçili görünce itiraz eder. Student persona reklam+paywall çift baskısında adoption düşüşü yaşar. Kanıtsız "binlerce premium üye" iddiasını citation'sız bırakma.

## Derin teşhis: bildirim, retention ve yorgunluk (tüketici mobil)

Hafta-1 retention mobil için kritik olsa da FirstClick sayısal churn uydurmaz. Corpus'ta push kopyası, e-posta/SMS tercihleri ve sessiz saatler aranır. Her açılışta permission veya rating modalı busy-professional friction üretir. Değer vaadi olmayan "Seni özledik" spam'i trust'ı aşındırır. Aktivasyon sonrası boşluk: kullanıcı çekirdek eylemi yaptıysa bir sonraki anlamlı eylem önerilmelidir. Analist retention önerisini UI kanıtına bağlar.

## İyi ve zayıf örnek kalıpları (tüketici mobil)

İyi: skip'li 2 slayt + örnek feed. Zayıf: 8 slayt zorunlu tur. İyi: "Bildirimleri aç — günlük özet için" gerekçeli. Zayıf: açılışta gerekçesiz push. İyi: ücretsiz çekirdek eylem sonra paywall. Zayıf: splash sonrası hemen yıllık abonelik. İyi: hata "Tekrar dene / Çevrimdışı kaydedildi". Zayıf: generic "Something went wrong".

## Analist yazım şablonu (tüketici mobil)

"İlk ekran '[alıntı]' kayıt zorunlu kılıyor; first-timer friction; onboardingRisk↑; değeri önce gösteren guest/demo yolu ekle." Mağaza-uygulama çelişkisinde her iki alıntıyı yan yana koy.

## Ek corpus kontrol listesi ve yanlış pozitifler (tüketici mobil)

Yanlış pozitif: her permission isteğini otomatik "kötü" saymak. Analist bağlamı okur: kamera izni QR özelliğinin hemen öncesinde gerekçeliyse friction düşük olabilir. Yanlış negatif: paywall'u yalnızca fiyat sayfası sanmak; modal soft-paywall da paywall'dur. Corpus'ta aranacak ek sinyaller: age gate, parental gate, accessibility etiketleri, tablet layout, widget/live activity vaadi, widget yokluğu çelişkisi, dark mode vaadi. FirstClick skorunda erişilebilirlik vaadi varsa a11y sinyali yoksa clarification notu düş. "Viral büyüme" iddiası invite UI olmadan adoption vaadiyle çelişir. Bu bölüm bağımsız retrieval için: tüketici mobil analizinde permission, paywall ve mağaza tutarlılığı birlikte tartılır; istatistik uydurulmaz.

## Ek uzman notu 1

Tüketici mobilinde session uzunluğu kısa heuristic'ine rağmen FirstClick süre ölçmez; adım sayısını ve permission sırasını nitel yazar. Rating modalı her açılışta ise friction.

## Ek uzman notu 2

Offline vaadi olan uygulamada hata durumunda 'bağlantı yok' mikro kopyası ve yerel kayıt sinyali aranır. Yoksa vaad-UI boşluğu.
