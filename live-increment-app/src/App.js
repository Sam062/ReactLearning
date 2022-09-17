import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring';

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 0,
    config: { mass: 1, tension: 500, friction: 50 }
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

function App() {
  return (
    <div className="App">
      <h1>Live Increment</h1>
      <div style={{display:"flex", justifyContent: "space-around", fontSize: "8rem", fontWeight: 100}}>
        <div>
          <Number n={1000} />
        </div>
        <div>
          <Number n={5000} />
        </div>
        <div>
          <Number n={9000} />
        </div>
      </div>
    </div>
  );
}

export default App;
