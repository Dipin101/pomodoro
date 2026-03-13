export type Mode = "work" | "shortBreak" | "longBreak";

export interface TimerState {
  timeLeft: number;
  isRunning: boolean;
  mode: Mode;
  sessions: number;
}

export const TIMER_DURATIONS: Record<Mode, number> = {
  work: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};
