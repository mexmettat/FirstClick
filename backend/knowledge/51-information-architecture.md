# Bilgi mimarisi (IA): ürünün zihinsel haritası

FirstClick analisti, bir ürünün bilgi mimarisini değerlendirirken şunu sorar: kullanıcı “şu an neredeyim, nereye gidebilirim, aradığım şey hangi kavram altında?” sorularına corpus’taki ekranlar, menüler ve etiketlerle cevap bulabiliyor mu? Bu doküman, FirstClick bilgi tabanında bilgi mimarisi (information architecture) değerlendirmesinin standart çerçevesidir. [kb:51-information-architecture]

## Kapsam

Bu dosya şu alanları kapsar: içerik gruplama (chunking), etiketleme (labeling), hiyerarşi derinlikleri, görev odaklı vs. özellik odaklı IA, çok rollü ürünlerde rol bazlı görünürlük, ve landing/vaad ile uygulama içi yapı arasındaki tutarlılık. Kapsam dışı: saf görsel hiyerarşi (bkz. [kb:59-visual-hierarchy]), navigasyon bileşen desenleri (bkz. [kb:52-navigation]), arama UX (bkz. [kb:53-search-ux]). Bilgi mimarisi “nerede duruyoruz” sorusudur; navigasyon “nasıl gideriz”, arama “bulamazsam nasıl kurtulurum” sorusudur.

Heuristic: İyi IA, kullanıcının ilk oturumunda 2–3 ana görev için “doğru kapıyı” tahmin etmesini kolaylaştırır. Bu bir ölçüm iddiası değil; FirstClick oturum timeline’ında kaybolma (lost) ve confusion olaylarını okurken kullanılan çalışma hipotezidir.

## Tanı sinyalleri (diagnostic signals)

Corpus’ta şu sinyaller bilgi mimarisi sorununa işaret eder:

1. **Etiket–içerik uyumsuzluğu**: Menüde “Projeler” yazıyor ama ekran “Workspace / Space / Board” karışımı gösteriyor. Analist bunu jargon çelişkisi olarak timeline’a yazar.
2. **Düz hiyerarşi şişmesi**: Üst menüde 8+ eşdeğer ağırlıkta madde. Heuristic: birincil global nav’da 5±2 öğe hedefi (Miller’ın çalışma belleği bağlamında sık anılan bir kuraldır; kesin psikoloji kanıtı olarak değil, IA pratik kuralı olarak kullanın).
3. **Gömülü özellik labirenti**: Kritik görev (fatura kes, ilk rapor üret, üye davet et) üç seviye alt menüde. onboardingRisk yükselir.
4. **Rol karışıklığı**: Admin, üye ve misafir aynı sol menüyü görüyor; yetkisiz tıklamalarda ölü uçlar oluşuyor.
5. **Landing–app drift**: Landing “tek panelden tüm işler” vaat ediyor; app’te işler Settings / Integrations / Billing / Reports’a dağılmış. Vaad–UI çelişkisi [doc:…] veya [web:…] ile alıntılanmalı.
6. **Kategori isimleri ürün jargonu**: “Orchestration”, “Insights Hub”, “Control Plane” gibi etiketler non-technical persona için confusion üretir.
7. **Aynı kavram iki yerde**: “Takım” hem People hem Workspace altında; duplicate paths belirsizlik yaratır.
8. **Boş IA iskeleti**: Sol menü dolu ama her sayfa empty state; yapı var, içerik yok — kullanıcı “kurulmamış ürün” hisseder.

Olumlu sinyaller: görev odaklı gruplar (“Satış”, “Destek”, “Finans”), breadcrumb ile konum bilinci, yeni kullanıcıya sadeleştirilmiş “Başlangıç” görünümü, ileride açılan gelişmiş bölümlerin “Daha fazla” altında toplanması.

## Persona tepkileri

- **busy-professional**: Zaman maliyeti yüksek. IA’da “en sık iş” üstte değilse friction high yazar. Skip tour’u olsa bile yanlış kapılara girmek adoption’ı düşürür. İstediği: bugün yapacağı 1–2 görevin net kapısı.
- **non-technical**: Etiket dili İngilizce veya teknikse panik + confusion. “API Keys” ana nav’daysa ürünü “benim için değil” diye kodlar. Görsel rehber ve Türkçe/düz dil etiket ister.
- **skeptical**: Dağınık IA’yı “ürün olgun değil” sinyali sayar. Aynı özelliğin iki isimle geçmesi güven kırar; sosyal kanıt olsa bile içeride kaybolursa trial’ı bırakır.
- **price-sensitive**: Ücretli özelliklerin IA’da ayrı “Premium” labirentinde gizlenmesi veya tam tersi her kapıda paywall çıkması şüphe üretir. Net sınırlar ister: ücretsiz ne, ücretli ne.
- **student / first-timer**: Kategori anlamını bilmez. “Workspace vs Project vs Board” ayrımı açıklanmadan bırakılırsa drop-off. Template’li örnek IA (örnek proje ağacı) aktivasyonu hızlandırır.

Persona firstImpression veya session notunda IA sorununu yazarken ürün corpus’undaki gerçek menü etiketini alıntıla; genel “kötü menü” deme.

## İyi ve kötü örnekler

**Kötü — özellik odaklı labirent**
Sol menü: Dashboard, Analytics, Automations, Integrations, Workspace Settings, Personal Settings, Billing, Admin, Developer, Changelog. İlk iş (ör. “müşteri kaydı oluştur”) görünür değil. Busy-professional kaybolur; non-technical jargon duvarına çarpar.

**İyi — görev odaklı sadeleştirme**
Sol menü: Ana sayfa, Müşteriler, Teklifler, Faturalar, Raporlar, Ayarlar. Gelişmiş otomasyon Ayarlar > İş akışları altında. Üstte arama + “Yeni …” birincil CTA. First-timer için Ana sayfa’da 3 adımlık checklist.

**Kötü — çift kavram**
Hem “Ekip” hem “Organizasyon” hem “Workspace” aynı nesneyi kastediyor. Dokümantasyon birini, UI diğerini kullanıyor. Citation disiplini: [doc:…] ile [web:…] çelişkisini açık yaz.

**İyi — progressive disclosure**
Yeni hesapta “Basit görünüm”: Ana sayfa, İşlerim, Davet et. 7 gün veya aktivasyon olayından sonra “Raporlar” ve “Entegrasyonlar” açılır veya “Gelişmişi göster” ile kullanıcı kontrolünde açılır. Heuristic: karmaşıklığı zamana yaymak, ilk oturumda gizlemek.

**Kötü — rol körü IA**
Muhasebeci ve satış temsilcisi aynı 12 maddeli menüyü görür; muhasebeci “Pipeline”a, satış “Muhasebe kodları”na girer. Yetki hatası sayfaları boş “403” ile biter.

**İyi — rol veya işe göre varsayılan**
İlk girişte “Rolünüz?” veya davet linkinden gelen rol ile menü filtrelenir. Admin’e ek “Yönetim” grubu; üye menüsünde yok.

## FirstClick skor etkileri

- **clarity**: Etiketlerin anlaşılırlığı ve hiyerarşinin tahmin edilebilirliği. Jargon yoğun IA clarity’yi düşürür.
- **adoption**: Kullanıcı değer üreten göreve ulaşamazsa adoption düşer; IA engeli “ürün yeteneksiz” gibi okunur ama kök neden yapısaldir.
- **onboardingRisk**: İlk başarı yolu IA’da gömülüyse risk yükselir. Empty state + yanlış kapı kombinasyonu klasik yüksek risk pattern’idir.
- Timeline eşlemesi: Landing OK, app’te kaybolma → friction high + confusion; “IA drift” etiketi önerilir.
- Vaad–yapı çelişkisi varsa skor yorumunda [web:…] veya [doc:…] alıntısı zorunlu; uydurma menü öğesi yazma.

Heuristic skor notu: IA tek başına sayısal bir “%X dönüşüm” iddiası taşımaz. Analist, gözlenen sinyalleri (menü sayısı, etiket kalitesi, görev yolu derinliği) nitel olarak skor gerekçesine bağlar.

## Eylem kontrol listesi

1. Ürün corpus’undan birincil navigasyon etiketlerini olduğu gibi çıkar; paraphrase etme.
2. En kritik 3 kullanıcı görevini listele; her biri için tıklama derinliğini say (heuristic: ilk değerde ≤3 tıklama hedefi).
3. Landing/hero vaadi ile app IA gruplarını karşılaştır; drift varsa citation’lı bulgu yaz.
4. Persona başına “yanlış kapı” senaryosu kur (ör. non-technical → Developer menüsü).
5. Duplicate kavramları (Project/Board/Space) tespit et; tek kanonik terim öner.
6. Rol bazlı menü farkı var mı kontrol et; yoksa yetkisiz ölü uçları not et.
7. Progressive disclosure fırsatı öner: yeni kullanıcı sade menü, güç kullanıcı “gelişmiş”.
8. Öneri metnini tek cümlelik eylem + gerekçe formatında yaz (“Menüyü görev adlarıyla yeniden grupla çünkü…”).

## Atıf disiplini

- Ürün menü yapısı: yalnızca [doc:…] veya [web:…] / ekran alıntısı. Corpus’ta yoksa “corpus’ta birincil nav etiketlerini görmedim” de.
- Genel IA kuralı ve heuristic’ler: [kb:51-information-architecture].
- Önceki analizde aynı IA drift’i vardıysa: [past:…].
- İstatistik uydurma: “IA düzeltince dönüşüm %30 artar” yazma. Yerine: “görev yolu kısalırsa adoption gerekçesi güçlenir (heuristic).”
- Kardeş konulara çapraz atıf: navigasyon bileşenleri [kb:52-navigation], arama kurtarma [kb:53-search-ux], dashboard düzeni [kb:54-dashboard-design].

## Analist uygulama notu

Bilgi mimarisi bulgusunu persona tepkisine çevirirken şablon: “[Persona] ‘[alıntılanan etiket]’ altında [görev] arıyor; [N] seviye / yanlış grup nedeniyle [friction|confusion]. Öneri: [kanonik grup + etiket]. Skor: clarity↓ / onboardingRisk↑ gerekçesi IA.” Bu şablon RAG chunk’larında tek başına anlamlı kalacak şekilde her bölümde domain kelimeleri (etiket, hiyerarşi, görev yolu, progressive disclosure) taşır.


## Derin uygulama: IA denetim yöntemi (FirstClick)

FirstClick analisti bilgi mimarisini “güzel menü” estetiğiyle değil, görev tamamlama yolu ile denetler. Corpus’ta ekran görüntüleri, sitemap, sidebar listesi veya ayarlar ağacı varsa bunları kanonik etiket listesine dönüştür. Yoksa “corpus’ta birincil bilgi mimarisi haritasını görmedim” de; hayali menü uydurma.

Görev yolu tablosu (nitel): satırlar kritik görevler, sütunlar “giriş noktası / ara adımlar / çıkmaz”. Çıkmaz = yetki hatası, yakında, boş sayfa, yanlış kategori. Her çıkmaz timeline’da friction veya confusion olarak işlenir. Heuristic: ilk değere giden yolda üçten fazla karar noktası varsa onboardingRisk gerekçesine IA derinliği yazılabilir — bu bir laboratuvar ölçümü değil, okuma kuralıdır.

Kardinalite ve isimlendirme: aynı nesne için birden fazla etiket (Board/Project/Space) hem arama hem destek yükünü artırır. Analist kanonik terim önerirken ürünün landing diline yaklaşır; tamamen yeni bir jargon icat etmez. TR/EN karışımı varsa netlik bulgusuna dil tutarsızlığını ekle.

Çok ürünlü suite: IA’da ürünler arası geçiş “ürün seçici” ile mi, yoksa tek menüde mi karışmış? Karışmışsa busy-professional yanlış üründe iş arar. Marketplace iki tarafında satıcı/alıcı menülerinin ayrımı yoksa [kb:07-marketplace-two-sided] ile çapraz oku.

Değişiklik iletişimi: IA refactor sonrası “her şey yer değiştirdi” hissi retention’ı yaralar ([kb:63-retention]). Corpus’ta changelog veya “yenilik turu” yoksa spekülatif yazma; görünen kaybolma sinyallerini yaz.

RAG chunk anahtarları: etiket, hiyerarşi, görev yolu, progressive disclosure, rol filtresi, landing–app drift, kanonik terim, çıkmaz.
