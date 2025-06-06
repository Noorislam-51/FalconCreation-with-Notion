import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import AboutPage from './components/About'


function App() {
  return (
    <>

      <Hero />
        {/* <AboutPage /> */}
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
