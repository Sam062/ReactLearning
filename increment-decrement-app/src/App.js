import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  }
  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div className="App" style={{display: "flex", fontSize: "xxx-large"}}>
      <div>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        {count}
      </div>
      <div>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
