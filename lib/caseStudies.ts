import type { ComponentType } from "react";
import DigicorpCaseStudy from "@/content/case-studies/digicorp.mdx";
import MatchdayOsCaseStudy from "@/content/case-studies/matchdayos.mdx";
import OctopusCaseStudy from "@/content/case-studies/octopus.mdx";
import UsOpsCaseStudy from "@/content/case-studies/us-ops.mdx";
import { experienceDates } from "@/lib/experienceDates";
import type { ProofStatus } from "@/lib/proof";

export type CaseStudySlug = "matchdayos" | "digicorp" | "octopus" | "us-ops";

export type CaseStudyMetadata = {
  title: string;
  slug: CaseStudySlug;
  audienceTier: "primary" | "secondary";
  tags: string[];
  seoKeywords: string[];
  date: string;
  summary: string;
  cardSummary: string;
  readingTime: string;
  role: string;
  teamContext: string;
  timeline: string;
  primaryOutcome: string;
  impactMetrics: string[];
  cardHighlights: string[];
  ownershipLabel: string;
  whyItMatters: string;
  stack: string[];
  evidenceStatus: ProofStatus;
  featuredOrder: number;
  activeInProduction?: boolean;
  featured?: boolean;
};

type CaseStudyEntry = CaseStudyMetadata & {
  Content: ComponentType;
};

const caseStudyEntries: CaseStudyEntry[] = [
  {
    title: "Digicorp DigiApp & Commerce Ownership",
    slug: "digicorp",
    audienceTier: "primary",
    tags: ["DigiApp", "Vanilla JavaScript", "Mobile Delivery", "Commerce"],
    seoKeywords: [
      "DigiApp",
      "mobile app delivery",
      "Vanilla JavaScript ecommerce",
      "Google Play",
      "App Store",
    ],
    date: experienceDates.digicorp.endIso ?? experienceDates.digicorp.startIso,
    summary:
      "Public app delivery plus the Digicorp e-commerce platform designed and maintained from scratch inside a live B2B commerce environment.",
    cardSummary:
      "Public mobile delivery plus the commerce platform behind Digicorp's digital sales motion.",
    readingTime: "6 min",
    role: "Main programmer for Digicorp's DigiApp mobile applications and core e-commerce web platform",
    teamContext: "Worked inside Digicorp with product and operations teams",
    timeline: experienceDates.digicorp.label,
    primaryOutcome: "10,000+ Android downloads and sustained production continuity",
    impactMetrics: [
      "10,000+ Android downloads",
      "E-commerce web from scratch in Vanilla JavaScript",
      "Platform remains active in production",
    ],
    cardHighlights: ["10,000+ Android downloads", "Vanilla JavaScript commerce platform"],
    ownershipLabel: "Owned mobile delivery, store releases, and the core web commerce platform.",
    whyItMatters:
      "This case shows public app shipping, long-term maintenance, and ownership across web and mobile in one business-critical product area.",
    stack: ["Kotlin", "Java", "Vanilla JavaScript", "Firebase", "Play Console", "App Store Connect"],
    evidenceStatus: "verified",
    featuredOrder: 1,
    activeInProduction: true,
    featured: true,
    Content: DigicorpCaseStudy,
  },
  {
    title: "Octopus Payments Platform - Cooperative Collections",
    slug: "octopus",
    audienceTier: "primary",
    tags: ["Payments", "Android + Flutter", "Integrations", "Cooperative Ops"],
    seoKeywords: [
      "payments platform",
      "service collections",
      "Android Flutter app",
      "cooperative payments",
      "settlement logic",
    ],
    date: experienceDates.vcomm.endIso ?? experienceDates.vcomm.startIso,
    summary:
      "Built and launched a cooperative-focused payments product handling service collections, wallet flows, OTP verification, and settlement logic in active production.",
    cardSummary:
      "Payments product built for collection volume, settlement accuracy, and daily cooperative operations.",
    readingTime: "6 min",
    role: "Co-Founder & Technical Lead owning architecture and implementation",
    teamContext: "Three co-founders; I owned API, mobile, and operational workflow delivery end-to-end",
    timeline: experienceDates.vcomm.label,
    primaryOutcome: "About 1,000 daily service-collection operations in active cooperative contexts",
    impactMetrics: [
      "~1,000 service-collection operations per day",
      "Launched in two credit cooperatives",
      "Commission and settlement logic automated in production",
    ],
    cardHighlights: ["~1,000 daily service-collection operations", "Launched in two credit cooperatives"],
    ownershipLabel: "Owned architecture, Android and Flutter flows, and the settlement logic behind daily collections.",
    whyItMatters:
      "This case shows payment workflow design, third-party integrations, and product trust under real daily transaction volume.",
    stack: ["Flutter", "Android", "Firebase", "REST APIs", "Twilio SMS", "OTP Verification"],
    evidenceStatus: "verified",
    featuredOrder: 2,
    activeInProduction: true,
    featured: true,
    Content: OctopusCaseStudy,
  },
  {
    title: "Community Operations Platform - Iglesia Tiempo de Cambio",
    slug: "us-ops",
    audienceTier: "primary",
    tags: ["Community Ops", "Role-based Systems", "Live Events", "Reporting"],
    seoKeywords: [
      "internal systems",
      "role-based software",
      "event operations",
      "reporting workflows",
      "community platform",
    ],
    date: experienceDates.tiempoCambio.endIso ?? experienceDates.tiempoCambio.startIso,
    summary:
      "Operational systems used daily by 100+ active users for registration, reporting, branch visibility, and recurring live events.",
    cardSummary:
      "Role-based workflows that made daily execution and recurring events easier for non-technical teams.",
    readingTime: "6 min",
    role: "Engineer supporting digital platform initiatives",
    teamContext: "Collaborated with leadership and operational teams across recurring workflows",
    timeline: experienceDates.tiempoCambio.label,
    primaryOutcome: "Reliable daily operations for 100+ active users",
    impactMetrics: [
      "100+ active users",
      "Live-event operational support",
      "Platform remains active in production",
    ],
    cardHighlights: ["100+ active users", "Role-based systems for recurring events"],
    ownershipLabel: "Built and maintained registration, reporting, maps, and event-support flows.",
    whyItMatters:
      "This case shows I can simplify messy organization workflows and build software that non-technical teams can keep using.",
    stack: ["JavaScript", "Google Maps APIs", "SQL", "Role-based dashboards"],
    evidenceStatus: "verified",
    featuredOrder: 3,
    activeInProduction: true,
    featured: true,
    Content: UsOpsCaseStudy,
  },
  {
    title: "MatchdayOS - End-to-End Soccer Operations",
    slug: "matchdayos",
    audienceTier: "secondary",
    tags: ["MatchdayOS", "RBAC", "Supabase", "Product Engineering", "Public Stats"],
    seoKeywords: [
      "MatchdayOS",
      "RBAC product engineering",
      "Supabase Next.js app",
      "soccer operations platform",
      "public competition stats",
    ],
    date: experienceDates.matchdayos.startIso,
    summary:
      "Role-based soccer operations platform for clubs, leagues, referees, parents, and players with live matchday workflows, official reporting, and public competition analytics.",
    cardSummary:
      "Modern product engineering for a role-based sports platform with public views and automated quality checks.",
    readingTime: "8 min",
    role: "Product Engineer owning architecture and implementation",
    teamContext: "Built for multi-role soccer operations with role-specific workspaces and governance boundaries",
    timeline: experienceDates.matchdayos.label,
    primaryOutcome: "End-to-end matchday operations and official closure workflows with public competition visibility",
    impactMetrics: [
      "5 operational roles",
      "70 route-level pages",
      "37 business tables",
      "13 automated test files",
    ],
    cardHighlights: ["5 operational roles", "70 route-level pages"],
    ownershipLabel: "Owned architecture and implementation for a role-based soccer operations product.",
    whyItMatters:
      "This case shows modern product engineering across RBAC, typed data, public experiences, and automated tests.",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Storage",
      "Vitest",
      "Playwright",
    ],
    evidenceStatus: "verified",
    featuredOrder: 4,
    Content: MatchdayOsCaseStudy,
  },
];

const sortedCaseStudyEntries = [...caseStudyEntries].sort((left, right) => left.featuredOrder - right.featuredOrder);

const toMetadata = (entry: CaseStudyEntry): CaseStudyMetadata => ({
  title: entry.title,
  slug: entry.slug,
  audienceTier: entry.audienceTier,
  tags: entry.tags,
  seoKeywords: entry.seoKeywords,
  date: entry.date,
  summary: entry.summary,
  cardSummary: entry.cardSummary,
  readingTime: entry.readingTime,
  role: entry.role,
  teamContext: entry.teamContext,
  timeline: entry.timeline,
  primaryOutcome: entry.primaryOutcome,
  impactMetrics: entry.impactMetrics,
  cardHighlights: entry.cardHighlights,
  ownershipLabel: entry.ownershipLabel,
  whyItMatters: entry.whyItMatters,
  stack: entry.stack,
  evidenceStatus: entry.evidenceStatus,
  featuredOrder: entry.featuredOrder,
  activeInProduction: entry.activeInProduction,
  featured: entry.featured,
});

export const caseStudies = sortedCaseStudyEntries.map(toMetadata);

export const caseStudyContentBySlug = Object.fromEntries(
  caseStudyEntries.map((entry) => [entry.slug, entry.Content]),
) as Record<CaseStudySlug, ComponentType>;

export const caseStudyMetadataBySlug = Object.fromEntries(
  caseStudyEntries.map((entry) => [entry.slug, toMetadata(entry)]),
) as Record<CaseStudySlug, CaseStudyMetadata>;

export function isCaseStudySlug(value: string): value is CaseStudySlug {
  return value in caseStudyMetadataBySlug;
}

export function getCaseStudyBySlug(slug: string) {
  if (!isCaseStudySlug(slug)) {
    return null;
  }

  return caseStudyMetadataBySlug[slug];
}
