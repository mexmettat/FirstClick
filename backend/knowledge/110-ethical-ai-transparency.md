# Etik AI ve şeffaflık: model davranışını dürüstçe anlatmak

FirstClick analisti etik AI / şeffaflık yüzeyini değerlendirirken şunu sorar: kullanıcı corpus’taki AI özellikleri, uyarılar ve veri politikalarından “bu çıktı nasıl üretildi, yanılabilir mi, verim eğitime girer mi, itiraz edebilir miyim?” sorularına abartısız cevap bulabiliyor mu? Bu doküman, FirstClick bilgi tabanında ethical AI & transparency değerlendirmesinin standart çerçevesidir. [kb:110-ethical-ai-transparency]

## Kapsam

Bu dosya şu alanları kapsar: AI çıktı etiketleme, sınır ve hata itirafı, insan incelemesi / onay kapıları, eğitim verisi ve müşteri verisi ayrımı, önyargı ve güvenlik uyarıları, ve “otonom ajan” iddialarının dürüstlüğü. Kapsam dışı: genel KVKK/güvenlik sayfası (bkz. [kb:103-security-privacy]), sosyal kanıt (bkz. [kb:101-social-proof]), deneycilik (bkz. [kb:108-ab-experimentation]). Bu dosya hukuki veya model kartı standardı iddiası taşımaz; ürün iletişiminin şeffaflığını değerlendirir.

Heuristic: İyi AI şeffaflığı, yeteneği satarken sınırları da aynı yükseklikte tutar ve kullanıcıya düzeltme / geri bildirim yolu bırakır. “Halüsinasyon yapmaz” gibi kesin iddialar kırmızı bayraktır.

## Tanı sinyalleri (diagnostic signals)

1. **İnsan benzeri yanılsama**: AI olduğu hiç söylenmiyor; kullanıcı insan sanabilir.
2. **Kesinlik abartısı**: “%100 doğru”, “halüsinasyon yok” — kaynağı belirsiz kesin dil.
3. **Veri eğitimi sessizliği**: Sohbetlerin / yüklenen dosyaların model eğitiminde kullanılıp kullanılmadığı yazılmamış.
4. **Kaynak yok**: Alıntı/kurumsal bilgi vaadi var; çıktıda kaynak veya “bilmiyorum” yok.
5. **Otonomi tiyatrosu**: “Ajanınız her işi çözer” — geri alma, onay, log yok.
6. **Geri bildirim yok**: Yanlış cevapta düzelt / rapor butonu yok.
7. **Hassas alan sessizliği**: Sağlık/hukuk/finans çıktılarında uyarı yok (alan varsa).
8. **Gizli otomasyon**: Kullanıcı bilmeden AI’nın müşteriye mail atması vb.

Olumlu sinyaller: “AI tarafından oluşturuldu” etiketi, sınırlar SSS, eğitim opt-out, insan onayı gerektiren adımlar, kaynak gösterme veya belirsizlik ifadesi, kolay düzeltme, politika linki sade dilde.

## Kullanıcı itirazları

- **“Bu cevap doğru mu / kim doğruladı?”**
- **“Verdiğim dosya modelinizi eğitiyor mu?”**
- **“Müşterime AI’nın yazdığını bilmeden mi gidecek?”**
- **“Hata olursa sorumluluk kimde?”** (Analist hukuki hüküm vermez; ürünün sorumluluk dilini netlik açısından değerlendirir.)
- **“Neden aynı soruya farklı cevap?”**
- **“Önyargılı / ayrımcı çıktı üretir mi?”**

## Persona tepkileri

- **busy-professional**: Hız ister ama müşteriye giden çıktıda onay kapısı ister; kör otonomi riskli.
- **non-technical**: “LLM”, “temperature”, “RAG” jargonu yerine “yapay zekâ taslağı — kontrol edin”.
- **skeptical**: Kesinlik abartısı trust↓; sınır itirafı güven artırır.
- **price-sensitive**: “AI sihir” fiyatı şişiriyorsa ve değer sınırlıysa öfke; şeffaf limit ister.
- **student / first-timer**: Öğrenme aracıysa kopya/akademik dürüstlük uyarısı ve kaynak gösterme önemli.

## İyi ve kötü örnekler

**Kötü — sihir pazarlama**
“Hiç hata yapmayan yapay çalışanınız.” Sınır, log, onay yok.

**İyi — taslak + onay**
“AI taslak oluşturur. Göndermeden önce siz onaylarsınız. AI etiketi çıktıda görünür.”

**Kötü — sessiz eğitim**
Varsayılan: tüm sohbetler eğitime gider; opt-out gizli veya yok.

**İyi — net veri cümlesi**
“İş verileriniz varsayılan olarak model eğitiminde kullanılmaz” veya corpus’taki gerçek politika — hangisi yazıyorsa alıntıla; yoksa eksiklik bulgusu.

**Kötü — kaynak tiyatrosu**
Uydurma dipnot linkleri veya olmayan belge numaraları. Analist uydurmaz; şüpheli kalıbı not eder.

**İyi — belirsizlik dürüstlüğü**
“Bu konuda emin değilim” / “kaynak bulunamadı” durumlarının ürün tarafından desteklenmesi.

**Kötü — gizli ajan**
AI kullanıcı adına dış sistemde işlem yapar; bildirim yok.

**İyi — eylem öncesi özet**
“Şu 3 adımı yapacağım — onaylıyor musunuz?” + geri alma.

## FirstClick skor etkileri

- **trust**: Birincil alan. Abartı ve veri sessizliği trust↓; sınır + onay trust gerekçesini güçlendirir.
- **clarity**: AI’nın ne yaptığı belirsizse clarity↓.
- **adoption**: Korkutucu belirsizlik veya sık zararlı çıktı adoption↓; iyi taslak+onay adoption’ı destekleyebilir (yüzde yok).
- **onboardingRisk**: İlk oturumda kontrolsüz otonom eylem risk↑.
- Timeline: “AI overclaim”, “training data opacity”, “human-in-the-loop gap”.

Heuristic: Model benchmark yüzdesi veya “halüsinasyon oranı” uydurma. Corpus’ta yoksa yazma.

## Eylem kontrol listesi

1. AI özellik vaadini ve UI etiketlerini alıntıla.
2. Kesinlik / “hatasız” dilini tara.
3. Eğitim verisi / opt-out cümlesini bul; yoksa eksiklik.
4. Onay kapısı ve geri alma var mı bak.
5. Hassas alan uyarısı gerekiyor mu değerlendir (alan varsa).
6. Geri bildirim/rapor yolu kontrol et.
7. Persona itirazı yaz; security dosyasına çapraz referans.
8. Tek cümle öneri: etiket + sınır + insan onayı.

## Derin tanı senaryoları

**Senaryo A — Görünmez yazar.** Müşteri e-postası AI ile gidiyor; imza veya etiket yok. Trust ve itibar riski.

**Senaryo B — Hatasız iddiası.** Landing “halüsinasyon yapmaz”; ürün içinde düzeltme yolu yok. Overclaim.

**Senaryo C — Eğitim opt-out yok.** Yüklenen sözleşmeler varsayılan eğitime gidiyor olabilir — politika sessiz. Privacy çaprazı ([kb:103-security-privacy]).

**Senaryo D — Otonom araç çağrısı.** AI dosya siler / kayıt günceller; onay özeti yok. onboardingRisk↑.

**Senaryo E — Kaynak dekoru.** Uydurma görünümlü dipnotlar. Analist kaynak icat etmez; şüpheli kalıbı yazar.

**Senaryo F — Hassas alan.** Sağlık/hukuk sorularına uyarı olmadan kesin tavsiye dili. Sınır eksikliği.

## İnsan-döngüde (human-in-the-loop) ızgara

1. Taslak üret — düşük risk, etiket yeterli olabilir.
2. Kullanıcıya öner — orta, geri bildirim iste.
3. Dışarı gönder / sistem değiştir — yüksek, açık onay.
4. Geri alınamaz eylem — çok yüksek, ek onay + log.
Ürün 3–4’te onay yoksa güçlü bulgu. Izgara model mimarisi iddiası değildir; UX şeffaflığıdır.

## Şeffaflık cümle seti (öneri iskeleti)

Corpus’a uydurma politika yazmadan önerilebilecek başlıklar: AI kullandığımız yerler; yanılma payı; verinin eğitimde kullanımı; onay istediğimiz eylemler; nasıl şikayet/düzeltme yapılır. Eksik başlıkları checklist’te işaretle.

## Analistin sık hataları

1. Model markası/benchmark uydurmak.
2. “Etik AI” diye boş övgü veya boş mahkûmiyet.
3. Her AI özelliğini yüksek risk saymak — taslak araçları farklıdır.
4. Hukuki sorumluluk hükmü vermek.
5. Güvenlik dosyasındaki KVKK bulgusunu kopyalayıp AI’ya yapıştırmak — bağla, tekrar etme.

## RAG bağımsız chunk notu

Chunk soruları: AI etiketi var mı; overclaim var mı; eğitim verisi şeffaf mı; yüksek riskte onay var mı? Model, şeffaflık, eğitim verisi, onay kapısı, insan-döngü terimlerini koru.

## Türkiye ve dil notları

“Yapay zekâ / AI / asistan” karışık adlandırması netlik sorunu yaratır — kanonik terim öner. Aydınlatmada AI işleme yoksa privacy ile çaprazla; hukuki hüküm verme. Eğitim ürünlerinde kaynak ve kopya uyarısı first-timer için kritiktir.

## Etiketleme ve zarar azaltma

Ürün içi AI taslağı etiketi; dış iletişiminde alıcı şeffaflığı ayrı meseledir. Kontrol adayları: belirsizlik ifadesi, kaynak, yasaklı konu reddi, insan inceleme. Olmayanları eksik kontrol diye yaz.

## Pazarlama–ürün tutarlılığı

Landing “otonom ajan”, ürün “taslak asistan” ise vaad drift yaz. Tersi sürpriz otonomi de üretir. Teknik yetenek iddiası uydurma.

## FirstClick rapor paragrafı

“AI vaadi [alıntı]. Etiket [var/yok]. Overclaim [var/yok]. Eğitim verisi cümlesi [var/yok]. Yüksek risk eylemde onay [var/yok]. Öneri: [etiket + sınır + human-in-the-loop]. Skor: trust/clarity/onboardingRisk — ethical AI.”

## Kullanıcı düzeltme döngüsü

Yanlış çıktıda: düzenle, yeniden üret, rapor et, kaynağı göster. En az bir yol yoksa ürün “tek yönlü sihir” sunuyor demektir. Döngü varlığı model kalitesi iddiası değildir; şeffaflık ve kontrol sinyalidir.

## Sık görülen corpus çelişkileri

Landing “hiç hata yapmayan AI çalışan” der; ürün taslak üretir ve uyarı yoktur — overclaim. “Verileriniz model eğitiminde kullanılmaz” cümlesi blogdadır; ayar veya kayıt anında yoktur. Ajan “otonom çalışır” der; dış sisteme yazma onay özeti yoktur. Çıktıda kaynak numaraları görünür ama linkler uydurma kalıbındadır — analist kaynak icat etmez, şüpheli kalıbı yazar. Sağlık sorularına kesin tavsiye dili vardır; sınır uyarısı yoktur. Öneri: AI etiketi, sınır SSS, eğitim verisi cümlesinin ürün içi görünürlüğü, yüksek riskte human-in-the-loop.

## Atıf disiplini

- AI politikası ve UI: [doc:…] / [web:…].
- [kb:110-ethical-ai-transparency]; security/privacy: [kb:103-security-privacy].
- Benchmark, doğruluk yüzdesi, yasal uygunluk hükmü uydurma yasağı.

## Analist uygulama notu

Şablon: “[Persona] AI özelliğinde ‘[alıntı]’ görüyor; [overclaim|eğitim belirsiz|onay yok] nedeniyle [trust↓|risk]. Öneri: [AI etiketi + sınır SSS + human-in-the-loop]. Skor: trust↓ / clarity↓ / onboardingRisk↑ gerekçesi ethical AI.” RAG’de model, halüsinasyon uyarı dili, eğitim verisi, onay kapısı, şeffaflık kelimelerini tut.
