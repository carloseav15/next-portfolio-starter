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
  date: string;
  summary: string;
  readingTime: string;
  role: string;
  teamContext: string;
  timeline: string;
  primaryOutcome: string;
  impactMetrics: string[];
  stack: string[];
  evidenceStatus: ProofStatus;
  activeInProduction?: boolean;
  featured?: boolean;
};

type CaseStudyEntry = CaseStudyMetadata & {
  Content: ComponentType;
};

const caseStudyEntries: CaseStudyEntry[] = [
  {
    title: "Digicorp DigiApp & E-Commerce Operations",
    slug: "digicorp",
    audienceTier: "primary",
    tags: ["DigiApp", "Vanilla JavaScript", "Production Support"],
    date: experienceDates.digicorp.endIso ?? experienceDates.digicorp.startIso,
    summary:
      "DigiApp ownership plus e-commerce web platform designed and maintained from scratch using Vanilla JavaScript in a live B2B commerce environment.",
    readingTime: "6 min",
    role: "Main programmer for Digicorp's DigiApp mobile applications and core e-commerce web platform",
    teamContext: "Worked inside Digicorp with product and operations teams",
    timeline: experienceDates.digicorp.label,
    primaryOutcome: "10,000+ Android downloads and sustained production reliability",
    impactMetrics: [
      "10,000+ Android downloads",
      "E-commerce web from scratch in Vanilla JavaScript",
      "Platform remains active in production",
    ],
    stack: ["Kotlin", "Java", "Vanilla JavaScript", "Firebase", "Play Console", "App Store Connect"],
    evidenceStatus: "verified",
    activeInProduction: true,
    featured: true,
    Content: DigicorpCaseStudy,
  },
  {
    title: "Community Operations Platform - Iglesia Tiempo de Cambio",
    slug: "us-ops",
    audienceTier: "primary",
    tags: ["Community Ops", "Live Events", "Role-based Systems"],
    date: experienceDates.tiempoCambio.endIso ?? experienceDates.tiempoCambio.startIso,
    summary:
      "Operational systems used daily by 100+ active users for registration, reporting, branch visibility, and recurring live events.",
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
    stack: ["JavaScript", "Google Maps APIs", "SQL", "Role-based dashboards"],
    evidenceStatus: "verified",
    activeInProduction: true,
    Content: UsOpsCaseStudy,
  },
  {
    title: "Octopus Payments Platform - Cooperative Collections",
    slug: "octopus",
    audienceTier: "primary",
    tags: ["Payments", "Cooperative Operations", "Android + Flutter"],
    date: experienceDates.vcomm.endIso ?? experienceDates.vcomm.startIso,
    summary:
      "Built and launched a cooperative-focused payment platform handling service collections, wallet flows, OTP verification, and settlement logic in active production.",
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
    stack: ["Flutter", "Android", "Firebase", "REST APIs", "Twilio SMS", "OTP Verification"],
    evidenceStatus: "verified",
    activeInProduction: true,
    featured: true,
    Content: OctopusCaseStudy,
  },
  {
    title: "MatchdayOS - End-to-End Soccer Operations",
    slug: "matchdayos",
    audienceTier: "secondary",
    tags: ["MatchdayOS", "Soccer Operations", "RBAC", "Supabase", "Matchday"],
    date: experienceDates.matchdayos.startIso,
    summary:
      "Role-based soccer operations platform for clubs, leagues, referees, parents, and players with live matchday workflows, official reporting, and public competition analytics.",
    readingTime: "8 min",
    role: "Product Engineer owning architecture and implementation",
    teamContext: "Built for multi-role soccer operations with role-specific workspaces and governance boundaries",
    timeline: experienceDates.matchdayos.label,
    primaryOutcome:
      "End-to-end matchday operations and official closure workflows delivered with public competition visibility.",
    impactMetrics: [
      "5 operational roles",
      "70 route-level pages",
      "37 business tables",
      "13 automated test files",
    ],
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
    Content: MatchdayOsCaseStudy,
  },
];

const toMetadata = (entry: CaseStudyEntry): CaseStudyMetadata => ({
  title: entry.title,
  slug: entry.slug,
  audienceTier: entry.audienceTier,
  tags: entry.tags,
  date: entry.date,
  summary: entry.summary,
  readingTime: entry.readingTime,
  role: entry.role,
  teamContext: entry.teamContext,
  timeline: entry.timeline,
  primaryOutcome: entry.primaryOutcome,
  impactMetrics: entry.impactMetrics,
  stack: entry.stack,
  evidenceStatus: entry.evidenceStatus,
  activeInProduction: entry.activeInProduction,
  featured: entry.featured,
});

export const caseStudies = caseStudyEntries.map(toMetadata);

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
