import { FlaskConical } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <FlaskConical className="h-4 w-4 text-brand-600" />
          <span>FirstClick — kullanıcı simülasyon laboratuvarı</span>
        </div>
        <p className="text-xs text-slate-500">Persona · Corpus · Hafıza · Karşılaştır</p>
      </div>
    </footer>
  );
}
