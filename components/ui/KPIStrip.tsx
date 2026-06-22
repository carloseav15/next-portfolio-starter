"use client";

import { type ReactNode, useEffect, useState } from "react";
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
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (process.env.NODE_ENV === "test") return;

    // Match the first number containing digits and commas
    const match = value.match(/([\d,]+)/);
    if (!match) return;

    const rawNumStr = match[1].replace(/,/g, "");
    const targetNum = parseInt(rawNumStr, 10);
    if (isNaN(targetNum)) return;

    const duration = 1000; // 1 second animation duration
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad formula: progress * (2 - progress)
      const easeProgress = progress * (2 - progress);
      const currentNum = Math.round(easeProgress * targetNum);

      // Re-add commas for visual formatting
      const formattedNum = currentNum.toLocaleString();
      const updatedValue = value.replace(match[1], formattedNum);
      setDisplayValue(updatedValue);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setDisplayValue(value); // Ensure final value is exact
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className={cn("kpi-item", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-[var(--color-text)]">{displayValue}</p>
      {context && <p className="mt-1 text-sm text-[var(--color-text-soft)]">{context}</p>}
    </div>
  );
}
