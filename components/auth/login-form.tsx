"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/lib/supabase/auth-context";
import { OAUTH_ENABLED } from "@/lib/constants";

export function LoginForm() {
  const { signIn, signInWithOAuth, configured } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/analyze";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error: authError } = await signIn(email.trim(), password);
    setLoading(false);
    if (authError) {
      setError(authError);
      return;
    }
    router.replace(next);
  }

  async function handleOAuth(provider: "google" | "github") {
    setError(null);
    setOauthLoading(true);
    const { error: authError } = await signInWithOAuth(provider);
    setOauthLoading(false);
    if (authError) setError(authError);
  }

  return (
    <Card className="w-full max-w-md border-slate-200/80 shadow-lg shadow-brand-500/5">
      <CardHeader className="space-y-3 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-lab-ink text-lab-signal">
          <Sparkles className="h-5 w-5" />
        </div>
        <CardTitle className="text-2xl">Giriş yap</CardTitle>
        <CardDescription>Analiz geçmişiniz ve RAG dokümanlarınız hesabınıza bağlı kalır.</CardDescription>
      </CardHeader>
      <CardContent>
        {!configured ? (
          <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Supabase yapılandırılmamış. `.env.local` dosyasına URL ve anon key ekleyin.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ornek@mail.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Şifre</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              <p className="text-right text-xs">
                <Link href="/forgot-password" className="text-brand-600 hover:text-brand-700">
                  Şifremi unuttum
                </Link>
              </p>
            </div>
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              Giriş yap
            </Button>
            <div className="relative py-2 text-center text-xs text-slate-400">
              <span className="bg-white px-2">veya</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant="outline"
                disabled={oauthLoading}
                onClick={() => handleOAuth("google")}
              >
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={oauthLoading}
                onClick={() => handleOAuth("github")}
              >
                GitHub
              </Button>
            </div>
            <p className="text-center text-sm text-slate-500">
              Hesabınız yok mu?{" "}
              <Link href="/signup" className="font-medium text-brand-600 hover:text-brand-700">
                Kayıt ol
              </Link>
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
