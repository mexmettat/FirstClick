# Görüşme sentezi (interview synthesis)

Bu belge kullanıcı görüşmelerini ve komşu kanıtları FirstClick'e taşınabilir bulgulara nasıl dönüştüreceğini anlatır. Amaç alıntı mezarlığı veya persona posteri değil; tekrarlayan sürtünme, iş (job), karar kriteri ve kanıtlı öneridir. Bölümler bağımsızdır.

## Amaç ve kapsam

Sentez, ham notları desene çevirir: ne sık tekrar ediyor, ne aykırı ama kritik, ne analist varsayımı. FirstClick analisti çoğu oturumda ham röportaj kaydına erişmez; ürün corpus'u, yüklenen özetler ve geçmiş analizle çalışır. Kullanıcı röportaj özeti, destek dökümü veya satış itiraz listesi verdiyse sentez disiplini uygulanır. Vermediyse görüşme varmış gibi yazılmaz.

Kapsam: kodlama ve etiketleme, doyma, çelişki çözümü, alıntı kullanımı, B2B çoklu rol, destek ve telemetri ile birleştirme, skor bağları. Kapsam dışı: terapi dili, tek katılımcıdan evrensel sonuç, örneklem yokken sahte nicelik, "kullanıcılar seviyor" gibi yumuşak genellemeler.

## Sentez adımları

Bir — birimleştir. Her notu gözlem, alıntı veya yorum diye ayır. Yorumu kanıt sanma. "Karmaşık geldi" alıntıdır; "onboarding kötü" yoruma kaymış olabilir.

İki — etiketle. Ortak etiketler: job, engel, karar kriteri, güven, fiyat, öğrenme eğrisi, entegrasyon, zaman baskısı, erişilebilirlik, mobil, rol (champion, admin, son kullanıcı, güvenlik).

Üç — desen say. Aynı engel birden fazla kişide veya birden fazla kanıt kaynağında mı görünüyor? Destek bileti ile görüşme aynı etiketi paylaşıyorsa desen güçlenir.

Dört — aykırılıkları sakla. Tek güvenlikçi SSO diye diretmişse B2B'de veto sinyali olabilir. Outlier diye silmek tehlikelidir; etiketleyip rol bağlamına koy.

Beş — hipotez yaz. "X engeli kaldırılırsa Y aktivasyonu artar" biçimi test edilebilir olmalıdır. Slogan hipotez değildir.

Altı — FirstClick eşlemesi. Bulgu, timeline sürtünmesi, skor alanı, suggestion, citation. Eşleme yoksa sentez rapor için kalır, analist çıktısı için işe yaramaz.

Doyma: Yeni görüşmeler yeni etiket üretmiyorsa desene güven artar. Doyma yoksa dil "eğilim" veya "sinyal" olur, "kesin kanıt" olmaz. FirstClick'te abartılı kesinlik anti-pattern'dir.

## Kanıt birleştirme

Görüşme tek kaynak değildir. Destek etiketleri, churn gerekçeleri, satış CRM notları, NPS serbest metin, ürün içi feedback widget, oturum kayıtları (etik kurallarla) birleştirilebilir. Birleştirirken kaynak türü korunur; hepsi "kullanıcı dedi" diye eritilmez.

Öncelik çatışmasında: güvenlik ve uyum veto sinyali, ekonomik itiraz, günlük kullanım sürtünmesi sırası sık kullanılır. Ürün PLG ise günlük sürtünme öne çıkabilir; enterprise satışta veto öne çıkar. FirstClick ürün tipini corpus'tan okur ve önceliği gerekçelendirir.

## Somut örnekler

Örnek A — üç görüşme, aynı engel. Katılımcılar fiyatı görmeden demo istemediklerini, kart istemeden denemek istediklerini, KVKK linkinin kayıp olduğunu söyler. Desen: şüpheci tutum, fiyat görünürlüğü, gizlilik. Landing'de fiyat yok ve KVKK zayıfsa sentez trust ve price skoruna bağlanır. Sahte yüzde yazılmaz; "tekrarlayan itiraz: fiyat görünürlüğü" yazılır.

Örnek B — çelişen sesler. Satış "müşteri SSO istiyor" der; son kullanıcı "SSO geciktiriyor, e-posta ile başlamak istiyor" der. Sentez iki rol ve iki yol üretir. Öneri: e-posta ile başla, SSO'yu admin kurulumuna taşı. Tek yol dayatmak her iki tarafı da incitir; B2B skorunda rol ayrımı ödüllendirilir.

Örnek C — alıntı kötüye kullanımı. Tek kişi "çok karmaşık" demiş; hero'ya "basitlik garantisi" yazılmış. Bu sentez değil, seçici duymadır. FirstClick'te tek alıntıyla skor düşürme; deseni veya arayüz kanıtını iste.

Örnek D — destek ile görüşme birleşimi. Görüşmede export, destek etiketinde CSV yoğun. Güçlü desen. Onboarding'de export yoksa boş duruma "örnek export indir" önerisi somuttur ve adoption'a bağlanır.

Örnek E — zayıf örneklem dürüstlüğü. Tek görüşme ve kısa not var. Analist desen iddia etmez; UI sürtünmesini [kb] kurallarıyla değerlendirir ve "görüşme kanıtı yetersiz" der. Bu, uydurma persona üretmekten iyidir.

## Tanı soruları

Bu bulgu gözlem mi, alıntı mı, analist yorumu mu? Aynı engel kaç farklı kaynakta geçiyor? Karşıt görüş var mı ve veto rolüne mi işaret ediyor? Başarı kriteri katılımcının diliyle mi yazılmış? Fiyat ve güven itirazı özellik isteğinden ayrı tutulmuş mu? Mobil ve erişilebilirlik notları "sonra bakarız" diye atılmış mı? Sentez çıktısı test edilebilir hipotez içeriyor mu? FirstClick corpus'u bu bulguyu doğruluyor mu, çürütüyor mu, sessiz mi? Tek sektöre özel bulgu genel kural diye mi yazılıyor? Alıntı abartısız ve bağlamlı mı? Satış dili ile kullanıcı dili karıştırılmış mı? Önceki analizle aynı desen var mı?

## Yanıt kalıpları

Kalıp bir — desen raporu. "Tekrarlayan engel: zorunlu entegrasyon. Job: örnek veriyle ilk raporu görmek. Öneri: entegrasyonu opsiyonel yap. Adoption ve onboardingRisk etkilenir."

Kalıp iki — kanıt ayrımı. "Satış notu SSO diyor; landing'de SSO yok. Özellik iddia etmiyorum; toughQuestions'a ekliyorum. Trust spekülatif yükseltilmez."

Kalıp üç — rol ayrımı. "Son kullanıcı hız, admin kontrol istiyor. İki başarı metriği var. UI tek hemen başla ise admin kaygısı timeline'a yazılır."

Kalıp dört — zayıf örneklem. "Tek görüşme var; desen iddia etmiyorum. Arayüz sürtünmesini bilgi tabanı kurallarıyla değerlendiriyorum."

Kalıp beş — birleşik kanıt. "Görüşme ve destek aynı CSV engelini gösteriyor; boş durumda export yok. Suggestion: örnek CSV ve net export yolu."

## Anti-pattern'ler

En renkli alıntıyı gerçeğin tamamı sanmak. Katılımcı sayısını abartılı yüzdeye çevirmek. Yorumları gözlem diye kodlamak. Çelişen rolleri ortalama kullanıcıda eritmek. Sentezi persona ismiyle bitirip aksiyonsuz bırakmak. FirstClick'te görüşme yokken görüşme varmış gibi yazmak. Her isteği roadmap maddesi yapmak. Satışın istediği özelliği kullanıcı job'u diye yazmak. Negatif bulguları gizleyip yalnızca övgü sentezlemek. Doyma olmadan evrensel dil kullanmak.

## FirstClick prompt ve skor etkileri

Prompt: kaynak türü, tekrarlayan engel, job, corpus karşılığı, skor, mikro aksiyon, citation. PersonaReaction, katılımcı dilindeki fiilleri korur: "onay beklemeyeyim", "fiyatı göreyim", "kart vermeden bakayım". Bu fiiller CTA ve mikro kopya önerisine dönüşür.

Skor: Trust şeffaflık itirazlarıyla, Clarity jargon şikayetleri arayüzde doğrulanınca, Adoption tekrarlayan kurulum engelleriyle, Price fiyat erişimiyle, Likelihood sentez ile ürün yolu uyumuyla hareket eder. Citations: görüşme veya yüklenen özet varsa doc, genel kural kb, tekrarlayan geçmiş past, canlı site web.

Suggestion önceliği: bir güven ve fiyat şeffaflığı, iki ilk job bloğu, üç ikincil istekler. Her suggestion sentez etiketine bağlanır. Ölçülebilirlik: "basitleştir" yerine "zorunlu alanları üçten aza indir" tercih edilir.

## Aksiyon kontrol listesi

Gözlem, alıntı, yorum ayrımını yap. Etiket sözlüğünü sabitle. Tekrarlayan desenleri listele. Aykırı ama kritik veto sinyalini sakla. Test edilebilir hipotez yaz. Corpus ile doğrula veya yok de. Sahte yüzde yazma. Rol bazlı çelişkileri iki yol olarak çöz. Suggestion'ı desene bağla. Citations türlerini doğru işaretle. Doyma yoksa kesinlik dilini yumuşat. Önceki analizle karşılaştır.

## Sentez çıktı şablonu (FirstClick'e yapıştırılabilir)

Sentez tek sayfada şu bloklarla özetlenir. Blok bir: bağlam ve kaynaklar (kaç görüşme, destek, satış notu; tarih aralığı). Blok iki: tekrarlayan desenler (en fazla beş; her biri etiket, kanıt, şiddet). Blok üç: aykırı veto sinyalleri. Blok dört: job cümleleri (rol bazlı). Blok beş: açık sorular ve eksik kanıt. Blok altı: önerilen FirstClick odakları (skor alanları ve mikro aksiyonlar).

Bu şablon olmadan sentez sohbet notunda kaybolur. Analist, kullanıcı ham not yüklediyse önce şablona sıkıştırır; sonra teşhis yazar. Şablon alanları boşsa doldurmak için uydurma yapılmaz; "bilinmiyor" yazılır.

## Kalite rubriği

Yüksek kaliteli sentez: gözlem ile yorumu ayırır, desenleri çok kaynaktan doğrular, rol çelişkilerini korur, test edilebilir hipotez üretir, FirstClick alanlarına map eder, abartılı yüzde kullanmaz. Düşük kaliteli sentez: en dramatik alıntıyı seçer, her şeyi tek persona yapar, özellik listesi çıkarır, skor gerekçesini yumuşak dil ile doldurur.

FirstClick prompt'unda düşük kaliteli sentez görürse analist bunu düzeltir: "Kaynak zayıf; UI kanıtına dönüyorum" der. Yüksek kaliteli sentezi citations ile güçlendirir ve suggestion önceliğini desene göre dizer.

## Etiket sözlüğü önerisi

job_functional, job_emotional, trigger, barrier_time, barrier_permission, barrier_skill, barrier_trust, barrier_price, criterion_decision, criterion_veto, role_champion, role_economic, role_security, role_end_user, channel_mobile, a11y_need, integration_dependency, proof_needed. Etiketler tutarlı kullanılmazsa RAG geri getirse bile analist çıktısı dağılır. Yeni etiket açmak serbesttir ama eşanlamlı şişirmeden kaçınılır.

## Saha notu: Türkiye bağlamında dil

Görüşme ve destek notlarında katılımcılar sıkça 'fatura', 'KVKK', 'iade', 'havale/EFT', 'müşteri temsilcisi' dilini kullanır. Sentez bu yerli sinyalleri genel 'privacy' veya 'billing' etiketine çevirirken orijinal fiili kaybetmemelidir. FirstClick suggestion mikro kopyasında da aynı dil korunursa güven artar. İngilizce jargonlu sentez, Türkçe ürün corpus'uyla çelişirse clarity uyarısı yazılır.

