# Yaşam döngüsü mesajlaşması: doğru mesaj, doğru aşama

FirstClick analisti lifecycle messaging’i değerlendirirken şunu sorar: e-posta, ürün içi rehber ve durum mesajları kullanıcının aşamasına (yeni, aktif, riskli, genişleyen) uygun mu, yoksa zamansız satış ve gürültü mü? Bu doküman, FirstClick bilgi tabanında lifecycle messaging değerlendirmesinin standart çerçevesidir. [kb:106-lifecycle-messaging]

## Kapsam

Bu dosya şu alanları kapsar: onboarding dizileri, aktivasyon hatırlatmaları, değer pekiştirme, risk/churn kurtarma tonu, genişleme (upsell) mesajlarının zamanlaması, ve kanal tutarlılığı (e-posta vs in-app). Kapsam dışı: anlık bildirim tasarımı ve izinler (bkz. [kb:107-notifications]), paywall kopyası (bkz. [kb:98-paywalls]), A/B test disiplini (bkz. [kb:108-ab-experimentation]). Lifecycle “aşamaya göre anlatı”dır; notification “anlık uyarı kanalı”dır.

Heuristic: İyi lifecycle, kullanıcının son davranışına bağlı bir sonraki en iyi adımı önerir; takvim spam’i değildir. Bu open-rate iddiası değildir.

## Tanı sinyalleri (diagnostic signals)

1. **Zamansız upsell**: İlk günde agresif yıllık plan maili; değer yok.
2. **Aşama körü**: Aktif güç kullanıcıya “kuruluma başla” maili.
3. **Çelişen kanallar**: E-posta “özellik X ücretsiz” der; uygulama paywall gösterir.
4. **Değer yerine özellik listesi**: “Yeni: 12 özellik” — neden umursasın yok.
5. **Kurtarma yokluğu**: Sessizleşen kullanıcıya hiç dokunulmaz veya yalnızca indirim yağmuru.
6. **Aşırı sıklık**: Aynı günde çoklu lifecycle maili + banner.
7. **Kişiselleştirme yalanı**: “{{ad}} senin için” boş veya yanlış birleşim.
8. **Çıkış zorluğu**: Abonelikten çık / tercih merkezi yok veya kırık.

Olumlu sinyaller: tetikleyiciye bağlı diziler (olay: ilk proje yok), tek net CTA, tercih merkezi, aşama dilinin ürün durumuna uyumu, upsell’in kullanım sinyalinden sonra gelmesi, marka tonunun destekleyici olması.

## Kullanıcı itirazları

- **“Daha yeni kaydoldum, satış maili geliyor.”**
- **“Bu maildeki özellik bende yok / kilitli.”**
- **“Aynı şeyi üç kanaldan yazıyorlar.”**
- **“Nasıl azaltırım / durdururum?”**
- **“Bu indirim sahte aciliyet mi?”**

## Persona tepkileri

- **busy-professional**: Az, eyleme dönük, zaman kutulu mesaj. Uzun newsletter sürtünme.
- **non-technical**: Adım adım “şunu tıkla” — jargonlu changelog değil.
- **skeptical**: Sahte kişiselleştirme ve sahte kıtlık trust↓.
- **price-sensitive**: Erken upsell öfke; kullanım sonrası adil yükseltme kabul görebilir.
- **student / first-timer**: Öğretici dizi değerli; agresif faturalama dili korkutur.

## İyi ve kötü örnekler

**Kötü — gün-0 satış**
Kayıt + 10 dk: “Yıllık planda %Y tasarruf — hemen al”. (Yüzde uydurma; pattern olarak zamansız upsell not et.)

**İyi — aktivasyon yardımı**
Kayıt + 1 gün, hâlâ boş workspace: “Şablonla ilk kaydını 3 adımda oluştur” + tek CTA.

**Kötü — aşama hatası**
Haftada 20 işlem yapan kullanıcıya “ürün turuna başla”.

**İyi — güç kullanıcıya genişleme**
Limit %80: “Ekip daveti ve ek seat seçenekleri” — korku değil yardım dili.

**Kötü — kurtarma = spam indirim**
14 gün sessiz → 5 gün üst üste kupon. Tercih yok.

**İyi — nazik kurtarma**
“Takıldığını görüyoruz — şu iki yol” + “mail sıklığını azalt” linki.

## FirstClick skor etkileri

- **clarity**: Mesaj–ürün durumu çelişkisi clarity↓.
- **adoption**: Zamansız satış aktivasyonu böler; iyi tetikleyici adoption gerekçesini destekler.
- **onboardingRisk**: Gün-0 upsell + zorunlu tur birleşimi risk↑.
- **trust**: Sahte aciliyet / kırık unsubscribe trust↓.
- Timeline: mesajı aşama etiketiyle yaz (activate / retain / expand / win-back).

## Eylem kontrol listesi

1. Görünen lifecycle örneklerini (mail, banner) alıntıla.
2. Tetikleyici olay mı takvim mi ayır.
3. Upsell zamanlamasını ilk değere göre konumla.
4. Kanal çelişkisi tara.
5. Tercih/çıkış yolu kontrol et.
6. Persona itirazı ekle.
7. Notification dosyasına delege edilecek anlık uyarıları ayır.
8. Tek cümle öneri: aşama + tek CTA.

## Derin tanı senaryoları

**Senaryo A — Aktivasyon yerine newsletter.** Yeni kullanıcıya sektörel blog dizisi; ilk işi yaptıran mail yok.

**Senaryo B — Çift upsell.** Aynı gün in-app banner + mail + push yıllık plan. Yorgunluk ([kb:107-notifications]).

**Senaryo C — Yanlış birleşim alanı.** “Merhaba {{null}}” veya yanlış şirket adı. Skeptical özensizlik okur.

**Senaryo D — Churn indirim yağmuru.** Değer sorunu varken yalnızca kupon. Kök neden kaçırılır.

**Senaryo E — Özellik açıldı maili / UI’da kilitli.** Kanal–ürün çelişkisi clarity↓.

**Senaryo F — Tercih merkezi süsü.** Link var; sayfa 404 veya global unsubscribe yok.

## Aşama sözlüğü (FirstClick)

- **Activate:** ilk değer olayına iten mesajlar.
- **Retain:** değeri pekiştiren, eğitimsel mesajlar.
- **Expand:** kullanım sinyalinden sonra yükseltme/seat.
- **Win-back:** sessizleşme sonrası nazik dönüş.
Timeline’da aşamayı etiketle; yanlış aşama = temel bulgu. Bu sözlük open-rate iddiası değildir.

## Tetikleyici kalitesi

Takvim (“gün 3 maili”) kolaydır; olay (“ilk proje yok”) daha ilgili olma eğilimindedir — kesin uplift yazma. Corpus’ta yalnızca takvim görünüyorsa ve kullanıcı çoktan aktifse aşama körü bulgusu yaz. Expand mesajını activate’den ayır.

## Analistin sık hataları

1. Tüm mailleri spam saymak — işlemsel mail ayrıdır.
2. Upsell’i her zaman kötülemek — kullanım sonrası adil olabilir.
3. Lifecycle ile notification’ı aynı bulguda eritmek.
4. Konu satırı A/B yüzdesi uydurmak.
5. Kişiselleştirme yok diye aşırı ceza — yanlış kişiselleştirme daha kötüdür.

## RAG bağımsız chunk notu

Chunk soruları: aşama doğru mu; tetikleyici olay mı; upsell zamanı erken mi; çıkış/tercih var mı? Aşama, tetikleyici, upsell, win-back, tercih merkezi terimlerini koru.

## Türkiye ve dil notları

E-posta filtresi ve WhatsApp beklentisi kanal seçimini etkiler; kanal yokluğu otomatik hata değildir. SMS’te işlemsel ile pazarlamayı ayır. Zamansız “fırsat” mailleri aşama körüdür.

## Mesaj–davranış matrisi ve tek CTA

Satır: activate / retain / expand / win-back. Sütun: e-posta / in-app / push. Boşluk veya çakışma bulgusu üret. Her mesajda bir birincil CTA olmalı; çoklu birincil buton seçim maliyeti yaratır.

## Sessizlik

Hiç lifecycle olmaması agresif yanlış mesajdan iyi olabilir. Early-stage boşluğu olgunluk notu olarak yaz; open-rate uydurma.

## FirstClick rapor paragrafı

“Lifecycle örneği [alıntı], aşama etiketi [activate/retain/expand/win-back], tetikleyici [olay/takvim], çelişki [kanal/ürün]. Öneri: [olay + tek CTA]. Skor: adoption/trust/onboardingRisk — lifecycle.”

## Expand mesajı güvenliği

Expand ancak kullanım sinyali sonrası etiketlenir. Limit %80, ekip daveti ihtiyacı, workspace çoğaltma gibi sinyaller corpus’ta görünüyorsa expand gerekçesi doğar. Sinyal yokken yıllık plan baskısı activate ihlalidir.

## Sık görülen corpus çelişkileri

Gün-0 maili yıllık plan satar; kullanıcı henüz empty state’tedir. “Özellik X açıldı” maili gelir; uygulama içinde X paywall’lıdır. Aktif güç kullanıcıya “kuruluma başla” dizisi devam eder — aşama körü otomasyon. Win-back kuponu üç gün üst üste gelir; tercih merkezi 404’tür. Aynı içerik push, mail ve in-app’te aynı dakika basılır — kanal çakışması. Analist aşama etiketi ve tetikleyici türünü yazmadan “çok mail var” demez. Öneri: olay tetiklemeli activate dizisi, expand’i kullanım sinyaline bağlama, çalışan unsubscribe.

## Persona itiraz diyalogları (örnek dil)

busy-professional: “Bugün işime yarayan tek adım ne?”
skeptical: “Bu indirim sahte aciliyet mi, yoksa gerçekten bitiyor mu?”
price-sensitive: “Daha yeni ücretsiz başladım, neden satış maili?”
student: “Bu maildeki özellik benim hesabımda neden kilitli?”
non-technical: “Nasıl daha az mail alırım?”
Diyaloglar aşama ve tercih merkezi kontrolünü persona diline bağlar. Cevap yüzeyi yoksa lifecycle sürtünmesi yaz.

## Kısa analist özeti

Lifecycle mesajı aşama, tetikleyici ve tek CTA üçlüsüyle okunur. Gün-0 upsell, aşama körü kurulum maili ve kırık tercih merkezi en sık trust/adoption kırıklarıdır. Expand mesajı kullanım sinyalinden sonra gelmelidir. Sessizlik her zaman ceza değildir; yanlış mesaj daha pahalıdır. Open-rate veya conversion yüzdesi yazma; kanal–ürün çelişkisini citation ile göster.

Aşama etiketi olmadan lifecycle bulgusu yazma. Activate, retain, expand ve win-back ayrımı hem timeline hem skor gerekçesinde okunabilir olmalıdır; aksi halde mesaj gürültüsü diye genel kalır.

Tek birincil CTA kuralını ihlal eden mesajlarda busy-professional seçim maliyeti yaşar; bunu timeline’a friction olarak yaz.

## Kanıt/atıf disiplini (lifecycle özelinde)

Lifecycle bulgusu ancak somut mesaj metni alıntılanınca güçlüdür. Analist “muhtemelen upsell atıyorlardır” diye varsaymaz; corpus’ta gerçek e-posta/banner metni [doc:…] veya [web:…] olarak görünmüyorsa bulgu “gözlemlenmedi” diye işaretlenir, uydurulmaz. Konu satırı, gönderim zamanı ve tetikleyici (olay mı takvim mi) mümkünse alıntılanır. Open-rate, tıklama ve dönüşüm sayıları yalnızca corpus’ta açık kaynak varsa aktarılır; yoksa analist yalnızca kalıbı (zamansız upsell, aşama körü) adlandırır. Kişiselleştirme hatası (“Merhaba {{null}}”) doğrudan ekran kanıtıyla yazılır; çünkü bu özensizlik sinyali güçlü ve doğrulanabilirdir.

## Aşama–persona kesişim yorumu

Aynı mesaj, kullanıcının aşamasına ve personasına göre farklı okunur. **Activate aşamasındaki student**, öğretici diziyi değerli bulur; aynı diziyi **retain aşamasındaki güç kullanıcıya** göndermek aşama körlüğüdür. **Expand mesajı** yalnızca kullanım sinyali (limit %80, ekip büyüdü) sonrası **price-sensitive** için bile kabul edilebilir hale gelir; sinyalden önce gelirse öfke üretir. **skeptical** için sahte kişiselleştirme ve sahte kıtlık, mesajın içeriğinden bağımsız olarak trust’ı kırar. Analist bulguyu “aşama × persona” hücresinde konumlar: örneğin “win-back × busy-professional: nazik tek-CTA dönüş uygun; kupon yağmuru değil.”

## Aksiyon reçetesi ve kenar durumlar

Reçete: (1) görünen her lifecycle mesajını aşama etiketiyle (activate/retain/expand/win-back) sınıfla; (2) tetikleyicinin olay mı takvim mi olduğunu ayır; (3) upsell’i ilk değere göre zaman ekseninde konumla; (4) kanallar arası çelişki (mail “ücretsiz” / UI “kilitli”) tara; (5) tercih merkezi ve unsubscribe’ın çalıştığını doğrula; (6) her mesajda tek birincil CTA olup olmadığını kontrol et. Kenar durumlar: **işlemsel mail** (şifre sıfırlama, fatura) lifecycle değildir, spam sayma; **hiç lifecycle olmaması** olgunluk boşluğudur ama yanlış/agresif mesajdan daha az zararlı olabilir; **çok dilli kitle** için TR/EN karışık gönderim aşama körlüğüyle karıştırılmamalı, i18n notu olarak ayrılmalı.

## Atıf disiplini

- Mesaj metinleri: [doc:…] / [web:…].
- [kb:106-lifecycle-messaging]; notifications: [kb:107-notifications]; paywall: [kb:98-paywalls].
- Open-rate / conversion istatistiği uydurma.

## Analist uygulama notu

Şablon: “[Persona] [aşama]’da ‘[alıntı mesaj]’ alıyor; [zamansız upsell|aşama körü|çıkış yok] nedeniyle [friction|trust↓]. Öneri: [olay tetiklemeli tek CTA]. Skor: adoption/onboardingRisk/trust gerekçesi lifecycle.” RAG’de aşama, tetikleyici, upsell, win-back, tercih merkezi kelimelerini tut.
