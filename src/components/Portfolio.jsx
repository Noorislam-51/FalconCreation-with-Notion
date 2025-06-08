import React, { useState, useRef } from 'react';
import portfolioData from '../data/portfolioData';
import '../styles/components/portfolio.css';

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
          {filteredData
            .filter(item => item.mediaType === "image")
            .map(item => (
              <div
                key={item.id}
                className="portfolio-card"
                onClick={() => setModalData(item)}
              >
                <div className="media-wrapper banner-style">
                  <img src={item.media} alt={item.title} />
                  <p className="freelancer-overlay">By {item.freelancer}</p>
                </div>
              </div>
            ))}
        </div>

        <button className="slider-arrow right" onClick={scrollRight} aria-label="Scroll Right">&#10095;</button>
      </div>

      {modalData && (
        <div className="portfolio-modal" onClick={() => setModalData(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={() => setModalData(null)}>&times;</span>
            <h3>{modalData.title}</h3>
            <p><strong>Type:</strong> {modalData.type}</p>
            <p><strong>Subtype:</strong> {modalData.subtype}</p>
            <div className="modal-media">
              <img src={modalData.media} alt={modalData.title} />
            </div>
            <p className="freelancer-name">By {modalData.freelancer}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
