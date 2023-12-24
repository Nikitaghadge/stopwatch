import { useEffect, React, useState } from "react";
import "./App.css";

export default function App() {
  const [isActivated, setIsActivated] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let intervalID;

    if (isActivated) {
      intervalID = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalID);
    }
    return () => clearInterval(intervalID);
  }, [isActivated]);

  const startStop = () => {
    setIsActivated((prevIsActivated) => !prevIsActivated);
  };

  const reset = () => {
    setIsActivated(false);
    setTimer(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="App">
      <p>
        <strong>Stopwatch</strong>
      </p>
      <p> Time : {formatTime(timer)}</p>
      <button onClick={startStop}>{isActivated ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
