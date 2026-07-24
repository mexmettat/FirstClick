# Seyahat sektör playbooku

Bu dosya FirstClick analizinde sektör paketi **seyahat / travel** seçildiğinde ağırlık kazanır. Her bölüm bağımsız RAG parçası olarak retrieval edilebilir; bölüm kendi içinde sektör adını taşır. Uydurma istatistik, dönüşüm oranı veya kesin regülasyon hükmü yazılmaz. Heuristikler açıkça işaretlenir.

## Kapsam ve iş modeli bağlamı (seyahat / travel)

Seyahat ürünleri konaklama, uçuş, tur, deneyim, iş seyahati veya meta-arama olabilir. Gelir komisyon, işaretleme veya abonelik olabilir. Fiyat şeffaflığı, iptal politikası ve güven (doğrulama, yorum) kritiktir. Ev sahibi–misafir iki taraflılığı varsa marketplace sinyalleri de aranır. "En ucuz" kanıtsızsa skeptical toughQuestions.

## İlk izlenim soruları (seyahat / travel)

Ne rezerve ediliyor? Toplam fiyat ne zaman görünüyor? İptal esnekliği? Üyelik zorunlu mu? Mobil rezervasyon kalitesi? Price-sensitive sürpriz ücret; skeptical sahte yorum; busy hızlı checkout ister.

## Onboarding ve aktivasyon (seyahat / travel)

Aktivasyon: ilk arama, kayıtlı seyahat veya rezervasyon. Zorunlu üyelik arama öncesi adoption zayıflatabilir. Boş sonuç alternatif tarih/yer önermeli. Host onboarding ayrı ele alınmalı.

## Fiyat, güven ve uyum uyarıları (seyahat / travel)

Zorunlu ücretlerin son adımda çıkması distrust. İptal özeti görünür olmalı. Kimlik doğrulama gerekçeli. Abartılı "tükendi" stoka bağlı olmalı. Yerel vergi kırılımı.

## Persona tepkileri (seyahat / travel)

Price-sensitive: temizlik/hizmet bedeli. Skeptical: görsel-mekan uyuşmazlığı. Busy: uzun form. Family first-timer: iptal korkusu. Student: filtre yokluğu.

## Drop-off zaman çizelgesi örüntüleri (seyahat / travel)

Arama boş → gizli ücret → üyelik duvarı → 3DS sürtünme → belirsiz voucher. Aşamalar: Search, Results, Checkout, Post-booking.

## Corpus'ta aranacak kanıtlar (seyahat / travel)

Fiyat kırılımı, iptal, yorum, doğrulama, harita, ücretler, üyelik, destek, mobil, host paneli.

## FirstClick skor etkileri (seyahat / travel)

Clarity: rezervasyon nesnesi. Adoption: arama→ödeme sürtünmesi. OnboardingRisk: üyelik/host kurulum. Trust: ücret+iptal+yorum.

## Aksiyon kontrol listesi (seyahat / travel)

1) Toplam fiyatı erken göster. 2) İptal özeti. 3) Üyeliksiz ara. 4) Boş sonuç alternatifleri. 5) Sahte scarcity kaldır. 6) Ücret kırılımı. 7) Net voucher. 8) Destek. 9) Host/guest ayır. 10) Alıntıla.

## Toplam fiyat ve kırılım (seyahat / travel)

Seyahatte gece/kişi başı düşük görünüp toplamın şişmesi klasik distrust pattern'idir. Vergi, temizlik, bagaj, hizmet bedeli erken görünmelidir. FirstClick dönüşüm oranı uydurmaz. "En ucuz" kanıtsızsa toughQuestions. Anlık fiyat değişimi açıklanmalıdır.

## İptal, üyelik ve post-booking (seyahat / travel)

Esnek iptal vaadi istisna listesiyle doluysa çelişki. Zorunlu üyelik arama öncesi adoption zayıflatır. Post-booking voucher/QR belirsizse busy-professional friction. Host onboarding ayrı ağırlıkta ele alınmalı; misafir akışıyla karıştırma.

## Güven ve yorum dürüstlüğü (seyahat / travel)

Sahte scarcity ve tek tip 5 yıldız skeptical için kırmızı bayrak. Harita/pin ile görsel uyumsuzluğu distrust. Destek kanalı yalnızca bot ise first-timer iade korkusunda yalnız kalır — destek varlığını corpus'tan doğrula.

## Fiyat kırılımı ve iptal politikası (seyahat / travel)

Seyahat ürünlerinde gece veya kişi başı düşük fiyat gösterip toplamı son adımda şişirmek klasik distrust pattern'idir. Vergi, temizlik, bagaj, hizmet bedeli ve yerel harç erken görünmelidir. FirstClick dönüşüm oranı uydurmaz. "En ucuz garanti" kanıtsızsa toughQuestions. Esnek iptal vaadi istisna listesiyle doluysa çelişki; kısa özet + detay linki heuristic'tir.

Zorunlu üyelik arama veya sonuç öncesi gelirse adoption zayıflar. Boş sonuç ekranı alternatif tarih/şehir/filtre önermiyorsa drop-off. Post-booking voucher, QR veya check-in talimatı belirsizse busy-professional friction. Host/işletme onboarding'i misafir akışından ayrı timeline olayı olmalıdır.

## Güven, yorum ve scarcity (seyahat / travel)

Tek tip 5 yıldız ve stok foto şüphesi skeptical için kırmızı bayrak. "Son oda" scarcity stok gerçeğine bağlı değilse manipülasyon sinyali. Harita pin ile görsel uyumsuzluğu distrust. Destek yalnızca bot ise first-timer iade kaygısında yalnız kalır. İş seyahati fatura alanları B2B trust etkiler.

## Seyahat skor özeti

Clarity rezervasyon nesnesi, Adoption arama→ödeme, OnboardingRisk üyelik/host kurulum, Trust ücret+iptal+yorum dürüstlüğü. Timeline: Search, Results, Checkout, Post-booking, Host setup.

## Paket, meta-arama ve sadakat (seyahat / travel)

Uçuş+otel paketlerinde bileşen fiyat kırılımı yoksa price-sensitive distrust. Meta-arama "en uygun" sıralaması reklamlı sonuç içeriyorsa etiketlenmelidir; yoksa skeptical toughQuestions. Sadakat puanı vaadi kullanım koşulları gizliyse çelişki. Erişilebilirlik (mobilite ihtiyacı) filtreleri yoksa a11y persona için eksik sinyal — zorunlu özellik iddia etme.

Grup rezervasyonu, çocuk yaş fiyatı ve bağlayan uçuş kuralları mikro kopyada net değilse confusion. Seyahat sigortası upsell'i opt-out zor ise dark pattern. Yerel deneyim/tur iptalinde hava durumu politikası belirsizse first-timer kaygısı artar.

## İş seyahati ve politika motoru (seyahat / travel)

Bleisure/iş seyahati ürünlerinde şirket politikası (kabin sınıfı, otel tavan fiyatı) net değilse economic buyer adoption gecikir. Onay akışı (manager approve) yoksa B2B vaadi zayıf. Fatura/fiş export muhasebe için kritik olabilir. Çalışan self-book ile travel manager paneli karışmamalı. Carbon/offset iddiası kanıtsızsa skeptical toughQuestions — ölçü uydurma.

Kesintisiz seyahat (disruption) yardım hattı vaadi yalnızca SSS ise friction. Lounge/priority add-on sürpriz fiyatı checkout'ta erken gösterilmelidir.

## Analist için örnek bulgu cümleleri (seyahat / travel)

Örnek: "Sonuç kartı '[alıntı]' gece fiyatı gösteriyor, toplam sonra geliyor; price-sensitive distrust; Results; trust↓; toplam+kırılımı erken göster." Örnek: "Arama öncesi üyelik zorunlu; busy friction; Search; adoption↓; üyeliksiz ara." Örnek: "İptal 'esnek' ama istisna listesi uzun; skeptical; Checkout; çelişkiyi özetle."

İyi/zayıf: İyi — toplam fiyat + iptal özeti + üyeliksiz arama + net voucher. Zayıf — sahte scarcity + gizli temizlik ücreti + yalnızca bot destek. Dönüşüm oranı uydurma. Host/guest olaylarını ayır.

## Teşhis soru bankası (seyahat / travel)

1) Toplam fiyat ne zaman görünüyor? 2) Zorunlu ücretler kırılımda mı? 3) İptal özeti kartta mı? 4) Üyeliksiz arama var mı? 5) Scarcity stoka bağlı mı? 6) Yorumlar çeşitlilik gösteriyor mu? 7) Post-booking voucher net mi? 8) Host onboarding ayrı mı? 9) Destek kanalı ne? 10) İş seyahati onay akışı var mı? Varsayım yok.

## Drop-off senaryo matrisi ve skor bağlama (seyahat / travel)

Senaryo A — fiyat hassas gezgin: gece fiyatı düşük, toplam şişik → trust↓. Senaryo B — busy gezgin: üyelik duvarı + uzun form → adoption↓. Senaryo C — aile: iptal belirsiz → first-timer distrust. Senaryo D — host: ağır onboarding → onboardingRisk↑. Dönüşüm oranı yok.

Skor: Clarity rezervasyon nesnesi; Adoption arama→ödeme; OnboardingRisk üyelik/host; Trust kırılım+iptal+yorum dürüstlüğü. Timeline: Search / Results / Checkout / Post-booking / Host setup. Öneriler: toplam fiyat erken, üyeliksiz ara, iptal özeti, voucher netliği, scarcity dürüstlüğü.

## Corpus tarama checklist'i (seyahat / travel)

İşaretle: toplam fiyat; ücret kırılımı; iptal özeti; üyeliksiz arama; scarcity stok bağı; yorum çeşitliliği; voucher/QR; host onboarding; destek kanalı; iş seyahati onay; çocuk fiyatı; erişilebilirlik filtresi. Var/yok/çelişkili. Çelişki: "esnek iptal" vs dar pencere. Dönüşüm oranı yok. Guest/host olaylarını ayır.

## Antipattern ve düzeltme çiftleri (seyahat)

Antipattern → düzeltme çiftleri FirstClick öneri yazımını hızlandırır. Genel slogan → rol+sonuç cümlesi. Aha öncesi sert engel → değeri önce göster. Gizli ücret → erken kırılım. Belirsiz hata → eyleme dönük mikro kopya. Kanıtsız garanti → kaldır veya yöntem ekle. Boş durum → tek CTA + örnek. Vaad-UI çelişkisi → iki alıntıyı yan yana koyup skor düşür. seyahat paketinde bu çiftler yukarıdaki teşhis soruları ve checklist ile birlikte uygulanır; istatistik eklenmez.

## Kapanış: seyahat FirstClick uygulama notu

Seyahat paketinde analist toplam fiyat, iptal, üyelik sürtünmesi ve post-booking netliğini önceliklendirir. Host varsa ayrı onboarding riski yaz. Scarcity ve yorum dürüstlüğünü trust altında tut. Dönüşüm veya doluluk oranı uydurma. Öneriler fiyat kırılımı ve mikro kopya düzeyinde olsun.

## Persona toughQuestions örnekleri (seyahat / travel)

Örnek sorular: "Toplam fiyatı sonuç listesinde görebilir miyim?", "İptal penceresi saat dilimiyle nasıl işler?", "Üyeliksiz rezervasyon var mı?", "Rezervasyon sonrası check-in adımları nerede?". Cevap yoksa sinyal eksik; doluluk veya dönüşüm oranı ekleme.

FirstClick seyahat bulgularında toplam fiyat, iptal ve üyelik sürtünmesini ayrı timeline olaylarına yaz; host ile misafir yollarını karıştırma. Destek kanalı yoksa eksik sinyal notu düş.

Kanıtsız doluluk veya dönüşüm yüzdesi ekleme; yalnızca corpus alıntısı kullan.

## Kullanıcı yolculukları (seyahat / travel)

Seyahat FirstClick analizinde misafir, host ve (varsa) travel manager yolları ayrılır.

**Misafir rezervasyon yolu:** Arama (üyeliksiz tercihen) → sonuç listesi/harita → PDP (toplam fiyat+iptal) → checkout (ücret kırılımı, 3DS) → voucher/QR/check-in → destek/iptal. Drop-off: boş sonuç, gizli ücret, üyelik duvarı, belirsiz voucher, sahte scarcity.

**Host / işletme yolu:** Kayıt → doğrulama → takvim/fiyat → ilk ilan → rezervasyon kabul → payout. Misafir akışıyla karışık onboarding clarity↓.

**İş seyahati yolu:** Politika tavanı → arama filtresi → manager onay → fatura export. Onay yoksa B2B vaadi zayıf.

**Meta-arama yolu:** Karşılaştırma → dış siteye geçiş; reklamlı sıralama etiketi aranır.

Timeline: Search, Results, Checkout, Post-booking, Host setup, Policy approval. Paket (uçuş+otel) bileşen kırılımı ayrı incelenir.

## Güven ve drop-off sinyalleri matrisi (seyahat / travel)

Trust↑: erken toplam fiyat, vergi/temizlik/bagaj kırılımı, iptal özeti, çeşitlendirilmiş yorum, stoka bağlı scarcity, net voucher, insan destek kanalı, host–guest ayrımı, iş seyahati fatura alanları.

Trust↓ / drop-off: gece fiyatı tuzağı, üyelik duvarı, esnek iptal + uzun istisna listesi çelişkisi, tek tip 5 yıldız, görsel–pin uyumsuzluğu, yalnız bot destek, sadakat puanı koşulları gizli, sigorta opt-out zor, "en ucuz" kanıtsız. Dönüşüm veya doluluk oranı uydurma.

Zincir: boş arama → gizli ücret → üyelik → 3DS sürtünme → belirsiz voucher → destek yok.

## Persona çatışmaları (seyahat / travel)

- **Price-sensitive vs zorunlu ücretler:** Düşük gece fiyatı + temizlik/hizmet sonradan → distrust. Toplamı erken göster.
- **Skeptical vs marketing scarcity:** "Son oda" stoksuzsa manipülasyon sinyali; stok bağını ara.
- **Busy vs uzun form / üyelik:** Hızlı checkout ister; zorunlu üyelik adoption↓.
- **Family first-timer vs iptal belirsizliği:** Esnek vaat + istisna labirenti korku üretir; özet kart heuristic.
- **Student vs filtre yokluğu:** Bütçe/öğrenci filtresi yoksa eksik sinyal — pazar payı uydurma.
- **Host vs guest güven:** Host doğrulama ister; guest sürtünmesiz giriş ister. Doğrulama gerekçeli olmalı.
- **Economic buyer (iş) vs bleisure:** Politika motoru yoksa adoption gecikir; carbon iddiası kanıtsızsa toughQuestions.

## Kanıt ve alıntı disiplini (seyahat / travel)

1) Dönüşüm, iptal oranı, "en ucuz" kanıtı, doluluk uydurma.
2) Fiyat çelişkisinde liste fiyatı + checkout toplamını alıntıla.
3) İptal "esnek" ile istisna maddelerini birlikte göster.
4) Scarcity için stok/UI bağını doğrula; yoksa manipülasyon adayı de, yüzde yazma.
5) Destek kanalını corpus'tan doğrula; "muhtemelen bot" spekülasyonu yok — görünen kanalı yaz.
6) Erişilebilirlik filtresi yoksa a11y eksik sinyal; zorunlu özellik iddia etme.

## Somut senaryolar (seyahat / travel)

**Senaryo A — Gece tuzağı:** Kart "₺1.200/gece"; checkout toplamı temizlik+vergi ile belirgin şişer. Price-sensitive; Results→Checkout; trust↓; toplam+kırılım erken.

**Senaryo B — Üyelik duvarı:** Tarih seçmeden e-posta zorunlu. Busy; Search; adoption↓; üyeliksiz ara.

**Senaryo C — Esnek çelişkisi:** "Ücretsiz iptal" + 12 istisna. Skeptical; Checkout; özet+detay.

**Senaryo D — Post-booking belirsiz:** Ödeme OK, voucher/QR yok. Busy; Post-booking; net talimat.

**Senaryo E — Host/guest karışık:** Misafir aramada host takvim API anahtarı soruluyor. Clarity↓; Host setup ayır.

**Senaryo F — Meta reklam:** "En uygun" sıralamada sponsor etiket yok. Skeptical toughQuestions; etiketi ekle.

**Senaryo G — İş onay yok:** B2B "politika uyumlu" vaat, manager approve yok. Economic buyer; Policy approval; onay akışı veya vaadi kırp.

## Skor etkileri derinleştirme (seyahat / travel)

- **Clarity:** Ne rezerve (otel, uçuş, tur, paket)? Host/guest ayrımı.
- **Adoption:** Search→pay sürtünmesi; üyeliksiz arama; boş sonuç alternatifleri.
- **OnboardingRisk:** Zorunlu üyelik, ağır host doğrulama gerekçesiz, 3DS açıklamasız sürtünme.
- **Trust:** Ücret kırılımı, iptal dürüstlüğü, yorum çeşitliliği, scarcity gerçekliği, destek.
- **Tough questions:** En ucuz garanti, carbon ölçü, sahte scarcity, tek tip yıldız.

Post-booking ayrı adoption/trust notu taşıyabilir; checkout başarısı yeterli aha sayılmaz.

## Aksiyon tarifleri (seyahat / travel)

1) **Erken toplam:** Sonuç kartında tahmini toplam veya "toplam ≈" + kırılım tooltip.
2) **İptal özeti:** PDP'de 2–3 satır özet + politika linki; istisnaları gizleme.
3) **Üyeliksiz arama:** Kayıt checkout veya favori anına.
4) **Boş sonuç:** Yakın tarih/şehir/fiyat alternatifleri.
5) **Scarcity dürüstlüğü:** Stok bağlı değilse kaldır veya bağla.
6) **Voucher paketi:** QR, adres, check-in saati, destek linki tek ekran.
7) **Host ayırma:** Ayrı CTA ve timeline.
8) **İş seyahati:** Tavan fiyat filtresi + onay + fatura export.
9) **Meta etiket:** Sponsor/reklamlı sonuçları işaretle.
10) **Sigorta:** Opt-in net; opt-out zor ise dark pattern notu.

## Kenar durumlar (seyahat / travel)

- Paket bileşen kırılımı yoksa price-sensitive distrust.
- Çocuk yaş fiyatı / grup: mikro kopya net değilse confusion.
- Bağlayan uçuş kuralları belirsizse first-timer kaygı — hak oranı uydurma.
- Hava durumu tur iptali politikası yoksa eksik sinyal.
- Lounge/priority add-on sürpriz fiyatı erken göster.
- Disruption yardım hattı yalnız SSS ise friction.
- Harita pin–görsel uyumsuzluğu distrust.
- Yerel vergi kırılımı: vergi hukuku yorumlama yok; UI kırılımı yeterli.

## Genişletilmiş kontrol listesi (seyahat / travel)

( ) Rezervasyon nesnesi net ( ) Toplam fiyat zamanı ( ) Zorunlu ücret kırılımı ( ) İptal özeti ( ) Üyeliksiz arama ( ) Scarcity stok bağı ( ) Yorum çeşitliliği ( ) Voucher netliği ( ) Destek kanalı ( ) Host/guest ayrımı ( ) İş onay/fatura ( ) Meta sponsor etiketi ( ) Paket bileşen kırılımı ( ) Sigorta opt-in ( ) a11y filtre sinyali ( ) Dönüşüm uydurulmadı ( ) Çift alıntılı fiyat çelişkisi. Eksikleri "bulunamadı" yaz.
