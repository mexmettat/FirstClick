# Son kullanıcı ve admin ayrımı

Bu belge aynı üründe günlük kullanıcı ile yönetici (admin) rollerinin ihtiyaç çatışmasını FirstClick teşhisine bağlar. Tek onboarding ve tek başarı metriği çoğu B2B ve işbirliği ürününde yanlıştır. Bölümler bağımsızdır.

## Amaç ve kapsam

Son kullanıcı işi bitirmek ister: hızlı oluşturma, net hata, az izin sürtünmesi, öğrenmesi kolay akış. Admin kontrol ister: rol, izin, faturalandırma, SSO, denetim, davet, veri saklama, marka/ayar. Çatışma: admin kontrolleri son kullanıcı yoluna zorunlu girerse adoption düşer; admin araçları yoksa kurumsal satış ve güvenlik veto olur.

Kapsam: yol ayrımı, izin tasarımı, davet zamanı, boş durumlar, skor. Kapsam dışı: karmaşık IAM mimarisi dersi, uydurma SSO.

## Tasarım ilkeleri

İki başarı metriği tanımla. Son kullanıcı: ilk çıktı. Admin: ilk güvenli yapılandırma. Ürün bunları aynı zorunlu sıraya koymaz.

Varsayılan güvenli ama hafif. Herkese admin vermek kolaydır, yanlıştır. En az ayrıcalık; yükseltme bilinçli olur.

Davet zamanı: değerden sonra. "Önce ekibini ekle" bireysel son kullanıcıyı ve busy profesyoneli cezalandırır.

Dil ayrımı: kullanıcı arayüzü iş dili; admin konsolu kontrol dili. Hero yalnızca admin konuşuyorsa son kullanıcı kendini görmez.

## Somut örnekler

Örnek A — Kayıt sonrası zorunlu workspace ayarları (SSO, saklama politikası). Son kullanıcı raporu göremez. Suggestion: kişisel alan varsayılan; admin checklist ayrı.

Örnek B — Her üye fatura ve silme yetkili. Güvenlik ve ekonomik alıcı veto. Rol şablonları öner.

Örnek C — Admin paneli var ama davet linki yok. Champion ekibini gösteremez.

Örnek D — Son kullanıcı hata mesajı "policy 403". Admin dilini kullanıcıya sızdırma; düz dil + "yöneticinden izin iste".

Örnek E — PLG araç ekip planına geçince tüm UI admin jargonuna dönüyor. Clarity düşer. Katmanları koru.

Örnek F — Audit log yalnızca satışta vaat, üründe yok. Security reviewer belgesiyle çelişki yaz.

## Tanı soruları

Kayıt hangi role varsayılan atanıyor? Admin ayarları ilk değere engel mi? Davet zorunlu mu? Rol ve izin görünür mü? Fatura yalnızca admin'de mi? Son kullanıcı hata dili anlaşılır mı? Admin checklist ayrı mı? SSO admin yolunda mı? Güvenlik sinyalleri admin için yeterli mi? Tek başarı metriği mi dayatılıyor?

## Yanıt kalıpları

Kalıp 1 — admin engeli. Zorunlu admin ayarı ilk değeri bloke ediyor. Ayrıştır; adoption artar.

Kalıp 2 — aşırı izin. Herkes admin. Rol şablonu öner; trust/B2B.

Kalıp 3 — davet zorunlu. Değere sonra taşı.

Kalıp 4 — dil sızıntısı. 403/policy kullanıcıya. Düz dil yaz.

Kalıp 5 — admin yok. Kurumsal yol eksik. Davet/rol/audit sorularını toughQuestions'a ekle.

Kalıp 6 — çelişki. Landing SSO diyor, admin UI yok. Uydurma.

## Anti-pattern'ler

Tek yol tek rol. Herkese admin. Daveti dayatma. Admin işini son kullanıcı onboarding'ine gömme. Hata dilinde jargonu bırakma. Admin'i yok sayıp yalnızca consumer UI. Güvenlik kontrolünü "ileri ayar" diye saklayıp enterprise satma. Rolleri demografiyle eşleme.

## FirstClick prompt ve skor etkileri

Prompt: varsayılan rol, engel sırası, davet zamanı, izin riski, skor, mikro aksiyon. PersonaReaction son kullanıcı: işimi bitireyim. Admin: kim neyi görebilir, fatura nerede, SSO nasıl?

Skor: Adoption son kullanıcı yolu; Trust/B2B admin kontrolleri; Clarity dil ayrımı; OnboardingRisk yanlış sıra; Likelihood iki yol varsa artar. Suggestion: yolu ayır, daveti kaydır, rol şablonu, hata dilini düzelt, admin checklist'i ayır.

## Aksiyon kontrol listesi

- [ ] Varsayılan rolü belirle
- [ ] Admin engellerini ilk değerden ayır
- [ ] Davet zamanını kontrol et
- [ ] Aşırı izin riskini yaz
- [ ] Hata dilini tara
- [ ] Admin checklist ayrı mı bak
- [ ] SSO/audit iddiasını doğrula
- [ ] İki başarı metriği tanımla
- [ ] Uydurma özellik yazma
- [ ] Security/economic buyer belgelerine çapraz bağla

## Rol matrisi (özet)

Son kullanıcı: oluştur, düzenle, paylaş (sınırlı), kendi ayarları. Admin: davet, rol, fatura, SSO, audit, silme, workspace ayarları. Billing admin bazen ayrıdır. Corpus bu ayrımı yansıtıyor mu? Yansıtmıyorsa teşhis "rol bulanık"tır.

## Timeline örneği

1) Kullanıcı kayıt olur, admin soruları gelir. 2) İlk çıktı ertelenir. 3) Terk veya destek. Alternatif iyi yol: 1) örnek veriyle çıktı 2) isteğe bağlı ekip 3) admin checklist. FirstClick suggestion ikinci yolu tarif eder.

## Marketplace ve çok taraflı ürünler

İki tarafı olan ürünlerde "admin" satıcı hesabı sahibi olabilir. Alıcı son kullanıcıdır. Aynı ayrım geçerlidir: satıcı onboarding'i alıcıyı bloke etmemeli. Davranışsal segmentasyon belgesi ile birlikte okunur.

## Mikro kopya

İyi kullanıcı: "Taslağı oluştur", "Paylaşım linki kopyala". İyi admin: "Üye rolünü değiştir", "Denetim kaydını indir". Kötü: kullanıcıya "tenant policy enforce et". Suggestion mikro kopyayı role göre ayırır.

## FirstClick paket seçimi

B2B analizinde son kullanıcı + admin + güvenlik birlikte düşünülür. Yalnızca son kullanıcı persona'sı ile yetinmek enterprise veto'yu kaçırır. Likelihood gerekçesi hangi rolün engellendiğini açıkça söyler.

## Ölçüm proxy'leri

Son kullanıcı proxy: ilk çıktı olayı. Admin proxy: davet, rol atama, SSO bağlama. İkisini tek "aktivasyon" diye birleştirmek teşhisi bulandırır. FirstClick suggestion hangi proxy'nin kırık olduğunu belirtir.

## Uygulama derinliği 1

## Rol matrisi (özet)

Son kullanıcı: oluştur, düzenle, paylaş (sınırlı), kendi ayarları. Admin: davet, rol, fatura, SSO, audit, silme, workspace ayarları. Billing admin bazen ayrıdır. Corpus bu ayrımı yansıtıyor mu? Yansıtmıyorsa teşhis "rol bulanık"tır.

## Uygulama derinliği 2

## Timeline örneği

1) Kullanıcı kayıt olur, admin soruları gelir. 2) İlk çıktı ertelenir. 3) Terk veya destek. Alternatif iyi yol: 1) örnek veriyle çıktı 2) isteğe bağlı ekip 3) admin checklist. FirstClick suggestion ikinci yolu tarif eder.

## Uygulama derinliği 3

## Marketplace ve çok taraflı ürünler

İki tarafı olan ürünlerde "admin" satıcı hesabı sahibi olabilir. Alıcı son kullanıcıdır. Aynı ayrım geçerlidir: satıcı onboarding'i alıcıyı bloke etmemeli. Davranışsal segmentasyon belgesi ile birlikte okunur.

## Uygulama derinliği 4

## Mikro kopya

İyi kullanıcı: "Taslağı oluştur", "Paylaşım linki kopyala". İyi admin: "Üye rolünü değiştir", "Denetim kaydını indir". Kötü: kullanıcıya "tenant policy enforce et". Suggestion mikro kopyayı role göre ayırır.

## Uygulama derinliği 5

## FirstClick paket seçimi

B2B analizinde son kullanıcı + admin + güvenlik birlikte düşünülür. Yalnızca son kullanıcı persona'sı ile yetinmek enterprise veto'yu kaçırır. Likelihood gerekçesi hangi rolün engellendiğini açıkça söyler.

## Uygulama derinliği 6

## Ölçüm proxy'leri

Son kullanıcı proxy: ilk çıktı olayı. Admin proxy: davet, rol atama, SSO bağlama. İkisini tek "aktivasyon" diye birleştirmek teşhisi bulandırır. FirstClick suggestion hangi proxy'nin kırık olduğunu belirtir.

## Uygulama derinliği 7

## Rol matrisi (özet)

Son kullanıcı: oluştur, düzenle, paylaş (sınırlı), kendi ayarları. Admin: davet, rol, fatura, SSO, audit, silme, workspace ayarları. Billing admin bazen ayrıdır. Corpus bu ayrımı yansıtıyor mu? Yansıtmıyorsa teşhis "rol bulanık"tır.

## Uygulama derinliği 8

## Timeline örneği

1) Kullanıcı kayıt olur, admin soruları gelir. 2) İlk çıktı ertelenir. 3) Terk veya destek. Alternatif iyi yol: 1) örnek veriyle çıktı 2) isteğe bağlı ekip 3) admin checklist. FirstClick suggestion ikinci yolu tarif eder.

## Uygulama derinliği 9

## Marketplace ve çok taraflı ürünler

İki tarafı olan ürünlerde "admin" satıcı hesabı sahibi olabilir. Alıcı son kullanıcıdır. Aynı ayrım geçerlidir: satıcı onboarding'i alıcıyı bloke etmemeli. Davranışsal segmentasyon belgesi ile birlikte okunur.

## Uygulama derinliği 10

## Mikro kopya

İyi kullanıcı: "Taslağı oluştur", "Paylaşım linki kopyala". İyi admin: "Üye rolünü değiştir", "Denetim kaydını indir". Kötü: kullanıcıya "tenant policy enforce et". Suggestion mikro kopyayı role göre ayırır.

## Uygulama derinliği 11

## FirstClick paket seçimi

B2B analizinde son kullanıcı + admin + güvenlik birlikte düşünülür. Yalnızca son kullanıcı persona'sı ile yetinmek enterprise veto'yu kaçırır. Likelihood gerekçesi hangi rolün engellendiğini açıkça söyler.

## Uygulama derinliği 12

## Ölçüm proxy'leri

Son kullanıcı proxy: ilk çıktı olayı. Admin proxy: davet, rol atama, SSO bağlama. İkisini tek "aktivasyon" diye birleştirmek teşhisi bulandırır. FirstClick suggestion hangi proxy'nin kırık olduğunu belirtir.

## Uygulama derinliği 13

## Rol matrisi (özet)

Son kullanıcı: oluştur, düzenle, paylaş (sınırlı), kendi ayarları. Admin: davet, rol, fatura, SSO, audit, silme, workspace ayarları. Billing admin bazen ayrıdır. Corpus bu ayrımı yansıtıyor mu? Yansıtmıyorsa teşhis "rol bulanık"tır.

## Uygulama derinliği 14

## Timeline örneği

1) Kullanıcı kayıt olur, admin soruları gelir. 2) İlk çıktı ertelenir. 3) Terk veya destek. Alternatif iyi yol: 1) örnek veriyle çıktı 2) isteğe bağlı ekip 3) admin checklist. FirstClick suggestion ikinci yolu tarif eder.
