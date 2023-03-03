import './App.css';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {

  const handle = useFullScreenHandle();

  return (
    <div className="App">
      <button onClick={handle.enter}>
        Enter fullscreen
      </button>

      <FullScreen handle={handle}>
        <h1 style={{ "color": "white" }}>Hiihih</h1>
        <button onClick={handle.exit} style={{ "color": "white" }}>Exit fullscreen</button>
      </FullScreen>
    </div>
  );
}

export default App;
