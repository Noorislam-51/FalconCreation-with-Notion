import React, { useState } from 'react';
import '../styles/components/Navbar.css';
import ContactModal from './ContactModal';
// import Logo from '../assets/logos/Logo.png'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    document.body.style.overflow = 'hidden'; // prevent scroll
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setIsModalOpen(false);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <header className="navbar" data-aos="fade-down" data-aos-once="true">
      <div className="logo" onClick={() => scrollToSection('Home')}>
        <img src="/logos/Logo.png" alt="FalconCreation Logo" className="logo-img" />
      </div>


      
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((id) => (
            <li className="nav-item" key={id}>
              <button className="nav-link " onClick={() => scrollToSection(id)}>
                {id.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA Button */}
      <button className="btn primary-btn btn-for-small" onClick={openModal}>
        Hire Us Today →
      </button>
          <button className="hamburger" onClick={toggleMenu}>☰</button>
      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} >
            <button className="close-btn" onClick={closeModal}>×</button>
            <ContactModal />
          </div>
        </div>
      )}

    </header>

  );
};

export default Navbar;
