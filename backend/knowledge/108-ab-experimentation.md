# A/B ve deneycilik: öğrenmek için ölçmek, uydurmadan

FirstClick analisti deneycilik sinyallerini değerlendirirken şunu sorar: ürün ekibi değişikliği “kazanan varyant” diye sunarken yöntem dürüst mü, yoksa erken durdurulmuş / kirli ölçüm mü — ve kullanıcıya manipülatif deney mi yaşatılıyor? Bu doküman, FirstClick bilgi tabanında A/B experimentation değerlendirmesinin standart çerçevesidir. [kb:108-ab-experimentation]

## Kapsam

Bu dosya şu alanları kapsar: hipotez kalitesi, birincil metrik seçimi, örneklem / süre disiplinine dair heuristic’ler, peş peşe test kirliliği, kişisel deneyim tutarsızlığı (kullanıcı her seferinde farklı UI), ve etik sınırlar (karanlık desen deneyleri). Kapsam dışı: hangi metriklerin ürün sağlığı için anlamlı olduğu (bkz. [kb:109-metrics-evaluation]), bildirim kopyası (bkz. [kb:107-notifications]). FirstClick bir istatistik motoru değildir; analist uydurma p-değer veya “%X uplift” yazmaz.

Heuristic: Sağlam deney, tek birincil metrik + önceden yazılmış hipotez + yeterli süre mantığı taşır. “Button rengi %12 artırdı” gibi kaynaksız iddialar zayıf sinyaldir.

## Tanı sinyalleri (diagnostic signals)

1. **Metrik çorbası**: Onlarca ikincil metrikten biri “kazandı” diye seçilmiş (cherry-pick izlenimi).
2. **Erken durdurma hissi**: Çok kısa sürede kesin zafer dili — analist süre uydurmaz; abartılı kesinlik dilini not eder.
3. **Hipotezsiz UI zıplaması**: Kullanıcı her hafta köklü değişim; öğrenme yok, yorgunluk var.
4. **Kirli atama**: Aynı kullanıcı oturumlar arası varyant değiştiriyor; confusion.
5. **Kuzey yıldızı yok**: Deney “tıklama” kazandırıyor, aktivasyon düşüyor — trade-off konuşulmamış.
6. **Karanlık desen deneyi**: Gizlenmiş iptal, yanıltıcı checkbox — etik sorun (bkz. ayrıca paywall/trust).
7. **Segment körü**: Mobil felaket, masaüstü “kazandı”; global roll-out.
8. **Dokümantasyon yok**: “Test ettik” iddiası, neyin test edildiği corpus’ta yok.

Olumlu sinyaller: değişikliğin gerekçesinin kullanıcı dilinde açıklanması (changelog), tutarlı deneyim, birincil başarı metriğinin aktivasyon/retention ile uyumu, zararlı trade-off’ların açık tartışılması (mümkünse), karanlık desenlerden kaçınma.

## Kullanıcı itirazları

- **“Dün menü buradaydı, bugün yok.”** (stabilite)
- **“Neden benim ekranım arkadaşımınkinden farklı?”**
- **“Bu iptal akışı bilerek zorlaştırıldı mı?”**
- **“‘Daha iyi’ dediğiniz şey benim işimi uzattı.”**

## Persona tepkileri

- **busy-professional**: Stabilite ister; sık layout değişimi zaman maliyeti.
- **non-technical**: A/B jargonunu görmemeli; tutarsız etiketler confusion.
- **skeptical**: Manipülatif varyant trust↓; “optimize edildi” süslü dili yetmez.
- **price-sensitive**: Fiyat deneyi şeffaf değilse öfke (ani fiyat/plan farkı).
- **student / first-timer**: Öğrenme yolu her seferinde değişirse drop-off.

## İyi ve kötü örnekler

**Kötü — vanity win**
CTA rengi testi “tıklama arttı” diye kutlanır; kayıt sonrası aktivasyon konuşulmaz. Analist yüzde uydurmaz; vanity metrik uyarısı yazar.

**İyi — hipotez zinciri**
“Boş durum CTA’sını görev diline çevirirsek ilk proje oluşturma oranı artar” — birincil metrik aktivasyon olayı; ikinciller ayrı.

**Kötü — karanlık deney**
Varyant B’de iptal butonu gizlenir; “retention kazandı” denir. Etik ve trust bulgusu.

**İyi — etik sınır**
Deneyler bilgilendirme ve seçim özgürlüğünü bozmaz; riskli alanlarda (fiyat, gizlilik) daha temkinli.

**Kötü — flicker / flicker-trap**
Sayfa yüklenince A görünür, sonra B’ye zıplar; güven ve usability zedelenir.

**İyi — tutarlı atama**
Kullanıcı deney süresi boyunca aynı varyantta kalır; bitişte tek deneyim.

## FirstClick skor etkileri

- **clarity**: Sık ve açıklamasız UI değişimi clarity↓.
- **trust**: Karanlık desen deneyleri trust↓.
- **adoption**: Vanity metriğe göre bozulan akış adoption↓.
- **onboardingRisk**: Onboarding’de agresif çoklu deney risk↑.
- Timeline: “experiment instability”, “dark pattern test”, “metric mismatch”.

Heuristic: FirstClick raporuna uydurma uplift yazma. “Corpus’ta test sonucu iddiası yok” de.

## Eylem kontrol listesi

1. Sık UI tutarsızlığı veya “test ettik” iddiası var mı tara.
2. Birincil metrik ile kullanıcı değeri hizalı mı nitel sor.
3. Karanlık desen varyantı var mı bak.
4. Segment (mobil/masaüstü) çelişkisi not et.
5. Changelog / gerekçe şeffaflığı kontrol et.
6. Persona itirazı ekle.
7. Metrik dosyasına çapraz referans ver.
8. Tek cümle öneri: hipotez + etik sınır + stabilite.

## Derin tanı senaryoları

**Senaryo A — Onboarding slot makinesi.** Her ziyarette farklı wizard adımı. First-timer öğrenemez; onboardingRisk↑.

**Senaryo B — Fiyat deneyi şoku.** Aynı planda kullanıcılara farklı fiyat; şeffaflık yok. Price-sensitive / skeptical öfke.

**Senaryo C — Click win, value loss.** Daha büyük CTA tıklamayı artırır; yanlış segmente kayıt çoğalır, aktivasyon düşer. Metric mismatch ([kb:109-metrics-evaluation]).

**Senaryo D — Destek körlüğü.** Varyant B hata oranını artırır; deney “kazandı” diye yayında — corpus’ta changelog yok, kullanıcı karışıklığı var.

**Senaryo E — Consent deneyi.** Gizlilik kutusunu zorlaştıran varyant. Etik + trust bulgusu.

**Senaryo F — Flicker.** A/B aracı geç yüklenir; layout zıplar. Clarity ve güven zedelenir.

## FirstClick’in deneycilikte rolü

FirstClick istatistiksel anlamlılık hesaplamaz. Görevi: kullanıcıya yansıyan tutarsızlık, karanlık desen, metrik–değer uyumsuzluğu ve abartılı “kanıtlandı” dilini yakalamak. Raporlara p-değer, güç analizi veya uplift yüzdesi yazma. “Corpus’ta yöntem açıklanmamış” geçerli bulgudur.

## Etik sınır listesi

Temkinli alanlar: fiyat, iptal, gizlilik rızası, sağlık/finans tavsiyesi, çocuklara yönelik ürünler. Bu alanlarda agresif deney veya karanlık varyant trust↓ ve potansiyel zarar — analist zarar yüzdesi uydurmaz, risk dilini kullanır.

## Analistin sık hataları

1. Her UI farkını A/B sanmak — lokalizasyon veya rol bazlı UI olabilir.
2. Deney var diye ürünü cezalandırmak — kötü olan yöntem ve zararlı varyanttır.
3. “Test edin” diye genel önerip hipotez yazmamak.
4. Uydurma benchmark ile kazanani ilan etmek.
5. Stabilite ihtiyacını yok saymak.

## RAG bağımsız chunk notu

Chunk soruları: hipotez ve birincil metrik değerle uyumlu mu; karanlık desen var mı; deneyim stabil mi; abartılı kesinlik dili var mı? Hipotez, birincil metrik, varyant, karanlık desen, stabilite terimlerini koru.

## Türkiye ve dil notları

TR–EN zıplaması deney değil i18n tutarsızlığı olabilir. Fiyat deneylerinde KDV ve para birimi kirlilik yaratır — uplift uydurma. Coğrafi test iddiası corpus’ta yoksa yazma.

## Hipotez şablonu ve çakışma

“Eğer [değişiklik] yapılırsa [persona] için [değer olayı] iyileşir çünkü [gerekçe]. Risk: [trade-off].” Aynı anda çoklu deney collision/instability üretir.

## Changelog şeffaflığı

“Daha iyi deneyim için güncelledik” boş gerekçedir; ne değiştiği bir cümlede söylenmeli. Skeptical boş gerekçeyi manipülasyon gibi okuyabilir.

## FirstClick rapor paragrafı

“Deney/tutarsızlık gözlemi [UI farkı veya iddia]. Birincil metrik değeri [uyumlu/vanity]. Etik risk [yok/karanlık desen]. Stabilite [zayıf/yeterli]. Öneri: [hipotez şablonu + etik sınır]. Skor: clarity/trust — experimentation; p-değer yok.”

## Kullanıcıya görünen tutarsızlık günlüğü

Timeline’da aynı görevin iki farklı yolu, kaybolan menü öğesi, değişen fiyat kartı. Her satıra tarih yoksa bile oturum sırası yaz. Bu günlük istatistik değil; confusion kanıtıdır.

## Sık görülen corpus çelişkileri

Changelog “daha iyi onboarding” der; kullanıcı her girişte farklı adım sırası görür — stabilite yok. “Test ettik, kazandı” blog iddiası vardır; birincil metrik tıklamadır, aktivasyon konuşulmaz. İptal akışı bir varyantta gizlenir; retention artışı diye övülür — karanlık desen. Fiyat kartı A/B’sinde KDV dahil/hariç karışır; kullanıcılar farklı toplam görür. Mobilde kırık varyant global “kazanan” olarak yayındadır. Analist uplift ve p-değer yazmaz; tutarsızlık, vanity win ve etik riski nitel işler. Öneri: hipotez şablonu, değer metriği, etik sınır, tutarlı atama.

## Persona itiraz diyalogları (örnek dil)

busy-professional: “Dün menü buradaydı, bugün niye değişti?”
skeptical: “İptali bilerek mi zorlaştırdınız?”
price-sensitive: “Arkadaşım başka fiyat görüyor, bu adil mi?”
non-technical: “Ekranım neden sürekli zıplıyor?”
student: “Tur her seferinde farklı, öğrenemiyorum.”
Bu diyaloglar stabilite, etik ve fiyat deneyi risklerini yakalar. Analist diyaloga istatistikle cevap vermez; yüzey bulgusu yazar.

## Kısa analist özeti

FirstClick deneycilikte yöntem muhasebesi değil, kullanıcıya yansıyan tutarsızlık ve etik risk denetimi yapar. Vanity tıklama zaferi, karanlık iptal varyantı ve oturumlar arası flicker başlıca bulgulardır. Hipotez birincil değer olayına bağlı olmalıdır. p-değer, güç analizi ve uplift yüzdesi yasaktır. Stabilite ve changelog şeffaflığı skeptical persona için trust gerekçesine girer.

## Persona’ya göre yorum

Deneycilik sinyalleri personaya göre farklı ağırlık taşır. **busy-professional** için asıl maliyet stabilitedir; sık layout değişimi, deney “kazansa” bile onun için kayıp zamandır. **non-technical** A/B jargonunu hiç görmemeli; tutarsız etiketler ve haftadan haftaya değişen adımlar öğrenmeyi kırar. **skeptical** karanlık desen varyantını ve “optimize edildi” süslü dilini manipülasyon olarak okur; yöntem şeffaflığı olmadan ikna olmaz. **price-sensitive** için fiyat deneyi en hassas alandır — aynı planda farklı fiyat gören kullanıcı öfkelenir. **student/first-timer** için öğrenme yolunun her ziyarette değişmesi doğrudan drop-off üretir. Analist aynı deney bulgusunu bu filtrelerle yeniden ağırlıklandırır.

## Puanlama etkisi: örnek okuma

FirstClick uplift yazmaz; bunun yerine deneyin kullanıcıya yansıyan yüzeyini nitel skora bağlar. Örnek: “Onboarding’de üç eşzamanlı varyant + flicker” → clarity↓ (tutarsız ilk deneyim) ve onboardingRisk↑ (ilk değere giden yol kırılgan). Örnek: “İptal butonunu gizleyen varyant retention kazandı deniyor” → trust↓ (karanlık desen) ve etik bulgu. Analist skoru sayıyla değil gerekçeyle yazar: “deney metodu corpus’ta açıklanmamış; ‘kanıtlandı’ dili abartılı → trust gerekçesi zayıflar.” Timeline etiketi somut olmalı: experiment-instability, dark-pattern-test, metric-mismatch, flicker.

## Aksiyon reçetesi ve kenar durumlar

Reçete: (1) sık UI tutarsızlığını veya “test ettik” iddiasını alıntıyla topla; (2) birincil metriğin kullanıcı değeriyle hizasını nitel sorgula; (3) fiyat/iptal/gizlilik gibi hassas alanlarda karanlık varyant ara; (4) segment çelişkisini (mobil kötü, masaüstü iyi) not et; (5) changelog gerekçesinin boş olup olmadığını kontrol et; (6) hipotez şablonunu (değişiklik → değer olayı → gerekçe → risk) öneride kullan. Kenar durumlar: **lokalizasyon/rol bazlı UI** deney değildir, A/B sanıp cezalandırma; **kademeli roll-out** (yavaş yayım) doğal olarak farklı kullanıcıların farklı sürüm görmesine yol açar, bu tek başına instability değildir; **feature flag ile kill-switch** aslında olgunluk sinyalidir, deneyin varlığı değil kötü yöntem ve zararlı varyant cezalandırılır.

## Atıf disiplini

- Ürün iddiaları: [web:…] / [doc:…].
- [kb:108-ab-experimentation]; metrics: [kb:109-metrics-evaluation].
- p-değer, örneklem büyüklüğü, uplift yüzdesi uydurma yasağı katı.

## Analist uygulama notu

Şablon: “[Persona] deney/tutarsızlık ‘[gözlem]’; [vanity metrik|karanlık desen|stabilite yok] nedeniyle [confusion|trust↓]. Öneri: [birincil metrik = aktivasyon + etik sınır]. Skor: clarity/trust gerekçesi experimentation.” RAG’de hipotez, birincil metrik, varyant, karanlık desen, stabilite kelimelerini tut.
