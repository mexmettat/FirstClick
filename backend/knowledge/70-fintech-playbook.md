# Fintech sektör playbooku

Bu dosya FirstClick analizinde sektör paketi **fintech** seçildiğinde ağırlık kazanır. Her bölüm bağımsız RAG parçası olarak retrieval edilebilir; bölüm kendi içinde sektör adını, teşhis sorularını ve skor etkisini taşır. Uydurma istatistik, dönüşüm oranı veya regülasyon kesin hükmü yazılmaz. Heuristikler açıkça heuristic olarak işaretlenir.

## Kapsam ve iş modeli bağlamı (fintech)

Fintech ürünleri tüketici ödemeleri, cüzdan, havale, kredi/BNPL, yatırım, bütçe, fatura tahsilatı, gider yönetimi veya B2B finansal otomasyonu kapsayabilir. Gelir işlem ücreti, abonelik, faiz/spread veya paket olabilir; FirstClick modeli uydurmaz, corpus'taki ücret dilini okur. İlk izlenim fayda + risk + güven dilidir: abartılı getiri, belirsiz ücret ve zayıf güvenlik açıklaması skeptical için erken drop-off üretir.

Tüketici fintech'te sadelik ve hız; B2B fintech'te yetki, mutabakat, entegrasyon ve audit izi öne çıkar. Analist ödeme/e-para regülasyonu hakkında kesin hüküm vermez; lisans veya iş ortağı iddiası varsa niteliğinin yazılıp yazılmadığına bakar. 'Bank-level security' kanıtsız slogan trust için zayıf sinyaldir.

FirstClick fintech paketinde fee şeffaflığı, KYC sırası, risk dili ve ilk işlem aktivasyonu önceliklidir. Healthtech'ten farkı tıbbi değil finansal iddia riskidir.

## İlk izlenim soruları (fintech)

Hangi finansal iş tek cümlede anlaşılıyor mu? Getiri/tasarruf iddiası abartılı mı? Ücretler ne zaman görünüyor? KYC ne zaman/neden? Güvenlik somut mu? 'Garantili kazanç / risk yok' var mı? Busy-professional ilk işlem süresini; price-sensitive gizli komisyonu; non-technical jargonu; skeptical risk uyarısı eksikliğini arar. İyi hero: '[Rol] için [finansal sonuç] — ücretler şeffaf'. Zayıf: 'Revolutionary money OS'.

## Onboarding ve aktivasyon (fintech)

Aktivasyon: ilk bağlı hesap, ilk ödeme/transfer, ilk fatura, ilk bütçe kaydı, ilk emir. KYC zorunlu olabilir; FirstClick 'kaldır' demez — gerekçe, adım öngörülebilirliği, red mesajı kalitesini değerlendirir. İyi: ilerleme + neden gerekli + B2B sandbox. Kötü: 20 alan + belirsiz inceleme başarısız. Empty state ilk fonlama/işlem CTA taşımalı. Timeline: Signup, KYC, Funding/Connect, First transaction.

## Fiyat, güven ve uyum uyarıları (fintech)

Fee, döviz farkı, istisnalar, gecikme ücreti, limitler görünür olmalı. 'Ücretsiz' istisnalarla çelişiyorsa distrust. Yatırım/kredide risk uyarısı yoksa kırmızı bayrak. KVKK ve hesap bilgisi paylaşımı amaçla sınırlı anlatılmalı. Ortak/lisans logosu ilişki niteliğiyle açıklanmalı. B2B'de hazırlayan/onaylayan ayrımı ve export trust+adoption heuristic'idir.

## Persona tepkileri (fintech)

Skeptical: garantili getiri, saklı fee. Price-sensitive: küçük punto. Busy-professional: uzun KYC + belirsiz SLA. Non-technical: hata kodları. Student: yüksek minimum. First-timer: kayıp korkusu. Economic buyer: toplam maliyet ve denetim. Finansal tavsiye yazma; alıntı kullan.

## Drop-off zaman çizelgesi örüntüleri (fintech)

Heuristic: abartılı landing → aşırı PII signup → belirsiz KYC red → bağlantı hatası → fee sürprizi → limit labirenti. Oran yok. 'Fonlama yok' nitel erken sinyal olabilir.

## Corpus'ta aranacak kanıtlar (fintech)

Kategori, fee, KYC, risk uyarısı, güvenlik, ortak açıklaması, KVKK, limit, hata kopyası, sandbox, roller, export. Çelişki: anında vs manuel; ücretsiz vs gizli fee.

## FirstClick skor etkileri (fintech)

Clarity: sade finansal tarif. Adoption: ilk işlem. OnboardingRisk: KYC/red. Trust: fee+risk+güvenlik. Abartılı getiri trust'ı sert düşürür.

## Aksiyon kontrol listesi (fintech)

1) Tek sonuç hero. 2) Fee erken. 3) KYC şeffaf. 4) Red mesajı eyleme bağla. 5) Garanti dilini kaldır. 6) Güvenliği somutlaştır. 7) İlk işlem CTA. 8) B2B rol/audit. 9) KVKK sade. 10) Alıntılı bulgu.

## Derin teşhis: risk dili (fintech)

'Risk yok / garanti getiri' distrust + toughQuestions üretir; yasadışılık iddia etme. İyi dil: fayda + koşul + risk. BNPL'de plan ve gecikme maliyeti net değilse price-sensitive+skeptical yükselir.

## Derin teşhis: B2B fintech (fintech)

Entegrasyon, onay zinciri, limit, export aktivasyon parçasıdır. 'CFO için' tek kullanıcı UI ile çelişir. SSO/rol enterprise satırında geçiyorsa karşılık ara.

## Analist yazım şablonu (fintech)

Örnek: "Hero '[alıntı]' garantili getiri; skeptical distrust; trust↓; garantiyi kaldır, risk uyarısı ekle."
## Ek senaryo matrisi (fintech)

Senaryo A — tüketici cüzdan: ilk izlenimde fee ve KYC sırası; aktivasyon ilk transfer; trust risk dili. Senaryo B — BNPL/kredi: ödeme planı ve gecikme maliyeti görünürlüğü; abartılı 'faizsiz' iddiası dipnotla çelişiyorsa distrust. Senaryo C — B2B tahsilat: rol onayları, mutabakat export, entegrasyon; 'finans ekibi için' vaadi tek kullanıcıyla çelişmesin. Senaryo D — yatırım: risk uyarısı + 'tavsiye değildir' tutarlılığı; garantili getiri kırmızı bayrak. Her senaryoda FirstClick yalnızca corpus sinyallerini kullanır.

## Yanlış pozitif / negatif (fintech)

Yanlış pozitif: KYC'nin varlığını otomatik kötülemek — gerekçeli ve öngörülebilir KYC güven sinyali olabilir. Yanlış negatif: fee sayfası var diye şeffaf saymak — checkout anında ek ücret çıkıyorsa çelişki. Yanlış pozitif: banka logosu = lisans. Analist 'bu ürün yasal değil' demez; şeffaflık boşluğunu yazar.

## Retrieval notları (70)

Bu bölüm FirstClick RAG retrieval için ek bağlam sağlar. Analist sektör paketini seçtiğinde önce iş modeli, sonra ilk izlenim soruları, sonra onboarding/aktivasyon, ardından fiyat-güven-uyum, persona tepkileri, drop-off zaman çizelgesi, corpus kanıt listesi, skor etkileri ve aksiyon listesini sırayla uygular. Her bulgu ürün corpus alıntısına bağlanır; alıntı yoksa 'sinyal bulunamadı' yazılır. Skor gerekçesinde clarityScore, adoptionScore, onboardingRisk ve trust etkileri ayrı cümlelerle belirtilir. Timeline olaylarında aşama adı ve sürtünme türü (confusion, friction, distrust) yer alır. Persona tepkisinde busy-professional, skeptical, price-sensitive, non-technical, student ve first-timer ayrımı yapılır; ürüne uymayan persona zorlanmaz. Kanıtsız yüzde, 'sektör ortalaması' ve kesin yasal hüküm yasaktır. Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor?

## Ek uzman notu 1

Fintech hata mesajlarında para durumu belirsizliği (çekildi mi?) yüksek anxiety üretir. 'İşlem durumunda / destek' netliği adoption ve trust etkiler.

## Ek uzman notu 2

Çoklu cihaz oturum yönetimi güvenlik sayfasında anlatılıyorsa UI'da oturum listesi aranır.

## Ek uzman notu 3

BNPL'de gecikme senaryosu örnek takvimle anlatılmalıdır; yalnızca APR jargonu yetmez.
