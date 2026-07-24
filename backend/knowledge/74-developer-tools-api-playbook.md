# Geliştirici araçları ve API sektör playbooku

Bu dosya FirstClick analizinde sektör paketi **developer tools / API** seçildiğinde ağırlık kazanır. Her bölüm bağımsız RAG parçası olarak retrieval edilebilir. Uydurma istatistik ve kesin regülasyon hükmü yazılmaz.

## Kapsam ve iş modeli bağlamı (developer tools / API)

Developer tools ve API ürünlerinde alıcı çoğu zaman geliştiricidir; ekonomik alıcı sonradan gelir. Gelir usage, seat, tier veya support sözleşmesi olabilir. FirstClick'te docs kalitesi, quickstart, API anahtarı edinme süresi ve örnek kod ilk izlenimin parçasıdır. 'Minutes to Hello World' vaadi wizard/docs ile çelişiyorsa adoption düşer. Sales-led enterprise katmanı varsa SSO/SLA sinyali aranır.

Bu playbook FirstClick sektör paketinde seçildiğinde genel SaaS kurallarını özelleştirir. Analist sayısal sektör kıyasları uydurmaz; ürün corpus kanıtına dayanır. Heuristikler açıkça işaretlenir ve skor gerekçesi alıntılı yazılır.

## İlk izlenim soruları (developer tools / API)

Ne işe yarıyor — hangi problemi hangi stack'te? Quickstart görünür mü? Fiyat usage net mi? Rate limit/free tier? Status sayfası? SDK dilleri? Skeptical developer abartılı benchmark; busy-professional uzun form signup; price-sensitive gizli overage arar.

İlk 10 saniyede kategori ve sonuç cümlesi kurulamazsa clarityScore baskılanır. CTA hiyerarşisi tek birincil eylem taşımalıdır. Sosyal kanıt varsa spesifik olsun; jenerik logo duvarı zayıf kalabilir.

## Onboarding ve aktivasyon (developer tools / API)

Aktivasyon: API key, ilk başarılı request, ilk webhook, ilk prod deploy. Zorunlu satış görüşmesi PLG vaadiyle çelişir. Docs'ta kopyalanabilir örnek yoksa friction. Sandbox/test mode güçlü pattern. Empty dashboard yerine 'ilk isteği at' CTA.

Aktivasyon olayını ürün dilinde adlandır. Empty state sonraki adımı göstermiyorsa onboardingRisk yükselir. Zorunlu entegrasyon/form zincirini timeline'da ayrı olaylar yap. Skip veya progressive disclosure varsa olumlu sinyal olarak not et.

## Fiyat, güven ve uyum uyarıları (developer tools / API)

Free tier limitleri, overage, log retention, seat+usage karmaşıklığı şeffaf olmalı. 'Predictable pricing' gizli çarpanlarla çelişmesin. Enterprise 'contact us' yanında self-serve yolu yoksa PLG gerilimi.

Kanıtsız yüzde ve garanti iddiaları citation disiplinine aykırıdır. KVKK/gizlilik linki ile UI izin/amaç metni çelişiyorsa trust↓. Enterprise vaadinde SSO/audit/rol sinyali ara; yoksa eksik sinyal yaz, yasal kesin hüküm verme.

## Persona tepkileri (developer tools / API)

Developer: docs ve örnek. Skeptical: uptime iddiası kanıtsız. Busy: OAuth/signup uzunluğu. Economic buyer: fiyat hesaplayıcı. Security reviewer: veri akışı diyagramı.

Persona tepkisinde corpus alıntısı zorunludur. Ürüne uymayan personaları zorlama. ToughQuestions somut ve cevaplanabilir olsun; hakaret veya spekülasyon yok.

## Drop-off zaman çizelgesi örüntüleri (developer tools / API)

Landing jargon → signup e-posta doğrulama duvarı → docs dağınık → ilk 401 hatası anlaşılmaz → billing sürprizi. Aşamalar: Quickstart, First call, Integrate, Prod.

Oran ve yüzde ekleme. Aşama adı + sürtünme türü (confusion/friction/distrust) yaz. Hafta-1 sessizlik nitel erken sinyal olabilir.

## Corpus'ta aranacak kanıtlar (developer tools / API)

Quickstart, API ref, örnek repo, pricing calculator, status, changelog, auth, rate limit, support SLA, security. Çelişki: 5 dk setup vs zorunlu demo; %99.99 uptime vs status yok.

Kanıt yoksa 'bulunamadı' de. Çelişki bulgularında iki alıntıyı yan yana koy. Rakip sitesinden kanıt taşıma.

## FirstClick skor etkileri (developer tools / API)

Clarity: problem+stack. Adoption: time-to-first-call. OnboardingRisk: docs/auth sürtünmesi. Trust: status, güvenlik, fiyat öngörülebilirliği.

Skoru tek cümlelik sloganla gerekçelendirme. clarityScore, adoptionScore, onboardingRisk ve trust etkilerini ayır. Vaad-UI çelişkisi birden fazla skoru birlikte etkileyebilir.

## Aksiyon kontrol listesi (developer tools / API)

1) Quickstart'ı hero yakınına koy. 2) API key'i hızlandır. 3) Kopyalanabilir örnek. 4) Hata mesajlarını eyleme bağla. 5) Free tier netleştir. 6) Status/changelog. 7) Pricing calculator. 8) Security sayfası. 9) Sandbox. 10) Alıntıla.

Öneriler uygulanabilir ve önceliklendirilebilir olsun. Her öneri bir bulguya bağlansın. 'Daha iyi yapın' genel öğüdü yerine somut UI/metin değişikliği yaz.

## Derin teşhis 1 (developer tools / API)

401/403/429 hata mikro kopyası developer adoption'ının görünmez parçasıdır. 'Invalid request' yetmez; hangi header/limit eksik söyle. FirstClick errors playbook ile birlikte okunur.

Bu derin teşhis bölümü bağımsız retrieval için yazılmıştır; sektör adı ve FirstClick analiz bağlamı bölüm içinde tekrarlanır. Bulgular yine alıntı ister.

## Derin teşhis 2 (developer tools / API)

Breaking change ve versioning dili trust etkiler. Changelog yoksa skeptical enterprise gecikir. Migration rehberi vaadi docs'ta yoksa çelişki.

İkinci derin teşhis, birinciden farklı bir başarısızlık moduna odaklanır. Aynı genel cümleleri tekrarlamak yerine sektöre özgü sinyalleri kullanır.

## Analist yazım şablonu (developer tools / API)

Format: Gözlem (alıntı) → Persona → Timeline aşaması → Skor etkisi → Öneri. Örnek iskelet: "[UI/metin alıntısı]; [persona] [sürtünme]; [aşama]; [skor]↑/↓; [somut düzeltme]." Uydurma kullanıcı sesi ve uydurma metrik yok.

Kalite kontrol: Her bulgu başka bir analistin corpus'ta doğrulayabileceği kadar somut mu? Değilse yeniden yaz. Sektör playbook kuralını [kb] olarak belirt; ürün alıntısını ayrı tut.



## Ek uzman notu 1

API ürününde fiyat calculator yoksa economic buyer adoption gecikir. Developer ise docs ile ilerler; iki yol da tasarlanmalıdır.

## Ek uzman notu 2

Webhook imza doğrulama dokümantasyonu güvenlik reviewer için kritik sinyal olabilir.

## Ek uzman notu 3

SDK sürüm destek matrisi vaadi changelog ile çelişmesin.

## Time-to-first-call teşhisi (developer tools / API)

Developer tools'ta aha çoğu zaman ilk başarılı API çağrısıdır. Quickstart'ta kopyalanabilir curl/SDK örneği yoksa friction yüksektir. API key üretimi satış görüşmesine bağlıysa PLG vaadiyle çelişir. 401/403/429 mesajları hangi header veya limitin eksik olduğunu söylemiyorsa onboardingRisk yükselir. FirstClick latency p95 uydurmaz; "ms altında" iddiasını status/benchmark kanıtıyla karşılaştırır — yoksa zayıf sinyal.

## Fiyatlandırma öngörülebilirliği (developer tools / API)

Usage + seat hibrit modeller economic buyer için kafa karıştırır. Pricing calculator yoksa adoption gecikir. Free tier limitleri (request, log retention, seat) görünür olmalıdır. "Predictable pricing" gizli çarpanlarla çelişmesin. Enterprise contact-us yanında self-serve yolu yoksa hibrit gerilim notu düş.

## Güvenlik ve breaking change (developer tools / API)

Security reviewer veri akışı, webhook imza, SOC/ISO iddiası (varsa) ve DPA linki arar. Changelog ve versioning dili yoksa skeptical enterprise gecikir. Migration rehberi vaadi docs'ta yoksa çelişki. Status sayfası uptime iddiasının minimum kanıtıdır; yoksa "99.99%" zayıf kalır.

## Quickstart ve hata deneyimi (developer tools / API)

Developer tools/API'de ilk izlenim çoğu zaman docs + quickstart'tır. "5 dakikada Hello World" vaadi kopyalanabilir örnek, sandbox ve self-serve API key olmadan çelişir. Satış görüşmesi zorunluysa PLG vaadi kırılır. FirstClick time-to-first-call süresini ölçmez; adım sayısını ve engelleri nitel yazar. 401/403/429 mesajları hangi header, scope veya rate limit'in eksik olduğunu söylemiyorsa onboardingRisk yükselir.

SDK dil matrisi marketing'te geniş, docs'ta dar ise distrust. Webhook imza doğrulama, idempotency ve versioning dili security/tech reviewer için kritik sinyallerdir. Breaking change politikası ve changelog yoksa enterprise adoption gecikir. Status sayfası uptime iddiasının minimum kanıtıdır; "99.99%" tek başına zayıf kalır — sayı uydurma, iddia-kanıt çelişkisi yaz.

## Pricing calculator ve hibrit satış (developer tools / API)

Usage + seat hibrit modeller economic buyer için kafa karıştırır. Calculator yoksa adoption gecikir. Free tier limitleri (request, log retention, proje/seat) görünür olmalıdır. Overage sürprizi price-sensitive distrust. Enterprise "contact sales" yanında self-serve yolu yoksa hibrit gerilim notu düş. Security sayfası, DPA talebi ve veri akışı diyagramı corpus'ta aranır; yoksa eksik sinyal.

## Developer tools skor özeti

ClarityScore problem+stack netliğine, AdoptionScore first successful call'a, OnboardingRisk auth/docs sürtünmesine, Trust status+güvenlik+öngörülebilir fiyata duyarlıdır. Timeline: Quickstart, First call, Integrate webhook, Prod, Billing. Bulgular alıntılı.

## Observability, destek ve community (developer tools / API)

Developer adoption'ında docs kadar örnek repo, cookbook ve hata arama deneyimi de önemlidir. Docs arama boş sonuç önerisizse friction. Destek SLA marketing'te varken yalnızca community forumu varsa enterprise skeptical gerilir. Rate limit başlıkları ve retry-after mikro kopyası yoksa entegrasyon ekibi zorlanır. Sandbox ile production anahtarlarının karışmasını önleyen UI uyarıları olumlu trust sinyalidir.

Partner/marketplace entegrasyon kataloğu vaadi boşsa çelişki. Terraform/provider veya CLI vaadi docs'ta yoksa eksik. FirstClick GitHub yıldızı veya market share uydurmaz; corpus'taki kurulum yollarını sayar.

## Güvenlik incelemesi checklist'i (developer tools / API)

Security reviewer persona için corpus checklist: veri akışı diyagramı, encryption dili, alt işlemciler, DPA, SSO/SAML, audit log, penetration test özeti (varsa — yoksa uydurma), bug bounty linki, GDPR/KVKK sayfası. Logo duvarı yetmez. HIPAA veya sektör uyumu iddiası açıklamasızsa zayıf. VPC/private link enterprise vaadi pricing ile UI docs arasında tutarlı olmalı.

Developer champion self-serve ilerlerken security review'da takılıyorsa timeline'a ayrı olay yaz. FirstClick satış döngüsü süresi uydurmaz.
