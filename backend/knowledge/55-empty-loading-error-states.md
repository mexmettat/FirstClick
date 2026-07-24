# Boş, yükleme ve hata durumları: güven ve süreklilik

FirstClick oturumlarında drop-off çoğu zaman “mutlu yol”da değil; empty, loading ve error kenar durumlarında olur. Bu üçü birlikte kullanıcının “sistem çalışıyor mu, ben mi yanlış yaptım, ne yapmalıyım?” sorularını cevaplar. Bu dosya kenar durum UX standardıdır. [kb:55-empty-loading-error-states]

## Kapsam

Kapsam: ilk kullanım empty state, filtre sonucu boş liste, skeleton/spinner/progress, zaman aşımı, ağ hatası, 4xx/5xx kullanıcı yüzü, izin hataları, kısmi yükleme (bir widget fail), ve kurtarma CTA’ları. Kapsam dışı: form alan validasyonu ([kb:56-form-design]), arama sıfır sonuç özel desenleri ([kb:53-search-ux] ile çapraz), aha moment stratejisinin tamamı ([kb:02-onboarding-activation]) — burada empty’nin bileşen kalitesi ele alınır.

Heuristic: Her kenar durum (1) ne olduğunu, (2) neden olabileceğini, (3) sıradaki eylemi söylemelidir. Üçünden biri eksikse friction veya confusion yükselir.

## Tanı sinyalleri

### Empty
1. Yalnızca “Henüz veri yok” / “No data” — görev yok.
2. İllüstrasyon var, CTA yok; süs empty.
3. Welcome + boş dashboard; onboardingRisk yüksek.
4. Filtre boşluğu ile ilk empty aynı metin; kullanıcı “veriler silindi sanıyor”.

### Loading
5. Belirsiz spinner, süre tahmini yok; 3+ sn sessizlik performans algısını bozar ([kb:64-performance-perception]).
6. Layout jump: skeleton yok, içerik gelince kayma; yanlış tıklama riski.
7. Sonsuz yükleme: hata ile loading ayrılmıyor; kullanıcı beklemeye mahkûm.

### Error
8. Teknik stack trace veya ham kod (“Error 500”, “ECONNRESET”) son kullanıcıya açık.
9. “Bir şeyler ters gitti” + tek seçenek sayfayı yenile; bağlam kaybı.
10. Form gönderiminde genel hata; hangi alan/neden yok.
11. Yetki hatası suçlayıcı dil (“Yetkiniz yok”) — çözüm yolu (admin’e iste, plana geç) yok.

Olumlu sinyaller: empty’de ne/neden/CTA/örnek; skeleton ile rezerv alan; progress belirleyici işlemlerde; hata mesajında insan dili + korelasyon/istek kodu (destek için) + yeniden dene / geri dön / destek; kısmi hata yalnızca ilgili panelde.

## Persona tepkileri

- **busy-professional**: Loading uzunsa terk eder; empty’de tek net CTA ister. Error’da “ne kadar sürer / kime yazarım” yoksa zaman kaybı olarak kodlar.
- **non-technical**: Teknik hata = kişisel suçluluk veya panik. “Sen yanlış yaptın” dili yıkıcı. Adım adım kurtarma + görsel rehber.
- **skeptical**: Belirsiz hata “gizlenen arıza” algısı. Dürüst durum + bilinen sorun sayfası linki güveni korur. Sahte empty (veri var ama yüklenemedi) en kötü senaryo.
- **price-sensitive**: Error sonrası upgrade’e yönlendirme manipülasyon gibi durur; önce kurtar, sonra plan.
- **student / first-timer**: Empty’yi “bozuk ürün” sanır. Template/örnek + “neden boş?” açıklaması şart.

## İyi ve kötü örnekler

**Kötü empty**
Ortada soluk ikon: “Nothing here yet.” Altında yok. First-timer çıkar.

**İyi empty**
Başlık: “Henüz fatura yok.” Gövde: “İlk faturayı kesince burada listelenir.” CTA: “Fatura oluştur.” İkincil: “Örnek faturayı incele.” Heuristic: tek birincil CTA.

**Kötü loading**
Tam ekran spinner, 8 sn, sonra boş sayfa. Kullanıcı yeniler; çift kayıt riski.

**İyi loading**
Liste satırları skeleton; üstte “Faturalar yükleniyor”. 5 sn sonra hâlâ yoksa “Yenile” + “Sorun sürerse destek”. Uzun işlerde (dışa aktarma) belirleyici progress.

**Kötü error**
Kırmızı kutu: `TypeError: Cannot read property 'map' of undefined`. Non-technical panik; skeptical “amatör” der.

**İyi error**
“Faturalar şu an yüklenemedi. Biraz sonra yeniden dene.” Butonlar: Yeniden dene | Ana sayfaya dön. Küçük yazı: “Destek kodu: 8F2A.” Formda: alan yanında “E-posta geçersiz görünüyor” — genel banner değil.

**Kötü kısmi fail**
Bir API düşünce tüm dashboard beyaz ekran.

**İyi kısmi fail**
Üç widget’tan biri hata paneli gösterir; diğerleri çalışır. Kullanıcı kısmi değer almaya devam eder.

## FirstClick skor etkileri

- **clarity**: Durum dilinin anlaşılırlığı. Teknik jargon clarity↓.
- **adoption**: Empty→CTA yolu aha’ya bağlanıyorsa adoption↑; loading/error’da terk adoption↓.
- **onboardingRisk**: Rehbersiz empty + karşılama = yüksek risk. Hata sonrası veri kaybı riski ayrıca friction high.
- Trust: dürüst hata > sahte başarı. Skeptical personada trust boyutu açıkça etkilenir.
- Timeline: Setup’ta empty friction; kritik işlemde error = high; tekrarlayan loading timeout = performance + friction.

## Eylem kontrol listesi

1. Corpus’taki empty metinlerini alıntıla; CTA var mı diye bak.
2. Filtre boşluğu ile ilk empty’nin metin farkını kontrol et.
3. Loading için skeleton / progress / zaman aşımı davranışı not et.
4. Hata mesajlarını sınıflandır: teknik / genel / eyleme dönük.
5. Yeniden dene’nin çift submit riskini değerlendir — emin değilsen uydurma; “corpus’ta görülmedi” de.
6. Yetki hatalarında çözüm yolu var mı bak.
7. Landing’deki “sorunsuz deneyim” vaadi ile görülen error UX’i karşılaştır.
8. Öneri: ne/neden/sonraki adım üçlüsünü eksik olan duruma uygula.

## Atıf disiplini

- Gözlenen empty/loading/error metinleri: [doc:…] / [web:…].
- Kenar durum kuralları: [kb:55-empty-loading-error-states].
- Form validasyon hataları ayrıysa: [kb:56-form-design].
- Performans algısı: [kb:64-performance-perception].
- “Skeleton dönüşümü artırır” istatistiği uydurma; layout jump ve belirsizlik heuristic’lerini kullan.
- Üründe görülmeyen hata kodunu yazma.

## Analist uygulama notu

Her kenar durum bulgusunu bağımsız chunk olarak yaz: durum tipi (empty|loading|error), alıntı, eksik üçlü öğe (ne/neden/eylem), persona panik/terk riski, skor (clarity|adoption|onboardingRisk|trust). Örnek: “non-technical, ‘Error 500’ fatura kaydında → confusion+panic; öneri insan dili + yeniden dene; onboardingRisk↑.”


## Derin uygulama: kenar durum matrisi

FirstClick kenar durumları bir matriste okur: durum tipi × kullanıcı suçu algısı × kurtarma kalitesi.

| Durum | Kullanıcı kendini suçlar mı? | İyi kurtarma |
| empty ilk | sık (“bozuk mu?”) | görev CTA + neden |
| empty filtre | bazen | filtreleri temizle |
| loading kısa | nadiren | skeleton |
| loading uzun | artar | progress + kaçış |
| error ağ | az | yeniden dene |
| error validasyon | evet | alan + kural |
| error yetki | karışık | kime iste / ne plan |

Bu tablo şablonudur; yüzde iddiası yoktur. Analist her bulguda matris hücresini seçer.

**Boş durum çeşitleri**: İlk kullanım, silinmiş içerik, yetkisiz boş, arama sıfır, başarı sonrası boş (her şey tamam). Aynı illüstrasyonla hepsini karşılamak clarity↓. Filtre boşluğunda “oluştur” CTA’sı yanıltıcıdır — “sonuç yok, filtreyi genişlet” gerekir.

**Yükleme çeşitleri**: İndeterminate spinner kısa işler için; uzun işlerde belirleyici progress veya asenkron “bitince haber ver”. Optimistic UI varsa fail yolu göster ([kb:64-performance-perception]).

**Hata çeşitleri**: Kullanıcı düzeltebilir (şifre), geçici (ağ), kalıcı (yetki), bilinmeyen (5xx). Dil buna göre değişir. Bilinmeyende suçlama yok; destek kodu faydalı olabilir — kod yoksa uydurma.

**Erişilebilirlik**: Hata yalnızca kırmızı border ise a11y kırığı ([kb:58-accessibility]). aria-live ile duyuru corpus’ta görünmezse spekülatif “ekrandan okuyucu OK” yazma; görünen metin kanalını not et.

**Çift gönderim**: Error sonrası “yeniden dene” idempotent değilse fatura/ödeme riski. Corpus’ta garanti yoksa “çift işlem riski değerlendirilmeli” diye yumuşak yaz; kesin bug iddiası atma.

RAG chunk anahtarları: ne-neden-eylem, skeleton, progress, destek kodu, kısmi fail, filtre empty, suçlayıcı dil, timeout.


## Senaryo laboratuvarı: kenar durumda terk

**Senaryo A:** First-timer empty “No data” görür, ürünü bozuk sanır. Tek illüstrasyon, CTA yok. onboardingRisk↑. Öneri: ne/neden/CTA.

**Senaryo B:** Busy-professional export’ta 20 sn spinner, sonra beyaz. Yeniler; çift dosya korkusu. friction high. Öneri: progress + e-posta ile teslim veya net fail.

**Senaryo C:** Non-technical formda stack trace. Panik. clarity↓. Öneri: insan dili + alan hatası.

**Senaryo D:** Skeptical “bir şeyler ters gitti” + yalnızca upgrade CTA. Manipülasyon. trust↓. Öneri: önce kurtar.

**Senaryo E:** Filtre empty = ilk empty metni. Kullanıcı verilerin silindiğini sanır. Confusion. Öneri: “filtre sonucu boş / temizle”.

Kenar durum metinleri de mikro kopya disiplinine girer ([kb:60-microcopy]). “Oopsie!” çocuksu ton B2B busy-professional’da güven kırabilir; aşırı soğuk hukuki dil non-technical’ı yalnız bırakır. Ton ürün sesiyle tutarlı olmalı.


## Operasyonel kontrol: kenar durum QA listesi (analist)

1. Empty metin + CTA. 2. Filtre empty farkı. 3. Skeleton var mı. 4. Uzun iş progress. 5. Hata dili sınıfı. 6. Yeniden dene. 7. Yetki çözüm yolu. 8. Kısmi fail. 9. Teknik sızıntı. 10. Vaad “sorunsuz” drift.

Kenar durumlar mikro kopya, performans algısı ve onboarding’in kesişimidir. Bulguyu tek boyuta indirgeme; birincil boyutu seç (clarity vs onboardingRisk vs trust) ve diğerlerini çapraz atıf ile bağla.
