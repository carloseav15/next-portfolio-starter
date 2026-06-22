import { profileIdentity } from "@/lib/profile";
import type { ProofItem } from "@/lib/proof";
import { validateProofItems } from "@/lib/proof";

export type ExternalLinkKey =
  | "email"
  | "linkedin"
  | "github"
  | "website"
  | "googlePlay"
  | "appStore"
  | "digicorpBolivia"
  | "digicorpPeru"
  | "digicorpChile"
  | "engagePulse";

export const externalLinks: Record<ExternalLinkKey, ProofItem> = {
  email: {
    id: "email",
    label: "Email",
    status: "verified",
    href: `mailto:${profileIdentity.email}`,
    note: "Primary contact channel.",
  },
  linkedin: {
    id: "linkedin",
    label: "LinkedIn",
    status: "verified",
    href: "https://linkedin.com/in/carancibiav",
    note: "Professional profile and experience timeline.",
  },
  github: {
    id: "github",
    label: "GitHub",
    status: "verified",
    href: "https://github.com/carloseav15",
    note: "Public code samples and repository history.",
  },
  engagePulse: {
    id: "engagePulse",
    label: "Android Demo",
    status: "verified",
    href: "https://github.com/carloseav15/engage-pulse",
    note: "Android architecture and telemetry demo repository.",
  },
  website: {
    id: "website",
    label: "Website",
    status: "verified",
    href: "https://www.carlos-arancibia.com",
    note: "Primary portfolio domain.",
  },
  googlePlay: {
    id: "googlePlay",
    label: "Google Play",
    status: "verified",
    href: "https://play.google.com/store/apps/details?id=digicorp.com.bo.main.digiecommerce&hl=es_419",
    note: "Canonical Android listing.",
  },
  appStore: {
    id: "appStore",
    label: "App Store",
    status: "verified",
    href: "https://apps.apple.com/bo/app/digiapp-bolivia/id1527479911",
    note: "Available on Bolivia storefront.",
  },
  digicorpBolivia: {
    id: "digicorpBolivia",
    label: "Digicorp Bolivia",
    status: "verified",
    href: "https://www.digicorp.com.bo",
    note: "Official Digicorp site for Bolivia operations.",
  },
  digicorpPeru: {
    id: "digicorpPeru",
    label: "Digicorp Peru",
    status: "verified",
    href: "https://www.digicorp.com.pe",
    note: "Official Digicorp site for Peru operations.",
  },
  digicorpChile: {
    id: "digicorpChile",
    label: "Digicorp Chile",
    status: "verified",
    href: "https://www.digicorp.cl",
    note: "Official Digicorp site for Chile operations.",
  },
};

validateProofItems(externalLinks);

export const DIGICORP_PROOF = {
  imageSrc: "/images/digicorp-proof-2026.webp",
  imageAlt: "Digicorp DigiApp proof image showing verified production delivery and active distribution continuity.",
  status: "verified" as const,
  note: "Digicorp DigiApp proof image aligned with verified production experience and release continuity.",
};

export const EMAIL = profileIdentity.email;
