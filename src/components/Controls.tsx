interface ControlProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

const Controls = ({ isRunning, onStart, onPause, onReset }: ControlProps) => {
  return (
    <div className="flex gap-4 justify-center mt-6">
      <button
        onClick={isRunning ? onPause : onStart}
        className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={onReset}
        className="px-6 py-2 rounded-full bg-gray-500 hover:bg-gray-600 text-white font-semibold transition"
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
