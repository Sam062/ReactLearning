import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { QuizComponent } from './components/QuizComponent';
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import { ResultComponent } from './components/ResultComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (<>
    <HeaderComponent />
    <div>
      <Router>
        <div>
          <Routes>
            <Route path='/question' element={<QuizComponent />} />
            <Route path='/' element={<QuizComponent />} />
            <Route path='/testResult/:finalResultJson' element={<ResultComponent />} />
          </Routes>
        </div>
      </Router>
    </div>
    <FooterComponent />
  </>
  );
}

export default App;
