import { permanentRedirect } from "next/navigation";

export default function LegacyFepCaseStudyRedirectPage() {
  permanentRedirect("/case-studies/matchdayos");
}
