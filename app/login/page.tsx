"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Logo,
  Button,
  Input,
  Field,
  FieldLabel,
  FieldError,
  Heading,
  HeadingTitle,
  HeadingDescription,
} from "@overlens/legacy-components";

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
      <div className="w-full max-w-sm flex flex-col gap-8">
        <div className="flex flex-col items-center gap-6">
          <Logo name="overlens" variant="white" size="md" />
          <Heading className="text-center">
            <HeadingTitle size="sm">Acesso restrito</HeadingTitle>
            <HeadingDescription>
              Insira a senha para continuar.
            </HeadingDescription>
          </Heading>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Field>
            <FieldLabel htmlFor="password">Senha</FieldLabel>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            {error && <FieldError>{error}</FieldError>}
          </Field>

          <Button
            type="submit"
            disabled={loading || !password}
            className="w-full"
          >
            {loading ? "Verificando..." : "Entrar"}
          </Button>
        </form>
      </div>
    </div>
  );
}
