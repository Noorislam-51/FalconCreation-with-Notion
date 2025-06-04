import React, { useState } from 'react';
import '../styles/components/Contact.css';

const ContactModal = ({ variant = "default" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  // Inject CSS styles
  React.useEffect(() => {
    const styleId = 'contact-form-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');

    document.head.appendChild(style);

    return () => {

      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);


  return (
    <>
     
        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <div>
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
                <option value="Web">Web Development</option>
                <option value="Design">Design</option>
                <option value="Video">Video Production</option>
                <option value="Other">Other</option>
              </select>
            </div>

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

            <button
              type="submit"
              className="submit-button"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
     

    </>
  )
}

export default ContactModal
