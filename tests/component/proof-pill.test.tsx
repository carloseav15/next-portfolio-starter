import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProofPill } from "@/components/ui/ProofPill";

describe("ProofPill", () => {
  it("renders status labels for pending evidence", () => {
    render(<ProofPill status="pending" label="Evidence" />);

    expect(screen.getByText("Evidence")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  it("renders status labels for verified evidence", () => {
    render(<ProofPill status="verified" label="Metric" />);

    expect(screen.getByText("Metric")).toBeInTheDocument();
    expect(screen.getByText("Verified")).toBeInTheDocument();
  });
});
