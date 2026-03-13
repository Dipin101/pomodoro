import { render, screen } from "@testing-library/react";
import ModeSelector from "../components/ModeSelector";

describe("Mode Selector", () => {
  it("should click on work and disable work button", () => {
    const onSetMode = vi.fn();
    render(<ModeSelector mode="work" onSetMode={onSetMode} />);

    expect(screen.getByText("Work")).toBeDisabled();
  });

  it("should click on shortBreak and disable the button", () => {
    const onSetMode = vi.fn();
    render(<ModeSelector mode={"shortBreak"} onSetMode={onSetMode} />);
    expect(screen.getByText("Short Break")).toBeDisabled();
  });

  it("should click on longBreak and disable the button", () => {
    const onSetMode = vi.fn();
    render(<ModeSelector mode={"longBreak"} onSetMode={onSetMode} />);
    expect(screen.getByText("Long Break")).toBeDisabled();
  });
});
