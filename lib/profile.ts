import type { ProofStatus } from "@/lib/proof";
import { experienceDates } from "@/lib/experienceDates";

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
};

export type ProfileMetric = {
  label: string;
  value: string;
  context: string;
  status: ProofStatus;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  parallelContext?: string;
  activeInProduction?: boolean;
  statusNote?: string;
};

export type ActivePlatformItem = {
  name: string;
  status: "Active in Production";
  note: string;
};

export type CaseStudyHighlight = {
  slug: "digicorp" | "us-ops" | "matchdayos" | "octopus";
  title: string;
  summary: string;
  outcome: string;
  impactMetrics: string[];
  evidenceStatus: ProofStatus;
};

export type ContactChannel = {
  type: "email" | "linkedin" | "github";
  label: string;
  href: string;
  status: ProofStatus;
  primary?: boolean;
};

export type RecommendationItem = {
  quote: string;
  author: string;
  title: string;
  dateLabel: string;
  relationshipLabel: string;
  sourceLabel: string;
  sourceUrl?: string;
};

export const profileIdentity: ProfileIdentity = {
  fullName: "Carlos Arancibia",
  roleLabel: "Software Engineer | Full-Stack & Mobile",
  headline: "I ship production software that teams can trust under real operational pressure.",
  location: "Naples, FL 34105",
  email: "carloseav15@gmail.com",
  website: "https://www.carlos-arancibia.com",
  summary:
    "Software Engineer with 7+ years of experience building and maintaining production systems across mobile, web, payments, and operational platforms in LATAM and the United States.",
  openTo: "Open to Software Engineer I/II roles (remote or on-site).",
  languages: ["English (professional working)", "Spanish (native)"],
};

export const profileMetrics: ProfileMetric[] = [
  {
    label: "Android downloads",
    value: "10,000+",
    context: "Digicorp DigiApp distribution",
    status: "verified",
  },
  {
    label: "Production engineering",
    value: "7+ years",
    context: "Systems delivered across LATAM and U.S.",
    status: "verified",
  },
  {
    label: "Daily users (Bolivia)",
    value: "3,000/day",
    context: "Digicorp commerce platform daily usage in Bolivia",
    status: "verified",
  },
  {
    label: "Service collections",
    value: "~1,000/day",
    context: "Octopus service-collection operations in cooperative environments",
    status: "verified",
  },
];

export const activePlatformsInProduction: ActivePlatformItem[] = [
  {
    name: "Digicorp e-Commerce Platform",
    status: "Active in Production",
    note: "DigiApp ecosystem and digital channels continue in active business use.",
  },
  {
    name: "Octopus Payments Platform",
    status: "Active in Production",
    note: "Launched in two credit cooperatives and currently processing about 1,000 service-collection operations per day.",
  },
  {
    name: "Tiempo de Cambio Platform",
    status: "Active in Production",
    note: "Operational systems remain used in recurring organization workflows.",
  },
];

export const careerTimeline: ExperienceItem[] = [
  {
    company: "DATEC LATAM",
    role: "IT Support / Data Center Operations",
    period: experienceDates.datec.label,
    location: "Bolivia",
    highlights: [
      "Supported early-stage D-Cloud monitoring systems",
      "Maintained secure infrastructure workflows and operational protocols",
    ],
  },
  {
    company: "TISMART (DATEC Division)",
    role: "Junior Android Developer",
    period: experienceDates.tismart.label,
    location: "Bolivia",
    highlights: [
      "Integrated REST APIs for billing and inspection tracking",
      "Contributed to financial app UI and production maintenance",
      "Worked in Agile delivery cycles",
    ],
  },
  {
    company: "Iglesia Tiempo de Cambio",
    role: "Full-Stack Systems Developer",
    period: experienceDates.tiempoCambio.label,
    location: "Bolivia",
    activeInProduction: true,
    statusNote: "Active in Production",
    highlights: [
      "Built daily registration and reporting systems used by 100+ active users",
      "Implemented geospatial branch coverage tools with geofencing",
      "Delivered role-based websites and internal dashboards",
    ],
  },
  {
    company: "V@COMM",
    role: "Co-Founder & Technical Lead",
    period: experienceDates.vcomm.label,
    location: "Bolivia",
    parallelContext: "Parallel engagement with Digicorp from Dec 2019 to Jun 2024 with separate ownership boundaries.",
    activeInProduction: true,
    statusNote: "Active in Production",
    highlights: [
      "Built Octopus payments platform with Android app and printer integration",
      "Shipped Flutter wallet with OTP, SMS workflows, and settlement automation",
      "Enabled service collections for telecom and utility-style workflows with commission and settlement logic",
      "Launched in two credit cooperatives and the platform remains in active operational use",
    ],
  },
  {
    company: "DIGICORP LTDA",
    role: "Mobile & E-Commerce Systems Engineer",
    period: experienceDates.digicorp.label,
    location: "Bolivia / Peru / Chile",
    parallelContext: "Parallel engagement with V@COMM from Dec 2019 to Jun 2024 with clear product and maintenance ownership.",
    activeInProduction: true,
    statusNote: "Active in Production",
    highlights: [
      "Led DigiApp Android and iOS delivery and publishing",
      "Reached 10,000+ Android downloads",
      "Designed and maintained Digicorp e-commerce web platform from scratch using Vanilla JavaScript",
      "Integrated payment gateways, ERP systems, and reporting modules",
      "Built a web + mobile e-commerce MVP in about one month",
      "Supported daily platform usage around 3,000 users in Bolivia",
    ],
  },
  {
    company: "Diaz Brothers Company LLC",
    role: "Full Stack Developer",
    period: experienceDates.diaz.label,
    location: "Bonita Springs & Naples, FL",
    activeInProduction: true,
    statusNote: "Operational systems remain active",
    highlights: [
      "Built a real-time dashboard for business insights and operational transparency",
      "Developed a web/mobile system for technical team management, including task tracking and material and vehicle status",
      "Created a service order management tool with pricing logic, memberships, PDF generation, and email communications",
      "Redesigned the company website to improve engagement and showcase services using JavaScript, Tailwind CSS, Flutter, Firebase, and Supabase",
      "Systems delivered in this period remain in operational use",
    ],
  },
  {
    company: "MatchdayOS",
    role: "Product Engineer",
    period: experienceDates.matchdayos.label,
    location: "Remote",
    highlights: [
      "Designed and implemented a role-based soccer operations platform with 5 workspaces and route-level access control",
      "Built complete matchday workflows: fixture setup, referee assignment, roster validation, live console, and official report closure",
      "Delivered public competition experiences with standings, player statistics, schedule visibility, and highlights",
      "Integrated Supabase backend (PostgreSQL + Storage) with typed TypeScript boundaries and UX telemetry",
      "Implemented multi-role automated testing with Vitest and Playwright using realistic seed scenarios",
    ],
  },
];

export const careerPrinciples = [
  "Clarity before complexity in system design.",
  "Fast iteration with explicit ownership and accountability.",
  "Accessibility and reliability are product requirements, not polish.",
  "AI speeds implementation; engineering judgment owns outcomes.",
];

export const caseStudyHighlights: CaseStudyHighlight[] = [
  {
    slug: "digicorp",
    title: "Digicorp DigiApp & E-Commerce Ownership",
    summary:
      "DigiApp Android and iOS ownership plus e-commerce web platform designed and maintained from scratch with Vanilla JavaScript.",
    outcome: "10,000+ downloads and multi-year production reliability with active platform continuity.",
    impactMetrics: [
      "10,000+ Android downloads",
      `${experienceDates.digicorp.label} ownership window`,
      "Vanilla JavaScript web e-commerce from scratch",
    ],
    evidenceStatus: "verified",
  },
  {
    slug: "octopus",
    title: "Octopus Payments Platform",
    summary:
      "Co-founded and engineered a payment collection platform with Android printing flows, cooperative settlement logic, and third-party integrations.",
    outcome: "Platform remains active with about 1,000 daily service-collection operations.",
    impactMetrics: [
      "~1,000 service-collection operations/day",
      "Launched in two credit cooperatives",
      "Commission and settlement logic in production",
    ],
    evidenceStatus: "verified",
  },
  {
    slug: "matchdayos",
    title: "MatchdayOS - End-to-End Soccer Operations",
    summary:
      "Role-based platform for clubs, leagues, referees, guardians, and players with live matchday control and official reporting.",
    outcome:
      "Operational matchday lifecycle delivered from setup to official closure with public competition analytics.",
    impactMetrics: [
      "5 operational roles",
      "70 route-level pages",
      "37 business tables",
      "13 automated test files",
    ],
    evidenceStatus: "verified",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    type: "email",
    label: "Email",
    href: `mailto:${profileIdentity.email}`,
    status: "verified",
    primary: true,
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/carancibiav",
    status: "verified",
  },
  {
    type: "github",
    label: "GitHub",
    href: "https://github.com/carloseav15",
    status: "verified",
  },
];

export const recommendations: RecommendationItem[] = [
  {
    quote: "Excellent professional and person: responsible, loyal, and committed.",
    author: "Samuel Soliz Adaos",
    title: "CEO at Digicorp Ltda",
    dateLabel: "Jul 27, 2022",
    relationshipLabel: "senior to Carlos, not direct manager",
    sourceLabel: "LinkedIn recommendation",
    sourceUrl: "https://www.linkedin.com/in/carancibiav/details/recommendations/",
  },
];

export const recruiterResponseWindow = "Usually replies within 24-48 hours.";
