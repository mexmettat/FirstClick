import Link from "next/link";
import { Users, Eye, ListChecks } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Users,
    title: "Farklı kullanıcı profilleriyle test",
    description:
      "Teknik bilmeyen kullanıcıdan şüpheci profile kadar farklı persona'lar ürününüzü değerlendirir.",
  },
  {
    icon: Eye,
    title: "Kör nokta ve UX risk analizi",
    description:
      "Anlaşılmayan noktalar, vazgeçme riskleri ve onboarding sürtünmeleri erken tespit edilir.",
  },
  {
    icon: ListChecks,
    title: "Aksiyon odaklı geliştirme önerileri",
    description:
      "Öncelikli aksiyon planı ve geliştirilmiş ürün anlatımı önerileriyle hemen harekete geçin.",
  },
];

export function FeatureCards() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {features.map((feature) => (
        <Card
          key={feature.title}
          className="group relative overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 hover:bg-violet-600 hover:border-violet-600 hover:shadow-xl hover:shadow-brand-500/10"
        >
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-colors group-hover:bg-brand-100">
              <feature.icon className="h-5 w-5" />
            </div>
            <CardTitle className="text-base ">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm leading-relaxed transition-colors duration-300 group-hover:text-violet-100">{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-violet-50/40 border-b border-violet-100/60 px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf612_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf612_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-200/50 via-brand-100/30 to-transparent blur-3xl"></div>
        <div 
          className="absolute -left-[5%] top-[10%] h-[300px] w-[300px] rounded-full bg-brand-400/10 blur-[80px] animate-pulse" 
          style={{ animationDuration: '4s' }} 
        />
        <div 
          className="absolute -right-[5%] top-[20%] h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[100px] animate-pulse" 
          style={{ animationDuration: '7s' }} 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-700 backdrop-blur-sm shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          AI destekli kullanıcı simülasyonu
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          First<span className="bg-gradient-to-r from-brand-600 to-violet-600 bg-clip-text text-transparent">Click</span>
        </h1>
        <p className="mt-4 text-xl font-medium text-slate-600 sm:text-2xl">
          Ürününü kullanıcı gözünden test et.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
          Gerçek kullanıcıya çıkmadan önce ürün fikrini farklı persona profilleriyle simüle edin.
          Nerede anlaşılmadığını, neden kullanılmayabileceğini ve hangi noktaların geliştirilmesi
          gerektiğini görün.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/analyze">
            <Button size="lg" className="shadow-lg shadow-brand-500/20">
              Analize Başla
            </Button>
          </Link>
          <Link href="#features">
            <Button variant="outline" size="lg" className="bg-white/80 backdrop-blur-sm">
              Özellikleri Keşfet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
