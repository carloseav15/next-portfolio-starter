import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { DIGICORP_PROOF } from "@/lib/links";
import { contactChannels, profileIdentity, recruiterResponseWindow } from "@/lib/profile";
import { createAbsoluteUrl } from "@/lib/site";

const canonicalUrl = createAbsoluteUrl("/contact");
const ogImageUrl = createAbsoluteUrl(DIGICORP_PROOF.imageSrc);

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Carlos Arancibia for Software Engineer I/II opportunities. Open to remote and on-site roles from Naples, Florida.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Contact",
    description:
      "Contact Carlos Arancibia for Software Engineer I/II opportunities. Open to remote and on-site roles from Naples, Florida.",
    url: canonicalUrl,
    images: [{ url: ogImageUrl, alt: "Contact Carlos Arancibia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description:
      "Contact Carlos Arancibia for Software Engineer I/II opportunities. Open to remote and on-site roles from Naples, Florida.",
    images: [ogImageUrl],
  },
};

const channelIcons = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
} as const;

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let&apos;s connect"
      titleAs="h1"
      description="Open to Software Engineer I/II opportunities where production reliability and collaboration quality matter."
      density="compact"
    >
      <Card variant="proof" className="space-y-5 motion-fade-in">
        <p className="max-w-[65ch] text-[0.98rem] leading-relaxed text-[var(--color-text-soft)] sm:text-base">
          Based in {profileIdentity.location}. Available for remote or on-site collaboration in the U.S.
        </p>

        <p className="text-sm text-[var(--color-text-muted)]">{recruiterResponseWindow}</p>

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
                {channel.type !== "email" && <span className="sr-only"> (opens in new tab)</span>}
              </ButtonLink>
            );
          })}
        </div>

        <p className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          Outreach channel priority: email first.
        </p>
      </Card>
    </Section>
  );
}
