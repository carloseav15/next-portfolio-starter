import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="pt-20" eyebrow="404" title="Page not found">
      <Card className="max-w-2xl">
        <p className="text-[var(--color-text-soft)]">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-5">
          <ButtonLink href="/">Return home</ButtonLink>
        </div>
      </Card>
    </Section>
  );
}
