import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dhero from './pages/dhero';
import Asses from './pages/asses';
import DContact from './pages/Dcontact';
import Result from './pages/result';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dhero" element={<Dhero />} />
        <Route path="/asses" element={<Asses />} />
        <Route path="/Dcontact" element={<DContact />} />
        <Route path="/result" element={<Result userName="Vikram Patel" />} />
      </Routes>
    </Router>
  );
}

export default App;
