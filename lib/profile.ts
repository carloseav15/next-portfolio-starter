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
  type?: "employment" | "personal";
};

export type ActivePlatformItem = {
  name: string;
  status: "Active in Production";
  note: string;
};

export type CaseStudyHighlight = {
  slug: "digicorp" | "us-ops" | "matchdayos" | "octopus" | "playfit";
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
  id: "digicorp" | "octopus" | "us-ops" | "playfit";
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
  headline: "Product and software engineer shipping production applications used by real teams.",
  location: "Naples, FL 34105",
  email: "carloseav15@gmail.com",
  website: "https://www.carlos-arancibia.com",
  summary:
    "I build high-reliability web and mobile applications with clear ownership, steady delivery, and product focus. Based in Naples, FL and authorized to work in the U.S. (EAD - no sponsorship required).",
  openTo: "Open to remote, hybrid, or on-site software engineering roles across product, platform, and business systems. Based in Naples, FL.",
  languages: ["English (professional working)", "Spanish (native)"],
};

export const heroProofPoints = ["10,000+ downloads", "3,000 daily users", "~1,000 daily operations"];

export const recruiterQuickFacts: RecruiterQuickFact[] = [
  {
    label: "Based in",
    value: "Naples, FL",
  },
  {
    label: "Work Auth",
    value: "EAD (No sponsorship required)",
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
    id: "playfit",
    title: "Playfit Game Assistant",
    outcome: "A modern, local-first game recommendation assistant solving choice fatigue with zero-login onboarding.",
    ownership: "I architected the Next.js 16/React 19 monorepo, IndexedDB local store, and Supabase security workflows.",
    ctaHref: "/case-studies/playfit",
  },
  {
    id: "digicorp",
    title: "Digicorp DigiApp & Commerce",
    outcome: "10,000+ Android downloads and a commerce platform still serving daily B2B shoppers.",
    ownership: "I owned mobile delivery, store releases, and the core web commerce platform built in Vanilla JavaScript.",
    proofLabel: "Google Play listing",
    proofHref:
      "https://play.google.com/store/apps/details?id=digicorp.com.bo.main.digiecommerce&hl=es_419",
    ctaHref: "/case-studies/digicorp",
  },
  {
    id: "octopus",
    title: "Octopus Payments Platform",
    outcome: "About 1,000 daily service-collection operations in active credit cooperative environments.",
    ownership: "I owned architecture, Android and Flutter flows, and the settlement logic behind daily collections.",
    ctaHref: "/case-studies/octopus",
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

export const strengthLabels = ["Messy → clear", "Ship + iterate", "Clear tradeoffs"];

export const parallelRolesNote =
  "Some roles overlapped by design. V@COMM and Digicorp ran in parallel from Dec 2019 to 2020 with separate products, clients, and ownership boundaries.";

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
    company: "Playfit",
    role: "Full Stack Developer",
    period: experienceDates.playfit.label,
    location: "Remote",
    type: "personal",
    highlights: [
      "Architected a Next.js 16 (App Router) and React 19 monorepo application separating apps/web and @playfit/core.",
      "Engineered a real-time recommendation scoring engine for user game affinity and friction risk.",
      "Implemented Supabase Row-Level Security (RLS) and PL/pgSQL database-level functions, eliminating exposed keys.",
      "Designed an atomic IndexedDB profile migration pipeline to merge offline data into authenticated accounts.",
    ],
  },
  {
    company: "MatchdayOS",
    role: "Product Developer (Side Project)",
    period: experienceDates.matchdayos.label,
    location: "Remote",
    type: "personal",
    highlights: [
      "Designed and built an end-to-end soccer operations platform with 70 route-level pages.",
      "Implemented strict role boundaries across 5 user access modes: org-admin, team-admin, referee, representative, and player.",
      "Engineered state-driven workflows for live matchday events (roster verification, timeline, scoreboard) and post-match reporting.",
      "Integrated UX telemetry logging client actions into Supabase database analytics."
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
    company: "DIGICORP LTDA",
    role: "Mobile & E-Commerce Systems Engineer",
    period: experienceDates.digicorp.label,
    location: "Bolivia / Peru / Chile",
    parallelContext: "Parallel engagement with V@COMM from Dec 2019 to 2020 with clear product and maintenance ownership.",
    activeInProduction: true,
    statusNote: "Active in Production",
    highlights: [
      "Main programmer for public Android & iOS applications (DigiApp), achieving 10,000+ public downloads and maintaining stability for 4+ years.",
      "Designed and built the B2B e-commerce web platform from scratch in Vanilla JavaScript, HTML, CSS, and SQL Server.",
      "Built backend REST APIs from scratch in PHP; engineered reverse-engineering flows on the legacy database due to a lack of documentation.",
      "Developed Flutter mobile prototypes in fast-paced 1-month loops, heavily contributing to UI/UX design.",
      "Integrated payment gateways and ERP systems, improving internal customer service purchase workflows by 75%.",
      "Managed DigitalOcean (Linux) and Windows Server instances, and integrated Firebase services.",
    ],
  },
  {
    company: "V@COMM",
    role: "Co-Founder & Software Engineer (Secondary engagement)",
    period: experienceDates.vcomm.label,
    location: "Bolivia",
    parallelContext: "Co-founded startup run in parallel starting Dec 2019 as a secondary technical engagement with separate ownership boundaries.",
    activeInProduction: true,
    statusNote: "Active in Production",
    highlights: [
      "Developed 'Octopus' online payment and collection system deployed in two credit cooperatives.",
      "Designed Android point-of-sale flows with thermal printer integrations and automated settlement logic.",
      "Built a Flutter digital wallet app with OTP verification, SMS gateways, and Firebase integrations.",
      "Automated commission and daily settlement calculations, eliminating manual reconciliation.",
    ],
  },
  {
    company: "Tiempo de Cambio Operations Platform",
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
    company: "TISMART (DATEC Division)",
    role: "Junior Android Developer",
    period: experienceDates.tismart.label,
    location: "Bolivia",
    highlights: [
      "Integrated REST APIs for billing and inspection tracking (CRE electric cooperative).",
      "Implemented UI updates for banking mobile apps (BancoSol, Banco BISA) and the official Datec mobile app.",
      "Contributed to Agile development cycles and production maintenance.",
    ],
  },
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
];

export const careerPrinciples = [
  "I like turning ambiguous business workflows into clear product decisions and straightforward code paths.",
  "I keep scope honest so teams can ship, learn, and improve without losing trust.",
  "I collaborate comfortably with product, design, ops, and business stakeholders.",
  "I treat accessibility and maintainability as part of the feature, not cleanup.",
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

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export const education: Education = {
  degree: "Bachelor's in Systems Engineering",
  institution: "Universidad Católica Boliviana",
  period: "2012 – 2017",
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const technicalSkills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Kotlin", "Java", "Objective-C", "JavaScript", "TypeScript", "Dart", "SQL", "PHP"],
  },
  {
    category: "Frontend & Mobile",
    skills: ["Android (Kotlin/Java)", "iOS (Objective-C)", "Flutter", "React / Next.js 15/16", "Tailwind CSS v4", "HTML", "CSS", "WordPress"],
  },
  {
    category: "Backend & APIs",
    skills: ["REST APIs", "Node.js", "Firebase (Auth, Firestore)", "Supabase (Postgres, Edge Functions)", "SQL Server", "MySQL"],
  },
  {
    category: "Mobile Distribution",
    skills: ["Google Play Console", "App Store Connect"],
  },
  {
    category: "Tools & Quality",
    skills: ["Git", "CI/CD (GitHub Actions)", "Biome", "Vitest", "Playwright", "Agile"],
  },
];
