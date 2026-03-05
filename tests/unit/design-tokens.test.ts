import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

function extractCssBlock(content: string, selector: string) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = content.match(new RegExp(`${escaped}\\s*\\{([\\s\\S]*?)\\}`, "m"));

  if (!match) {
    throw new Error(`Missing CSS block for ${selector}`);
  }

  return match[1];
}

function parseVars(block: string) {
  const vars: Record<string, string> = {};

  for (const line of block.split("\n")) {
    const match = line.match(/(--[a-zA-Z0-9-]+)\s*:\s*([^;]+);/);

    if (match) {
      vars[match[1]] = match[2].trim();
    }
  }

  return vars;
}

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const normalized =
    clean.length === 3 ? clean.split("").map((char) => `${char}${char}`).join("") : clean;

  const value = Number.parseInt(normalized, 16);

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function srgbToLinear(channel: number) {
  const value = channel / 255;
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function contrastRatio(foreground: string, background: string) {
  const fg = hexToRgb(foreground);
  const bg = hexToRgb(background);

  const fgLuminance =
    0.2126 * srgbToLinear(fg.r) + 0.7152 * srgbToLinear(fg.g) + 0.0722 * srgbToLinear(fg.b);
  const bgLuminance =
    0.2126 * srgbToLinear(bg.r) + 0.7152 * srgbToLinear(bg.g) + 0.0722 * srgbToLinear(bg.b);

  const lighter = Math.max(fgLuminance, bgLuminance);
  const darker = Math.min(fgLuminance, bgLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

describe("design tokens", () => {
  const css = readFileSync(path.join(process.cwd(), "app/globals.css"), "utf8");
  const buttonSource = readFileSync(path.join(process.cwd(), "components/ui/Button.tsx"), "utf8");
  const lightVars = parseVars(extractCssBlock(css, ":root"));
  const darkVars = parseVars(extractCssBlock(css, ".dark"));

  it("locks recruiter-focused accent token values", () => {
    expect(lightVars["--color-accent"]).toBe("#0d7795");
    expect(lightVars["--color-accent-strong"]).toBe("#0a647a");
    expect(lightVars["--color-on-accent"]).toBe("#f3fcff");

    expect(darkVars["--color-accent"]).toBe("#28bddf");
    expect(darkVars["--color-accent-strong"]).toBe("#1ea4c3");
    expect(darkVars["--color-on-accent"]).toBe("#03202a");
  });

  it("keeps AA contrast ratios on critical button and body pairs", () => {
    expect(
      contrastRatio(lightVars["--color-on-accent"], lightVars["--color-accent"]),
    ).toBeGreaterThanOrEqual(4.5);
    expect(
      contrastRatio(lightVars["--color-on-accent"], lightVars["--color-accent-strong"]),
    ).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(lightVars["--color-text"], lightVars["--color-bg"])).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(lightVars["--color-link-hover"], lightVars["--color-bg"])).toBeGreaterThanOrEqual(
      4.5,
    );

    expect(contrastRatio(darkVars["--color-on-accent"], darkVars["--color-accent"])).toBeGreaterThanOrEqual(
      4.5,
    );
    expect(
      contrastRatio(darkVars["--color-on-accent"], darkVars["--color-accent-strong"]),
    ).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(darkVars["--color-text"], darkVars["--color-bg"])).toBeGreaterThanOrEqual(4.5);
  });

  it("avoids brightness-based hover on primary button to preserve AA contrast", () => {
    expect(buttonSource).not.toContain("hover:brightness-110");
    expect(buttonSource).toContain("hover:shadow-[0_20px_34px_-20px_var(--color-accent-strong)]");
  });
});
