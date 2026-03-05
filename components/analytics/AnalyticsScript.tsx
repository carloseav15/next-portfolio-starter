import Script from "next/script";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const plausibleSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? "https://plausible.io/js/script.js";

export function AnalyticsScript() {
  if (!plausibleDomain) {
    return null;
  }

  return <Script defer data-domain={plausibleDomain} src={plausibleSrc} />;
}
