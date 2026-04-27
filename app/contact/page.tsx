import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import {
  contactChannels,
  profileIdentity,
  recruiterQuickFacts,
  recruiterResponseWindow,
} from "@/lib/profile";
import { buildPageMetadata } from "@/lib/site";

const contactDescription =
  "Contact Carlos Arancibia, a software engineer in Naples, FL, open to remote, hybrid, or on-site roles across apps, internal tools, and business systems.";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Carlos Arancibia | Software Engineer",
  description: contactDescription,
  pathname: "/contact",
  ogAlt: "Contact Carlos Arancibia",
  keywords: [
    "contact Carlos Arancibia",
    "software engineer Naples FL",
    "remote hybrid onsite engineer",
    "full-stack mobile engineer contact",
  ],
});

const channelIcons = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
} as const;

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Hiring Carlos?"
      titleAs="h1"
      description="Here are the fastest ways to reach me and the context recruiters usually ask for first."
      density="compact"
    >
      <Card variant="proof" className="space-y-5 motion-fade-in">
        <p className="max-w-[64ch] text-[0.98rem] leading-relaxed text-[var(--color-text-soft)] sm:text-base">
          I am currently open to software engineering conversations around product, platform, mobile, and
          business-system work. If you are hiring, email is still the best first step.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {recruiterQuickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] px-4 py-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                {fact.label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-[var(--color-text)]">
                {fact.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {contactChannels.map((channel) => {
            const Icon = channelIcons[channel.type];

            return (
              <ButtonLink
                key={channel.type}
                href={channel.href}
                variant={channel.primary ? "primary" : "secondary"}
                target={channel.type === "email" ? undefined : "_blank"}
                rel={channel.type === "email" ? undefined : "noopener noreferrer"}
                className="w-full gap-2 sm:w-auto"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
                {channel.label}
                {channel.type !== "email" ? <span className="sr-only"> (opens in new tab)</span> : null}
              </ButtonLink>
            );
          })}
        </div>

        <p className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          Priority channel: email first. {recruiterResponseWindow}
        </p>
        <p className="text-sm text-[var(--color-text-muted)]">
          Based in {profileIdentity.location}. I am happy to continue the conversation by email or LinkedIn.
        </p>
      </Card>
    </Section>
  );
}
