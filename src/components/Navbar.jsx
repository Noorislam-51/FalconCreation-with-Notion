import React, { useState } from 'react';
import '../styles/components/navbar.css'; // Ensure your CSS handles .navbar, .nav, .hamburger, etc.

const Navbar = () => {
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
      <div className="logo text-white fw-bold" onClick={() => scrollToSection('home')}>
        FalconCreation
      </div>

      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          {['home', 'services', 'portfolio', 'about', 'contact'].map((id) => (
            <li className="nav-item" key={id}>
              <button className="nav-link text-white" onClick={() => scrollToSection(id)}>
                {id.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </nav>

       {/* CTA Button */}
          <button className="btn btn-success rounded-pill px-4">
            Get a Quote
          </button>
    </header>
  );
};

export default Navbar;
