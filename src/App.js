import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Education from './components/Education';
import Quotes from './components/Quotes';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
