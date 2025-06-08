import React, { useState } from 'react';
import servicesData from '../data/servicesData';
import ServiceModal from './ServiceModal'; // renamed modal for service detail
import '../styles/components/services.css';
import '../styles/globals.css';
import ContactModal from './ContactModal';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openServiceModal = (service) => {
    document.body.style.overflow = 'hidden';
    setActiveService(service);
  };

  const closeServiceModal = () => {
    document.body.style.overflow = 'auto';
    setActiveService(null);
  };

  const openContactModal = () => {
    document.body.style.overflow = 'hidden';
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    document.body.style.overflow = 'auto';
    setIsContactModalOpen(false);
  };

  return (
    <section className="services-section" id="Services">
      <span className="label">Services</span>
      <h2 className="title">What We Offer</h2>
      <p className="subtitle">
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
            <button className="readmore-btn" onClick={() => openServiceModal(service)}>
              Read more <span>→</span>
            </button>
          </div>
        ))}
      </div>

      <button className="btn primary-btn service-btn " onClick={openContactModal}>Hire Us Today →</button>

      {/* Service Detail Modal */}
      {activeService && (
        <div className="modal-backdrop" onClick={closeServiceModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeServiceModal}>×</button>
            <ServiceModal service={activeService} onClose={closeServiceModal} />
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="modal-backdrop" onClick={closeContactModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeContactModal}>×</button>
            <ContactModal onClose={closeContactModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
