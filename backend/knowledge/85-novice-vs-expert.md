# Acemi versus uzman (novice vs expert)

Bu belge aynı üründe farklı yetkinlik seviyelerinin nasıl teşhis edileceğini ve FirstClick skorlarına nasıl yansıyacağını tanımlar. Amaç iki ayrı ürün yapmak değil; varsayılan yol, ilerlemeli açıklama ve kaçış kapılarını doğru kurmaktır. Her bölüm RAG için bağımsızdır.

## Amaç ve kapsam

Novice alan veya araçta yenidir. Jargon risklidir, hata maliyeti yüksek algılanır, örnek ve geri alınabilirlik ister, ilk başarıyı kısa sürede görmezse terk eder. Expert benzer araçları bilmektedir. Kısa yollar, yoğun bilgi, atlanabilir tur, arama, komut paleti, toplu işlem ve derin dokümantasyon ister. Zorunlu eğitim ve yavaş modal akış expert likelihood'unu düşürür.

FirstClick'te corpus tek seviyeye kilitliyse diğer seviye timeline'da kaybeden olarak yazılır. Kapsam: dil katmanları, bilgi mimarisi, onboarding, boş durumlar, hata mesajları, güç özellikleri, docs girişi, seviye geçişi. Kapsam dışı: IQ varsayımları, aşağılayıcı dil, yaş veya unvanla seviye eşlemek, uzmanı tek kahraman yapan elitizm.

## Tasarım ilkeleri

İlerlemeli açıklama: önce işi bitir, sonra kavramı öğret. Novice'e ilk ekranda veri modeli veya API nesnesi anlatılmaz. Expert'e her tıkta uzun tooltip dayatılmaz. Bilgi ihtiyaç anında açılır.

Varsayılanlar novice-güvenli, kaçışlar expert-hızlı olmalıdır. Güçlü varsayılanlar: örnek veri, güvenli limitler, geri alınabilir silme, açık bir sonraki adım. Kaçışlar: skip tour, arama, klavye kısayolları, boş dosya ile başla, yoğun görünüm, CLI veya API girişi.

Dil katmanları ayrılır. Birincil arayüz iş çıktısı dilinde konuşur. Gelişmiş ayarlar ve dokümantasyon teknik dil konuşabilir. Hero'yu API jargonuyla doldurmak novice clarity'yi düşürür; docs'u yalnızca pazarlama dilinde bırakmak expert güvenini zedeler.

Hata mesajları iki ihtiyacı karşılar: ne oldu (düz dil) ve nasıl düzeltilir (somut adım). Expert için hata kodu ikincil satırda verilebilir. Yalnızca kod veya yalnızca özür metni yetmez.

Seviye geçişi: kullanıcı novice başlar, expert olur. Kalıcı başlangıç modu kapatılamıyorsa expert cezalanır. Checklist gizle, yoğun mod, ipuçlarını kapat seçenekleri gerekir.

## Somut örnekler

Örnek A — Analitik. Novice hazır pano ve "bu hafta ne değişti" ister. Expert SQL veya özel metrik ister. Boş SQL editörüyle açılış novice adoption'ı düşürür. Öneri: şablon pano varsayılan; özel sorgu ikinci seviye.

Örnek B — Tasarım aracı. Expert kısayol ve yoğun canvas ister. Zorunlu tur atlanamıyorsa likelihood düşer. Skip tour şarttır.

Örnek C — Geliştirici platformu. Novice çalışan örnek ister; expert SDK, CLI, webhook logu ister. Landing yalnızca slogan ise her iki seviye job bulamaz. Docs girişi expert trust'ını artırır.

Örnek D — Muhasebe. Novice vergi jargonunda panikler. Etiketler iş dilinde olmalı; teknik terim yardımda açılmalı.

Örnek E — Güvenlik ürünü. Novice önce koruma açık; expert policy as code. Varsayılan güvenli politika novice'i korur; editör expert'e açıktır.

Örnek F — Olgunlaşma. Aylar sonra checklist her girişte açılıyorsa expert sürtünmesi birikmiştir. Suggestion: kalıcı gizleme.

## Tanı soruları

Varsayılan ilk ekran hangi seviyeyi varsayıyor? Skip tour var mı? Jargon birincil navigasyonda mı? Boş durum örnek veri sunuyor mu? Gelişmiş özellikler keşfedilebilir mi? Hata mesajı düzeltme adımı içeriyor mu? Klavye, arama veya komut paleti sinyali var mı? Docs seviye seviye mi? Geri alınabilirlik net mi? Toplu işlem veya API sinyali var mı? Zorunlu eğitim self-serve'i öldürüyor mü? İki seviye aynı CTA ile mi çağrılıyor? Checklist kapatılabiliyor mu? Mobilde novice yolu kullanılabilir mi?

## Yanıt kalıpları

Kalıp 1 — novice ezilmesi. İlk ekran gelişmiş ayar yoğun; örnek yok. Öneri: şablonla başlat. Clarity ve adoption risk altında.

Kalıp 2 — expert cezası. Zorunlu tur atlanamıyor. Skip ekle; likelihood artar.

Kalıp 3 — dil. Hero API terimleri; iş çıktısı yok. İş sonucu başlık, teknik altta.

Kalıp 4 — docs. Dokümantasyon girişi yok; expert güveni eksik. Docs linki ekle.

Kalıp 5 — geçiş. Checklist kapatılamıyor. Gizle ve yoğun mod ekle.

Kalıp 6 — hata. Yalnızca kod var. Düz dil artı düzeltme adımı yaz.

## Anti-pattern'ler

Herkesi novice sanıp sürekli modal. Herkesi expert sanıp boş karmaşık arayüz. Aşağılayıcı dil. Expert özelliklerini hiç keşfettirmemek. Novice'i yalnızca demoya mahkûm etmek. Jargonu profesyonellik sanmak. Tek videoyu herkese zorunlu kılmak. Seviyeyi yaş veya unvanla eşlemek. İki seviye için aynı zorunlu sırayı dayatmak. Sahte yeterlilik istatistiği yazmak.

## FirstClick prompt ve skor etkileri

Prompt: varsayılan seviye, kaybeden seviye, UI kanıtı, skor, mikro aksiyon, citation. PersonaReaction novice için "ne yapacağımı bilmiyorum", expert için "bu tur zaman çalıyor" dilini kullanabilir.

Skor: Clarity jargon yerleşimi; Adoption ilk başarı süresi; Trust dürüst limit ve docs; OnboardingRisk zorunlu tur; Likelihood skip ve örnek veri. B2B'de novice son kullanıcı ile expert admin aynı anda olabilir.

Suggestion: örnek veri, skip, ilerlemeli açıklama, arama/komut, hata düzeltmesi, yoğun mod, docs girişi. "Basitleştir" tek başına yetersizdir; neyin varsayılan neyin kaçış olduğu yazılmalıdır.

## Aksiyon kontrol listesi

- [ ] Varsayılan yolu novice-güvenli yap
- [ ] Skip ve hız kaçışları ekle
- [ ] Hero dilini iş çıktısına çek
- [ ] Boş duruma örnek koy
- [ ] Hata mesajına düzeltme adımı yaz
- [ ] Expert için arama, kısayol veya docs girişi sağla
- [ ] Zorunlu turu atlanabilir yap
- [ ] Checklist gizleme / yoğun mod sun
- [ ] Jargonu birincil UI'dan temizle
- [ ] İki seviyeyi aynı zorunlu akışa kilitleme
- [ ] Citations ile UI kanıtını bağla
- [ ] Sahte yeterlilik istatistiği yazma

## Corpus'ta seviye sinyallerinin okunması

Novice sinyalleri: nasıl çalışır, uzun karşılama, zorunlu checklist, sık tooltip, eğitim talep et, demo ile öğren. Expert sinyalleri: API, CLI, klavye, power user, yoğun tablo, boş canvas, webhook, SDK. İkisi birden yoksa ürün tek seviyeye gömülüdür; FirstClick bunu açıkça söyler. İkisi çelişkili sıradaysa (önce API anahtarı, sonra hoş geldin) sıra hatası yazılır. Bu okuma spekülatif psikoloji değil, arayüz sinyal okumasıdır.

## Yoğun profesyonel ile kesişim

Yoğun profesyonel çoğu zaman expert davranışına yakındır ama her expert busy değildir. Skip tur hem busy hem expert için ortaktır. Novice busy olabilir: zamanı azdır ve öğrenmeye tahammülü yoktur; bu durumda örnek veri daha da kritikleşir. FirstClick persona paketinde novice-busy birleşimi görülürse zorunlu eğitim çift cezadır.

## Mikro kopya örnekleri

Novice için iyi: "Örnek raporla başla", "Bunu sonra da değiştirebilirsin", "Silinen öğe yedi gün geri gelir". Novice için kötü: "Pipeline'ı configure et", "Workspace ontology". Expert için iyi: "Kısayollar", "Komut paleti", "API referansı", "Toplu düzenle". Expert için kötü: "Devam etmeden önce bu dört dakikalık videoyu izle". FirstClick suggestion mikro kopyayı bu karşıtlıkla yazar.

## Skor gerekçesi şablonu

"Varsayılan yol [novice/expert] varsayıyor çünkü [UI kanıtı]. Kaybeden seviye [X]; etki [skor alanı]. Mikro aksiyon: [tek değişiklik]. Citation: [kb/doc/web]." Bu şablon persona adını gerekçenin tamamı yapmayı engeller.

## Ek uygulama senaryosu

## Corpus'ta seviye sinyallerinin okunması

Novice sinyalleri: nasıl çalışır, uzun karşılama, zorunlu checklist, sık tooltip, eğitim talep et, demo ile öğren. Expert sinyalleri: API, CLI, klavye, power user, yoğun tablo, boş canvas, webhook, SDK. İkisi birden yoksa ürün tek seviyeye gömülüdür; FirstClick bunu açıkça söyler. İkisi çelişkili sıradaysa (önce API anahtarı, sonra hoş geldin) sıra hatası yazılır. Bu okuma spekülatif psikoloji değil, arayüz sinyal okumasıdır.

## Ek uygulama senaryosu

## Yoğun profesyonel ile kesişim

Yoğun profesyonel çoğu zaman expert davranışına yakındır ama her expert busy değildir. Skip tur hem busy hem expert için ortaktır. Novice busy olabilir: zamanı azdır ve öğrenmeye tahammülü yoktur; bu durumda örnek veri daha da kritikleşir. FirstClick persona paketinde novice-busy birleşimi görülürse zorunlu eğitim çift cezadır.

## Ek uygulama senaryosu

## Mikro kopya örnekleri

Novice için iyi: "Örnek raporla başla", "Bunu sonra da değiştirebilirsin", "Silinen öğe yedi gün geri gelir". Novice için kötü: "Pipeline'ı configure et", "Workspace ontology". Expert için iyi: "Kısayollar", "Komut paleti", "API referansı", "Toplu düzenle". Expert için kötü: "Devam etmeden önce bu dört dakikalık videoyu izle". FirstClick suggestion mikro kopyayı bu karşıtlıkla yazar.
