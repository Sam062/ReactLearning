import { useReducer } from 'react';
import './App.css';


const initialState = 0;

const reducer = (state, action) => {
  if (action.task === "INCR") {
    return state + 1;
  }
  if (action.task === "DECR") {
    return state - 1;
  }
  return 0;

}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ task: "INCR" })}>Plus</button>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ task: "DECR" })}>Minus</button>

    </>
  );
}

export default App;
