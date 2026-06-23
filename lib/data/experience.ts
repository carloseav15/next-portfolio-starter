import { experienceDates } from "@/lib/experienceDates";

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

export const parallelRolesNote =
  "Some roles overlapped by design. V@COMM and Digicorp ran in parallel from Dec 2019 to 2020 with separate products, clients, and ownership boundaries.";

export const careerTimeline: ExperienceItem[] = [
  {
    company: "Playfit",
    role: "Senior Product Engineer",
    period: experienceDates.playfit.label,
    location: "Remote",
    type: "personal",
    highlights: [
      "Architected a Next.js 16 (App Router) and React 19 monorepo application separating apps/web and @playfit/core.",
      "Open-sourced the codebase (github.com/carloseav15/playfit) and structured the roadmap for native Android, iOS, and Flutter variants.",
      "Engineered a real-time recommendation scoring engine for user game affinity and friction risk.",
      "Implemented Supabase Row-Level Security (RLS) and PL/pgSQL database-level functions, eliminating exposed keys.",
    ],
  },
  {
    company: "MatchdayOS",
    role: "Product Engineer (Side Project)",
    period: experienceDates.matchdayos.label,
    location: "Remote",
    type: "personal",
    highlights: [
      "Designed and built an end-to-end soccer operations platform with 70 route-level pages (active in development).",
      "Implemented strict role boundaries across 5 user access modes: org-admin, team-admin, referee, representative, and player.",
      "Engineered state-driven workflows for live matchday events (roster verification, timeline, scoreboard) and post-match reporting.",
      "Integrated UX telemetry logging client actions into Supabase database analytics.",
    ],
  },
  {
    company: "Diaz Brothers Company LLC",
    role: "Senior Product Engineer",
    period: experienceDates.diaz.label,
    location: "Bonita Springs & Naples, FL",
    activeInProduction: true,
    statusNote: "Operational systems remain active",
    highlights: [
      "Designed and built a real-time operational dashboard for logistical transparency and technician/vehicle dispatch tracking.",
      "Created an internal service order logistics system with custom pricing logic, PDF invoice generation, and automated workflows.",
      "Eliminated manual phone coordination between field teams and administration by establishing real-time scheduling tracking.",
      "Redesigned the company website to improve engagement and showcase services.",
    ],
  },
  {
    company: "DIGICORP LTDA",
    role: "Mobile & E-Commerce Systems Engineer",
    period: experienceDates.digicorp.label,
    location: "Bolivia / Peru / Chile",
    parallelContext:
      "Parallel advisory engagement with V@COMM from Dec 2019 to 2020 with clear product boundaries and zero scheduling conflicts.",
    activeInProduction: true,
    statusNote: "Active in Production",
    highlights: [
      "Main programmer for public Android & iOS applications (DigiApp), achieving 10,000+ public downloads and maintaining stability for 4+ years.",
      "Designed and built the B2B e-commerce web platform from scratch in Vanilla JavaScript, HTML, CSS, and SQL Server.",
      "Built backend REST APIs from scratch in PHP; engineered reverse-engineering flows on the legacy database due to a lack of documentation.",
      "Developed Flutter mobile prototypes in fast-paced 1-month loops, heavily contributing to UI/UX design.",
      "Integrated payment gateways and ERP systems, improving internal customer service purchase workflows by 75%.",
      "Managed DigitalOcean (Linux) and Windows Server instances, and integrated Firebase services.",
      "Supported a platform serving 3,000+ daily active B2B clients in Bolivia, Chile, and Peru.",
    ],
  },
  {
    company: "V@COMM",
    role: "Co-Founder & Technical Advisor (Parallel Advisory Engagement)",
    period: experienceDates.vcomm.label,
    location: "Bolivia",
    parallelContext:
      "Co-founded startup run in parallel starting Dec 2019 as a secondary technical advisor with separate ownership boundaries and zero scheduling conflicts.",
    activeInProduction: true,
    statusNote: "Active in Production",
    highlights: [
      "Developed 'Octopus' online payment and collection architecture, Android printing integration, and settlement logic as a secondary advisory role.",
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
      "Maintained secure infrastructure workflows, monitoring tools, and followed operational protocols.",
      "Built a foundational discipline in reliability, incident management, and production operations.",
    ],
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
