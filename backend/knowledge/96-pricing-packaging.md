# Fiyat paketleme: plan mimarisi ve seçim netliği

FirstClick analisti fiyat paketlemeyi değerlendirirken şunu sorar: kullanıcı corpus’taki fiyat sayfası, plan kartları ve limit açıklamalarından “ben hangi paketteyim, ne için öderim, bir üst pakete ne zaman geçerim?” sorularına net cevap bulabiliyor mu? Bu doküman, FirstClick bilgi tabanında pricing packaging (fiyat paketleme) değerlendirmesinin standart çerçevesidir. [kb:96-pricing-packaging]

## Kapsam

Bu dosya şu alanları kapsar: plan sayısı ve isimlendirme, özellik–limit matrisi, seat / usage / feature bazlı metrikler, yıllık–aylık sunumu, “önerilen” paket vurgusu, gizli ücret riski, ve landing vaadi ile fiyat sayfası tutarlılığı. Kapsam dışı: ücretsiz deneme ve freemium mekanikleri (bkz. [kb:97-free-trial-freemium]), uygulama içi paywall anı (bkz. [kb:98-paywalls]), B2B satın alma süreci (bkz. [kb:100-sales-led-b2b]). Paketleme “ne satılıyor ve nasıl gruplanmış” sorusudur; deneme “nasıl deneniyor”, paywall “ne zaman engelleniyor” sorusudur.

Heuristic: İyi paketleme, hedef segmentin kendini bir kartta tanımasını ve bir üst paketin farkını tek bakışta görmesini sağlar. Bu bir dönüşüm oranı iddiası değildir; FirstClick timeline’ında confusion, sticker shock ve drop-off okurken kullanılan çalışma hipotezidir.

## Tanı sinyalleri (diagnostic signals)

Corpus’ta şu sinyaller fiyat paketleme sorununa işaret eder:

1. **Plan enflasyonu**: Dörtten fazla eşdeğer ağırlıkta plan kartı; farklar yalnızca “daha fazla X” tekrarlarıyla anlatılmış. Kullanıcı seçim felcine girer.
2. **Özellik çorbası**: Matriste 20+ satır, çoğu “✓ / ✗ / sınırsız” üçlüsü; hangi satırın satın alma kararını değiştirdiği belirsiz. Clarity düşer.
3. **Metrik karışıklığı**: Aynı üründe hem seat hem “kredi” hem “proje limiti” hem “API call” birincil fiyat birimi gibi sunuluyor; hangisinin faturalandığı anlaşılmıyor.
4. **Gizli overage**: Ana fiyatta düşük tutar, dipnotta “aşım ücreti ayrıca uygulanır” veya “ek kullanıcı için iletişime geçin”. Price-sensitive ve skeptical için trust kırığı.
5. **Contact sales tek seçenek**: SMB/KOBİ hedefleyen üründe tüm planlar “Satışa sor”. Self-serve adoption ve firstImpression zayıflar.
6. **Vaad–fiyat drift**: Landing “sınırsız ekip” der; Pro planda 3 seat. Citation’lı çelişki yazılmalı.
7. **İsimlendirme jargonu**: “Growth Engine”, “Scale OS”, “Platform+” gibi isimler içeriği açıklamıyor; non-technical persona “ben hangisiyim?” diyemez.
8. **Yıllık baskı belirsizliği**: “2 ay bedava” ile “%17 indirim” aynı anda, hangi dönemin seçili olduğu net değil; iptal dili yok.

Olumlu sinyaller: üç planlı klasik iskelet (Free/Starter – Pro – Business), ortadaki paketin görsel “önerilen” işareti, limitlerin sayısal ve Türkçe açıklanması, seat ile usage ayrımının tek cümlede netleştirilmesi, yıllık tasarrufun hem yüzde hem ay karşılığıyla yazılması, iptal ve iade koşullarının fiyat kartına yakın durması.

## Kullanıcı itirazları

Paketleme sayfasında sık görülen itirazlar (analist bunları persona diline çevirir, uydurma yüzde eklemez):

- **“Hangisini seçeceğimi bilmiyorum.”** Plan farkı özellik listesi değil, iş sonucu diliyle anlatılmamışsa ortaya çıkar.
- **“Gizli maliyet var mı?”** Seat, overage, setup, zorunlu add-on şüphesi. Skeptical bu itirazı yüksek friction olarak kodlar.
- **“Benim için fazla / eksik.”** Orta paket “herkese göre” şişirilmiş; alt paket işe yaramaz, üst paket kurumsal labirent.
- **“Neden yıllık peşin?”** Nakit akışı hassasiyeti; aylık seçenek gizlenmiş veya utandırılmışsa price-sensitive drop-off.
- **“Satışa sormadan fiyat göremiyorum.”** Self-serve bekleyen alıcıda güven ve zaman maliyeti itirazı.
- **“Ücretsiz plandan yükseltince ne kaybederim / ne kazanırım?”** Upgrade path belirsizse freemium köprüsü kırılır (bkz. [kb:97-free-trial-freemium]).

İtirazı timeline’a yazarken ürün corpus’undaki gerçek plan adı ve limit cümlesini alıntıla; genel “fiyat belirsiz” deme.

## Persona tepkileri

- **busy-professional**: Karar süresini kısaltmak ister. Üç kart + “çoğu ekip Pro seçer” netliği iyidir; 15 satırlık matris zaman kaybıdır. ROI cümlesi (“X işi Y dakikada”) paket altında yoksa adoption gerekçesi zayıflar.
- **non-technical**: “Seat”, “MAU”, “throughput” açıklanmadan bırakılırsa panik. Limitleri günlük dilde ister: “3 kişi”, “ayda 100 belge”, “özel destek yok”.
- **skeptical**: “Sınırsız” iddiası + dipnot çelişkisi güven kırar. Para iade, iptal, sözleşme süresi görünür değilse trial’a bile girmek istemez. Case study fiyat bandıyla eşleşmiyorsa (startup logosu + Enterprise fiyat) şüphe artar.
- **price-sensitive**: İlk bakışta görünen tutar + yıllık zorunluluk + overage üçlüsüne odaklanır. Eğitim / startup indirimi vaadi landing’de var fiyat sayfasında yoksa vaad drift yazar.
- **student / first-timer**: Ücretsiz veya öğrenci planı yoksa “benim için değil” der. Starter’ın neyi kapsadığı örnek senaryoyla anlatılmamışsa seçim yapamaz.

Persona notunda paketleme sorununu yazarken plan kartı metnini olduğu gibi al; “kötü fiyatlandırma” genel yargısı FirstClick için zayıf bulgudur.

## İyi ve kötü örnekler

**Kötü — özellik çorbası**
Beş plan: Free, Plus, Pro, Business, Enterprise. Matriste 28 satır; Pro ile Business arasında tek fark “öncelikli destek” ve “özel başarı yöneticisi”. Busy-professional hangisini seçeceğini bilemez; skeptical “yapay basamak” hisseder.

**İyi — iş sonucu dilinde üç plan**
Starter: “Tek kişi / küçük ekip — fatura ve teklif”. Pro: “Büyüyen ekip — onay akışı ve rapor”. Business: “Birden fazla birim — SSO ve denetim”. Limitler sayısal: 1 / 10 / sınırsız seat (sınırsız varsa neyin sınırlı olduğu ayrıca yazılır). Ortadaki Pro “önerilen”.

**Kötü — gizli metrik**
Kartta “₺X / ay”. Footer’da “kullanım aşımları ayrıca ücretlendirilir” ve “ek bağlayıcı başına ücret”. Ana karar birimi belirsiz; price-sensitive sticker shock yaşar.

**İyi — birincil + ikincil metrik**
“Kişi başı aylık fiyat. Dahil: N proje. Aşım: proje başına ek ücret — tabloda gösterilir.” Self-serve hesap makinesi veya örnek senaryo (“5 kişilik ekip ≈ …”) varsa confusion azalır. Bu bir ölçüm iddiası değil; netlik heuristic’idir.

**Kötü — contact-only SMB**
Ürün KOBİ’ye sesleniyor; fiyat sayfasında tek CTA “Demo rezervasyonu”. Fiyat yok. FirstImpression’da şeffaflık cezası; adoption self-serve yolu olmadığı için düşer.

**İyi — hibrit şeffaflık**
Self-serve planlar fiyatlı; Enterprise “özel” ama minimum başlangıç bandı veya “genelde X’ten başlar” ifadesi var. Satış yolu ayrı, gizleme değil.

**Kötü — isim drift**
Landing “Professional”, checkout “Pro Workspace”, fatura “Plan B”. Skeptical tutarsızlığı “olgun değil” diye okur.

**İyi — tek kanonik isim**
Web, app, fatura ve e-posta aynı plan adını kullanır. Eski ad varsa “eski ad → yeni ad” notu kısa tutulur.

## FirstClick skor etkileri

- **clarity**: Plan farklarının ve limit dilinin anlaşılırlığı. Jargon metrikler ve şişik matris clarity’yi düşürür.
- **adoption**: Kullanıcı “benim paketim bu” diyemiyorsa deneme/ödeme adımına geçiş gerekçesi zayıflar; paketleme sürtünmesi ürün yeteneksizliği gibi okunabilir.
- **onboardingRisk**: İlk değere giden yol ücretli pakete kilitliyse ve ücretsiz katman bunu söylemiyorsa risk yükselir. Fiyat sayfası ile in-app limit çelişkisi yüksek risk pattern’idir.
- **trust / firstImpression**: Gizli ücret, yanıltıcı “sınırsız”, contact-only fiyat — skeptical ve price-sensitive için erken güven kırığı.
- Timeline eşlemesi: Landing net, fiyat sayfası labirent → confusion + friction; “packaging opacity” etiketi önerilir.
- Vaad–fiyat çelişkisi varsa skor yorumunda [web:…] veya [doc:…] alıntısı zorunlu; uydurma fiyat yazma.

Heuristic skor notu: Paketleme tek başına “dönüşümü %X artırır” iddiası taşımaz. Analist gözlenen sinyalleri (plan sayısı, limit netliği, gizli ücret, isim tutarlılığı) nitel olarak skor gerekçesine bağlar.

## Eylem kontrol listesi

1. Corpus’tan plan adlarını, fiyatları ve limit cümlelerini olduğu gibi çıkar; paraphrase etme.
2. Plan sayısını say; dörtten fazla ise birleştirme veya “kim için” dilini güçlendirme öner.
3. Birincil fiyat metriğini tek cümlede yaz (seat / usage / flat); birden fazlaysa hangisinin faturalandığını netleştir.
4. Landing vaadi ile fiyat matrisi drift’ini kontrol et; varsa citation’lı bulgu yaz.
5. Overage, setup, zorunlu add-on dipnotlarını ana karara taşı veya görünür kıl.
6. Persona başına itiraz senaryosu kur (price-sensitive → yıllık baskı; skeptical → sınırsız dipnotu).
7. “Önerilen” paketin gerçekten orta segment iş sonucuna uyduğunu doğrula; yapay upsell ise not et.
8. Öneri metnini tek cümlelik eylem + gerekçe formatında yaz (“Planları üç iş sonucuna indir çünkü…”).

## Türkiye ve dil notları

Fiyat paketleme TR odaklı ürünlerde ek sürtünmeler üretebilir: KDV dahil/hariç belirsizliği, USD listelenip TRY tahsilâtı, “+KDV” ifadesinin yalnızca dipnotta kalması. Analist kur veya vergi oranı uydurmaz; corpus’ta görünen para birimi ve KDV ifadesini alıntılar. Plan adlarının Türkçe–İngilizce karışımı (Starter / Profesyonel / Enterprise) non-technical için ek yük yaratır — tek dil veya parantez içi açıklama öner. “İletişime geçin”in satış mı destek mi olduğu belirsizse clarity düşer.

## Paket matrisi okuma protokolü

1. Kart başlıklarını olduğu gibi çıkar.
2. Her kart için birincil fiyat ve birincil limit cümlesini yaz.
3. Yalnızca karar değiştiren fark satırlarını tut; kalanı gürültü satır diye etiketle.
4. Gizli ücret adaylarını (seat, overage, setup, zorunlu add-on) listele.
5. Persona itirazını tek cümlede bağla.
Bu protokol RAG’de bağımsız uygulanabilir.

## Atıf disiplini

- Ürün plan metni ve fiyatlar: yalnızca [doc:…] veya [web:…] / ekran alıntısı. Corpus’ta yoksa “corpus’ta fiyat kartı görmedim” de.
- Genel paketleme kuralı ve heuristic’ler: [kb:96-pricing-packaging].
- Deneme/freemium köprüsü: [kb:97-free-trial-freemium]; paywall anı: [kb:98-paywalls]; B2B satış: [kb:100-sales-led-b2b].
- Önceki analizde aynı opacity vardıysa: [past:…].
- İstatistik uydurma: “üç plan dönüşümü artırır” diye yüzde yazma. Yerine: “seçim netliği artarsa adoption gerekçesi güçlenir (heuristic).”

## Analist uygulama notu

Paketleme bulgusunu persona tepkisine çevirirken şablon: “[Persona] ‘[alıntılanan plan/limit]’ karşısında [itiraz]; [gizli ücret|metrik karmaşası|plan enflasyonu] nedeniyle [friction|confusion|sticker shock]. Öneri: [kanonik plan mimarisi]. Skor: clarity↓ / adoption↓ / onboardingRisk↑ gerekçesi packaging.” Bu şablon RAG chunk’larında tek başına anlamlı kalacak şekilde her bölümde domain kelimeleri (plan, seat, overage, matris, önerilen paket) taşır.
