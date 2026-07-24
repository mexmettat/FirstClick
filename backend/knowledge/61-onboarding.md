# Onboarding: ilk oturumdan ilk anlayışa

FirstClick onboarding’i tur (tour) sayısıyla değil, kullanıcının ürün kategorisini ve ilk başarısını anlayıp anlamadığıyla ölçer. Zorunlu wizard, atlanamayan modal ve rehbersiz boşluk onboardingRisk’i yükseltir. Bu dosya onboarding değerlendirme standardıdır. [kb:61-onboarding]

## Kapsam

Kapsam: karşılama, rol/amaç seçimi, checklist, ürün turu, tooltip dizileri, örnek veri, atlanabilirlik, e-posta ile devam ([kb:29-onboarding-emails] ile çapraz), ve time-to-value yolu. Kapsam dışı: aktivasyon olayının metrik tanımı ([kb:62-activation]), hafta-1 retention ([kb:63-retention]), form alan tekniği ([kb:56-form-design]).

Heuristic: Onboarding, kullanıcıyı eğitmek için değil, ilk değere taşımak için vardır. Eğitim maliyeti yüksekse progressive disclosure tercih edilir (yönsel kural).

## Tanı sinyalleri

1. **Zorunlu uzun tur**: 8+ slide, skip yok. busy-professional terk eder.
2. **Rehbersiz empty**: “Welcome!” + boş ekran; first-timer kaybolur.
3. **Erken entegrasyon zorunluluğu**: Slack/Jira olmadan devam yok; aha gecikir.
4. **Rol sormadan aynı yol**: Satış ve finance aynı checklist — alakasız adımlar.
5. **Kart/ödeme erken**: “Ücretsiz dene” sonrası kart; price-sensitive drop-off.
6. **Tooltip yağmuru**: Her tıkta balon; öğrenme değil engel.
7. **Örnek veri etiketsiz**: Kullanıcı sahte veriyi gerçek sanır veya skeptical güvensiz bulur.
8. **Tekrarlayan onboarding**: Her girişte aynı tur; adoption↓.
9. **Vaad çelişkisi**: “2 dakikada kurulum” + 15 adım → citation.
10. **Mobilde kırık onboarding**: Desktop wizard mobilde taşar ([kb:57-mobile-ux]).

Olumlu sinyaller: skip, 3–5 adımlık checklist, örnek veri net etiketli, amaç/rol ile yol seçimi, ilk CTA empty’ye bağlı, tur isteğe bağlı, ilerleme kaydı, “sonra tamamla”.

## Persona tepkileri

- **busy-professional**: Skip + hızlı yol. Süre ve sonuç sinyali. Uzun eğitim videosu isteğe bağlı kalsın.
- **non-technical**: Adım adım, görsel, jargon yok. İnsan destek sinyali (“takıldın mı?”) faydalı — baskıcı chat değil.
- **skeptical**: İzin ve veri taleplerinde “neden?” Açık örnek veri etiketi. Abartılı “AI seni tanıyacak” iddiası ters.
- **price-sensitive**: Kart yok, limitler net, yükseltme sonra. Öğrenci indirimi varsa onboarding’de görünür olmalı (corpus’ta varsa).
- **student / first-timer**: Kategori açıklaması (“bu ürün X işine yarar”), template, başarı kutlaması ölçülü.

## İyi ve kötü örnekler

**Kötü**
Kayıt → 10 slide tur → zorunlu entegrasyon → boş dashboard → “Dokümanları oku”.

**İyi**
Kayıt → “Bugün ne yapmak istiyorsun?” (3 seçenek) → ilgili template → checklist (3 adım) → ilk başarı toast → isteğe bağlı tur.

**Kötü checklist**
12 madde, %0, hiçbiri birincil değere bağlı değil (“profil fotoğrafı yükle” üstte).

**İyi checklist**
3 madde: veri ekle / bir iş tamamla / (isteğe bağlı) davet et. İlerleme kaybolmaz.

**Kötü örnek veri**
“Acme Corp — $2.4M” etiketsiz; kullanıcı raporları gerçek sanır.

**İyi örnek veri**
Banner: “Örnek veri ile geziyorsunuz — kendi verinize geç” + tek tık temizle.

## FirstClick skor etkileri

- **clarity**: Yol ve dil netliği. Jargonlu tur clarity↓.
- **adoption**: İlk başarıya ulaşım. Onboarding tıkalıysa adoption↓.
- **onboardingRisk**: Bu dosyanın ana skor boyutu. Skip yok, empty rehbersiz, erken kart = risk↑.
- Timeline: Landing OK + setup friction = klasik pattern ([kb:09-drop-off-patterns]).
- Aktivasyonla bağ: onboarding köprü, aktivasyon olay tamamlanma ([kb:62-activation]).

## Eylem kontrol listesi

1. İlk oturum adımlarını sırayla çıkar; skip var mı bak.
2. Checklist madde sayısını ve birincil değerle bağını değerlendir.
3. Empty state’in onboarding CTA’sını alıntıla.
4. Örnek veri etiketini kontrol et.
5. Erken zorunlu entegrasyon/ödeme var mı işaretle.
6. Landing süre vaadi ile adım sayısını karşılaştır.
7. Persona bazlı yol (rol/amaç) var mı bak.
8. Öneri: adım kes, skip ekle, empty’ye görev bağla — özellik uydurma.

## Atıf disiplini

- Onboarding ekranları: [doc:…] / [web:…].
- Bu standart: [kb:61-onboarding]; temel kısa not [kb:02-onboarding-activation].
- E-posta devamı: [kb:29-onboarding-emails].
- “İdeal onboarding ≤5 dk” ifadesini mutlak yasa gibi değil heuristic olarak etiketle.
- Ölçülmemiş “%X aktivasyon artışı” uydurma.

## Derin uygulama: onboarding anti-pattern’leri

**Kütüphane turu anti-pattern’i**: Ürünün tüm menülerini sırayla tanıtan slide’lar. Kullanıcı henüz bağlamı olmadığı için bilgi yapışmaz. Yerine: tek görevde contextual tip (işe yarayan anda kısa ipucu).

**Kimlik doğrulama şişmesi**: E-posta doğrula + telefon OTP + şirket domain + admin onayı zinciri ilk değere engel. Güvenlik gerekliyse bile FirstClick, hangi adımların ertelenebileceğini sorar. Corpus’ta zorunluluk gerekçesi yoksa “gerekçe corpus’ta yok” de.

**Başarı tiyatrosu**: Konfeti + sosyal paylaşım zorunluluğu + NPS ilk oturumda. Skeptical ve busy-professional için erken. İlk başarıda küçük onay; NPS/invite sonra ([kb:62-activation], [kb:43-invite-loops]).

**Tekrarlayan engel**: Kullanıcı checklist’i kapatsa bile her oturumda modal. “Bir daha gösterme” yoksa friction. Tercih kalıcılığı onboarding hijyenidir.

Çok ürünlü suite’lerde onboarding yanlış ürünü öne çıkarabilir. Landing “fatura” vaat ederken tur “CRM pipeline” anlatıyorsa drift vardır. Analist vaad–yol çelişkisini [web:…] + UI alıntısıyla yazar.

## Analist uygulama notu

Onboarding chunk: adım tipi (tur|checklist|empty|zorunlu entegrasyon), atlanabilirlik, persona, time-to-value engeli, onboardingRisk düzeyi. Örnek: “busy-professional, skip’siz 8 slide → onboardingRisk↑ adoption↓; öneri skip + 3 adımlı checklist.”


## Senaryo laboratuvarı: ilk oturum

**A:** Skip’siz 9 slide. Busy-professional terk. onboardingRisk↑.

**B:** Welcome + boş dashboard. First-timer. Öneri: empty CTA + template.

**C:** Zorunlu Slack. Aha gecikir ([kb:62-activation]). Öneri: sonra bağla.

**D:** Kart early. Price-sensitive. Öneri: ertele / vaadi düzelt.

**E:** Etiketsiz örnek ARR. Skeptical. trust↓.

## Operasyonel kontrol
Skip, adım sayısı, checklist-değer bağı, örnek etiket, erken ödeme/entegrasyon, rol yolu, mobil tur, süre vaadi drift, tekrarlayan modal.


## Karar çerçevesi: tur mu, görev mi?

Onboarding tasarımı iki kutuptan birine yatmalıdır: eğitim turu veya görev yolu. FirstClick görev yolunu önceler çünkü aha’ya bağlanır. Tur, isteğe bağlı ve atlanabilir olduğunda tamamlayıcıdır. Zorunlu tur + rehbersiz empty en pahalı kombinasyondur: zamanı alır, değer bırakmaz.

Checklist kalitesi madde sayısından değil, aktivasyon hizasından gelir. “Profil fotoğrafı” üstte, “ilk kaydı oluştur” altta ise ürün yanlış optimize ediyordur ([kb:65-product-analytics]). Analist checklist’i aktivasyon dosyasıyla birlikte okur.

Örnek veri stratejisi üç hali yönetir: yok (empty rehberli olmalı), var etiketsiz (trust riski), var etiketli ve temizlenebilir (genelde iyi). Demo ile production verisinin karışması destek kabusudur; görülen karışmayı yaz.

E-posta ile onboarding devamı ayrı kanaldır ([kb:29-onboarding-emails]). UI turu bitmeden spam e-posta busy-professional’ı kaybettirir. Corpus’ta e-posta kopyası yoksa spekülatif “muhtemelen spam” deme; UI içi tekrarlayan modal varsa onu yaz.

Mobil onboarding: slide’lar yatay kaydırmalı tur mobilde daha kırılgandır. Skip hedefi büyük olmalı. Form + tur balonu çakışması first-timer paniğidir.


## Birleşik okuma: onboarding × empty × form × aktivasyon

Onboarding Risk skoru çoğu zaman üç dosyanın toplamıdır: form sürtünmesi, empty rehbersizliği, aktivasyon engeli. FirstClick bunları tek “onboarding kötü” cümlesinde ezmemelidir. Timeline’da sırayla göster: kayıt formu → karşılama/tur → empty → ilk değer denemesi. Hangi adımda drop-off varsayımı yapıldığını belirt; ölçülmemiş funnel uydurma.

Skip varlığı busy-professional için kritik, non-technical için tek başına yetmez — görev yolu da gerekir. Persona notunda bu ayrımı koru. Örnek veri etiketi skeptical trust’ı kurtarır; first-timer’a ise template + CTA gerekir.

Süre vaadi heuristic’i: “2 dakika” iddiası adım sayısı ve zorunluluklarla çelişiyorsa citation zorunlu. Kendi kronometren yoksa “gözlenen adım yoğunluğu vaadi zorluyor” diye yaz.


## Analist sözlüğü: onboardingRisk yükselten kombinasyonlar

Sık görülen yüksek risk paketleri: (1) skip’siz tur + rehbersiz empty, (2) erken kart + uzun form, (3) zorunlu entegrasyon + tanımsız aha, (4) etiketsiz örnek veri + sahte KPI, (5) mobil kırık kayıt + desktop-only checklist. Paketi görürsen tek tek say; “genel kötü onboarding” deme. Düşük risk paketleri: skip + 3 adımlı checklist + etiketli template + empty CTA + isteğe bağlı tur. Heuristic: risk paketindeki her bileşen ayrı citation veya ayrı UI alıntısı ister.


## Kapanış notu (RAG)

Bu bölüm bağımsız chunk olarak da anlamlıdır: FirstClick analisti konuyu ürün corpus alıntısıyla birleştirir, heuristic’i istatistik gibi sunmaz, persona tepkisini somut UI metnine bağlar, skor gerekçesinde clarity / adoption / onboardingRisk / trust ayrımını korur ve uydurma özellik önermez. Eksik kanıtta “corpus’ta görmedim” der.
 Onboarding chunk’ında skip, checklist ve empty CTA üçlüsü aranır.


## Eylem tarifleri (onboarding)

**Tarif 1 — Skip enjeksiyonu:** Zorunlu tur tespitinde “skip + sonra tamamla” öner. Tur içeriğini silmeyi dayatma; atlanabilirlik onboardingRisk’i düşüren asıl kaldıraçtır. Busy-professional için skip birincil CTA kadar görünür olmalı.

**Tarif 2 — Checklist budama:** Maddeleri aktivasyon olayına ([kb:62-activation]) bağla. Üstte profil fotoğrafı, altta ilk değer işi varsa sıralamayı tersine çevir önerisi yaz. 12 maddeyi 3 değere indir; kalanları “sonra” kutusuna al.

**Tarif 3 — Empty’ye görev bağlama:** Welcome + boş ekran anti-pattern’inde empty CTA’yı ilk başarıya bağla (“İlk kaydı ekle” / template seç). Rehbersiz empty first-timer churn’üdür.

**Tarif 4 — Erken kapı erteleme:** Zorunlu Slack/Jira/kart’ı aha sonrasına taşı. Corpus’ta güvenlik gerekçesi yoksa “gerekçe görülmedi” de; güvenlik uydurma.

**Tarif 5 — Örnek veri etiketi:** Banner + tek tık temizle. Etiketsiz ARR/demo skeptical trust↓ ve destek karışıklığı üretir.

## Kenar durumlar

- **SSO / admin onayı:** İlk değer admin kapısının arkasındaysa onboardingRisk ile B2B satın alma sürtünmesini ayır ([kb:08-b2b-buying]).
- **Suite yanlış ürün:** Landing fatura, tur CRM anlatıyorsa vaad–yol drift; her iki alıntıyı yaz.
- **Tekrarlayan modal:** “Bir daha gösterme” yoksa her oturum friction; adoption↓.
- **Mobil tur:** Yatay slide + küçük skip; [kb:57-mobile-ux] ile çapraz. Form + tooltip çakışması panik.
- **E-posta devamı:** UI bitmeden spam drip; corpus’ta mail yoksa spekülatif spam iddiası yok ([kb:29-onboarding-emails]).
- **Rol sormadan tek yol:** Satış ve finance aynı checklist — alakasız adımları işaretle, yeni rol UI’ı uydurma.

## Persona-özel yorum şablonu

“[Persona] ilk oturumda [engel tipi: zorunlu tur|empty|kart|entegrasyon|jargon] nedeniyle time-to-value gecikiyor; onboardingRisk [düşük/orta/yüksek]; adoption etkisi […]; öneri [skip|checklist budama|template|erteleme].”

Busy-professional skip ve süre ister. Non-technical adım adım ve jargon’suz dil ister. Skeptical izin “neden?” ve örnek etiket ister. Price-sensitive kart erteleme ve limit netliği ister. Student/first-timer kategori cümlesi + template ister. Aynı engeli tüm persona’ya yapıştırma.

## Analist kontrol listesi (geniş)

1. İlk oturum adımlarını sırayla çıkar; hangileri zorunlu?
2. Skip / “sonra tamamla” / tercih kalıcılığı var mı?
3. Checklist sayısı ve aktivasyon hizası.
4. Empty CTA alıntısı; görev bağlı mı?
5. Örnek veri etiketi ve temizleme.
6. Erken ödeme veya entegrasyon kapısı.
7. Rol/amaç ile yol seçimi.
8. Landing süre vaadi ↔ adım sayısı drift.
9. Mobilde tur/form kırığı.
10. Tekrarlayan onboarding modalı.
11. Öneri: adım kes, skip ekle, empty’ye bağla — özellik kataloğu uydurma.
12. “≤5 dk ideal” ifadesini yasa değil heuristic diye etiketle; % aktivasyon artışı uydurma.
