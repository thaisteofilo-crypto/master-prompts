import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MASTER PROMPTS — Overlens",
  description:
    "120 prompts profissionais para o Claude, traduzidos para português. 10 categorias: escrita, SEO, marketing, código, produtividade e mais.",
  icons: {
    icon: "data:,",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
