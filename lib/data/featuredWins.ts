import type { ProofStatus } from "@/lib/proof";

export type CaseStudyHighlight = {
  slug: "digicorp" | "us-ops" | "matchdayos" | "octopus" | "playfit";
  title: string;
  summary: string;
  outcome: string;
  impactMetrics: string[];
  evidenceStatus: ProofStatus;
};

export type FeaturedWin = {
  id: "digicorp" | "octopus" | "us-ops" | "playfit";
  title: string;
  outcome: string;
  ownership: string;
  proofLabel?: string;
  proofHref?: string;
  ctaHref: string;
};

export const featuredWins: FeaturedWin[] = [
  {
    id: "digicorp",
    title: "Digicorp DigiApp & Commerce",
    outcome: "10,000+ downloads and a custom B2B web platform still active in production.",
    ownership: "Owned mobile app releases (Android/iOS) and engineered the core B2B commerce platform.",
    proofLabel: "Google Play listing",
    proofHref: "https://play.google.com/store/apps/details?id=digicorp.com.bo.main.digiecommerce&hl=es_419",
    ctaHref: "/case-studies/digicorp",
  },
  {
    id: "octopus",
    title: "Octopus Payments Platform",
    outcome: "Processes ~1,000 daily utility payments across active credit unions.",
    ownership: "Owned payment collection architecture, native Android printing integration, and settlement logic.",
    ctaHref: "/case-studies/octopus",
  },
  {
    id: "playfit",
    title: "Playfit Game Assistant",
    outcome: "A local-first recommendation engine that eliminates sign-up friction and game selection fatigue.",
    ownership: "Architected local-first IndexedDB state, Supabase RLS policies, and serverless edge functions.",
    proofLabel: "GitHub Repository",
    proofHref: "https://github.com/carloseav15/games-library",
    ctaHref: "/case-studies/playfit",
  },
];

export const caseStudyHighlights: CaseStudyHighlight[] = [
  {
    slug: "playfit",
    title: "Playfit Game Assistant",
    summary:
      "A modern, local-first game recommendation assistant solving choice fatigue with zero-login onboarding, affinity scoring, and atomic profile migrations.",
    outcome: "Clean Next.js 16 monorepo architecture, secure database layers, and automated testing.",
    impactMetrics: [
      "Next.js 16 & React 19 canary stack",
      "Zero-Login onboarding using IndexedDB",
      "Supabase Edge Functions & RLS security",
    ],
    evidenceStatus: "verified",
  },
  {
    slug: "digicorp",
    title: "Digicorp DigiApp & Commerce Ownership",
    summary:
      "Public mobile delivery plus the web commerce platform designed and maintained from scratch with Vanilla JavaScript.",
    outcome: "10,000+ Android downloads and multi-year platform continuity.",
    impactMetrics: [
      "10,000+ Android downloads",
      "Dec 2019 - Jun 2024 ownership window",
      "Vanilla JavaScript commerce platform",
    ],
    evidenceStatus: "verified",
  },
  {
    slug: "octopus",
    title: "Octopus Payments Platform",
    summary:
      "Payment collections product with Android printing flows, cooperative settlement logic, and daily operational volume.",
    outcome: "Platform remains active with about 1,000 daily service-collection operations.",
    impactMetrics: [
      "~1,000 service-collection operations/day",
      "Launched in two credit cooperatives",
      "Commission and settlement logic in production",
    ],
    evidenceStatus: "verified",
  },
];
