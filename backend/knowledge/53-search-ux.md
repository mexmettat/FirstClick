# Arama UX: bulma, kurtarma ve sıfır sonuç

FirstClick analisti aramayı “lüks özellik” değil, IA ve navigasyon başarısız olduğunda kurtarma mekanizması olarak okur. Özellikle büyüyen SaaS, marketplace ve içerik ürünlerinde arama kalitesi adoption ve confusion skorlarını doğrudan etkiler. Bu doküman arama UX değerlendirme standardıdır. [kb:53-search-ux]

## Kapsam

Kapsam: global arama girişi, scope (ne içinde aranıyor), öneri/autocomplete, sonuç listesi hiyerarşisi, filtreler, sıfır sonuç durumu, yazım toleransı, klavye erişimi, ve “arama ile oluştur” kısayolları. Kapsam dışı: genel IA ([kb:51-information-architecture]), nav yerleşimi ([kb:52-navigation]), boş durum genel ilkeleri ([kb:55-empty-loading-error-states]) — sıfır sonuç empty state’i burada arama bağlamında ele alınır.

Heuristic: Kullanıcı aramaya başvurduysa genelde zaten kaybolmuş veya acele ediyordur. Arama ikinci şanstır; ikinci şans da başarısızsa leave riski yüksektir (nitel gözlem kuralı, istatistik iddiası değil).

## Tanı sinyalleri

1. **Arama yok veya gömülü**: Yoğun içerikli üründe yalnızca menü ile bulma; busy-professional friction yazar.
2. **Placeholder belirsiz**: “Search…” — ne aranır? Projeler mi, kişiler mi, dokümanlar mı? Scope belirsizliği confusion üretir.
3. **Autocomplete yok / yavaş**: 3+ karakter sonrası sessizlik; performans algısı bozulur ([kb:64-performance-perception]).
4. **Sonuç türü karışık**: Dosya, kişi, ayar, fatura aynı düz listede ikonsuz; non-technical ayrım yapamaz.
5. **Sıfır sonuç çıkmazı**: “No results” ve dur. Alternatif yok: yazım önerisi, kategoriye git, oluştur, destek.
6. **Aşırı filtre duvarı**: Sonuçlardan önce 8 zorunlu filtre; first-timer aramayı bırakır.
7. **Yetki sızıntısı veya aşırı gizleme**: Sonuçlarda erişilemeyen öğeler tıklanınca 403; veya arama hiç yetkili içeriği göstermiyor — ikisi de güven/friction.
8. **Sadece tam eşleşme**: Türkçe ekler, i/ı, İngilizce-Türkçe karışık terimlerde kırılma. TR ürünlerde kritik.
9. **Komut vs içerik karışımı**: “invite” yazınca hem komut hem eski kayıt; semantik ayrım yok.

Olumlu sinyaller: net scope chip’leri (Herkes / Bu proje), tür bazlı gruplu sonuçlar, son aramalar, yazım düzeltme önerisi (“Bunu mu demek istediniz?”), sıfır sonuçta oluştur/CTA, Cmd/Ctrl+K ile açılış, klavye ile sonuç seçimi.

## Persona tepkileri

- **busy-professional**: Arama = hız aracı. Klavye odaklı, recent + kısayol ister. Sonuç yavaşsa ürünü yavaş kodlar. “Ayarlar > Bildirimler” yolunu aramayla bulabilmek adoption’ı kurtarır.
- **non-technical**: Ne yazacağını bilmez. Örnek sorgular (“ör. müşteri adı”) ve kategorili sonuç şart. Boş “No results” panik yaratır.
- **skeptical**: Alakasız veya yetkisiz sonuçlar “sistem rastgele” algısı. KVKK/erişim tutarlılığı aramada da aranır.
- **price-sensitive**: Arama sonuçlarında sürekli upgrade kapıları; içerik varmış gibi görünüp kilitliyse bait hissi.
- **student / first-timer**: Ürün terimlerini bilmez. Eş anlamlılar ve doğal dil (“fatura kes” → fatura oluştur ekranı) aktivasyonu destekler.

## İyi ve kötü örnekler

**Kötü — süs arama**
Üstte arama kutusu var; her sorguda sıfır sonuç veya yalnızca sayfa başlığı eşleşmesi. Kullanıcı menüye döner; arama güveni biter. Analist: “arama dekoratif” diye not düşer.

**İyi — kurtarma araması**
Sonuçlar: İşlemler (komutlar), Kayıtlar, Ayarlar, Yardım makaleleri. “Davet et” hem komut hem yardım. Sıfır sonuçta: “Yeni müşteri oluştur” + “Yardımda ara” + benzer yazımlar.

**Kötü — filtre önce**
Tarih, sahip, etiket, durum, özel alan… hepsi zorunlu; Apply’e basmadan liste boş. First-timer vazgeçer.

**İyi — sonuç sonra daralt**
Önce geniş sonuç, solda/üstte isteğe bağlı facet’ler. Aktif filtre chip olarak kaldırılabilir. Heuristic: progressive filtering.

**Kötü — dil kırılması**
Kullanıcı “müsteri” (ş’siz) yazar; sıfır sonuç. TR klavye ve yazım hataları için tolerans yok.

**İyi — toleranslı eşleme**
Yazım önerisi + fuzzy; “müşteri” önerilir. İngilizce UI etiketleri için TR sorgu eşlemesi (heuristic: synonym map).

## FirstClick skor etkileri

- **clarity**: Scope metni, sonuç grupları, boş sonuç açıklaması. Belirsiz arama clarity’yi düşürür.
- **adoption**: Kaybolmuş kullanıcının göreve dönüş hızı. İyi arama adoption’ı kurtarır; kötü arama ikinci drop-off’tur.
- **onboardingRisk**: İlk oturumda menü + arama ikisi de başarısızsa risk yüksek. First-timer için örnek sorgular riski düşürür.
- Confusion: alakasız sonuç yığını; friction: yavaş/bozuk arama; trust: yetki tutarsızlığı.
- Landing “akıllı arama / AI search” vaadi vs. basit string match → [web:…] çelişkisi.

## Eylem kontrol listesi

1. Corpus’ta arama UI’si var mı? Placeholder ve scope metnini alıntıla.
2. Sonuç türlerinin nasıl ayrıldığını not et (ikon, grup, sekme).
3. Sıfır sonuç ekranını tanımla: yalnızca mesaj mı, CTA var mı?
4. Filtrelerin zorunlu mu isteğe bağlı mı olduğunu işaretle.
5. TR dil/yazım toleransı veya synonym ipucu var mı bak.
6. Klavye kısayolu ve erişilebilir etiket (label) var mı kontrol et ([kb:58-accessibility]).
7. Paywall’lu sonuçların işaretlenme biçimini değerlendir (kilit ikonu + net plan dili).
8. Öneri yazarken yeni özellik uydurma; corpus’ta yoksa “corpus’ta global arama görmedim; IA/nav kurtarma riski” de.

## Atıf disiplini

- Ürün arama davranışı: [doc:…] / [web:…].
- Arama UX kuralları: [kb:53-search-ux].
- Sıfır sonuç empty pattern’i genel empty ile çakışırsa: [kb:55-empty-loading-error-states] + bu dosya.
- “Fuzzy search dönüşümü %X artırır” iddiası yazma; heuristic ve gözlenen sürtünmeyi yaz.
- [past:…] ile önceki “kullanıcı aramada kayboldu” bulgularını bağla.

## Analist uygulama notu

Arama chunk’ı şu kelimeleri taşımalı: scope, autocomplete, sıfır sonuç, facet, fuzzy/yazım, komut vs kayıt. Örnek persona cümlesi: “busy-professional Cmd+K ile ‘bildirim’ arıyor; sonuçlarda yalnızca eski ticket’lar var, Ayarlar yolu yok → adoption kurtarma kaçtı, friction medium.”


## Derin uygulama: arama kalitesi katmanları

FirstClick aramayı üç katmanda okur: giriş (nerede, nasıl açılır), eşleme (ne bulunur), sonuç sonrası (ne yapılır). Bir katman güçlü diğerleri zayıfsa kullanıcı yine terk eder.

**Giriş katmanı**: Global arama üst barda mı, yalnızca liste sayfalarında mı? Placeholder scope taşıyor mu? Klavye kısayolu var mı? Mobilde arama ikonu thumb zone’da mı? Bu sorular adoption kurtarma potansiyelini belirler.

**Eşleme katmanı**: Tam eşleşme, önek, fuzzy, synonym. TR ürünlerde i/ı, ş/s, İngilizce etiket + Türkçe sorgu sık kırılır. Corpus’ta davranış görünmüyorsa “yazım toleransı gözlenemedi” yaz; fuzzy engine iddiası uydurma. AI search vaadi varsa ([web:…]) ve sonuçlar basit string gibi duruyorsa drift bulgusu.

**Sonuç sonrası**: Sonuç tıklanınca doğru kayda mı, yoksa genel listeye mi? Yetkisiz sonuçta açıklama var mı? Kilitli sonuçta plan dili net mi? Price-sensitive bait hissini burada oku.

**Komut araması**: “create invoice” gibi niyetler komut olarak ayrılmalı. Ayrılmamışsa confusion. Yardım makalesi sonuçları first-timer için kurtarıcı olabilir; yalnızca eski kayıt dönüyorsa eğitim kaçarı kaybolur.

**Analytics tuzağı**: “Arama kullanıldı” vanity olabilir ([kb:65-product-analytics]). FirstClick için önemli olan arama sonrası görevin tamamlanmasıdır; bu olay corpus’ta yoksa spekülatif başarı yazma.

Sıfır sonuç empty’si genel empty’den ayrılır: filtre boşluğu “filtreleri temizle”, ilk empty “oluştur”, arama sıfır “yazımı düzelt / kategoriden git / oluştur”. Üçünü aynı metinle vermek confusion üretir.

RAG chunk anahtarları: scope, autocomplete, facet, sıfır sonuç, fuzzy, synonym, komut vs kayıt, yetki, AI search drift.


## Senaryo laboratuvarı: arama kurtarma

**Senaryo A:** Kullanıcı ayarlarda “fatura numarası biçimi”ni menüde bulamaz; arama “invoice” için sıfır sonuç (UI Türkçe). TR-EN synonym yok. clarity↓. Öneri: synonym / iki dil etiket (heuristic).

**Senaryo B:** Busy-professional Cmd+K ile “davet” yazar; yalnızca eski mesajlar gelir, komut yok. Aktivasyon yolu kaçarı kaçtı ([kb:62-activation]). 

**Senaryo C:** Price-sensitive “rapor” arar; ilk üç sonuç kilitli Pro. Bait hissi. Öneri: kilitli öğelerde net plan + ücretsiz alternatif yol.

**Senaryo D:** Filtreler açıkken arama; kullanıcı sıfır sonuç sanıp veri yok zanneder. Empty metni filtreyi söylemiyor ([kb:55-empty-loading-error-states]).

Arama loglarını FirstClick uydurmaz. Corpus’ta “popüler aramalar” UI’ı varsa alıntıla; yoksa spekülatif sorgu listesi yazma. Öneri tarafında örnek sorgu UI’sı önermek uygundur çünkü gözlemlenebilir bir UX desenidir.


## Operasyonel kontrol: arama QA listesi (analist)

1. Scope metnini olduğu gibi kaydet. 2. İlk üç sonucun türlerini yaz (komut/kayıt/ayar/yardım). 3. Bilerek yazım hatası senaryosu kur — corpus etkileşimli değilse “gözlenemedi” de. 4. Sıfır sonuç CTA’larını listele. 5. Aktif filtre varken arama davranışını not et. 6. Paywall’lu sonuç işaretlemesini alıntıla. 7. Landing “akıllı arama” iddiasını karşılaştır. 8. Persona notuna tek kurtarma cümlesi ekle.

Arama, IA ve nav başarısızlığının barometresidir. Çok arama kullanımı ürün “keşfedilebilir” demek değildir; bazen “kayboluyorlar” demektir ([kb:65-product-analytics]). FirstClick spekülatif arama hacmi yazmaz; UI’da “sık arananlar” yoksa bu yorumu yapma.
