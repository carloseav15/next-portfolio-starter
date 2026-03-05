"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type ResumePreviewProps = {
  src: string;
};

export function ResumePreview({ src }: ResumePreviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
      {!open ? (
        <Button type="button" variant="secondary" onClick={() => setOpen(true)}>
          Open inline preview
        </Button>
      ) : (
        <div className="space-y-3">
          <iframe
            src={src}
            title="Carlos Arancibia Resume"
            className="h-[62vh] w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] sm:h-[72vh]"
            loading="lazy"
          />
          <p className="text-sm text-[var(--color-text-muted)]">
            Inline preview is optional to keep initial route performance cleaner.
          </p>
        </div>
      )}
    </div>
  );
}
