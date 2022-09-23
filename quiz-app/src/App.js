import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { QuizComponent } from './components/QuizComponent';
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import { ResultComponent } from './components/ResultComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <HeaderComponent />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Routes>

            <Route path='/' element={<QuizComponent />} />
            <Route path='/testResult' element={<ResultComponent />} />

          </Routes>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
