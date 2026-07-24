# Güvenlik gözden geçiren (security reviewer) persona derinliği

Bu belge B2B ve regüle alanlarda güvenlik/uyum rolünün FirstClick okumasını tanımlar. Bu rol çoğu zaman veto hakkına sahiptir; yokluğu veya zayıf sinyaller likelihood'u düşürür. Bölümler bağımsızdır.

## Amaç ve kapsam

Güvenlik gözden geçiren; bilgi güvenliği, IT, uyum veya KVKK sorumlusu olabilir. Davranış: SSO, SCIM, audit log, şifreleme, veri lokasyonu, alt işlemci, penetrasyon özeti, rol bazlı erişim, log tutma süresi sorar. İkna: trust center, dürüst kapsam, net mimari özeti, cevaplanabilir anket. Caydıran: "güvenliyiz" sloganı, belge yokluğu, belirsiz veri akışı, admin/audit yokluğu, aşırı izinli varsayılanlar.

Kapsam dışı: sahte sertifika iddiası, teknik olarak yanlış güvenlik vaadi. Kapsam içi: corpus'ta sinyal arama, yoksa soru üretme, skor etkileri.

## Davranış modeli

Güvenlik önce pazarlama dilini indirger, sonra kanıt arar. Kanıt yoksa formu veya reddi hazırlar. FirstClick özellik uydurmaz: SSO görmediyse "SSO var" demez; toughQuestions'a ekler.

Güvenlik ile şüpheci örtüşür ama odak farklıdır: biri kurumsal risk, diğeri genel kanıt. Güvenlik ile ekonomik alıcı birlikte veto üretebilir.

## Somut örnekler

Örnek A — "Bankacılık düzeyinde güvenlik" sloganı, doküman yok. Trust düşer. Suggestion: sloganı kaldır, somut kontrol listesi veya "sorularınız için güvenlik paketi" CTA.

Örnek B — SSO vaadi landing'de, ürün/docs'ta yok. Çelişki; uydurma devam ettirme.

Örnek C — Herkese admin. Rol ayrımı yok. End-user/admin belgesiyle birlikte yaz.

Örnek D — AI ürünü, veri eğitimi belirsiz. Güvenlik ve şüpheci birlikte. Dürüst veri kullanımı cümlesi iste.

Örnek E — KVKK linki yok, Türkiye müşterisi hedefleniyor. Trust uyarısı.

Örnek F — Audit log yokluğu enterprise satışta. ToughQuestions zorunlu.

## Tanı soruları

SSO/SAML/OIDC sinyali var mı? Audit log ve rol bazlı erişim anlatılıyor mu? Veri lokasyonu/ bölgesi belirtilmiş mi? KVKK/gizlilik erişilebilir mi? Alt işlemci veya altyapı şeffaflığı var mı? "Güvenliyiz" sloganı kanıtsız mı? AI veri kullanımı net mi? Varsayılan izinler aşırı mı? Güvenlik iletişim kanalı var mı? Corpus çelişkisi var mı?

## Yanıt kalıpları

Kalıp 1 — slogan var belge yok. Trust düşür; belge veya soru CTA öner; özellik uydurma.

Kalıp 2 — SSO iddiası çelişkili. Çelişkiyi yaz; doğrulama sorusu ekle.

Kalıp 3 — rol yok. Admin/user ayrımı öner.

Kalıp 4 — AI veri belirsiz. Dürüst kullanım/ saklama cümlesi iste.

Kalıp 5 — KVKK yok. Link ve özet ekle.

Kalıp 6 — sinyal yok. Spekülatif trust yükseltme; toughQuestions listesi üret.

## Anti-pattern'ler

Sertifika uydurmak. SSO yokken var demek. Güvenliği footer'a gizlemek. Sloganla yetinmek. Güvenlik sorularını satışa ertelemek. Aşırı izinli varsayılanı önemsememek. AI veri akışını yok saymak. Veto rolünü champion coşkusuyla ezmek.

## FirstClick prompt ve skor etkileri

Prompt: güvenlik sinyalleri, çelişkiler, eksikler, toughQuestions, trust/B2B skor, mikro aksiyon. PersonaReaction: SSO var mı, veri nerede, kim erişir, log tutuluyor mu, KVKK nasıl?

Skor: Trust birincil; B2B veto; Likelihood belge ve dürüstlükle artar; Clarity jargonsuz güvenlik özeti. Suggestion: trust sayfası, rol/audit, KVKK, AI veri cümlesi, iletişim kanalı — yalnızca corpus'a uygun.

## Aksiyon kontrol listesi

- [ ] Güvenlik sloganlarını kanıtla eşle
- [ ] SSO/audit/rol sinyallerini tara
- [ ] Veri lokasyonu/KVKK kontrol et
- [ ] AI veri cümlesini kontrol et
- [ ] Çelişki varsa yaz
- [ ] Yoksa uydurma; soru üret
- [ ] Varsayılan izin riskini not et
- [ ] Trust skorunu spekülatif yükseltme
- [ ] Champion analizine veto notu ekle
- [ ] Citations doğru seç

## Güvenlik anketi gerçekliği

Birçok kurum SIG veya benzeri anket gönderir. Ürün sitesinde cevap yoksa champion ve satış takılır. FirstClick "anket doldur" demez; görünür güvenlik paketinin eksikliğini teşhis eder.

## Minimum güven sinyalleri

Public fiyat şart değil; public güvenlik özeti enterprise'ta sık beklenir. En az: iletişim, veri işleme özeti, auth yöntemi, rol. Yoksa düşük trust gerekçeli yazılır.

## Timeline

1) Slogan görür. 2) Trust center arar. 3) Bulamaz veya çelişki görür. 4) Veto/soru listesi. Bu sıra B2B likelihood'unu açıklar.

## Varsayılan izin riski

Herkese admin veya public link varsayılanı güvenlik için kırmızı bayraktır. End-user/admin ayrımı burada zorunlu teşhistir. Suggestion: en az ayrıcalıklı varsayılan ve bilinçli yükseltme.

## AI ve veri eğitimi

AI özelliği varsa güvenlik "veri model eğitiminde kullanılır mı, saklama süresi ne, kim erişir" sorar. Belirsizlik trust düşürür. Corpus'ta cevap yoksa uydurma; soru üret.

## Trust center minimumu

En az auth yöntemi, rol, veri özeti, iletişim kanalı. Slogan yetmez. FirstClick "güvenliyiz" metnini kanıtsız bulursa trust'ı spekülatif yükseltmez.

## Tamamlayıcı not

## Varsayılan izin riski

Herkese admin veya public link varsayılanı güvenlik için kırmızı bayraktır. End-user/admin ayrımı burada zorunlu teşhistir. Suggestion: en az ayrıcalıklı varsayılan ve bilinçli yükseltme.

## Tamamlayıcı not

## AI ve veri eğitimi

AI özelliği varsa güvenlik "veri model eğitiminde kullanılır mı, saklama süresi ne, kim erişir" sorar. Belirsizlik trust düşürür. Corpus'ta cevap yoksa uydurma; soru üret.

## Tamamlayıcı not

## Trust center minimumu

En az auth yöntemi, rol, veri özeti, iletişim kanalı. Slogan yetmez. FirstClick "güvenliyiz" metnini kanıtsız bulursa trust'ı spekülatif yükseltmez.

## Saha uygulama notu 1

## AI ve veri eğitimi

AI özelliği varsa güvenlik "veri model eğitiminde kullanılır mı, saklama süresi ne, kim erişir" sorar. Belirsizlik trust düşürür. Corpus'ta cevap yoksa uydurma; soru üret.

## Saha uygulama notu 2

## Trust center minimumu

En az auth yöntemi, rol, veri özeti, iletişim kanalı. Slogan yetmez. FirstClick "güvenliyiz" metnini kanıtsız bulursa trust'ı spekülatif yükseltmez.

## Saha uygulama notu 3

## Varsayılan izin riski

Herkese admin veya public link varsayılanı güvenlik için kırmızı bayraktır. End-user/admin ayrımı burada zorunlu teşhistir. Suggestion: en az ayrıcalıklı varsayılan ve bilinçli yükseltme.

## Saha uygulama notu 4

## AI ve veri eğitimi

AI özelliği varsa güvenlik "veri model eğitiminde kullanılır mı, saklama süresi ne, kim erişir" sorar. Belirsizlik trust düşürür. Corpus'ta cevap yoksa uydurma; soru üret.

## Saha uygulama notu 5

## Trust center minimumu

En az auth yöntemi, rol, veri özeti, iletişim kanalı. Slogan yetmez. FirstClick "güvenliyiz" metnini kanıtsız bulursa trust'ı spekülatif yükseltmez.

## Saha uygulama notu 6

## Varsayılan izin riski

Herkese admin veya public link varsayılanı güvenlik için kırmızı bayraktır. End-user/admin ayrımı burada zorunlu teşhistir. Suggestion: en az ayrıcalıklı varsayılan ve bilinçli yükseltme.

## Saha uygulama notu 7

## AI ve veri eğitimi

AI özelliği varsa güvenlik "veri model eğitiminde kullanılır mı, saklama süresi ne, kim erişir" sorar. Belirsizlik trust düşürür. Corpus'ta cevap yoksa uydurma; soru üret.

## Saha uygulama notu 8

## Trust center minimumu

En az auth yöntemi, rol, veri özeti, iletişim kanalı. Slogan yetmez. FirstClick "güvenliyiz" metnini kanıtsız bulursa trust'ı spekülatif yükseltmez.

## Saha uygulama notu 9

## Varsayılan izin riski

Herkese admin veya public link varsayılanı güvenlik için kırmızı bayraktır. End-user/admin ayrımı burada zorunlu teşhistir. Suggestion: en az ayrıcalıklı varsayılan ve bilinçli yükseltme.

## Saha uygulama notu 10

## AI ve veri eğitimi

AI özelliği varsa güvenlik "veri model eğitiminde kullanılır mı, saklama süresi ne, kim erişir" sorar. Belirsizlik trust düşürür. Corpus'ta cevap yoksa uydurma; soru üret.

## Alt işlemci ve altyapı şeffaflığı

Güvenlik "veri hangi alt işlemcilere gidiyor" diye sorar. Corpus'ta altyapı veya alt işlemci özeti yoksa özellik uydurulmaz; toughQuestions ve suggestion olarak şeffaflık isteği yazılır. Özellikle AI, ödeme ve dosya depolama içeren ürünlerde bu soru sertleşir.

## Olay müdahalesi ve iletişim

"Güvenliyiz" yetmez; bir olayda kimin bilgilendirileceği ve kanıtın nasıl sunulacağı sorulur. Public status veya güvenlik iletişim kanalı yoksa enterprise likelihood baskılanabilir. Analist hukuk prosedürü yazmaz; görünür iletişim eksikliğini işaret eder.

## Kimlik ve oturum hijyeni

SSO yanında oturum süresi, MFA, cihaz yönetimi beklentisi olabilir. Corpus'ta MFA/SSO yoksa var deme. Varsayılan zayıf şifre politikası veya paylaşılan hesap teşviki varsa risk notu düşülür. End-user/admin ayrımı kimlik hijyeniyle doğrudan bağlıdır.

## Çelişki yönetimi

Pazarlama "ISO uyumlu" der, belgede kanıt yoksa çelişki trust'ı düşürür. FirstClick çelişkiyi gizlemez; iddiayı yumuşat veya kanıt ekle suggestion'ı üretir. Sahte sertifika numarası önermek yasaktır.
