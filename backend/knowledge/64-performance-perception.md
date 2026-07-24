# Performans algısı: hız, beklenti ve bekleyiş UX’i

FirstClick performansını yalnızca laboratuvar milisaniyesiyle değil, kullanıcının “ürün hızlı mı yavaş mı?” yargısıyla okur. Algı; skeleton, progress, iyimser UI ve ağ dürüstlüğüyle şekillenir. Bu dosya performans algısı standardıdır. [kb:64-performance-perception]

## Kapsam

Kapsam: ilk boyama algısı, etkileşim gecikmesi, spinner vs skeleton, uzun işler (export, import), iyimser güncellemeler, zaman aşımı iletişimi, mobil/zayıf ağ, ve “yıldırım hızında” vaadi ile gerçek bekleyiş çelişkisi. Kapsam dışı: Lighthouse skor üretmek, backend optimizasyon reçetesi, güvenlik. Teknik borç uydurma. Ölçüm iddiası yoksa nitel gözlem yaz.

Heuristic: Belirsiz bekleyiş, aynı süreli açıklanmış bekleyişten daha uzun hissedilir (yönsel psikoloji kuralı; kesin ms eşiği uydurma). Kullanıcıya ne olduğunu söyle.

## Tanı sinyalleri

1. **Sessiz boşluk**: Tık sonrası 2–3+ sn tepki yok; kullanıcı tekrar tıklar (çift submit riski).
2. **Sonsuz spinner**: Hata ile loading ayrılmıyor ([kb:55-empty-loading-error-states]).
3. **Layout jump**: İçerik gelince buton kayar; yanlış tıklama.
4. **Ağır ilk ekran**: Hero video + çok widget; busy-professional “ağır” der — ölçüm yoksa “ağır görünüm” de.
5. **İyimser UI yok**: Her kayıt full-page reload hissi.
6. **Uzun işte progress yok**: Export “hazırlanıyor…” belirsiz.
7. **Vaad drift**: “Anında / real-time” ama her yerde spinner.
8. **Mobilde daha kötü**: Desktop kabul, mobil terk ([kb:57-mobile-ux]).
9. **Animasyon maliyeti**: Süs hareketleri etkileşimi geciktiriyor gibi; reduced-motion yok ([kb:58-accessibility]).
10. **Ödeme/onay belirsizliği**: Para işleminde sessizlik trust krizidir.

Olumlu sinyaller: anında hover/aktif durum, skeleton, buton loading state, belirleyici progress, “hala çalışıyor” ara mesajı, başarısızlıkta net hata, kritik yolda hafif ilk yük, iyimser liste ekleme (geri alınabilir).

## Persona tepkileri

- **busy-professional**: Yavaş = pahalı. 10 sn’lik belirsiz bekleyiş leave. Süre tahmini ister.
- **non-technical**: Sessizlik = “bozuldu / ben bozdum”. Metinli durum şart.
- **skeptical**: “Anında” vaadi kırılınca tüm iddialar şüpheli. Ödeme gecikmesi güven yıkımı.
- **price-sensitive**: Yavaş ücretsiz plan + hızlı ücretli = cezalandırma hissi (görülürse yaz; uydurma).
- **student / first-timer**: İlk izlenimde ağırlık onboardingRisk↑; aha’ya giden yol yavaşsa aktivasyon düşer.

## İyi ve kötü örnekler

**Kötü tık**
“Kaydet” → 4 sn beyaz ekran → aynı form. Kullanıcı üç kez basar.

**İyi tık**
Buton disabled + “Kaydediliyor”; başarı toast; hata olursa alan geri açılır.

**Kötü liste**
Boşluk → aniden 50 satır; scroll zıplar.

**İyi liste**
Skeleton satırlar; stabil layout; “50 müşteri yüklendi”.

**Kötü export**
“Hazırlanıyor” 30 sn; sonra sessiz fail.

**İyi export**
Progress veya “büyük dosya, e-posta ile gelecek”; tamam/fail net; yeniden dene.

**Kötü vaad**
Landing: “Real-time collaboration.” App: her tuşta 1 sn gecikme + “saving…”.

**İyi dürüstlük**
“Değişiklikler kaydedildi” / “Bağlantı zayıf — tekrar denenecek.”

## FirstClick skor etkileri

- **clarity**: Durum mesajları ve bekleyiş dili. Sessizlik clarity↓.
- **adoption**: Yavaş kritik yol adoption↓; aha gecikir.
- **onboardingRisk**: İlk oturumda ağır/ boğuk deneyim risk↑.
- Trust: ödeme ve veri kaybı belirsizliği. Friction: çift submit, jump.
- Performans lab skoru uydurma; algı ve UI durumlarını yaz.

## Eylem kontrol listesi

1. Kritik tıklamalarda geri bildirim var mı (loading/disabled) bak.
2. Skeleton vs boş spinner ayrımını not et.
3. Uzun işlerde progress/e-posta vaadi var mı kontrol et.
4. Landing hız iddialarını alıntıla; UI bekleyişiyle karşılaştır.
5. Mobil kritik yolu ayrı değerlendir.
6. Çift submit riskini işaretle.
7. Ödeme/onay akışında sessizlik var mı bak.
8. Öneri: durum metni, skeleton, progress — “sunucuyu değiştirin” gibi spekülatif altyapı yazma.

## Atıf disiplini

- Gözlenen bekleyiş UX: [doc:…] / [web:…] / oturum notu.
- Algı standardı: [kb:64-performance-perception]; kısa not [kb:45-performance].
- Kenar durumlar: [kb:55-empty-loading-error-states].
- “LCP 2.5 sn olmalı” gibi kesin eşikleri ölçüm yoksa dayatma diye sunma; sektör pratik heuristic’i diye etiketle.
- Uydurma ms / % iyileştirme yok.

## Derin uygulama: algıyı yönetmek vs hızı gizlemek

İyimser UI güçlü bir algı aracıdır ama dürüstlük şart. Mesaj “gönderildi” görünüp sonra fail olursa skeptical trust↓. Heuristic: iyimser güncellemede kolay geri al / hata düzeltme yolu göster.

Öncelikli yol hafifletme: onboarding ve aha ekranı marketing blogundan daha kritiktir. Analist “tüm site yavaş” demektense hangi görevin yavaş hissettirdiğini yazar.

Beklenti ayarı: “Bu 1–2 dakika sürebilir” doğruysa öfke azalır; yanlış süreyse öfke artar. Corpus’ta süre yoksa uydurma.

Çoklu widget dashboard’da waterfall yükleme: bazı paneller dolarken biri spinner kalabilir — kısmi değer iyi algıdır ([kb:54-dashboard-design]). Hepsinin tek spinner’da beklemesi kötü algı.

## Analist uygulama notu

Performans chunk: akış (kayıt|kaydet|export|dashboard), algı sorunu (sessizlik|jump|sonsuz spinner|vaad drift), persona, skor. Örnek: “busy-professional kaydette  sessiz 5 sn → friction high adoption↓; öneri buton loading + toast.”


## Senaryo laboratuvarı: yavaş hissi

**A:** Kaydet sessiz 5 sn. Çift tık. friction. Öneri: loading state.

**B:** “Anında” vaadi + sürekli spinner. Drift trust↓.

**C:** Export belirsiz 40 sn. Busy-professional terk.

**D:** Layout jump. Yanlış tıklama.

**E:** Ödeme sessizliği. Skeptical panic.

## Operasyonel kontrol
Tık geri bildirimi, skeleton, uzun iş progress, vaad drift, mobil, çift submit, ödeme sessizliği, kısmi yükleme. ms uydurma.


## Karar çerçevesi: süre mi, belirsizlik mi?

Kullanıcı öfkesi çoğu zaman ham süreden değil belirsizlikten gelir. 8 saniyelik “Faturalar yükleniyor — büyük hesaplarda biraz sürebilir” , 4 saniyelik sessiz boşluktan daha iyi hissedilebilir — bu yönsel bir heuristic’tir, garanti edilen psikoloji kanunu diye sunulmaz.

Kritik yolları ayır: kimlik doğrulama, kaydetme, ödeme, aktivasyon artefaktı üretimi. Bu yollarda sessizlik trust + friction üretir. Changelog sayfasının yavaşlığı daha düşük şiddettedir. Analist “site genelinde yavaş” yerine yol bazlı yazar.

İyimser UI dürüstlükle gelir. “Gönderildi” sonrası fail, skeptical için vaad kırılmasıdır. Geri al / düzelt yolu gösterilmelidir. Çift submit, algısal gecikmenin yan etkisidir; buton state’i hem UX hem veri bütünlüğü meselesidir.

Vaad dili: “real-time”, “anında”, “yıldırım” iddiaları ölçüm ister. Ölçüm yoksa FirstClick iddiayı UI bekleyişi ile karşılaştırır ve drift yazar; kendi Lighthouse skorunu uydurmaz. Mobilde aynı iddia daha kırılgandır.


## Birleşik okuma: algı × empty/loading/error × mobil

Skeleton ve progress aslında kenar durum UX’inin parçasıdır ([kb:55-empty-loading-error-states]); bu dosya algı ve vaad diline odaklanır. Aynı spinner hem “hata gizleniyor” hem “yavaş” okumasını üretir — persona ayır: non-technical bozuldu sanır, busy-professional zaman kaybı yazar.

Mobilde algı eşiği düşüktür ([kb:57-mobile-ux]). Dashboard waterfall yüklemesi kısmi değer bırakıyorsa algı iyileşir ([kb:54-dashboard-design]). Tam ekran bloklayıcı loading kötü algıdır.

Ödeme sessizliği güven krizidir ([kb:05-trust-and-proof]). Performans dosyasında bile trust boyutunu açıkça yükselt. Altyapı tavsiyesi (cache, CDN) spekülatifse yazma; UI durum geri bildirimi öner.


## Analist sözlüğü: algı sinyalleri

Sinyal sözlüğü: sessizlik (tık sonrası feedback yok), jump (layout kayması), sonsuz spinner (hata ayrışmıyor), belirsiz uzun iş (progress yok), vaad drift (anında iddiası vs bekleyiş), ödeme sessizliği (trust kritik), çift submit riski, mobil ağırlık. Her sinyal için persona tepkisi farklıdır; busy-professional süreyi, non-technical bozulmayı, skeptical vaad kırılmasını öne çıkarır. Öneri sözlüğü: loading state, skeleton, progress, ara durum metni, iyimser UI + geri al. Altyapı spekülasyonu yok.


## Kapanış notu (RAG)

Bu bölüm bağımsız chunk olarak da anlamlıdır: FirstClick analisti konuyu ürün corpus alıntısıyla birleştirir, heuristic’i istatistik gibi sunmaz, persona tepkisini somut UI metnine bağlar, skor gerekçesinde clarity / adoption / onboardingRisk / trust ayrımını korur ve uydurma özellik önermez. Eksik kanıtta “corpus’ta görmedim” der.
 Performans chunk’ında sessizlik / progress / vaad drift sinyalleri adlandırılmalıdır.


## Kapanış notu (RAG)

Bu bölüm bağımsız chunk olarak da anlamlıdır: FirstClick analisti performans algısını Lighthouse uydurmadan okur; sessizlik, skeleton yokluğu, progress eksikliği ve hız vaadi drift’ini adlandırır; ödeme sessizliğini trust krizi sayar; öneride UI durum geri bildirimi verir, spekülatif altyapı reçetesi yazmaz. Heuristic’leri kanıtlanmış yasa diye sunmaz.

Persona hatırlatması: busy-professional süre ve çıktı ister; non-technical durum metni ister; skeptical vaad-dürüstlük ister; price-sensitive kilit/erken satışa tepki verir; first-timer ise net sıradaki adımı arar. Bulguyu bu tepkilerden biriyle somutlaştır.

Ölçüm yoksa milisaniye uydurma; gözlenen geri bildirim eksikliğini yaz.
 Kritik yolda sessizlik friction high sayılır.


## Eylem tarifleri (performans algısı)

**Tarif 1 — Kritik tık geri bildirimi:** Kaydet / gönder / öde butonlarında disabled + durum metni + başarı/hata yolu. Sessiz 2–3+ sn çift submit riskidir; hem friction hem veri bütünlüğü notu.

**Tarif 2 — Skeleton vs spinner:** Liste/dashboard’da skeleton ile layout rezervasyonu. Sonsuz spinner’ı hata durumundan ayır ([kb:55-empty-loading-error-states]). “Yükleniyor” yerine bağlamlı metin (“Müşteriler getiriliyor”).

**Tarif 3 — Uzun iş iletişimi:** Export/import’ta belirleyici progress veya “bitince e-posta” vaadi + tamam/fail + yeniden dene. Belirsiz “hazırlanıyor…” busy-professional terk üretir.

**Tarif 4 — Vaad–bekleyiş drift:** Landing “anında / real-time / yıldırım” iddiasını alıntıla; UI’daki sürekli spinner ile karşılaştır. Lighthouse skoru uydurma; drift citation’ı yaz.

**Tarif 5 — Yol bazlı şiddet:** Kimlik, kaydetme, ödeme, aktivasyon artefaktı sessizliği yüksek şiddet. Changelog yavaşlığı düşük şiddet. “Site genelinde yavaş” yerine yol yaz.

## Kenar durumlar

- **İyimser UI fail:** “Gönderildi” sonrası hata — skeptical için vaad kırılması; geri al/düzelt yolu şart.
- **Kısmi dashboard yükleme:** Bazı paneller dolarken biri beklerse kısmi değer iyi algıdır ([kb:54-dashboard-design]); tek spinner’da herkesin beklemesi kötü.
- **Layout jump:** İçerik gelince CTA kayması yanlış tıklama.
- **Reduced-motion:** Süs animasyonu etkileşimi geciktiriyorsa [kb:58-accessibility] çapraz.
- **Mobil/zayıf ağ:** Desktop kabul, mobil terk ([kb:57-mobile-ux]); ms ölçümü yoksa “ağır / boğuk his” de.
- **Ödeme sessizliği:** Para işleminde belirsizlik trust krizidir; diğer yavaşlıklardan ayrı yaz.
- **Ücretsiz plan yavaşlığı:** Görülür cezalandırma hissi price-sensitive notu; uydurma A/B iddiası yok.

## Persona-özel yorum şablonu

“[Akış: kaydet|export|ödeme|dashboard]; algı sorunu [sessizlik|jump|sonsuz spinner|vaad drift]; [persona] etkisi [leave|panic|trust↓|onboardingRisk↑]; öneri [buton state|skeleton|progress|dürüst süre metni]; ölçüm uydurma yok.”

Busy-professional belirsiz bekleyişi pahalı zaman sayar. Non-technical sessizliği “ben bozdum” sanır. Skeptical kırılan “anında” vaadinde tüm iddiaları sorgular. Price-sensitive yavaş ücretsiz / hızlı ücretli ayrımında ceza hissi. Student/first-timer ilk oturum ağırlığında onboardingRisk↑.

## Derin kenar: beklenti ayarı

“Bu 1–2 dakika sürebilir” doğruysa öfke azalır; yanlış süreyse artar. Corpus’ta süre yoksa uydurma. Belirsizlik çoğu zaman ham süreden daha pahalıdır — yönsel heuristic; kesin psikoloji kanunu diye sunma.

## Analist kontrol listesi (geniş)

1. Kritik tıklamalarda loading/disabled var mı?
2. Skeleton vs boş spinner.
3. Uzun işte progress / e-posta vaadi / fail yolu.
4. Landing hız iddiası ↔ UI bekleyişi.
5. Mobil kritik yol ayrı mı?
6. Çift submit riski.
7. Ödeme/onay sessizliği.
8. Layout jump ve animasyon maliyeti.
9. İyimser UI’da hata düzeltme yolu.
10. Kısmi yükleme vs tek spinner.
11. Öneri: durum metni, skeleton, progress — “sunucuyu değiştirin” spekülasyonu yok.
12. LCP/ms/% iyileştirme uydurma; eşikleri ölçüm yoksa dayatma diye sunma.
