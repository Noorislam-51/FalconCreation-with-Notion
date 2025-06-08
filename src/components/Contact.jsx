import React, { useState } from 'react';
import '../styles/components/Contact.css';
import ContactModal from './ContactModal';

const ContactForm = () => {
  return (
    <div className="contact-container" id="Contact">

      <div className="contact-wrapper">
      <div className='contactHead'>
        <span className="label">Contact</span>
        <h2 className="heading">Get In Touch</h2>
        <p className="subheading">Ready to start your next project? Contact us directly through the form below or reach out via your preferred method.</p>

       </div>


        <div className="contact-content">
          {/* Left Side - Contact Information */}
          <div className="contact-info">

            <h2>Contact Information</h2>
            <p className="info-subtitle">
              We'll create high-quality linkable content and
              build at least 40 high-authority links
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <div>+8801778771986</div>
                  <div>+9987659396</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-text">
                  <a href="mailto:falconcreation5114@gmail.com">falconcreation5114@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  New York, USA
                </div>
              </div>
            </div>
            <div className="social-media">
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>



            <div className="decorative-circle"></div>
          </div>
          <ContactModal variant="page" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;