# İK ve işe alım sektör playbooku

Bu dosya FirstClick analizinde sektör paketi **İK / recruiting** seçildiğinde ağırlık kazanır. Her bölüm bağımsız RAG parçası olarak retrieval edilebilir. Uydurma istatistik ve kesin regülasyon hükmü yazılmaz.

## Kapsam ve iş modeli bağlamı (İK / recruiting)

HR/recruiting; iş ilanı, ATS, aday CRM, değerlendirme, bordro bitişik araçlar veya iç iletişim/İK self-servis olabilir. Gelir job slot, seat, kullanım veya başarı ücreti olabilir. FirstClick'te iki persona gerilimi sık görülür: işe alımcı/İK ile aday. Pitch 'aday deneyimi' diyorsa aday akışı; 'İK verimliliği' diyorsa recruiter paneli merkezdedir. Ayrımcılık riski taşıyan filtre dilinde dikkat — hukuki hüküm yok, şeffaflık ve aday iletişimi değerlendirilir.

Bu playbook FirstClick sektör paketinde seçildiğinde genel SaaS kurallarını özelleştirir. Analist sayısal sektör kıyasları uydurmaz; ürün corpus kanıtına dayanır. Heuristikler açıkça işaretlenir ve skor gerekçesi alıntılı yazılır.

## İlk izlenim soruları (İK / recruiting)

Kim için — şirket mi aday mı? Hangi iş sonucu (süre, kalite, uyum)? Kariyer sitesi entegrasyonu? Fiyat slot/seat? KVKK aday verisi? Busy recruiter hız; skeptical aday hayaletleme (ghosting) korkusu; price-sensitive KOBİ slot maliyeti arar.

İlk 10 saniyede kategori ve sonuç cümlesi kurulamazsa clarityScore baskılanır. CTA hiyerarşisi tek birincil eylem taşımalıdır. Sosyal kanıt varsa spesifik olsun; jenerik logo duvarı zayıf kalabilir.

## Onboarding ve aktivasyon (İK / recruiting)

Recruiter aktivasyonu: ilk ilan, ilk pipeline, ilk değerlendirme. Aday: başvuru tamamlama, profil güçlendirme. Zorunlu kariyer sitesi entegrasyonu erken drop-off olabilir. Boş pipeline önerisizse zayıf. Aday tarafında uzun başvuru formu friction.

Aktivasyon olayını ürün dilinde adlandır. Empty state sonraki adımı göstermiyorsa onboardingRisk yükselir. Zorunlu entegrasyon/form zincirini timeline'da ayrı olaylar yap. Skip veya progressive disclosure varsa olumlu sinyal olarak not et.

## Fiyat, güven ve uyum uyarıları (İK / recruiting)

Job slot, öne çıkarma, CV veritabanı erişimi şeffaf olmalı. 'Sınırsız ilan' limit dipnotuyla çelişmesin. Aday verisi saklama ve silme KVKK bağlamında açıklanmalı. Değerlendirme testlerinde ücret/aday maliyeti net olsun.

Kanıtsız yüzde ve garanti iddiaları citation disiplinine aykırıdır. KVKK/gizlilik linki ile UI izin/amaç metni çelişiyorsa trust↓. Enterprise vaadinde SSO/audit/rol sinyali ara; yoksa eksik sinyal yaz, yasal kesin hüküm verme.

## Persona tepkileri (İK / recruiting)

Busy recruiter: yavaş ilan sihirbazı. Skeptical hiring manager: kanıtsız 'AI perfect match'. Price-sensitive KOBİ: gizli slot. Aday first-timer: belirsiz süreç statusü. Non-technical İK: ATS jargonu.

Persona tepkisinde corpus alıntısı zorunludur. Ürüne uymayan personaları zorlama. ToughQuestions somut ve cevaplanabilir olsun; hakaret veya spekülasyon yok.

## Drop-off zaman çizelgesi örüntüleri (İK / recruiting)

Landing belirsiz taraf → uzun şirket formu → ilan yayınlanamama → aday 12 sayfalık başvuru → sessiz status. Aşamalar: Employer setup, Job post, Candidate apply, Pipeline.

Oran ve yüzde ekleme. Aşama adı + sürtünme türü (confusion/friction/distrust) yaz. Hafta-1 sessizlik nitel erken sinyal olabilir.

## Corpus'ta aranacak kanıtlar (İK / recruiting)

Rol CTA, fiyat, ilan formu, pipeline, aday status e-postası, KVKK, AI eşleştirme iddiası, kariyer sayfası, değerlendirme. Çelişki: 2 dakikada ilan vs 30 alan; AI match vs açıklanamaz skor.

Kanıt yoksa 'bulunamadı' de. Çelişki bulgularında iki alıntıyı yan yana koy. Rakip sitesinden kanıt taşıma.

## FirstClick skor etkileri (İK / recruiting)

Clarity: taraf+sonuç. Adoption: ilk ilan/başvuru. OnboardingRisk: ağır kurulum. Trust: aday iletişimi, KVKK, AI açıklanabilirlik.

Skoru tek cümlelik sloganla gerekçelendirme. clarityScore, adoptionScore, onboardingRisk ve trust etkilerini ayır. Vaad-UI çelişkisi birden fazla skoru birlikte etkileyebilir.

## Aksiyon kontrol listesi (İK / recruiting)

1) Taraf netleştir. 2) İlan formunu kısalt. 3) Aday status şeffaflığı. 4) Slot fiyatı göster. 5) KVKK silme yolu. 6) AI iddiasını açıkla veya yumuşat. 7) Boş pipeline CTA. 8) Değerlendirme şeffaflığı. 9) Entegrasyonu ertele. 10) Alıntıla.

Öneriler uygulanabilir ve önceliklendirilebilir olsun. Her öneri bir bulguya bağlansın. 'Daha iyi yapın' genel öğüdü yerine somut UI/metin değişikliği yaz.

## Derin teşhis 1 (İK / recruiting)

AI eşleştirme 'ayrımcılık yapmaz' iddiası kanıtsızsa skeptical toughQuestions. FirstClick model adaleti ölçmez; açıklanabilirlik ve insan kontrolü sinyali arar.

Bu derin teşhis bölümü bağımsız retrieval için yazılmıştır; sektör adı ve FirstClick analiz bağlamı bölüm içinde tekrarlanır. Bulgular yine alıntı ister.

## Derin teşhis 2 (İK / recruiting)

Aday ghosting algısı trust kırar. Otomatik red/iletişim şablonları varsa ton ve netlik değerlendir. Yoksa eksik sinyal — 'adaylar mutsuz' uydurma.

İkinci derin teşhis, birinciden farklı bir başarısızlık moduna odaklanır. Aynı genel cümleleri tekrarlamak yerine sektöre özgü sinyalleri kullanır.

## Analist yazım şablonu (İK / recruiting)

Format: Gözlem (alıntı) → Persona → Timeline aşaması → Skor etkisi → Öneri. Örnek iskelet: "[UI/metin alıntısı]; [persona] [sürtünme]; [aşama]; [skor]↑/↓; [somut düzeltme]." Uydurma kullanıcı sesi ve uydurma metrik yok.

Kalite kontrol: Her bulgu başka bir analistin corpus'ta doğrulayabileceği kadar somut mu? Değilse yeniden yaz. Sektör playbook kuralını [kb] olarak belirt; ürün alıntısını ayrı tut.



## Ek uzman notu 1

İK araçlarında aday status şeffaflığı hem trust hem marka deneyimidir. 'Başvurunuz alındı' sonrası sessizlik UI'da öngörülüyorsa not et.

## Ek uzman notu 2

Değerlendirme testinin süresi ve amacı adaya önceden gösterilmelidir.

## Ek uzman notu 3

Çalışan self-servis İK'da bordro/izin jargonu sadeleşmezse non-technical friction.

## Aday deneyimi zaman çizelgesi (İK / recruiting)

Aday tarafında drop-off genelde uzun başvuru, zorunlu hesap, belirsiz status ve hayaletleme algısından gelir. FirstClick "ghosting oranı" uydurmaz; status e-postası/şablonları ve aday portalı varlığını kontrol eder. "2 dakikada başvur" vaadi 8 sayfalık formla çelişiyorsa adoption ve clarity birlikte etkilenir. Değerlendirme testi süresi önceden gösterilmiyorsa busy aday friction yazar.

## Recruiter pipeline kalitesi (İK / recruiting)

Recruiter aktivasyonu ilk ilan + ilk hareket ettirilen adaydır. Boş pipeline dekoratif kanban ise zayıf empty state. AI eşleştirme skoru açıklanamazsa skeptical hiring manager toughQuestions üretir; FirstClick adil/ayrımcı olduğuna hükmetmez, açıklanabilirlik ve insan override sinyali arar. Kariyer sitesi entegrasyonu zorunluysa alternatif manuel ilan yolu heuristic'tir.

## KVKK ve aday verisi (İK / recruiting)

Aday CV'sinin saklama süresi, silme talebi ve üçüncü tarafla paylaşım dili corpus'ta aranır. Lead satışı iş modelindeyse şeffaflık şarttır; gizlenmişse distrust. Analist hukuki kesin hüküm vermez. Economic buyer için slot fiyatı ve CV veritabanı erişim limiti net olmalıdır.

## İşveren ve aday çift yolculuğu (İK / recruiting)

İK/recruiting ürünlerinde FirstClick tek persona ile yetinmemelidir: recruiter/İK ile aday deneyimi ayrı okunur. Pitch "aday deneyimi mükemmel" diyorsa başvuru formu, status şeffaflığı ve iletişim şablonları aranır. Pitch "İK verimliliği" diyorsa ilan sihirbazı, pipeline ve değerlendirme paneli aranır. İkisi birden vaat edilip biri eksikse clarity+trust gerilimi oluşur.

Aday drop-off heuristic'leri: zorunlu hesap, 8+ sayfa başvuru, belirsiz "başvurunuz alındı" sonrası sessizlik, sürpriz uzun test. Recruiter drop-off: uzun şirket KYC, kariyer sitesi zorunlu entegrasyonu, boş pipeline empty state. FirstClick ghosting oranı uydurmaz; status ve şablon varlığına bakar. AI "perfect match" skoru açıklanamaz ve override yoksa skeptical hiring manager toughQuestions üretir — adil/ayrımcı hükmü verilmez.

## Fiyat, KVKK ve lead modeli (İK / recruiting)

Job slot, öne çıkarma, CV veritabanı ve başarı ücreti şeffaf olmalıdır. "Sınırsız ilan" limit dipnotuyla çelişmesin. Aday verisinin saklama süresi, silme ve üçüncü taraf paylaşımı KVKK bağlamında açıklanmalıdır; lead satışı gizlenmişse distrust. Değerlendirme testinin adaya maliyeti/süresi önceden görünmelidir. Economic buyer için toplam sahip olma maliyeti (slot + seat + add-on) net değilse itiraz artar.

## İK playbook skor özeti

ClarityScore taraf+sonuç netliğine, AdoptionScore ilk ilan/başvuru tamamlamaya, OnboardingRisk ağır kurulum ve uzun forma, Trust aday iletişimi+KVKK+AI açıklanabilirliğine duyarlıdır. Timeline: Employer setup, Job post, Candidate apply, Assessment, Pipeline. Alıntısız bulgu yazma.

## Değerlendirme, mülakat ve işveren markası (İK / recruiting)

Değerlendirme ve mülakat planlama özellikleri corpus'ta varsa adaya süre, amaç ve sonuç iletişimi net mi bak. "Kültürel uyum skoru" gibi belirsiz metrikler skeptical için toughQuestions üretir; FirstClick kültürü ölçmez, açıklanabilirlik ister. İşveren markası sayfası vaadi kariyer sitesi entegrasyonu olmadan zayıf kalabilir. İç İK self-servis (izin, bordro belgesi) recruiting ile aynı üründe ise IA karışmamalı; aksi halde clarity düşer.

Referans kontrolü, teklif yönetimi ve onboarding handoff vaatleri varsa pipeline sonrası empty state'ler aranır. Yoksa eksik fırsat notu — zorunlu özellik iddia etme. Mobil aday başvurusu masaüstü formun küçültülmüş hali ise non-technical friction; thumb ve alan etiketlerini nitel değerlendir.

## ATS entegrasyonu ve iç aday (İK / recruiting)

ATS/CRM birleşik ürünlerde mevcut aday havuzu import edilmeden "yeni sistem" boş görünür; import yoksa onboardingRisk. İç ilan / employee referral vaadi yoksa eksik sinyal. Çok dilli ilan vaadi tek dil formla çelişir. EEO/diversity veri toplama gerekçesi şeffaf olmalıdır — analist yasal uygunluk iddia etmez. Teklif onay zinciri (compensation band) economic buyer için kritik olabilir; yoksa sales-led B2B gerilimi not edilir.

FirstClick İK analizinde toughQuestions örnekleri: "Aday statusünü ne zaman görür?", "AI skorunu nasıl açıklar ve geçersiz kılarım?", "CV verisi ne kadar saklanır?", "Slot bitince ilan ne olur?". Cevaplar corpus'tan gelmeli.
