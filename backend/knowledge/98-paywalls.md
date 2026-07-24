# Paywall anı: değerden sonra gelen dürüst engel

FirstClick analisti paywall’ı değerlendirirken şunu sorar: kullanıcı engelle karşılaştığı anda corpus’taki kopya, fiyat ve alternatif yollardan “neden burada durdum, ne kazanacağım, ücretsiz ne yapmaya devam edebilirim?” sorularına cevap bulabiliyor mu? Bu doküman, FirstClick bilgi tabanında paywall (ödeme duvarı) değerlendirmesinin standart çerçevesidir. [kb:98-paywalls]

## Kapsam

Bu dosya şu alanları kapsar: hard vs soft paywall, zamanlama (değer öncesi / sonrası), tetikleyici türleri (özellik, limit, koltuk, zaman), mikro kopya ve CTA kalitesi, kaçış yolları (daha sonra, Free’de kal, iletişime geç), ve modal/banner yorgunluğu. Kapsam dışı: plan mimarisi (bkz. [kb:96-pricing-packaging]), trial/freemium model seçimi (bkz. [kb:97-free-trial-freemium]), bildirim ve yaşam döngüsü mesajları (bkz. [kb:106-lifecycle-messaging], [kb:107-notifications]). Paywall “o anki engel deneyimi”dir; paketleme “ne satıldığı”, trial “nasıl denendiği”dir.

Heuristic: İyi paywall, kullanıcı bir değeri gördükten veya ürettikten sonra gelir ve engelin gerekçesini tek ekranda açıklar. Bu bir gelir optimizasyon iddiası değildir; FirstClick’te friction, trust ve onboardingRisk okurken kullanılan çalışma hipotezidir.

## Tanı sinyalleri (diagnostic signals)

1. **Değer öncesi hard wall**: Kayıt sonrası ilk tıklamada tam ekran ödeme; ürün hiç kullanılmamış.
2. **Belirsiz tetikleyici**: Kullanıcı hangi limitin dolduğunu veya hangi özelliğin kilitli olduğunu göremez.
3. **Çıkış yok**: Modal kapatılamaz, “daha sonra” yok, Free yolu yok; tuzağa alınmış hissi.
4. **Korku kopyası**: “Hesabınız silinecek”, “tüm veriler kaybolacak” abartısı; skeptical tepki.
5. **Fiyat yok paywall’da**: Yalnızca “Yükselt” — ne kadar ve ne için belirsiz; price-sensitive sticker shock ertelenir ama confusion artar.
6. **Tekrarlayan taciz**: Her sayfada aynı upgrade banner; bildirim yorgunluğu ile birleşir.
7. **Özellik adı ≠ fayda**: “Advanced Orchestration’ı aç” — non-technical için anlamsız.
8. **Yanıltıcı soft wall**: “Premium’u dene” tıklanınca anında kart formu; soft vaadi hard uygulamaya döner.

Olumlu sinyaller: tetikleyicinin sayısal açıklaması (“aylık 3 / 3 dışa aktarma kullanıldı”), fayda odaklı başlık, görünür fiyat veya plan karşılaştırma linki, “Free’de devam et”, veri kaybı olmayacağının belirtilmesi, tek birincil CTA.

## Kullanıcı itirazları

- **“Daha yeni başladım, şimdi mi?”** Zamanlama itirazı; değer öncesi wall.
- **“Ne için ödeyeceğim?”** Fayda listesi yok veya jargon.
- **“Başka seçeneğim yok mu?”** Escape hatch yoksa manipülasyon algısı.
- **“Limit adil mi?”** Limit sürprizi; önceden sayaç yoksa öfke.
- **“İndirim / yıllık zorunlu mu?”** Baskı taktikleri skeptical’ı uzaklaştırır.
- **“Ekip arkadaşım davet etti, neden ben ödüyorum?”** Rol/seat paywall belirsizliği.

## Persona tepkileri

- **busy-professional**: Tek ekranda karar vermek ister. Uzun karşılaştırma tablosu modal içinde = zaman maliyeti. “Şimdi değil” ile işine dönmek ister.
- **non-technical**: Kilit ikonu + İngilizce özellik adı panik. Ne kaybedeceğini günlük dille sorar.
- **skeptical**: Kapatılamayan modal, countdown, sahte kıtlık (“son 2 saat”) güven kırar. Dürüst limit dili tercih eder.
- **price-sensitive**: Fiyat ve Free alternatifi görünür olmalı. Yıllık-only upsell öfke yaratır.
- **student / first-timer**: Eğitim planı veya düşük bariyer yoksa bırakır; “neden kilitli” öğrenme anını bozar.

## İyi ve kötü örnekler

**Kötü — açılış duvarı**
Dashboard boş; ortada “Devam etmek için Pro’ya geç”. Hiçbir değer üretilmemiş. onboardingRisk yüksek.

**İyi — değer sonrası soft wall**
Kullanıcı ilk raporu görür; “PDF indir” tıklanınca: “Free’de ekranda görüntüleme var. PDF ve markasız dışa aktarma Pro’da — aylık fiyat burada. Şimdilik görüntülemeye devam et.”

**Kötü — kapatılamaz korku**
“Denemeniz bitti. Ödeme yapmazsanız verileriniz silinir.” İptal/export yolu yok.

**İyi — dürüst bitiş**
“Pro denemeniz bitti. Hesabınız Free limitlerine alındı. Verileriniz duruyor. İstediğiniz zaman dışa aktarın veya yükseltin.”

**Kötü — özellik jargonu**
“Unlock Vector Memory Tier”. Fayda yok, fiyat yok.

**İyi — fayda + tetikleyici**
“Ekip davetleri Free’de 2 ile sınırlı (2/2). Daha fazla üye için Pro — işbirliği ve ortak klasörler dahil.”

## FirstClick skor etkileri

- **clarity**: Tetikleyici ve fayda dili net değilse clarity↓.
- **adoption**: Değer öncesi hard wall adoption↓; kullanıcı ürünü değil engeli hatırlar.
- **onboardingRisk**: İlk oturum hard wall = yüksek risk. Mid-flow sürpriz limit de risk yükseltir.
- **trust**: Korku kopyası, kapatılamaz modal, sahte kıtlık → trust↓.
- Timeline: paywall anını adım numarasıyla yaz; “hard/soft”, “pre/post value” etiketleri kullan.

Heuristic: “Paywall’ı yumuşatınca gelir artar” diye yüzde yazma.

## Eylem kontrol listesi

1. Paywall ekranını/metnini corpus’tan alıntıla.
2. Hard mı soft mu; değer öncesi mi sonrası mı etiketle.
3. Tetikleyiciyi sayısal yaz; yoksa eksiklik bulgusu.
4. Escape hatch var mı kontrol et.
5. Fiyat veya plan linki paywall’da görünüyor mu bak.
6. Korku / kıtlık dili tara; abartıyı not et.
7. Persona itirazı ekle.
8. Tek cümle öneri: zamanlama + kopya + kaçış.

## Derin tanı senaryoları

**Senaryo A — Soft görünümlü hard wall.** Banner “Pro’yu keşfet” der; tıklanınca kapatılamaz ödeme modalı açılır. Skeptical manipülasyon okur. Etiket: “bait soft → hard”.

**Senaryo B — Rol paywall’ı.** Davet edilen editör kaydı tamamlar; “workspace sahibi ödeme yapmalı” der ama sahibe bildirim yok. İki taraf sıkışır; PLG davet döngüsü bozulur.

**Senaryo C — Metrik paywall’ı erken.** Değer görülmeden API veya kredi duvarı. Busy-professional ürünü yarım bırakır.

**Senaryo D — Çoklu duvar.** Aynı oturumda export, davet ve entegrasyon üç ayrı paywall. Yorgunluk; adoption↓. Heuristic: bir oturumda bir birincil yükseltme hikâyesi.

**Senaryo E — Fiyatı gizleyen upsell.** Self-serve planda bile “konuşalım” tek CTA. Price-sensitive çıkar.

**Senaryo F — Deneme bitişi = veri şantajı.** “Öde veya silinir” — export ve Free yolu yok. Trust↓ ve olası reputasyon riski; analist yasa maddesi uydurmaz.

## Paywall kopyası kalite ızgarası

Analist kopyayı dört eksende nitel değerlendirir (sayısal skor uydurmadan): (1) tetikleyici netliği, (2) fayda dili, (3) fiyat veya plan görünürlüğü, (4) kaçış dürüstlüğü. Dördü de zayıfsa hard friction bulgusu yaz. İkisi zayıfsa odaklı iyileştirme önerisi yeter. Izgara RAG’de tek chunk olarak da anlamlıdır: “paywall kopyası tetikleyici–fayda–fiyat–kaçış ile okunur”.

## Zamanlama karar ağacı

1. Kullanıcı hedef çıktıyı üretti mi veya gördü mü? Hayır ise hard wall’dan kaçın; eğitim veya örnek veri öner.
2. Tetikleyici sayısal mı? Değilse önce sayaç/limit UI’ı.
3. Free’de anlamlı devam var mı? Yoksa “sahte soft” riski — dürüstçe neyin bittiğini yaz.
4. B2B seat ise ekonomik buyer’a giden paylaşılabilir özet var mı?

## Analistin sık hataları

1. Her upgrade CTA’sını paywall saymak.
2. Değer sonrası wall’ı otomatik iyi saymak — korku kopyası varsa trust↓.
3. Şişik özellik matrisi önermek — busy-professional için zararlı.
4. Gelir optimizasyonu tavsiyesi yazmak — FirstClick deneyim ve skor gerekçesi üretir.
5. “Paywall kaldırın” diye mutlak öneri — bazen limit dürüstçe gösterilmelidir.

## RAG bağımsız chunk notu

Chunk soruları: hard mi soft mu; değer öncesi mi; escape hatch var mı; tetikleyici sayısal mı? Paywall, yükselt, limit, modal, kaçış terimlerini koru.

## Türkiye ve dil notları

TR kullanıcıda “Yükselt / Upgrade / Premium’u aç” karışık CTA’lar confusion üretir. Fiyatın yalnızca USD görünmesi price-sensitive için ek sticker shock olabilir — oran uydurma; para birimi belirsizliğini not et. “Kredi kartı” tek ödeme yolu bazı KOBİ’lerde paywall’ı procurement blocker’a çevirir. İptal ve iade dilinin Türkçe ve görünür olması skeptical için kritiktir.

## Mikro kopya iskeleti

Zayıf: “Premium’a geçmeden devam edemezsiniz.”
Daha iyi iskelet: “Free’de [kalan eylem] yapabilirsiniz. [Kilitli eylem] için [plan] — [fiyat veya plan linki]. [Kaçış CTA].”
Analist köşeli parantezleri corpus’tan doldurur; yoksa “corpus’ta fiyat yok” der.

## Mobil paywall

Küçük ekranda uzun matris ve kapatılamaz modal birleşimi yüksek friction’dır. Tek birincil CTA ve ikincil “daha sonra” linki heuristic’idir. Fiyatın accordion içinde gizlenmesi price-sensitive’i cezalandırır.

## Takım vs bireysel paywall

Bireysel limit ile ekip limiti aynı modalda karışıyorsa confusion artar. “Kişisel Pro” ile “Workspace Business” yollarını ayır; seat paywall’ında kimin ödediğini açık yaz.

## Atıf disiplini

- Paywall metni: [doc:…] / [web:…].
- Kurallar: [kb:98-paywalls]; model: [kb:97-free-trial-freemium]; paket: [kb:96-pricing-packaging].
- İstatistik uydurma yasağı geçerli.

## Analist uygulama notu

Şablon: “[Persona] [adım]’da ‘[alıntı]’ paywall’ı görüyor; [pre-value|no escape|jargon] nedeniyle [friction|trust↓]. Öneri: [post-value soft wall + sayısal tetikleyici]. Skor: adoption↓ / onboardingRisk↑ gerekçesi paywall.” RAG chunk’larında paywall, hard/soft, tetikleyici, escape hatch kelimelerini tut.
