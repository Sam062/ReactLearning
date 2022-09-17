import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import { QuestionsComponent } from './components/QuestionsComponent';

function App() {
  return (
    <div>
      <header className="App-header" style={{position: "fixed", width: "-webkit-fill-available"}}>
        <h1 className="display-5">Online Quiz App</h1>
      </header>
        <QuestionsComponent />
    </div>
  );
}

export default App;
