# Güvenlik ve gizlilik iletişimi: korkutmadan kanıtlamak

FirstClick analisti güvenlik/gizlilik yüzeyini değerlendirirken şunu sorar: kullanıcı corpus’taki güvenlik sayfası, KVKK/aydınlatma metinleri ve ürün içi izinlerden “verim nerede, kim erişir, nasıl silerim?” sorularına abartısız cevap bulabiliyor mu? Bu doküman, FirstClick bilgi tabanında security & privacy copy değerlendirmesinin standart çerçevesidir. [kb:103-security-privacy]

## Kapsam

Bu dosya şu alanları kapsar: güvenlik merkezi / trust page, sertifika ve uyum iddiaları (yalnızca corpus’ta varsa), KVKK aydınlatma ve açık rıza akışları, veri silme/export, alt işleyen (subprocessors) şeffaflığı, SSO/MFA sinyalleri, ve korku temelli vs kanıt temelli dil. Kapsam dışı: procurement anket süreci (bkz. [kb:104-procurement]), etik AI model şeffaflığı (bkz. [kb:110-ethical-ai-transparency]), genel B2B satış (bkz. [kb:100-sales-led-b2b]). Bu dosya hukuki tavsiye değildir; analist yasa maddesi uydurmaz, ürün metnindeki açıklığı değerlendirir.

Heuristic: İyi güvenlik iletişimi, iddiayı kanıt kapısına (doküman, sertifika adı, süreç açıklaması) bağlar ve kullanıcı haklarını anlaşılır dilde sunar. “Bankacılık düzeyinde güvenlik” gibi boş süperlatifler zayıf sinyaldir.

## Tanı sinyalleri (diagnostic signals)

1. **Boş süperlatif**: “En güvenli”, “askeri düzey” — kanıt yok.
2. **KVKK linki ölü veya İngilizce-only jargon duvarı**: Türkiye odaklı üründe anlaşılmazlık.
3. **Rıza karanlığı**: Pazarlama kutusu ön işaretli; reddetmek zor.
4. **Veri yeri belirsiz**: “Bulutta” — bölge/alt işleyen yok.
5. **Sertifika adı düşmüş**: “ISO uyumlu” — belge/numara/kapsam yok; şüpheli iddia olarak not et (doğruluğunu uydurma).
6. **Silme yolu yok**: Hesap silme / veri silme ayarlarda bulunamıyor.
7. **AI veri kullanımı sessiz**: Model eğitimi için müşteri verisi kullanılıyor mu yazılmamış (bkz. [kb:110-ethical-ai-transparency]).
8. **Security sayfası 404 veya “yakında”**: Enterprise vaadi ile çelişki.

Olumlu sinyaller: sade dilde veri akışı özeti, aydınlatma metnine görünür link, rıza seçilebilirliği, güvenlik SSS, contact for DPA, MFA/SSO’nun plan bazında dürüst belirtilmesi, ihlal bildirim sürecine dair genel açıklama (uydurma SLA yazmadan).

## Kullanıcı itirazları

- **“Verilerim nerede saklanıyor?”**
- **“Üçüncü taraflarla paylaşılıyor mu?”**
- **“Hesabımı silersem ne olur?”**
- **“KVKK’ya uygun musunuz?”** (Analist evet/hayır hukuki hükmü vermez; metin yeterliliğini değerlendirir.)
- **“Çalışanlarınız verime bakabilir mi?”**
- **“AI sohbetlerim eğitimde kullanılıyor mu?”**

## Persona tepkileri

- **busy-professional**: Kısa trust özeti + “detay için güvenlik merkezi” ister; 40 sayfalık policy duvarı okumaz.
- **non-technical**: Hukuk Türkçesi yerine “verinizle ne yapıyoruz / yapmıyoruz” listesi.
- **skeptical**: Kanıt ister; süperlatif + ön işaretli rıza = trust↓.
- **price-sensitive**: Güvenlik yalnızca Enterprise’da ise “verim ucuz planda güvensiz mi?” şüphesi — dürüst plan farkı yazılmalı.
- **student / first-timer**: Uzun sözleşme korkutur; net ve kısa aydınlatma + kolay silme önemli.

## İyi ve kötü örnekler

**Kötü — süperlatif duvarı**
“Verileriniz %100 güvende. Askeri şifreleme. Hiçbir risk yok.” Kanıt, kapsam, sınır yok.

**İyi — kanıt kapılı özet**
“Veriler şifreli saklanır. Alt işleyen listesi burada. AB/TR bölgesi seçenekleri (corpus’ta ne yazıyorsa). KVKK aydınlatması: link. Hesap silme: Ayarlar > …”

**Kötü — rıza tuzağı**
Kayıtta ön işaretli “tüm iletişim ve ortaklara veri”. Opt-out gizli.

**İyi — ayrı rızalar**
Hizmet için gerekli aydınlatma ayrı; pazarlama ayrı ve varsayılan kapalı.

**Kötü — güvenlik = satış formu**
Trust page yerine “güvenlik whitepaper için formu doldurun” tek yol; SMB elenir.

**İyi — katmanlı erişim**
Herkese açık özet + ayrıntılı PDF isteğe bağlı + enterprise DPA satış yoluyla.

## FirstClick skor etkileri

- **trust**: Birincil etki alanı. Boş iddia veya karanlık rıza trust↓.
- **clarity**: Policy jargonu clarity↓; sade özet clarity↑ gerekçesi.
- **onboardingRisk**: Kayıtta agresif izin + belirsiz veri kullanımı risk↑.
- **adoption**: Dolaylı; B2B’de güvenlik boşluğu POC’yi durdurur.
- Timeline: “privacy friction”, “unverified security claim” etiketleri.

Heuristic: “KVKK uyumlu olduğu için dönüşüm artar” diye yüzde yazma. Hukuki uygunluk iddiası uydurma.

## Eylem kontrol listesi

1. Trust/güvenlik/KVKK linklerini corpus’tan çıkar.
2. Süperlatifleri listele; kanıt kapısı var mı bak.
3. Rıza kutularının varsayılanını not et.
4. Silme/export yolunu ara; yoksa eksiklik.
5. AI veri kullanımı cümlesini ara (yoksa çapraz [kb:110]).
6. Plan bazlı güvenlik farkını dürüstlük açısından değerlendir.
7. Persona itirazı yaz.
8. Tek cümle öneri: sade özet + kanıt linki.

## Derin tanı senaryoları

**Senaryo A — Rozet mezarlığı.** Sayfada birçok uyum rozeti; tıklanınca pazarlama blogu veya 404. Unverified badge.

**Senaryo B — Aydınlatma labirenti.** KVKK linki 30 sayfalık İngilizce hukuki metin; özet yok. Non-technical vazgeçer.

**Senaryo C — Destek erişimi sessiz.** “Destek ekibiniz veriyi görebilir” hiç yazılmamış; AI araçlarında daha kritik ([kb:110-ethical-ai-transparency]).

**Senaryo D — Bölge belirsizliği.** TR kullanıcıya “veriler güvenli bulutta”; lokasyon/alt işleyen yok.

**Senaryo E — Silme tiyatrosu.** “Hesabı sil” var; veri saklama dipnotu “yasal zorunluluklar hariç 90 gün” — süre uydurma, pattern: silme sonrası ne olacağı belirsizse not et.

**Senaryo F — Enterprise-only güvenlik.** MFA/SSO yalnızca en üst plan; alt planda “güvensiz” ima edilmeden fark yazılmamış. Price-sensitive şüphe.

## Sade dil özeti için iskelet

Ürünlere önerilebilecek beş soruluk özet (içerik corpus’tan doldurulur): Veriyi kim için topluyoruz? Nerede saklıyoruz? Kimler erişebilir? Üçüncü taraflar kim? Nasıl siler / dışa aktarırım? Bu iskelet hukuki belge yerine geçmez; firstImpression ve clarity için yüzeydir.

## Korku dili vs kanıt dili

Korku: “Hacklenmeyin — hemen Pro güvenlik”. Kanıt: “MFA burada, güvenlik merkezi burada, ihlal sürecimiz genel hatlarıyla burada”. FirstClick trust gerekçesinde kanıt dilini olumlu, korku+upsell karışımını olumsuz işaretler. Kesin “risk yok” iddiası da zayıftır.

## Analistin sık hataları

1. “KVKK uyumludur” hukuki hükmü vermek.
2. Sertifika numarası uydurmak.
3. Policy uzunluğunu kalite sanmak.
4. Güvenlik yok diye ürünü mahkûm etmek — “yüzey zayıf” yaz, yokluğu net söyle.
5. AI veri politikasını güvenlik sayfasından ayırmamak.

## RAG bağımsız chunk notu

Chunk soruları: süperlatif mi kanıt mı; rıza seçilebilir mi; silme/export var mı; veri yeri/alt işleyen şeffaf mı? KVKK, rıza, trust page, silme, alt işleyen terimlerini koru.

## Türkiye ve dil notları

KVKK aydınlatmasının varlığı otomatik uyumluluk hükmü değildir; bulunabilirlik, dil ve rıza UX’i değerlendirilir. “KVKK uyumlu” rozeti kanıtsızsa süperlatif gibi işle. Verinin yurt dışında işlendiği yazılıyorsa cümleyi alıntıla; yasal sonuç üretme.

## Ürün içi gizlilik anları ve trust iskeleti

Kayıt, yükleme, entegrasyon ve AI yapıştırma anlarında kısa mikro kopya trust taşır. Minimal trust page: veri özeti, güvenlik iletişimi, belge talep yolu. Enterprise’da DPA ve SSO gerçeği.

## Alt işleyen şeffaflığı

Liste yoksa boşluk; “ve diğerleri” ile bitiyorsa zayıf şeffaflık. AI alt sağlayıcıları da kapsama girer.

## FirstClick rapor paragrafı

“Güvenlik/gizlilik yüzeyi: [trust page/KVKK/rıza/silme]. Kanıt kapısı [var/yok]. [Persona] itirazı [veri yeri/rıza/silme]. Öneri: [sade özet + opt-in]. Skor: trust/clarity — security-privacy; hukuki uygunluk hükmü yok.”

## Kayıt anı denetimi

Ön işaretli pazarlama kutusu, zorunlu tüm şartları tek checkbox’ta birleştirme, aydınlatma linkinin görünmezliği. Her biri ayrı sürtünme. AI ürünlerinde kayıt anı ile model eğitim cümlesi aynı ekranda yoksa çapraz eksiklik yaz.

## Sık görülen corpus çelişkileri

“Bankacılık düzeyinde güvenlik” hero’da, trust page 404. KVKK linki var, kayıtta pazarlama kutusu ön işaretli — politika ile UX çelişkisi. SSO “tüm planlarda” denir, fiyat matrisinde yalnızca Enterprise’dadır. AI ürünü “verileriniz eğitilmez” der, ayrı bir checkbox veya ayar yoktur; sessizlik ikinci yüzeyde kalır. Hesap silme menüde vardır, silme sonrası veri saklama süresi yalnızca İngilizce policy’dedir. Analist hukuki sonuç çıkarmaz; yüzey çelişkisini trust ve clarity gerekçesine bağlar. Öneri: sade özet, kanıt linki, rıza varsayılanlarını düzeltme.

## Persona itiraz diyalogları (örnek dil)

skeptical: “Verim hangi ülkede, alt işleyen kim, kanıtınız nerede?”
busy-professional: “Bana bir sayfalık özet yeter, 40 sayfa policy değil.”
non-technical: “Hesabımı silersem ne olur, tek cümle söyleyin.”
price-sensitive: “Ucuz planda verim daha mı güvensiz?”
student: “Ödevimi yükleyince başkası görür mü?”
Karşılık corpus’ta yoksa “yanıt yüzeyi eksik” yaz; yasal güvence icat etme. Bu diyaloglar teşhis checklist’ini persona diline çevirir.

## Atıf disiplini

- Policy ve UI metinleri: [doc:…] / [web:…].
- [kb:103-security-privacy]; procurement: [kb:104-procurement]; ethical AI: [kb:110-ethical-ai-transparency].
- Sertifika numarası/yasa maddesi uydurma; “corpus’ta yok” de.

## Analist uygulama notu

Şablon: “[Persona] ‘[alıntı güvenlik/KVKK]’ görüyor; [süperlatif|rıza tuzağı|silme yok] nedeniyle [trust↓|friction]. Öneri: [sade veri özeti + opt-in]. Skor: trust↓ / clarity↓ gerekçesi security-privacy.” RAG’de KVKK, rıza, alt işleyen, silme, trust page kelimelerini tut.
