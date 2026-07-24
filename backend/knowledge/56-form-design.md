# Form tasarımı: sürtünme, doğrulama ve tamamlanma

FirstClick’te formlar kayıt, onboarding, checkout, davet ve ayarların kritik geçitleridir. Zorunlu alan şişmesi, geç validasyon ve belirsiz hata dili drop-off üretir. Bu dosya form UX değerlendirme standardıdır. [kb:56-form-design]

## Kapsam

Kapsam: alan sayısı ve sırası, etiket/placeholder ayrımı, zorunlu vs isteğe bağlı, satır içi doğrulama, gönderim durumları, çok adımlı formlar, mobil klavye türleri, otomatik doldurma, gizlilik alanları (şifre, KVKK), ve “tek tıkla” vaadi ile gerçek form yükü çelişkisi. Kapsam dışı: genel empty/error sayfaları ([kb:55-empty-loading-error-states]), ödeme psikolojisi ([kb:04-pricing-psychology]), saf erişilebilirlik kuralları ([kb:58-accessibility] ile çapraz).

Heuristic: Her ek zorunlu alan tamamlanma olasılığını düşürür (yönsel gözlem; kesin % verme). İlk değere giden formda yalnızca o an gerekenleri iste.

## Tanı sinyalleri

1. **Zorunlu alan şişmesi**: Kayıtta unvan, şirket büyüklüğü, telefon, nasıl duydunuz… hepsi zorunlu. price-sensitive ve student kaçar.
2. **Placeholder = etiket**: Placeholder kaybolunca bağlam gider; non-technical hangi alan olduğunu unutur.
3. **Submit sonrası validasyon**: Uzun formu doldurup sonda kırmızı patlama; friction high.
4. **Belirsiz hata**: “Invalid input” — hangi kural? Şifre politikası gizli.
5. **Çift submit**: Buton disable değil; çift kayıt / çift ödeme korkusu.
6. **Parola tuzağı**: Kurallar sonda, görünürlük toggle yok, yapıştırma engelli (heuristic: yapıştırmayı engelleme genelde zararlır).
7. **KVKK/izin gömülü**: Uzun hukuki metin zorunlu checkbox’ta okunaksız; skeptical güvensiz, non-technical atlar.
8. **Mobilde yanlış klavye**: E-posta için metin, telefon için full QWERTY; inputmode eksik.
9. **Çok adımda ilerleme yok**: Wizard’da adım göstergesi yok; busy-professional süre kestiremez.
10. **Vaad çelişkisi**: “30 saniyede kayıt” + 12 alan → citation’lı bulgu.

Olumlu sinyaller: net etiket, isteğe bağlı işaretli, satır içi ve nazik validasyon, şifre kuralları önceden, loading/disabled submit, progress (Adım 2/3), sosyal/OAuth ile kısaltma, “neden istiyoruz?” mikro kopyası ([kb:60-microcopy]).

## Persona tepkileri

- **busy-professional**: Minimum alan, OAuth, sonra tamamla. Zorunlu demo soruları churn. Skip’lenebilir profil adımları ister.
- **non-technical**: Hata dilinde panik. Örnek format (“ornek@sirket.com”), yardım metni, telefon maskesi.
- **skeptical**: Gereksiz veri talebi (“doğum günü neden?”) güven kırar. KVKK linki ve amaç açıklaması şart.
- **price-sensitive**: Kart bilgisini denemeden istemek kritik sürtünme. Adres/fatura alanlarını ertele.
- **student / first-timer**: Okul/şirket zorunluluğu uyumsuz; “bireysel” seçeneği yoksa drop-off.

## İyi ve kötü örnekler

**Kötü kayıt**
Ad, soyad, e-posta, telefon, şirket, unvan, çalışan sayısı, ülke, nasıl duydunuz, iki parola, üç pazarlama checkbox — tek sayfa. CTA: “Ücretsiz başla” (ironik).

**İyi kayıt**
E-posta + parola (veya Google). Sonra isteğe bağlı “çalışma alanın adı”. Kart yok. Heuristic: time-to-value’yu kısalt.

**Kötü validasyon**
Gönder’e basınca “Form hatalı.” Alanlar işaretli değil.

**İyi validasyon**
E-posta blur’da kontrol; şifre alanında anlık kural checklist (büyük harf, uzunluk). Gönder’de focus ilk hatalı alana.

**Kötü wizard**
5 adım, geri veri siler, ilerleme yok, adım 4’te zorunlu entegrasyon.

**İyi wizard**
3 adım, progress, geri korunur, entegrasyon “Sonra”. Draft kayıt sinyali.

**Kötü mobil**
Küçük dokunma alanları, autofill kırık, autocomplete yok; kullanıcı her seferinde yazar.

**İyi mobil**
Uygun inputmode/type, 44px dokunma hedefi heuristic’i, görünür parola, sticky birincil buton.

## FirstClick skor etkileri

- **clarity**: Etiket, yardım, hata dili. Jargonlu alan adları clarity↓.
- **adoption**: Form tamamlanmadan değer yoksa form = aktivasyon kapısı. Uzun form adoption↓.
- **onboardingRisk**: Kayıt/kurulum formları doğrudan risk skoru. Kart zorunlu trial risk↑.
- Trust: aşırı veri + belirsiz amaç. Friction: geç validasyon, veri kaybı.
- Landing “tek tık / 30 sn” ile alan sayısı çelişirse skor gerekçesinde alıntı zorunlu.

## Eylem kontrol listesi

1. Kritik formdaki alanları listele; zorunlu olanları say.
2. Etiket vs placeholder kullanımını kontrol et.
3. Validasyon zamanlamasını not et (satır içi / submit).
4. Hata mesajlarını alıntıla; eyleme dönük mü bak.
5. Submit butonu loading/disabled durumunu kontrol et.
6. Wizard varsa adım sayısı, progress, geri davranışı yaz.
7. Kart/ödeme isteğinin trial vaadiyle uyumunu kontrol et.
8. Öneri: alan erteleme, OAuth, mikro “neden?” metni — uydurma alan ekleme.

## Atıf disiplini

- Form alanları ve mikro metinler: [doc:…] / [web:…].
- Form kuralları: [kb:56-form-design].
- Genel hata sayfası vs alan hatası: [kb:55-empty-loading-error-states].
- “Her alan %X drop-off” gibi uydurma istatistik yazma; yönsel heuristic kullan.
- KVKK iddiası ürün metninde yoksa uydurma; “corpus’ta amaç açıklaması görmedim” de.

## Analist uygulama notu

Form bulgusu chunk’ı: form amacı (kayıt|checkout|davet), zorunlu alan sayısı, validasyon tipi, persona sürtünmesi, skor. Örnek: “price-sensitive, trial’da kart + 9 zorunlu alan → onboardingRisk↑ adoption↓; öneri kartı ertele, alanları 3’e indir (heuristic).”


## Derin uygulama: form maliyeti ve aşamalı veri toplama

FirstClick formları “alan sayısı” ile cezalandırır ama asıl mesele zorunluluk, zamanlama ve korkudur. İsteğe bağlı 10 alan, zorunlu 4 alandan daha az zararlı olabilir — heuristic; kesin formül yok.

**Aşamalı profil**: Kayıtta e-posta; aha sonrası “şirket büyüklüğü”; faturalandırmada vergi no. Erken sorulan her B2B alanı aktivasyonu geciktirebilir ([kb:62-activation]). Corpus’ta aşama yoksa “erken toplanan alanlar” listesini çıkar.

**Akıllı varsayılanlar**: Ülke, para birimi, dil tahminleri sürtünmeyi azaltır; yanlış varsayılan skeptical’ı kızdırır. Değiştirilebilir olmalı. TR pazarında varsayılan dil/para birimi tutarsızsa ([kb:36-turkey-market]) netlik notu düş.

**Şifre ve hesap güvenliği**: Kuralları önceden göster. “Paste engeli” genelde zararlır (heuristic). SSO seçeneği B2B’de adoption’ı artırabilir ama tek seçenek zorunlu Google bazı kullanıcıları dışlar — görülen zorunluluğu yaz.

**Inline vs summary hata**: Uzun formlarda özet hata bandı + alan seviyesi birlikte iyi çalışır. Yalnızca özet bandı non-technical’ı kaybeder. Odak yönetimi: ilk hatalı alana taşıma corpus’ta görülüyorsa olumlu sinyal.

**Hukuki checkbox’lar**: “Sözleşmeyi okudum” tek başına güven yaratmaz; skeptical link ister. Pazarlama izni zorunluysa price-sensitive ve KVKK hassasiyeti trust↓. Amaç açıklaması mikro kopya dosyasıyla bağlanır ([kb:60-microcopy]).

**Çok adımlı kayıt**: Progress göstergesi süre algısını iyileştirir ([kb:64-performance-perception]). Geri veri silmesi friction high. Adım 2’de ödeme istemek trial vaadiyle çelişebilir.

**Erişilebilir form**: Label, hata metni, yeterli dokunma alanı ([kb:57-mobile-ux], [kb:58-accessibility]). Placeholder-only anti-pattern hem form hem a11y bulgusudur — çift yazılabilir ama kök neden tek.

RAG chunk anahtarları: zorunlu alan, satır içi validasyon, wizard progress, OAuth, kart erteleme, KVKK checkbox, autocomplete, çift submit.


## Senaryo laboratuvarı: form drop-off

**Senaryo A — Price-sensitive trial:** “Ücretsiz başla” → kart + adres + vergi. onboardingRisk↑ adoption↓. Öneri: kartı ertele; vaadi düzelt veya akışı kısalt.

**Senaryo B — Busy-professional:** 9 zorunlu alan, OAuth yok, progress yok. Friction. Öneri: e-posta ile başla, profili sonra.

**Senaryo C — Non-technical:** Submit sonrası “Invalid”. Hangi alan belirsiz. Panik. Öneri: satır içi + spesifik mesaj.

**Senaryo D — Skeptical:** Doğum günü zorunlu, amaç yok. Trust↓. Öneri: kaldır veya “neden?” helper.

**Senaryo E — Mobil:** Kaydet butonu klavye altında. Student tamamlayamaz. Öneri: görünür CTA / inputmode.

Çok adımlı formlarda her adım tek karar sormaya yaklaşmalı (heuristic). Adım başına 8 alan, wizard’ı tek sayfalık formun parçalanmış hali yapar — fayda düşük, süre algısı kötü.


## Operasyonel kontrol: form QA listesi (analist)

1. Zorunlu alan sayısı. 2. Etiket/placeholder. 3. Validasyon zamanı. 4. Hata spesifikliği. 5. Submit loading. 6. Wizard progress/geri. 7. Kart timing. 8. KVKK amacı. 9. Mobil klavye. 10. Vaad süre/alan çelişkisi.

Formlar aktivasyon kapısıysa alan kesmek özellik kesmek değildir; değer zamanlamasıdır. Analist “daha az alan” önerirken hangi alanın neden erteleneceğini tek cümleyle gerekçelendirir — rastgele silme listesi değil.


## Karar çerçevesi: hangi alanı şimdi isteyeceğiz?

Her form alanı gizli bir ürün kararıdır: “bu bilgi olmadan değer üretemez miyiz?” FirstClick bu soruyu alan listesinin yanına yazar. Cevap “üretemeyiz” ise alan gerekçeli zorunluluktur. Cevap “pazarlama ister” ise erken zorunluluk onboardingRisk adayıdır. Cevap “belki bir gün segmentasyon” ise ertele.

B2B formlarında unvan ve şirket büyüklüğü sık sorulur. Bunlar satış için faydalı olabilir ama aktivasyon için nadiren zorunludur. Analist satış ihtiyacını yok saymaz; zamanlamayı sorgular. Aha sonrası “çalışma alanını özelleştir” adımında sormak farklı sürtünmedir.

Hata dili formun duygusal sıcaklığıdır. “Yanlış” tek kelimesi non-technical’ı dondurur. “Şifre en az 8 karakter olmalı — şu an 6” hem kural hem durumu gösterir. Şifre yöneticisi yapıştırmasını engellemek heuristic olarak zararlıdır; güvenlik gerekçesi corpus’ta yoksa “yapıştırma engeli sürtünme” diye yaz.

Çok adımlı formlarda her adımın başlığı sonuç vaadi taşımalıdır: “Hesabını oluştur”, “Çalışma alanını adlandır”, “İstersen ekibi davet et (sonra da olur)”. “Adım 3” başlığı clarity taşımaz. Progress çubuğu süre algısını iyileştirir ama yanlış adım sayısı (gizli adımlar) skeptical’da güven kırar.

Mobil formlarda `type` ve `inputmode` yanlışlığı fiziksel maliyettir. E-posta için metin klavyesi, sayısal alan için full QWERTY. Corpus’ta HTML görünüyorsa not et; görünmüyorsa davranışsal ipucu (kullanıcı şikayeti yoksa spekülatif “mutlaka kırık” deme).
