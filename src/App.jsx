import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import PortfolioPage from './pages/PortfolioPage'
function HomePage() {
  return (
    <>
    
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}


export default App;
