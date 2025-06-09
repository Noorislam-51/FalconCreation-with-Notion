import React, { useState, useRef } from 'react';
import portfolioData from '../data/portfolioData';
import '../styles/components/portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [category, setCategory] = useState("All");
  const [modalData, setModalData] = useState(null);
  const sliderRef = useRef(null);

  const categories = ["All", "Web Dev", "Video Editing", "Graphic Design"];

  const filteredData = category === "All"
    ? portfolioData
    : portfolioData.filter(item => item.type === category);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="portfolio-section" id="Portfolio">
      <span className="label">Portfolio</span>
      <h2 className="portfolio-heading">Featured Work</h2>
      <p className="portfolio-subheading">
        Creating meaningful, user-focused solutions that inspire, innovate, and exceed expectations.
      </p>

      <div className="portfolio-menu">
        {categories.map(cat => (
          <button
            key={cat}
            className={`menu-button ${category === cat ? 'active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="slider-container">
        <button className="slider-arrow left" onClick={scrollLeft} aria-label="Scroll Left">&#10094;</button>

        <div className="portfolio-slider" ref={sliderRef}>
          {filteredData.map(item => (
            <div
              key={item.id}
              className="portfolio-card"
              onClick={() => setModalData(item)}
            >
              <div className="media-wrapper banner-style" style={{ position: 'relative' }}>
                {item.mediaType === "image" ? (
                  <img src={item.media} alt={item.title} />
                ) : item.mediaType === "video" ? (
                  <>
                    <img
                      src={item.thumbnail || 'fallback-thumbnail.jpg'}
                      alt={`${item.title} thumbnail`}
                      style={{ cursor: 'pointer' }}
                    />
                    {/* Video play icon overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent dark circle
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '2.5rem',
                        boxShadow: '0 0 8px rgba(0, 0, 0, 0.7)',
                        userSelect: 'none',
                      }}
                      aria-hidden="true"
                    >
                      <i class="fa-solid fa-play"></i>
                    </div>
                  </>
                ) : null}
                <p className="freelancer-overlay">By {item.freelancer}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-arrow right" onClick={scrollRight} aria-label="Scroll Right">&#10095;</button>

      </div>
      {/* CTA Button */}
       <Link to="/portfolio" >
        <button className="btn primary-btn text-white">View More Projects</button>
      </Link>

      {modalData && (
        <div className="portfolio-modal" onClick={() => setModalData(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={() => setModalData(null)}>&times;</span>
            <h3>{modalData.title}</h3>
            {/* <p><strong>Type:</strong> {modalData.type}</p> */}
            {/* <p><strong>Subtype:</strong> {modalData.subtype}</p> */}
            <div className="modal-media">
              {modalData.mediaType === "image" ? (
                <img src={modalData.media} alt={modalData.title} />
              ) : modalData.mediaType === "video" ? (
                <video
                  src={modalData.media}
                  controls
                  autoPlay
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              ) : null}
            </div>
            <p className="freelancer-name">By {modalData.freelancer}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
