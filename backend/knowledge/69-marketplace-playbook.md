# Marketplace sektör playbooku

Bu dosya FirstClick analizinde sektör paketi **marketplace** seçildiğinde ağırlık kazanır. Her bölüm bağımsız RAG parçası olarak retrieval edilebilir; bölüm kendi içinde sektör adını, teşhis sorularını ve skor etkisini taşır. Uydurma istatistik, dönüşüm oranı veya regülasyon kesin hükmü yazılmaz. Heuristikler açıkça heuristic olarak işaretlenir.

## Kapsam ve iş modeli bağlamı (marketplace)

Marketplace / iki taraflı platformlarda gelir genelde işlem komisyonu, öne çıkarma (promoted listing), abonelik veya reklamdan gelir. FirstClick marketplace analizinin özü tek kullanıcı yolculuğu değil, en az iki rolün (alıcı–satıcı, ev sahibi–misafir, işveren–freelancer vb.) güven ve likidite ihtiyacını aynı ürün corpus'unda okumaktır. Pitch 'herkesi bir araya getiriyoruz' diyorsa corpus'ta hangi tarafın önce kaydolduğu, boş sonuç ekranlarının nasıl yönetildiği, ücretlerin nerede açıklandığı ve anlaşmazlık durumunda ne olduğu aranır.

Tek taraflı e-ticaretten farkı şudur: marka tek satıcı değildir; kalite ve güven dağıtık aktörlere bağlıdır. Bu yüzden rating, doğrulama, escrow veya ödeme koruması vaadleri UI'da karşılık bulmazsa trust skoru baskılanır. Chicken-egg (erken likidite) problemi heuristic olarak empty state ve teşvik kopyasında görünür; analist 'likidite %X' uydurmaz. Seed supply veya garantili talep iddiası marketing'te varsa operasyonel karşılık (editöryal envanter, eşleşme garantisi metni) yoksa vaad-UI çelişkisi yazılır.

İş modeli hibrit olabilir: hem komisyon hem SaaS araç satıcıya. Hibritte fiyat sayfası hangi tarafı konuşuyor net olmalıdır. B2B marketplace'te procurement ve fatura akışı eklenir; tüketici marketplace'te iade ve güvenlik öne çıkar. FirstClick sektör paketinde marketplace seçiliyken bu dosya, genel ecom ve genel B2B kurallarından önce rol ayrımı ve iki taraflı güven sinyallerine öncelik verir.

## İlk izlenim soruları (marketplace)

FirstClick analisti marketplace landing/pitch için sorar: Platform bir cümlede kimin sorununu çözüyor — alıcı mı satıcı mı yoksa ikisi birden mi? Hero görseli tek tarafın mutluluğunu mu gösteriyor? Birincil CTA 'Alışverişe başla', 'İlan ver' veya belirsiz 'Katıl' mı? Coğrafi kapsam (şehir, ülke) ve kategori kapsamı abartılı mı ('her şey burada') yoksa sınırlı ve dürüst mü?

Güven ilk 10 saniyede nasıl kuruluyor: 'güvenli ödeme', 'doğrulanmış kullanıcı', 'alıcı koruması' gibi ifadeler var mı ve tıklanınca içerik geliyor mu? Ücret modeli gizlenmiş mi? Skeptical persona sahte ilan ve dolandırıcılık korkusu taşır; price-sensitive alıcı hizmet bedeli sürprizine, satıcı ise komisyon şokuna duyarlıdır. Busy-professional uzun kayıt yerine hızlı arama/keşif ister. Net olmayan 'sharing economy' sloganı clarityScore için zayıf sinyaldir.

İyi ilk izlenim kalıbı (heuristic): '[Taraf] için [işlem] — [güven mekanizması] ile'. Zayıf kalıp: 'The future of commerce communities'. FirstClick firstImpression yazarken hero ve CTA'yı alıntılar; yoksa 'landing sinyali zayıf' notu düşer.

## Onboarding ve aktivasyon (marketplace)

Marketplace'te aktivasyon tanımı tarafa göre ayrılmalıdır. Alıcı aktivasyonu genelde ilk anlamlı arama, ilk kayıtlı favori, ilk mesaj veya ilk tamamlanan işlemdir. Satıcı aktivasyonu ilk yayınlanan ilan, ilk tamamlanmış profil, ilk yanıt veya ilk kazançtır. Tek bir 'hesabını tamamla' çubuğu her iki tarafı aynı alanlara zorluyorsa non-technical satıcı ve impatient alıcı birlikte zarar görür.

Rol seçimi onboarding'in erken adımı olmalıdır. İyi pattern: rol kartları + role özel 3 maddelik checklist + atlanabilir doğrulama. Kötü pattern: vergi no, IBAN, kimlik, mağaza logosu ve 10 kategori seçimini ilk ilandan önce zorunlu kılmak. KYC gerektiren pazarlarda gerekçe cümlesi ve ilerleme durumu gösterilmelidir; analist yasal zorunluluğu yok saymaz ama belirsiz red mesajını friction olarak yazar.

Boş pazar empty state'i kritik onboarding parçasıdır. '0 sonuç' ekranı öneri, talep oluşturma veya bildirim kaydı sunmuyorsa adoption düşer. Satıcıya 'henüz alıcı yok' demek yerine talep sinyali veya öne çıkarma teşviki göstermek (varsa) daha iyidir — teşvik yoksa uydurma. FirstClick timeline olaylarında Buyer/Seller etiketi kullan.

## Fiyat, güven ve uyum uyarıları (marketplace)

Komisyon, hizmet bedeli, öne çıkarma paketi ve iade kesintileri fiyat şeffaflığının parçasıdır. '0 komisyon' kampanyası dipnotla doluysa skeptical toughQuestion üretir. Escrow veya 'ödeme teslimattan sonra serbest' vaadi checkout adımlarında görünmezse distrust. Chargeback / anlaşmazlık penceresi SSS'de yoksa her iki taraf risk algılar.

Doğrulama rozetleri neyi doğruladığını açıklamalıdır (e-posta, telefon, kimlik, işletme). Belirsiz yeşil tik trust yerine şüphe doğurabilir. KVKK: kimlik belgesi toplama amacı ve saklama dili aranır; kesin hukuki uygunluk iddia edilmez. Yasaklı ürün/hizmet listesi yoksa güvenlik boşluğu notu. Mesajlaşma dışı ödeme teşvikine karşı uyarı metni platform güveninin parçasıdır.

Sigorta veya 'alıcı koruması' ifadeleri kapsam maddesi olmadan zayıf kanıttır. FirstClick trust skorunda marketplace için escrow/doğrulama/anlaşmazlık sinyallerini ecom iade sinyallerinden ayırt eder.

## Persona tepkileri (marketplace)

Busy-professional alıcı: zorunlu uzun chat yerine net 'satın al/rezerve et' ister; yoksa friction. Price-sensitive alıcı: checkout'ta beliren hizmet bedeli için distrust. Skeptical: satın alınmış yoruma benzeyen tek tip 5 yıldızlar. Non-technical satıcı: fatura ve vergi jargonuyla dolu panel. Student: yüksek minimum çekim tutarı. First-timer: dolandırılma korkusu — destek kanalı ve koruma metni gerekir. Economic buyer (B2B marketplace): sözleşme, fatura, rol yetkisi arar.

Persona tepkisinde mutlaka taraf + corpus alıntısı kullan. 'Kullanıcılar güvenmiyor' genel cümlesi yerine 'Hero "güvenli ödeme" diyor ancak checkout'ta koruma adımı yok' yaz.

## Drop-off zaman çizelgesi örüntüleri (marketplace)

Heuristic drop-off noktaları (oran yok): Landing — belirsiz taraf vaadi. Rol seçimi — seçim sonrası yanlış form. Satıcı onboarding — yarım kalan ilan. Arama — boş sonuç önerisiz. Mesajlaşma — yanıt yokluğu algısı (UI'da SLA yok). Checkout — fee sürprizi veya escrow belirsizliği. Rating — yalnızca olumlu zorlama. Hafta-1: satıcı ilanı yayında ama talep yok empty state'i churn sinyali olabilir.

FirstClick timeline'da aşamaları Landing / Role select / Listing / Search / Checkout / Dispute olarak ayır. 'Yüksek terk' diye sayı ekleme.

## Corpus'ta aranacak kanıtlar (marketplace)

Aranacaklar: rol CTA'ları, fee/komisyon sayfası, escrow veya ödeme koruması adımları, doğrulama/KYC kopyası, rating kuralları, arama empty state, teşvik kampanya metni, anlaşmazlık SSS, yasaklı kategori politikası, mesajlaşma, sigorta kapsamı, satıcı paneli checklist. Çelişki örnekleri: 'anında eşleş' vs boş kategori; 'alıcı korumalı' vs yalnızca 'satıcıyla anlaşın'; 'ücretsiz listele' vs zorunlu ücretli öne çıkarma duvarı.

Kanıt yoksa 'corpus'ta bulunamadı' de; tipik sektör varsayımıyla doldurma.

## FirstClick skor etkileri (marketplace)

ClarityScore: hangi taraf için ne olduğu. AdoptionScore: role özel ilk değer hızı ve boş sonuç yönetimi. OnboardingRisk: ağır satıcı kurulumu ve belirsiz KYC. Trust: fee şeffaflığı, escrow, doğrulama açıklığı, rating bütünlüğü. Tek tarafa optimize UI 'iki taraflı' vaadiyle çelişirse clarity ve trust birlikte etkilenir. Skor gerekçesi alıntılı olmalıdır.

## Aksiyon kontrol listesi (marketplace)

1) Hero'da birincil tarafı netleştir, diğer taraf için ikincil yol ver. 2) Rol seçimli onboarding kur. 3) Alıcı ve satıcı aktivasyon olaylarını ayrı tanımla. 4) Komisyon/fee tablosunu görünür yap. 5) Escrow veya ödeme koruması adımlarını UI'da göster. 6) Boş aramada alternatif veya talep oluşturma ekle. 7) Rozetlerin anlamını yaz. 8) Anlaşmazlık sürecini SSS'ye koy. 9) KVKK/doğrulama gerekçesini sadeleştir. 10) FirstClick bulgularını taraf + alıntı ile kilitle.

## Derin teşhis: likidite algısı (marketplace)

Likidite FirstClick'te sayısal metrik olarak uydurulmaz; algı UI'dan okunur. Çok sayıda kategori kartı ama tıklanınca boş liste, 'popüler' etiketi altında aynı 3 ilan, haritada pin yokluğu — bunlar zayıf likidite algısıdır. İyi heuristic: dar kategori ile dolu his, bekleme listesi, 'talep et' CTA. Satıcı edinme kampanyası landing'de vaat edilip ürün içinde karşılığı yoksa çelişki. Analist 'rakipler daha dolu' demez; corpus içi tutarlılığa bakar.

## Derin teşhis: güven ve anlaşmazlık (marketplace)

Anlaşmazlık kaçınılmazdır; süreç yokluğu trust açığıdır. Corpus'ta süre, kanıt yükleme, iade koşulu aranır. Zorla 5 yıldız veya silinen olumsuz yorum izlenimi skeptical için kırmızı bayrak — kanıt yoksa iddia etme, rating UI'sında manipülasyon teşviki var mı bak. İyi örnek: işlem sonrası objektif sorular. Zayıf: 'deneyimin harikaydı değil mi?' tek seçenek.

## Analist yazım şablonu (marketplace)

Format: Gözlem(alıntı) → Taraf → Persona → Timeline → Skor → Öneri. Örnek: "Satıcı checklist '[alıntı]' kimlik+vergi+IBAN istiyor; busy seller friction; Onboarding/Seller; onboardingRisk↑; zorunlu alanları ilk ilan sonrasına böl." Uydurma kullanıcı yorumu yazma.

## Ek uzman notu 1

Marketplace'te mesajlaşma dışı ödeme, platform korumasını deler. Uyarı metni yoksa trust açığı. Analist dolandırıcılık oranı uydurmaz.

## Ek uzman notu 2

Satıcı yanıt süresi rozeti varsa hesaplama yöntemi belirsizse skeptical soru üretir. Rozet enflasyonundan kaçın.

## Ek uzman notu 3

Çok kategorili yatay marketplace'te dar dikey giriş likidite algısını iyileştirebilir (heuristic); corpus'ta kategori stratejisi tutarlı mı bak.
