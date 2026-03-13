import { render, screen, fireEvent } from "@testing-library/react";
import Controls from "../components/Controls";

describe("Controls", () => {
  it("should show Start button when timer is not running", () => {
    render(
      <Controls
        isRunning={false}
        onStart={() => {}}
        onPause={() => {}}
        onReset={() => {}}
      />,
    );
    expect(screen.getByText("Start")).toBeInTheDocument();
  });

  it("should show Pause button when timer is running", () => {
    render(
      <Controls
        isRunning={true}
        onStart={() => {}}
        onPause={() => {}}
        onReset={() => {}}
      />,
    );
    expect(screen.getByText("Pause")).toBeInTheDocument();
  });

  it("should call onStart when Start is clicked", () => {
    const onStart = vi.fn(); //--> a mock function
    render(
      <Controls
        isRunning={false}
        onStart={onStart}
        onPause={() => {}}
        onReset={() => {}}
      />,
    );
    fireEvent.click(screen.getByText("Start"));
    expect(onStart).toHaveBeenCalled();
  });

  it("should call onReset when <Reset></Reset> is clicked", () => {
    const onReset = vi.fn();
    render(
      <Controls
        isRunning={false}
        onStart={() => {}}
        onPause={() => {}}
        onReset={onReset}
      />,
    );
    fireEvent.click(screen.getByText("Reset"));
    expect(onReset).toHaveBeenCalled();
  });
});
