import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrNumber, incrNumber, reset } from "./actions/index";

function App() {
  // Step-6  using the selector, get the defined reducer
  const myState = useSelector((state) => state.changeNumber);

  // Step-7 lets play around the states using dispatch
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <h1>Increment/Decrement Counter</h1>

        <div style={{ marginTop: "5rem" }}>
          <button
            className="incrDecr_button"
            onClick={() => dispatch(decrNumber())}
          >
            -
          </button>
          <span className="incrDecr_value">{myState}</span>
          <button
            className="incrDecr_button"
            onClick={() => dispatch(incrNumber())}
          >
            +
          </button>
        </div>
        <button className="resetButton" onClick={() => dispatch(reset())}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;
