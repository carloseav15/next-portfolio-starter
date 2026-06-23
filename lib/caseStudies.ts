import type { ComponentType } from "react";
import DigicorpCaseStudy from "@/content/case-studies/digicorp.mdx";
import OctopusCaseStudy from "@/content/case-studies/octopus.mdx";
import PlayfitCaseStudy from "@/content/case-studies/playfit.mdx";
import UsOpsCaseStudy from "@/content/case-studies/us-ops.mdx";
import MatchdayOsCaseStudy from "@/content/case-studies/matchdayos.mdx";
import { experienceDates } from "@/lib/experienceDates";
import type { ProofStatus } from "@/lib/proof";

export type CaseStudySlug = "digicorp" | "octopus" | "us-ops" | "playfit" | "matchdayos";

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
    seoKeywords: ["DigiApp", "mobile app delivery", "Vanilla JavaScript ecommerce", "Google Play", "App Store"],
    date: experienceDates.digicorp.endIso ?? experienceDates.digicorp.startIso,
    summary:
      "Public mobile app releases plus a custom B2B web commerce platform built and maintained inside a live commerce environment.",
    cardSummary: "Public mobile app releases and custom B2B web commerce platform designed from scratch.",
    readingTime: "6 min",
    role: "Main programmer for Digicorp's DigiApp mobile applications and core B2B e-commerce web platform",
    teamContext: "Worked inside Digicorp with product and operations teams",
    timeline: experienceDates.digicorp.label,
    primaryOutcome: "10,000+ Android downloads and sustained production continuity",
    impactMetrics: [
      "10,000+ Android downloads",
      "E-commerce web from scratch in Vanilla JavaScript",
      "Platform remains active in production",
    ],
    cardHighlights: ["Vanilla JavaScript commerce platform", "Multi-country B2B deployment"],
    ownershipLabel: "Owned mobile app releases (Android/iOS) and engineered the core B2B commerce platform.",
    whyItMatters:
      "This case shows public app shipping, long-term maintenance, and ownership across web and mobile in one business-critical product area.",
    stack: ["Kotlin", "Java", "Vanilla JavaScript", "Flutter", "Firebase", "Play Console", "App Store Connect"],
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
      "Built and launched a payments platform handling utility collections, native printing integration, OTP verification, and automated settlement in credit union networks.",
    cardSummary:
      "Payments product handling utility collections, native printing, and automated settlement for credit unions.",
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
    cardHighlights: ["Android thermal print integration", "Automated commission & settlement logic"],
    ownershipLabel:
      "Owned payment collection architecture, mobile client flows (Android/Flutter), and daily settlement logic.",
    whyItMatters:
      "This case shows payment workflow design, third-party integrations, and product trust under real daily transaction volume.",
    stack: ["Flutter", "Android", "Firebase", "PHP", "MySQL", "REST APIs", "Twilio SMS", "OTP Verification"],
    evidenceStatus: "verified",
    featuredOrder: 2,
    activeInProduction: true,
    featured: true,
    Content: OctopusCaseStudy,
  },
  {
    title: "Community Operations Platform - Iglesia Tiempo de Cambio",
    slug: "us-ops",
    audienceTier: "secondary",
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
    cardSummary: "Role-based workflows that made daily execution and recurring events easier for non-technical teams.",
    readingTime: "6 min",
    role: "Engineer supporting digital platform initiatives",
    teamContext: "Collaborated with leadership and operational teams across recurring workflows",
    timeline: experienceDates.tiempoCambio.label,
    primaryOutcome: "Reliable daily operations for 100+ active users",
    impactMetrics: ["100+ active users", "Live-event operational support", "Platform remains active in production"],
    cardHighlights: ["100+ active users", "Role-based systems for recurring events"],
    ownershipLabel: "Built and maintained registration, reporting, maps, and event-support flows.",
    whyItMatters:
      "This case shows I can simplify messy organization workflows and build software that non-technical teams can keep using.",
    stack: ["JavaScript", "Google Maps APIs", "SQL", "PHP", "MySQL", "Android", "iOS", "Flutter"],
    evidenceStatus: "verified",
    featuredOrder: 5,
    activeInProduction: true,
    featured: false,
    Content: UsOpsCaseStudy,
  },
  {
    title: "Playfit Game Assistant",
    slug: "playfit",
    audienceTier: "primary",
    tags: ["Playfit", "Next.js 16", "React 19", "Supabase", "Local-First"],
    seoKeywords: [
      "Playfit",
      "Next.js 16 App Router",
      "React 19 canary",
      "IndexedDB local-first",
      "Supabase Edge Functions",
    ],
    date: experienceDates.playfit.startIso,
    summary:
      "A local-first video game recommendation engine resolving user sign-up barriers with local-first IndexedDB storage and serverless profile migrations. Open source codebase.",
    cardSummary:
      "Local-first recommendation engine resolving user sign-up barriers with IndexedDB state and serverless migrations. Open source codebase.",
    readingTime: "7 min",
    role: "Senior Product Engineer",
    teamContext: "Independent open-source project demonstrating production-grade web stack",
    timeline: experienceDates.playfit.label,
    primaryOutcome: "Decoupled monorepo architecture, public codebase, and automated quality checks",
    impactMetrics: [
      "Open-source Next.js 16 monorepo (playfit)",
      "Zero-Login onboarding with IndexedDB store",
      "Supabase Edge Functions (Deno) atomic migrations",
      "13+ automated test files (Vitest + Playwright)",
    ],
    cardHighlights: ["Zero-Login onboarding with IndexedDB", "Open source codebase on GitHub"],
    ownershipLabel: "Architected local-first client state, Supabase database schemas, and edge API integrations.",
    whyItMatters:
      "This case showcases modern product engineering using local-first storage, Deno serverless edge APIs, strict database security, and solid automated testing.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Supabase",
      "Deno Edge Functions",
      "IndexedDB",
      "Vitest",
      "Playwright",
      "Biome",
    ],
    evidenceStatus: "verified",
    featuredOrder: 3,
    activeInProduction: true,
    featured: true,
    Content: PlayfitCaseStudy,
  },
  {
    title: "MatchdayOS - Soccer Operations Platform",
    slug: "matchdayos",
    audienceTier: "secondary",
    tags: ["Soccer Ops", "Role-based Systems", "Next.js", "Supabase"],
    seoKeywords: [
      "soccer operations platform",
      "role-based access control",
      "Next.js App Router",
      "Supabase database schema",
    ],
    date: experienceDates.matchdayos.startIso,
    summary:
      "A comprehensive web platform built to manage soccer operations end-to-end across five operational roles, from club administration to live matchday tracking. Open source codebase.",
    cardSummary:
      "Role-based workflows, 70 pages, and 37 database tables managing soccer club operations. Open source codebase.",
    readingTime: "6 min",
    role: "Product Engineer",
    teamContext: "Independent open-source project demonstrating role-based workflow complexity",
    timeline: experienceDates.matchdayos.label,
    primaryOutcome: "Role-based platform with 70 pages, 37 schema tables, and multi-role testing.",
    impactMetrics: [
      "70 route-level pages implemented",
      "37 business tables in primary schema",
      "13 automated test files (Vitest + Playwright)",
    ],
    cardHighlights: ["70 route-level pages", "Open source code structure"],
    ownershipLabel: "Owned product definition, route-guard architecture, database design, and testing.",
    whyItMatters:
      "This case demonstrates my ability to design complex role-based access control, manage extensive database schemas, and build state-driven workflows.",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Vitest", "Playwright"],
    evidenceStatus: "verified",
    featuredOrder: 4,
    activeInProduction: true,
    featured: false,
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
  ...(entry.activeInProduction !== undefined && { activeInProduction: entry.activeInProduction }),
  ...(entry.featured !== undefined && { featured: entry.featured }),
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
