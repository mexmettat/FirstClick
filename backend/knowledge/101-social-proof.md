# Sosyal kanıt: güveni ödünç almak, abartmamak

FirstClick analisti sosyal kanıtı değerlendirirken şunu sorar: corpus’taki logo duvarı, alıntı, puan ve kullanıcı sayısı iddiaları spesifik, doğrulanabilir ve hedef segmentle uyumlu mu — yoksa jenerik süs mü? Bu doküman, FirstClick bilgi tabanında social proof değerlendirmesinin standart çerçevesidir. [kb:101-social-proof]

## Kapsam

Bu dosya şu alanları kapsar: logo strip, müşteri alıntıları, puan/yorum özetleri, “X kullanıcı” iddiaları, basın bahsi, uzman onayı, ve kanıtın yerleştirme bağlamı (hero vs fiyat vs checkout). Kapsam dışı: derin vaka çalışması yapısı (bkz. [kb:102-case-studies]), güvenlik kanıtları (bkz. [kb:103-security-privacy]), etik AI şeffaflığı (bkz. [kb:110-ethical-ai-transparency]). Sosyal kanıt “başkaları güvendi” sinyalidir; case study “nasıl sonuç alındı” anlatısıdır.

Heuristic: Güçlü sosyal kanıt, isim + rol + bağlam taşır ve ürünün vaadiyle aynı segmenttedir. Bu bir dönüşüm çarpanı iddiası değildir; FirstClick trust ve skeptical persona okumalarında kullanılan çalışma hipotezidir.

## Tanı sinyalleri (diagnostic signals)

1. **Anonim övgü**: “Harika ürün!” — isim, şirket, rol yok.
2. **Logo uyumsuzluğu**: Global marka logoları + ürün KOBİ’ye sesleniyor; veya tersi. Skeptical “sahte ortaklık” şüphesi.
3. **Sayı şişirme belirsizliği**: “10.000+ mutlu müşteri” kaynağı ve tanımı yok (hesap mı, e-posta mı?).
4. **Eski kanıt**: Yıllardır güncellenmemiş alıntı; ürün pivot etmiş.
5. **İlgisiz basın**: “As seen in” rastgele blog logoları; konuyla bağ yok.
6. **Sahte UI puanı**: 4.9 yıldız ama mağaza/link yok; veya yalnızca kendi sitede üretilmiş.
7. **Kanıt yok zone**: Fiyat ve güvenlik sayfalarında sıfır kanıt; yalnızca hero’da süs.
8. **Manipülatif kıtlık kanıtı**: “Bugün 50 kişi satın aldı” canlı sayaç şüphesi — doğrulanamazsa trust↓.

Olumlu sinyaller: ad+unvan+şirket, segment eşleşmesi, spesifik sonuç dili (uydurma yüzde olmadan nitel sonuç), doğrulanabilir dış link, logo kullanım izni/gerçek müşteri olduğu ima edilen tutarlılık, checkout yakınında kısa güvence.

## Kullanıcı itirazları

- **“Bunlar gerçek mi?”** Anonim veya logo-only.
- **“Benim ölçeğimdeki biri var mı?”** Enterprise logo / startup alıcı uyumsuzluğu.
- **“Kaç kişi / ne zamandan beri?”** Belirsiz metrik.
- **“Sadece övgü mü, eleştiri de var mı?”** Tek taraflı vitrin.
- **“Sonuç ne olmuş?”** Alıntı duygusal, sonuçsuz — case study’ye ihtiyaç (bkz. [kb:102-case-studies]).

## Persona tepkileri

- **busy-professional**: Tek güçlü, benzer rol alıntısı yeter; uzun logo duvarı kaydırma maliyeti.
- **non-technical**: “NPS 72” yerine “müşteriler şunu söylüyor” düz dili.
- **skeptical**: Doğrulanabilirlik şart. Anonim + şişik sayı = olumsuz sinyal bile olabilir.
- **price-sensitive**: Benzer bütçedeki müşteri hikâyesi; lüks marka logosu ikna etmez.
- **student / first-timer**: Akran kanıtı (öğrenci, indie, küçük ekip) daha inandırıcı.

## İyi ve kötü örnekler

**Kötü — süsleme strip**
Hero altında 8 gri logo, tıklanamaz, metin yok. Ürün corpus’unda müşteri sayfası da yok.

**İyi — bağlamlı kanıt**
“Ayşe K., Operasyon Lideri, 40 kişilik lojistik firması — ‘Sevkiyat listesini tek ekranda birleştirdik.’” İsteğe bağlı vaka linki.

**Kötü — sayı sisi**
“Milyonlarca işlem”. Tanım yok, zaman yok, denetim yok.

**İyi — tanımlı metrik**
“2024’te işlenen fatura sayısı” gibi ürün içi gerçek birime bağlı ifade — corpus’ta varsa alıntıla; yoksa uydurma.

**Kötü — yanlış segment**
Banka logoları + “freelancer’lar için” headline.

**İyi — segment aynası**
Freelancer ürününde freelancer alıntıları; enterprise sayfasında enterprise.

**Kötü — sahte sosyal**
Stock foto + uydurma isim izlenimi; analist isim uydurmaz, şüpheli kalıbı not eder.

**İyi — dış doğrulama**
Mağaza puanı linkli; G2/Trendyol/App Store vb. yalnızca gerçekten varsa.

## FirstClick skor etkileri

- **trust**: Zayıf veya şüpheli kanıt trust↓; güçlü spesifik kanıt trust gerekçesini güçlendirir.
- **clarity**: Kanıt vaadiyle çelişiyorsa (segment drift) clarity↓.
- **adoption**: Dolaylı; kanıt yokluğu tek başına adoption düşürmez ama skeptical drop-off’u hızlandırır.
- **firstImpression**: Hero’da sahte hissettirecek kanıt firstImpression’ı zedeler.
- Timeline: kanıt türünü etiketle (logo / quote / rating / count); “unverified claim” notu kullan.

Heuristic: “Sosyal kanıt +%X conversion” yazma.

## Eylem kontrol listesi

1. Kanıt öğelerini türüne göre envanterle.
2. Her biri için spesifiklik (ad, rol, şirket, sonuç) puanla nitel.
3. Segment uyumunu landing vaadiyle karşılaştır.
4. Sayısal iddiaların tanımını sor; yoksa belirsizlik bulgusu.
5. Fiyat/güvenlik sayfalarında kanıt boşluğu var mı bak.
6. Skeptical persona itirazını yaz.
7. Case study’ye delege edilecek derin kanıtları ayır.
8. Tek cümle öneri: spesifik alıntı veya doğrulanabilir link.

## Derin tanı senaryoları

**Senaryo A — Logo çürümesi.** Eski müşteri logoları; ürün kategorisi değişmiş. Skeptical “eski defter” okur.

**Senaryo B — Puan adası.** 4.9 yıldız yalnızca kendi site widget’ında; dış mağaza linki yok. Unverified rating.

**Senaryo C — Hero aşırı yük.** 12 logo + 3 alıntı + sayaç + basın — firstImpression kalabalık, marka vaadi ezilir.

**Senaryo D — Checkout sessizliği.** Kanıt yalnızca blogda; ödeme anında güvence yok. Price-sensitive tereddüt.

**Senaryo E — Çalışan sahte kanıtı.** Ekip üyelerinin “müşteri” gibi sunulması şüphesi — analist isim uydurmaz; kalıbı “self-dealing riski” diye not eder.

**Senaryo F — Segment tekilliği.** Tüm alıntılar aynı ülkeden/sektörden; ürün global iddia ediyor. Uyumsuzluk yaz.

## Kanıt gücü merdiveni (zayıftan güçluye)

1. Anonim sıfat (“harika!”).
2. Logo strip isimsiz.
3. Ad + rol + şirket.
4. Ad + rol + spesifik nitel sonuç.
5. Aynı + dışarıdan doğrulanabilir link veya vaka çalışması (bkz. [kb:102-case-studies]).
Analist merdivende bulunduğu basamağı timeline’a yazar; “güçlü kanıt”ı yalnızca 4–5 için kullan.

## Yerleştirme bağlamı

Kanıtın yeri mesajı değiştirir. Hero’da segment aynası firstImpression’a yardım eder. Fiyat yanında “benzer ekipler Pro’da” seçim netliği sağlar (istatistik yok). Güvenlik sayfasında logo yetmez; sertifika/process kanıtı gerekir ([kb:103-security-privacy]). Yanlış raftaki kanıt confusion üretir.

## Analistin sık hataları

1. Logo sayısını kalite sanmak.
2. “Sosyal kanıt yok = otomatik düşük trust” — bazı early-stage ürünlerde dürüst az kanıt daha iyidir.
3. Kullanıcı sayısı uydurmak veya yuvarlanmış iddiayı kesinleştirmek.
4. Case study ile quote’u aynı bulguda eritmek.
5. Conversion uplift yüzdesi eklemek.

## RAG bağımsız chunk notu

Chunk soruları: kanıt spesifik mi; segment uyumlu mu; sayı tanımlı mı; doğrulanabilir mi? Logo, alıntı, rating, doğrulanabilirlik terimlerini koru.

## Türkiye ve dil notları

TR odaklı üründe yalnızca global logo duvarı local fit şüphesi doğurur. Sahte görünen stock foto ve jenerik Türkçe övgü skeptical’ı hızlı kırar. Mağaza puanı varsa linkle; yoksa sayı yazma.

## Kanıt temizleme ve gürültü

Zayıf kanıtı şişirmek yerine anonimleri kaldır veya spesifikleştir; uyumsuz logoları çıkar; sayaçları tanımla veya kaldır. Aşırı kanıt kalabalığı firstImpression’ı reklam gibi gösterebilir — “kanıt yok” ile “kanıt gürültüsü”nü ayır.

## Zaman aşımı

Kanıtın tarihi yoksa güncelliği bilinmiyor notu düş. Major pivot sonrası eski alıntıları güçlü kanıt sayma.

## FirstClick rapor paragrafı

“Sosyal kanıt envanteri: [logo/quote/rating/count]. Spesifiklik basamağı [1–5 merdiven]. Segment uyumu [uygun/drift]. [Persona] tepkisi [trust/şüphe]. Öneri: [spesifikleştir veya kaldır]. Skor: trust/firstImpression — social proof kalitesi; uplift yüzdesi yok.”

## Sahte kalıp uyarıları

Stock yüz + jenerik övgü; tıklanamayan logo; kaynağı belirsiz 4.9; “bugün N kişi aldı” canlı sayaç; çalışanların müşteri gibi sunulması. Kalıp görürsen “doğrulanabilir değil” yaz; isim veya sayı icat ederek düzeltme.

## Minimum güçlü set

Bir ürün için çoğu zaman yeterli olan: bir segment-uyumlu alıntı (ad+rol+bağlam) + bir doğrulanabilir dış sinyal (mağaza veya vaka). Onlarca zayıf logodan iyidir.

## Sık görülen corpus çelişkileri

Landing “güvenilir markaların tercihi” derken vaka veya isimli alıntı yoktur; yalnızca soluk logolar vardır. Fiyat sayfasında “10.000+ ekip” yazarken tanım (kayıt mı, ödeme yapan mı) yoktur. Checkout’ta hiç kanıt yokken blogda onlarca övgü vardır — yerleştirme drift’i. Enterprise sayfasında startup alıntıları, freelancer ürününde banka logoları segment drift’idir. Analist çelişkiyi iki alıntıyla yazar; aradaki boşluğu yüzdeyle doldurmaz. Çözüm yönü çoğu zaman “daha fazla kanıt” değil, “daha doğru ve spesifik kanıt”tır.

## Atıf disiplini

- Kanıt metinleri ve logolar: [web:…] / [doc:…]. Uydurma müşteri adı yazma.
- [kb:101-social-proof]; case study: [kb:102-case-studies]; trust genel: mevcut trust bilgisiyle çelişki aranırsa citation.
- İstatistik uydurma yasağı.

## Analist uygulama notu

Şablon: “[Persona] ‘[alıntı kanıt]’ görüyor; [anonim|segment drift|unverified count] nedeniyle [trust↓|şüphe]. Öneri: [ad+rol+bağlam veya kaldır]. Skor: trust↓ gerekçesi social proof kalitesi.” RAG’de logo, alıntı, rating, doğrulanabilirlik kelimelerini tut.
