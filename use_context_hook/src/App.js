import logo from './logo.svg';
import './App.css';
import { ComponentA } from './components/ComponentA'
import { createContext } from 'react';

const FirstName = createContext();
const LastName = createContext();


function App() {
  return (
    <FirstName.Provider value={"SHIVAM"}>
      <LastName.Provider value={"MISHRA"}>
        <div className="App">
          ComponentA
          <ComponentA />
        </div>
      </LastName.Provider>
    </FirstName.Provider>
  );
}

export default App;
export {FirstName, LastName};
