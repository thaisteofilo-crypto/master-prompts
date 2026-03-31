import {
  Card,
  CardContent,
  CardHeader,
  Badge,
} from "@overlens/legacy-components";
import { CopyButton } from "./copy-button";
import type { Prompt } from "@/lib/prompts";
import { categories } from "@/lib/prompts";

const categoryColorMap: Record<string, string> = {
  escrita: "bg-brand-calla/20 text-brand-calla",
  conteudo: "bg-brand-carota/20 text-brand-carota",
  seo: "bg-brand-cloro/20 text-brand-cloro",
  saas: "bg-brand-atmos/20 text-brand-atmos",
  marketing: "bg-brand-sahara/20 text-brand-sahara",
  code: "bg-brand-kobold/20 text-brand-kobold",
  produtividade: "bg-brand-midori/20 text-brand-midori",
  debugging: "bg-brand-boreal/20 text-brand-boreal",
  landing: "bg-brand-nubia/20 text-brand-nubia",
  monetizacao: "bg-brand-khewra/20 text-brand-khewra",
};

function HighlightBrackets({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span key={i} className="text-brand-atmos font-medium">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function PromptCard({ prompt }: { prompt: Prompt }) {
  const cat = categories.find((c) => c.slug === prompt.categorySlug);
  const colorClass = categoryColorMap[prompt.categorySlug] ?? "";

  return (
    <Card className="flex flex-col h-full bg-card border-border/30 hover:border-border/60 transition-colors">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" className={colorClass}>
              {cat?.label ?? prompt.category}
            </Badge>
            <span className="text-xs text-muted-foreground font-mono">
              #{prompt.promptNumber}
            </span>
          </div>
          <CopyButton text={prompt.text} />
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-foreground/80 leading-relaxed">
          <HighlightBrackets text={prompt.text} />
        </p>
      </CardContent>
    </Card>
  );
}
