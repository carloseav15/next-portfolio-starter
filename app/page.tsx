import { ArrowRight, ArrowUpRight, FileText, MessageCircle, Quote } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProofPill } from "@/components/ui/ProofPill";
import { Section } from "@/components/ui/Section";
import {
  activePlatformsInProduction,
  caseStudyHighlights,
  profileIdentity,
  profileMetrics,
  recommendations,
  recruiterResponseWindow,
} from "@/lib/profile";
import { DIGICORP_PROOF, externalLinks } from "@/lib/links";
import { createAbsoluteUrl } from "@/lib/site";
import { actionLinkClassName, textLinkClassName } from "@/lib/uiClasses";

const canonicalUrl = createAbsoluteUrl("/");
const ogImageUrl = createAbsoluteUrl(DIGICORP_PROOF.imageSrc);
const homeSeoDescription =
  "Portfolio of Carlos Arancibia, Full-Stack and Mobile Software Engineer with 7+ years in production systems and DigiApp ownership.";

export const metadata: Metadata = {
  title: "Home",
  description: homeSeoDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Home",
    description: homeSeoDescription,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, alt: "Digicorp production proof" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home",
    description: homeSeoDescription,
    images: [ogImageUrl],
  },
};

const digicorpProofBullets = [
  "Main programmer for public Android and iOS app release cycles.",
  "Designed and maintained Digicorp's e-commerce web platform from zero with Vanilla JavaScript.",
  "Integrated payment and operational workflows under live business constraints.",
];

const recommendation = recommendations[0];

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
    postalCode: "34105",
    addressCountry: "US",
  },
  sameAs: [externalLinks.linkedin.href, externalLinks.github.href, externalLinks.website.href].filter(Boolean),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <Section as="div" density="hero" titleAs="h1" title={profileIdentity.headline} description={profileIdentity.summary}>
        <div className="motion-fade-in">
          <p className="editorial-kicker">{profileIdentity.roleLabel}</p>
          <p className="mt-5 max-w-[70ch] text-base leading-relaxed text-[var(--color-text-soft)] sm:text-lg">
            {profileIdentity.openTo} Based in {profileIdentity.location}.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/case-studies" className="w-full gap-2 sm:w-auto">
              Explore Case Studies
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href="/resume/carlos-arancibia-resume.pdf"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full gap-2 sm:w-auto"
            >
              Open Resume
              <FileText aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only"> (opens in new tab)</span>
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section density="flush" tone="muted">
        <div className="kpi-strip motion-fade-in motion-delay-1">
          {profileMetrics.map((metric) => (
            <article key={metric.label} className="kpi-item">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                {metric.label}
              </p>
              <p className="mt-1 text-2xl font-semibold text-[var(--color-text)]">{metric.value}</p>
              <p className="mt-1 text-sm text-[var(--color-text-soft)]">{metric.context}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--color-text-muted)]">
          See full timeline in{" "}
          <Link href="/about" className={textLinkClassName}>
            About
          </Link>{" "}
          and delivery details in{" "}
          <Link href="/case-studies" className={textLinkClassName}>
            Case Studies
          </Link>
          .
        </p>
      </Section>

      <Section
        eyebrow="Active In Production Today"
        title="Operational systems still running"
        description="These platforms remain active in real-world use today, independent of employment timeline changes."
      >
        <div className="flex flex-wrap gap-2 motion-fade-in motion-delay-1">
          {activePlatformsInProduction.map((platform) => (
            <span
              key={platform.name}
              className="inline-flex items-center rounded-full border border-[var(--color-proof-verified-border)] bg-[var(--color-proof-verified-bg)] px-3.5 py-2 text-sm font-semibold text-[var(--color-proof-verified-text)]"
              title={platform.note}
            >
              {platform.name}
            </span>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Proof Lane"
        title="Digicorp DigiApp ownership"
        description="Proof lane for production delivery, release continuity, and measurable distribution outcomes."
        tone="contrast"
      >
        <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
          <Card variant="proof" className="space-y-4 motion-fade-in">
            <ProofPill status={DIGICORP_PROOF.status} />
            <p className="text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
              Digicorp is one of Bolivia&apos;s largest technology distributors with 170+ professionals.
              This work covered app shipping, e-commerce delivery, maintenance, and operational reliability
              inside a live business environment.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
              {digicorpProofBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-1">
              {[externalLinks.googlePlay, externalLinks.appStore].map((link) => (
                <ButtonLink
                  key={link.id}
                  href={link.href!}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  <span className="sr-only"> (opens in new tab)</span>
                </ButtonLink>
              ))}
            </div>

            <p className="text-sm text-[var(--color-text-muted)]">{externalLinks.googlePlay.note}</p>
            <p className="text-sm text-[var(--color-text-muted)]">{externalLinks.appStore.note}</p>
            <p className="text-sm text-[var(--color-text-muted)]">
              Digicorp websites:{" "}
              <a
                href={externalLinks.digicorpBolivia.href}
                className={textLinkClassName}
                target="_blank"
                rel="noopener noreferrer"
              >
                digicorp.com.bo
              </a>{" "}
              ·{" "}
              <a
                href={externalLinks.digicorpPeru.href}
                className={textLinkClassName}
                target="_blank"
                rel="noopener noreferrer"
              >
                digicorp.com.pe
              </a>{" "}
              ·{" "}
              <a
                href={externalLinks.digicorpChile.href}
                className={textLinkClassName}
                target="_blank"
                rel="noopener noreferrer"
              >
                digicorp.cl
              </a>
            </p>
            <Link href="/case-studies/digicorp" className={actionLinkClassName}>
              Read Digicorp case study
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </Card>

          <Card variant="flat" className="overflow-hidden p-3 sm:p-4 motion-fade-in motion-delay-1">
            <figure>
              <Image
                src={DIGICORP_PROOF.imageSrc}
                alt={DIGICORP_PROOF.imageAlt}
                width={1400}
                height={900}
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
                className="h-auto w-full rounded-xl border border-[var(--color-border)]"
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {DIGICORP_PROOF.note}
              </figcaption>
            </figure>
          </Card>
        </div>
      </Section>

      {recommendation && (
        <Section title="Professional Recommendation" density="compact" tone="contrast">
          <Card variant="flat" className="space-y-3 motion-fade-in motion-delay-1">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
              <Quote aria-hidden="true" className="h-4 w-4" />
              LinkedIn signal
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
                  className={textLinkClassName}
                >
                  {recommendation.sourceLabel}
                </a>
              ) : (
                recommendation.sourceLabel
              )}{" "}
              · {recommendation.dateLabel}
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              Relationship: {recommendation.relationshipLabel}.
            </p>
          </Card>
        </Section>
      )}

      <Section
        eyebrow="Case Study Snapshot"
        title="Outcome-first delivery stories"
        description="Three practical delivery contexts: DigiApp and e-commerce ownership, high-volume payment collections, and operational reliability."
        tone="muted"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {caseStudyHighlights.map((item, index) => (
            <Card
              key={item.slug}
              hoverable
              variant="elevated"
              className={`flex h-full flex-col space-y-4 motion-fade-in ${index === 1 ? "motion-delay-1" : index === 2 ? "motion-delay-2" : ""}`}
            >
              <h3 className="text-lg font-semibold text-[var(--color-text)]">{item.title}</h3>
              <p className="text-sm font-semibold text-[var(--color-text)]">{item.outcome}</p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-[var(--color-text-soft)]">
                {item.impactMetrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-[var(--color-text-soft)]">{item.summary}</p>
              <Link
                href={`/case-studies/${item.slug}`}
                className={`${actionLinkClassName} mt-auto`}
              >
                Open case study
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Contact"
        title="Available for Software Engineer I/II roles"
        description="If this profile matches your team needs, use the contact page for direct channels and quick outreach."
      >
        <Card variant="proof" className="space-y-5 motion-fade-in">
          <p className="text-sm text-[var(--color-text-soft)] sm:text-base">
            Based in {profileIdentity.location}. Open to remote or on-site collaboration.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact" className="w-full gap-2 sm:w-auto">
              Open Contact Page
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">{recruiterResponseWindow}</p>
        </Card>
      </Section>
    </>
  );
}
