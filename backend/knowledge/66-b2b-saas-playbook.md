# B2B SaaS sektör playbooku

Bu dosya FirstClick analizinde sektör paketi **B2B SaaS** seçildiğinde ağırlık kazanır. Her bölüm bağımsız RAG parçası olarak okunabilir; bölümler sektör adını ve analiz bağlamını kendi içinde taşır.

## Kapsam ve iş modeli bağlamı

B2B SaaS'ta değer genellikle abonelik (seat, kullanım veya özellik paketi) üzerinden gelir. Alıcı tek kişi değildir: champion ürünü dener, ekonomik alıcı bütçeyi onaylar, güvenlik/IT riski inceler, son kullanıcı günlük işi yürütür. FirstClick B2B SaaS analizinde pitch "takımlar için" diyorsa corpus'ta self-serve onboarding, takım daveti, rol yetkileri ve satın alma yolu birlikte aranır. İş modeli PLG (ürünle büyüme), sales-led veya hibrit olabilir; her model farklı ilk izlenim ve aktivasyon beklentisi üretir. Heuristik: "Book a demo" tek yolsa PLG vaadiyle çelişki oluşur; yalnızca self-serve varsa enterprise vaadiyle SSO/audit eksikliği sürtünme yaratır. Bu playbook sayısal dönüşüm oranı iddia etmez; kanıt ürün corpus'undan alıntılanmalıdır.

## İlk izlenim soruları (B2B SaaS)

FirstClick analisti B2B SaaS landing ve pitch metninde şu soruları sorar: (1) Kim için? Rol ve şirket boyutu net mi? (2) Hangi iş sonucunu vaat ediyor — saat tasarrufu, hata azalması, gelir artışı? (3) Kurulum iddiası ("dakikalar içinde") UI/wizard ile uyumlu mu? (4) Fiyat görünür mü yoksa yalnızca "iletişime geçin" mi? (5) Güven sinyali (logo, case, güvenlik sayfası) var mı? (6) Tek CTA mı, demo + trial ikiliği mi? Busy-professional persona ilk 10 saniyede ROI ve süre ister; skeptical persona kanıt ister; non-technical persona jargonsuz fayda dili ister. Hero'da "AI-powered platform for modern teams" gibi genel slogan clarityScore'u düşürmeye adaydır çünkü kategori ve sonuç belirsizdir.

## Onboarding ve aktivasyon (B2B SaaS)

B2B SaaS aktivasyonu genelde "ilk değerli iş çıktısı"dır: ilk proje, ilk entegrasyon, ilk rapor, ilk takım daveti veya ilk workflow. Empty state boş dashboard gösteriyorsa aha moment gecikir; onboardingRisk yükselir. İyi pattern: örnek veri veya şablonla dolu workspace, 3 adımlı checklist, entegrasyon bağlantısını erteleyebilme. Kötü pattern: zorunlu şirket kartı + vergi no + 12 alanlı form + SSO zorunluluğu ilk günde. Takım ürünlerinde invite loop aktivasyonun parçasıdır; "tek kullanıcı onboarding" ile "takımlar için" vaadi çelişir. FirstClick timeline'da Onboarding aşamasında wizard uzunluğu, empty state kalitesi ve aha anı birlikte yazılır. Aktivasyon olayını ürün corpus'undan isimlendir (ör. "İlk board oluştur"); uydurma metrik yazma.

## Fiyat, güven ve uyum uyarıları (B2B SaaS)

Fiyatlandırma seat, usage veya feature-gated olabilir. Price-sensitive persona limitleri ve "kart gerekmez" mikro güvencesini arar; gizli fiyat skeptical'ı yükseltir. Enterprise pakette SSO, SCIM, audit log, DPA/KVKK metni beklenir; vaatte güvenlik var UI'da yoksa trust sürtünmesi oluşur. Türkiye'de B2B SaaS için KVKK aydınlatma, veri işleme yeri ve silme talebi yolu corpus'ta aranır; yoksa heuristic olarak güven skoru baskılanır, yasal kesin hüküm verilmez. Trial süresi ve iptal dili net değilse adoption düşer. "ROI %X" gibi kanıtsız iddialar citation disiplinine aykırıdır; case study'de yöntem yoksa skeptical persona toughQuestions üretir.

## Persona tepkileri (B2B SaaS)

Busy-professional: "Ne kadar sürede sonuç?" — uzun demo formu ve belirsiz ROI dilinde high friction. Skeptical: logo duvarı ve genel testimonial yetmez; metrikli case ve güvenlik sayfası ister. Price-sensitive: yıllık indirim baskısı ve seat şişirmesi itiraz üretir. Non-technical: "orchestration / synergy" jargonunda confusion. Student/first-timer B2B SaaS'ta nadiren birincil alıcıdır; pitch öğrenci dili kullanıyorsa hedef kitle uyumsuzluğu not edilir. Enterprise champion: self-serve + "IT için güvenlik özeti" birlikte ister. Economic buyer: fiyat tablosu ve ROI çerçevesi yoksa satın alma soruları artar. FirstClick persona tepkisinde ürün corpus alıntısı zorunludur; genel sektör klişesi yeterli değildir.

## Drop-off zaman çizelgesi örüntüleri (B2B SaaS)

Tipik B2B SaaS drop-off noktaları (heuristic, oran uydurma): Landing — belirsiz hero veya çoklu CTA. Signup — zorunlu demo veya uzun form. Onboarding — boş workspace, zorunlu entegrasyon. Invite — takım daveti ertelenmişse hafta-1 sessizlik. Paywall — trial bitmeden kritik özellik kilitli. Security review — SSO yoksa satış döngüsü uzar (timeline'da ayrı olay). FirstClick timeline olaylarında aşama adı (Landing / Signup / Onboarding / Invite / Paywall / Security) ve sürtünme türü (confusion, friction, distrust) yazılır. "7 gün sessizlik" churn erken sinyali olarak not edilebilir; yüzde verilmez.

## Corpus'ta aranacak kanıtlar (B2B SaaS)

Aranacak metin/UI sinyalleri: hero değer cümlesi; CTA metni (trial / demo); fiyat sayfası veya "contact sales"; seat/usage dili; SSO, SAML, audit log, rol; KVKK/privacy linkleri; case study başlıkları; entegrasyon listesi; empty state / checklist kopyası; invite UI; trial süresi; DPA. Çelişki örnekleri: "2 dakikada kurulum" vs 8 adımlı wizard; "self-serve" vs yalnızca Calendly; "güvenli" vs güvenlik sayfası yok. Kanıt yoksa [kb] genel kuralı + "corpus'ta bulunamadı" notu; uydurma alıntı yasaktır.

## FirstClick skor etkileri (B2B SaaS)

ClarityScore: kategori + sonuç cümlesi netliğine duyarlı. AdoptionScore: self-serve yol, aha hızı, invite ve adil paywall'a duyarlı. OnboardingRisk: boş dashboard, zorunlu entegrasyon, uzun form ile yükselir. Trust: güvenlik/KVKK/case kanıtı zayıfsa baskılanır. Vaad-UI çelişkisi hem clarity hem adoption'ı birlikte düşürebilir. Skor gerekçesinde mutlaka corpus alıntısı veya "eksik sinyal" ifadesi kullan; sektör ortalaması uydurma.

## Aksiyon kontrol listesi (B2B SaaS)

1. Hero'yu tek sonuç cümlesine indir; rol + şirket boyutu ekle. 2. Trial ve demo yollarını görsel hiyerarşide ayır. 3. Empty state'e şablon veya örnek veri koy. 4. Aktivasyon olayını tanımla ve checklist'e bağla. 5. Invite'ı onboarding'in ilk 24 saatine yerleştir (ürün takımsa). 6. Fiyat/limitleri görünür yap veya "neden satış" gerekçesini yaz. 7. Güvenlik özeti + KVKK linkini footer ve pricing yanına koy. 8. Kanıtsız ROI yüzdelerini kaldır veya yönteme bağla. 9. SSO/audit vaadini UI veya docs ile doğrula. 10. FirstClick raporunda her bulguyu alıntıyla kilitle.

## Derin teşhis: PLG ve sales-led gerilim (B2B SaaS)

B2B SaaS corpus'unda büyüme modeli açıkça yazılmasa bile CTA'lar modeli ele verir. Yalnızca "Demo rezervasyonu" varsa ürün sales-led varsayılır; yalnızca "Ücretsiz dene" varsa PLG varsayılır; ikisi birden varsa hibrit. Hibritte görsel hiyerarşi kritiktir: birincil CTA hangisi? FirstClick analisti çelişki arar: pitch "self-serve" diyorsa ama fiyat sayfası yok ve form zorunluysa adoptionScore baskılanır. Tersine pitch "enterprise-grade" diyorsa ama güvenlik, SSO, SLA ve rol yönetimi sinyali yoksa skeptical persona distrust üretir. Teşhis soruları: Kim satın alır? Kim kullanır? İlk değer için IT gerekir mi? Gerekmiyorsa neden SSO zorunlu ilk günde? Gerekirse neden trial vaadi IT'siz kurulumu ima ediyor? Bu gerilimi timeline'da "Signup" veya "Security" aşamasına yaz; yüzde verme.

## Derin teşhis: aktivasyon tanımı ve boş durum (B2B SaaS)

Aktivasyon olayı ürün tipine göre değişir: işbirliği aracında ilk paylaşım veya yorum; analitikte ilk dashboard; entegrasyon ürününde ilk sync; dokümantasyon/AI asistanında ilk başarılı yanıt. Corpus'ta aktivasyon tanımı yoksa analist heuristic önerir ama "sektör ortalaması X" demez. Boş durum metni "Henüz veri yok" ile bitiyorsa ve sonraki adım yoksa onboardingRisk yükselir. Güçlü boş durum: ne olduğu, neden önemli, tek CTA, isteğe bağlı "örnek veri yükle". Zayıf boş durum: dekoratif illüstrasyon + "Yakında". Takım ürünlerinde tek kullanıcıya özel empty state, "ekip verimliliği" vaadiyle çelişir; Invite CTA görünür olmalıdır. Entegrasyon zorunluluğu varsa alternatif yol (CSV, manuel, sandbox) sunulmuyorsa busy-professional friction yazar.

## Derin teşhis: fiyat paketi okunabilirliği (B2B SaaS)

Paket isimleri (Starter/Pro/Enterprise) tek başına netlik sağlamaz. Her pakette kim için, hangi limit, hangi destek seviyesi ve upgrade tetikleyicisi okunmalıdır. "Sınırsız" iddiası dipnotla sınırlanıyorsa skeptical bunu toughQuestion yapar. Seat fiyatı gizli kullanım ücretiyle birleşiyorsa price-sensitive persona "toplam sahip olma maliyeti net değil" der. Yıllık zorunluluk trial ile çelişiyorsa distrust. FirstClick fiyat bölümünde corpus'tan plan adlarını alıntıla; yoksa "fiyat sinyali bulunamadı" yaz. Kanıtsız "rakiplerden %40 ucuz" ifadesini ürün iddiası olarak işaretle ve kanıt iste.

## Derin teşhis: güvenlik ve satın alma komitesi (B2B SaaS)

Güvenlik incelemesi B2B SaaS'ta sık drop-off veya gecikme kaynağıdır. Corpus'ta aranacaklar: güvenlik sayfası, alt işlemci listesi, veri merkezi bölgesi, şifreleme dili, SOC/ISO logoları (varsa — yoksa uydurma), DPA talebi, KVKK aydınlatma. Logo duvarı güvenlik kanıtı yerine geçmez. Rol tabanlı erişim ve audit log "ekip yönetimi" vaadi için teknik karşılıktır. Champion self-serve ilerlerken IT engellerse timeline'a "Security review friction" ekle. Analist hukuki uygunluk kararı vermez; eksik şeffaflığı risk sinyali olarak not eder.

## İyi ve zayıf örnek kalıpları (B2B SaaS)

İyi hero kalıbı: "[Rol] için [sonuç] — [sürede] [nasıl]". Zayıf: "The OS for your business". İyi CTA: "14 gün dene — kart gerekmez". Zayıf: "Submit". İyi onboarding: 3 adımlı checklist + şablon. Zayıf: 12 alanlı şirket formu. İyi güven: kısa güvenlik özeti + iletişim. Zayıf: "Bank-level security" kanıtsız slogan. Bu kalıplar heuristic'tir; skorlama ürün corpus kanıtına bağlıdır.

## Analist yazım şablonu (B2B SaaS)

Bulgu formatı: Gözlem (alıntı) → Persona etkisi → Timeline olayı → Skor etkisi → Öneri. Örnek iskelet: "Landing hero '[alıntı]' kategori belirtmiyor; non-technical confusion; clarityScore↓; hero'yu rol+sonuç cümlesine indir." Uydurma kullanıcı alıntısı yazma; yalnızca corpus veya [kb] kuralı.
