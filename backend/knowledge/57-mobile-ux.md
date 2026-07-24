# Mobil UX: tek el, kesikli dikkat, küçük yüzey

FirstClick mobil değerlendirmesi “responsive oldu mu?” sorusundan ibaret değildir. Mobilde görevler kısa oturumlarda, tek elle ve sık kesintilerle yapılır. Desktop’tan küçültülmüş arayüzler adoption ve clarity’yi düşürür. Bu dosya mobil UX standardıdır. [kb:57-mobile-ux]

## Kapsam

Kapsam: thumb zone, dokunma hedefi boyutu, alt navigasyon, hamburger bağımlılığı, form ve klavye, yatay scroll tuzakları, güvenli alan (safe area), gestür çatışmaları, offline/zayıf ağ ipuçları, ve “mobil uygulama” vaadi ile mobil web kalitesi. Kapsam dışı: genel navigasyon modeli ([kb:52-navigation]), erişilebilirlik WCAG derinliği ([kb:58-accessibility]), performans lab metrikleri ([kb:64-performance-perception] ile algı çaprazı).

Heuristic: Birincil görev başparmakla, ekranın alt yarısından, bir elle ulaşılabilir olmalıdır. Üst köşe-only CTA’lar mobil sürtünme üretir.

## Tanı sinyalleri

1. **Desktop sıkıştırma**: Tablo ve çok kolonlu layout yatay kaydırma ile “okunuyor”; veri kayboluyor.
2. **Küçük dokunma alanları**: 24px ikonlar yan yana; yanlış tıklama (heuristic: ~44×44 CSS px hedef).
3. **Sticky üst bar şişmesi**: Logo + arama + 4 ikon içeriği ezer; ilk ekranda değer yok.
4. **Hamburger’e hapsolmuş birincil iş**: Oluştur / Onayla menü içinde; thumb zone dışı.
5. **Klavye formu kapatıyor**: Sabit alt CTA klavyenin altında kalıyor; gönderilemiyor.
6. **Hover’a bağımlı UI**: Desktop tooltip bilgisi mobilde yok; clarity↓.
7. **Gesture çatışması**: Kaydırarak sil + tarayıcı geri gesture; yanlış silme korkusu.
8. **Modal tam ekran tuzağı**: Kapatma hedefi küçük; skeptical “hapishane” hissi.
9. **Ağ sessizliği**: Zayıf 4G’de uzun spinner; offline mesajı yok.
10. **Vaad**: “Her yerden yönet” ama kritik akış mobilde kırık → citation’lı çelişki.

Olumlu sinyaller: alt bar ≤5, merkez oluşturma, büyük dokunma alanları, formda sticky görünür CTA, inputmode doğru, kartlar dikey stack, kritik veri öncelikli, okunabilir punto, safe-area padding.

## Persona tepkileri

- **busy-professional**: Yolda / toplantı arası 2 dakikalık iş. Onay ve hızlı yanıt mobilde çalışmazsa ürün “masaüstü zorunlu” sayılır; adoption↓.
- **non-technical**: Küçük kontroller ve gizli menüler panik. Büyük düğme + düz dil.
- **skeptical**: Mobilde kırık ödeme veya izin akışı güven yıkar. App store vaadi ile PWA kalitesizliği çelişkisi.
- **price-sensitive**: Mobilde sürekli full-screen upgrade; değeri görmeden satış.
- **student / first-timer**: Çoğu ilk deneyim mobilden gelebilir. İlk empty + kayıt mobilde optimize değilse onboardingRisk↑.

## İyi ve kötü örnekler

**Kötü**
Dashboard’da 6 kolonlu tablo, yatay scroll; birincil “Yeni” sağ üstte 32px. Alt bar yok.

**İyi**
Liste kartları; her kartta birincil aksiyon. Alt bar: Ana, Gelen, +, Ara, Profil. “+” ile oluşturma.

**Kötü form**
Sabit footer “Kaydet” klavyenin altında; kullanıcı neyin kaydedileceğini görmüyor.

**İyi form**
CTA klavye açılınca görünür alanda kalır veya “İleri” toolbar’da. Alanlar tek kolon.

**Kötü hover**
Durum açıklaması yalnızca hover tooltip’te; mobilde yok.

**İyi**
Aynı bilgi satır altında veya info sheet ile erişilir.

## FirstClick skor etkileri

- **clarity**: Okunabilirlik, görünür etiketler, hover’sız bilgi. Küçük punto clarity↓.
- **adoption**: Mobilde tamamlanamayan kritik görev adoption↓.
- **onboardingRisk**: Mobil kayıt/kurulum kırığı yüksek risk — özellikle student/first-timer trafiğinde.
- Friction: yanlış dokunma, gesture çatışması, klavye örtmesi = high.
- Landing mobil screenshot’ı gerçek akıştan iyiyse drift bulgusu yaz.

## Eylem kontrol listesi

1. Birincil 3 görevin mobilde yolunu çıkar; thumb zone içinde mi bak.
2. Dokunma hedeflerini nitel değerlendir (çok küçük / bitişik).
3. Alt bar / hamburger dengesini not et.
4. Form + klavye + CTA görünürlüğünü kontrol et.
5. Hover’a bağlı bilgileri listele.
6. Yatay scroll ve kesilen içerikleri işaretle.
7. Zayıf ağ / loading mobil davranışını [kb:55] ile çapraz oku.
8. Öneri: alt bar’a taşı, hedef büyüt, tabloyu karta çevir — uydurma native app iddiası yoksa yazma.

## Atıf disiplini

- Gözlenen mobil UI: [doc:…] / [web:…] (viewport notu düş).
- Mobil kurallar: [kb:57-mobile-ux].
- A11y çakışması: [kb:58-accessibility].
- “Mobil dönüşüm %X” uydurma; thumb zone ve görev tamamlanma heuristic’lerini kullan.

## Analist uygulama notu

Mobil chunk: görev, kırılma tipi (thumb|klavye|hover|scroll|ağ), persona, skor. Örnek: “busy-professional mobilde onay butonu hamburger’de → adoption↓ friction medium; öneri alt bar veya liste içi aksiyon.”


## Derin uygulama: mobil görev bütçesi

Mobil oturumlar kısa ve kesintilidir. FirstClick “mobilde tüm desktop özellikleri” başarısını kutlamaz; “mobilde kritik 3 görev tamamlanır mı?” sorar.

**Görev bütçesi (heuristic):** Bildirimden gelen işi bitir, hızlı oluştur, durumu kontrol et. Rapor tasarımı, karmaşık otomasyon, yoğun tablo genelde desktop’a bırakılabilir — ama landing “her yerden yönet” diyorsa kritik onay/oluşturma mobilde kırık olmamalı.

**Dokunma ve hata:** Bitişik ikonlar yanlış silme/yanlış arşiv üretir. Undo toast mobil retention için kritik olabilir. Gesture ile silmede onay veya geri al yoksa friction high + trust riski.

**PWA vs native vaadi:** Store’da uygulama vaadi varken yalnızca kırık mobil web varsa drift. Native yoksa “uygulama” dilini yumuşatma önerisi yaz; uydurma store linki ekleme.

**Kesikli dikkat:** Modal tur mobilde daha yıkıcıdır ([kb:61-onboarding]). Skip büyük hedef olmalı. Klavye açıkken tur balonu formu örtmesin.

**Ağ:** Kahve dükkanı Wi‑Fi senaryosu. Offline/ zayıf ağ mesajı yoksa non-technical “bozuldu” der ([kb:64-performance-perception]).

**Safe area ve sticky:** Alt bar + home indicator çakışması CTA’yı yer. Corpus/screenshot’ta kesilme varsa not et.

Persona matrisi: busy-professional onay; student kayıt; skeptical ödeme güvenliği; non-technical büyük hedef; price-sensitive upgrade full-screen baskısı.

RAG chunk anahtarları: thumb zone, alt bar, hover bağımlılığı, yatay scroll, klavye örtmesi, gesture, safe area, görev bütçesi.


## Senaryo laboratuvarı: mobil terk

**A — Onay yolu:** Bildirim → detay → onay butonu üst köşede küçük. Busy-professional yanlışlıkla geri. friction. Öneri: alt birincil CTA.

**B — Kayıt:** Student mobilde 12 alan + yanlış klavye. onboardingRisk↑. Öneri: alan kes + inputmode.

**C — Hover bilgisizliği:** Durum yalnızca desktop tooltip. Non-technical mobilde anlamaz. clarity↓.

**D — Upgrade duvarı:** Her açılışta full-screen paywall. Price-sensitive. trust↓ adoption↓.

**E — Tablo:** Yatay scroll + sabit ilk kolon yok. Rapor “var” ama okunamaz. Vaad drift.

Mobilde performans algısı daha kırılgandır ([kb:64-performance-perception]). Aynı API desktop’ta kabul, mobilde terk üretebilir — ayrı not düş.

## Operasyonel kontrol
Thumb zone, hedef boyut, alt bar, hover bağımlılığı, yatay scroll, klavye+CTA, gesture çatışması, safe area, ağ mesajı, vaad uyumu.


## Karar çerçevesi: mobil “yeterli” mi?

FirstClick mobilde mükemmel eşlik aramaz; kritik yol yeterliliği arar. Yeterlilik checklist’i: (1) giriş/kayıt tamamlanır, (2) birincil değer eylemi yapılır, (3) bekleyen iş görülüp işlenir, (4) hesap/plan/güvenlik ayarlarına ulaşılır, (5) hata durumunda kurtarma mümkündür. Beşinden biri kırıkssa mobil adoption gerekçesi yazılır.

Desktop parity takıntısı zararlıdır. Karmaşık otomasyon editörünün mobilde olmaması sorun olmayabilir; oysa “onayla” ve “oluştur” yoksa sorun kesindir — özellikle landing mobil yönetim vaat ediyorsa. Analist eksik özelliği otomatik bug saymaz; vaad–kullanım çelişkisini ölçer.

Tek el kullanımı varsayılan heuristic’tir. Sol üst menü + sağ üst CTA + altta içerik, sağ el başparmağı için pahalıdır. Alt bar veya içerik içi birincil aksiyon bu maliyeti düşürür. Bu bir antropometri iddiası değil; yaygın mobil UX çalışma kuralıdır.

Kesintili dikkat: kullanıcı klavyeyi kapatıp WhatsApp’a gidip dönebilir. Draft kaybı mobil friction high’tır. “Taslak kaydedildi” mikro sinyali retention’a da yardım eder. Corpus’ta draft yoksa uydurma kaydetme mekanizması iddia etme; “taslak güvencesi görmedim” de.

App store ekran görüntüleri ile gerçek mobil web farkı skeptical için güçlü drift kaynağıdır. Görselleri [web:…] ile alıntıla; store hesabı yoksa spekülatif puan/indirilme yazma.


## Birleşik okuma: mobil × diğer kb dosyaları

Mobil bulgu nadiren yalnızdır. Nav hamburger labirenti [kb:52-navigation] ile, form klavye örtmesi [kb:56-form-design] ile, empty CTA’sının küçük hedefi [kb:55-empty-loading-error-states] ile, yavaş 4G sessizliği [kb:64-performance-perception] ile bağlanır. FirstClick raporunda birincil çerçeveyi “mobil” seçip çapraz atıfları kısa tutmak RAG chunk’larını temizler.

Özellikle aktivasyon mobilde imkânsızsa ([kb:62-activation]) skor etkisi adoption ve onboardingRisk’te toplanır; “mobilde biraz zor” diye yumuşatma. Tersine yalnızca ikincil rapor ekranı mobilde zayıfsa şiddet düşük kalabilir — vaad mobilde yönetim iddia etmiyorsa.

Dokunma hedefi heuristic’i (~44px) kesin antropometrik yasa değildir; bitişik küçük ikon kümelerini nitel “yanlış tıklama riski” olarak yazmak yeterlidir. Ölçülmüş px değeri corpus’ta yoksa uydurma.

Son kontrol: kullanıcı tek elle, ayakta, yarım dikkatle birincil işini bitirebiliyor mu? Bu sorunun cevabı FirstClick mobil verdict’inin özetidir.
