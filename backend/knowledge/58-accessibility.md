# Erişilebilirlik (a11y): dışlama maliyetini okumak

FirstClick erişilebilirliği yalnızca yasal uyum kontrolü olarak değil, netlik ve güven sinyali olarak okur. Klavye tuzağı, düşük kontrast ve etiketsiz kontroller non-technical’dan skeptical’a kadar geniş sürtünme üretir. Bu dosya erişilebilirlik değerlendirme standardıdır. [kb:58-accessibility]

## Kapsam

Kapsam: klavye ile gezinme, odak görünürlüğü, kontrast, metin alternatifleri, form etiketleri, hata duyurusu, hareket/animasyon azaltma, semantik başlıklar, ve “herkes için” vaadi ile gerçek UI çelişkisi. Kapsam dışı: tam WCAG denetim raporu üretmek (FirstClick nitel sinyal okur; laboratuvar sertifikası iddiası yapmaz), saf mobil thumb zone ([kb:57-mobile-ux]), mikro kopya dili ([kb:60-microcopy]).

Heuristic: Erişilebilirlik sorunları çoğu zaman “engelli kullanıcıya özel” değil; stresli, mobil, düşük ışık ve dil bariyerli kullanıcılarda da clarity’yi düşürür. Kesin prevalans iddiası yok — yönsel okuma.

## Tanı sinyalleri

1. **Odak yok / gizli**: Tab ile gezinirken odak halkası CSS ile silinmiş. Klavye kullanıcısı kaybolur.
2. **Klavye tuzağı**: Modal açılır, ESC/Tab ile çıkılamaz; focus içeride hapis.
3. **İkonsuz metin kontrol**: Yalnızca ikon; erişilebilir ad (accessible name) yok. Ekran okuyucu “button” der.
4. **Placeholder-only alan**: Programatik label yok; a11y + form UX birlikte bozulur ([kb:56-form-design]).
5. **Düşük kontrast**: Açık gri metin açık zeminde; busy-professional dış mekanda okuyamaz.
6. **Renk tek kanal**: Hata yalnızca kırmızı kenarlık; ikon/metin yok. Renk körlüğü + netlik sorunu.
7. **Otomatik oynayan hareket**: Parallax / sürekli animasyon; vestibular hassasiyet ve dikkat dağılması. `prefers-reduced-motion` yok.
8. **Başlık atlama**: h1’den h4’e; belge yapısı bozuk.
9. **Zaman baskısı**: Formu 60 sn’de bitirme; uzatma yok.
10. **Vaad drift**: “Erişilebilir / WCAG AA” iddiası landing’de; corpus’ta odak bile yok → citation’lı çelişki, uydurma sertifika yazma.

Olumlu sinyaller: görünür fokus, modal focus trap + ESC, butonlarda metin veya aria-label, label–input bağları, kontrastı yeterli birincil metin, hata metni + aria-live, azaltılmış hareket seçeneği, atla linki (“içeriğe geç”).

## Persona tepkileri

- **busy-professional**: Düşük kontrast ve küçük hedefler “kalitesiz” kodlanır; zaman kaybı friction.
- **non-technical**: Belirsiz ikonlar ve hatada yön kaybı panik. Net metin + odak sırası yardımcı olur.
- **skeptical**: A11y vaadi ile kırık klavye deneyimi güven ve dürüstlük sorunu. “Herkes için” iddiası kanıtsızsa sert not.
- **price-sensitive**: Erişilebilirlik genelde fiyatla bağlanmaz; ama destek/iletişim kanallarının erişilemez olması churn’e yol açar.
- **student / first-timer**: Öğrenme yükü yüksek; kötü semantik yapı yardımı ve docs’u da zorlaştırır.

## İyi ve kötü örnekler

**Kötü**
Özel div “kart” tıklanabilir; Enter çalışmaz, role yok, kontrast 2.5:1 gri. Hata sadece kenarlık rengi.

**İyi**
`<button>` veya doğru role+name; fokus halkası; hata metni alanda “E-posta formatı eksik görünüyor”; renk + ikon.

**Kötü modal**
Arka plan scroll, fokus arkada, kapatma yok, ESC yok.

**İyi modal**
Fokus içeriye; Tab döngüsü; ESC ve görünür Kapat; dönüşte tetikleyiciye fokus.

**Kötü hareket**
Hero’da sürekli sallanma; kapatma yok.

**İyi**
`prefers-reduced-motion` ile sade geçiş veya statik görsel.

## FirstClick skor etkileri

- **clarity**: Kontrast, etiket, hata dili, odak sırası. A11y eksikleri clarity’nin teknik yüzüdür.
- **adoption**: Kritik akış klavyeyle veya yardımcı teknolojiyle tamamlanamıyorsa adoption↓ (ürün “kullanılamaz” sınıfına girer).
- **onboardingRisk**: Kayıt formunda label/fokus kırığı risk↑.
- Trust: sahte uyumluluk iddiası skeptical’da trust↓.
- Analist abartısın: “WCAG başarısız / yasal risk kesin” deme; gözlenen sinyali yaz, hukuki sonuç uydurma.

## Eylem kontrol listesi

1. Tab sırasını kritik akışta (kayıt/CTA) nitel kontrol et — corpus/video varsa.
2. İkon-only kontrollerde erişilebilir ad var mı bak.
3. Form label bağlarını kontrol et.
4. Hata durumunun renk dışı kanalını not et.
5. Modal/dialog kaçışını kontrol et.
6. Landing a11y iddiası varsa UI sinyalleriyle karşılaştır.
7. Kontrastı aşırı düşük metinleri işaretle (ölçüm yoksa “düşük kontrast görünümü” de; uydurma oran yazma).
8. Öneri: semantik öğe, fokus, label, hata metni — spekülatif remediasyon kodu yazma.

## Atıf disiplini

- Gözlenen UI davranışı: [doc:…] / [web:…].
- A11y kuralları: [kb:58-accessibility]; önceki kısa not [kb:46-a11y] ile çelişirse bu dosyayı derin standart say.
- “AA uyumlu” iddiasını ürün söylemeden FirstClick adına verme.
- İstatistik/yasal ceza uydurma.

## Analist uygulama notu

A11y chunk: sinyal tipi (fokus|kontrast|label|klavye tuzağı|hareket), alıntı/vaad, persona, skor. Örnek: “skeptical, landing ‘WCAG AA’ [web:…] ama modal ESC yok → trust↓ clarity↓; öneri fokus tuzağı ve kaçış; uyumluluk iddiasını kanıtlayana dek yumuşat.”


## Derin uygulama: a11y’yi FirstClick diline çevirmek

FirstClick bir denetim firması gibi “WCAG 2.2 AA başarısız” sertifikası basmaz. Bunun yerine gözlenen dışlama sinyallerini persona ve skor diline çevirir.

**Klavye yolu:** Kayıt → birincil CTA → modal kapat. Bu yol tab ile tamamlanmıyorsa adoption ve onboardingRisk gerekçesi yazılır. Video/corpus yoksa abartma; görünen `outline: none` ve ikon-only kontrolleri nitel sinyal say.

**Anlamlı adlar:** “Düzenle” ikonunun adı yoksa ekran okuyucu ve görsel kullanıcı (tooltip’siz) birlikte zarar görür. Mobilde hover yokluğu ile birleşir ([kb:57-mobile-ux]).

**Kontrast:** Ölçüm aracı çalıştırılmadıysa “düşük kontrast görünümü” de; 4.5:1 iddiasını uydurma. Marketing gri metin landing clarity’sini de düşürür ([kb:59-visual-hierarchy]).

**Hareket:** Sürekli animasyon hem a11y hem performans algısıdır. Reduced-motion yoksa iki dosyaya çapraz atıf.

**Zaman aşımı:** OTP ve form countdown uzatılamıyorsa non-technical ve yavaş okuyan kullanıcılar düşer. Görülen süre baskısını yaz.

**Dürüst vaad:** “Erişilebilir ürün” iddiası kanıt sinyali olmadan skeptical’da trust↓. Analist yasal risk yüzdesi uydurmaz.

Senaryo: Skeptical landing’de AA iddiası görür, app’te modal ESC yok → citation’lı çelişki. Non-technical hata yalnızca kırmızı border → confusion. Busy-professional düşük kontrast dış mekanda → friction.

RAG chunk anahtarları: fokus, klavye tuzağı, accessible name, kontrast, renk dışı kanal, reduced-motion, atla linki, vaad drift.


## Senaryo laboratuvarı: dışlama

**A:** Modal fokus arkada; ESC yok. Klavye kullanıcısı hapis. adoption↓. 

**B:** Hata yalnız kırmızı kenar. Renk körlüğü + non-technical. clarity↓.

**C:** Landing AA iddiası; app’te outline silinmiş. Skeptical trust↓ citation.

**D:** Otomatik video sesli; kapatma zor. Busy-professional + vestibular risk. 

**E:** OTP 30 sn; uzatma yok. First-timer düşer. onboardingRisk↑.

## Operasyonel kontrol
Tab yolu, fokus görünürlüğü, accessible name, label, kontrast görünümü, renk dışı hata, reduced-motion, zaman baskısı, vaad–UI drift. Hukuki sonuç ve kesin WCAG skoru uydurma.


## Karar çerçevesi: dışlama mı, rahatsızlık mı?

FirstClick her kontrast şikayetini aynı ağırlıkta yazmaz. Klavye tuzağı kritik akışta adoption engeli olabilir. Hafif gri secondary metin clarity’yi düşürür ama akışı durdurmayabilir. Analist şiddeti ayırır: engel (görev tamamlanamaz), sürtünme (zor ama mümkün), rahatsızlık (estetik/okuma yorgunluğu).

Engel sınıfı örnekleri: fokus tuzağı, tıklanır ama aktive edilemeyen div, formda label olmadığı için yanlış alan doldurma, zaman aşımı uzatılamadan düşme. Sürtünme: zayıf fokus halkası, küçük hedefler, hover bilgisinin mobilde yokluğu. Rahatsızlık: ağır parallax, aşırı animasyon (yine de vestibular için engel olabilir — bağlama göre yükselt).

Erişilebilirlik ile mobil ve form örtüşür. Aynı kök neden birden fazla kb dosyasına bağlanabilir; skor gerekçesinde birincil çerçeveyi seç. Örneğin placeholder-only input: birincil [kb:56-form-design], çapraz [kb:58-accessibility].

Kanıt disiplini: “ekran okuyucu test ettik” iddiasını ürün söylemeden FirstClick adına yazma. Görünen DOM/etiket/fokus sinyallerini yaz. AA/AAA sayısal iddiası ölçüm yoksa üretme. Landing’deki uyumluluk rozetini UI sinyaliyle karşılaştırmak ise doğrudur ve citation ister.


## Birleşik okuma: a11y × netlik ve güven

Erişilebilirlik FirstClick’te sıkça clarity’nin teknik alt katmanı olarak belirir. Etiketsiz kontrol, düşük kontrast, renk-only hata — hepsi “anlamıyorum / göremiyorum / ne tıklanır?” confusion’ına dönüşür. Skeptical personada ise sahte uyumluluk vaadi güven kırığıdır; bu trust boyutuna yazılır.

Form ve a11y çift bulgusunda tekrar etme: aynı placeholder-only alanı iki uzun paragraf yapma. Birinde kök neden, diğerinde çapraz atıf. Modal fokus tuzağı hem navigasyon geri semantiği hem a11y engelidir; birincil sınıfı “engel” ise a11y seç.

Hareket ve performans algısı örtüşür. Sürekli animasyon “premium” sanılabilir ama reduced-motion yokluğu dışlayıcıdır. Analist estetik tartışmasına girmez; kontrol ve kaçış var mı diye bakar.

Unutma: FirstClick hukuki danışman değildir. “Dava riski %X” yazma. Gözlenen dışlama + vaad çelişkisi yeterince güçlü bulgudur.


## Analist sözlüğü: a11y bulgu kalıpları

Kısa kalıplar RAG’te aranabilir kalmalıdır. “Fokus tuzağı — modal — ESC yok — adoption engeli.” “Renk-only hata — netlik↓ — metin/ikon kanalı ekle.” “İkon-only — accessible name yok — confusion.” “Outline silinmiş — klavye yolu belirsiz.” “AA vaadi — sinyal yok — trust drift.” Bu kalıpları ürün alıntısıyla birleştir; kalıp tek başına kanıt değildir. Heuristic şiddet sırası: kritik akış engeli > form label kırığı > kontrast rahatsızlığı. Her bulguda şiddeti açık yaz.
