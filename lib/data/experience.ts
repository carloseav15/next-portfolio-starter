import { experienceDates } from "@/lib/experienceDates";

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  activeInProduction?: boolean;
  statusNote?: string;
  type?: "employment" | "personal";
};

export type ActivePlatformItem = {
  name: string;
  status: "Active in Production";
  note: string;
};

export const careerTimeline: ExperienceItem[] = [
  {
    company: "Playfit",
    role: "Creator (Public Side Project)",
    period: experienceDates.playfit.label,
    location: "Remote",
    type: "personal",
    highlights: [
      "Public side project built to demonstrate AI-assisted product engineering end to end.",
      "Architected a Next.js 16 (App Router) and React 19 monorepo application separating apps/web and @playfit/core.",
      "Open-sourced the codebase (github.com/carloseav15/playfit) and structured the roadmap for native Android, iOS, and Flutter variants.",
      "Engineered a real-time recommendation scoring engine for user game affinity and friction risk.",
      "Implemented Supabase Row-Level Security (RLS) and PL/pgSQL database-level functions, eliminating exposed keys.",
    ],
  },
  {
    company: "Unified-World Web RPG (Private Repository)",
    role: "Creator (Personal Project)",
    period: experienceDates.gamePort.label,
    location: "Remote",
    type: "personal",
    highlights: [
      "Porting the decompiled C source of a classic Game Boy Advance RPG to TypeScript, running in the browser on a 240x160 Canvas.",
      "Goal: the original series split its world across separate games, one region each; this project joins three regions into one continuous world with quality-of-life improvements.",
      "Emulates the handheld's graphics hardware (PPU, VRAM, OAM, palettes, DMA, VBlank) and translates the decomp nearly line by line.",
      "Built with AI coding agents under explicit project rules, batch-based porting, and generated progress inventories. Code available on request.",
    ],
  },
  {
    company: "Nordstrom Rack",
    role: "Inventory Control Specialist",
    period: experienceDates.nordstrom.label,
    location: "Naples, FL",
    highlights: [
      "Promoted from Logistics Processor to Inventory Control Specialist within one year; non-technical role held while pursuing my next software engineering position.",
      "Support inventory accuracy through data analysis and day-to-day coordination across store teams.",
      "Recognized as Employee of the Month (Logistics Processor) and with the Asset Protection Rackstar award (Sep 2026).",
    ],
  },
  {
    company: "Diaz Brothers Company LLC",
    role: "Software Engineer",
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
    activeInProduction: true,
    statusNote: "Active in Production",
    highlights: [
      "Main programmer for public Android & iOS applications (DigiApp), achieving 10,000+ public downloads and maintaining stability for 4+ years.",
      "Designed and built the B2B e-commerce web platform from scratch in Vanilla JavaScript, HTML, CSS, and SQL Server.",
      "Built backend REST APIs from scratch in PHP; engineered reverse-engineering flows on the legacy database due to a lack of documentation.",
      "Developed Flutter mobile prototypes in fast-paced 1-month loops, heavily contributing to UI/UX design.",
      "Integrated payment gateways and ERP systems into the customer order request process, cutting order time by 75% for clients and customer service.",
      "Managed DigitalOcean (Linux) and Windows Server instances, and integrated Firebase services.",
      "Supported a platform serving 3,000+ daily active B2B clients in Bolivia.",
    ],
  },
  {
    company: "V@COMM",
    role: "Co-Founder & Technical Advisor (Part-Time)",
    period: experienceDates.vcomm.label,
    location: "Bolivia",
    activeInProduction: true,
    statusNote: "Active in Production",
    highlights: [
      "Developed 'Octopus' online payment and collection architecture, Android printing integration, and settlement logic.",
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
