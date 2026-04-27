import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { caseStudies } from "@/lib/caseStudies";
import { formatUtcDate } from "@/lib/dates";
import { buildPageMetadata, createAbsoluteUrl } from "@/lib/site";
import { actionLinkClassName } from "@/lib/uiClasses";

const canonicalUrl = createAbsoluteUrl("/case-studies");
const caseStudiesDescription =
  "Case studies from Carlos Arancibia covering shipped mobile apps, payment workflows, and internal systems built for real teams across LATAM and the U.S.";

export const metadata: Metadata = buildPageMetadata({
  title: "Case Studies | Apps, Payments & Internal Tools | Carlos Arancibia",
  description: caseStudiesDescription,
  pathname: "/case-studies",
  ogAlt: "Case studies overview",
  keywords: [
    "Carlos Arancibia case studies",
    "mobile apps and payments",
    "internal systems case studies",
    "product engineering portfolio",
  ],
});

function renderResponsiveTags(tags: string[]) {
  return tags.slice(0, 3).map((tag, index) => (
    <Badge key={tag} className={index === 2 ? "hidden md:inline-flex" : ""}>
      {tag}
    </Badge>
  ));
}

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies | Apps, Payments & Internal Tools | Carlos Arancibia",
  description: caseStudiesDescription,
  url: canonicalUrl,
  inLanguage: "en-US",
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: caseStudies.length,
  itemListElement: caseStudies.map((caseStudy, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: caseStudy.title,
    url: createAbsoluteUrl(`/case-studies/${caseStudy.slug}`),
  })),
};

export default function CaseStudiesPage() {
  const primaryCaseStudies = caseStudies.filter((caseStudy) => caseStudy.audienceTier === "primary");
  const secondaryCaseStudies = caseStudies.filter((caseStudy) => caseStudy.audienceTier === "secondary");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Section
        eyebrow="Case Studies"
        title="Ownership, outcomes, and shipped systems"
        titleAs="h1"
        description="Start here if you want concrete proof of ownership, outcomes, and shipped systems."
        density="compact"
      >
        <p className="mb-6 max-w-[70ch] text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
          The cases below cover shipped apps, payment workflows, and internal systems, ordered to help
          recruiters and hiring managers move from strongest proof to supporting product depth without
          reading more than they need.
        </p>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
          {primaryCaseStudies.map((caseStudy, index) => (
            <Card
              key={caseStudy.slug}
              hoverable
              variant={index === 0 ? "proof" : "elevated"}
              className={`flex h-full flex-col space-y-4 p-4 sm:p-5 motion-fade-in ${index % 2 === 0 ? "" : "motion-delay-1"}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold text-[var(--color-text-soft)]">
                  {formatUtcDate(caseStudy.date, {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
                <div className="flex flex-wrap gap-2">{renderResponsiveTags(caseStudy.tags)}</div>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">{caseStudy.title}</h2>
                <p className="text-sm leading-relaxed text-[var(--color-text)] sm:text-base">{caseStudy.whyItMatters}</p>
              </div>

              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-text-soft)]">
                {caseStudy.cardHighlights.slice(0, 2).map((highlight) => (
                  <li key={`${caseStudy.slug}-${highlight}`}>{highlight}</li>
                ))}
              </ul>

              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-3.5 py-3">
                <p className="text-sm font-semibold text-[var(--color-text)]">Ownership</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-soft)]">
                  {caseStudy.ownershipLabel}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-1">
                <Link href={`/case-studies/${caseStudy.slug}`} className={actionLinkClassName}>
                  Read {caseStudy.title} case study
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
                <span className="hidden text-sm font-semibold text-[var(--color-text-muted)] sm:inline">
                  {caseStudy.readingTime}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {secondaryCaseStudies.length > 0 ? (
          <div className="mt-10">
            <h2 className="display-heading text-2xl text-[var(--color-text)] sm:text-3xl">
              Additional Product Work
            </h2>
            <p className="mt-2 max-w-[70ch] text-sm text-[var(--color-text-muted)] sm:text-base">
              Supporting product work that helps round out how I think about modern product engineering.
            </p>
            <div className="mt-5 grid gap-4 sm:gap-5 lg:grid-cols-2">
              {secondaryCaseStudies.map((caseStudy) => (
                <Card
                  key={caseStudy.slug}
                  hoverable
                  variant="flat"
                  className="flex h-full flex-col space-y-4 p-4 sm:p-5 motion-fade-in motion-delay-1"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[var(--color-text-soft)]">
                      {formatUtcDate(caseStudy.date, {
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                    <div className="flex flex-wrap gap-2">{renderResponsiveTags(caseStudy.tags)}</div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
                      {caseStudy.cardSummary}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--color-text)]">{caseStudy.whyItMatters}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-1">
                    <Link href={`/case-studies/${caseStudy.slug}`} className={actionLinkClassName}>
                      Read {caseStudy.title} case study
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                    <span className="hidden text-sm font-semibold text-[var(--color-text-muted)] sm:inline">
                      {caseStudy.readingTime}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : null}
      </Section>
    </>
  );
}
