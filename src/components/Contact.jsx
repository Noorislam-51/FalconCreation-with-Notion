import React, { useState } from 'react';
import '../styles/components/contact.css';
import ContactModal from './ContactModal';

const ContactForm = () => {
  return (
    <div className="contact-container" id="Contact">

      <div className="contact-wrapper">
        <div className='contactHead'>
          <span className="label">Contact</span>
          <h2 className="heading contact-head">Get In Touch</h2>
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
                  <div>+91 9266863816</div>
                  <div>+91 8882900470</div>
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
                  Noida, India
                </div>
              </div>
            </div>
            <div className="social-media">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                <i className="fab fa-facebook-f"></i>
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