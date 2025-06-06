import React, { useState } from 'react';
import servicesData from '../data/servicesData';
import Modal from './ServiceModal';
import '../styles/components/services.css';

import '../styles/components/navbar.css'; // Ensure your CSS handles .navbar, .nav, .hamburger, etc.
import ContactModal from './ContactModal';

const Services = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      document.body.style.overflow = 'hidden'; // prevent scroll
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      document.body.style.overflow = 'auto';
      setIsModalOpen(false);
    };
  

  return (
   <section className="services-section"  id="Service">
  <span className="section-label">Services</span>
  <h2 className="services-title">Our trusted clients</h2>
  <p className="services-subtitle">
    Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services that exceed expectations.
  </p>

  <div className="services-grid">
    {servicesData.map((service, index) => (
      <div key={service.id} className={`service-card ${service.bgClass}`}>
        <div className="icon-wrapper">
          <i className={`${service.iconClass} ${service.colorClass}`}></i>
        </div>
        <p className="card-index">{`0${index + 1}`}</p>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <button className="readmore-btn" onClick={() => setActiveModal(service)}>
          Read more <span>→</span>
        </button>
      </div>
    ))}
  </div>

  <button className="hire-btn" onClick={openModal}>Hire Us Today →</button>

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
</section>

  );
};

export default Services;
