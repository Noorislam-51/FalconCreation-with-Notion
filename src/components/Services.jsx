// src/components/Modal.jsx
import React from 'react';
import '../styles/components/Modal.css';  // You can create separate CSS for modal or keep in services.css

const Modal = ({ service, onClose }) => {
  if (!service) return null;

  const { title, intro, services, cta } = service.modal;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{title}</h2>
        <p className="modal-intro">{intro}</p>
        <ul className="modal-list">
          {services.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
        <button className="modal-cta">{cta}</button>
      </div>
    </div>
  );
};

export default Modal;
