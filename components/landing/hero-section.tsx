import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden border-b border-slate-200/80">
      <div className="pointer-events-none absolute inset-0 lab-grid opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-lab-chalk via-transparent to-lab-chalk" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-lab-signal/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-14 px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:flex-row lg:items-end lg:gap-16 lg:pb-24 lg:pt-24">
        <div className="max-w-xl animate-rise-in lg:pb-6">
          <p className="font-display text-5xl font-semibold tracking-tight text-lab-ink sm:text-6xl lg:text-7xl">
            FirstClick
          </p>
          <h1 className="mt-5 font-display text-2xl font-medium leading-snug tracking-tight text-lab-ink sm:text-3xl">
            ChatGPT fikir söyler. FirstClick, ürününüzü hatırlayan kullanıcılarla tekrar test eder.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
            Persona ajanları, ürün dosyalarınız ve geçmiş testlerinizle çalışır — genel yorum değil,
            ürününüze özel laboratuvar.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/demo">
              <Button size="lg">Girişsiz demo</Button>
            </Link>
            <Link href="/analyze">
              <Button variant="outline" size="lg">
                Teste başla
              </Button>
            </Link>
            <Link href="#neden">
              <Button variant="ghost" size="lg">
                Neden direkt AI değil?
              </Button>
            </Link>
          </div>
        </div>

        {/* Dominant visual: before/after lab strip — not a floating card collage */}
        <div
          className="relative w-full flex-1 animate-rise-in"
          style={{ animationDelay: "120ms" }}
          aria-hidden
        >
          <div className="absolute inset-0 rounded-[2rem] bg-lab-ink" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-lab-ink px-6 py-8 text-white sm:px-8 sm:py-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-lab-signal">Demo · aynı ürün</p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div className="animate-delta-slide" style={{ animationDelay: "280ms" }}>
                <p className="text-sm text-slate-400">v1 — ilk pitch</p>
                <p className="mt-2 font-display text-5xl font-semibold tabular-nums">48</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  “Tek tıkla kurulum yazıyor ama adımlar yok — orada kayboldum.”
                </p>
                <span className="mt-4 inline-block rounded-md bg-white/10 px-2 py-1 font-mono text-[10px] text-slate-300">
                  [doc:guide]
                </span>
              </div>
              <div className="animate-delta-slide border-t border-white/10 pt-8 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0" style={{ animationDelay: "420ms" }}>
                <p className="text-sm text-lab-signal">v2 — düzeltilmiş onboarding</p>
                <p className="mt-2 font-display text-5xl font-semibold tabular-nums text-lab-signal">71</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  “Kurulum akışı netleşmiş. Hâlâ fiyatı sorguluyorum ama denemeye açığım.”
                </p>
                <span className="mt-4 inline-block rounded-md bg-lab-signal/15 px-2 py-1 font-mono text-[10px] text-lab-signal">
                  +23 genel skor
                </span>
              </div>
            </div>
            <p className="mt-10 text-xs text-slate-500">
              Bu fark, rastgele AI yorumu değil — corpus + geçmiş test hafızasıyla üretilir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyNotAiSection() {
  return (
    <section id="neden" className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-700">Tez</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-lab-ink sm:text-4xl">
          Neden fikrinizi direkt yapay zekaya sorup yorum almıyorsunuz?
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Genel vs ürününüz",
              body: "ChatGPT her ürüne uyan klişe üretir. FirstClick persona’ları sizin dosyanıza, landing’inize ve önceki testinize bakar.",
            },
            {
              title: "Tek seferlik vs laboratuvar",
              body: "Bir kez sormak yetmez. Pitch’i değiştirip aynı kullanıcı tipiyle tekrar ölçersiniz — skor farkı görünür.",
            },
            {
              title: "Yorum vs karar",
              body: "Amaç ‘güzel fikir’ demek değil; bu hafta neyi düzelteceğinizi bilmek. Citation’lı risk + aksiyon.",
            },
          ].map((item, i) => (
            <div key={item.title} className="animate-rise-in" style={{ animationDelay: `${i * 80}ms` }}>
              <p className="font-mono text-xs text-brand-600">0{i + 1}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-lab-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LabPillars() {
  const pillars = [
    {
      title: "Persona ajanları",
      description: "Şüpheci, aceleci, fiyat hassas… farklı iç seslerle ilk izlenim.",
    },
    {
      title: "Ürün corpus’u",
      description: "Dosya yükleyin veya site URL’si çekin — uydurma özellik yorumlanmaz.",
    },
    {
      title: "Test hafızası",
      description: "Her analiz kaydolur. v1 → v2 farkını ‘Ne değişti?’ ile görün.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-lab-ink">Laboratuvarın parçaları</h2>
      <p className="mt-3 max-w-xl text-slate-600">
        Üç katman birlikte çalışınca FirstClick, sıradan sohbet botundan ayrılır.
      </p>
      <div className="mt-12 grid gap-8 border-t border-slate-200 pt-10 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title}>
            <h3 className="font-display text-lg font-semibold text-lab-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-14">
        <Link href="/analyze">
          <Button size="lg">Ürününüzü test edin</Button>
        </Link>
      </div>
    </section>
  );
}
