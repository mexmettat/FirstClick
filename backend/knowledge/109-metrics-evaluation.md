# Metrikler ve değerlendirme: neyin başarı sayılacağı

FirstClick analisti metrik çerçevesini değerlendirirken şunu sorar: ürün ekibinin ve analistin kullandığı göstergeler gerçek kullanıcı değerine bağlı mı, yoksa vanity ve yanıltıcı ortalamalar mı? Bu doküman, FirstClick bilgi tabanında metrics & evaluation değerlendirmesinin standart çerçevesidir. [kb:109-metrics-evaluation]

## Kapsam

Bu dosya şu alanları kapsar: aktivasyon tanımı, elde tutma (retention) okuma heuristic’leri, funnel adımları, vanity metrikler, kuzey yıldızı seçimi, segment bazlı okuma, ve FirstClick skor gerekçesini metrikle şişirmeme disiplini. Kapsam dışı: A/B yöntem detayı (bkz. [kb:108-ab-experimentation]), bildirim CTR’si (bkz. [kb:107-notifications]). FirstClick çıktısı nitel skor ve timeline’dır; analist ürünün özel dashboard sayılarını uydurmaz.

Heuristic: İyi metrik, kullanıcının değer üreten davranışına yakın ve oyuna gelmeye (gaming) dirençlidir. “MAU arttı” tek başına sağlık kanıtı değildir.

## Tanı sinyalleri (diagnostic signals)

1. **Vanity zirvesi**: Pageview, kayıt sayısı, uygulama indirme — aktivasyon yok.
2. **Tanımsız aktivasyon**: “Aktif kullanıcı” ne yaptığı belli değil.
3. **Tek ortalamaya tapınma**: Ortalama süre / ortalama gelir; dağılım ve segment yok.
4. **Funnel deliği gizleme**: Kayıt→ödeme atlanmış; ara adımlar raporlanmıyor.
5. **Sahte retention**: Push veya e-posta tıklaması “geri döndü” sayılıyor; değer yok.
6. **Skor kirliliği**: FirstClick raporuna “dönüşüm %X artacak” diye icat edilmiş projeksiyon.
7. **Çelişen KPI**: Satış “demo sayısı”, ürün “self-serve aktivasyon” — aynı anda ödüllendiriliyor, kullanıcı sıkışıyor.
8. **Zaman penceresi kayması**: 1 günlük metrik 30 günlükmiş gibi konuşuluyor.

Olumlu sinyaller: yazılı aktivasyon olayı (“ilk fatura kesildi”), segmentli okuma (persona/cihaz), north star’ın değer diline bağlı olması, vanity ile action metriklerinin ayrılması, FirstClick’te heuristic dil (“gerekçe güçlenir”) kullanımı.

## Kullanıcı itirazları (dolaylı — ürün metrik iddialarına)

- **“‘Milyonlarca kullanıcı’ benim sorunumu çözmüyor.”**
- **“Aktifiz diyorlar ama ben değer göremedim.”**
- **“Başarıyı tıklama ile ölçüp özellik ekliyorlar, işim uzuyor.”**
- **“Retention için bildirim yağmuru — sahte canlılık.”**

## Persona tepkileri

- **busy-professional**: Kendi iş sonucunu önemser; şirketin MAU övünmesi ikna etmez.
- **non-technical**: Metrik jargonu (DAU/WAU/NSM) UI’da görünmemeli.
- **skeptical**: Şişik kamu metrikleri trust↓; tanımlı ve mütevazı dil tercih.
- **price-sensitive**: “Değer” fiyatla bağlanmalı; boş büyüme metrikleri yetmez.
- **student / first-timer**: Öğrenme ilerlemesi (tamamlanan ders) gibi yakın metrik anlamlı.

## İyi ve kötü örnekler

**Kötü — vanity landing**
“10M indirme” hero’da; ürün boş, aktivasyon yok. Skeptical “eski parlaklık” okuyabilir.

**İyi — değer metriği dili**
“İlk raporunu oluştur” ürün içinde birincil başarı; pazarlama de aynı olayı anlatır (sayı uydurmadan).

**Kötü — FirstClick’e sahte projeksiyon**
“Bu düzeltme dönüşümü %25 artırır.” Yasak; yerine “onboardingRisk gerekçesini zayıflatır (heuristic).”

**İyi — nitel skor bağlama**
“Aktivasyon olayı ilk oturumda ulaşılamıyor → adoption↓ / onboardingRisk↑.”

**Kötü — retention tiyatrosu**
Günlük push ile açılış sayısını şişirme; aha yok.

**İyi — retention okuma**
Geri dönüş + değer olayının tekrarı birlikte düşünülür; yalnızca session count yetmez.

## FirstClick skor etkileri

- **adoption**: Aktivasyon tanımı net ve gözlenen akış buna engelse adoption↓ gerekçesi yazılır.
- **onboardingRisk**: İlk değer olayına giden yol uzun/engelli ise risk↑.
- **clarity**: Ürünün “başarı” dediği şey kullanıcıya anlatılmıyorsa clarity↓.
- **trust**: Şişik kamu metrikleri ve tanımsız iddialar trust↓.
- Analist kendi ölçüm panosu uydurmaz; corpus’taki iddiaları değerlendirir.

Heuristic skor notu: FirstClick skorları 0–100 nitel gerekçelidir; dışarıdan “industry benchmark %X” ekleme.

## Eylem kontrol listesi

1. Ürünün kamu veya in-app “başarı” iddialarını alıntıla.
2. Vanity vs değer ayrımı yap.
3. Aktivasyon olayını tek cümlede tanımla (ürün dilinden).
4. Funnel’da görünür kopuklukları timeline’a yaz.
5. FirstClick önerisine sahte yüzde koyma.
6. Persona’nın önemsediği sonucu metrikle eşle.
7. Deney dosyasına vanity win uyarısı için çapraz referans.
8. Tek cümle: “ölülmesi gereken olay = …”

## Derin tanı senaryoları

**Senaryo A — Kayıt vanitesi.** Hero “50.000 kayıt”; ürün içi ilk değer oranı konuşulmuyor. Skeptical şişirme algılar.

**Senaryo B — Aktif tanımsız.** “Aktif ekipler” pazarlama dili; olay tanımı yok. Analist tanımı sormadan sayı uydurmaz.

**Senaryo C — Funnel makyajı.** Yalnızca mutlu adımlar gösterilmiş; paywall drop-off gizlenmiş. Timeline’da kopukluk yaz.

**Senaryo D — Sahte projeksiyon.** Önceki analiz “+30% conversion” demiş — [past:…] varsa çelişkiyi düzelt; yeni uydurma ekleme.

**Senaryo E — Segment ezmesi.** Ortalama iyileşme; mobil veya TR kullanıcı kötüleşmiş olabilir — corpus ipucu varsa ayır.

**Senaryo F — Ödül çatışması.** Satış demo sayısını, ürün self-serve’i ödüllendiriyor; kullanıcı zorunlu formda sıkışıyor.

## FirstClick skor–metrik sözlüğü

- adoption ↔ değere giden davranışın gözlenen engeli/kolaylığı.
- onboardingRisk ↔ ilk değer olayına giden yolun kırılganlığı.
- clarity ↔ başarı ve kavramların anlaşılırlığı.
- trust ↔ iddia ve kanıt uyumu (şişik metrik trust’ı bozar).
Bu eşleme sayısal formül değildir; gerekçe dilidir. “Skoru 12 puan düşür” yazma.

## Kuzey yıldızı seçim heuristic’i

İyi aday: kullanıcı iş sonucuna yakın, sık gaming edilmeyen, ürün vaadiyle aynı cümlede anlatılabilen olay. Zayıf aday: ham trafik, tek seferlik indirme, açılış sayısı. Analist ürünün north star’ını ilan etmek zorunda değildir; uyumsuz övüncü işaret eder.

## Analistin sık hataları

1. Industry benchmark yüzdesi eklemek.
2. Retention’ı yalnızca session ile eşitlemek.
3. FirstClick çıktısına sahte KPI tablosu koymak.
4. Vanity’yi tamamen yasak saymak — bağlamda ikincil olabilir, birincil olmamalı.
5. Persona farkını yok sayıp tek metrik dayatmak.

## RAG bağımsız chunk notu

Chunk soruları: metrik vanity mi değer mi; aktivasyon tanımlı mı; FirstClick’e sahte yüzde kaçmış mı; segment bakılmış mı? Aktivasyon, vanity, retention, north star, funnel terimlerini koru.

## Türkiye ve dil notları

“Binlerce firma” yuvarlak iddiası tanımsızsa belirsiz say. “Türkiye’nin en …” süperlatifi metrik değil trust riskidir. Kur karışık büyüme hikâyelerini olduğu gibi alıntıla.

## Funnel adlandırma ve öz-denetim

Ziyaret → kayıt → aktivasyon olayı → tekrar değer → ücretli. Atlanan adımı görünür değil diye yaz; oran icat etme. Göndermeden önce: uydurma yüzde, tanımsız aktivasyon, vanity birincilliği, persona bağı kontrol et.

## Persona–metrik bağlama

busy-professional → time-to-value. price-sensitive → ücretsiz yolda değer + sürpriz ücret yokluğu. skeptical → doğrulanabilir iddia. student → ilk öğrenme çıktısı. Bağlama skor formülü değildir.

## FirstClick rapor paragrafı

“Öne çıkan metrik iddiası [alıntı]. Sınıf [vanity/değer]. Aktivasyon olayı tanımı [var/yok/uyumsuz]. FirstClick önerisine yüzde kaçmış mı [evet/hayır]. Öneri: [olay tanımını hizala]. Skor gerekçesi nitel; benchmark yok.”

## Oyuna gelme (gaming) uyarıları

Push ile açılış şişirme, zorunlu günlük check-in, tıklama için yanıltıcı CTA. Bunlar metrik sağlıksızlığıdır ve notification/paywall dosyalarıyla kesişir. Görürsen kök nedeni metrik teşviki olarak da not et.

## Sık görülen corpus çelişkileri

Hero “milyonlarca indirme” övünür; uygulama içi ilk değer yolu üç engelli ve ölçülmez. “Aktif kullanıcı” ifadesi pazarlamada geçer; olay tanımı dokümante değildir. Funnel görseli kayıtta biter; paywall drop-off gösterilmez. Önceki iç sunumda “dönüşüm %25 artacak” projeksiyonu vardır — FirstClick bunu tekrarlamaz, uydurma diye ayıklar. Satış KPI’sı demo sayısı, ürün KPI’sı self-serve aktivasyondur; form zorunluluğu kullanıcıyı sıkıştırır. Analist vanity/değer ayrımı ve aktivasyon cümlesini net yazar. Öneri: tek değer olayı tanımı, funnel’da görünür kopukluk, skor gerekçesinde yüzde yasağı.

## Persona itiraz diyalogları (örnek dil)

skeptical: “‘Milyonlarca kullanıcı’ benim sorunumu nasıl çözer?”
busy-professional: “Sizin aktif tanımınız benim işimi bitirdiğim an mı?”
price-sensitive: “Ücretsiz planda değeri ölçüyor musunuz, yoksa sadece kaydı mı?”
student: “İlerlemem tamamlanan ders mi, yoksa uygulama açılışı mı?”
Diyaloglar vanity ile değer ayrımını persona diline çevirir. FirstClick cevabında uydurma KPI ile avunma.

## Kısa analist özeti

Metrik değerlendirmesi vanity ile değer olayını ayırır ve FirstClick skoruna sahte yüzde kaçırmamayı zorunlu kılar. Aktivasyon tanımı ürün dilinden tek cümle olmalıdır. Funnel’da görünmeyen paywall kopukluğu adoption gerekçesini zayıflatır. Segment ve ödül çatışması (satış vs self-serve) kullanıcı sıkışıklığı üretir. Benchmark veya projeksiyon icat etme; gerekçeyi nitel yaz.

## Vanity–değer ayrım rehberi (somut örneklerle)

Analistin en sık kararı bir metriğin vanity mi yoksa değere yakın mı olduğudur. Pratik ayraç: metrik gaming edilmeye ne kadar dirençli ve kullanıcının iş sonucuna ne kadar yakın? Vanity tarafı: toplam kayıt, indirme, sayfa görüntüleme, “milyonlarca kullanıcı”, ham MAU. Değer tarafı: ilk fatura kesildi, ilk rapor paylaşıldı, ekip ikinci kez geri döndü, tamamlanan ders. Gri alan: oturum sayısı — bildirim yağmuruyla şişebildiği için tek başına retention kanıtı değildir; ancak değer olayının tekrarıyla birlikte okununca anlam kazanır. Analist bir metriği tamamen yasaklamaz; “ikincil olabilir, birincil olmamalı” çerçevesini kullanır ve hangi olayın ölçülmesi gerektiğini tek cümlede yazar.

## Persona’ya göre başarı tanımı ve kenar durumlar

Başarı metriği personaya göre değişir: **busy-professional** için time-to-value; **price-sensitive** için ücretsiz yolda görülen değer + sürpriz ücret yokluğu; **skeptical** için doğrulanabilir, tanımlı iddia; **student/first-timer** için ilk öğrenme çıktısı. Analist ürünün öne çıkardığı metrik ile personanın önemsediği sonucu eşleştirir; uyumsuzluğu adoption gerekçesine bağlar. Kenar durumlar: **erken aşama ürün** için mütevazı, tanımlı küçük metrik, şişirilmiş büyük sayıdan sağlıklıdır; **iki taraflı pazar yeri** için tek taraflı büyüme (yalnızca alıcı veya yalnızca satıcı) yanıltıcıdır, likidite çift taraflı okunmalı; **düşük frekanslı ürün** (yılda birkaç kez kullanılan) için günlük aktiflik yanlış çerçevedir, değer olayı başına tekrar daha anlamlıdır. Hiçbir durumda analist industry benchmark yüzdesi eklemez; nitel gerekçe dilinde kalır.

## Atıf disiplini

- Metrik iddiaları yalnızca corpus’ta varsa: [web:…] / [doc:…].
- [kb:109-metrics-evaluation]; experimentation: [kb:108-ab-experimentation]; activation bağlamı mevcut activation bilgisiyle çelişki aranırsa citation.
- Benchmark ve uplift uydurma yasağı.

## Analist uygulama notu

Şablon: “[Persona] için başarı ‘[değer olayı]’; ürün ‘[vanity/iddiа]’ diye öne çıkardığı metrik; uyumsuzluk nedeniyle [adoption gerekçesi zayıf|trust↓]. Öneri: [aktivasyon tanımını hizala]. Skor: adoption/onboardingRisk — uydurma yüzde yok.” RAG’de aktivasyon, vanity, retention, north star, funnel kelimelerini tut.
