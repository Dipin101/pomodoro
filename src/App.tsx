import useTimer from "./hooks/useTimer";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import ModeSelector from "./components/ModeSelector";

const App = () => {
  const { state, start, pause, reset, setMode } = useTimer();
  return (
    <>
      <div>
        <h1>Pomodoro</h1>
        <ModeSelector mode={state.mode} onSetMode={setMode} />
        <Timer
          timeLeft={state.timeLeft}
          mode={state.mode}
          sessions={state.sessions}
        />
        <Controls
          isRunning={state.isRunning}
          onStart={start}
          onPause={pause}
          onReset={reset}
        />
      </div>
    </>
  );
};

export default App;
