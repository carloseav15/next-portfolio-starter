import { ArrowRight, ArrowUpRight, FileText, Quote } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { KPIStrip, KPIItem } from "@/components/ui/KPIStrip";
import { ContactForm } from "@/components/ui/ContactForm";
import { caseStudies } from "@/lib/caseStudies";
import { externalLinks } from "@/lib/links";
import {
  featuredWins,
  personalStrengths,
  profileIdentity,
  profileMetrics,
  recommendations,
  recruiterQuickFacts,
  strengthLabels,
  technicalSkills,
} from "@/lib/profile";
import { buildPageMetadata, createAbsoluteUrl, siteConfig } from "@/lib/site";
import { actionLinkClasses, textLinkClasses } from "@/components/ui/Link";

const canonicalUrl = createAbsoluteUrl("/");
const homeSeoDescription =
  "Portfolio of Carlos Arancibia, a full-stack and mobile software engineer with 7+ years shipping production apps, payment platforms, and internal tools across LATAM and the U.S. Based in Naples, FL.";

export const metadata: Metadata = buildPageMetadata({
  title: siteConfig.defaultTitle,
  description: homeSeoDescription,
  pathname: "/",
  ogAlt: "Carlos Arancibia portfolio preview",
  keywords: [
    "Carlos Arancibia",
    "full-stack and mobile software engineer",
    "React Next.js portfolio",
    "payment workflows",
    "internal tools",
  ],
});

const recommendation = recommendations[0];
const caseStudyBySlug = Object.fromEntries(caseStudies.map((caseStudy) => [caseStudy.slug, caseStudy]));

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profileIdentity.fullName,
  jobTitle: "Software Engineer",
  description: profileIdentity.summary,
  email: profileIdentity.email,
  url: canonicalUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Naples",
    addressRegion: "FL",
    addressCountry: "US",
  },
  sameAs: [externalLinks.linkedin.href, externalLinks.github.href, externalLinks.website.href].filter(Boolean),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.personName,
  url: canonicalUrl,
  description: homeSeoDescription,
  inLanguage: "en-US",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      <Section
        as="div"
        density="hero"
        eyebrow={profileIdentity.roleLabel}
        titleAs="h1"
        title={profileIdentity.headline}
        description={profileIdentity.summary}
      >
        <div className="motion-fade-in space-y-6">
          <div className="flex flex-wrap gap-2">
            {profileIdentity.coreStack.map((item) => (
              <Badge key={item} variant="accent" className="px-4 py-2 text-sm">
                {item}
              </Badge>
            ))}
          </div>

          <p className="max-w-[70ch] text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
            {profileIdentity.openTo}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink
              href="/resume/print"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full gap-2 sm:w-auto"
            >
              View Resume
              <FileText aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only"> (opens in new tab)</span>
            </ButtonLink>
            <ButtonLink href="/case-studies" variant="secondary" className="w-full gap-2 sm:w-auto">
              View Case Studies
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
            <Link href="/#contact-section" className={`${textLinkClasses} text-sm font-semibold`}>
              Contact
            </Link>
          </div>
        </div>
      </Section>

      <Section density="compact" tone="muted">
        <KPIStrip className="motion-fade-in motion-delay-1">
          {profileMetrics.map((metric) => (
            <KPIItem key={metric.label} label={metric.label} value={metric.value} context={metric.context} />
          ))}
        </KPIStrip>
      </Section>

      <Section
        eyebrow="Selected Work"
        title="Three products that show how I build"
        description="These are the clearest examples of app delivery, payment workflows, and internal systems shaped around real team needs."
      >
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:gap-4 md:overflow-x-visible md:pb-0 scrollbar-none">
          {featuredWins.map((win, index) => {
            const relatedCaseStudy = caseStudyBySlug[win.id];

            if (!relatedCaseStudy) {
              return null;
            }

            return (
              <Card
                key={win.id}
                hoverable
                variant={index === 0 ? "proof" : "elevated"}
                className={`w-[85vw] shrink-0 snap-start md:w-auto flex h-full flex-col space-y-4 motion-fade-in ${
                  index === 1 ? "motion-delay-1" : index === 2 ? "motion-delay-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-subtle-bg)] shadow-sm">
                  <Image
                    src={`/images/${win.id}/card.webp`}
                    alt={`${win.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-3">
                  <p className="editorial-kicker">Featured project</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">{win.title}</h3>
                  <p className="text-sm font-semibold leading-relaxed text-[var(--color-text)]">{win.outcome}</p>
                </div>

                <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-3.5 py-3">
                  <p className="text-sm font-semibold text-[var(--color-text)]">What I owned</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-soft)]">{win.ownership}</p>
                </div>

                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-text-soft)]">
                  {relatedCaseStudy.cardHighlights.slice(0, 2).map((item) => (
                    <li key={`${win.id}-${item}`}>{item}</li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
                  <Link href={win.ctaHref} className={actionLinkClasses}>
                    Read {win.title} case study
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                  {win.proofHref && win.proofLabel ? (
                    <a
                      href={win.proofHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${textLinkClasses} inline-flex items-center gap-1.5 text-sm font-semibold`}
                    >
                      {win.proofLabel}
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  ) : null}
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Core Skills"
        title="Technical Stack & Expertise"
        description="The tools, languages, and frameworks I use to build and support production applications."
        density="compact"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((group, index) => (
            <Card
              key={group.category}
              variant="flat"
              className={`space-y-3 motion-fade-in ${index % 2 === 0 ? "" : "motion-delay-1"}`}
            >
              <p className="editorial-kicker">{group.category}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="muted" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How I Work"
        title="I like work that connects product context and implementation detail"
        description="The strongest projects I have worked on needed someone who could build, communicate clearly, and keep decisions grounded in real usage."
        tone="contrast"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {personalStrengths.map((item, index) => (
            <Card
              key={item}
              variant="flat"
              className={`h-full space-y-3 motion-fade-in ${
                index === 1 ? "motion-delay-1" : index === 2 ? "motion-delay-2" : ""
              }`}
            >
              <p className="editorial-kicker">{strengthLabels[index]}</p>
              <p className="text-base leading-relaxed text-[var(--color-text)] sm:text-lg">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      {recommendation ? (
        <Section
          eyebrow="Recommendation"
          title="What a former executive said about working with me"
          description="A short external reference from my time at Digicorp."
          density="compact"
        >
          <Card variant="flat" className="space-y-4 motion-fade-in">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
              <Quote aria-hidden="true" className="h-4 w-4" />
              External reference
            </p>
            <blockquote className="text-lg font-semibold leading-relaxed text-[var(--color-text)] sm:text-xl">
              &ldquo;{recommendation.quote}&rdquo;
            </blockquote>
            <p className="text-sm leading-relaxed text-[var(--color-text-soft)]">
              {recommendation.author} · {recommendation.title} ·{" "}
              {recommendation.sourceUrl ? (
                <a
                  href={recommendation.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={textLinkClasses}
                >
                  {recommendation.sourceLabel}
                </a>
              ) : (
                recommendation.sourceLabel
              )}{" "}
              · {recommendation.dateLabel}
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">Relationship: {recommendation.relationshipLabel}.</p>
          </Card>
        </Section>
      ) : null}

      <Section
        id="contact-section"
        eyebrow="Hiring"
        title="Hiring? Start here"
        description="If you want the quick recruiter version, these are the details and channels I would start with."
        tone="muted"
      >
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] lg:items-start">
          <Card variant="proof" className="space-y-4 motion-fade-in">
            <div className="grid gap-3 sm:grid-cols-2">
              {recruiterQuickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-1)] px-4 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-[var(--color-text)]">{fact.value}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="flat" className="space-y-4 motion-fade-in motion-delay-1">
            <p className="text-sm leading-relaxed text-[var(--color-text-soft)]">
              Send a direct message or reach out via my standard channels below. I usually reply within 24-48 hours.
            </p>

            <ContactForm />

            <div className="pt-3 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="text-[var(--color-text-muted)]">Alternative channels:</span>
              <div className="flex gap-3">
                <a
                  href={externalLinks.email.href!}
                  className="font-semibold text-[var(--color-text-soft)] hover:text-[var(--color-link)] transition"
                >
                  Email Carlos
                </a>
                <span className="text-[var(--color-border-strong)]">•</span>
                <a
                  href={externalLinks.linkedin.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--color-text-soft)] hover:text-[var(--color-link)] transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
