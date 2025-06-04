import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
