import React from 'react';
import Navbar from './Navbar';
import '../styles/components/hero.css';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <section className="hero-section" id="home">
       

        <div className="hero-wrapper">
          <div className="hero-text">
            <h1 className="hero-title">
              FalconCreation — <br />Where Creativity Takes Flight
            </h1>
            <p className="hero-subtext">
              Your One-Stop Solution for Digital Creativity & Development — expert websites,
              stunning designs, and engaging videos to grow your brand online.
            </p>
            <div className="hero-buttons">
              <button className="btn primary-btn" onClick={() => scrollToSection('services')}>
                Explore Services
              </button>
              <button className="btn secondary-btn" onClick={() => scrollToSection('contact')}>
                Get a Quote
              </button>
            </div>
          </div>

          <div className="hero-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

       
      </section>
    </>
  );
};

export default Hero;
