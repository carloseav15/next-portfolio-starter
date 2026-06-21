import type { ProofStatus } from "@/lib/proof";

export type AboutIntro = {
  headline: string;
  body: string;
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

export type ContactChannel = {
  type: "email" | "linkedin" | "github";
  label: string;
  href: string;
  status: ProofStatus;
  primary?: boolean;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export const aboutIntro: AboutIntro = {
  headline: "I started in infrastructure, moved into Android, and grew into shipping full-stack products end to end.",
  body: "That path taught me to care about delivery after launch, not just the build. Across Bolivia, Peru, Chile, and the U.S., I have worked on public mobile apps, internal tools, payment workflows, and role-based platforms that teams rely on every day.\n\nI do my best work where business processes are messy, users need clear flows, and teams want someone who can collaborate across product, engineering, and operations without losing execution speed.",
};

export const personalStrengths = [
  "I translate messy workflows into software that people can actually use day to day.",
  "I am comfortable owning both the first release and the iteration work that follows after launch.",
  "I communicate clearly with product, ops, and non-technical teammates when tradeoffs need to be made.",
];

export const strengthLabels = ["Messy → clear", "Ship + iterate", "Clear tradeoffs"];

export const careerPrinciples = [
  "I like turning ambiguous business workflows into clear product decisions and straightforward code paths.",
  "I keep scope honest so teams can ship, learn, and improve without losing trust.",
  "I collaborate comfortably with product, design, ops, and business stakeholders.",
  "I treat accessibility and maintainability as part of the feature, not cleanup.",
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

export const contactChannels: ContactChannel[] = [
  {
    type: "email",
    label: "Email Carlos",
    href: "mailto:carloseav15@gmail.com",
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

export const recruiterResponseWindow = "Usually replies within 24-48 hours.";

export const education: Education = {
  degree: "Bachelor's in Systems Engineering",
  institution: "Universidad Católica Boliviana",
  period: "2012 – 2017",
};
