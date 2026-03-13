import { Mode } from "../types/timer";

interface TimerProps {
  timeLeft: number;
  mode: Mode;
  sessions: number;
}

const Timer = ({ timeLeft, mode, sessions }: TimerProps) => {
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeLeft % 60)
    .toString()
    .padStart(2, "0");

  return (
    <>
      <div className="flex flex-col items-center justify-center my-8">
        <p className="text-lg font-semibold uppercase tracking-widest text-gray-400 mb-2">
          {mode === "work"
            ? "Focus"
            : mode === "shortBreak"
              ? "Short Break"
              : "Long Break"}
        </p>
        <h2 className="text-8xl font-bold tracking-tight text-black">
          {`${minutes}:${seconds}`}
        </h2>
        <p className="text-sm text-gray-400 mt-4">Sessions: {sessions}</p>
      </div>
    </>
  );
};

export default Timer;
