import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { ResumePreview } from "@/components/resume/ResumePreview";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { buildPageMetadata } from "@/lib/site";

const resumeSeoDescription =
  "Official printable resume and inline preview for Carlos Arancibia, a full-stack and mobile software engineer.";

export const metadata: Metadata = buildPageMetadata({
  title: "Resume | Carlos Arancibia",
  description: resumeSeoDescription,
  pathname: "/resume",
  ogAlt: "Resume access",
  keywords: [
    "Carlos Arancibia resume",
    "full-stack software engineer resume",
    "mobile engineer resume",
    "printable resume",
  ],
});

export default function ResumePage() {
  return (
    <Section
      eyebrow="Resume"
      title="Resume"
      titleAs="h1"
      description="Official printable resume and inline preview."
      density="compact"
    >
      <Card variant="elevated" className="space-y-5 motion-fade-in">
        <p className="max-w-[62ch] text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
          Open the print-ready web resume to view it in full screen, or print and save it as a PDF directly from your
          browser.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="/resume/print" target="_blank" rel="noopener noreferrer" className="w-full gap-2 sm:w-auto">
            Open Print-Ready Resume
            <FileText aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only"> (opens in new tab)</span>
          </ButtonLink>
        </div>

        <ResumePreview src="/resume/print" />
      </Card>
    </Section>
  );
}
