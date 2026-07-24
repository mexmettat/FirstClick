# Satış odaklı B2B: alıcı komitesi ve demo yolu

FirstClick analisti sales-led B2B’yi değerlendirirken şunu sorar: kurumsal alıcı corpus’taki demo, ROI, güvenlik ve satın alma materyallerinden “kim karar verir, ne kanıt gerekir, süreç ne kadar sürer?” sorularına hazırlık bulabiliyor mu? Bu doküman, FirstClick bilgi tabanında sales-led B2B değerlendirmesinin standart çerçevesidir. [kb:100-sales-led-b2b]

## Kapsam

Bu dosya şu alanları kapsar: demo / POC yolu, alıcı rolleri (champion, economic buyer, security, IT), ROI ve iş gerekçesi dili, güvenlik anketine giden yüzeyler, sözleşme ve SLA sinyalleri, ve sales-led ile PLG hibritinin dürüst konumlandırılması. Kapsam dışı: ürün odaklı self-serve büyüme (bkz. [kb:99-product-led-growth]), tedarik/procurement derinliği (bkz. [kb:104-procurement]), güvenlik metinleri (bkz. [kb:103-security-privacy]). Sales-led “insanlı satış döngüsü birincil yol” demektir; bu kötü değildir — vaad self-serve iken uygulama sales-only ise çelişki vardır.

Heuristic: İyi sales-led yüzey, komitenin her rolüne en az bir kanıt kapısı sunar (demo, güvenlik sayfası, fiyat bandı veya “nasıl satın alınır”). Bu win-rate iddiası değildir.

## Tanı sinyalleri (diagnostic signals)

1. **Tek CTA labirenti**: Yalnızca “Demo al” — kimler için, ne kadar sürer, hazırlık nedir yazılmamış.
2. **ROI boşluğu**: “Verimliliği artırın” genel iddia; ölçülebilir iş sonucu veya örnek senaryo yok (uydurma yüzde ekleme).
3. **Güvenlik körü**: Enterprise iddiası var; güvenlik / KVKK / SSO sayfası yok veya “istek üzerine PDF”.
4. **Champion yalnız bırakılmış**: Ürün kullanıcıya hitap ediyor, yöneticinin ileteceği tek sayfalık gerekçe yok.
5. **POC belirsizliği**: “Ücretsiz deneme” enterprise’da ne anlama geliyor — sandbox, süre, başarı kriteri yok.
6. **Fiyat karanlığı aşırı**: Band bile yok; procurement erken elenir (bkz. [kb:104-procurement]).
7. **IT engeli yok sayılmış**: SSO, SCIM, audit log vaadi landing’de yok ama satışta zorunlu çıkıyor — sürpriz.
8. **Self-serve yalanı**: “Hemen başla” aslında form + 3 iş günü dönüş.

Olumlu sinyaller: rol bazlı sayfalar veya FAQ (“IT için”, “Güvenlik için”), demo gündemi şeffaflığı, örnek kullanım senaryoları, güvenlik merkezi linki, isteğe bağlı self-serve deneme + satış yolu ayrımı, vaka çalışması (bkz. [kb:102-case-studies]).

## Kullanıcı itirazları

- **“Komiteme ne göstereceğim?”** Champion itirazı.
- **“Güvenlik ekibi bunu geçer mi?”** Security reviewer.
- **“Bütçe bandı nedir?”** Economic buyer.
- **“POC başarı kriteri ne?”** IT / ops.
- **“Entegrasyon ne kadar sürer?”** Switching (bkz. [kb:105-switching-migration]).
- **“Satıcı bağımlılığı mı?”** Skeptical kurumsal alıcı.

## Persona tepkileri

- **busy-professional (champion)**: Kısa demo, kayıtlı replay, tek sayfa iç gerekçe ister. Uzun form sürtünme.
- **non-technical**: Satış jargonu (“qualified opportunity”) UI’da görünmemeli; iş dili gerekir.
- **skeptical**: Referans müşteri, güvenlik kanıtı, SLA olmadan demo bile vermek istemeyebilir.
- **price-sensitive (KOBİ maskeli B2B)**: Sales-only + belirsiz fiyat = erken çıkış; hibrit self-serve ister.
- **student / first-timer**: Bu modelin birincil alıcısı değil; yanlış segment vaadi varsa not et.

Kurumsal ek rolleri FirstClick persona setine ek olarak timeline’da “security reviewer”, “economic buyer” diye nitelendirilebilir; uydurma persona ID’si icat etme, mevcut setle eşle.

## İyi ve kötü örnekler

**Kötü — form kara deliği**
“Demo” → 12 alanlı form → otomatik cevap yok → günlerce sessizlik. Champion soğur.

**İyi — beklenti yönetimi**
“30 dk ürün turu. İsterseniz güvenlik paketimizi önceden indirin. Formdan sonra 1 iş günü içinde slot.”

**Kötü — tek boyutlu pitch**
Yalnızca özellik listesi; IT ve güvenlik soruları “sonra konuşuruz”.

**İyi — komite kiti**
Demo sayfasında: iş senaryosu, güvenlik özeti linki, entegrasyon listesi, örnek sözleşme süresi aralığı (kesin fiyat uydurma).

**Kötü — sahte self-serve**
Enterprise ürün “ücretsiz dene” diyor; kayıt “şirket e-postası + zorunlu görüşme”.

**İyi — dürüst sales-led**
“Kurumsal kurulum satışla başlar. Sandbox POC’yi birlikte planlarız. KOBİ için self-serve planlarımız burada.”

## FirstClick skor etkileri

- **clarity**: Alıcı rolüne göre yol net değilse clarity↓.
- **adoption**: Demo sonrası değere giden POC tanımsızsa adoption gerekçesi zayıflar (kurumsal bağlamda “activation” farklı okunur).
- **onboardingRisk**: Self-serve vaadi + sales gate çelişkisi risk↑.
- **trust**: Güvenlik/ROI boşluğu enterprise iddiasını zayıflatır.
- Timeline: “sales-led uygun” ile “sales-led ama vaad PLG” ayrımını açık yaz.

## Eylem kontrol listesi

1. Birincil CTA’yı ve dönüş beklentisini alıntıla.
2. Güvenlik, SSO, SLA sinyallerini tara.
3. ROI / iş gerekçesi materyali var mı bak (uydurma metrik ekleme).
4. POC tanımı var mı kontrol et.
5. Self-serve ile sales yolunu ayır; çelişkiyi citation’la yaz.
6. Champion vs buyer ihtiyaçlarını persona notuna dök.
7. Procurement ve migration kardeş dosyalarına çapraz referans ver.
8. Tek cümle öneri: komite kiti veya dürüst konumlandırma.

## Derin tanı senaryoları

**Senaryo A — Champion dosyası yok.** Kullanıcı sever; yöneticiye iletecek tek sayfa yok. Döngü uzar.

**Senaryo B — Güvenlik son anda.** POC bitmiş; questionnaire ilk kez gelir. Süre ve trust riski.

**Senaryo C — Tek boyutlu demo.** IT ve iş birimi aynı turda; dil yalnızca özellik listesi.

**Senaryo D — Sahte urgency.** İçerik zayıfken çeyrek baskısı. Skeptical uzaklaşır.

**Senaryo E — SMB’yi enterprise hunisine sokmak.** Küçük ekibe ağır form + zorunlu görüşme.

**Senaryo F — Referans tuzağı.** “Referans müşteri veririz” vaadi; süreçte NDA ve gecikme belirsiz — sözü not et, süre uydurma.

## Komite rol haritası

- Champion: hız ve iç gerekçe özeti.
- Economic buyer: band, sözleşme süresi, senaryo (uydurma ROI yok).
- Security/privacy: trust page, DPA yolu — [kb:103-security-privacy], [kb:104-procurement].
- IT/ops: SSO, entegrasyon, migration — [kb:105-switching-migration].
Timeline’da rol olarak nitelendir; yeni persona ID icat etme.

## POC başarı çerçevesi

İyi sales-led yüzey POC için şunları konuşur: süre aralığı, başarı kriteri örneği, veri gereksinimi, kimlerin katılacağı, çıkış kriteri. Corpus’ta yoksa “POC tanımsız” bulgusu yaz — bu, ürünün satılamayacağı anlamına gelmez; alıcı belirsizlik yaşar. FirstClick adoption gerekçesini kurumsalda “POC sonrası değere geçiş belirsiz” diye bağlayabilir.

## Analistin sık hataları

1. Sales-led’i otomatik düşük skor saymak.
2. Fiyatın tamamen gizli olmasını her zaman hata saymak — band veya satın alma yolu yokluğu asıl sorundur.
3. Case study yok diye trust sıfırlamak.
4. Win-rate veya ortalama cycle yüzdesi uydurmak.
5. PLG jargonunu enterprise sayfasına zorla yapıştırmak.

## RAG bağımsız chunk notu

Chunk soruları: demo beklentisi net mi; komite kanıt kapıları var mı; self-serve vaadi çelişiyor mu; POC tanımlı mı? Demo, POC, champion, SSO, komite terimlerini koru.

## Türkiye ve dil notları

TR kurumsal alımda fatura, imza ve veri yeri soruları sık görülür. Analist süreci uydurmaz; corpus’ta TR fatura, KVKK ve destek kanalları var mı bakar. “Demo” bazen tur, bazen keşif toplantısıdır — süre ve gündem yoksa belirsizlik yaz. İngilizce-only enterprise sayfa iletme maliyetini artırır.

## İç gerekçe iskeleti

Sorun cümlesi, etkilenenler, pilot kapsamı, gerekli roller, riskler, istenen karar. Rakam yoksa nitel bırak; verim yüzdesi uydurma.

## Demo sonrası ve teklif geçişi

Demo sonrası sonraki adım belirsizse kurumsal adoption gerekçesi zayıflar. Teklif sonrası soru-cevap kanalı ve imza belirsizliği procurement’a kötü devirdir.

## FirstClick rapor paragrafı

“Ürün sales-led yüzeyde [alıntı CTA]. Komite için [güvenlik/ROI/POC] kapılarından [hangileri eksik]. Champion persona/rolü [itiraz]. Öneri: [komite kiti veya dürüst konumlandırma]. Skor: clarity/trust — B2B satış yüzeyi; win-rate uydurma.” Kurumsalda adoption’ı “aktivasyon yok” diye tüketici gibi yargılama; POC tanımsızlığını yaz.

## Keşif soruları (analist kendine)

Demo süresi söylenmiş mi? Güvenlik paketi form olmadan indirilebiliyor mu? Fiyat bandı veya satın alma yolu var mı? Self-serve kelimesi çelişiyor mu? Referans vaka segmentle uyumlu mu? Bu sorular checklist ile örtüşür; raporda soru değil bulgu cümlesi kullan.

## Atıf disiplini

- Satış sayfası metinleri: [doc:…] / [web:…].
- [kb:100-sales-led-b2b]; PLG: [kb:99-product-led-growth]; procurement: [kb:104-procurement]; security: [kb:103-security-privacy]; case study: [kb:102-case-studies].
- “Enterprise dönüşüm oranımız %X” uydurma.

## Analist uygulama notu

Şablon: “[Rol/Persona] ‘[alıntı CTA]’ ile sales-led yolda; [güvenlik boşluğu|ROI yok|form kara deliği] nedeniyle [friction|trust↓]. Öneri: [komite kiti / dürüst POC]. Skor: clarity↓ / trust↓ gerekçesi B2B satış yüzeyi.” RAG’de demo, POC, champion, economic buyer, SSO kelimelerini taşı.
