import type { Metadata } from "next";
import { profileIdentity } from "@/lib/profile";

export type PageSeoConfig = {
  title: string;
  description: string;
  pathname: string;
  ogAlt: string;
  keywords?: string[];
  ogImagePath?: string;
};

export const siteConfig = {
  personName: "Carlos Arancibia",
  name: "Carlos Arancibia",
  defaultTitle: "Carlos Arancibia | Senior Product Engineer",
  url: "https://www.carlos-arancibia.com",
  roleLine: profileIdentity.roleLabel,
  description:
    "Portfolio of Carlos Arancibia, a senior product engineer shipping secure transactional systems, dashboards, and mobile applications across LATAM and the U.S.",
  seoSummary:
    "Senior product engineer with B2B e-commerce platform ownership, payment integrations, and multi-product delivery across LATAM and the U.S.",
  defaultOgImagePath: "/images/og.webp",
  developmentBanner: {
    enabled: false,
    message: "Portfolio in active development; content and UX are being refined.",
    tone: "neutral" as const,
  },
};

export function createPageTitle(pageTitle: string) {
  return `${pageTitle} | ${siteConfig.personName}`;
}

export function createAbsoluteUrl(pathname = "/") {
  return new URL(pathname, siteConfig.url).toString();
}

export function buildPageMetadata(config: PageSeoConfig): Metadata {
  const canonicalUrl = createAbsoluteUrl(config.pathname);
  const ogImageUrl = createAbsoluteUrl(config.ogImagePath ?? siteConfig.defaultOgImagePath);

  return {
    title: {
      absolute: config.title,
    },
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: canonicalUrl,
      images: [{ url: ogImageUrl, alt: config.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [ogImageUrl],
    },
  };
}
