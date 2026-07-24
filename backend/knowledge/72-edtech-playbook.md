# Edtech sektör playbooku

Bu dosya FirstClick analizinde sektör paketi **edtech** seçildiğinde ağırlık kazanır. Her bölüm bağımsız RAG parçası olarak retrieval edilebilir. Uydurma istatistik ve kesin regülasyon hükmü yazılmaz.

## Kapsam ve iş modeli bağlamı (edtech)

Edtech; B2C kurs, B2B kurumsal öğrenme, dil, sınav hazırlık, tutoring veya LMS olabilir. Gelir abonelik, kurs satış, seat lisansı veya marketplace komisyonundan gelebilir. FirstClick edtech analizinde öğrenme çıktısı vaadi ile ilk oturum deneyimi hizalanmalıdır. 'İş garantisi / puan garantisi' gibi iddialar kanıtsızsa skeptical distrust üretir — istihdam oranı uydurma. Çocuklara yönelik üründe ebeveyn hesabı ve KVKK sinyali aranır; hukuki hüküm yok.

Bu playbook FirstClick sektör paketinde seçildiğinde genel SaaS kurallarını özelleştirir. Analist sayısal sektör kıyasları uydurmaz; ürün corpus kanıtına dayanır. Heuristikler açıkça işaretlenir ve skor gerekçesi alıntılı yazılır.

## İlk izlenim soruları (edtech)

Ne öğretiliyor ve kime? Seviye yerleştirme var mı? İlk ders ne kadar sürede başlıyor? İlerleme nasıl görünüyor? Eğitmen canlı mı kayıt mı? Sertifika ne anlama geliyor? Fiyat dönemsel mi? Busy-professional kısa seans ister; student fiyat ve sosyal kanıt; skeptical iş garantisi; non-technical jargonsuz müfredat ister.

İlk 10 saniyede kategori ve sonuç cümlesi kurulamazsa clarityScore baskılanır. CTA hiyerarşisi tek birincil eylem taşımalıdır. Sosyal kanıt varsa spesifik olsun; jenerik logo duvarı zayıf kalabilir.

## Onboarding ve aktivasyon (edtech)

Aktivasyon: ilk ders tamamlama, ilk quiz, ilk ödev teslimi, ilk canlı derse katılım, ilk öğrenme yolu seçimi. Uzun yerleştirme testi aha geciktirir; skip veya kısa diagnostic heuristic'tir. Boş dashboard 'kurs yok' yerine önerilen yol sunmalı. Kurumsal edtech'te yönetici provision vs öğrenici self-serve ayrılmalı.

Aktivasyon olayını ürün dilinde adlandır. Empty state sonraki adımı göstermiyorsa onboardingRisk yükselir. Zorunlu entegrasyon/form zincirini timeline'da ayrı olaylar yap. Skip veya progressive disclosure varsa olumlu sinyal olarak not et.

## Fiyat, güven ve uyum uyarıları (edtech)

Abonelik, kurs başı, aile planı net olmalı. 'Sınırsız erişim' istisna listesiyle çelişmesin. İade/cayma metni varsa tutarlılık kontrol et. Sertifika ücretli eklenti gizliyse distrust. Çocuk verisi ve ebeveyn onayı şeffaf anlatılmalı.

Kanıtsız yüzde ve garanti iddiaları citation disiplinine aykırıdır. KVKK/gizlilik linki ile UI izin/amaç metni çelişiyorsa trust↓. Enterprise vaadinde SSO/audit/rol sinyali ara; yoksa eksik sinyal yaz, yasal kesin hüküm verme.

## Persona tepkileri (edtech)

Student: fiyat+deneme. Busy-professional: mikro öğrenme. Skeptical: abartılı kariyer vaadi. Non-technical: seviye belirsizliği. First-timer: 'başarabilir miyim?' — ilk başarı anı kritik. Teacher/admin: rapor ve sınıf yönetimi.

Persona tepkisinde corpus alıntısı zorunludur. Ürüne uymayan personaları zorlama. ToughQuestions somut ve cevaplanabilir olsun; hakaret veya spekülasyon yok.

## Drop-off zaman çizelgesi örüntüleri (edtech)

Landing belirsiz seviye → uzun placement → paywall ilk ders öncesi → canlı ders teknik sürtünme → hafta-1 sessizlik. Aşamalar: Placement, First lesson, Practice, Paywall.

Oran ve yüzde ekleme. Aşama adı + sürtünme türü (confusion/friction/distrust) yaz. Hafta-1 sessizlik nitel erken sinyal olabilir.

## Corpus'ta aranacak kanıtlar (edtech)

Müfredat, seviye, deneme, sertifika tanımı, eğitmen profili, ilerleme UI, sınıf/admin, çocuk/ebeveyn, iade, KVKK. Çelişki: iş garantisi vs dipnot; 5 dakikada başla vs 40 dk test.

Kanıt yoksa 'bulunamadı' de. Çelişki bulgularında iki alıntıyı yan yana koy. Rakip sitesinden kanıt taşıma.

## FirstClick skor etkileri (edtech)

Clarity: ne öğrendiği. Adoption: ilk ders hızı. OnboardingRisk: uzun test/zorunlu hesap. Trust: garanti dili ve çocuk verisi. Paywall aha öncesi adoption↓.

Skoru tek cümlelik sloganla gerekçelendirme. clarityScore, adoptionScore, onboardingRisk ve trust etkilerini ayır. Vaad-UI çelişkisi birden fazla skoru birlikte etkileyebilir.

## Aksiyon kontrol listesi (edtech)

1) Seviye+çıktı hero. 2) İlk dersi erken aç. 3) Placement kısalt/skip. 4) İlerlemeyi görünür yap. 5) Garanti dilini kanıta bağla veya kaldır. 6) Paywall'u ilk başarı sonrasına al. 7) Sertifika tanımını yaz. 8) Admin/öğrenici yollarını ayır. 9) Çocuk gizliliği. 10) Alıntıla.

Öneriler uygulanabilir ve önceliklendirilebilir olsun. Her öneri bir bulguya bağlansın. 'Daha iyi yapın' genel öğüdü yerine somut UI/metin değişikliği yaz.

## Derin teşhis 1 (edtech)

Öğrenme aha'sı 'hesap oluştu' değildir; ilk doğru cevap, ilk tamamlanan modül veya geri bildirim anıdır. Streak ve gamification abartılı baskıya dönüşürse student persona yorgunluk yaşar — oran uydurma; UI tonunu nitel değerlendir.

Bu derin teşhis bölümü bağımsız retrieval için yazılmıştır; sektör adı ve FirstClick analiz bağlamı bölüm içinde tekrarlanır. Bulgular yine alıntı ister.

## Derin teşhis 2 (edtech)

B2B edtech'te SSO, rapor, atama ve lisans yönetimi aktivasyon parçasıdır. 'Kurumsal akademi' vaadi yalnızca B2C kurs listesiyle çelişir.

İkinci derin teşhis, birinciden farklı bir başarısızlık moduna odaklanır. Aynı genel cümleleri tekrarlamak yerine sektöre özgü sinyalleri kullanır.

## Analist yazım şablonu (edtech)

Format: Gözlem (alıntı) → Persona → Timeline aşaması → Skor etkisi → Öneri. Örnek iskelet: "[UI/metin alıntısı]; [persona] [sürtünme]; [aşama]; [skor]↑/↓; [somut düzeltme]." Uydurma kullanıcı sesi ve uydurma metrik yok.

Kalite kontrol: Her bulgu başka bir analistin corpus'ta doğrulayabileceği kadar somut mu? Değilse yeniden yaz. Sektör playbook kuralını [kb] olarak belirt; ürün alıntısını ayrı tut.



## Ek uzman notu 1

Edtech'te eğitmen kalitesi vaadi profil ve örnek ders olmadan zayıf kalır. İş garantisi dipnotsuzsa distrust.

## Ek uzman notu 2

Kurumsal öğrenmede atama tamamlanma raporu admin aha'sıdır; öğrenici aha'sı farklıdır — ikisini karıştırma.

## Ek uzman notu 3

Sınav hazırlıkta soru bankası güncelliği iddiası tarih/kaynak olmadan zayıf kanıttır.

## Öğrenme tasarımı sinyalleri (edtech)

FirstClick edtech analizinde müfredat vaadi ile ilk ders deneyimi hizalanmalıdır. "Proje tabanlı öğrenme" diyip yalnızca video izleme listesi varsa vaad-UI çelişkisi oluşur. İlerleme çubuğu yüzde gösteriyorsa yüzde neyi ölçüyor — süre mi mastery mi — belirsizse non-technical confusion yazar. Sertifika "tamamlama" mı "yeterlilik" mi ayrımı skeptical için kritiktir; kanıtsız istihdam oranı ekleme.

Canlı ders ürünlerinde no-show ve kayıt (replay) politikası corpus'ta aranır. Yoksa eksik sinyal. Öğretmen paneli vaadi B2C kurs arayüzüyle karışıyorsa clarity düşer. FirstClick öğrenme etkinliği ölçmez; deneyim tutarlılığını ölçer.

## Kurumsal edtech özel yolu (edtech)

Seat lisansı, SSO, atama ve tamamlanma raporları B2B edtech aktivasyonunun parçasıdır. "Akademi kur" vaadi yalnızca katalog listesiyle çelişir. Yönetici onboarding'i öğrenici onboarding'inden ayrı timeline olayı olmalıdır. Price-sensitive KOBİ için minimum seat baskısı itiraz üretir; gizli annual only distrust. Analist L&D ROI yüzdesi uydurmaz.

## Çocuk ve aile edtech uyarıları (edtech)

Çocuk hesabında ebeveyn kapısı, veri minimizasyonu ve reklam sınırları şeffaf anlatılmalıdır. "Güvenli" sloganı tek başına trust kanıtı değildir. FirstClick yasal uygunluk kararı vermez; amaç metni ve kontrol UI'sı arar. Student persona ile child persona karıştırılmamalıdır.

## Seviye yerleştirme ve ilk ders gerilimi (edtech)

Edtech ürünlerinde placement testi ile "hemen öğrenmeye başla" vaadi sık çelişir. FirstClick analisti test uzunluğunu, skip varlığını ve sonucun müfredata nasıl bağlandığını okur. 40 soruluk zorunlu test busy-professional ve student için friction üretir; tamamen skip edilebilir ama sonuçsuz bir test ise netlik sağlamaz. Heuristik: kısa diagnostic (az soru) + hemen ilk mikro ders + isterse derin placement. Aktivasyon "hesap oluştu" değil "ilk ders/quiz tamamlandı" olmalıdır.

Canlı ders modellerinde takvim, saat dilimi, kayıt (replay) ve no-show politikası corpus'ta yoksa eksik sinyal yaz. Kayıt vaadi varken replay UI yoksa çelişki. Öğretmen paneli ile öğrenci paneli aynı IA'da karışıyorsa role confusion oluşur. Kurumsal edtech'te yönetici atama raporu öğrenici aha'sının yerine geçmez; iki aktivasyonu ayır.

## Kanıt, sertifika ve kariyer iddiası (edtech)

"İş garantisi", "puan garantisi" veya "mezunların X'i iş buldu" ifadeleri FirstClick'te yüksek distrust adayıdır; oran corpus'ta yöntemle yoksa işaretle, uydurma. Sertifika "katılım" mı "yeterlilik" mi net olmalıdır. Eğitmen profili vaadi yoksa sosyal kanıt zayıf kalır. Q&A veya ödev geri bildirimi aha'nın parçasıysa empty state'te görünmelidir.

Çocuk/aile ürünlerinde ebeveyn kapısı, veri minimizasyonu ve reklam sınırları şeffaf anlatılmalıdır. "Güvenli" sloganı tek başına kanıt değildir. Analist COPPA/KVKK kesin hükmü vermez; kontrol UI'sı ve amaç metni arar. Fiyatlandırmada aile planı, dönemsel kampanya ve iade dili price-sensitive için kritiktir; paywall ilk ders öncesindeyse adoption↓.

## Edtech skor ve timeline özeti

ClarityScore müfredat çıktısı netliğine, AdoptionScore ilk ders hızına, OnboardingRisk placement/zorunlu hesap uzunluğuna, Trust garanti dili ve çocuk verisi şeffaflığına duyarlıdır. Timeline aşamaları: Placement, First lesson, Practice streak, Live session, Paywall. Her bulgu alıntılı yazılır.
