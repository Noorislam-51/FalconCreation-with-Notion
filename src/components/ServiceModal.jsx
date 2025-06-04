import React from 'react';
import '../styles/components/services.css'; // continue using same CSS

const Modal = ({ service, onClose }) => {
  
  
  if (!service) return null;

  const { title, intro, services, cta } = service.modal;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        {/* Icon */}
        <div className={`modal-icon-wrapper ${service.colorClass}`}>
          <i className={service.iconClass}></i>
        </div>

        {/* Heading */}
        <h2 className="modal-heading">{title}</h2>
        <p className="modal-intro">{intro}</p>

        {/* Sub-services */}
        <div className="modal-service-boxes">
          {services.map((item, index) => (
            <div className="modal-service-box" key={index}>
              <i className="fa-solid fa-check-circle check-icon"></i>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="modal-cta">{cta}</button>
      </div>
    </div>
  );
};

export default Modal;
