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

export type FeaturedWin = {
  id: "digicorp" | "octopus" | "us-ops";
  title: string;
  outcome: string;
  ownership: string;
  proofLabel?: string;
  proofHref?: string;
  ctaHref: string;
};

export type RecruiterQuickFact = {
  label: string;
  value: string;
};

export type AboutIntro = {
  headline: string;
  body: string;
};

export const profileIdentity: ProfileIdentity = {
  fullName: "Carlos Arancibia",
  roleLabel: "Full-Stack & Mobile Software Engineer",
  headline: "Full-stack and mobile engineer shipping production products used by real teams across LATAM and the U.S.",
  location: "Naples, FL 34105",
  email: "carloseav15@gmail.com",
  website: "https://www.carlos-arancibia.com",
  summary:
    "I build apps, internal tools, and payment workflows with clear ownership, steady delivery, and close collaboration across product and operations teams.",
  openTo: "Open to software engineering roles across product, platform, and business systems.",
  languages: ["English (professional working)", "Spanish (native)"],
};

export const heroProofPoints = ["10,000+ downloads", "3,000 daily users", "~1,000 daily operations"];

export const recruiterQuickFacts: RecruiterQuickFact[] = [
  {
    label: "Based in",
    value: "Naples, FL",
  },
  {
    label: "Open to",
    value: "Remote, hybrid, or on-site roles",
  },
  {
    label: "Languages",
    value: "English and Spanish",
  },
  {
    label: "Response time",
    value: "Usually replies within 24-48 hours",
  },
];

export const featuredWins: FeaturedWin[] = [
  {
    id: "digicorp",
    title: "Digicorp DigiApp & Commerce",
    outcome: "10,000+ Android downloads and a commerce platform still serving daily shoppers.",
    ownership: "I owned mobile delivery, store releases, and the core web commerce platform built in Vanilla JavaScript.",
    proofLabel: "Google Play listing",
    proofHref:
      "https://play.google.com/store/apps/details?id=digicorp.com.bo.main.digiecommerce&hl=es_419",
    ctaHref: "/case-studies/digicorp",
  },
  {
    id: "octopus",
    title: "Octopus Payments Platform",
    outcome: "About 1,000 daily service-collection operations in active cooperative environments.",
    ownership: "I owned architecture, Android and Flutter flows, and the settlement logic behind daily collections.",
    ctaHref: "/case-studies/octopus",
  },
  {
    id: "us-ops",
    title: "Community Operations Platform",
    outcome: "Role-based workflows that kept recurring events and daily reporting usable for 100+ active users.",
    ownership: "I built and maintained registration, reporting, maps, and event-support flows for non-technical teams.",
    ctaHref: "/case-studies/us-ops",
  },
];

export const aboutIntro: AboutIntro = {
  headline: "I started in infrastructure, moved into Android, and grew into shipping full-stack products end to end.",
  body:
    "That path taught me to care about delivery after launch, not just the build. Across Bolivia, Peru, Chile, and the U.S., I have worked on public mobile apps, internal tools, payment workflows, and role-based platforms that teams rely on every day.\n\nI do my best work where business processes are messy, users need clear flows, and teams want someone who can collaborate across product, engineering, and operations without losing execution speed.",
};

export const personalStrengths = [
  "I translate messy workflows into software that people can actually use day to day.",
  "I am comfortable owning both the first release and the iteration work that follows after launch.",
  "I communicate clearly with product, ops, and non-technical teammates when tradeoffs need to be made.",
];

export const parallelRolesNote =
  "Some roles overlapped by design. V@COMM and Digicorp ran in parallel from Dec 2019 to Jun 2024 with separate products, clients, and ownership boundaries.";

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
      "Supported early-stage D-Cloud monitoring systems.",
      "Maintained secure infrastructure workflows and operational protocols.",
    ],
  },
  {
    company: "TISMART (DATEC Division)",
    role: "Junior Android Developer",
    period: experienceDates.tismart.label,
    location: "Bolivia",
    highlights: [
      "Integrated REST APIs for billing and inspection tracking.",
      "Contributed to financial app UI and production maintenance.",
      "Worked in Agile delivery cycles.",
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
      "Built daily registration and reporting systems used by 100+ active users.",
      "Implemented geospatial branch coverage tools with geofencing.",
      "Delivered role-based websites and internal dashboards.",
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
      "Built Octopus payments platform with Android app and printer integration.",
      "Shipped Flutter wallet with OTP, SMS workflows, and settlement automation.",
      "Launched in two credit cooperatives and the platform remains in active operational use.",
      "Enabled service collections with commission and settlement logic.",
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
      "Led DigiApp Android and iOS delivery and publishing.",
      "Designed and maintained Digicorp e-commerce web platform from scratch using Vanilla JavaScript.",
      "Integrated payment gateways, ERP systems, and reporting modules.",
      "Supported daily platform usage around 3,000 users in Bolivia.",
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
      "Built a real-time dashboard for business insights and operational transparency.",
      "Developed web and mobile systems for technical team management.",
      "Created service order management with pricing logic, PDFs, and email communication.",
      "Redesigned the company website to improve engagement and showcase services.",
    ],
  },
  {
    company: "MatchdayOS",
    role: "Product Engineer",
    period: experienceDates.matchdayos.label,
    location: "Remote",
    highlights: [
      "Designed and implemented a role-based soccer operations platform with 5 workspaces.",
      "Built matchday workflows from setup and roster validation to official closure.",
      "Integrated Supabase, typed TypeScript boundaries, and automated tests.",
      "Delivered public competition views for standings, schedules, and player stats.",
    ],
  },
];

export const careerPrinciples = [
  "I like turning ambiguous business workflows into clear product decisions and straightforward code paths.",
  "I keep scope honest so teams can ship, learn, and improve without losing trust.",
  "I collaborate comfortably with product, design, ops, and business stakeholders.",
  "I treat accessibility and maintainability as part of the feature, not cleanup.",
];

export const caseStudyHighlights: CaseStudyHighlight[] = [
  {
    slug: "digicorp",
    title: "Digicorp DigiApp & Commerce Ownership",
    summary:
      "Public mobile delivery plus the web commerce platform designed and maintained from scratch with Vanilla JavaScript.",
    outcome: "10,000+ Android downloads and multi-year platform continuity.",
    impactMetrics: [
      "10,000+ Android downloads",
      `${experienceDates.digicorp.label} ownership window`,
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
  {
    slug: "matchdayos",
    title: "MatchdayOS - End-to-End Soccer Operations",
    summary:
      "Role-based platform for clubs, leagues, referees, guardians, and players with live matchday control and official reporting.",
    outcome: "End-to-end matchday operations and public competition visibility in one product.",
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
    label: "Email Carlos",
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
    sourceLabel: "View full recommendation",
    sourceUrl: "https://www.linkedin.com/in/carancibiav/details/recommendations/",
  },
];

export const recruiterResponseWindow = "Usually replies within 24-48 hours.";
