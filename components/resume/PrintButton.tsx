"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="rounded bg-[var(--color-accent)] px-3 py-1.5 font-bold text-[var(--color-on-accent)] hover:bg-[var(--color-accent-strong)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus)]"
    >
      Open Print Dialog
    </button>
  );
}
