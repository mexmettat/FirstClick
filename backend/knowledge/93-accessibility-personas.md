# Erişilebilirlik personları

Bu belge erişilebilirlik ihtiyacı olan kullanıcı bakış açılarını FirstClick teşhisine bağlar. Amaç yasal metin ezberi değil; klavye, ekran okuyucu, düşük görüş, motorskills, bilişsel yük ve hareket hassasiyeti sinyallerini ürün corpus'unda aramaktır. Bölümler bağımsızdır.

## Amaç ve kapsam

Erişilebilirlik personları tek tip değildir. Örnek bakışlar: klavye-only kullanıcı, ekran okuyucu kullanıcısı, düşük kontrastta zorlanan, motor kontrolü sınırlı (küçük hedefler zor), bilişsel yükten etkilenen (uzun jargon, zaman sınırlı formlar), hareket/animasyon hassasiyeti olan, sağır/az işiten (yalnızca video sesi). FirstClick'te bu bakışlar toughQuestions ve suggestion üretir; sahte uyumluluk rozeti uydurmaz.

Kapsam: teşhis soruları, anti-pattern'ler, skor (özellikle clarity ve adoption), mevcut a11y bilgisiyle uyum. Kapsam dışı: WCAG maddelerini ezbere dökmek, "yüzde kaç engelli" uydurmak.

## Davranış ve sürtünme

Klavye-only: fare hover ile açılan menü, odak halkası yok, modal tuzak. Ekran okuyucu: etiketsiz buton, görsel-only hata, yanlış başlık sırası. Düşük görüş: düşük kontrast, gri metin, ince ikon. Motor: küçük tıklama alanları, sıkı zaman aşımı. Bilişsel: çok adımlı zorunlu form, karmaşık jargon, kaybolan hata. İşitsel: altyazısız kritik video onboarding.

Bu sürtünmeler "kenar durum" değildir; yasal ve etik risk yanında, mobil ve busy kullanıcılarla da örtüşür (büyük hedef, net dil).

## Somut örnekler

Örnek A — Birincil CTA yalnızca renkle ayırt ediliyor. Düşük görüş ve netlik sorunu. Metin+ikon veya desen ekle.

Örnek B — Onboarding video ses zorunlu, altyazı yok. İşitsel persona ve sessiz ofis busy kullanıcısı kaybeder.

Örnek C — Form hata mesajı sadece kırmızı çerçeve. Ekran okuyucu ve bilişsel yük. Metin hata bağla.

Örnek D — Sonsuz carousel otomatik oynuyor, azalt hareket yok. Suggestion: duraklat ve prefers-reduced-motion.

Örnek E — "Erişilebilir" iddiası, klavye ile menü açılamıyor. Çelişki; iddiayı kır veya düzelt.

Örnek F — Captcha yalnızca görsel. Alternatif sun veya farklı doğrulama.

## Tanı soruları

Odak görünür mü? Birincil iş klavyeyle bitiyor mu? Buton ve alan etiketleri metinsel mi? Kontrast düşük mü? Hatalar metinle mi? Zaman aşımı uzatılabiliyor mu? Video altyazılı mı? Animasyon durdurulabiliyor mu? Erişilebilirlik iddiası kanıtlı mı? Mobil hedefler yeterli mi? Captcha alternatifi var mı? Jargon bilişsel yükü şişiriyor mu?

## Yanıt kalıpları

Kalıp 1 — kontrast/renk. Yalnızca renk ile anlam. Metin/desen ekle; clarity.

Kalıp 2 — klavye. Odak yok/menü hover. Odak halkası ve klavye yolu.

Kalıp 3 — hata. Yalnızca renk. Metin hata.

Kalıp 4 — medya. Altyazı yok. Altyazı veya metin alternatif.

Kalıp 5 — iddia çelişkisi. A11y vaadi var, temel kırık. İddiayı düşür veya düzelt.

Kalıp 6 — zaman aşımı. Uzatma yok. Uzat/önce uyar.

## Anti-pattern'ler

"Herkes için tasarladık" deyip test etmemek. Sahte WCAG rozeti. Erişilebilirliği yalnızca görme engeli sanmak. Overlay widget ile iş bitmiş saymak. Captcha'yı tek yol yapmak. Animasyonu zorunlu yapma. Etiketsiz ikon buton. Erişilebilirliği backlog'a atıp pazarlamada kullanmak.

## FirstClick prompt ve skor etkileri

Prompt: hangi a11y bakışı, UI kanıtı, çelişki, skor, mikro aksiyon. PersonaReaction somut: "klavye ile menüyü açamıyorum", "hatayı duyamıyorum", "kontrast okunmuyor".

Skor: Clarity etiket ve dil; Adoption tamamlanabilirlik; Trust sahte iddia varsa düşer; OnboardingRisk medya ve form engelleri. Suggestion: etiket, odak, kontrast, altyazı, hata metni, hareket kontrolü — uygulanabilir tek adımlar.

## Aksiyon kontrol listesi

- [ ] Odak ve klavye yolunu kontrol et
- [ ] Kontrast ve renk-anlamını tara
- [ ] Form hata metinlerini kontrol et
- [ ] Video altyazısını kontrol et
- [ ] Animasyon kontrolünü kontrol et
- [ ] Captcha alternatifini kontrol et
- [ ] A11y iddiasını kanıtla veya kır
- [ ] Hedef boyutlarını mobil ile birlikte değerlendir
- [ ] Uydurma uyumluluk yazma
- [ ] Mevcut a11y kb ile çelişme

## Kesişimler

Erişilebilirlik busy (hızlı netlik), novice (az bilişsel yük), mobil (hedef boyutu) ile kesişir. FirstClick suggestion tek taşla birden fazla persona kazanabilir; bunu gerekçede belirtmek değerlidir.

## Yasal dil notu

Türkiye ve AB bağlamında erişilebilirlik beklentisi artmaktadır. Analist hukuk tavsiyesi vermez; kanıtsız "uyumlu" iddiasını ürün riski olarak işaretler.

## Timeline

1) Kayıt formunda etiketsiz alan. 2) Hata yalnızca renk. 3) Video onboarding altyazısız. 4) Terk. Skor bu zinciri adoption ve clarity'ye bağlar.

## Test proxy'leri (kanıtsız yüzde yok)

Tam araçsal audit yoksa bile corpus'tan görsel ve metin sinyalleri okunur: alt metin yokluğu, "click here", düşük kontrastlı gri, otomatik oynayan video. Bunlar yeterince teşhis üretir.

## Mikro kopya

İyi: "Şifre en az 8 karakter — şu an 5", "Menüyü açmak için Enter". Kötü: yalnızca kırmızı yıldız, yalnızca ikon. Suggestion mikro kopyayı görünür ve programatik etiketle uyumlu ister.

## FirstClick ile mevcut 46-a11y ilişkisi

Bu belge persona bakışını derinleştirir; teknik kontrol listesi 46-a11y ile tamamlanır. Çakışmada somut UI gözlemi önceliklidir; genel slogan ikincildir.

## Uygulama derinliği 1

## Kesişimler

Erişilebilirlik busy (hızlı netlik), novice (az bilişsel yük), mobil (hedef boyutu) ile kesişir. FirstClick suggestion tek taşla birden fazla persona kazanabilir; bunu gerekçede belirtmek değerlidir.

## Uygulama derinliği 2

## Yasal dil notu

Türkiye ve AB bağlamında erişilebilirlik beklentisi artmaktadır. Analist hukuk tavsiyesi vermez; kanıtsız "uyumlu" iddiasını ürün riski olarak işaretler.

## Uygulama derinliği 3

## Timeline

1) Kayıt formunda etiketsiz alan. 2) Hata yalnızca renk. 3) Video onboarding altyazısız. 4) Terk. Skor bu zinciri adoption ve clarity'ye bağlar.

## Uygulama derinliği 4

## Test proxy'leri (kanıtsız yüzde yok)

Tam araçsal audit yoksa bile corpus'tan görsel ve metin sinyalleri okunur: alt metin yokluğu, "click here", düşük kontrastlı gri, otomatik oynayan video. Bunlar yeterince teşhis üretir.

## Uygulama derinliği 5

## Mikro kopya

İyi: "Şifre en az 8 karakter — şu an 5", "Menüyü açmak için Enter". Kötü: yalnızca kırmızı yıldız, yalnızca ikon. Suggestion mikro kopyayı görünür ve programatik etiketle uyumlu ister.

## Uygulama derinliği 6

## FirstClick ile mevcut 46-a11y ilişkisi

Bu belge persona bakışını derinleştirir; teknik kontrol listesi 46-a11y ile tamamlanır. Çakışmada somut UI gözlemi önceliklidir; genel slogan ikincildir.

## Uygulama derinliği 7

## Kesişimler

Erişilebilirlik busy (hızlı netlik), novice (az bilişsel yük), mobil (hedef boyutu) ile kesişir. FirstClick suggestion tek taşla birden fazla persona kazanabilir; bunu gerekçede belirtmek değerlidir.

## Uygulama derinliği 8

## Yasal dil notu

Türkiye ve AB bağlamında erişilebilirlik beklentisi artmaktadır. Analist hukuk tavsiyesi vermez; kanıtsız "uyumlu" iddiasını ürün riski olarak işaretler.

## Uygulama derinliği 9

## Timeline

1) Kayıt formunda etiketsiz alan. 2) Hata yalnızca renk. 3) Video onboarding altyazısız. 4) Terk. Skor bu zinciri adoption ve clarity'ye bağlar.

## Uygulama derinliği 10

## Test proxy'leri (kanıtsız yüzde yok)

Tam araçsal audit yoksa bile corpus'tan görsel ve metin sinyalleri okunur: alt metin yokluğu, "click here", düşük kontrastlı gri, otomatik oynayan video. Bunlar yeterince teşhis üretir.

## Uygulama derinliği 11

## Mikro kopya

İyi: "Şifre en az 8 karakter — şu an 5", "Menüyü açmak için Enter". Kötü: yalnızca kırmızı yıldız, yalnızca ikon. Suggestion mikro kopyayı görünür ve programatik etiketle uyumlu ister.

## Uygulama derinliği 12

## FirstClick ile mevcut 46-a11y ilişkisi

Bu belge persona bakışını derinleştirir; teknik kontrol listesi 46-a11y ile tamamlanır. Çakışmada somut UI gözlemi önceliklidir; genel slogan ikincildir.

## Uygulama derinliği 13

## Kesişimler

Erişilebilirlik busy (hızlı netlik), novice (az bilişsel yük), mobil (hedef boyutu) ile kesişir. FirstClick suggestion tek taşla birden fazla persona kazanabilir; bunu gerekçede belirtmek değerlidir.

## Uygulama derinliği 14

## Yasal dil notu

Türkiye ve AB bağlamında erişilebilirlik beklentisi artmaktadır. Analist hukuk tavsiyesi vermez; kanıtsız "uyumlu" iddiasını ürün riski olarak işaretler.

## Uygulama derinliği 15

## Timeline

1) Kayıt formunda etiketsiz alan. 2) Hata yalnızca renk. 3) Video onboarding altyazısız. 4) Terk. Skor bu zinciri adoption ve clarity'ye bağlar.

## Uygulama derinliği 16

## Test proxy'leri (kanıtsız yüzde yok)

Tam araçsal audit yoksa bile corpus'tan görsel ve metin sinyalleri okunur: alt metin yokluğu, "click here", düşük kontrastlı gri, otomatik oynayan video. Bunlar yeterince teşhis üretir.

## Uygulama derinliği 17

## Mikro kopya

İyi: "Şifre en az 8 karakter — şu an 5", "Menüyü açmak için Enter". Kötü: yalnızca kırmızı yıldız, yalnızca ikon. Suggestion mikro kopyayı görünür ve programatik etiketle uyumlu ister.
