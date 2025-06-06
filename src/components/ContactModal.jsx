import React, { useState, useEffect } from 'react';
import axios from "axios";
import servicesData from '../data/servicesData';
import '../styles/components/Contact.css';

const ContactModal = ({ variant = "default" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web',
    subservice: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const webhookURL = "https://hook.eu2.make.com/3fes9g474a7ddap9wuhj8nxk1d13p7c5";

    try {
      const response = await axios.post(webhookURL, formData);

      if (response.status === 200) {
        alert("Message sent successfully!");

        setFormData({
          name: '',
          email: '',
          projectType: 'Web',
          subservice: '',
          message: ''
        });

        // Optional: Reload after 1.5 seconds
        setTimeout(() => {
          window.location.reload();
        }, 1500);

      } else {
        alert("Failed to send message, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error.message || error);
      alert("Failed to send message, please try again later.");
    }

    setLoading(false);
  };

  // Inject CSS styles once
  useEffect(() => {
    const styleId = 'contact-form-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = ``; // Optional: Add inline styles here if needed
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  const selectedService = servicesData.find(
    (service) => service.title === formData.projectType
  );
  const subservices = selectedService?.modal?.services || [];

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            className="form-input form-select"
            required
          >
            <option value="">-- Select Service --</option>
            {servicesData.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        {subservices.length > 0 && (
          <div className="form-group">
            <label>Subservice</label>
            <select
              name="subservice"
              value={formData.subservice}
              onChange={handleInputChange}
              className="form-input form-select"
              required
            >
              <option value="">-- Select Subservice --</option>
              {subservices.map((sub, idx) => (
                <option key={idx} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your project, goals, and timeline..."
            className="form-textarea"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactModal;
