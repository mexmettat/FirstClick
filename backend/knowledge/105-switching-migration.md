# Geçiş maliyeti ve migrasyon: bırakıp gelmenin sürtünmesi

FirstClick analisti switching/migration’ı değerlendirirken şunu sorar: kullanıcı mevcut araçtan yeni ürüne geçerken corpus’taki import, eşleme, paralel çalışma ve rollback vaatlerinden “ne kadar efor, ne kaybederim, geri dönebilir miyim?” sorularına cevap bulabiliyor mu? Bu doküman, FirstClick bilgi tabanında switching costs & migration değerlendirmesinin standart çerçevesidir. [kb:105-switching-migration]

## Kapsam

Bu dosya şu alanları kapsar: veri içe aktarma, şablon/eşleme sihirbazları, eski araçtan geçiş rehberi, paralel kullanım dönemi, lock-in riskleri (export yok, özel format), ve geçiş sırasında destek sinyalleri. Kapsam dışı: genel onboarding wizard (ayrı onboarding bilgisi), procurement (bkz. [kb:104-procurement]), case study içindeki başarı öyküsü (bkz. [kb:102-case-studies]). Switching “neden zor ayrılırım / nasıl gelirim”dir; aktivasyon “geldikten sonra ilk değer”dir.

Heuristic: Düşük geçiş sürtünmesi, export/import yolu + dürüst efor beklentisi + veri kaybı sınırlarının açık yazılmasıyla okunur. “Tek tıkta taşıyın” iddiası kanıtsızsa skeptical tepki üretir.

## Tanı sinyalleri (diagnostic signals)

1. **Export yok**: Veriyi dışarı alamama — lock-in; trust↓ ve gelecekteki churn korkusu.
2. **Import yok / CSV belirsiz**: “Verilerinizi getirin” vaadi var, araç yok.
3. **Efor yalanı**: “5 dakikada geçiş” — karmaşık eşleme gizli.
4. **Alan eşleme körü**: Zorunlu alanlar başarısız import’ta anlaşılmaz hata.
5. **Paralel dönem yok**: Eski araç kapanmadan yeniye geçilemiyor; cutover korkusu.
6. **Rollback sessiz**: Yanlış migrasyon sonrası geri alma yok.
7. **Tarihsel veri kaybı gizlenmiş**: “Bazı ekler taşınmaz” dipnotta.
8. **Danışman zorunlu**: Self-serve vaadi varken migrasyon yalnızca profesyonel hizmet.

Olumlu sinyaller: desteklenen kaynak listesi, örnek şablon, kuru çalıştırma (dry-run) veya önizleme, yüzde ilerleme, hata raporu, export’un da birinci sınıf özellik olması, geçiş checklist’i.

## Kullanıcı itirazları

- **“Eski verim bozulur mu?”**
- **“Ne kadar sürer / kim yapacak?”**
- **“Geçiş sırasında iş durur mu?”**
- **“Beğenmezsem geri döner miyim?”** (export)
- **“Özel alanlar / geçmiş kayıtlar gelir mi?”**
- **“Ücretli profesyonel hizmet şart mı?”**

## Persona tepkileri

- **busy-professional**: Efor tahmini ve “iş durmaz” yolu ister; açık uçlu “size özel proje” belirsizliği sürtünme.
- **non-technical**: CSV/API jargonu korkutur; sihirbaz + düz dil hata mesajı gerekir.
- **skeptical**: Export yokluğu deal-breaker. “Tek tık” abartısı güven kırar.
- **price-sensitive**: Gizli migrasyon ücreti / zorunlu paket şüphesi.
- **student / first-timer**: Çoğu zaman boş başlar; yine de örnek veri import’u öğrenmeyi hızlandırır.

## İyi ve kötü örnekler

**Kötü — vaad drift**
Landing: “Trello’dan bir tıkla aktar”. Üründe yalnızca genel CSV; kolon eşleme dokümantasyonu yok.

**İyi — dürüst kapsam**
“Desteklenen kaynaklar: A, B. CSV şablonu burada. Ekler ayrıca. Tahmini süre: veri boyutuna göre — önizleme adımı var.”

**Kötü — tek yönlü hapishane**
İçeri alma var, dışarı export yok veya yalnızca destek biletiyle.

**İyi — simetrik taşınabilirlik**
Standart export (CSV/JSON) self-serve; import sihirbazı hataları satır satır gösterir.

**Kötü — sessiz veri kaybı**
Import “başarılı” der; yorumlar ve tarihçe gelmemiş.

**İyi — kayıp envanteri**
Önizlemede “taşınacak / taşınmayacak” listesi; kullanıcı onaylar.

## FirstClick skor etkileri

- **trust**: Lock-in ve abartılı kolaylık iddiası trust↓.
- **adoption**: Geçiş başarısızsa adoption hiç başlamaz; kök neden migration.
- **onboardingRisk**: İlk oturumda zorunlu karmaşık import + belirsiz hata = risk↑.
- **clarity**: Desteklenen kaynak ve sınırlar net değilse clarity↓.
- Timeline: “migration friction”, “lock-in”, “import failure UX” etiketleri.

Heuristic: “Migrasyon iyileşince churn %X düşer” yazma.

## Eylem kontrol listesi

1. Import/export vaadini ve UI’ını karşılaştır; drift citation’la yaz.
2. Desteklenen kaynak listesini alıntıla; yoksa eksiklik.
3. Hata/önizleme deneyimini tara.
4. Profesyonel hizmet zorunluluğunu not et.
5. Lock-in (export yok) bulgusunu trust’a bağla.
6. Persona itirazı ekle.
7. Case study’de geçiş süresi iddiası varsa kaynak kontrolü yap.
8. Tek cümle öneri: dürüst kapsam + önizleme.

## Derin tanı senaryoları

**Senaryo A — CSV umudu.** “İçe aktar” var; şablon yok, hata “invalid row”. Non-technical bırakır.

**Senaryo B — Yarım taşıma.** Kayıtlar gelir, ilişkiler ve ekler gelmez; başarı toast’ı yanıltıcı.

**Senaryo C — Kesintili cutover.** Paralel çalışma yok; tek gecelik geçiş zorunlu. Busy-professional risk almaz.

**Senaryo D — Export fidye.** İptal sonrası export ücretli veya destek biletiyle. Lock-in trust↓.

**Senaryo E — Danışman kapısı.** Landing self-serve; migrasyon yalnızca paket hizmet. Fiyat şeffaflığı yok.

**Senaryo F — Eski araç adı marketing.** Rakip adları vaatte; bağlayıcı kalkmış veya kırık. Vaad drift.

## Geçiş eforu dürüstlük ızgarası

Analist eforu nitel sınıflar: düşük (şablon + önizleme), orta (eşleme + temizleme), yüksek (profesyonel hizmet / yeniden modelleme). Sınıfı süre saati uydurmadan yaz. Kullanıcıya gösterilen sınıf ile gerçek UI uyumsuzsa bulgu güçlenir.

## Lock-in ve etik

Veri taşınabilirliği hem giriş hem çıkış güvenidir. Kolay giriş + zor çıkış skeptical için kırmızı bayrak. FirstClick trust gerekçesinde export yokluğunu açık yaz. Yasal hak iddiası uydurma; ürün yüzeyini değerlendir.

## Analistin sık hataları

1. “Tek tık migrasyon” önermek — kapsam uydurmuş olursun.
2. Her B2B’de sıfır sürtünme beklemek.
3. Empty state onboarding ile migration’ı karıştırmak.
4. Başarı oranı yüzdesi icat etmek.
5. Case study’deki süreyi genel kural sanmak.

## RAG bağımsız chunk notu

Chunk soruları: import/export simetrik mi; önizleme/kayıp envanteri var mı; efor dürüst mü; zorunlu hizmet var mı? Import, export, lock-in, eşleme, dry-run terimlerini koru.

## Türkiye ve dil notları

TR KOBİ verileri sıkça Excel ve e-posta dağınıklığındadır. Rakip adıyla tek tık vaadi segmentle eşleşmeyebilir. Türkçe karakter ve tarih formatı import hatalarında kırılır; İngilizce-only hata mesajı drop-off üretir.

## Cutover iskeleti ve hata kalitesi

Envanter, dry-run, paralel dönem, kesişme, doğrulama, export yedeği. Hata mesajı hangi satır/alan ve nasıl düzeltileceğini söylemeli; “Error 500” duvarı clarity ve onboardingRisk’e bağlanır.

## Destek yolu

Migrasyon yardımı yalnızca satışa bağlanıyorsa self-serve vaad çelişir. Dokümantasyon, örnek dosya ve insan yardımının plan farkı şeffaf olmalı.

## FirstClick rapor paragrafı

“Geçiş yüzeyi: import [var/yok], export [var/yok], önizleme [var/yok], efor dili [dürüst/abartılı]. Lock-in riski [yüksek/düşük]. [Persona] itirazı. Öneri: [dry-run + kayıp envanteri]. Skor: trust/onboardingRisk — migration.”

## İlk oturum migrasyon tuzağı

Bazı ürünler değer göstermeden önce zorunlu import ister. Empty state ile birleşince çift risk oluşur. Alternatif: örnek veri ile aha, sonra import. Bu sıra PLG ve onboardingRisk gerekçesini güçlendirir (yüzde yok).

## Sık görülen corpus çelişkileri

“Trello’dan bir tıkla aktar” vaadi vardır; bağlayıcı menüde yoktur veya “yakında”dır. Import “başarılı” toast’ı gösterir; ilişkili kayıtlar ve ekler gelmemiştir — sessiz kayıp. Export yalnızca ücretli plandadır; iptal sonrası veri fidye hissi oluşur. Migrasyon rehberi İngilizce PDF’tir; sihirbaz Türkçe hata vermez, yalnızca kod basar. Zorunlu profesyonel hizmet fiyatı gizlidir; self-serve onboarding ile çelişir. Analist her çelişkide vaad alıntısı + UI alıntısı ister. Öneri: desteklenen kaynak listesi, dry-run, kayıp envanteri, self-serve export.

## Persona itiraz diyalogları (örnek dil)

busy-professional: “İş durmadan geçebilir miyiz, paralel dönem var mı?”
skeptical: “Beğenmezsem verimi eksiksiz dışarı alabilir miyim?”
non-technical: “CSV’de hata olursa anlaması kolay mı?”
price-sensitive: “Migrasyon için gizli danışman ücreti var mı?”
Karşılık yoksa efor veya lock-in belirsizliği yaz. “Tek tık” vaadi bu diyaloglara cevap vermiyorsa abartı bulgusudur.

## Kısa analist özeti

Migrasyon okuması simetri ister: içeri alma vaadi varsa dışarı export da birinci sınıf olmalıdır. Abartılı kolaylık dili, sessiz veri kaybı ve zorunlu danışman ücreti üç klasik zayıf sinyaldir. Dry-run ve kayıp envanteri olumlu sinyaldir. İlk oturumda zorunlu import, aha’yı geciktirir ve onboardingRisk yükseltir. Süre veya başarı oranı icat etme; desteklenen kaynak listesini alıntıla.

Geçiş bulgusunu yazarken desteklenen kaynak adını, export formatını ve varsa zorunlu hizmet cümlesini corpus’tan aynen alıntıla; yoksa eksik olduğunu açıkça belirt.

## Kanıt/atıf disiplini (migration özelinde)

Geçiş iddiaları özellikle drift’e açıktır çünkü pazarlama yüzeyi (“tek tıkla taşı”) ile ürün UI’ı (genel CSV) farklı yerlerde yaşar. Analist her migration bulgusunu iki kaynağa çapraz bağlamalıdır: vaadin geçtiği yer [web:…] ve gerçek aracın görüldüğü yer [doc:…] veya ürün içi ekran. Kaynaklardan biri yoksa bulgu “doğrulanamayan vaat” diye yumuşatılır, kesin “yalan” denmez. Rakip araç adları (Trello, Asana) vaatte geçiyorsa, o entegrasyonun corpus’ta kanıtı aranır; bağlantı kırık veya sayfa boşsa “vaad drift” alıntıyla yazılır. Süre, başarı oranı ve “X kat hızlı” gibi nicel ifadeler yalnızca corpus’ta açık kaynak varsa aktarılır; yoksa analist nitel efor sınıfına (düşük/orta/yüksek) çevirir.

## Persona’ya göre yorum farkı

Aynı migration boşluğu personaya göre farklı ağırlık taşır. **skeptical** için export yokluğu tek başına deal-breaker’dır ve trust’ı sert kırar. **busy-professional** için asıl mesele “iş durur mu” — paralel çalışma yolu yoksa efor düşük olsa bile riski yüksek okur. **non-technical** için hata mesajının dili belirleyicidir; “invalid row 42” teknik olarak doğru ama pratikte bırakma sebebidir. **price-sensitive** gizli profesyonel hizmet ücretinden şüphelenir. Analist aynı bulguyu farklı persona filtreleriyle yeniden ağırlıklandırır, tek bir evrensel ceza uygulamaz.

## Aksiyon reçetesi ve kenar durumlar

Reçete: (1) import ve export vaadini ayrı ayrı alıntıla; (2) desteklenen kaynak listesini ve şablonu ara; (3) önizleme/dry-run ile “taşınacak/taşınmayacak” envanterini kontrol et; (4) hata deneyimini nitel değerlendir; (5) zorunlu danışmanlık kapısını not et; (6) export’u birinci sınıf özellik mi yoksa destek bileti arkasında mı diye ayır. Kenar durumlar: **greenfield kullanıcı** (taşınacak veri yok) migration’ı önemsemez, empty-state onboarding’e bakılır; **düzenlenmiş veri** (sağlık/finans) taşımada saklama ve silme kuralları devreye girer; **çok büyük hesap** için toplu API/aşamalı taşıma yoksa cutover riski artar.

## Atıf disiplini

- Migrasyon metinleri: [doc:…] / [web:…].
- [kb:105-switching-migration]; procurement: [kb:104-procurement]; case: [kb:102-case-studies].
- Süre/başarı oranı uydurma.

## Analist uygulama notu

Şablon: “[Persona] geçişte ‘[alıntı]’ görüyor; [export yok|esfor yalanı|sessiz kayıp] nedeniyle [trust↓|friction]. Öneri: [önizleme + dürüst kapsam]. Skor: trust↓ / onboardingRisk↑ gerekçesi migration.” RAG’de import, export, lock-in, dry-run, eşleme kelimelerini tut.
