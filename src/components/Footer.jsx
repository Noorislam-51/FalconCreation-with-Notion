
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
              <div className="logo" onClick={() => scrollToSection('Home')}>
                <img src="/logos/Logo.png" alt="FalconCreation Logo" className="logo-img" />
              </div>

              <p className="tagline">Where Creativity Takes Flight</p>
              <div className="social-media">
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Menu Section */}
            <div className="footer-section menu-section">
              <h3>Quick Links</h3>
              <nav>
                <ul className="footer-menu">
                  <li><a href="#Home">Home</a></li>
                  <li><a href="#Services">Services</a></li>
                  <li><a href="#Portfolio">Portfolio</a></li>
                  <li><a href="#About">About</a></li>
                  <li><a href="#Contact">Contact</a></li>
                </ul>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="footer-section contact-section">
              <h3>Get In Touch</h3>
              <div className="contact-info-footer">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=falconcreation5114@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="email-link"
                  aria-label="Send Email to FalconCreation via Gmail"
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
