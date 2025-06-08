import React, { useState, useEffect } from 'react';
import axios from "axios";
import servicesData from '../data/servicesData';
import '../styles/components/Contact.css';

const ContactModal = ({ variant = "default" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web',
    subservice: '',
    message: '',
    budget: '',
    timeline: '',
    preferredContact: ''
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const webhookURL = "https://hook.eu2.make.com/3fes9g474a7ddap9wuhj8nxk1d13p7c5";

    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    if (file) formDataToSend.append('file', file);

    try {
      const response = await axios.post(webhookURL, formDataToSend);
      if (response.status === 200) {
        alert("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Web',
          subservice: '',
          message: '',
          budget: '',
          timeline: '',
          preferredContact: ''
        });
        setFile(null);
        setTimeout(() => window.location.reload(), 1500);
      } else {
        alert("Failed to send message, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error.message || error);
      alert("Failed to send message, please try again later.");
    }

    setLoading(false);
  };

  useEffect(() => {
    const styleId = 'contact-form-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = ``;
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

      {/* Name, Email, Phone, Preferred Contact in one line */}
      <div className="form-row">
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full name" className="form-input" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email address" className="form-input" required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Optional" className="form-input" />
        </div>
        <div className="form-group">
          <label>Preferred Contact</label>
          <select name="preferredContact" value={formData.preferredContact} onChange={handleInputChange} className="form-input form-select">
            <option value="">-- Select --</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>
      </div>

      {/* Project Type */}
      <div className="form-group">
        <label>Project Type</label>
        <select name="projectType" value={formData.projectType} onChange={handleInputChange} className="form-input form-select" required>
          <option value="">-- Select Service --</option>
          {servicesData.map((service) => (
            <option key={service.id} value={service.title}>{service.title}</option>
          ))}
        </select>
      </div>

      {/* Subservice */}
      {subservices.length > 0 && (
        <div className="form-group">
          <label>Subservice</label>
          <select name="subservice" value={formData.subservice} onChange={handleInputChange} className="form-input form-select" required>
            <option value="">-- Select Subservice --</option>
            {subservices.map((sub, idx) => (
              <option key={idx} value={sub}>{sub}</option>
            ))}
          </select>
        </div>
      )}

      {/* Budget and Timeline in one row */}
      <div className="form-row">
        <div className="form-group">
          <label>Budget</label>
          <select name="budget" value={formData.budget} onChange={handleInputChange} className="form-input form-select">
            <option value="">-- Select Budget --</option>
            <option value="Under $50">Under $50</option>
            <option value="$100 - $200">$100 - $200</option>
            <option value="$200 - $500">$200 - $500</option>
            <option value="$500 - $1000">$500 - $1000</option>
            <option value="Above $1000">Above $1000</option>
            <option value="Other">Other</option>
          </select>
          {formData.budget === 'Other' && (
            <input type="number" name="customBudget" placeholder="Enter your budget in $" value={formData.customBudget || ''} onChange={handleInputChange} className="form-input" min="1" />
          )}
        </div>

        <div className="form-group">
          <label>Timeline</label>
          <input type="text" name="timeline" value={formData.timeline} onChange={handleInputChange} placeholder="e.g. 2 weeks, 1 month" className="form-input" />
        </div>
      </div>

      {/* Message */}
      <div className="form-group">
        <label>Project Description</label>
        <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your project..." className="form-textarea" rows="5" required />
      </div>

      {/* File */}
      {/* <div className="form-group">
        <label>File Attachment</label>
        <input type="file" name="file" onChange={handleFileChange} className="form-input" />
      </div> */}

      <button type="submit" className="btn primary-btn contact-btn" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  </div>
);

};

export default ContactModal;
