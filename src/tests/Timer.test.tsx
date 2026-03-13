import { render, screen } from "@testing-library/react";
import Timer from "../components/Timer";

describe("Timer", () => {
  it("should display time correctly", () => {
    render(<Timer timeLeft={1500} mode="work" sessions={0} />);
    expect(screen.getByText("Focus")).toBeInTheDocument();
  });

  it("should display session count", () => {
    render(<Timer timeLeft={1500} mode="work" sessions={2} />);
    expect(screen.getByText("Sessions: 2")).toBeInTheDocument();
  });
});
