import './App.css';
import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;

}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>Minus</button>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Plus</button>
    </>
  );
}

export default App;
