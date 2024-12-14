import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Additional from './components/Additional';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/additional" element={<Additional />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;