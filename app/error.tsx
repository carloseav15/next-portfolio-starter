"use client";

import { useEffect } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="py-16 sm:py-24">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="display-heading text-4xl sm:text-5xl">Something went wrong</h1>
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
          An unexpected error occurred. This has been logged. Try refreshing the page.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="/" variant="primary">
            Go home
          </ButtonLink>
          <button
            onClick={reset}
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-border-strong)]"
          >
            Try again
          </button>
        </div>
      </div>
    </Container>
  );
}
