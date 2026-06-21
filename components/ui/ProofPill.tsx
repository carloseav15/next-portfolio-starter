import { cn } from "@/lib/cn";
import { getProofAvailabilityLabel, type ProofStatus } from "@/lib/proof";

type ProofPillVariant = "proof" | "default";

type ProofPillProps = {
  status: ProofStatus;
  className?: string;
  label?: string;
  variant?: ProofPillVariant;
};

export function ProofPill({ status, className, label = "Evidence", variant = "proof" }: ProofPillProps) {
  return (
    <span
      className={cn(
        variant === "proof" && "proof-pill",
        variant === "default" &&
          "inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-3 py-1 text-xs font-semibold text-[var(--color-text-soft)]",
        className,
      )}
      data-status={variant === "proof" ? status : undefined}
    >
      <span>{label}</span>
      {variant === "proof" && <span>{getProofAvailabilityLabel(status)}</span>}
    </span>
  );
}
