import { profileIdentity } from "@/lib/profile";

export const siteConfig = {
  name: "Carlos Arancibia | Software Engineer",
  url: "https://www.carlos-arancibia.com",
  roleLine: profileIdentity.roleLabel,
  description:
    "Portfolio for Carlos Arancibia, a Full-Stack and Mobile Software Engineer with 7+ years shipping production systems across LATAM and the U.S.",
  seoSummary:
    "Production systems engineer with DigiApp ownership, payment integrations, and operational platform delivery.",
  developmentBanner: {
    enabled: true,
    message: "Portfolio in active development; content and UX are being refined.",
    tone: "neutral" as const,
  },
};

export function createPageTitle(pageTitle: string) {
  return `${pageTitle} | ${siteConfig.name}`;
}

export function createAbsoluteUrl(pathname = "/") {
  return new URL(pathname, siteConfig.url).toString();
}
