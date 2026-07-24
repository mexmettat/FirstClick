# Ürün analitiği: ölçülen şey yönetilir — yanlış ölçülen şey çarpıtılır

FirstClick ürün analitiğini iki düzlemde okur: (1) ürünün kendi içinde kullanıcıya gösterdiği analitik/dashboard kalitesi, (2) ekibin aktivasyon/retention için seçtiği başarı metriklerinin vaad ile uyumu. Bu dosya ürün analitiği değerlendirme standardıdır. [kb:65-product-analytics]

## Kapsam

Kapsam: Kuzey yıldızı adayı, aktivasyon/retention metrik hizası, vanity metrik tuzağı, olay adlandırma netliği, kullanıcıya dönük raporların anlaşılırlığı, gizlilik/izin ile ölçüm gerilimi, ve “veriye dayalı” vaadi ile boş/yanlış grafik çelişkisi. Kapsam dışı: FirstClick’in kendi skor formülü implementasyonu, SQL reçetesi, üçüncü parti araç kurulumu adımları, uydurma benchmark’lar.

Heuristic: İyi metrik davranış değiştirir; kötü metrik tiyatro üretir. “DAU arttı” tek başına ürün değeri kanıtı değildir (yönsel kural).

## Tanı sinyalleri

1. **Vanity duvarı**: Sayfa görüntüleme, toplam kayıt; aksiyon yok. busy-professional “so what?” der.
2. **Vaad–metrik kopukluğu**: Vaad “daha hızlı fatura”, metrik “login sayısı”.
3. **Aktivasyon tanımsız**: Funnel’de kayıt var, aha yok ([kb:62-activation]).
4. **Kullanıcıya junk chart**: Anlamsız eksen, jargon etiket, empty grafik ([kb:54-dashboard-design]).
5. **Gizlilik drift**: “Gizliliğe önem” + aşırı tracking izni baskısı; skeptical trust↓.
6. **A/B tiyatrosu**: Her renk değişimi “bilim”; örneklem/etik yok ([kb:27-experimentation-ab]).
7. **Tek sayı fetişi**: Tek KPI tüm ürünü yönetir; yan etkiler (spam, dark pattern) görünmez.
8. **Olay isimleri kaos**: `btn_click_1`, `thing_done` — analist corpus’ta anlam çıkaramaz; “net olay dili yok” yaz.
9. **Mobil/web kırık ölçüm**: Çift sayım veya kör nokta iddiasını kanıtsız yazma; UI’da çelişen sayılar görürsen alıntıla.
10. **Paywall metrik tuzağı**: Upgrade tıklaması başarı sayılıyor; değer değil baskı ölçülüyor.

Olumlu sinyaller: vaad ile aynı dilde metrik, aktivasyon olayı net, retention döngüsüne bağlı ikincil metrik, kullanıcı raporlarında düz dil, KVKK/izin şeffaflığı, deneylerde tek hipotez dili, vanity’nin arka planda kalması.

## Persona tepkileri

- **busy-professional**: “Bu sayı bana ne yaptırmalı?” Raporlar eyleme bağlı değilse zaman kaybı.
- **non-technical**: Cohort, funnel, NPS jargon duvarı. “Cevapsız 4 talep” dili.
- **skeptical**: Şişirilmiş sosyal kanıt sayıları ve “%400 artış” iddiaları. Kaynak yoksa reddeder ([kb:26-citation-discipline]).
- **price-sensitive**: Kullanım metrikleriyle cezalandırıcı limit (“çok kullandın, öde”) — net ve öngörülebilir olmalı.
- **student / first-timer**: Öğrenme analitikleri korkutucu olabilir; ilerleme dili daha iyi.

## İyi ve kötü örnekler

**Kötü kuzey yıldızı**
DAU. Ürün bir faturalama aracı; günlük giriş zorlama bildirimlerle şişiriliyor.

**İyi aday (örnek çerçeve, evrensel gerçek değil)**
“Haftada en az bir fatura gönderen aktif hesap” — vaad ile hizalı. Ürüne göre değişir; uydurma sektör standardı diye sunma.

**Kötü kullanıcı raporu**
“Engagement score: 72” açıklamasız.

**İyi kullanıcı raporu**
“Bu hafta 12 talep kapandı — geçen haftaya göre 3 fazla” + listeye git CTA.

**Kötü deney dili**
“Buton mavisi %12 kazandırdı” bağlam/örneklem yok; FirstClick bunu kanıt saymaz.

**İyi deney dili**
Hipotez, birincil metrik, süre; corpus’ta yoksa “deney gerekçesi görülmedi”.

**Kötü gizlilik**
Zorunlu “tüm çerezler” duvarı; reddetince ürün çalışmıyor (görülürse yaz).

**İyi**
Ölçüm amacı kısa; reddedilebilir analitik çerez; ürün temel işlevi ayakta.

## FirstClick skor etkileri

- **clarity**: Metrik ve rapor dili. Jargon clarity↓.
- **adoption**: Yanlış metrik yanlış ürün davranışına yol açar (spam, fake engagement) — adoption gerekçesinde dolaylı etkiyi ayırarak yaz.
- **onboardingRisk**: İlk değer yerine “profil tamamla” metriği optimize ediliyorsa risk↑.
- Trust: şişik sayılar ve gizlilik baskısı.
- Analist FirstClick skorunu ürünün vanity metriğiyle karıştırma.

## Eylem kontrol listesi

1. Landing/ürün vaadini bir cümleyle al; hangi olay bunu kanıtlar sor.
2. Dashboard/raporlarda vanity vs aksiyon metriklerini ayır.
3. Aktivasyon olayının analitik dilde geçip geçmediğine bak.
4. Kullanıcıya dönük grafiklerin empty/jargon durumunu not et.
5. Sosyal kanıt sayılarını kaynaklı mı kontrol et ([kb:11-social-proof-playbook]).
6. Çerez/izin mikro kopyasını trust açısından oku.
7. Upgrade tıklamasının “başarı” gibi sunulup sunulmadığını işaretle.
8. Öneri: metrik–vaad hizası, düz dil, vanity’yi geri çek — SQL/tool dayatma.

## Atıf disiplini

- Ürün metrik iddiaları ve sayılar: [doc:…] / [web:…] — yoksa uydurma.
- Analitik standardı: [kb:65-product-analytics]; metrikler [kb:25-metrics-that-matter]; atıf [kb:26-citation-discipline].
- “SaaS’ta iyi aktivasyon %X’tir” benchmark uydurma.
- Heuristic önerileri ölçülmüş sonuç diye yazma.
- Past analiz metrikleri: [past:…].

## Derin uygulama: FirstClick analisti nasıl metrik konuşur?

FirstClick çıktısında ürün ekibine “GA4 kurun” demek zayıftır. Daha iyi: “Vaadiniz X; corpus’ta X’i kanıtlayan olay görünmüyor; checklist Y’ye optimize edilmiş görünüyor — bu adoption’ı yanıltır.” Araç değil hiza.

Kullanıcıya gösterilen analitik ile dahili analitik ayrıdır. Kullanıcı “engagement 72” görüyorsa bu bir UX clarity sorunudur. Dahili metrik seçimi ise ürün stratejisi yorumudur; corpus kanıtı yoksa spekülasyonu sınırla: “görünen raporlar vanity ağırlıklı”.

Proxy metrikler: invite sayısı aktivasyon proxy’si olabilir ama zorunlu invite baskısı kaliteyi bozar. Analist proxy’nin oyuna açık olup olmadığını sorar.

Gizlilik ve ölçüm: TR bağlamında KVKK dili varsa ([kb:36-turkey-market], [kb:28-security-privacy-copy]) ölçüm izinleri ile çelişki ara. Hukuki sonuç uydurma; metin çelişkisini yaz.

## Analist uygulama notu

Analitik chunk: düzlem (kullanıcıya dönük rapor | başarı metriği hizası), vaad alıntısı, gözlenen metrik/grafik, sorun (vanity|kopukluk|jargon|gizlilik), persona, skor. Örnek: “skeptical, ‘%400 artış’ kaynaksız [web:…] → trust↓; busy-professional vanity dashboard → clarity↓ adoption orta.”


## Senaryo laboratuvarı: yanlış metrik

**A:** DAU şişirme bildirimi. Busy-professional öfke; gerçek değer yok.

**B:** “%400 artış” kaynaksız. Skeptical trust↓.

**C:** Engagement 72. Non-technical confusion.

**D:** Upgrade tıklaması KPI. Price-sensitive baskı optimize.

**E:** Vaad fatura hızı; metrik login. Hiza yok.

## Operasyonel kontrol
Vaad–metrik hizası, vanity ayrımı, aktivasyon olayı dili, kullanıcı rapor netliği, sosyal kanıt kaynağı, çerez/izin, upgrade-as-success tuzağı. Benchmark uydurma.


## Karar çerçevesi: metrik vaadi ispatlıyor mu?

Bir metrik ancak vaad cümlesindeki fiili gözlüyorsa hizalıdır. Vaad “daha hızlı yanıt”, metrik “haftalık kapalı ticket / medyan yanıt süresi” hizaya yakındır. Vaad aynı, metrik “DAU” uzak proxy’dir. Proxy’ler bazen gerekir; FirstClick proxy’yi gerçek diye satmamayı ister.

Kullanıcıya dönük analitikte jargon clarity sorunudur. Dahili analitikte yanlış kuzey yıldızı strateji sorunudur. İkisini aynı bulgu cümlesinde karıştırma. Skeptical’a kaynaksız yüzde göstermek trust↓; bunu sosyal kanıt dosyasıyla bağla ([kb:11-social-proof-playbook], [kb:26-citation-discipline]).

Oyunlaştırılmış metrikler (engagement score) açıklamasız bırakılırsa non-technical kaybolur. Açıklama “kaç kez tıkladığın” ise busy-professional değeri sorgular. Metrik eyleme çağrı taşımıyorsa dashboard vanity’sidir ([kb:54-dashboard-design]).

Gizlilik: ölçmek ile saygı gerilimi. Zorunlu analitik çerez duvarı ürünü kullanılamaz kılıyorsa trust + adoption. Hukuki ceza uydurma; metin ve akış çelişkisini yaz. TR bağlamında KVKK dili varsa izin mikro kopyasıyla karşılaştır.

FirstClick skorunu ürün KPI’sı gibi optimize etmeyi önerme. Analist çıktısı nitel gerekçeli skor + citation’dır; “DAU’yu artırın” jenerikliği zayıf kalır. Bunun yerine: “Aha olayını tanımlayın ve checklist’i ona hizalayın.”


## Birleşik okuma: analitik × aktivasyon × sosyal kanıt × atıf

Ürün analitiği FirstClick çıktısının meta katmanıdır: ekibin neyi optimize ettiği, kullanıcının ne gördüğü, iddiaların kaynağı. Aktivasyon tanımsızsa analitik tiyatrodur ([kb:62-activation]). Kaynaksız % artışlar sosyal kanıt dosyasına aykırıdır ([kb:11-social-proof-playbook]). Atıf disiplini olmadan metrik cümlesi yazılmaz ([kb:26-citation-discipline]).

Vanity dashboard hem analitik hem dashboard bulgusudur; birincil çerçeveyi seç. “Veriye dayalı kültür” vaadi boş grafik + jargonla çelişiyorsa citation’lı drift.

Analiste düşen: araç dayatmak değil, vaad–olay–checklist hizasını kurmak. Bu hiza kurulunca FirstClick skor gerekçeleri de netleşir; kurulmayınca adoption yorumları spekülatif kalır.


## Analist sözlüğü: metrik hiza kontrolü

Kontrol soruları: Vaad fiili nedir? Bu fiili hangi olay kanıtlar? Checklist bu olaya mı bağlı? Kullanıcıya gösterilen sayı bu olayı mı anlatır? Sosyal kanıt yüzdesinin kaynağı var mı? Upgrade tıklaması başarı mı sanılıyor? Çerez duvarı temel işlevi kırıyor mu? Her “hayır” ayrı bulgu adayıdır. FirstClick “metrik kültürü eksik” diye yumuşak geçmez; hangi hiza kırığını gördüğünü yazar. Benchmark ve araç dayatması yok; citation ve heuristic etiketi var.


## Kapanış notu (RAG)

Bu bölüm bağımsız chunk olarak da anlamlıdır: FirstClick analisti konuyu ürün corpus alıntısıyla birleştirir, heuristic’i istatistik gibi sunmaz, persona tepkisini somut UI metnine bağlar, skor gerekçesinde clarity / adoption / onboardingRisk / trust ayrımını korur ve uydurma özellik önermez. Eksik kanıtta “corpus’ta görmedim” der.
 Analitik chunk’ında vaad–metrik hizası ve kaynaklı sayı disiplini korunmalıdır.


## Eylem tarifleri (ürün analitiği)

**Tarif 1 — Vaad–metrik hizası:** Vaad cümlesindeki fiili gözleyen olayı sor. “Daha hızlı fatura” → gönderilen fatura / süre proxy’si hizaya yakın; DAU uzak proxy. Proxy’yi gerçek değer diye satma.

**Tarif 2 — Vanity ayıklama:** Sayfa görüntüleme, toplam kayıt, login sayısını aksiyon metriklerinden ayır. Busy-professional “so what?” diyorsa clarity↓ gerekçesi yaz.

**Tarif 3 — Kullanıcıya dönük rapor:** “Engagement 72” açıklamasız jargon ise non-technical kaybolur. Düz dil + sıradaki CTA (“12 talep kapandı → listeye git”) öner; yeni grafik tipi uydurma.

**Tarif 4 — Upgrade-as-success tuzağı:** Upgrade tıklaması KPI ise baskı optimize ediliyor olabilir; değer olayından ayır. Price-sensitive için özellikle not et.

**Tarif 5 — Gizlilik–ölçüm gerilimi:** “Gizliliğe önem” + zorunlu analitik çerez / ürün kırılması çelişkisi. Hukuki ceza uydurma; metin ve akış çelişkisini yaz ([kb:28-security-privacy-copy], [kb:36-turkey-market]).

## Kenar durumlar

- **A/B tiyatrosu:** “Buton mavisi %12” örneklem/etik yoksa kanıt sayma ([kb:27-experimentation-ab]).
- **Tek KPI fetişi:** Tek sayı spam veya dark pattern yan etkisini gizleyebilir.
- **Olay adı kaosu:** `btn_click_1` — “net olay dili yok” yaz; şema uydurma.
- **Çift sayım iddiası:** Mobil/web kör nokta spekülasyonu kanıtsız yazma; çelişen UI sayılarını alıntıla.
- **Sosyal kanıt şişirme:** Kaynaksız “%400 artış” skeptical trust↓ ([kb:11-social-proof-playbook], [kb:26-citation-discipline]).
- **FirstClick skoru ≠ ürün KPI:** Analist çıktısını DAU optimizasyonuna çevirme.

## Persona-özel yorum şablonu

“Düzlem [kullanıcı raporu|başarı metriği hizası]; vaad [alıntı]; gözlenen [metrik/grafik]; sorun [vanity|kopukluk|jargon|gizlilik|upgrade tuzağı]; [persona]; skor; öneri [hizala|düz dil|vanity geri çek] — SQL/tool dayatma yok.”

Busy-professional eyleme bağlı sayı ister. Non-technical cohort/funnel jargon duvarında kaybolur. Skeptical kaynaksız yüzde reddeder. Price-sensitive kullanım cezası limitlerinde öngörülebilirlik ister. Student korkutucu “skor” yerine ilerleme dili tercih eder.

## Analist kontrol listesi (geniş)

1. Vaadi bir cümleyle al; hangi olay kanıtlar?
2. Vanity vs aksiyon metriklerini ayır.
3. Aktivasyon olayı analitik dilde geçiyor mu ([kb:62-activation])?
4. Kullanıcı grafiklerinde empty/jargon.
5. Sosyal kanıt sayıları kaynaklı mı?
6. Çerez/izin mikro kopyası trust.
7. Upgrade tıklaması “başarı” gibi mi sunuluyor?
8. Deney dili hipotez/birincil metrik taşıyor mu?
9. Proxy metrik oyuna açık mı (zorunlu invite vb.)?
10. TR KVKK dili varsa izin metniyle karşılaştır — hukuki sonuç uydurma.
11. “SaaS aktivasyon %X” benchmark uydurma.
12. Öneri: hiza + düz dil; GA4 kurulum adımı dayatma yok.
