import type { ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ProofPill } from "@/components/ui/ProofPill";
import { formatUtcDate } from "@/lib/dates";
import type { CaseStudyMetadata } from "@/lib/caseStudies";
import { textLinkClassName } from "@/lib/uiClasses";

type CaseStudyArticleProps = {
  metadata: CaseStudyMetadata;
  children: ReactNode;
};

export function CaseStudyArticle({ metadata, children }: CaseStudyArticleProps) {
  const atGlance = [
    { label: "Outcome", value: metadata.primaryOutcome },
    { label: "Ownership", value: metadata.ownershipLabel },
    { label: "Timeline", value: metadata.timeline },
    { label: "Stack", value: metadata.stack.join(" · ") },
  ];

  return (
    <Container className="py-12 sm:py-16">
      <Link
        href="/case-studies"
        className={`${textLinkClassName} inline-flex items-center text-sm font-semibold no-underline`}
      >
        Back to case studies
      </Link>

      <article className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6 shadow-[0_22px_44px_-30px_var(--color-shadow)] sm:p-10">
        <header className="border-b border-[var(--color-border)] pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {metadata.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
            <ProofPill status={metadata.evidenceStatus} />
            {metadata.activeInProduction && (
              <Badge variant="accent" className="w-fit">
                Active in Production
              </Badge>
            )}
          </div>

          <h1 className="display-heading text-balance text-3xl text-[var(--color-text)] sm:text-5xl">
            {metadata.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-text-soft)] sm:text-lg">
            {metadata.summary}
          </p>

          <p className="mt-3 text-sm font-semibold text-[var(--color-text-muted)]">
            {formatUtcDate(metadata.date, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            {" · "}
            {metadata.readingTime}
          </p>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Card variant="flat" className="border-[var(--color-border)] bg-[var(--color-subtle-bg)] p-4 sm:p-5">
            <h2 className="text-lg font-semibold text-[var(--color-text)]">At a glance</h2>
            <dl className="mt-4 grid gap-3">
              {atGlance.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-1)] p-3"
                >
                  <dt className="text-sm font-semibold text-[var(--color-text-soft)]">{item.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[var(--color-text)]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Card>

          <div className="space-y-4">
            <Card variant="flat" className="border-[var(--color-border)] bg-[var(--color-subtle-bg)] p-4 sm:p-5">
              <h2 className="text-lg font-semibold text-[var(--color-text)]">Impact metrics</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-text-soft)]">
                {metadata.impactMetrics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>

            <Card variant="flat" className="border-[var(--color-border)] bg-[var(--color-subtle-bg)] p-4 sm:p-5">
              <h2 className="text-lg font-semibold text-[var(--color-text)]">Why this matters</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
                {metadata.whyItMatters}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {metadata.stack.map((item) => (
                  <Badge key={item} variant="muted">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="prose-case mt-8">{children}</div>
      </article>
    </Container>
  );
}
