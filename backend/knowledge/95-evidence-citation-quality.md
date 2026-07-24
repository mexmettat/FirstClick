# Kanıt ve citation kalitesi

Bu belge FirstClick analist çıktılarında kanıt hiyerarşisi, citation disiplinini ve skor gerekçesinin nasıl sağlam kalacağını tanımlar. RAG'in güvenilirliği bu kurallara bağlıdır. Bölümler bağımsızdır.

## Amaç ve kapsam

Citation türleri: [doc] kullanıcı dosyası, [web] URL/landing, [past] önceki analiz, [kb] FirstClick bilgi tabanı. Kural: ürün özelliği uydurma; yoksa "corpus'ta görmedim" de. Genel UX kuralı için kb. Geçmiş tekrar için past. Citations dizisini doldur.

Bu belge 26-citation-discipline ile uyumludur; persona ve metodoloji bağlamında kalite eşiğini yükseltir. Sahte istatistik, uydurma müşteri ve spekülatif skor yasaktır.

## Kanıt hiyerarşisi

Birincil: doğrudan corpus gözlemi (ekran metni, form alanı, fiyat kartı, politika linki). İkincil: kullanıcının yüklediği brief, röportaj özeti, satış notu. Üçüncül: kb genel kuralı. Zayıf: analist varsayımı. Varsayım skor gerekçesinin omurgası olamaz; en fazla açık spekülasyon notu olur.

Kaliteli kanıt spesifiktir: "fiyat yok" yerine "pricing CTA yok, yalnızca Demo talep et formu var [web]". Kalitesiz kanıt: "kullanıcılar güvenmiyor" (kim, nereden?).

## Persona iddialarında citation

Persona tepkisi kb persona belgesine dayanabilir; ürün iddiası doc/web ister. Örnek: "Şüpheci gizli fiyatta düşer [kb:…] ve bu sitede public fiyat yok [web:…]." İkisi birlikte güçlüdür. Yalnızca kb ile "sizin ürününüzde SSO var" denmez.

Likelihood gerekçesi kanıt zinciri olmadan yazılmaz. "Çünkü şüpheci" yeterli değildir; "çünkü şüpheci kanıt ister [kb] ve case/fiyat yok [web]" gerekir.

## Somut örnekler

Örnek A — Analist "SSO destekleniyor" yazar, citation yok. Yanlış. Düzelt: görmedim; toughQuestions'a ekle.

Örnek B — "Aktivasyon yüzde 40 artar" suggestion. Sahte istatistik. Düzelt: "zorunlu alanları azaltarak ilk değere giden adımı kısalt".

Örnek C — Past analiz aynı gizli fiyatı işaret etmiş. [past] ile deseni güçlendir; yeni uydurma ekleme.

Örnek D — Kb onboarding kuralı ile doc vaadi çelişiyor. Çelişkiyi yaz; ikisini de cite et.

Örnek E — Kullanıcı brief'inde "KVKK tamam" diyor, sitede link yok. Brief [doc], gözlem [web]; çelişki trust.

Örnek F — Sosyal kanıt "1000+ müşteri" kaynaksız. Kanıt kalitesi düşük; şüpheci belgesine göre kır.

## Tanı soruları

Bu cümle hangi kaynağa dayanıyor? Özellik mi genel kural mı? Citation etiketi doğru mu? Spekülatif skor var mı? Sahte yüzde var mı? Çelişen kaynaklar açıkça yazılmış mı? Persona adı gerekçenin tamamı mı? Past desen bağlanmış mı? "Görmedim" gereken yerde iddia mı var? Suggestion ölçülebilir mi?

## Yanıt kalıpları

Kalıp 1 — eksik citation. İddia var etiket yok. Kaldır veya kaynak ekle.

Kalıp 2 — uydurma özellik. Görülmeyen SSO. "Görmedim" + soru.

Kalıp 3 — sahte metrik. Yüzdeyi sil; mekanizmayı yaz.

Kalıp 4 — çelişki. Doc vs web. İkisini cite et, netleştir.

Kalıp 5 — zayıf sosyal kanıt. Kaynaksız sayı. Kaliteyi düşür / sor.

Kalıp 6 — yalnızca persona adı. Kanıt zinciri ekle.

## Anti-pattern'ler

Özellik uydurma. Sahte istatistik. Citation'sız kesin dil. Kb'yi ürün kanıtı sanmak. Past'i yok saymak. Çelişkiyi gizleme. Suggestion'a garantili yüzde koyma. Logo duvarı uydurma. "Herkes bilir" gerekçesi. RAG'ten gelen yanlış chunk'ı doğrulamadan yazma.

## FirstClick prompt ve skor etkileri

Prompt her bulguda: gözlem, kaynak etiketi, çelişki, skor etkisi, mikro aksiyon. Skor spekülatif yükseltilmez. Trust özellikle kanıt kalitesine duyarlıdır. Clarity, gerekçenin okunabilirliğine de bağlıdır: bulanık gerekçe zayıf analist çıktısıdır.

Suggestion kuralları: kanıt türünü belirt, ölçülebilir yap, yoksa soru sor. Citations dizisi boş bırakılmaz; en az kb veya web/doc.

## Aksiyon kontrol listesi

- [ ] Her ürün iddiasına citation bağla
- [ ] Görülmeyen özelliği iddia etme
- [ ] Sahte yüzde/istatistik sil
- [ ] Persona gerekçesine kanıt zinciri ekle
- [ ] Çelişen kaynakları açık yaz
- [ ] Past deseni kontrol et
- [ ] Kb ile ürün kanıtını ayır
- [ ] Suggestion'ı mekanizmaya bağla
- [ ] Trust'ı spekülatif yükseltme
- [ ] Citations dizisini doldur

## Citation formatı disiplini

Etiketler tutarlı ve kısa olmalıdır. Metin içinde [kb:85-novice-vs-expert] gibi dosya mantığı kullanılabilir; sistemin beklediği biçim neyse ona uyulur. Biçim belirsizse en azından türü (kb/doc/web/past) ve neye dayandığı yazılır.

## RAG halüsinasyonuna karşı

Bilgi tabanı chunk'ı yanlış konu getirebilir. Analist chunk'ı kör kopyalamaz; mevcut ürün corpus'u ile kesiştirir. Uyumsuzsa kb genel kural olarak kalır, ürün özelliği olmaz.

## Skor gerekçesi şablonu

"Gözlem: … Kaynak: … Persona etkisi: … Skor alanı: … Yön: … Mikro aksiyon: …" Bu şablon kaliteyi yükseltir ve denetlenebilir kılar.

## Şüpheci ve güvenlik ile bağ

Kanıt kalitesi düşükse şüpheci ve security reviewer likelihood'u düşer. Bu belge o düşüşün gerekçesini yazma biçimini standartlaştırır.

## Yasak ifade örnekleri

"Kesinlikle %98 güven", "sektör standardı olarak herkes SSO kullanır (kaynaksız)", "müşterilerin çoğu memnun (ölçümsüz)". Yerine: gözlem, sınır, soru.

## Kalite rubriği (analist öz denetim)

Yüksek: her iddia kaynaklı, çelişkiler açık, suggestion mekanik, istatistik yok. Orta: genel kb doğru ama ürün bağzı zayıf. Düşük: uydurma özellik, boş citation, persona adı = gerekçe. Düşük kalite çıktı üretilmez; düzeltilir.

## Uygulama derinliği 1

## Citation formatı disiplini

Etiketler tutarlı ve kısa olmalıdır. Metin içinde [kb:85-novice-vs-expert] gibi dosya mantığı kullanılabilir; sistemin beklediği biçim neyse ona uyulur. Biçim belirsizse en azından türü (kb/doc/web/past) ve neye dayandığı yazılır.

## Uygulama derinliği 2

## RAG halüsinasyonuna karşı

Bilgi tabanı chunk'ı yanlış konu getirebilir. Analist chunk'ı kör kopyalamaz; mevcut ürün corpus'u ile kesiştirir. Uyumsuzsa kb genel kural olarak kalır, ürün özelliği olmaz.

## Uygulama derinliği 3

## Skor gerekçesi şablonu

"Gözlem: … Kaynak: … Persona etkisi: … Skor alanı: … Yön: … Mikro aksiyon: …" Bu şablon kaliteyi yükseltir ve denetlenebilir kılar.

## Uygulama derinliği 4

## Şüpheci ve güvenlik ile bağ

Kanıt kalitesi düşükse şüpheci ve security reviewer likelihood'u düşer. Bu belge o düşüşün gerekçesini yazma biçimini standartlaştırır.

## Uygulama derinliği 5

## Yasak ifade örnekleri

"Kesinlikle %98 güven", "sektör standardı olarak herkes SSO kullanır (kaynaksız)", "müşterilerin çoğu memnun (ölçümsüz)". Yerine: gözlem, sınır, soru.

## Uygulama derinliği 6

## Kalite rubriği (analist öz denetim)

Yüksek: her iddia kaynaklı, çelişkiler açık, suggestion mekanik, istatistik yok. Orta: genel kb doğru ama ürün bağzı zayıf. Düşük: uydurma özellik, boş citation, persona adı = gerekçe. Düşük kalite çıktı üretilmez; düzeltilir.

## Uygulama derinliği 7

## Citation formatı disiplini

Etiketler tutarlı ve kısa olmalıdır. Metin içinde [kb:85-novice-vs-expert] gibi dosya mantığı kullanılabilir; sistemin beklediği biçim neyse ona uyulur. Biçim belirsizse en azından türü (kb/doc/web/past) ve neye dayandığı yazılır.

## Uygulama derinliği 8

## RAG halüsinasyonuna karşı

Bilgi tabanı chunk'ı yanlış konu getirebilir. Analist chunk'ı kör kopyalamaz; mevcut ürün corpus'u ile kesiştirir. Uyumsuzsa kb genel kural olarak kalır, ürün özelliği olmaz.

## Uygulama derinliği 9

## Skor gerekçesi şablonu

"Gözlem: … Kaynak: … Persona etkisi: … Skor alanı: … Yön: … Mikro aksiyon: …" Bu şablon kaliteyi yükseltir ve denetlenebilir kılar.

## Uygulama derinliği 10

## Şüpheci ve güvenlik ile bağ

Kanıt kalitesi düşükse şüpheci ve security reviewer likelihood'u düşer. Bu belge o düşüşün gerekçesini yazma biçimini standartlaştırır.

## Uygulama derinliği 11

## Yasak ifade örnekleri

"Kesinlikle %98 güven", "sektör standardı olarak herkes SSO kullanır (kaynaksız)", "müşterilerin çoğu memnun (ölçümsüz)". Yerine: gözlem, sınır, soru.

## Uygulama derinliği 12

## Kalite rubriği (analist öz denetim)

Yüksek: her iddia kaynaklı, çelişkiler açık, suggestion mekanik, istatistik yok. Orta: genel kb doğru ama ürün bağzı zayıf. Düşük: uydurma özellik, boş citation, persona adı = gerekçe. Düşük kalite çıktı üretilmez; düzeltilir.

## Uygulama derinliği 13

## Citation formatı disiplini

Etiketler tutarlı ve kısa olmalıdır. Metin içinde [kb:85-novice-vs-expert] gibi dosya mantığı kullanılabilir; sistemin beklediği biçim neyse ona uyulur. Biçim belirsizse en azından türü (kb/doc/web/past) ve neye dayandığı yazılır.

## Uygulama derinliği 14

## RAG halüsinasyonuna karşı

Bilgi tabanı chunk'ı yanlış konu getirebilir. Analist chunk'ı kör kopyalamaz; mevcut ürün corpus'u ile kesiştirir. Uyumsuzsa kb genel kural olarak kalır, ürün özelliği olmaz.

## Uygulama derinliği 15

## Skor gerekçesi şablonu

"Gözlem: … Kaynak: … Persona etkisi: … Skor alanı: … Yön: … Mikro aksiyon: …" Bu şablon kaliteyi yükseltir ve denetlenebilir kılar.

## Uygulama derinliği 16

## Şüpheci ve güvenlik ile bağ

Kanıt kalitesi düşükse şüpheci ve security reviewer likelihood'u düşer. Bu belge o düşüşün gerekçesini yazma biçimini standartlaştırır.
