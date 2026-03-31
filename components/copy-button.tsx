"use client";

import { useState } from "react";
import { Button } from "@overlens/legacy-components";
import { CheckLineIcon } from "@overlens/legacy-icons";

function CopyIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={handleCopy}
      className="gap-1.5 shrink-0"
    >
      {copied ? (
        <>
          <CheckLineIcon size="sm" />
          Copiado
        </>
      ) : (
        <>
          <CopyIcon />
          Copiar
        </>
      )}
    </Button>
  );
}
