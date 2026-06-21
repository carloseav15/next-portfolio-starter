import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type KPIStripProps = {
  children: ReactNode;
  className?: string;
};

export function KPIStrip({ children, className }: KPIStripProps) {
  return <div className={cn("kpi-strip", className)}>{children}</div>;
}

type KPIItemProps = {
  label: string;
  value: string;
  context?: string;
  className?: string;
};

export function KPIItem({ label, value, context, className }: KPIItemProps) {
  return (
    <div className={cn("kpi-item", className)}>
      <p className="editorial-kicker">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-[var(--color-text)]">{value}</p>
      {context && <p className="mt-1 text-sm text-[var(--color-text-soft)]">{context}</p>}
    </div>
  );
}
