
import React from 'react';

import '../styles/components/footer.css';



const Footer = () => {
  return (
    <>
    

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Logo Section */}
            <div className="footer-section logo-section">
              <a href="#home" className="logo">
                <div className="logo-icon">🦅</div>
                FalconCreation
              </a>
              <p className="tagline">Where Creativity Takes Flight</p>
              <div className="social-links">
                <a 
                  href="https://instagram.com" 
                  className="social-link instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a 
                  href="https://behance.net" 
                  className="social-link behance"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Behance"
                >
                  🎨
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="social-link linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
              </div>
            </div>

            {/* Menu Section */}
            <div className="footer-section menu-section">
              <h3>Quick Links</h3>
              <nav>
                <ul className="footer-menu">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="footer-section contact-section">
              <h3>Get In Touch</h3>
              <div className="contact-info-footer">
                <a 
                  href="mailto:falconcreation5114@gmail.com" 
                  className="email-link"
                  aria-label="Send Email"
                >
                  ✉️ falconcreation5114@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © <strong>FalconCreation</strong> 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
