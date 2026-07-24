# Retention: geri dönüş, alışkanlık ve ikinci oturum

FirstClick retention’ı “kullanıcı sevdi mi?” duygusuyla değil, geri gelmeyi gerekçelendiren ürün döngüsüyle okur. Aktivasyon olmadan retention konuşmak erken kalır; aktivasyon sonrası sessizlik ise ürünün alışkanlık kancasının zayıf olduğunu gösterir. Bu dosya retention değerlendirme standardıdır. [kb:63-retention]

## Kapsam

Kapsam: ikinci oturum gerekçesi, habit loop (tetikleyici–eylem–ödül), bildirim/e-posta ile geri çağırma, hafta-1 deneyimi, boşalan hesaplar, churn sinyalleri (iptal akışı, downgrade), ve “yapışkanlık” vaadi ile gerçek kullanım döngüsü. Kapsam dışı: aktivasyon tanımı ([kb:62-activation]), bildirim spam taktikleri detayı ([kb:35-notifications]), fiyat kaynaklı churn’ün tüm psikolojisi ([kb:04-pricing-psychology], [kb:12-freemium-and-trial]).

Heuristic: Retention, kullanıcının “yarın da açmam için bir neden” görmesidir. Neden yoksa push bildirimi yalnızca ertelemeli terk üretir (yönsel kural).

## Tanı sinyalleri

1. **Tek atımlık değer**: İlk rapor güzel; ikinci gün ürün boş. Alışkanlık yok.
2. **Spam geri çağırma**: Değer yokken günde 5 e-posta; skeptical ve busy-professional öfke.
3. **Stale dashboard**: Dönüşte aynı empty/aynı sayılar; “hiçbir şey değişmemiş”.
4. **Zorunlu günlük giriş**: Yapay streak cezası; manipülasyon hissi (bağlama göre — net etiketlenmeli).
5. **İş birliği yokluğu**: Takım ürününde yalnız kullanıcı; sosyal yapışkanlık oluşmaz.
6. **Veri ihracı zor / kilit**: Skeptical güvenmez; price-sensitive kaçar — ters retention tuzağı trust↓.
7. **İptal labirenti**: Churn engelleme dark pattern; kısa vadeli tutma, uzun vadeli trust kaybı.
8. **Özellik mezarlığı**: Kullanılmayan 40 özellik; dönen kullanıcı kaybolur (IA/nav ile bağlı).
9. **Vaad drift**: “Her gün ekibin merkezi” ama günlük iş e-postada kalıyor.
10. **Mobilde yok**: Günlük kısa işler mobil kırık; busy-professional dönmez.

Olumlu sinyaller: net tekrar gerekçesi (gelen iş, günlük özet, bekleyen onay), nazik ve kişisel geri çağırma, dönüşte yeni/değişen bilgi, sağlıklı iptal, export, aktivasyon sonrası “sıradaki döngü” tasarımı.

## Persona tepkileri

- **busy-professional**: Takvimine oturan döngü (sabah özeti, onay kuyruğu). Gürültülü bildirim = uninstall.
- **non-technical**: Dönüşte “nereden devam?” net olmalı. Değişen UI panik yaratır.
- **skeptical**: Dark pattern iptal ve abartılı “seni özledik” güven aşındırır. Dürüst değer hatırlatması.
- **price-sensitive**: Yenileme öncesi sürpriz ücret churn. Limitlere yaklaşırken yumuşak uyarı.
- **student / first-timer**: Ödev/dönem ritmine bağlı kullanım; sezonluk sessizlik = churn sanılmamalı — analist bağlamı yazsın, uydurma metrik yorumlama.

## İyi ve kötü örnekler

**Kötü geri çağırma**
“Hâlâ bizimle misin? %50 indirim!!!” — kullanıcı değeri hatırlamadan satış.

**İyi geri çağırma**
“3 onay seni bekliyor” veya “Dün eklediğin müşteri için taslak teklif hazır.” Corpus’ta böyle veri yoksa uydurma; “kişisel tetikleyici eksik” de.

**Kötü streak**
Giriş yapmazsan rozetler yanar; değer yok.

**İyi döngü**
İşin doğası tekrarlı (günlük ticket, haftalık fatura); ürün o ritme oturur.

**Kötü iptal**
Gizli iptal, 5 soruluk suçlu anket zorunlu, telefon et.

**İyi iptal**
Net iptal, kısa isteğe bağlı neden, export teklifi, “indirimle tut” manipülasyonsuz ve reddedilebilir.

**Kötü ikinci oturum**
Aynı onboarding modal tekrar; checklist sıfırlanmış.

**İyi ikinci oturum**
“Kaldığın yer: taslak fatura” + bir CTA. İlerleme kalıcı.

## FirstClick skor etkileri

- **clarity**: Dönüşte durum dili ve sıradaki iş netliği.
- **adoption**: Uzun vadeli kullanım; aktivasyon sonrası düşüş adoption gerekçesine yazılır.
- **onboardingRisk**: Doğrudan retention skoru değil ama zayıf onboarding retention’ı öldürür — nedensellik zincirini ayırarak yaz.
- Trust: dark pattern ve veri kilidi. Friction: stale UI, spam.
- Hafta-1 odaklı okuma için [kb:15-week-one-retention] ile çapraz.

## Eylem kontrol listesi

1. Ürünün doğal tekrar ritmini corpus’tan çıkar (günlük/haftalık/olaya bağlı).
2. İkinci oturumda neyin değiştiğini / sıradaki işi ara.
3. Geri çağırma kanallarının tonunu ve sıklık ipuçlarını not et.
4. İptal/export akışını değerlendir (görünüyorsa).
5. Aktivasyon olmuş kullanıcı için “sonraki döngü” var mı bak.
6. Bildirimlerin değere mi satışa mı bağlı olduğunu ayır.
7. Vaaddeki “her gün / ekip merkezi” iddiasını kullanım döngüsüyle karşılaştır.
8. Öneri: tetikleyiciyi kişiselleştir, spam’i kes, ikinci oturum CTA’sı — uydurma retention %’si yok.

## Atıf disiplini

- Ürün döngüsü ve mesajlar: [doc:…] / [web:…].
- Retention standardı: [kb:63-retention]; hafta-1 [kb:15-week-one-retention].
- Bildirimler: [kb:35-notifications].
- “Benchmark retention %X” uydurma; sektör oranı uydurma.
- Dark pattern iddiasını gözlenen UI ile bağla.

## Derin uygulama: retention vs engagement tiyatrosu

Rozet, leaderboard ve yapay streak bazı tüketici uygulamalarında alışkanlık yaratır; B2B iş aracında çoğu zaman gürültüdür. FirstClick, gamification’ı otomatik iyi saymaz. Soru: ödül, kullanıcının iş sonucuna mı yoksa uygulamanın açılmasına mı bağlı? İş sonucuna bağlıysa retention gerekçesi güçlenir.

Churn anketini okurken: zorunlu uzun anket friction’dır; isteğe bağlı kısa neden trust’a zarar vermeden öğrenme sağlar. “Kalın, size %40 verelim” her persona için manipülasyon değildir ama skeptical’da riskli — nasıl sunulduğunu yaz.

Veri birikimi yapışkanlık yaratır (tarihçe, şablonlar, takım grafı). Ama yapışkanlık fidye olmamalı: export yoksa skeptical “lock-in” der. Analist lock-in’i retention başarısı diye kutlamaz; trust notu düşer.

Sessizlik dönemleri: eğitim ürününde dönem tatili, B2B’de bütçe döngüsü. Corpus’ta sezonluluk yoksa uydurma. “Kullanıcı dönmedi = kötü ürün” tek başına zayıf gerekçe; aktivasyon kalitesi ve tetikleyici yokluğunu önce ele.

## Analist uygulama notu

Retention chunk: döngü tipi, ikinci oturum CTA’sı, geri çağırma kalitesi, dark pattern var/yok, persona, adoption/trust. Örnek: “skeptical, iptal gizli + export yok → trust↓; busy-professional spam özeti → adoption↓.”


## Senaryo laboratuvarı: geri dönüş

**A:** İkinci gün aynı empty. Dönüş gerekçesi yok. adoption↓.

**B:** Spam “özledik” + indirim. Skeptical trust↓.

**C:** İptal gizli. Dark pattern. trust↓.

**D:** Export yok. Lock-in. skeptical.

**E:** Mobilde günlük onay kırık. Busy-professional churn riski.

## Operasyonel kontrol
Doğal ritim, ikinci oturum CTA, geri çağırma tonu, iptal/export, aktivasyon sonrası döngü, bildirim değeri vs satış, gamification işe bağlılığı.


## Karar çerçevesi: neden yarın açsın?

Retention analizi tek soruya indirgenebilir: yarın açmak için ürün içi gerekçe nedir? Gerekçe iş kuyruğu (onaylar), zamanlı üretim (haftalık fatura), sosyal grafik (ekip), biriken varlık (tarihçe/şablon), veya dış ritme bağlı hatırlatma olabilir. Gerekçe yalnızca push ise zayıftır.

İkinci oturum tasarımı onboarding’in devamıdır. Kullanıcı kaldığı yeri görmüyorsa progress kaybı friction’dır. Checklist’in sıfırlanması veya turunun tekrar zorunlu olması anti-pattern’dir.

Dark pattern’ler kısa tutma, uzun güven kaybı üretir. Gizli iptal, zorla telefon, sahte “hesabın siliniyor” korkusu skeptical ve price-sensitive’da trust↓. FirstClick bunları retention başarısı saymaz.

Bildirim kalitesi: “3 iş bekliyor” değerli olabilir; “seni özledik %50” satışdır. Corpus’ta bildirim metni yoksa uydurma kampanya yazma. UI’da bildirim merkezi varsa tonunu oradan oku ([kb:35-notifications]).

Gamification’ı iş sonucuna bağla. Giriş streak’i B2B’de genelde gürültü; tamamlanan iş streak’i daha anlamlı olabilir — yine ürün bağlamına göre. Otomatik övme yok.


## Birleşik okuma: retention × bildirim × hafta-1

Hafta-1 deneyimi ayrı bir kısa notta toplanmıştır ([kb:15-week-one-retention]); bu dosya genel döngü ve trust çerçevesidir. Bildirim spam’i retention’ı ertelemeli terk eder ([kb:35-notifications]). Analist “daha çok bildirim” önermez; “daha gerekçeli tetikleyici” önerir.

Aktivasyon kalitesi retention’ın tavanını belirler. Zayıf aha ile güçlü streak sistemi boştur. Tersine güçlü aha sonrası stale ikinci oturum tavanı düşürür. Zinciri açık yaz.

İptal ve export trust testidir. Lock-in’i yapışkanlık diye kutlama. Skeptical persona bu noktada ürünü “tuzak” diye kodlar; skor trust↓ adoption uzun vadede zarar görür.


## Analist sözlüğü: ikinci oturum testi

Hayali ikinci oturum script’i: Kullanıcı 48 saat sonra döner. Ne görür? (a) kaldığı yer, (b) yeni bekleyen iş, (c) aynı empty, (d) zorunlu tur tekrarı, (e) satış modalı. a/b olumlu; c/d/e olumsuz sınıflar. Corpus etkileşimli değilse screenshot ve metinlerden hangi sınıfın olası olduğunu çıkar; kesin “48 saat sonra X olur” iddiası atma. Geri çağırma metni varsa sınıf e ile karşılaştır. Dark pattern iptal ayrı trust bulgusudur; retention başarısı diye yazılmaz.


## Kapanış notu (RAG)

Bu bölüm bağımsız chunk olarak da anlamlıdır: FirstClick analisti konuyu ürün corpus alıntısıyla birleştirir, heuristic’i istatistik gibi sunmaz, persona tepkisini somut UI metnine bağlar, skor gerekçesinde clarity / adoption / onboardingRisk / trust ayrımını korur ve uydurma özellik önermez. Eksik kanıtta “corpus’ta görmedim” der.
 Retention chunk’ında ikinci oturum gerekçesi ve dark pattern ayrımı net olmalıdır.


## Eylem tarifleri (retention)

**Tarif 1 — Yarın gerekçesi:** “Yarın açmak için ürün içi gerekçe nedir?” sorusuna corpus’tan cevap ara: iş kuyruğu, zamanlı üretim, sosyal grafik, biriken varlık. Gerekçe yalnızca push ise zayıf retention tasarımı yaz.

**Tarif 2 — İkinci oturum CTA:** Dönüşte “kaldığın yer” + tek CTA. Checklist sıfırlanması veya zorunlu tur tekrarı anti-pattern’dir; onboardingRisk ile karıştırma — nedensellik zincirini ayır.

**Tarif 3 — Geri çağırma kalitesi:** “3 onay bekliyor” değerli olabilir; “özledik %50” satışdır. Corpus’ta mail/bildirim yoksa kampanya uydurma. UI bildirim merkezinden ton oku ([kb:35-notifications]).

**Tarif 4 — İptal ve export:** Gizli iptal, zorla telefon, sahte silinme korkusu = dark pattern → trust↓; retention başarısı sayma. Export yoksa skeptical lock-in notu.

**Tarif 5 — Aktivasyon sonrası döngü:** Aktive olmamış kullanıcıda retention konuşması erken kalır ([kb:62-activation]). Önce aha, sonra tekrar ritmi.

## Kenar durumlar

- **Sezonluk sessizlik:** Eğitim/dönem tatili; churn sanma. Corpus’ta sezonluluk yoksa uydurma.
- **Gamification B2B:** Giriş streak’i genelde gürültü; iş sonucuna bağlı ödül daha anlamlı olabilir — bağlama göre yaz.
- **Veri birikimi vs fidye:** Tarihçe yapışkanlık yaratır; export yoksa trust↓.
- **Stale dashboard:** Dönüşte aynı empty/sayılar — “hiçbir şey değişmemiş” hissi.
- **Mobil kırık günlük iş:** Onay kuyruğu mobilde yoksa busy-professional dönmez ([kb:57-mobile-ux]).
- **İndirimle tutma:** “Kalın, size indirim” her persona’da manipülasyon değildir; skeptical’da riskli — sunumu yaz.

## Persona-özel yorum şablonu

“[Persona] için tekrar gerekçesi [iş kuyruğu|yok|yalnız push]; geri çağırma [değerli|satış|spam]; iptal/export [sağlıklı|dark|kilit]; skor [adoption|trust|clarity]; öneri [kişisel tetikleyici|spam kes|ikinci oturum CTA].”

Busy-professional gürültülü bildirimde uninstall riski. Non-technical dönüşte “nereden devam?” ister. Skeptical dark pattern ve abartılı özlem dilinde trust↓. Price-sensitive sürpriz yenileme ücretinde churn. Student sezonluk sessizliği churn diye etiketleme.

## Analist kontrol listesi (geniş)

1. Doğal tekrar ritmini corpus’tan çıkar.
2. İkinci oturumda değişen bilgi / sıradaki iş var mı?
3. Geri çağırma tonu ve sıklık ipuçları.
4. İptal ve export akışı (görünüyorsa).
5. Aktivasyon sonrası “sonraki döngü” tasarımı.
6. Bildirim: değer mi satış mı?
7. Vaad “her gün / ekip merkezi” ↔ gerçek döngü.
8. Gamification iş sonucuna mı uygulama açılmasına mı bağlı?
9. Dark pattern iddiasını UI alıntısıyla bağla.
10. Benchmark retention %’si uydurma; hafta-1 için [kb:15-week-one-retention] çapraz.
