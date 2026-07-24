# Healthtech sektör playbooku

Bu dosya FirstClick analizinde sektör paketi **healthtech** seçildiğinde ağırlık kazanır. Her bölüm bağımsız RAG parçası olarak retrieval edilebilir; bölüm kendi içinde sektör adını, teşhis sorularını ve skor etkisini taşır. Uydurma istatistik, dönüşüm oranı veya regülasyon kesin hükmü yazılmaz. Heuristikler açıkça heuristic olarak işaretlenir.

## Kapsam ve iş modeli bağlamı (healthtech)

Healthtech randevu, tele-sağlık, klinik iş akışı, giyilebilir veri, semptom günlüğü veya wellness kapsar. Gelir B2C abonelik, klinik lisans veya işlem olabilir. Kritik ayrım klinik iddia ile wellness/yardımcı araç arasındadır. Tanı/tedavi vaadinde FirstClick tıbbi doğruluk kararı vermez; abartı ve kanıt eksikliğini işaretler. Hassas veri nedeniyle gizlilik genel SaaS'tan ağırdır.

Acil durum yönlendirmesi yoksa eksik güvenlik iletişimi notu düşülebilir. Wellness'in klinik gibi konuşması clarity+trust bozar. AI asistanında sınır ve insan yönlendirme aranır.

## İlk izlenim soruları (healthtech)

Klinik mi wellness mı? Teşhis/tedavi dili var mı? Hedef kim? Kanıt somut mu? Veri kimde? Acil uyarı var mı? 'Sınırsız doktor' koşullu mu? Skeptical mucizeye; non-technical jargona; busy klinik yavaş akışa tepki verir. İyi: 'Takip notları — teşhis koymaz'. Zayıf: 'AI doktor, laboratuvarsız teşhis'.

## Onboarding ve aktivasyon (healthtech)

Aktivasyon: randevu, ölçüm senkronu, semptom kaydı, hasta kartı. Uzun anamnez progressive disclosure ister. İzinler özellikten önce gelirse distrust. Rol seçimi klinik B2B'de erken olmalı. Analist tanı önermez.

## Fiyat, güven ve uyum uyarıları (healthtech)

Paket, iptal, 'uzman' tanımı net olmalı. İlaç/cihaz imasında şeffaflık ara. KVKK+sağlık verisi aydınlatma/silme yoksa trust↓. Yabancı uyumluluk logosu açıklamasız zayıf. AI 'tıbbi tavsiye değil' metni UI ile çelişmesin.

## Persona tepkileri (healthtech)

Skeptical: mucize before/after. Price-sensitive: gizli seans. Non-technical: jargon. Busy hekim: form yoğunluğu. First-timer: veri korkusu. Tıbbi tavsiye yok.

## Drop-off zaman çizelgesi örüntüleri (healthtech)

Landing belirsiz → uzun form → gerekçesiz izin → belirsiz paket → teknik tele sürtünme. Aşamalar: Consent, Form, Appointment. Oran yok.

## Corpus'ta aranacak kanıtlar (healthtech)

Kategori, iddia cümleleri, acil uyarı, gizlilik, kanıt kaynakları, randevu, roller, AI sınırları, fiyat. Çelişki: teşhis koymaz vs tanı dili.

## FirstClick skor etkileri (healthtech)

Clarity: kategori netliği. Trust: iddia alçakgönüllülüğü+gizlilik. OnboardingRisk: form/izin. Adoption: ilk randevu/ölçüm.

## Aksiyon kontrol listesi (healthtech)

1) Sınır yaz. 2) Mucize kırp. 3) Acil uyarı. 4) Form aşamalandır. 5) Veri amacı sade. 6) AI sınır. 7) Rol onboarding. 8) Fiyat koşulu. 9) Kanıt adlandır. 10) Alıntıla.

## Derin teşhis: iddia disiplini (healthtech)

Kesin sonuç iddiaları yüksek distrust adayıdır. İyi dil kayıt/hazırlık odaklıdır. Before/after klinik kanıt yerine geçmez. FirstClick etkinlik kararı vermez.

## Derin teşhis: klinik B2B (healthtech)

Çoklu rol, randevu, not, erişim kontrolü aranır. Ekip vaadi tek rol UI ile çelişir. Hasta portalı vaadi yoksa eksik sinyal.

## Analist yazım şablonu (healthtech)

Örnek: "Hero '[alıntı]' tedavi vaadi; skeptical distrust; trust↓; yardımcı araç diline çek."
## Ek senaryo matrisi (healthtech)

Senaryo A — wellness habit: klinik dil kaçakları; abonelik şeffaflığı. Senaryo B — tele-randevu: paket koşulları, hekim niteliği, acil uyarı. Senaryo C — klinik B2B: roller, audit, hasta portalı. Senaryo D — AI semptom asistanı: sınır metni, insan yönlendirme, abartılı tanı. Her senaryoda tıbbi etkinlik kararı yok; iddia disiplini ve gizlilik var.

## Yanlış pozitif / negatif (healthtech)

Yanlış pozitif: her tıbbi terimi jargon cezası yapmak — hedef hekimse klinik dil uygun olabilir; hasta diline karışıyorsa confusion. Yanlış negatif: gizlilik politikası linki var diye yeterli saymak — izin diyalogunda amaç yoksa boşluk. Mucize before/after'ı 'sosyal kanıt' diye övme.

## Retrieval notları (71)

Bu bölüm FirstClick RAG retrieval için ek bağlam sağlar. Analist sektör paketini seçtiğinde önce iş modeli, sonra ilk izlenim soruları, sonra onboarding/aktivasyon, ardından fiyat-güven-uyum, persona tepkileri, drop-off zaman çizelgesi, corpus kanıt listesi, skor etkileri ve aksiyon listesini sırayla uygular. Her bulgu ürün corpus alıntısına bağlanır; alıntı yoksa 'sinyal bulunamadı' yazılır. Skor gerekçesinde clarityScore, adoptionScore, onboardingRisk ve trust etkileri ayrı cümlelerle belirtilir. Timeline olaylarında aşama adı ve sürtünme türü (confusion, friction, distrust) yer alır. Persona tepkisinde busy-professional, skeptical, price-sensitive, non-technical, student ve first-timer ayrımı yapılır; ürüne uymayan persona zorlanmaz. Kanıtsız yüzde, 'sektör ortalaması' ve kesin yasal hüküm yasaktır. Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor? Ek kontrol: vaad ile UI çelişkisi var mı, empty state sonraki adımı gösteriyor mu, fiyat/limit net mi, gizlilik linki ve amaç metni tutarlı mı, CTA hiyerarşisi tek birincil eylem mi taşıyor?

## Ek uzman notu 1

Healthtech'te cihaz Bluetooth eşleme sürtünmesi aktivasyonu geciktirir. Alternatif manuel giriş heuristic'tir.

## Ek uzman notu 2

Klinik kodlar (ICD vb.) hasta UI'sına sızıyorsa non-technical confusion. Hedef hekimse ayrı yüzey kullan.
