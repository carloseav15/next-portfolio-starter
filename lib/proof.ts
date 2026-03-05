export type ProofStatus = "pending" | "verified";

export type ProofItem = {
  id: string;
  label: string;
  status: ProofStatus;
  href?: string;
  note: string;
  source?: string;
};

export type VerifiedProofItem = ProofItem & {
  status: "verified";
  href: string;
};

const absoluteUrlPattern = /^https:\/\//;

function isExternalHref(value: string) {
  return absoluteUrlPattern.test(value) || value.startsWith("mailto:");
}

export function isVerifiedProof(item: ProofItem): item is VerifiedProofItem {
  return item.status === "verified";
}

export function validateProofItems(items: Record<string, ProofItem>) {
  for (const [key, item] of Object.entries(items)) {
    if (item.status === "verified" && (!item.href || !isExternalHref(item.href))) {
      throw new Error(`Verified proof \"${key}\" requires a valid href.`);
    }
  }
}

export function getProofAvailabilityLabel(status: ProofStatus) {
  return status === "verified" ? "Verified" : "Pending";
}
