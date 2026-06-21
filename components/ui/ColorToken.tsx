"use client";

import { useEffect, useState } from "react";

function getCssVar(variable: string) {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

function ColorToken({ variable, label }: { variable: string; label: string }) {
  const [value, setValue] = useState(() => getCssVar(variable));
  useEffect(() => {
    const obs = new MutationObserver(() => setValue(getCssVar(variable)));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, [variable]);
  return (
    <div className="flex items-center gap-3 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-1)] p-3">
      <div className="h-10 w-10 shrink-0 rounded-sm" style={{ background: `var(${variable})` }} />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[var(--color-text)]">{label}</p>
        <p className="font-mono text-xs text-[var(--color-text-muted)]">{variable}</p>
        <p className="font-mono text-xs text-[var(--color-text-muted)]">{value || "\u2014"}</p>
      </div>
    </div>
  );
}

const colorGroups = [
  {
    title: "Background & Surfaces",
    tokens: [
      { variable: "--color-bg", label: "Page Background" },
      { variable: "--color-bg-texture", label: "Background Texture" },
      { variable: "--color-surface-1", label: "Surface 1 (Lowest)" },
      { variable: "--color-surface-2", label: "Surface 2 (Mid)" },
      { variable: "--color-surface-3", label: "Surface 3 (Highest)" },
      { variable: "--color-subtle-bg", label: "Subtle Background" },
      { variable: "--color-header-bg", label: "Header Background" },
    ],
  },
  {
    title: "Text",
    tokens: [
      { variable: "--color-text", label: "Primary Text" },
      { variable: "--color-text-soft", label: "Soft Text" },
      { variable: "--color-text-muted", label: "Muted Text" },
    ],
  },
  {
    title: "Borders",
    tokens: [
      { variable: "--color-border", label: "Border" },
      { variable: "--color-border-strong", label: "Strong Border" },
    ],
  },
  {
    title: "Accent",
    tokens: [
      { variable: "--color-accent", label: "Accent" },
      { variable: "--color-accent-strong", label: "Accent Strong" },
      { variable: "--color-on-accent", label: "On Accent" },
    ],
  },
  {
    title: "Interactive",
    tokens: [
      { variable: "--color-link", label: "Link" },
      { variable: "--color-link-hover", label: "Link Hover" },
      { variable: "--color-focus", label: "Focus Ring" },
    ],
  },
  {
    title: "Badge Status",
    tokens: [
      { variable: "--color-badge-accent-bg", label: "Accent BG" },
      { variable: "--color-badge-accent-border", label: "Accent Border" },
      { variable: "--color-badge-accent-text", label: "Accent Text" },
    ],
  },
  {
    title: "Proof Status",
    tokens: [
      { variable: "--color-proof-pending-bg", label: "Pending BG" },
      { variable: "--color-proof-pending-border", label: "Pending Border" },
      { variable: "--color-proof-pending-text", label: "Pending Text" },
      { variable: "--color-proof-verified-bg", label: "Verified BG" },
      { variable: "--color-proof-verified-border", label: "Verified Border" },
      { variable: "--color-proof-verified-text", label: "Verified Text" },
    ],
  },
  {
    title: "Semantic Feedback",
    tokens: [
      { variable: "--color-success-bg", label: "Success BG" },
      { variable: "--color-success-text", label: "Success Text" },
      { variable: "--color-error-bg", label: "Error BG" },
      { variable: "--color-error-text", label: "Error Text" },
      { variable: "--color-warning-bg", label: "Warning BG" },
      { variable: "--color-warning-text", label: "Warning Text" },
      { variable: "--color-info-bg", label: "Info BG" },
      { variable: "--color-info-text", label: "Info Text" },
    ],
  },
  {
    title: "Shadows",
    tokens: [{ variable: "--color-shadow", label: "Shadow" }],
  },
];

export function ColorTokensSection() {
  return (
    <section id="colors" className="scroll-mt-24">
      <h2 className="display-heading text-2xl">Color Tokens</h2>
      <p className="mt-1 text-sm text-[var(--color-text-soft)]">
        CSS custom properties across the design system. Toggle dark mode in the header to see dark values.
      </p>
      <div className="mt-6 space-y-8">
        {colorGroups.map((group) => (
          <div key={group.title}>
            <h3 className="editorial-kicker">{group.title}</h3>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.tokens.map((token) => (
                <ColorToken key={token.variable} {...token} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
