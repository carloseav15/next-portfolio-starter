import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

const gitHubRepos: Record<string, string> = {
  playfit: "https://github.com/carloseav15/playfit",
  matchdayos: "https://github.com/carloseav15/matchday-os",
  portfolio: "https://github.com/carloseav15/next-portfolio-starter",
};
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { caseStudies } from "@/lib/caseStudies";
import { formatUtcDate } from "@/lib/dates";
import { buildPageMetadata, createAbsoluteUrl } from "@/lib/site";
import { ActionLink } from "@/components/ui/Link";

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

const caseStudyExtraDetails: Record<string, { category: string; kpi: string; tech: string[] }> = {
  digicorp: {
    category: "Mobile & B2B Commerce",
    kpi: "10,000+ Downloads",
    tech: ["Kotlin", "Vanilla JS", "Firebase"],
  },
  octopus: {
    category: "Transactional Payments",
    kpi: "~1,000 txs/day",
    tech: ["Flutter", "Android", "REST APIs"],
  },
  playfit: {
    category: "Local-First Web App",
    kpi: "Open Source / Next.js 16",
    tech: ["Next.js 16", "Supabase", "IndexedDB"],
  },
  matchdayos: {
    category: "Multi-Role B2B SaaS",
    kpi: "70 Pages / 37 Tables",
    tech: ["Next.js 15", "Supabase", "TypeScript"],
  },
  "us-ops": {
    category: "Internal Community Ops",
    kpi: "100+ Active Users",
    tech: ["Google Maps API", "SQL", "Role Workflows"],
  },
  portfolio: {
    category: "Personal Portfolio",
    kpi: "Open Source / Live Site",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS"],
  },
};

export default function CaseStudiesPage() {
  const primaryCaseStudies = caseStudies.filter((caseStudy) => caseStudy.audienceTier === "primary");
  const secondaryCaseStudies = caseStudies.filter((caseStudy) => caseStudy.audienceTier === "secondary");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <Section
        eyebrow="Case Studies"
        title="Engineered for Impact: Shipped Systems & Case Studies"
        titleAs="h1"
        description="Concrete proof of technical ownership, transactional reliability, and modern full-stack architectures."
        density="compact"
      >
        <p className="mb-8 max-w-[72ch] text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
          An organized selection of shipped apps, payment systems, and internal tools. Structured to help engineering
          recruiters and hiring managers quickly evaluate technical ownership, system outcomes, and production depth.
        </p>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-x-visible sm:pb-0 scrollbar-none">
          {primaryCaseStudies.map((caseStudy, index) => {
            const details = caseStudyExtraDetails[caseStudy.slug] || {
              category: "Software Development",
              kpi: "Active Project",
              tech: caseStudy.tags.slice(0, 3),
            };
            return (
              <Card
                key={caseStudy.slug}
                hoverable
                variant={index === 0 ? "proof" : "elevated"}
                className={`w-[85vw] shrink-0 snap-start sm:w-auto relative overflow-hidden flex h-full flex-col space-y-4 pt-6 p-4 sm:p-5 motion-fade-in ${
                  index % 2 === 0 ? "" : "motion-delay-1"
                }`}
              >
                {/* Accent border gradient */}
                <div
                  className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-teal-400 to-emerald-400"
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-badge-accent-text)] bg-[var(--color-badge-accent-bg)] border border-[var(--color-badge-accent-border)] px-2 py-0.5 rounded-full">
                      {details.category}
                    </span>
                    <span className="text-xs font-semibold text-[var(--color-text-muted)]">
                      {formatUtcDate(caseStudy.date, {
                        year: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-[var(--color-subtle-bg)] border border-[var(--color-border)] px-2.5 py-0.5 rounded-full text-xs font-bold text-[var(--color-text)] shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {details.kpi}
                  </div>
                </div>

                {caseStudy.slug !== "us-ops" ? (
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-subtle-bg)] shadow-sm">
                    <Image
                      src={`/images/${caseStudy.slug}/card.webp`}
                      alt={`${caseStudy.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : null}

                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-tight text-[var(--color-text)] sm:text-2xl hover:text-[var(--color-link)] transition duration-150">
                    {caseStudy.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[var(--color-text-soft)]">{caseStudy.primaryOutcome}</p>
                </div>

                {/* Key technologies list */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {details.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono font-medium text-[var(--color-text-muted)] bg-[var(--color-subtle-bg)]/40 px-2 py-0.5 rounded border border-[var(--color-border)]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2 w-full">
                  <div className="flex flex-wrap items-center gap-4">
                    <ActionLink
                      href={`/case-studies/${caseStudy.slug}`}
                      aria-label={`Read ${caseStudy.title} case study`}
                    >
                      Read Case Study
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </ActionLink>
                    {gitHubRepos[caseStudy.slug] && (
                      <a
                        href={gitHubRepos[caseStudy.slug]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-text-soft)] hover:text-[var(--color-link)] transition duration-150"
                      >
                        GitHub Code
                        <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                  <span className="hidden text-sm font-semibold text-[var(--color-text-muted)] sm:inline">
                    {caseStudy.readingTime}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {secondaryCaseStudies.length > 0 ? (
          <div className="mt-14">
            <h2 className="display-heading text-2xl text-[var(--color-text)] sm:text-3xl">Additional Product Work</h2>
            <p className="mt-2 mb-6 max-w-[70ch] text-sm text-[var(--color-text-muted)] sm:text-base">
              Supporting product work that helps round out how I think about modern product engineering.
            </p>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-x-visible sm:pb-0 scrollbar-none">
              {secondaryCaseStudies.map((caseStudy) => {
                const details = caseStudyExtraDetails[caseStudy.slug] || {
                  category: "Supporting Work",
                  kpi: "Completed",
                  tech: caseStudy.tags.slice(0, 3),
                };
                return (
                  <Card
                    key={caseStudy.slug}
                    hoverable
                    variant="flat"
                    className="w-[85vw] shrink-0 snap-start sm:w-auto relative overflow-hidden flex h-full flex-col space-y-4 pt-6 p-4 sm:p-5 motion-fade-in motion-delay-1"
                  >
                    {/* Accent border gradient for secondary */}
                    <div
                      className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-sky-400/50 to-blue-400/50"
                      aria-hidden="true"
                    />

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-badge-accent-text)] bg-[var(--color-badge-accent-bg)] border border-[var(--color-badge-accent-border)] px-2 py-0.5 rounded-full">
                          {details.category}
                        </span>
                        <span className="text-xs font-semibold text-[var(--color-text-muted)]">
                          {formatUtcDate(caseStudy.date, {
                            year: "numeric",
                            month: "short",
                          })}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 bg-[var(--color-subtle-bg)] border border-[var(--color-border)] px-2.5 py-0.5 rounded-full text-xs font-semibold text-[var(--color-text-soft)] shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        {details.kpi}
                      </div>
                    </div>

                    {caseStudy.slug !== "us-ops" ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-subtle-bg)] shadow-sm">
                        <Image
                          src={`/images/${caseStudy.slug}/card.webp`}
                          alt={`${caseStudy.title} screenshot`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-gradient-to-br from-sky-50 to-indigo-100 dark:from-sky-950 dark:to-indigo-900" />
                    )}

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold tracking-tight text-[var(--color-text)] sm:text-2xl hover:text-[var(--color-link)] transition duration-150">
                        {caseStudy.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--color-text-soft)]">
                        {caseStudy.primaryOutcome}
                      </p>
                    </div>

                    {/* Key technologies list */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {details.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono font-medium text-[var(--color-text-muted)] bg-[var(--color-subtle-bg)]/40 px-2 py-0.5 rounded border border-[var(--color-border)]/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2 w-full">
                      <div className="flex flex-wrap items-center gap-4">
                        <ActionLink
                          href={`/case-studies/${caseStudy.slug}`}
                          aria-label={`Read ${caseStudy.title} case study`}
                        >
                          Read Case Study
                          <ArrowRight aria-hidden="true" className="h-4 w-4" />
                        </ActionLink>
                        {gitHubRepos[caseStudy.slug] && (
                          <a
                            href={gitHubRepos[caseStudy.slug]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-text-soft)] hover:text-[var(--color-link)] transition duration-150"
                          >
                            GitHub Code
                            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                      <span className="hidden text-sm font-semibold text-[var(--color-text-muted)] sm:inline">
                        {caseStudy.readingTime}
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        ) : null}
      </Section>
    </>
  );
}
