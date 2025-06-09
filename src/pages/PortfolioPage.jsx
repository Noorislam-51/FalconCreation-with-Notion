import React, { useState } from 'react';
import portfolioData from '../data/portfolioData.js';
import servicesData from '../data/servicesData.js';
import '../styles/portfolioPage.css';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('graphic');
  const [activeSubCategory, setActiveSubCategory] = useState('');
  const [modalProject, setModalProject] = useState(null);  // State for popup modal

  const categories = {
    graphic: {
      name: servicesData.find(s => s.title === "Graphic Design")?.title || "Graphic Design",
      services: servicesData.find(s => s.title === "Graphic Design")?.modal.services || [],
      description: servicesData.find(s => s.title === "Graphic Design")?.description || "",
      iconClass: servicesData.find(s => s.title === "Graphic Design")?.iconClass || ""
    },
    video: {
      name: servicesData.find(s => s.title === "Video Editing")?.title || "Video Editing",
      services: servicesData.find(s => s.title === "Video Editing")?.modal.services || [],
      description: servicesData.find(s => s.title === "Video Editing")?.description || "",
      iconClass: servicesData.find(s => s.title === "Video Editing")?.iconClass || ""
    },
    webdev: {
      name: servicesData.find(s => s.title === "Web Development")?.title || "Web Development",
      services: servicesData.find(s => s.title === "Web Development")?.modal.services || [],
      description: servicesData.find(s => s.title === "Web Development")?.description || "",
      iconClass: servicesData.find(s => s.title === "Web Development")?.iconClass || ""
    }
  };

  const filteredData = portfolioData.filter(item => {
    let typeMatch = false;
    if (activeCategory === 'graphic') typeMatch = item.type === 'Graphic Design';
    else if (activeCategory === 'video') typeMatch = item.type === 'Video Editing';
    else if (activeCategory === 'webdev') typeMatch = item.type === 'Web Development';

    const subCategoryMatch = activeSubCategory ? item.subtype === activeSubCategory : true;

    return typeMatch && subCategoryMatch;
  });

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveSubCategory('');
    setModalProject(null);  // Close modal when switching category
  };

  const handleSubCategoryChange = (service) => {
    setActiveSubCategory(activeSubCategory === service ? '' : service);
    setModalProject(null);  // Close modal when changing subcategory
  };

  // Open modal on card click
  const openModal = (project) => {
    setModalProject(project);
  };

  // Close modal
  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <div className="portfolio-page-container">
      {/* ... Banner and navigation code remain same ... */}
      <div className="portfolio-page-container">
        {/* Banner Section */}
        <div className="portfolio-page-banner">
          <div className="portfolio-page-banner-content">
            <h1 className="portfolio-page-banner-title">My Portfolio</h1>
            <p className="portfolio-page-banner-subtitle">Showcasing Creative Excellence Across Design & Development</p>
          </div>
          <div className="portfolio-page-banner-overlay"></div>
        </div>



        {/* Navigation Menu */}
        <div className="portfolio-page-nav-container">
          <nav className="portfolio-page-category-nav">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                className={`portfolio-page-nav-btn ${activeCategory === key ? 'active' : ''}`}
                onClick={() => handleCategoryChange(key)}
              >
                <i className={category.iconClass}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Services Subsection */}
        <div className="portfolio-page-services-section">
          <div className="portfolio-page-container">
            <div className="portfolio-page-services-header">
              <h2 className="portfolio-page-services-title">{categories[activeCategory].name} Services</h2>
              <p className="portfolio-page-services-description">{categories[activeCategory].description}</p>
            </div>
            <div className="portfolio-page-services-grid">
              <div
                className={`portfolio-page-service-card ${activeSubCategory === '' ? 'active' : ''}`}
                onClick={() => handleSubCategoryChange('')}
              >
                <span className="portfolio-page-service-name">All {categories[activeCategory].name}</span>
              </div>
              {categories[activeCategory].services.map((service, index) => (
                <div
                  key={index}
                  className={`portfolio-page-service-card ${activeSubCategory === service ? 'active' : ''}`}
                  onClick={() => handleSubCategoryChange(service)}
                >
                  <span className="portfolio-page-service-name">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Gallery */}
        <div className="portfolio-page-portfolio-section">
          <div className="portfolio-page-container">
            <div className="portfolio-page-portfolio-header">
              <h2 className="portfolio-page-portfolio-title">
                Featured Work
                {activeSubCategory && (
                  <span className="portfolio-page-category-indicator"> - {activeSubCategory}</span>
                )}
              </h2>
              <p className="portfolio-page-portfolio-count">{filteredData.length} Projects</p>
            </div>

            <div className="portfolio-page-portfolio-grid">
              {filteredData.length > 0 ? (
                filteredData.map(item => (
                  <div
                    key={item.id}
                    className="portfolio-page-portfolio-item"
                    onClick={() => openModal(item)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="portfolio-page-portfolio-image">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300/f0f0f0/999?text=Portfolio+Image';
                        }}
                      />
                      <div className="portfolio-page-portfolio-overlay">
                        <div className="portfolio-page-portfolio-info">
                          <h3 className="portfolio-page-portfolio-item-title">{item.title}</h3>
                          <p className="portfolio-page-portfolio-subtype">{item.subtype}</p>
                          <p className="portfolio-page-portfolio-freelancer">by {item.freelancer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="portfolio-page-no-results">
                  <p>No projects found for the selected category.</p>
                  <button
                    className="portfolio-page-clear-filters"
                    onClick={() => setActiveSubCategory('')}
                  >
                    Show All {categories[activeCategory].name} Projects
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Popup */}
        {modalProject && (
          <div className="portfolio-modal" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <span className="close-button" onClick={closeModal}>&times;</span>
              <h3>{modalProject.title}</h3>
              <div className="modal-media">
                {modalProject.mediaType === "image" ? (
                  <img src={modalProject.media} alt={modalProject.title} />
                ) : modalProject.mediaType === "video" ? (
                  <video
                    src={modalProject.media}
                    controls
                    autoPlay
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                ) : null}
              </div>
              <p className="freelancer-name">By {modalProject.freelancer}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
