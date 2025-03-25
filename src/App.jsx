import { useState ,useEffect} from 'react'
import './App.css'

function App() {
  const [Time, setTime] = useState(0);
  const[isRunning,setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) => {
    // const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = (time % 1000) / 10;
    return `${String(seconds).padStart(1, "0")}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(Time)}</p>
      <div className="buttons">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={() => { setTime(0); setIsRunning(false); }}>Reset</button>
      </div>
    </div>
  );
};

export default App
