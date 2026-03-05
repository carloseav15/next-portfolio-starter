import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

const toneClasses: Record<"neutral" | "info", string> = {
  neutral:
    "border-b border-[var(--color-border)] bg-[linear-gradient(90deg,var(--color-subtle-bg),transparent_60%,var(--color-subtle-bg))] text-[var(--color-text-soft)]",
  info:
    "border-b border-[var(--color-proof-verified-border)] bg-[var(--color-proof-verified-bg)] text-[var(--color-proof-verified-text)]",
};

export function DevelopmentBanner() {
  const { developmentBanner } = siteConfig;

  if (!developmentBanner.enabled) {
    return null;
  }

  return (
    <div role="status" aria-live="polite" className={toneClasses[developmentBanner.tone]}>
      <Container>
        <p className="py-2 text-center text-xs font-semibold tracking-[0.03em] sm:text-sm">
          {developmentBanner.message}
        </p>
      </Container>
    </div>
  );
}
