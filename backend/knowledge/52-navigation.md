# Navigasyon tasarımı: yol bulma ve konum bilinci

FirstClick’te navigasyon değerlendirmesi, kullanıcının ürün içinde güvenle ilerleyip ilerleyemediğini ölçer. Bilgi mimarisi kavramları tanımlar; navigasyon o kavramlara giden yolları, geri dönüşleri ve “şu an buradayım” bilincini sağlar. Bu dosya FirstClick bilgi tabanında navigasyon UX standardıdır. [kb:52-navigation]

## Kapsam

Kapsam: global nav (üst/sol), local nav, breadcrumb, tab’ler, mobil alt bar, komut paleti girişleri, geri/ileri davranışı, aktif durum göstergeleri, ve “kaçış kapıları” (ana sayfa, arama, yardım). Kapsam dışı: IA gruplama mantığı ([kb:51-information-architecture]), arama sonuç UX ([kb:53-search-ux]), salt görsel ağırlık ([kb:59-visual-hierarchy]).

Heuristic: Kullanıcı her ekranda (1) konumunu, (2) bir üst seviyeyi, (3) bir sonraki olası görevi görmelidir. Bu üçlü eksikse FirstClick timeline’ında lost/confusion sinyali aranır.

## Tanı sinyalleri

1. **Aktif durum belirsiz**: Hangi nav öğesinin seçili olduğu renk/kontrast/ikonla anlaşılmıyor. Özellikle skeptical persona “kontrolüm yok” hisseder.
2. **Çoklu birincil CTA + nav çatışması**: Üst barda 3 buton + dolu sol menü; dikkat dağılır, adoption için net “sıradaki adım” kaybolur.
3. **Breadcrumb yok + derin sayfa**: Ayarlar > Faturalama > Vergi > Yeni kural gibi derinlikte geri tek tarayıcı back’ine kalmış. Mobilde daha riskli.
4. **Yanlış geri davranışı**: Modal veya wizard’da geri, tüm oturumu dashboard’a atıyor; form verisi kaybı (ayrıca [kb:56-form-design]).
5. **Mobilde hamburger labirenti**: Tüm desktop menüsü hamburger’e sıkıştırılmış, alt bar yok; thumb zone dışı (bkz. [kb:57-mobile-ux]).
6. **Yeni sekme tuzağı**: Her rapor yeni sekmede; kullanıcı ürün bağlamını kaybeder, “kaç uygulama açtım?” şaşkınlığı.
7. **Gizli kritik yol**: “Davet et” veya “İçe aktar” yalnızca avatar menüsünde. Aktivasyon olayı gizlenmiş demektir.
8. **Nav’da ölü link / yakında**: “Coming soon” maddeleri birincil nav’da güven aşındırır.
9. **İkon-only nav**: Tooltip’siz ikon sırası; non-technical için jargon kadar kötü.

Olumlu sinyaller: tutarlı sol/üst yerleşim, seçili öğede net vurgu, breadcrumb veya sayfa başlığı ile konum, mobil alt bar’da ≤5 birincil görev, komut-K ile güç kullanıcı kaçışı, yardım/docs her zaman erişilir.

## Persona tepkileri

- **busy-professional**: Nav’da “bugünkü iş” yoksa ürünü yavaş sayar. Klavye kısayolu ve son ziyaret edilenler (recents) adoption’ı destekler. Uzun tour modal’ı nav’ı bloke ediyorsa skip ister.
- **non-technical**: İkon + jargon etiket kombinasyonu korkutur. “Neredeyim?” sorusuna breadcrumb veya düz dil sayfa başlığı şart. Yanlış tıklayınca geri bulamazsa leave.
- **skeptical**: Bozuk link, “yakında”, tutarsız geri = olgunlaşmamış ürün. Nav’da güvenlik/ayarların şeffaf olması (hesap, faturalama görünürlüğü) güven sinyali olabilir; aşırı gizleme ters tepki.
- **price-sensitive**: Upgrade CTA’nın her nav seviyesinde tekrarlanması baskı hissi; “planım” tek yerde olmalı.
- **student / first-timer**: Öğrenme yolu nav’da görünür olmalı (“Başlangıç”, “Öğretici”). Sadece özellik listesi first-timer’ı ezer.

Persona notunda navigasyon sürtünmesini somutlaştır: “busy-professional sol menüde ‘Raporlar’ı 2. seviyede arıyor; birincil iş ‘Onaylar’ avatar altında gizli.”

## İyi ve kötü örnekler

**Kötü — nav şişmesi**
Üst bar: logo, 9 metin link, arama, bildirim, yardım, avatar, “Upgrade”, dil seçici. Hiçbir öğe görsel hiyerarşide birincil değil. Clarity düşer.

**İyi — katmanlı nav**
Üst: logo, global arama, bildirim, avatar. Sol: 5–7 görev grubu. Sayfa içi: tab’ler (Özet / Aktivite / Ayarlar). Breadcrumb: Ana > Müşteriler > Acme. Konum her zaman okunur.

**Kötü — modal tuzak**
Kullanıcı ayarlardan açılan tam ekran modal’da; ESC çalışmıyor, X köşede küçük, geri tarayıcı history’yi bozuyor. Skeptical “tuzağa düştüm” der.

**İyi — öngörülebilir geri**
Wizard adımlarında “Geri” önceki adıma, “Vazgeç” onaylı çıkışa; tarayıcı back ile aynı semantik. Draft otomatik kayıt sinyali gösterilir.

**Kötü — mobil kopyala-yapıştır desktop**
Hamburger içinde 15 madde, alt bar yok, FAB yok. Birincil oluşturma eylemi thrice-tap.

**İyi — mobil öncelikli yollar**
Alt bar: Ana, İşler, Oluştur, Gelen, Profil. “Oluştur” merkezde. Diğer her şey “Daha fazla”da. Heuristic: mobil birincil görevler thrice değil, one-thumb ulaşım.

## FirstClick skor etkileri

- **clarity**: Konum bilinci + etiket okunabilirliği. Aktif durum ve sayfa başlığı clarity’nin navigasyon boyutudur.
- **adoption**: Değer üreten eyleme nav üzerinden ulaşım süresi/zorluğu. Gizli aktivasyon CTA’sı adoption’ı düşürür.
- **onboardingRisk**: İlk oturumda nav karmaşası + zorunlu tour = yüksek risk. “Skip” yoksa risk daha da artar.
- Friction sınıflaması: yanlış kapı = medium; veri kaybettiren geri = high; ölü link = high trust + friction.
- Landing’de “tek tıkla her yere” vaadi vs. uygulamada derin nav → citation’lı çelişki, clarity ve adoption gerekçesi.

## Eylem kontrol listesi

1. Global nav öğelerini corpus’tan listele; sayı ve etiketleri kaydet.
2. Aktif/seçili durumun görsel olarak ayırt edilip edilmediğini not et.
3. En kritik görevin nav yolunu adım adım yaz; derinliği say.
4. Breadcrumb / sayfa başlığı / back davranışını kontrol et.
5. Mobilde birincil 3 görevin thumb zone içinde olup olmadığını değerlendir ([kb:57-mobile-ux] ile çapraz).
6. “Yakında”, ölü, veya yetkisiz linkleri işaretle.
7. Upgrade / paywall CTA’nın nav’daki frekansını say; baskı hissi varsa retention/trust notu düş.
8. Öneri: madde sil/birleştir/alt seviyeye al; yeni etiket uydurma, corpus diline uy.

## Atıf disiplini

- Gözlenen menü ve buton metinleri: [doc:…] / [web:…].
- Navigasyon heuristic’leri: [kb:52-navigation].
- IA kök nedeni ayrıysa: [kb:51-information-architecture] + bu dosya birlikte.
- Geçmiş oturumda aynı kaybolma: [past:…].
- “Kullanıcıların %Y’si hamburger’de kaybolur” gibi uydurma istatistik yazma; nitel gözlem + heuristic kullan.

## Analist uygulama notu

Navigasyon bulgusu RAG için şöyle chunk’lanmalı: sorun tipi (konum / derinlik / mobil / geri), alıntılanan UI metni, etkilenen persona, skor boyutu (clarity|adoption|onboardingRisk), tek cümlelik düzeltme. Örnek: “non-technical, ikon-only sol nav, sayfa başlığı yok → clarity↓; öneri: metin etiket + breadcrumb.”


## Derin uygulama: navigasyon desenleri ve anti-pattern’ler

**Mega menü anti-pattern’i**: Landing’de işe yarayan mega menü, app içinde her sayfada tekrarlanırsa gürültü olur. App’te mega menü varsa FirstClick sorar: bu keşif için mi, yoksa günlük iş için mi? Günlük işse alt yolları sadeleştir.

**Sekme vs route**: Sayfa içi tab’ler local nav’dır; global nav ile karıştırılmamalı. Kullanıcı tab’i tarayıcı geri ile kaybediyorsa konum bilinci bozulur. Analist geri semantiğini not eder.

**Komut paleti**: Cmd/Ctrl+K güç kullanıcı kaçışıdır; busy-professional adoption’ını kurtarabilir. Ama yalnızca komut paleti varsa non-technical ve first-timer için yeterli değildir. İkisini birlikte değerlendir: görünür nav + arama/komut.

**Bildirim rozeti tuzağı**: Kırmızı nokta her nav öğesindeyse öncelik ölür ([kb:59-visual-hierarchy]). Skeptical “alarm yorgunluğu” yaşar. Rozet yalnızca aksiyon gerektiren sayıda olmalı — heuristic.

**Yardıma giden yol**: Destek, docs, chat her zaman aynı yerde olmalı. Onboarding sırasında yardım kayboluyorsa non-technical panik riski artar. Corpus’ta yardım girişi yoksa “kalıcı yardım girişi görmedim” de.

**Deep link ve paylaşım**: “Şu onay sayfasını paylaş” kırılıyorsa ekip ürünlerinde retention zayıflar. Görülen kırık linkleri alıntıla; varsayılan deep link mimarisi uydurma.

Navigasyon ile IA ayrımı: yanlış grup IA sorunudur; doğru grupta gizli CTA navigasyon sorunudur. Bulgu kök nedenini tek cümlede ayır. Skor gerekçesinde “kayboldu” yetmez — kapı mı yanlış, yol mu uzun, geri mi kırık söyle.

RAG chunk anahtarları: aktif durum, breadcrumb, thumb zone, hamburger, geri semantiği, ölü link, komut paleti, rozet yorgunluğu.


## Senaryo laboratuvarı: navigasyon kaybı

**Senaryo A — Onaycı (busy-professional):** Sabah mobilde üç onay. Alt bar yok, onaylar bildirimden açılıyor ama geri “Ana”ya değil rastgele listeye düşüyor. Sonuç: ikinci onayda terk. Skor: adoption↓ friction high. Öneri: onay detayında sabit “Sonraki onay” + öngörülebilir geri.

**Senaryo B — First-timer:** Kayıt sonrası sol menüde 12 jargon madde. “İlk iş” CTA’sı avatar menüsünde. Empty “Welcome”. onboardingRisk↑ clarity↓. Öneri: sade menü + empty CTA’yı birincil yola taşı.

**Senaryo C — Skeptical admin:** Billing yalnızca gizli URL’de; nav’da yok. “Ücret ne?” sorusu karşılanmaz. Trust↓. Öneri: hesap/plan girişini öngörülebilir yerde göster (corpus’ta plan varsa).

**Senaryo D — Non-technical:** İkon-only rail, tooltip hover’a bağlı, mobilde yok. Confusion. Öneri: metin etiket veya erişilebilir ad + mobil sheet.

Bu senaryolar şablondur; ürün corpus’una uydurma karakter ekleme. Gözlenen UI ile eşleşen senaryoyu seç ve alıntıla.

Navigasyon regresyon kontrolü: yeni özellik eklendikçe birincil nav’a madde eklemek varsayılan anti-pattern’dir. Heuristic: yeni özellik önce ilgili grup içinde, kanıtlanmış kullanımdan sonra yükselt. Analist “nav şişmesi”ni özellik zenginliği diye övmez.
