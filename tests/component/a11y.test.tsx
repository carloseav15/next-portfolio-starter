import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe, toHaveNoViolations } from "jest-axe";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProofPill } from "@/components/ui/ProofPill";

expect.extend(toHaveNoViolations);

describe("accessibility", () => {
  it("Button has no violations", async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("ButtonLink has no violations", async () => {
    const { container } = render(<ButtonLink href="/test">Go</ButtonLink>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Badge has no violations", async () => {
    const { container } = render(<Badge>New</Badge>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("ProofPill has no violations", async () => {
    const { container } = render(<ProofPill status="verified" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
