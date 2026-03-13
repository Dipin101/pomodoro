import { renderHook, act } from "@testing-library/react";
import useTimer from "../hooks/useTimer";
import { TIMER_DURATIONS } from "../types/timer";

describe("useTimer", () => {
  //describes the problem checking the types and outputs
  it("should initialize with default state", () => {
    const { result } = renderHook(() => useTimer());

    //expecting the output
    expect(result.current.state.mode).toBe("work");
    expect(result.current.state.isRunning).toBe(false);
    expect(result.current.state.timeLeft).toBe(TIMER_DURATIONS.work);
    expect(result.current.state.sessions).toBe(0);
  });

  //checking for start()
  it("should start the timer", () => {
    const { result } = renderHook(() => useTimer());

    act(() => {
      result.current.start();
    });

    expect(result.current.state.isRunning).toBe(true);
  });

  //checking for pause()
  it("should start the timer", () => {
    const { result } = renderHook(() => useTimer());

    act(() => {
      result.current.start();
      result.current.pause();
    });

    expect(result.current.state.isRunning).toBe(false);
  });

  //checking for reset()
  it("should start the timer", () => {
    const { result } = renderHook(() => useTimer());

    act(() => {
      result.current.start();
      result.current.reset();
    });

    expect(result.current.state.timeLeft).toBe(TIMER_DURATIONS.work);
    expect(result.current.state.isRunning).toBe(false);
  });

  //checking for setMode()
  it("should start the timer", () => {
    const { result } = renderHook(() => useTimer());

    act(() => {
      result.current.setMode("shortBreak");
    });

    expect(result.current.state.mode).toBe("shortBreak");
    expect(result.current.state.timeLeft).toBe(TIMER_DURATIONS.shortBreak);
    expect(result.current.state.isRunning).toBe(false);
  });
});
