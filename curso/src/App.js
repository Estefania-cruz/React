import logo from './logo.svg';
import './App.css';
/*import Welcome from './components/welcome';*/
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Contact from './pages/contact';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/contact">contacto</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
      <Routes>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/profile/:name" element={<Profile/>}/>
      </Routes>
    </Router>

      </header>
    </div>
  );
}

export default App;
