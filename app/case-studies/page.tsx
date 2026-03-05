import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { caseStudies } from "@/lib/caseStudies";
import { formatUtcDate } from "@/lib/dates";
import { DIGICORP_PROOF } from "@/lib/links";
import { activePlatformsInProduction } from "@/lib/profile";
import { createAbsoluteUrl } from "@/lib/site";
import { actionLinkClassName } from "@/lib/uiClasses";

const canonicalUrl = createAbsoluteUrl("/case-studies");
const ogImageUrl = createAbsoluteUrl(DIGICORP_PROOF.imageSrc);

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Outcome-oriented case studies covering DigiApp ownership, payment operations, operational reliability, and role-based soccer workflow design.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Case Studies",
    description:
      "Outcome-oriented case studies covering DigiApp ownership, payment operations, operational reliability, and role-based soccer workflow design.",
    url: canonicalUrl,
    images: [{ url: ogImageUrl, alt: "Case studies overview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies",
    description:
      "Outcome-oriented case studies covering DigiApp ownership, payment operations, operational reliability, and role-based soccer workflow design.",
    images: [ogImageUrl],
  },
};

export default function CaseStudiesPage() {
  const primaryCaseStudies = caseStudies.filter((caseStudy) => caseStudy.audienceTier === "primary");
  const secondaryCaseStudies = caseStudies.filter((caseStudy) => caseStudy.audienceTier === "secondary");

  return (
    <Section
      eyebrow="Case Studies"
      title="Delivery stories with operational context"
      titleAs="h1"
      description="Production delivery cases ordered by outcome clarity and evidence strength."
      density="compact"
    >
      <p className="mb-3 text-sm text-[var(--color-text-muted)]">
        Current production continuity is visible across Octopus, Tiempo de Cambio, and Digicorp.
      </p>

      <div className="mb-5 flex flex-wrap gap-2 motion-fade-in motion-delay-1">
        {activePlatformsInProduction.map((platform) => (
          <span
            key={platform.name}
            className="inline-flex items-center rounded-full border border-[var(--color-proof-verified-border)] bg-[var(--color-proof-verified-bg)] px-3 py-1.5 text-xs font-semibold tracking-[0.02em] text-[var(--color-proof-verified-text)]"
            title={platform.note}
          >
            {platform.name}
          </span>
        ))}
      </div>

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {primaryCaseStudies.map((caseStudy, index) => (
          <Card
            key={caseStudy.slug}
            hoverable
            variant="elevated"
            className={`flex h-full flex-col motion-fade-in ${index % 2 === 0 ? "" : "motion-delay-1"}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-[var(--color-text-soft)]">
                {formatUtcDate(caseStudy.date, {
                  year: "numeric",
                  month: "long",
                })}
              </p>
              {caseStudy.activeInProduction && (
                <Badge variant="accent" className="w-fit">
                  Active in Production
                </Badge>
              )}
            </div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
              {caseStudy.title}
            </h2>

            <p className="mt-3 text-sm font-semibold text-[var(--color-text)]">{caseStudy.primaryOutcome}</p>

            <div className="mt-4">
              <p className="text-sm font-semibold text-[var(--color-text)]">Key outcomes</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--color-text-soft)]">
                {caseStudy.impactMetrics.map((metric) => (
                  <li key={`${caseStudy.slug}-${metric}`}>{metric}</li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
              {caseStudy.summary}
            </p>

            <div className="mt-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-3.5 py-3">
              <p className="text-sm font-semibold text-[var(--color-text)]">Role · Timeline</p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-soft)]">
                {caseStudy.role} · {caseStudy.timeline}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <Badge key={`${caseStudy.slug}-${tag}`}>{tag}</Badge>
              ))}
            </div>

            <div className="mt-5 flex flex-col items-start gap-2 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <Link href={`/case-studies/${caseStudy.slug}`} className={actionLinkClassName}>
                Read case study
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <span className="text-sm font-semibold text-[var(--color-text-muted)]">
                {caseStudy.readingTime}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {secondaryCaseStudies.length > 0 && (
        <div className="mt-10">
          <h2 className="display-heading text-2xl text-[var(--color-text)] sm:text-3xl">
            Product Context
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            MatchdayOS product context and long-term platform evolution kept available as supporting evidence.
          </p>
          <div className="mt-5 grid gap-4 sm:gap-5 lg:grid-cols-2">
            {secondaryCaseStudies.map((caseStudy) => (
              <Card key={caseStudy.slug} hoverable variant="flat" className="flex h-full flex-col motion-fade-in motion-delay-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-[var(--color-text-soft)]">
                    {formatUtcDate(caseStudy.date, {
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                  <span className="text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
                    Secondary
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                  {caseStudy.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
                  {caseStudy.summary}
                </p>
                <div className="mt-5 flex flex-col items-start gap-2 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <Link href={`/case-studies/${caseStudy.slug}`} className={actionLinkClassName}>
                    Read case study
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                  <span className="text-sm font-semibold text-[var(--color-text-muted)]">
                    {caseStudy.readingTime}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
