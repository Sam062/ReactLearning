import './App.css';
import ContactListComponent from './components/ContactListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateContactListComponent from './components/CreateContactListComponent';
import MyDummyComponent from './components/MyDummyComponent'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div>
          <Routes>
            <Route exact path='/' element={<ContactListComponent />} />
            <Route path='/loadDummyComponent'  element={<MyDummyComponent />} />
            <Route exact path="/addContactList" element={<CreateContactListComponent />} />
          </Routes>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
