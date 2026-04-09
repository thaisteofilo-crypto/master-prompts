"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError("Senha incorreta.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-10 flex flex-col items-center">
          <img src="/logo.svg" alt="Overlens" className="h-5 w-auto mb-8" />
          <h1 className="text-lg font-heading font-bold uppercase tracking-wide text-foreground">
            Acesso restrito
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Insira a senha para continuar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="w-full h-10 px-3 text-sm rounded-lg bg-neutral-900 border border-neutral-700 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neutral-500 transition-colors"
          />
          {error && (
            <p className="text-xs text-red-400">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full h-10 rounded-lg bg-neutral-100 text-neutral-900 text-sm font-semibold disabled:opacity-40 hover:bg-white transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            {loading ? "Verificando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
