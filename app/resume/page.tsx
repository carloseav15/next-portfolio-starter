import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { DIGICORP_PROOF } from "@/lib/links";
import { createAbsoluteUrl } from "@/lib/site";
import { compactActionLinkClassName } from "@/lib/uiClasses";

const resumePath = "/resume/carlos-arancibia-resume.pdf";
const canonicalUrl = createAbsoluteUrl("/resume");
const ogImageUrl = createAbsoluteUrl(DIGICORP_PROOF.imageSrc);
const resumeSeoDescription = "Direct access to Carlos Arancibia's resume PDF for fast portfolio review.";

export const metadata: Metadata = {
  title: "Resume",
  description: resumeSeoDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Resume",
    description: resumeSeoDescription,
    url: canonicalUrl,
    images: [{ url: ogImageUrl, alt: "Resume access" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume",
    description: resumeSeoDescription,
    images: [ogImageUrl],
  },
};

export default function ResumePage() {
  return (
    <Section
      eyebrow="Resume"
      title="Resume"
      titleAs="h1"
      description="Direct PDF access for fast portfolio review."
      density="compact"
    >
      <Card variant="elevated" className="space-y-4 motion-fade-in">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full gap-2 sm:w-auto"
          >
            Open Resume
            <FileText aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only"> (opens in new tab)</span>
          </ButtonLink>
        </div>

        <p className="text-sm text-[var(--color-text-muted)]">
          <Link href={resumePath} download className={compactActionLinkClassName}>
            Download PDF
            <Download aria-hidden="true" className="h-4 w-4" />
          </Link>
          <span className="sr-only"> and open in a new tab if needed.</span>
        </p>
      </Card>
    </Section>
  );
}
