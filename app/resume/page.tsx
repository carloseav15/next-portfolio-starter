import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { ResumePreview } from "@/components/resume/ResumePreview";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { buildPageMetadata } from "@/lib/site";
import { compactActionLinkClassName } from "@/lib/uiClasses";

const resumePath = "/resume/carlos-arancibia-resume.pdf";
const resumeSeoDescription =
  "Resume PDF, inline preview, and background for Carlos Arancibia, a full-stack and mobile software engineer.";

export const metadata: Metadata = buildPageMetadata({
  title: "Resume | Carlos Arancibia",
  description: resumeSeoDescription,
  pathname: "/resume",
  ogAlt: "Resume access",
  keywords: [
    "Carlos Arancibia resume",
    "full-stack software engineer resume",
    "mobile engineer resume",
    "resume PDF",
  ],
});

export default function ResumePage() {
  return (
    <Section
      eyebrow="Resume"
      title="Resume"
      titleAs="h1"
      description="Resume, downloadable PDF, and optional inline preview."
      density="compact"
    >
      <Card variant="elevated" className="space-y-5 motion-fade-in">
        <p className="max-w-[62ch] text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
          Open the PDF if you want the fastest review path, or expand the inline preview if staying inside
          the site is more convenient.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink
            href="/resume/print"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full gap-2 sm:w-auto"
          >
            Print or Save as PDF
            <FileText aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only"> (opens in new tab)</span>
          </ButtonLink>
          <ButtonLink
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="w-full gap-2 sm:w-auto"
          >
            Download Legacy PDF
            <Download aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only"> (opens in new tab)</span>
          </ButtonLink>
        </div>

        <p className="text-sm text-[var(--color-text-muted)]">
          <Link href={resumePath} download className={compactActionLinkClassName}>
            Download PDF
            <Download aria-hidden="true" className="h-4 w-4" />
          </Link>
        </p>

        <ResumePreview src={resumePath} />
      </Card>
    </Section>
  );
}
