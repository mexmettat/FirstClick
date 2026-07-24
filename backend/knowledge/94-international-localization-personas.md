# Uluslararası ve yerelleştirme personları

Bu belge dil, kültür, para birimi, tarih/saat, düzenlemeler ve yerel ödeme beklentilerinin FirstClick persona okumasına nasıl gireceğini tanımlar. Özellikle Türkiye pazarı sinyalleriyle birlikte düşünülür ama uydurma istatistik kullanılmaz. Bölümler bağımsızdır.

## Amaç ve kapsam

Yerelleştirme personları yalnızca "çeviri" değildir. Bakışlar: Türkçe bekleyen kullanıcı (karışık EN/TR sürtünmesi), sağdan sola veya uzun çeviri metni (UI kırılması), yerel para ve KDV bekleyen alıcı, fatura/e-arşiv beklentisi, KVKK odaklı kullanıcı, tarih formatı ve adres alanı yerel normları, destek saati ve dilinde yardım arayan. FirstClick corpus'ta dil tutarsızlığı, para birimi, yasal link ve ödeme yöntemlerini teşhis eder.

Kapsam dışı: makine çevirisi kalite puanı uydurmak, ülke stereotypeleri. Kapsam içi: dil tutarlılığı, yerel güven sinyalleri, formatlar, skor.

## Davranış modeli

Kullanıcı kendi dilinde iş fiili ve hata mesajı arar. Hero Türkçe, ürün içi İngilizce ise trust ve clarity düşer. Fiyat USD iken Türkiye hedefi varsa bütçe kısıtlı ve ekonomik alıcı sürtünür. KVKK yoksa güvenlik/şüpheci yerel bağlamda sertleşir.

Destek yalnızca İngilizce form ise yerel busy ve novice terk edebilir. Bu "çeviri eksik" değil "iş bitirme riski"dir.

## Somut örnekler

Örnek A — Landing TR, signup EN, fatura alanları US state. Clarity ve adoption. Suggestion: dil tutarlılığı, il/ilçe alanları veya evrensel adres.

Örnek B — Fiyat yalnızca USD, KDV belirsiz. Price/trust. Vergi dilini netleştir.

Örnek C — Tarih MM/DD, Türkiye kullanıcısı yanılır. Formatı locale'e bağla veya açık etiketle.

Örnek D — Ödeme yalnızca yabancı kart; yerel yöntem yok. Segment kaybı olabilir; yoksa uydurma yöntem ekleme, soru olarak yaz.

Örnek E — KVKK/aydınlatma metni yok. Yerel şüpheci ve güvenlik.

Örnek F — Çeviri kalıp: "Kaydet" yerine ham i18n anahtarı. Critic severity yüksek sürtünme.

## Tanı soruları

Dil tutarlı mı? Para birimi ve vergi dili net mi? Tarih/saat/adres yerel normlara uyuyor mu? Yasal linkler (KVKK, iade) var mı? Destek dili ne? Çeviri anahtarı sızıntısı var mı? Görseller ve örnekler yerel bağlama yabancı mı? Sağdan sola veya uzun metin UI'yı kırıyor mu? Yerel ödeme sinyali var mı? Önceki analizde dil şikâyeti var mı?

## Yanıt kalıpları

Kalıp 1 — dil karışımı. TR/EN kırık. Tutarı sağla; clarity.

Kalıp 2 — para/vergi. Belirsiz. Netleştir; price/trust.

Kalıp 3 — KVKK yok. Link/özet ekle.

Kalıp 4 — format. Tarih/adres yanıltıcı. Locale veya etiket.

Kalıp 5 — i18n sızıntısı. Anahtar görünür. Kritik düzeltme.

Kalıp 6 — destek dili. Yalnızca EN. Kanal veya dil notu ekle.

## Anti-pattern'ler

Stereotip persona. Sahte "Türkler X sever" genellemesi. Makine çevirisini yeterli sanmak. Yalnızca landing'i çevirip ürünü bırakmak. KDV'yi yok saymak. ABD adres formunu evrensel sanmak. KVKK'yı gizlilik politikası İngilizcesiyle geçiştirmek. Yerel ödeme uydurmak.

## FirstClick prompt ve skor etkileri

Prompt: dil tutarlılığı, para/vergi, yasal linkler, formatlar, destek dili, skor, mikro aksiyon. PersonaReaction: bunu Türkçe bitirebilir miyim, fiyat TL/KDV net mi, KVKK var mı, destek bana cevap verir mi?

Skor: Clarity dil; Trust yasal/yerel sinyal; Price para/vergi; Adoption form/format sürtünmesi; Likelihood tutarlı yerelleştirmede artar. Suggestion: dil birliği, vergi dili, KVKK, locale format, i18n düzeltmesi.

## Aksiyon kontrol listesi

- [ ] TR/EN tutarlılığını tara
- [ ] Para ve KDV dilini kontrol et
- [ ] KVKK/iade linklerini kontrol et
- [ ] Tarih/adres formatını kontrol et
- [ ] i18n anahtar sızıntısını ara
- [ ] Destek dilini not et
- [ ] Stereotip yazma
- [ ] Yerel ödeme uydurma
- [ ] turkey-market kb ile çelişme
- [ ] Citations ile görülen dili bağla

## Türkiye pazarı kesişimi

36-turkey-market bilgisiyle birlikte: fatura, KVKK, iade, destek beklentisi. Bu belge persona tepkisini derinleştirir; pazar notunu tekrar etmez. Çakışmada somut corpus gözlemi önceliklidir.

## Çok dilli ürün stratejisi

İyi: dil seçici, tutarlı paketler, yasal metinler dilde. Kötü: yarı çevrilmiş UI, İngilizce hukuki metin, Türkçe pazarlama. FirstClick yarı çeviriyi netlik ve güven sorunu olarak yazar.

## Timeline

1) Türkçe hero. 2) İngilizce form. 3) USD fiyat. 4) KVKK yok. 5) Terk. Yerel şüpheci+bütçe kısıtlı birleşik düşüş.

## Adres ve isim alanları

Zorunlu "middle name", "state" veya tek satır posta kodu varsayımları yerel kullanıcıyı zorlar. Suggestion: alanları uluslararası esnek tut veya yerel şablon sun.

## Destek ve güven

Yerel dilde destek yoksa busy ve novice riski artar. "Global support" sloganı yeterli değildir; kanal ve dil corpus'ta görünmelidir.

## Mikro kopya

İyi: "KDV dahil", "Aydınlatma metni", "İl/İlçe". Kötü: ham key `billing.state_zip_required`. Suggestion görünen anahtarı kritik hata sayar.

## Uygulama derinliği 1

## Türkiye pazarı kesişimi

36-turkey-market bilgisiyle birlikte: fatura, KVKK, iade, destek beklentisi. Bu belge persona tepkisini derinleştirir; pazar notunu tekrar etmez. Çakışmada somut corpus gözlemi önceliklidir.

## Uygulama derinliği 2

## Çok dilli ürün stratejisi

İyi: dil seçici, tutarlı paketler, yasal metinler dilde. Kötü: yarı çevrilmiş UI, İngilizce hukuki metin, Türkçe pazarlama. FirstClick yarı çeviriyi netlik ve güven sorunu olarak yazar.

## Uygulama derinliği 3

## Timeline

1) Türkçe hero. 2) İngilizce form. 3) USD fiyat. 4) KVKK yok. 5) Terk. Yerel şüpheci+bütçe kısıtlı birleşik düşüş.

## Uygulama derinliği 4

## Adres ve isim alanları

Zorunlu "middle name", "state" veya tek satır posta kodu varsayımları yerel kullanıcıyı zorlar. Suggestion: alanları uluslararası esnek tut veya yerel şablon sun.

## Uygulama derinliği 5

## Destek ve güven

Yerel dilde destek yoksa busy ve novice riski artar. "Global support" sloganı yeterli değildir; kanal ve dil corpus'ta görünmelidir.

## Uygulama derinliği 6

## Mikro kopya

İyi: "KDV dahil", "Aydınlatma metni", "İl/İlçe". Kötü: ham key `billing.state_zip_required`. Suggestion görünen anahtarı kritik hata sayar.

## Uygulama derinliği 7

## Türkiye pazarı kesişimi

36-turkey-market bilgisiyle birlikte: fatura, KVKK, iade, destek beklentisi. Bu belge persona tepkisini derinleştirir; pazar notunu tekrar etmez. Çakışmada somut corpus gözlemi önceliklidir.

## Uygulama derinliği 8

## Çok dilli ürün stratejisi

İyi: dil seçici, tutarlı paketler, yasal metinler dilde. Kötü: yarı çevrilmiş UI, İngilizce hukuki metin, Türkçe pazarlama. FirstClick yarı çeviriyi netlik ve güven sorunu olarak yazar.

## Uygulama derinliği 9

## Timeline

1) Türkçe hero. 2) İngilizce form. 3) USD fiyat. 4) KVKK yok. 5) Terk. Yerel şüpheci+bütçe kısıtlı birleşik düşüş.

## Uygulama derinliği 10

## Adres ve isim alanları

Zorunlu "middle name", "state" veya tek satır posta kodu varsayımları yerel kullanıcıyı zorlar. Suggestion: alanları uluslararası esnek tut veya yerel şablon sun.

## Uygulama derinliği 11

## Destek ve güven

Yerel dilde destek yoksa busy ve novice riski artar. "Global support" sloganı yeterli değildir; kanal ve dil corpus'ta görünmelidir.

## Uygulama derinliği 12

## Mikro kopya

İyi: "KDV dahil", "Aydınlatma metni", "İl/İlçe". Kötü: ham key `billing.state_zip_required`. Suggestion görünen anahtarı kritik hata sayar.

## Uygulama derinliği 13

## Türkiye pazarı kesişimi

36-turkey-market bilgisiyle birlikte: fatura, KVKK, iade, destek beklentisi. Bu belge persona tepkisini derinleştirir; pazar notunu tekrar etmez. Çakışmada somut corpus gözlemi önceliklidir.

## Uygulama derinliği 14

## Çok dilli ürün stratejisi

İyi: dil seçici, tutarlı paketler, yasal metinler dilde. Kötü: yarı çevrilmiş UI, İngilizce hukuki metin, Türkçe pazarlama. FirstClick yarı çeviriyi netlik ve güven sorunu olarak yazar.

## Uygulama derinliği 15

## Timeline

1) Türkçe hero. 2) İngilizce form. 3) USD fiyat. 4) KVKK yok. 5) Terk. Yerel şüpheci+bütçe kısıtlı birleşik düşüş.

## Uygulama derinliği 16

## Adres ve isim alanları

Zorunlu "middle name", "state" veya tek satır posta kodu varsayımları yerel kullanıcıyı zorlar. Suggestion: alanları uluslararası esnek tut veya yerel şablon sun.

## Uygulama derinliği 17

## Destek ve güven

Yerel dilde destek yoksa busy ve novice riski artar. "Global support" sloganı yeterli değildir; kanal ve dil corpus'ta görünmelidir.

## Uygulama derinliği 18

## Mikro kopya

İyi: "KDV dahil", "Aydınlatma metni", "İl/İlçe". Kötü: ham key `billing.state_zip_required`. Suggestion görünen anahtarı kritik hata sayar.

## Uygulama derinliği 19

## Türkiye pazarı kesişimi

36-turkey-market bilgisiyle birlikte: fatura, KVKK, iade, destek beklentisi. Bu belge persona tepkisini derinleştirir; pazar notunu tekrar etmez. Çakışmada somut corpus gözlemi önceliklidir.

## Uygulama derinliği 20

## Çok dilli ürün stratejisi

İyi: dil seçici, tutarlı paketler, yasal metinler dilde. Kötü: yarı çevrilmiş UI, İngilizce hukuki metin, Türkçe pazarlama. FirstClick yarı çeviriyi netlik ve güven sorunu olarak yazar.
