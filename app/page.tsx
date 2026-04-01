"use client";

import { useState, useMemo } from "react";
import { Input, Badge, Button } from "@overlens/legacy-components";
import {
  SearchLineIcon,
  CloseLineIcon,
  EditSolidIcon,
  DocSolidIcon,
  ChartLineIcon,
  CloudSolidIcon,
  ShopSolidIcon,
  CognitionLineIcon,
  BoltSolidIcon,
  ToolSolidIcon,
  FavoriteSolidIcon,
  CrownSolidIcon,
} from "@overlens/legacy-icons";
import { PromptCard } from "@/components/prompt-card";
import { prompts, categories } from "@/lib/prompts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const categoryConfig: Record<
  string,
  { icon: any; bg: string; text: string }
> = {
  escrita: { icon: EditSolidIcon, bg: "bg-brand-calla", text: "text-neutral-900" },
  conteudo: { icon: DocSolidIcon, bg: "bg-brand-carota", text: "text-neutral-900" },
  seo: { icon: ChartLineIcon, bg: "bg-brand-cloro", text: "text-neutral-900" },
  saas: { icon: CloudSolidIcon, bg: "bg-brand-atmos", text: "text-neutral-900" },
  marketing: { icon: ShopSolidIcon, bg: "bg-brand-sahara", text: "text-neutral-900" },
  code: { icon: CognitionLineIcon, bg: "bg-brand-kobold", text: "text-neutral-100" },
  produtividade: { icon: BoltSolidIcon, bg: "bg-brand-midori", text: "text-neutral-900" },
  debugging: { icon: ToolSolidIcon, bg: "bg-brand-boreal", text: "text-neutral-100" },
  landing: { icon: FavoriteSolidIcon, bg: "bg-brand-nubia", text: "text-neutral-900" },
  monetizacao: { icon: CrownSolidIcon, bg: "bg-brand-khewra", text: "text-neutral-900" },
};

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = prompts;
    if (activeCategory) {
      result = result.filter((p) => p.categorySlug === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.text.toLowerCase().includes(q));
    }
    return result;
  }, [search, activeCategory]);

  const countByCategory = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of prompts) {
      counts[p.categorySlug] = (counts[p.categorySlug] || 0) + 1;
    }
    return counts;
  }, []);

  const activeCat = categories.find((c) => c.slug === activeCategory);

  return (
    <div className="min-h-screen bg-black">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-60 bg-black border-r border-border/20 flex flex-col transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="px-4 pt-6 pb-8 flex items-center justify-between">
          <img src="/logo.svg" alt="Overlens" className="h-[18px] w-auto" />
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <CloseLineIcon size="sm" />
          </button>
        </div>

        {/* Search */}
        <div className="px-3 pb-3">
          <div className="relative">
            <SearchLineIcon
              size="sm"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-12 h-8 text-xs bg-neutral-900 border-border/20"
            />
            <kbd className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground bg-neutral-800 rounded px-1.5 py-0.5 font-mono">
              &#8984;K
            </kbd>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-2 pb-4">
          <button
            onClick={() => {
              setActiveCategory(null);
              setSidebarOpen(false);
            }}
            className={`w-full text-left px-3 py-1.5 text-[13px] rounded-md transition-colors cursor-pointer mb-0.5 ${
              activeCategory === null
                ? "bg-neutral-800/80 text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-neutral-800/40"
            }`}
          >
            Master 100
          </button>

          <div className="h-px bg-neutral-800 my-2 mx-2" />

          {categories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => {
                  setActiveCategory(isActive ? null : cat.slug);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-1.5 text-[13px] rounded-md transition-colors cursor-pointer mb-0.5 ${
                  isActive
                    ? "bg-neutral-800/80 text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-neutral-800/40"
                }`}
              >
                <span className="truncate">{cat.label}</span>
                <svg
                  className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? "rotate-90" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div className="lg:ml-60">
        {/* Mobile header */}
        <header className="lg:hidden sticky top-0 z-30 bg-black/90 backdrop-blur-lg border-b border-neutral-800 px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-muted-foreground hover:text-foreground"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <img src="/logo.svg" alt="Overlens" className="h-[14px] w-auto" />
        </header>

        {/* Page content */}
        <div className="px-6 sm:px-10 lg:px-16 py-10 max-w-[1400px]">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight uppercase mb-2">
            {activeCategory ? activeCat?.label : "Master 100"}
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            {activeCategory
              ? `${countByCategory[activeCategory] || 0} prompts nesta categoria. Clique para copiar.`
              : "100 prompts profissionais para o Claude. Navegue pelas categorias."}
          </p>

          {/* Category cards grid (home) */}
          {!activeCategory && !search.trim() && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {categories.map((cat) => {
                const config = categoryConfig[cat.slug];
                const Icon = config.icon;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className="flex items-center gap-4 px-5 py-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all text-left cursor-pointer group"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${config.bg} flex items-center justify-center shrink-0`}
                    >
                      <Icon size="sm" className={config.text} />
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-foreground">
                        {cat.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {countByCategory[cat.slug] || 0} prompts
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Prompt cards (filtered) */}
          {(activeCategory || search.trim()) && (
            <>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-muted-foreground">Nenhum prompt encontrado.</p>
                  <Button
                    variant="secondary"
                    className="mt-4"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory(null);
                    }}
                  >
                    Limpar filtros
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                  {filtered.map((prompt) => (
                    <PromptCard key={prompt.id} prompt={prompt} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
