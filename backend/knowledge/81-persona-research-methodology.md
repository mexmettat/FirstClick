# Persona araştırma metodolojisi

Bu belge FirstClick analistinin persona iddiasını nasıl doğrulayacağını, hangi kanıtın yeterli sayılacağını ve skor ile timeline çıktısına nasıl yansıtılacağını tanımlar. Demografik etiketlerden davranışsal kanıta geçişin operasyonel çerçevesidir. Her bölüm RAG için bağımsız okunabilir; başka belgeye zorunlu bağımlılık yoktur.

## Amaç ve kapsam

Persona araştırması, "kim" sorusundan çok "hangi durumda hangi işi hangi kısıtla çözmeye çalışıyor" sorusuna cevap arar. FirstClick bağlamında amaç, ürün corpus'unda (landing, onboarding, fiyat, güvenlik metni, destek dili) varsayılan kullanıcı modeliyle gerçek kullanıcı davranışının çelişip çelişmediğini teşhis etmektir. Bu belge anket şablonu, workshop ajandası veya persona poster üretmez; teşhis, sentez ve skorlama disiplinini verir.

Kapsam dışı bırakılanlar: marka archetipleri, hayali yaş-şehir-hobi portreleri, kanıtsız psikografik öyküler, "ideal müşteri" sloganları. Kapsam içinde olanlar: iş bağlamı, tetikleyici olay, başarı tanımı, engeller, karar ve veto rolleri, kanıt kaynakları, FirstClick çıktı alanlarına eşleme. Analist, corpus zayıfsa boşluğu dürüstçe işaretler; boşluğu persona hikâyesiyle doldurmaz.

## Temel ilkeler

Davranış demografinin önündedir. "Otuz beş yaşında pazarlama müdürü" tek başına prompt gerekçesi veya skor gerekçesi olamaz. Gerekli olan durum cümlesidir: "Kampanya raporunu Cuma öğleden önce CFO'ya yetiştirmek zorunda; mevcut araçta export dört adım ve kolon eşlemesi kırılgan." Bu cümle teşhis üretir; yaş ve unvan üretmez.

Persona bir hipotezdir, gerçek değildir. Hipotez; röportaj, destek kaydı, ürün telemetrisi veya satış itirazlarından en az biriyle desteklenmeden "kesin persona" diye yazılmaz. FirstClick'te birincil kanıt yoksa açıkça "kanıt yetersiz" denir. Özellik veya kullanıcı motivasyonu uydurulmaz. "Muhtemel" ile "görülen" ayrımı korunur.

Tek persona yetmez. B2B paketinde champion, ekonomik alıcı, güvenlik gözden geçiren ve son kullanıcı aynı ürünü farklı risklerle okur. B2C ve PLG ürünlerinde bile ilk kez deneyen ile güç kullanıcı aynı akışta farklı sürtünme görür. Analiz paketinde en az iki bakış açısı birlikte düşünülür; örneğin şüpheci ile yoğun profesyonel, veya son kullanıcı ile admin.

Kanıt hiyerarşisi net tutulur. Birincil kanıt: kullanıcının kendi sözü, kayıtlı iş akışı, ürün içi hata ve çıkış noktaları. İkincil: satış notu, destek bileti özeti, başarı hikâyesi taslağı. Üçüncül: sektör genellemesi ve [kb] kuralları. Citations dizisinde birincil yoksa genel kural [kb] ile sınırlı kalınır; [doc] veya [web] varmış gibi özellik iddia edilmez.

Zaman boyutu unutulmaz. Persona hipotezi ürün, pazar ve rakip değiştikçe eskır. Önceki analiz [past] ile aynı itiraz tekrar ediyorsa bu güçlenen desendir; bir kez yazılmış posterin sonsuza dek geçerli olduğu varsayılmaz.

## Araştırma döngüsü

Adım bir — hipotez yaz. Biçim: "X durumunda Y işini Z kısıtıyla yapan kişi, ilk on saniyede A'yı arar; bulamazsa B davranışına düşer veya terk eder." Hipotez test edilebilir olmalıdır.

Adım iki — kanıt topla. Kaynaklar: landing vaadi, onboarding adımları, fiyat görünürlüğü, güvenlik ve KVKK sinyalleri, boş durum metinleri, hata mesajları, önceki analiz. Her kaynak türü citation etiketiyle tutulur.

Adım üç — çelişki ara. Vaat ile arayüz; persona ihtiyacı ile CTA dili; self-serve vaadi ile yalnızca demo; "ücretsiz dene" ile erken kart isteği; "güvenli" iddiası ile görünür politika yokluğu.

Adım dört — teşhis etiketle. Netlik, güven, aktivasyon, fiyat, B2B uyum, erişilebilirlik, performans. Etiket olmadan skor gerekçesi yazılmaz.

Adım beş — skor ve öneri bağla. Her bulguya bir skor etkisi ve bir mikro aksiyon bağlanır. Mikro aksiyon uygulanabilir ve tek odaklıdır: alan sil, metni kısalt, kanıt linki ekle, adımı opsiyonel yap.

Örnek döngü (SaaS raporlama): Hipotez — yoğun profesyonel hazır şablondan ilk raporu beş dakika içinde çıkarmak ister; zorunlu şirket profili ve yedi alanlık form aktivasyonu düşürür. Kanıt — kayıt formunda zorunlu alan yoğunluğu, hero'da "hızlı kurulum" vaadi. Çelişki — vaat ile form. Teşhis — kayıt sürtünmesi ve ilk değer gecikmesi. Öneri — alanları üçe indir, şablon seçimini hero CTA'ya bağla. Skor — clarity orta, onboardingRisk yüksek, adoption baskı altında.

## Somut örnekler

Örnek A — Yanlış metod. Ekip workshop'ta üç poster üretir: Genç Girişimci, Kurumsal IT, Freelance Tasarımcı. Landing'de tek CTA "Demo talep et", fiyat yok, vaka çalışması yok, güvenlik sayfası yok. Analist posterleri tekrarlar ve skorları demografiye bağlar. Bu anti-araştırmadır; davranış kanıtı yoktur ve FirstClick çıktısı yanıltıcıdır.

Doğru metod aynı ürün için üç durum cümlesi üretir. Bir: kurucu kartla hemen denemek ister, satışı ertelemek istemez. İki: IT güvenlik SSO, audit log ve veri lokasyonu sorar. Üç: operasyon lideri ekip daveti ve rol ayrımı ister. Corpus'ta yalnızca demo formu varsa bir için likelihood düşük kalır; iki ve üç için toughQuestions güvenlik ve rol içerir; suggestion self-serve yol veya en azından fiyat ve güven sinyali eklemeyi önerir.

Örnek B — Destek kayıtlarından persona. Destek etiketlerinde "şifremi unuttum", "fatura indir", "CSV export nerede" yoğunsa persona "teknik olmayan operasyon kullanıcısı" ve "kanıt/fatura ihtiyacı" yönünde güçlenir. Landing jargonu "orchestrate your workflows" ise dil uyumsuzdur. Clarity düşer; öneri fayda dilini iş çıktısına çevirmektir: "Haftalık raporu CSV olarak indir."

Örnek C — Telemetri ile hipotez testi. Onboarding'de üçüncü adımda terk yüksek; üçüncü adım "entegrasyon bağla". Persona hızlı değer arıyorsa entegrasyonu opsiyonel yapıp örnek veriyle aha moment'e gitmek hipotezi test eder. Timeline'a "zorunlu entegrasyon ilk değeri erteliyor" yazılır; suggestion somut ve ölçülebilir kalır.

Örnek D — Satış itirazları. Satış ekibi "fiyatı görmeden ilerleme yok" ve "KVKK soruluyor" diyorsa şüpheci ve ekonomik alıcı sinyalleri güçlenir. Landing'de fiyat gizlisi ve KVKK zayıfsa trust ve price birlikte etkilenir. Bu, "girişimci persona sever yeniliği" gibi yumuşak iddialardan daha değerlidir.

## Tanı soruları

Bu persona iddiası hangi kanıt kaynağına dayanıyor: röportaj, destek, satış, telemetri, yoksa varsayım? Kullanıcının işe alınma (job) cümlesi tek cümlede yazılabiliyor mu? Başarı tanımı ürün metriği mi (kayıt oldu), yoksa kullanıcı metriği mi (rapor gönderildi)? Hangi rol karar verir, kim veto eder, kim günlük kullanır? Landing vaadi ile onboarding ilk ekranı aynı işi mi vaat ediyor? Fiyat ve plan görünürlüğü persona'nın risk eşiğiyle uyumlu mu; şüpheci için gizli fiyat zararlı mı? Güvenlik ve KVKK metni ekonomik alıcıdan önce mi geliyor, yoksa hiç yok mu? Mobil ve erişilebilirlik kısıtları bu persona için kritik mi? Önceki analizde aynı persona itirazı tekrar ediyor mu? Tek persona ile tüm skorlar açıklanıyor; ikinci bakış açısı eksik mi? Hipotez test edilebilir mi, yoksa slogan mı? Corpus'ta çelişen sinyaller var mı ve hangisi birincil kabul edildi?

## Yanıt kalıpları

Kalıp bir — kanıtlı teşhis. "Corpus'ta beş dakikada kurulum vaadi var, ancak kayıt formu dokuz zorunlu alan içeriyor. Yoğun profesyonel hipotezinde ilk değer gecikir; clarity orta, onboardingRisk yükselir. Öneri: alanları üçe indir, şirket bilgilerini sonraya bırak." Citation: web veya doc vaadi, kb onboarding kuralı.

Kalıp iki — kanıt yetersiz. "Persona kurumsal güvenlik varsayımı var ama corpus'ta SSO, audit log veya KVKK sinyali yok. Özellik uydurmuyorum; toughQuestions listesine SSO ve veri lokasyonu ekliyorum. Güven skoru spekülatif yükseltilemez."

Kalıp üç — çoklu rol. "Champion için self-serve deneme uygun görünüyor; güvenlik için trust center yok. Likelihood champion için orta, güvenlik için düşük. Suggestion: güvenlik sorularına hazır tek sayfa ve isteğe bağlı demo."

Kalıp dört — segment çelişkisi. "Öğrenci ve ilk kez deneyen dili var ama fiyat enterprise seat. Mesaj karışık; birincil işe kilitle veya bireysel ve ekip yollarını ayır."

Kalıp beş — geçmiş tekrar. "Önceki analizde de gizli fiyat itirazı var. Desen güçleniyor; price ve trust için öncelikli düzeltme."

## Anti-pattern'ler

Demografik posterleri gerçek kullanıcı sanmak. Tek röportajdan evrensel persona çıkarmak. "Herkes" diyerek persona'yı iptal edip teşhisi de iptal etmek. Rakip sitesindeki persona dilini kopyalamak. FirstClick'te görülmeyen özelliği persona ihtiyacı diye eklemek. Persona adını skor gerekçesinin tamamı yapmak. Workshop çıktısını güncellemeden yıllarca kullanmak. Yalnızca olumlu persona yazıp veto rollerini atlamak. Sahte istatistikle ("yüzde yetmiş böyle") kesinlik üretmek. Persona araştırma sürecini landing metni yazmakla karıştırmak.

## FirstClick prompt ve skor etkileri

Prompt iskeleti şöyle işler: durum, aranan iş, engel, corpus sinyali, çelişki, skor etkisi, mikro öneri, citation. Likelihood, persona ile ürün yolu uyumuna bağlanır; kanıt yoksa düşük veya orta tutulur ve gerekçe "eksik sinyal" olur. PersonaReaction metni durum dilinde yazılır; unvan listesi gibi okunmaz.

Skor eşlemesi: Clarity, dilin iş çıktısına yakınlığıdır. Trust, kanıt, limit şeffaflığı ve KVKK görünürlüğüdür. Adoption ve activation, ilk değere giden adım sayısı ve zorunluluklardır. Price, görünürlük ve persona bütçe riskidir. B2B, rol ayrımı ve güvenlik sorularıdır. OnboardingRisk, zorunlu adımlar, jargon, gizli fiyat ve yalnızca demo yollarında yükselir.

Suggestion kuralları: Her persona sürtünmesi için tek uygulanabilir mikro aksiyon. Birden fazla persona çelişiyorsa öncelik genelde güvenlik ve veto, sonra ekonomik alıcı, sonra günlük kullanıcıdır; ürün tipine göre ayarlanır. Suggestion metni ölçülebilir olmalıdır: "SSO ekle" yerine corpus'ta yoksa "SSO olup olmadığını netleştiren trust maddesi ekle" daha doğrudur.

## Aksiyon kontrol listesi

Persona hipotezini tek durum cümlesiyle yaz. Kanıt kaynağını etiketle. En az iki rol veya iki durum bakış açısı tanımla. Landing, onboarding ve fiyat üçgeninde çelişki tara. Veto rolü için toughQuestions üret. Uydurma özellik yazma; yoksa corpus'ta yok de. Her bulguyu skor alanına bağla. Suggestion'ı tek cümlelik mikro aksiyon yap. Citations'a kb, doc, web, past doğru yerleştir. Persona posterine veya demografiye skor dayandırma. Hipotezi [past] ile karşılaştır. Sahte yüzde ve uydurma araştırma sonucu ekleme.
