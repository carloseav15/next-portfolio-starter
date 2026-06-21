"use client";

import { useCallback, useState } from "react";
import { AlertCircle, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ResumePreviewProps = {
  src: string;
};

export function ResumePreview({ src }: ResumePreviewProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handleOpen = () => {
    setOpen(true);
    setLoading(true);
    setError(false);
  };

  const handleClose = () => {
    setOpen(false);
    setLoading(false);
    setError(false);
  };

  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setLoading(false);
    setError(true);
  }, []);

  const handleRetry = () => {
    setError(false);
    setLoading(true);
    setRetryCount((c) => c + 1);
  };

  return (
    <div className="space-y-4">
      {!open ? (
        <Button type="button" variant="secondary" onClick={handleOpen}>
          Open inline preview
        </Button>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-[var(--color-text-soft)]">Resume Preview</p>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close inline preview"
              className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-[var(--color-text-muted)] transition hover:bg-[var(--color-subtle-bg)] hover:text-[var(--color-text)]"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            {loading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)]">
                <Loader2 aria-hidden="true" className="h-8 w-8 animate-spin text-[var(--color-text-muted)]" />
                <p className="text-sm text-[var(--color-text-soft)]">Loading resume preview...</p>
              </div>
            )}

            {error && (
              <div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)]"
                role="alert"
              >
                <AlertCircle aria-hidden="true" className="h-8 w-8 text-[var(--color-text-muted)]" />
                <p className="text-sm text-[var(--color-text-soft)]">Could not load the resume preview.</p>
                <Button type="button" variant="secondary" onClick={handleRetry} className="mt-2">
                  Try again
                </Button>
              </div>
            )}

            <iframe
              key={retryCount}
              src={src}
              title="Carlos Arancibia Resume"
              className={`h-[62vh] w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] sm:h-[72vh] ${loading || error ? "invisible" : "visible"}`}
              onLoad={handleLoad}
              onError={handleError}
            />
          </div>

          <p className="text-sm text-[var(--color-text-muted)]">
            Inline preview is optional to keep initial route performance cleaner.
          </p>
        </div>
      )}
    </div>
  );
}
