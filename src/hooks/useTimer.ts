import { useEffect, useState } from "react";
import { Mode, TimerState, TIMER_DURATIONS } from "../types/timer";

//custom hook used to define type using <> and the type inside
const useTimer = () => {
  const [state, setState] = useState<TimerState>({
    timeLeft: TIMER_DURATIONS.work,
    isRunning: false,
    mode: "work",
    sessions: 0,
  });

  useEffect(() => {
    if (!state.isRunning) return;

    const interval = setInterval(() => {
      setState((prev) => {
        if (prev.timeLeft <= 0) {
          const nextSessions =
            prev.mode === "work" ? prev.sessions + 1 : prev.sessions;

          const nextMode: Mode =
            prev.mode === "work"
              ? "shortBreak"
              : prev.mode === "shortBreak" && nextSessions >= 4
                ? "longBreak"
                : prev.mode === "longBreak"
                  ? "work"
                  : "work";

          return {
            ...prev,
            mode: nextMode,
            timeLeft: TIMER_DURATIONS[nextMode],
            isRunning: false,
            sessions: prev.mode === "longBreak" ? 0 : nextSessions,
          };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.isRunning]);

  const start = () => setState((prev) => ({ ...prev, isRunning: true }));
  const pause = () => setState((prev) => ({ ...prev, isRunning: false }));
  const reset = () =>
    setState((prev) => ({
      ...prev,
      timeLeft: TIMER_DURATIONS[prev.mode],
      isRunning: false,
    }));
  const setMode = (mode: Mode) =>
    setState((prev) => ({
      ...prev,
      mode,
      timeLeft: TIMER_DURATIONS[mode],
      isRunning: false,
    }));

  return { state, start, pause, reset, setMode };
};

export default useTimer;
