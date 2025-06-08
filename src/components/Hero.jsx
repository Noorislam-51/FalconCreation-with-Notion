import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/components/hero.css';
import ContactModal from './ContactModal';

import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Hero = () => {
  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  const openModal = () => {
    document.body.style.overflow = 'hidden'; // prevent scroll
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setIsModalOpen(false);
  };
  return (
    <>
      <Navbar />
      <section className="hero-section" id="Home">


        <div className="hero-wrapper">
          <div className="hero-text">
            <h1 className="hero-title">
              FalconCreation<span>  — <br />Where Creativity Takes Flight</span>
            </h1>
            <p className="hero-subtext">
              Your One-Stop Solution for Digital Creativity & Development — expert websites,
              stunning designs, and engaging videos to grow your brand online.
            </p>
            <div className="hero-buttons">
              <button className="btn primary-btn" onClick={openModal}>
               Hire Us Today →
              </button>
              <button className="btn secondary-btn" onClick={() => scrollToSection('About')}>
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-socials">
            <a href="https://www.instagram.com/falconcreation5114/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>


      </section>
      

      {isModalOpen && (
        <div className="modal-backdrop"
          onClick={closeModal}>
          <div className="modal-content"
            onClick={(e) => e.stopPropagation()} >
            <button className="close-btn" onClick={closeModal}>×</button>
            <ContactModal />
          </div>
        </div>

      )}
      
    </>
  );
};

export default Hero;
