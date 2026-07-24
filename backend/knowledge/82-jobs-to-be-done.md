# Jobs-to-be-done (yapılacak işler) çerçevesi

Bu belge JTBD yaklaşımını FirstClick persona, mesajlaşma ve aktivasyon analizine bağlar. Amaç özellik listesi yerine kullanıcının ilerletmek istediği işi, tetikleyiciyi ve başarı kriterini teşhis etmektir. Her bölüm RAG için bağımsızdır; JTBD jargonu bilmeyen analist de uygulayabilir.

## Amaç ve kapsam

JTBD, kişinin bir ürünü işe aldığı ilerleme tanımıdır. İlerleme üç katmanda görülebilir: işlevsel (raporu bitirmek), duygusal (kontrol ve utançtan kaçınma), sosyal (yöneticiye veya ekibe iyi görünmek). FirstClick'te JTBD; hero metni, CTA, onboarding ilk görevi, boş durum ve aha moment'in aynı işi mi vaat ettiğini kontrol etmek için kullanılır.

Kapsam dışı: soyut müşteri yolculuğu posterleri, kanıtsız persona öyküleri, "inovasyon tiyatrosu" workshop çıktıları. Kapsam içi: job cümlesi disiplini, tetikleyici, mevcut çözüm ve hayal kırıklığı, büyük ve küçük job ayrımı, rakip işten çıkarma, ödeme job'u, skor ve öneri bağları. Analist corpus'ta job sinyali yoksa uydurmaz; mesajın genel kaldığını söyler.

## Job cümlesi disiplini

İyi job cümlesi şu iskeleti taşır: "X durumunda, Y sonucuna varmak için, Z kısıtıyla bir yol arıyorum." Örnek: "Ay sonu kapanışında, muhasebeye hatasız CSV vermek için, IT ticket açmadan export istiyorum." Bu cümle teşhis, CTA ve onboarding tasarımına doğrudan bağlanır.

Kötü cümle örnekleri: "Kullanıcı verimliliği artırmak ister." "Daha iyi bir deneyim arar." "Modern bir çözüm ister." Bunlar ölçülemez; FirstClick skor gerekçesine dönüşmez. Job, özellik adı değildir. "AI dashboard" bir job değil, aday çözümdür. Job "hangi kararı ne kadar sürede güvenle vermek" olabilir.

Job seviyeleri ayrılmalıdır. Büyük job şirkette veya hayatta anlamlı ilerlemeyi tanımlar: "Raporlamayı güvenilir ve tekrarlanabilir kılmak." Küçük job bugünkü somut adımdır: "Bu sabah filtreyi kaydedip paylaşmak." Landing büyük job'u taşıyabilir; onboarding küçük job'u hemen vermelidir. İkisi kopuksa kullanıcı vaadi okur, ürün içinde işi bulamaz; aktivasyon düşer.

Job cümlesi yazılırken kısıt (Z) kritiktir. Kısıt zaman, yetki, teknik beceri, bütçe, uyum veya cihaz olabilir. "Beş dakikada, telefonda, kart vermeden" gibi kısıtlar FirstClick'te sürtünme teşhisinin omurgasıdır.

## Tetikleyici, mevcut çözüm, hayal kırıklığı

Tetikleyici olay job'u acil kılar: yeni yönetici, denetim tarihi, kampanya haftası, churn artışı, Excel dosyasının kırılması, ekibin büyümesi, rakibin güvenlik açığı haberi. Corpus'ta tetikleyici dili yoksa mesaj genel kalır; yoğun profesyonel ve ekonomik alıcı için zayıf okunur.

Mevcut çözüm çoğu zaman başka bir SaaS değildir. E-posta zinciri, spreadsheet, "birinden sormak", kopyala-yapıştır, danışmanlık saati sık görülür. Kullanıcı ürünü bunları işten çıkarmak için işe alır. "Neden biz" bölümü yalnızca rakip logolarıysa JTBD zayıf demektir; mevcut iş akışına göre geçiş maliyeti anlatılmalıdır.

Hayal kırıklığı ifadeleri teşhiste yüksek değerlidir: "yine yanlış kolon", "yine onay bekliyorum", "yine demo randevusu", "yine fiyat gizli". Landing bu dili yansıtmıyorsa empati boşluğu vardır. Şüpheci persona abartılı vaadi değil, tanınmış acıyı arar.

## Somut örnekler

Örnek A — Eğitim marketplace. Büyük job: bu dönem notunu yükseltecek güvenilir özel dersi hızlı bulmak. Küçük job: uygun hocayla ilk dersi bu hafta planlamak. Landing "geleceğine yatırım yap" diyorsa duygusal katman var ama işlevsel job belirsizdir. Onboarding önce uzun profil istiyorsa küçük job ertelenir. FirstClick önerisi: hero'yu "bugün uygun hoca bul"a çekmek, ilk CTA'yı arama veya keşfe bağlamak, profil alanlarını sonraya bırakmak.

Örnek B — B2B güvenlik ve uyum aracı. Son kullanıcı job'u: denetim öncesi erişim kanıtını tek yerden çıkarmak. Ekonomik alıcı job'u: riski ve maliyeti yönetime açıklamak. Güvenlik job'u: SSO ve log ile kontrolü kanıtlamak. Tek persona yetmez. ToughQuestions hem "rapor kaç adımda?" hem "yıllık maliyet nasıl okunur?" hem "SSO var mı?" içermelidir.

Örnek C — AI yazım asistanı. Kullanıcının job'u "daha yaratıcı olmak" olmayabilir; "müşteri mailini on dakikada utanç duymadan göndermek" daha gerçektir. Abartılı yaratıcılık vaadi şüpheciyi uzaklaştırır. "Taslak üretir, sen onaylarsın" limiti job ile uyumludur ve güven skorunu destekler.

Örnek D — Analitik ürün. Büyük job: haftalık kararı veri ile almak. Küçük job: hazır bir panodan anomaliyi görmek. Ürün boş panoyla açılıyorsa küçük job yoktur. Empty state'e sektör şablonu ve örnek veri koymak JTBD hizasıdır; "entegrasyon bağla" zorunluluğu job'u bloke eder.

Örnek E — Freemium not uygulaması. Ödeme job'u "sınırsız cihaz senkronu" olabilir; aktivasyon job'u "ilk notu iki tıkta yakalamak"tır. Paywall aktivasyon job'undan önce gelirse adoption düşer. JTBD, paywall zamanlamasını açıklar.

## Tanı soruları

Kullanıcı bu ürünü hangi tetikleyici olaydan sonra işe alır? İşlevsel başarı bir cümlede ölçülebilir mi? Duygusal ve sosyal ilerleme abartılı mı, yoksa dürüst mü? Mevcut çözüm nedir: Excel, e-posta, rakip, manuel süreç? İlk ekran büyük job'u mu çözdürüyor, yoksa hesap ayarını mı? CTA fiili job fiiliyle aynı mı: "Rapor oluştur" versus "Kayıt ol"? Geçiş maliyeti (import, öğrenme, onay) açıkça yönetiliyor mu? Hangi job için ödeme yapılır; hangisi ücretsiz kanca olmalıdır? Veto rolleri farklı job mu taşıyor? Job cümlesi özellik jargonuna mı kaymış? Mobil kısıt job'un parçası mı? Başarısızlık hali (job yarım kalırsa ne olur) ürün dilinde var mı?

## Yanıt kalıpları

Kalıp bir — job ve arayüz hizası. "Job ilk faturayı kesmek; onboarding şirket logosunu yükle ile başlıyor. Küçük job erteleniyor; aha kayması var. Öneri: örnek veri ile fatura önizlemesi, logo sonraya. Adoption baskı altında, onboardingRisk yüksek."

Kalıp iki — job ve mesaj. "Hero özellik listesi; tetikleyici ve başarı yok. Şüpheci ve yoğun profesyonel için zayıf. Öneri: tetikleyici artı süre artı çıktı: denetim haftasında erişim raporu bir tık."

Kalıp üç — çok job çatışması. "Bireysel job self-serve; ekip job'u admin daveti istiyor. İlk yolda ekip zorunluysa bireysel adoption düşer. Öneri: kişisel alan varsayılan, ekip opsiyonel."

Kalıp dört — rakip işten çıkarma. "Kullanıcı Excel'den geliyor; import yok, yalnızca boş pano. Geçiş maliyeti yok sayılmış. Suggestion: CSV içe aktar veya örnek veri."

Kalıp beş — ödeme job'u. "Aktivasyon job'u tamamlanmadan seat paywall geliyor. Price algısı cezalandırıcı; likelihood düşer. Öneri: ilk değeri göster, sonra limit."

## Anti-pattern'ler

Job yerine persona ismi veya demografi koymak. Ölçülemez "daha iyi deneyim" job'u yazmak. Her özelliği ayrı job ilan ederek şişirmek. Yalnızca duygusal sloganla JTBD yaptığını sanmak. Büyük job'u vaat edip küçük job'u ürün içinde saklamak. Ödeme job'unu aktivasyon job'undan ayırmamak. B2B'de yalnızca son kullanıcı job'unu yazmak. Mevcut çözümü hep rakip SaaS sanmak. Job cümlesini pazarlama ekibinin sloganına eşitlemek. FirstClick'te görülmeyen job'u varmış gibi skorlamak.

## FirstClick prompt ve skor etkileri

Prompt iskeleti: tetikleyici, job cümlesi, mevcut çözüm, corpus karşılığı, sürtünme, skor, öneri, citation. Timeline adımları job dilinde yazılır. "Logo yükleme engeli" yerine "fatura önizlemesi engellendi" daha doğrudur çünkü kullanıcı metriğine bağlıdır.

Skor etkileri: Clarity, job dilinin görünürlüğüdür. Adoption, küçük job'a giden adım sayısıdır. Trust, abartısız başarı vaadi ve limit şeffaflığıdır. Price, ödeme job'unun zamanlamasıdır. B2B, veto job'larının toughQuestions'ta görünmesidir. OnboardingRisk, zorunlu ayarlar job'u bloke ediyorsa yükselir. Likelihood, job ile ürün yolu uyumluysa artar; demo-only ve job self-serve ise düşer.

Suggestion önceliği: CTA'yı job fiiline çevir, ilk değeri örnek veriyle göster, geçiş için tek net yol sun, veto job'ları için ayrı kanıt bloğu ekle, paywall'ı ödeme job'una göre kaydır. Her suggestion bir job cümlesine referans verir.

## Aksiyon kontrol listesi

Job cümlesini durum, sonuç, kısıt iskeletiyle yaz. Tetikleyici olayı adlandır. Mevcut çözümü ve hayal kırıklığını not et. Büyük ve küçük job'u ayır. Hero, CTA ve onboarding hizasını kontrol et. Veto rolleri için ayrı job yaz. Özellik listesini job diline çevir. Paywall'ı ödeme job'una göre konumlandır. Geçiş maliyetine bir ekran veya boş durum ayır. Citations ile job iddiasını kanıtla veya yok de. Başarısızlık halini (job yarım) düşün. Sahte "pazar araştırması yüzdesi" ekleme.

## Job haritasının FirstClick timeline'a aktarımı

Timeline, kullanıcının job ilerleyişini adım adım göstermelidir. Her adım için üç alan düşünülür: kullanıcı niyeti, ürünün sunduğu eylem, sürtünme. Niyet "ilk raporu görmek" iken ürün "çalışma alanını adlandır" diyorsa sürtünme etiketlenenir. Bu aktarım, genel "onboarding uzun" yorumundan daha eyleme dönüktür.

İyi timeline cümlesi örneği: "Kullanıcı örnek veriyle anomaliyi görmek ister; sistem önce veri kaynağı bağlama zorunlu kılar; terk riski artar." Kötü cümle: "Kullanıcı kafası karışır." Kafa karışıklığı teşhis değil semptomdur; job engeli teşhistir.

Çok adımlı job'larda ara başarılar işaretlenir. Büyük job tamamlanmadan önce "şablon seçildi", "önizleme görüldü", "paylaşım linki kopyalandı" gibi mikro ilerlemeler adoption diline çevrilir. FirstClick suggestion'ları bu mikro ilerlemeleri açacak şekilde yazılır.

Rekabetçi JTBD okuması: Kullanıcı aynı job için birden fazla çözümü paralel işe alabilir. Corpus'ta "hepsini değiştir" dili varsa geçiş korkusu artar; "Excel yanında çalışır" dili busy ve şüpheci için daha güvenlidir. Bu nüans trust ve adoption'ı birlikte etkiler.

## Sık görülen job–ürün uyumsuzlukları

Self-serve vaat, satış zorunluluğu: Job hemen denemekken tek yol randevu ise likelihood düşer. İçerik job'u, hesap job'u: Kullanıcı içerik ararken önce hesap açmak zorundaysa netlik ve adoption zarar görür. İşbirliği job'u, bireysel kurulum: Davet zorunluysa bireysel ilerleme kırılır. Güven job'u, pazarlama abartısı: Limit gizlenirse şüpheci uzaklaşır. Admin job'u, son kullanıcı onboarding'i: Roller karışır, B2B sürtünmesi artar.

Bu uyumsuzluklar skor gerekçesinde "persona" diye değil "job hizasızlığı" diye yazılmalıdır. Böylece suggestion yanlışlıkla persona posterine değil ürüne yönelir.
