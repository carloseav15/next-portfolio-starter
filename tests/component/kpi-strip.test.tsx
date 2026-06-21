import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { KPIStrip, KPIItem } from "@/components/ui/KPIStrip";

describe("KPIStrip & KPIItem", () => {
  it("renders KPI metrics correctly", () => {
    render(
      <KPIStrip>
        <KPIItem label="Downloads" value="10,000+" context="App store downloads" />
      </KPIStrip>,
    );

    expect(screen.getByText("Downloads")).toBeInTheDocument();
    expect(screen.getByText("10,000+")).toBeInTheDocument();
    expect(screen.getByText("App store downloads")).toBeInTheDocument();
  });
});
