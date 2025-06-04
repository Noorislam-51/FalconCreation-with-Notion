import React, { useState } from 'react';
import servicesData from '../data/servicesData';
import Modal from './ServiceModal';
import '../styles/components/services.css';

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
   <section className="services-section">
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

  <button className="hire-btn">Hire Us Today →</button>

  <Modal service={activeModal} onClose={() => setActiveModal(null)} />
</section>

  );
};

export default Services;
