import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import {
  aboutIntro,
  careerPrinciples,
  careerTimeline,
  parallelRolesNote,
  profileIdentity,
} from "@/lib/profile";
import { buildPageMetadata } from "@/lib/site";

const aboutDescription =
  "About Carlos Arancibia, a full-stack and mobile engineer with a career path from infrastructure support and Android development to product delivery across LATAM and the U.S.";

export const metadata: Metadata = buildPageMetadata({
  title: "About Carlos Arancibia | Full-Stack & Mobile Engineer",
  description: aboutDescription,
  pathname: "/about",
  ogAlt: "Carlos Arancibia profile overview",
  keywords: [
    "About Carlos Arancibia",
    "Android developer to full-stack engineer",
    "full-stack product delivery",
    "mobile engineer LATAM",
  ],
});

const aboutParagraphs = aboutIntro.body.split("\n\n");

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About Carlos"
        title={aboutIntro.headline}
        titleAs="h1"
        description={profileIdentity.summary}
        density="compact"
      >
        <Card variant="proof" className="space-y-4 motion-fade-in">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-[72ch] text-[0.98rem] leading-relaxed text-[var(--color-text-soft)] sm:text-base">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">LATAM + U.S. context</Badge>
            <Badge>Apps + internal tools</Badge>
            <Badge>Payments + business systems</Badge>
          </div>
        </Card>
      </Section>

      <Section
        eyebrow="How I Work"
        title="I like projects where clear communication matters as much as implementation"
        description="These are the working habits I bring when a team needs someone who can build, collaborate, and keep scope practical."
        tone="contrast"
        density="compact"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {careerPrinciples.map((item, index) => (
            <Card
              key={item}
              variant="flat"
              className={`h-full space-y-3 motion-fade-in ${index % 2 === 0 ? "" : "motion-delay-1"}`}
            >
              <p className="editorial-kicker">How I work</p>
              <p className="text-base leading-relaxed text-[var(--color-text)]">{item}</p>
            </Card>
          ))}
        </div>
        <p className="mt-5 text-sm text-[var(--color-text-muted)]">
          Languages: {profileIdentity.languages.join(" · ")}
        </p>
      </Section>

      <Section
        eyebrow="Career Timeline"
        title="A path built through support, Android, and product delivery"
        description="The timeline below keeps the full arc, from infrastructure support through product engineering."
        density="compact"
      >
        <Card variant="flat" className="mb-5 space-y-3 motion-fade-in">
          <p className="text-sm leading-relaxed text-[var(--color-text-soft)]">{parallelRolesNote}</p>
        </Card>

        <div className="space-y-4">
          {careerTimeline.map((item, index) => (
            <Card
              key={`${item.company}-${item.period}`}
              variant="elevated"
              className={`space-y-4 motion-fade-in ${index % 2 === 0 ? "" : "motion-delay-1"}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--color-text)]">{item.role}</h2>
                  <p className="text-sm font-semibold text-[var(--color-text-soft)]">{item.company}</p>
                </div>
                <div className="text-left text-sm text-[var(--color-text-muted)] sm:text-right">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>

              {item.activeInProduction ? (
                <Badge variant="accent" className="w-fit">
                  {item.statusNote ?? "Active in Production"}
                </Badge>
              ) : null}

              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
                {item.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
