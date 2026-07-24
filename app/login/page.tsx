import { Suspense } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-12">
        <div className="pointer-events-none absolute inset-0 lab-grid opacity-60" />
        <div className="relative z-10 flex w-full flex-col items-center gap-6">
          <Suspense
            fallback={
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
            }
          >
            <LoginForm />
          </Suspense>
          <Link href="/" className="text-sm text-slate-500 hover:text-brand-700">
            Ana sayfaya dön
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
