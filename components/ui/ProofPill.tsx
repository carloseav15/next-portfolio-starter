import { cn } from "@/lib/cn";
import { getProofAvailabilityLabel, type ProofStatus } from "@/lib/proof";

type ProofPillProps = {
  status: ProofStatus;
  className?: string;
  label?: string;
};

export function ProofPill({ status, className, label = "Evidence" }: ProofPillProps) {
  return (
    <span className={cn("proof-pill", className)} data-status={status}>
      <span>{label}</span>
      <span>{getProofAvailabilityLabel(status)}</span>
    </span>
  );
}
