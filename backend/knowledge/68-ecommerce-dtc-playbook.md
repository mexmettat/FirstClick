# E-ticaret ve D2C sektör playbooku

Bu dosya FirstClick analizinde sektör paketi **e-ticaret / D2C** seçildiğinde ağırlık kazanır. Her bölüm bağımsız RAG parçası olarak retrieval edilebilir; bölüm kendi içinde sektör adını, teşhis sorularını ve skor etkisini taşır. Uydurma istatistik, dönüşüm oranı veya regülasyon kesin hükmü yazılmaz. Heuristikler açıkça heuristic olarak işaretlenir.

## Kapsam ve iş modeli bağlamı (e-ticaret / D2C)

E-ticaret ve doğrudan tüketiciye (D2C) modellerde gelir ürün satışından, yenilemeden veya abonelik kutusundan gelir. Kritik yol keşif → ürün detayı (PDP) → sepet → ödeme → teslimat beklentisidir. Marketplace'ten farkı satıcının genelde tek marka olmasıdır; güven marka anlatısı, iade politikası, kargo şeffaflığı ve destek kanalına dayanır. FirstClick e-ticaret/D2C analizinde pitch 'kolay alışveriş' veya 'üreticiden tüketiciye' diyorsa corpus'ta fiyat görünürlüğü, kargo/iade, checkout adım sayısı ve mobil PDP tutarlılığı aranır.

Dönüşüm oranı, sepet terk yüzdesi veya AOV uydurulmaz. Değerlendirme vaad-UI tutarlılığı, sürtünme noktaları ve persona tepkileri üzerinedir. Abonelikli D2C'te iptal/atla (skip) yolları iş modelinin parçasıdır; yoksa price-sensitive distrust oluşur. B2B hediye/kurumsal fatura yan yolu varsa gizli sürtünme olarak not edilir.

Bu playbook genel landing kurallarını ecom'a özgü PDP ve checkout sinyalleriyle tamamlar. Marka hikâyesi önemlidir ama ne satıldığı ilk bakışta anlaşılmazsa clarityScore zayıflar.

## İlk izlenim soruları (e-ticaret / D2C)

Ne satılıyor ve kime — hero net mi? Fiyat ve indirim koşulları şeffaf mı? Ürün görselleri gerçekçi mi? Kargo süresi/maliyet ne zaman görünüyor? İade/değişim checkout öncesi okunabilir mi? Güven rozetleri işlevsel mi abartılı mı? Scarcity ('son 1 ürün', geri sayım) stok gerçeğine bağlı mı?

Price-sensitive kargo sürprizine; skeptical sahte yoruma; busy-professional uzun üyelik zorunluluğuna; non-technical beden/ölçü belirsizliğine tepki verir. 'En iyi fiyat garantisi' kanıtsızsa toughQuestions üretir. İyi hero heuristic: '[Ürün kategorisi] — [temel fayda] · [kargo/iade mikro güvence]'. Zayıf: yalnızca lifestyle sloganı.

## Onboarding ve aktivasyon (e-ticaret / D2C)

Ecom'da aktivasyon çoğu zaman ilk başarılı satın alma veya anlamlı tercih kaydıdır (beden, stil quiz). Zorunlu üyelik checkout öncesi adoption'ı zayıflatabilir (heuristic). Misafir checkout güçlü pattern'dir. Quiz tabanlı D2C'te uzun quiz aha'yı geciktirir; skip veya 'sonuçları göster' sunulmalıdır.

Post-purchase onboarding sayılır: kargo takip, sipariş e-postası, iade yolu, yeniden satın alma. Boş 'siparişlerim' sayfası önerisizse fırsat kaçar. FirstClick timeline: Landing → PDP → Cart → Checkout → Post-purchase. Oran yazma.

## Fiyat, güven ve uyum uyarıları (e-ticaret / D2C)

KDV dahil fiyat, kargo eşiği, kapıda ödeme/iade koşulları Türkiye'de kritik güven unsurlarıdır; corpus'ta yoksa eksik sinyal. Mesafeli satış/cayma metni varsa ürün politikasıyla çelişki ara — hukuki kesin yorum yok. Stokta yokken aktif 'sepete ekle' distrust üretir. Manipülatif countdown skeptical için kırmızı bayrak.

Ödeme logoları tek başına güvenlik kanıtı değildir; iade süreci ve destek kanalı daha ağırdır. Abonelikte iptal kolaylığı price-sensitive için belirleyicidir. Taksit/bilgilendirme formu vaadi checkout'ta yoksa çelişki.

## Persona tepkileri (e-ticaret / D2C)

Price-sensitive: gizli kargo, küçük punto. Skeptical: photoshop before/after, tek tip 5 yıldız. Busy-professional: zorunlu hesap, yavaş ödeme. Non-technical: beden belirsizliği. Student: yüksek minimum sepet. First-timer: iade korkusu. Persona alıntılarında ürün başlığı, kargo satırı, iade SSS kullan; uydurma müşteri yorumu yazma.

## Drop-off zaman çizelgesi örüntüleri (e-ticaret / D2C)

Heuristic: Landing belirsiz kategori; PDP fiyat/kargo belirsiz; Cart sürpriz ücret; Checkout zorunlu üyelik/form hatası; Ödeme belirsiz hata; Post-purchase takip yokluğu. Mobile OTP/klavye sürtünmesi ayrı not. 'Yüksek sepet terk' diye sayı uydurma.

## Corpus'ta aranacak kanıtlar (e-ticaret / D2C)

Hero/koleksiyon, PDP fiyat-varyant, kargo/iade, sepet özeti, checkout alanları, misafir checkout, ödeme yöntemleri, stok, yorum/Q&A, abonelik iptal, destek, mobil CTA. Çelişki: 'ücretsiz kargo' vs gizli eşik; '30 gün iade' vs çelişen istisna listesi.

## FirstClick skor etkileri (e-ticaret / D2C)

ClarityScore: ne satıldığı ve fiyat netliği. AdoptionScore: checkout sürtünmesi ve misafir yolu. OnboardingRisk: zorunlu üyelik ve uzun quiz. Trust: iade, kargo, scarcity dürüstlüğü. Vaad-UI çelişkisi distrust+friction üretir.

## Aksiyon kontrol listesi (e-ticaret / D2C)

1) Hero'da kategori+fayda. 2) Fiyat+kargo bilgisini PDP'de erken göster. 3) Misafir checkout aç. 4) İade politikasını kısa görünür yap. 5) Sahte scarcity kaldır veya stoka bağla. 6) Checkout alanlarını azalt. 7) Ödeme hatalarını eyleme dönük yaz. 8) Post-purchase takip/destek ekle. 9) Mobil thumb CTA kontrolü. 10) Bulguları PDP/checkout alıntısıyla kilitle.

## Derin teşhis: PDP karar desteği (e-ticaret / D2C)

PDP ecom'da asıl landing'dir. Başlık, fiyat, varyant, görsel, kargo satırı, iade özeti ve sosyal kanıt birlikte okunur. Eksik beden tablosu non-technical confusion. 'Özel fiyat' koşulsuzsa skeptical distrust. Yalnızca jenerik 5 yıldız zayıf kanıttır; yüzde uydurma. Video/AR vaadi UI'da yoksa çelişki. Marka hikâyesi ürün faydasını eziyorsa clarity etkilenir.

## Derin teşhis: sepet ve checkout (e-ticaret / D2C)

Toplam maliyet ne kadar erken görünürse price-sensitive sürtünmesi o kadar azalır (heuristic). Zorunlu newsletter, zorunlu hesap ve belirsiz adres hataları adoption düşürür. Kapıda ödeme/havale vaatte varsa checkout'ta yoksa çelişki. 3D Secure hata mikro kopyası aranır. Cart ve Checkout ayrı timeline olaylarıdır.

## Analist yazım şablonu (e-ticaret / D2C)

Format: Gözlem(alıntı) → Persona → Timeline → Skor → Öneri. Örnek: "PDP '[alıntı]' kargo maliyetini gizlıyor; price-sensitive distrust; trust↓; kargo satırını fiyat altına taşı." Checkout zorunlu üyelikte adoption↓ ve onboardingRisk↑.
## Derin teşhis: marka vaadi ile dönüşüm yolu gerilimi (e-ticaret / D2C)

D2C markalarında hikâye anlatımı güçlü olabilir; FirstClick netlik testinde marka hikâyesi ürünün ne olduğunu ezmemelidir. Heuristik: nav ve hero'dan marka adını çıkarınca yabancı biri hâlâ ne satıldığını söylüyor mu? Söyleyemiyorsa clarityScore baskılanır. Koleksiyon sayfalarında filtre boş sonuçları önerisiz bırakmak busy-professional drop-off'udur. 'Sürdürülebilir / el yapımı / klinik formül' gibi iddialar kanıt (sertifika adı, açıklama) olmadan skeptical toughQuestions üretir — sahte sertifika uydurma; yoksa 'kanıt eksik' yaz.

Abonelikli D2C'te skip, pause, cancel yollarının hesabım sayfasında görünürlüğü price-sensitive adoption ve trust için kritiktir. 'İstediğin zaman iptal' vaadi yalnızca sohbette geçiyorsa çelişki. Kurumsal hediye / fatura talebi B2B-ish D2C'te gizli sürtünme olabilir. FirstClick e-ticaret/D2C skor gerekçesinde PDP fiyat+kargo, checkout üyelik zorunluluğu ve iade şeffaflığını önceliklendir; AOV veya dönüşüm yüzdesi uydurma.

## Yanlış pozitif ve yanlış negatifler (e-ticaret / D2C)

Yanlış pozitif: her 'son gün' etiketini dark pattern saymak — gerçek kampanya bitiş tarihi şeffaf ve tutarlıysa manipülasyon değildir. Yanlış negatif: yalnızca masaüstü checkout incelemek; mobil sticky CTA ve klavye sürtünmesi asıl friction olabilir. Yanlış pozitif: güven rozetlerini otomatik güçlü kanıt saymak — iade ve destek süreci daha ağır basar. Analist her bulguyu corpus alıntısıyla kilitlemeli; sektör klişesi ('ecom'da herkes ücretsiz kargo bekler') tek başına skor gerekçesi olamaz.

## Retrieval notları (68)

Bu bölüm FirstClick RAG retrieval için ek bağlam sağlar. Analist sektör paketini seçtiğinde önce iş modeli, sonra ilk izlenim soruları, sonra onboarding/aktivasyon, ardından fiyat-güven-uyum, persona tepkileri, drop-off zaman çizelgesi, corpus kanıt listesi, skor etkileri ve aksiyon listesini sırayla uygular. Her bulgu ürün corpus alıntısına bağlanır; alıntı yoksa 'sinyal bulunamadı' yazılır. Skor gerekçesinde clarityScore, adoptionScore, onboardingRisk ve trust etkileri ayrı cümlelerle belirtilir. Timeline olaylarında aşama adı ve sürtünme türü (confusion, friction, distrust) yer alır. Persona tepkisinde busy-professional, skeptical, price-sensitive, non-technical, student ve first-timer ayrımı yapılır; ürüne uymayan persona zorlanmaz. Kanıtsız yüzde, 'sektör ortalaması' ve kesin yasal hüküm yasaktır. Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor?

## Ek uzman notu 1

D2C abonelik kutusunda 'sürpriz' deneyimi ile içerik şeffaflığı dengelenmelidir. Alerjen/beden gibi kritik bilgiler sürpriz bahanesiyle gizlenemez.

## Ek uzman notu 2

Uluslararası kargo vaadi gümrük belirsizliğiyle geliyorsa checkout'ta uyarı heuristic'tir. Analist gümrük mevzuatı yorumlamaz.
