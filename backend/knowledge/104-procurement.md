# Satın alma ve tedarik (procurement): kurumsal kapıdan geçmek

FirstClick analisti procurement yüzeyini değerlendirirken şunu sorar: satın alma ve IT birimleri corpus’taki fatura, sözleşme, güvenlik ve tedarikçi onboarding materyallerinden süreci ilerletecek asgari paketi bulabiliyor mu? Bu doküman, FirstClick bilgi tabanında procurement değerlendirmesinin standart çerçevesidir. [kb:104-procurement]

## Kapsam

Bu dosya şu alanları kapsar: fatura/vergi bilgileri, sözleşme ve sipariş (PO) süreci, güvenlik anketine giden dokümanlar, tedarikçi portalı beklentileri, ödeme koşulları sinyalleri, ve “nasıl satın alınır” sayfası. Kapsam dışı: satış demosu anlatısı (bkz. [kb:100-sales-led-b2b]), güvenlik metin kalitesi (bkz. [kb:103-security-privacy]), migration (bkz. [kb:105-switching-migration]). Procurement “ödeme ve risk kapısı”dır; demo “değer keşfi”dir.

Heuristic: İyi procurement yüzeyi, champion’ın satın alma birimine iletebileceği tek klasörlük cevap üretir. Bu cycle-time iddiası değildir.

## Tanı sinyalleri (diagnostic signals)

1. **Yalnızca kredi kartı**: Kurumsal PO/fatura yok; economic buyer elenir.
2. **Vergi/şirket bilgisi gizli**: Fatura için gerekli alanlar checkout’ta yok veya yalnızca satışta.
3. **Sözleşme karanlığı**: MSA/DPA “istek üzerine” ve ortalama süre yok.
4. **Güvenlik anketi cevapsız**: SIG/CAIQ benzeri paket veya SSS yok (isim uydurma zorunlu değil; “güvenlik soru seti” diye genel yaz).
5. **Tedarikçi kaydı sürprizi**: Satın alma “tedarikçi portalına kaydolun” der; satıcı hazırlıksız.
6. **Fiyat bandı sıfır**: Bütçe onayına gidecek aralık yok.
7. **İptal/yenileme belirsiz**: Otomatik yenileme ve çıkış şartları görünür değil.
8. **Çoklu birim fatura yok**: Holding/şube senaryosu enterprise iddiasında eksik.

Olumlu sinyaller: “Nasıl satın alınır” sayfası, fatura ile ödeme seçeneği, güvenlik paketi indirme, standart sözleşme süresi aralığı (kesin hukuki metin uydurmadan), satın alma e-posta iletişim kanalı, KOBİ self-serve vs enterprise procurement ayrımı.

## Kullanıcı itirazları

- **“PO ile ödeyebilir miyiz?”**
- **“Tedarikçi formunu kim doldurur?”**
- **“DPA / veri işleme sözleşmesi hazır mı?”**
- **“Yenileme ve çıkış nasıl?”**
- **“Bütçe için yaklaşık tutar?”**
- **“Tek yetkili satıcı / yerel fatura var mı?”** (özellikle TR şirketleri)

## Persona tepkileri

- **busy-professional (champion)**: Satın almaya iletilecek PDF ister; her soruda satış çağrısı yorucu.
- **skeptical (procurement/risk)**: Eksik evrak = gecikme veya red; süslü marketing sayfası ikna etmez.
- **price-sensitive**: Kart-only + yıllık peşin kurumsal politikaya aykırı olabilir.
- **non-technical**: “MSA”, “DPA”, “SOC” açılımları kısa açıklanmalı.
- **student**: Genelde kapsam dışı; yanlışlıkla enterprise procurement’a düşerlerse not et.

## İyi ve kötü örnekler

**Kötü — kart duvarı**
Business plan bile yalnızca uluslararası kart. TR faturası yok. Procurement durur.

**İyi — çift yol**
Self-serve kart; “Fatura / PO ile almak için formu doldurun — güvenlik paketi ektedir.”

**Kötü — evrak ping-pong**
Her soru için ayrı e-posta; merkezi paket yok. Süre uzar (süre yüzdesi uydurma).

**İyi — procurement kiti**
Tek zip/sayfa: şirket bilgileri, güvenlik özeti, DPA talep yolu, desteklenen ödeme yöntemleri, yenileme özeti.

**Kötü — gizli otomatik yenileme**
Sözleşme dipnotunda; iptal 90 gün önce yazılı — ürün UI’sında yok.

**İyi — şeffaf yenileme**
Fiyat ve hesap sayfasında yenileme tarihi + iptal yolu özeti; ayrıntı sözleşmede.

## FirstClick skor etkileri

- **trust**: Evrak ve ödeme şeffaflığı enterprise trust gerekçesini etkiler.
- **clarity**: Satın alma yolunun belirsizliği clarity↓.
- **adoption**: Kurumsalda adoption “satın alma sonrası”dır; kapı kapalıysa skor yorumunda “procurement blocker” yaz.
- **onboardingRisk**: Self-serve vaadi + yalnızca enterprise procurement çelişkisi risk↑.
- Timeline: blocker’ı “payment method / legal / security questionnaire” diye sınıflandır.

## Eylem kontrol listesi

1. Ödeme yöntemlerini corpus’tan listele.
2. Fatura/PO/vergi sinyali var mı bak.
3. Güvenlik/DPA erişim yolunu kontrol et.
4. “Nasıl satın alınır” içeriği var mı tara.
5. Yenileme/iptal görünürlüğünü not et.
6. KOBİ vs enterprise yollarını ayır.
7. Persona/rol itirazı yaz.
8. Tek cümle öneri: procurement kiti.

## Derin tanı senaryoları

**Senaryo A — Kart + TR fatura yok.** Yerel şirket politikası kartı reddeder; alternatif kanal yok. Blocker.

**Senaryo B — DPA gecikmesi.** Security onayına DPA şart; “sales’ten isteyin” ve SLA yok. Süre belirsiz — gün sayısı uydurma.

**Senaryo C — Tedarikçi portalı sürprizi.** Satın alma portal kaydı ister; satıcı şablon cevap hazırlamamış. Champion sıkışır.

**Senaryo D — Otomatik yenileme tuzağı.** UI’da iptal yok; sözleşme dipnotunda uzun ihbar. Skeptical.

**Senaryo E — Çok para birimi / vergi sis.** Fiyat USD, fatura beklentisi yerel — belirsizlik notu (kur uydurma).

**Senaryo F — Self-serve tavanı.** Kullanım büyümüş; faturalı hesaba geçiş yolu yok, yalnızca yeni satış döngüsü.

## Procurement kiti içeriği (öneri)

Tek paket önerisi: şirket kimlik bilgileri, ödeme yöntemleri listesi, güvenlik özeti linki, DPA talep kanalı, yenileme/iptal özeti, desteklenen sözleşme dili, iletişim e-postası. Eksik parçaları checklist’te işaretle; paketin tamamını uydurma.

## Champion ile procurement arasındaki köprü

Champion ürünü ister; procurement risk sorar. FirstClick bulgusunda “ürün net, satın alma yüzeyi kör” ayrımını yap. Sales-led dosyası demo kalitesini, bu dosya ödeme/legal kapısını sorar. İkisi de zayıfsa enterprise adoption gerekçesi çift kırılır.

## Analistin sık hataları

1. Kart-only’yi her segmente aynı cezayla yazmak — tüketici uygulamasında normal olabilir.
2. Hukuki sözleşme maddesi icat etmek.
3. Cycle-time yüzdesi uydurmak.
4. Güvenlik içeriğini bu dosyada yeniden yazmak — çapraz referans ver.
5. “Procurement yok” diye PLG ürünü cezalandırmak — segment uyumu kontrol et.

## RAG bağımsız chunk notu

Chunk soruları: PO/fatura var mı; DPA/güvenlik paketi erişilir mi; yenileme şeffaf mı; nasıl satın alınır sayfası var mı? PO, fatura, DPA, yenileme, tedarikçi terimlerini koru.

## Türkiye ve dil notları

TR satın almada e-fatura, vergi kimlik no ve Türkçe sözleşme talepleri sık görülür. Corpus’ta yoksa görünmüyor diye yaz; zorunluluk iddia etme. Yerel ödeme boşluklarını uydurma kesinti oranıyla abartma.

## Ödeme yöntemi matrisi

Satırlar: kart, fatura/PO, havale, mağaza içi. Sütunlar: self-serve, enterprise, dokümante mi. Boşluklar blocker adayıdır.

## Self-serve’den faturalı hesaba

PLG ile başlayan KOBİ büyüyünce faturalı hesap ister. Geçiş yolu yoksa expansion procurement’a çarpar. Red/gecikme sinyalleri: güvenlik paketi yok, fiyat bandı yok, yenileme belirsiz.

## FirstClick rapor paragrafı

“Satın alma kapısı: ödeme [kart/fatura/belirsiz], legal [DPA görünürlüğü], güvenlik paketi [var/yok], yenileme [şeffaf/değil]. Blocker adayları: [liste]. Öneri: procurement kiti. Skor: trust/clarity — procurement; cycle-time uydurma.”

## Champion paket içeriği kontrolü

İletilebilir mi: şirket bilgileri, ödeme seçenekleri, güvenlik özeti, DPA kanalı, yenileme özeti? Bir champion’ın satın almaya mail atacağı tek eklenti oluşuyor mu? Oluşmuyorsa yüzey dağınık demektir.

## Sık görülen corpus çelişkileri

Business plan self-serve kart ister; “kurumsal fatura” yalnızca contact formundadır ve form satış demo’suna düşer. Güvenlik whitepaper’ı form arkasındadır; procurement paketi diye sunulur ama DPA yoktur. Yenileme e-postası “süresiz kolay iptal” der; sözleşme dipnotu uzun ihbar süresi içerir — UI ile legal drift (madde uydurma, pattern yaz). KOBİ fiyatı şeffafken ek seat yalnızca quote ile gelir; expansion tıkanır. Analist blocker’ı ödeme, legal, güvenlik anketi diye sınıflar. Öneri cümlesi: “Nasıl satın alınır sayfasında fatura/PO, güvenlik özeti ve DPA kanalını tek pakette topla.”

## Persona itiraz diyalogları (örnek dil)

economic buyer / champion: “PO ile ödeyebilir miyiz, kim fatura keser?”
security: “DPA ve anket cevaplarını form olmadan alabilir miyim?”
IT: “Yenileme otomatik mi, çıkış ihbarı ne kadar?”
price-sensitive KOBİ: “Kart dışında yol var mı?”
Analist süre ve hukuki madde uydurmaz. Diyalogların hedefi, procurement kitinde hangi cevabın eksik olduğunu bulmaktır. Eksik cevap = blocker adayı.

## Kısa analist özeti

Procurement değerlendirmesi üç kapıya indirgenebilir: ödeme yöntemi uygunluğu, legal/DPA erişimi, güvenlik paketinin form engeli olmadan bulunabilirliği. Üçünden biri kapalıysa kurumsal adoption gerekçesinde blocker yaz. Self-serve KOBİ’de kart yeterli olabilir; enterprise vaadinde fatura yolu beklenir. Yenileme ve iptal şeffaflığı trust ile bağlanır. Rakam uydurma; kapı durumunu alıntıyla kanıtla.

## Rol bazlı yorum (procurement’ta kim ne okur)

Procurement yüzeyi tek persona değil, bir komite tarafından okunur; analist bulguyu role göre ayrıştırır. **Economic buyer** fiyat bandı ve toplam sahip olma maliyetini arar; bant yoksa bütçe onayı başlamaz. **Legal** DPA, veri işleme yeri ve fesih maddesini ister; “istek üzerine” cevabı süreci askıya alır. **IT/security** SSO, veri saklama ve erişim kontrolü sorar; bunlar security dosyasına delege edilir ama procurement kiti linki içermelidir. **Finance/AP** vergi numarası, e-fatura ve ödeme koşullarını (net 30/60) arar; yalnızca kart, AP iş akışını kırar. **Champion** tüm bunları tek dosyada toplayıp iletmek ister. Analist bir bulguda hangi rolün tıkandığını adıyla yazar: “finance için e-fatura sinyali yok” gibi.

## Aksiyon reçetesi: procurement hazırlık taraması

1. Corpus’ta “pricing”, “contact sales”, “security”, “legal”, “billing” yüzeylerini topla.
2. Her rol sorusunu (fiyat bandı, DPA, e-fatura, ödeme koşulu) karşı bir kaynağa eşle; eşleşmeyeni “boşluk” işaretle.
3. Self-serve tavanı ile enterprise procurement arasında köprü var mı bak (faturalı hesaba geçiş yolu).
4. Bulguyu blocker türüne göre sınıfla: payment / legal / security / tax-invoice.
5. Öneriyi tek cümlelik procurement kiti eksik-parça listesine indir.

## Kenar durumlar

- **PLG tüketici ürünü**: Kart-only normaldir; procurement eksikliğini blocker sayma, segment notu düş.
- **Kamu/regüle sektör**: İhale ve yerli tedarikçi kaydı beklenir; genel “satın alma” sayfası yetmeyebilir — corpus’ta ipucu varsa işaretle.
- **Yeniden satıcı (reseller) yolu**: Doğrudan satış yoksa kanal ortağı bilgisi aranır; yokluğu enterprise iddiasıyla çelişir.
- **Freemium → fatura sıçraması**: Ücretsizden kurumsal faturaya doğrudan geçiş yolu yoksa champion yeni satış döngüsüne mahkûm; bunu adoption yorumuna bağla.

## Atıf disiplini

- Ödeme ve sözleşme metinleri: [doc:…] / [web:…].
- [kb:104-procurement]; sales-led: [kb:100-sales-led-b2b]; security: [kb:103-security-privacy].
- Yasal süre/ceza maddesi uydurma.

## Analist uygulama notu

Şablon: “[Rol] satın alma kapısında; ‘[alıntı]’ görüyor / göremiyor; [kart-only|DPA yok|fiyat bandı yok] nedeniyle [blocker]. Öneri: [procurement kiti]. Skor: trust/clarity gerekçesi procurement.” RAG’de PO, fatura, DPA, yenileme, tedarikçi kelimelerini tut.
