import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { DIGICORP_PROOF } from "@/lib/links";
import {
  activePlatformsInProduction,
  careerPrinciples,
  careerTimeline,
  profileIdentity,
} from "@/lib/profile";
import { createAbsoluteUrl } from "@/lib/site";

const canonicalUrl = createAbsoluteUrl("/about");
const ogImageUrl = createAbsoluteUrl(DIGICORP_PROOF.imageSrc);

export const metadata: Metadata = {
  title: "About",
  description:
    "Career arc from data center operations to full-stack and mobile software engineering, including active platform continuity across LATAM and U.S. contexts.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "About",
    description:
      "Career arc from data center operations to full-stack and mobile software engineering, including active platform continuity across LATAM and U.S. contexts.",
    url: canonicalUrl,
    images: [{ url: ogImageUrl, alt: "Carlos Arancibia profile overview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About",
    description:
      "Career arc from data center operations to full-stack and mobile software engineering, including active platform continuity across LATAM and U.S. contexts.",
    images: [ogImageUrl],
  },
};

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="Career Arc"
        title="From infrastructure support to full-stack and mobile ownership"
        titleAs="h1"
        description="Production journey across LATAM and U.S. contexts, including systems that remain active after delivery."
        density="compact"
      >
        <Card variant="proof" className="space-y-4 motion-fade-in">
          <p className="max-w-[70ch] text-[0.98rem] leading-relaxed text-[var(--color-text-soft)] sm:text-base">
            {profileIdentity.summary} I work across multicultural teams in LATAM and the U.S., and I
            focus on translating operational complexity into dependable software systems.
          </p>
          <p className="text-[0.98rem] leading-relaxed text-[var(--color-text-soft)] sm:text-base">
            I focus on production evidence, continuity, and reliable operations across mobile, payments, and
            business-critical workflow systems.
          </p>
          <p className="text-[0.98rem] leading-relaxed text-[var(--color-text-soft)] sm:text-base">
            {profileIdentity.openTo}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">LATAM + U.S. context</Badge>
            <Badge>Full-Stack + Mobile</Badge>
            <Badge>Web + Native focus</Badge>
          </div>
        </Card>
      </Section>

      <Section eyebrow="Still Active" title="Platforms running in production" density="compact" tone="muted">
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

      <Section tone="muted" density="compact">
        <div className="space-y-4">
          {careerTimeline.map((item, index) => (
            <Card
              key={`${item.company}-${item.period}`}
              variant="elevated"
              className={`space-y-3 motion-fade-in ${index % 2 === 0 ? "" : "motion-delay-1"}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--color-text)]">{item.role}</h2>
                  <p className="text-sm font-semibold text-[var(--color-text-soft)]">{item.company}</p>
                </div>
                <div className="text-right text-sm text-[var(--color-text-muted)]">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>

              {item.activeInProduction && (
                <Badge variant="accent" className="w-fit">
                  {item.statusNote ?? "Active in Production"}
                </Badge>
              )}

              {item.parallelContext && (
                <p className="rounded-lg border border-[var(--color-border)] bg-[var(--color-subtle-bg)] px-3 py-2 text-sm text-[var(--color-text-soft)]">
                  <span className="font-semibold text-[var(--color-text)]">Parallel context:</span>{" "}
                  {item.parallelContext}
                </p>
              )}

              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Principles"
        title="How I collaborate"
        description="These principles drive architecture decisions, team communication, and delivery quality."
        tone="contrast"
      >
        <Card variant="flat" className="space-y-4 motion-fade-in">
          <ul className="list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
            {careerPrinciples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-sm text-[var(--color-text-muted)]">
            Languages: {profileIdentity.languages.join(" · ")}
          </p>
        </Card>
      </Section>
    </>
  );
}
