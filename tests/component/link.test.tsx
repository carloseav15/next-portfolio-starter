import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { ComponentPropsWithoutRef } from "react";
import { TextLink, ActionLink, CompactActionLink } from "@/components/ui/Link";

vi.mock("next/link", () => {
  return {
    default: ({ children, href, ...props }: ComponentPropsWithoutRef<"a">) => {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    },
  };
});

describe("Link Components", () => {
  it("renders TextLink correctly", () => {
    render(<TextLink href="/test">Go to test</TextLink>);
    const link = screen.getByRole("link", { name: "Go to test" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });

  it("renders ActionLink correctly", () => {
    render(<ActionLink href="/action">Do action</ActionLink>);
    const link = screen.getByRole("link", { name: "Do action" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/action");
  });

  it("renders CompactActionLink correctly", () => {
    render(<CompactActionLink href="/compact">Read more</CompactActionLink>);
    const link = screen.getByRole("link", { name: "Read more" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/compact");
  });
});
