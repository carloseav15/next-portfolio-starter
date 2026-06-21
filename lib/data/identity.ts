import type { ProofStatus } from "@/lib/proof";

export type ProfileIdentity = {
  fullName: string;
  roleLabel: string;
  headline: string;
  location: string;
  email: string;
  website: string;
  summary: string;
  openTo: string;
  languages: string[];
  coreStack: string[];
};

export type ProfileMetric = {
  label: string;
  value: string;
  context: string;
  status: ProofStatus;
};

export type RecruiterQuickFact = {
  label: string;
  value: string;
};

export const profileIdentity: ProfileIdentity = {
  fullName: "Carlos Arancibia",
  roleLabel: "Full-Stack & Mobile Software Engineer",
  headline: "Product engineer shipping reliable web and mobile platforms.",
  location: "Naples, FL 34105",
  email: "carloseav15@gmail.com",
  website: "https://www.carlos-arancibia.com",
  summary:
    "I build production-grade applications with a focus on system reliability, secure database design, and end-to-end ownership. Authorized to work in the U.S. (EAD).",
  openTo:
    "Open to remote, hybrid, or on-site software engineering roles across product, platform, and business systems.",
  languages: ["English (professional working)", "Spanish (native)"],
  coreStack: ["React", "Next.js", "TypeScript", "Kotlin", "Android", "SQL"],
};

export const heroProofPoints = ["10,000+ downloads", "3,000 daily users", "~1,000 daily operations"];

export const recruiterQuickFacts: RecruiterQuickFact[] = [
  { label: "Availability", value: "Immediate / Full-time" },
  { label: "Experience", value: "7+ Years (LATAM & U.S.)" },
  { label: "Preferred Roles", value: "Full-Stack, Mobile, Platform" },
];

export const profileMetrics: ProfileMetric[] = [
  {
    label: "Android downloads",
    value: "10,000+",
    context: "Digicorp DigiApp public distribution",
    status: "verified",
  },
  {
    label: "Production engineering",
    value: "7+ years",
    context: "Products shipped across LATAM and the U.S.",
    status: "verified",
  },
  {
    label: "Daily users",
    value: "3,000/day",
    context: "Digicorp commerce usage in Bolivia",
    status: "verified",
  },
  {
    label: "Daily operations",
    value: "~1,000/day",
    context: "Octopus payment collections",
    status: "verified",
  },
];
