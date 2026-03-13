import { Mode } from "../types/timer";

interface ModeSelectorProps {
  mode: Mode;
  onSetMode: (mode: Mode) => void;
}

const ModeSelector = ({ mode, onSetMode }: ModeSelectorProps) => {
  return (
    <div className="flex gap-3 justify-center mb-6">
      <button
        onClick={() => onSetMode("work")}
        disabled={mode === "work"}
        className="px-4 py-2 rounded-full font-semibold transition bg-red-500 hover:bg-red-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Work
      </button>
      <button
        onClick={() => onSetMode("shortBreak")}
        disabled={mode === "shortBreak"}
        className="px-4 py-2 rounded-full font-semibold transition bg-green-500 hover:bg-green-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Short Break
      </button>
      <button
        onClick={() => onSetMode("longBreak")}
        disabled={mode === "longBreak"}
        className="px-4 py-2 rounded-full font-semibold transition bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Long Break
      </button>
    </div>
  );
};

export default ModeSelector;
