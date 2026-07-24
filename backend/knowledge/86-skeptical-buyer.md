# Şüpheci alıcı persona derinliği

Bu belge şüpheci alıcının FirstClick simülasyonunda nasıl konuşacağını, hangi kanıtı beklediğini ve hangi anti-pattern'lerin likelihood'u düşüreceğini tanımlar. Abartısız, kanıt odaklı ve RAG için bölüm bölüm bağımsızdır.

## Amaç ve kapsam

Şüpheci alıcı vaadi değil kanıtı arar. Abartılı sıfatlar, kaynaksız kalabalık sayıları, gizli fiyat, belirsiz limitler ve sihirli AI dili uzaklaştırır. İkna edenler: ölçülebilir sonuç, dürüst sınırlar, bağlamlı vaka, güvenlik ve gizlilik görünürlüğü, iptal ve deneme koşullarının netliği.

Kapsam: davranış modeli, ikna/caydırma, örnekler, tanı, yanıt kalıpları, skor, checklist. Kapsam dışı: şüpheciyi negatif kişilik sanmak, her itirazı indirimle çözmek, uydurma referans önermek.

## Davranış modeli

İlk tarama: ne vaat ediliyor, kim doğruluyor, ne kadara, ne risk var. Fiyat yoksa sonradan şaşırma korkusu doğar. Süperlatif slogan pazarlama diye indirgenir. İsimsiz sosyal kanıt yok hükmündedir. KVKK veya gizlilik linki yoksa trust baskılanır.

Karar süreci "neden olmasın" listesidir. ToughQuestions bu listeyi üretmelidir: veri nereye gider, iptal nasıl, limit ne, kim kullanıyor, rakip farkı ne, destek gerçek mi. Corpus'ta yoksa uydurulmaz; soru olarak bırakılır.

Şüpheci ile yoğun profesyonel sık birlikte gelir: zaman az, kanıt ister. Şüpheci ile fiyat hassas örtüşebilir ama özdeş değildir. Biri doğruluk, diğeri ödenebilirlik odaklıdır.

## Somut örnekler

Örnek A — Hero "dünyanın en akıllı platformu", logosuz "binlerce müşteri", fiyat iletişime geç. Likelihood düşük; trust düşük; suggestion: süperlatifi kır, bir ölçülebilir sonuç koy, plan görünürlüğü ekle.

Örnek B — AI "sonuç garantisi". Dürüst çerçeve: taslak üretir, sen onaylarsın; zayıf kaldığı durumlar. Trust artar.

Örnek C — Case "verimlilik arttı" bağlamısız. İyi kanıt: sektör, başlangıç, süre, metrik, kısıt. Yoksa toughQuestions.

Örnek D — Kart zorunlu deneme, iptal belirsiz. Şüpheci denemez. Kartı ertele veya iptali netleştir.

Örnek E — Türkiye'de KVKK/fatura dili yok. Footer'da kayıp politika trust uyarısıdır.

## Tanı soruları

Süperlatif veya kanıtsız sayı var mı? Fiyat veya plan görünür mü? İsimli müşteri, vaka veya metrik var mı? Limitler dürüstçe söylenmiş mi? KVKK/gizlilik erişilebilir mi? Deneme ve iptal net mi? AI vaadi abartılı mı? Sosyal kanıt segmente bağlı mı? Demo tek yol mu? Önceki analizde aynı güven itirazı var mı? Rakip karşılaştırması dürüst mü? Destek kanalı görünür mü?

## Yanıt kalıpları

Kalıp 1 — kanıt eksik. İsimsiz sosyal kanıt ve gizli fiyat. Likelihood düşük. Öneri: ölçülebilir sonuç, plan görünürlüğü, KVKK linki.

Kalıp 2 — abartı. Süperlatif hakim. Sloganı iş sonucuna çevir, limit ekle.

Kalıp 3 — AI. Garanti dili var. İnsan onayı ve sınır vurgula.

Kalıp 4 — B2B case. Bağlam yok. Metrik ve süre sor; uydurma sayı yazma.

Kalıp 5 — deneme. Kart zorunlu. Kartı ertele veya iptali netleştir.

Kalıp 6 — çelişki. Landing güven vaat ediyor; ürün içi politika yok. Trust düşür.

## Anti-pattern'ler

Daha yüksek sesle ikna. Sahte logo duvarı. Kanıtsız yüzde. Gizli fiyatı bilgelik sanmak. Her itirazı indirimle çözmek. Şüpheciyi fiyat hassas ile özdeş sanmak. Limitleri gizlemek. KVKK'yı yok saymak. ToughQuestions üretmeden trust yükseltmek. "Biz farklıyız" deyip kanıt koymamak.

## FirstClick prompt ve skor etkileri

Prompt: tarama sırası (vaat, kanıt, fiyat, risk), bulgular, çelişki, likelihood, skor, mikro aksiyon. PersonaReaction: kim kullanmış, fiyat ne, veri nereye, iptal kolay mı?

Skor: Trust birincil; Price görünürlük; Clarity abartısız dil; Adoption deneme sürtünmesi; Likelihood kanıtla birlikte. Suggestion önceliği: abartıyı kır, somut kanıt, fiyat/limit, gizlilik, dürüst trade-off.

## Aksiyon kontrol listesi

- [ ] Süperlatifleri işaretle
- [ ] Kanıt türünü doğrula
- [ ] Fiyat/plan görünürlüğünü kontrol et
- [ ] Limit ve trade-off öner
- [ ] KVKK erişimini kontrol et
- [ ] Deneme/iptal dilini netleştir
- [ ] ToughQuestions doldur
- [ ] Uydurma referans önerme
- [ ] Trust'ı spekülatif yükseltme
- [ ] Şüpheciyi fiyat hassas ile karıştırma
- [ ] [past] tekrarını kontrol et

## Kanıt türleri ve kalite eşiği

Şüpheci için kanıt hiyerarşisi kabaca şöyledir: birincil ölçüm ve bağlamlı vaka; ikincil isimli referans ve şeffaf limit; üçüncül genel övgü. "Müşterilerimiz seviyor" üçüncül bile sayılmaz. FirstClick suggestion kanıt eklerken türü belirtir: metrik mi, isim mi, politika mı? Tür belirsizse "sosyal kanıt ekle" yerine "bağlamlı bir sonuç cümlesi ekle" yazılır.

## Şüpheci timeline örneği

1) Hero abartıyı görür, güveni düşer. 2) Fiyat arar, bulamaz. 3) Footer'da politika arar, zayıf bulur. 4) Demo formuna gelmeden çıkar veya toughQuestions biriktirir. Bu sıra skor gerekçesine doğrudan map edilir; "genel olarak şüpheci" diye özetlenmez.

## B2B komitede şüpheci ses

Champion heyecanlı olsa bile şüpheci ses ekonomik alıcı veya güvenlikten gelebilir. Analiz yalnızca champion persona'sı ile yetinirse veto kaçırılır. ToughQuestions komiteyi temsil etmelidir. Özellik yoksa soru sor; var gibi yazma.

## Mikro kopya düzeltmeleri

Kötü: "Devrim niteliğinde", "rakipsiz", "garantili başarı". İyi: "Şu işi şu kadar adımda bitirir", "Şu plan şu limiti içerir", "Veri şu bölgede tutulur (corpus'ta varsa)", "İptal hesap ayarından yapılır". Corpus'ta olmayan iddiayı mikro kopyaya yazma.

## Ek uygulama senaryosu

## Kanıt türleri ve kalite eşiği

Şüpheci için kanıt hiyerarşisi kabaca şöyledir: birincil ölçüm ve bağlamlı vaka; ikincil isimli referans ve şeffaf limit; üçüncül genel övgü. "Müşterilerimiz seviyor" üçüncül bile sayılmaz. FirstClick suggestion kanıt eklerken türü belirtir: metrik mi, isim mi, politika mı? Tür belirsizse "sosyal kanıt ekle" yerine "bağlamlı bir sonuç cümlesi ekle" yazılır.

## Ek uygulama senaryosu

## Şüpheci timeline örneği

1) Hero abartıyı görür, güveni düşer. 2) Fiyat arar, bulamaz. 3) Footer'da politika arar, zayıf bulur. 4) Demo formuna gelmeden çıkar veya toughQuestions biriktirir. Bu sıra skor gerekçesine doğrudan map edilir; "genel olarak şüpheci" diye özetlenmez.

## Ek uygulama senaryosu

## B2B komitede şüpheci ses

Champion heyecanlı olsa bile şüpheci ses ekonomik alıcı veya güvenlikten gelebilir. Analiz yalnızca champion persona'sı ile yetinirse veto kaçırılır. ToughQuestions komiteyi temsil etmelidir. Özellik yoksa soru sor; var gibi yazma.

## Ek uygulama senaryosu

## Mikro kopya düzeltmeleri

Kötü: "Devrim niteliğinde", "rakipsiz", "garantili başarı". İyi: "Şu işi şu kadar adımda bitirir", "Şu plan şu limiti içerir", "Veri şu bölgede tutulur (corpus'ta varsa)", "İptal hesap ayarından yapılır". Corpus'ta olmayan iddiayı mikro kopyaya yazma.

## Ek uygulama senaryosu

## Kanıt türleri ve kalite eşiği

Şüpheci için kanıt hiyerarşisi kabaca şöyledir: birincil ölçüm ve bağlamlı vaka; ikincil isimli referans ve şeffaf limit; üçüncül genel övgü. "Müşterilerimiz seviyor" üçüncül bile sayılmaz. FirstClick suggestion kanıt eklerken türü belirtir: metrik mi, isim mi, politika mı? Tür belirsizse "sosyal kanıt ekle" yerine "bağlamlı bir sonuç cümlesi ekle" yazılır.

## Ek uygulama senaryosu

## Şüpheci timeline örneği

1) Hero abartıyı görür, güveni düşer. 2) Fiyat arar, bulamaz. 3) Footer'da politika arar, zayıf bulur. 4) Demo formuna gelmeden çıkar veya toughQuestions biriktirir. Bu sıra skor gerekçesine doğrudan map edilir; "genel olarak şüpheci" diye özetlenmez.

## Ek uygulama senaryosu

## B2B komitede şüpheci ses

Champion heyecanlı olsa bile şüpheci ses ekonomik alıcı veya güvenlikten gelebilir. Analiz yalnızca champion persona'sı ile yetinirse veto kaçırılır. ToughQuestions komiteyi temsil etmelidir. Özellik yoksa soru sor; var gibi yazma.

## Ek uygulama senaryosu

## Mikro kopya düzeltmeleri

Kötü: "Devrim niteliğinde", "rakipsiz", "garantili başarı". İyi: "Şu işi şu kadar adımda bitirir", "Şu plan şu limiti içerir", "Veri şu bölgede tutulur (corpus'ta varsa)", "İptal hesap ayarından yapılır". Corpus'ta olmayan iddiayı mikro kopyaya yazma.

## Ek uygulama senaryosu

## Kanıt türleri ve kalite eşiği

Şüpheci için kanıt hiyerarşisi kabaca şöyledir: birincil ölçüm ve bağlamlı vaka; ikincil isimli referans ve şeffaf limit; üçüncül genel övgü. "Müşterilerimiz seviyor" üçüncül bile sayılmaz. FirstClick suggestion kanıt eklerken türü belirtir: metrik mi, isim mi, politika mı? Tür belirsizse "sosyal kanıt ekle" yerine "bağlamlı bir sonuç cümlesi ekle" yazılır.

## Ek uygulama senaryosu

## Şüpheci timeline örneği

1) Hero abartıyı görür, güveni düşer. 2) Fiyat arar, bulamaz. 3) Footer'da politika arar, zayıf bulur. 4) Demo formuna gelmeden çıkar veya toughQuestions biriktirir. Bu sıra skor gerekçesine doğrudan map edilir; "genel olarak şüpheci" diye özetlenmez.
