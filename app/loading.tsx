import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="mx-auto max-w-lg text-center">
        <div className="display-heading mx-auto h-10 w-48 animate-pulse rounded bg-[var(--color-subtle-bg)] text-4xl sm:text-5xl" />
        <div className="mx-auto mt-4 h-12 w-full max-w-sm animate-pulse rounded bg-[var(--color-subtle-bg)]" />
        <div className="mx-auto mt-8 h-11 w-32 animate-pulse rounded-md bg-[var(--color-subtle-bg)]" />
      </div>
    </Container>
  );
}
