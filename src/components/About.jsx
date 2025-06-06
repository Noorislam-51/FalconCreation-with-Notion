import React from 'react';
import '../styles/components/About.css';

const About = () => {
  return (
    <div className="agency-container"  id="About">
      <div className="agency-main">

        {/* Visual/Illustration Section */}
        <div className="agency-visuals">
          <div className="decor-leaf leaf-top-left"></div>
          <div className="decor-leaf leaf-top-right"></div>
          <div className="decor-leaf leaf-bottom-left"></div>

          <div className="agency-illustration">
            <div className="illustration-base">
              <div className="illustration-head"></div>
              <div className="illustration-body"></div>
              <div className="service-basket">
                <div className="service-items"></div>
              </div>
            </div>

            <div className="experience-badge">
              <div className="experience-years">25</div>
              <div className="experience-label">YEARS OF SERVICE</div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="agency-content">
          <div className="section-label">About Us </div>

          <h1 className="agency-heading">
            More Than Just Services<span className="highlight-text"> — We Craft Digital Stories.</span>
          </h1>

          <p className="agency-description">
            FalconCreation is a digital agency based in Noida, passionate about delivering creative and effective digital solutions — from web development to graphic design and video editing. We bring your ideas to life with precision and style.
          </p>

          {/* Mission & Values */}
          <div className="mission-values">
            <h2 className="mission-title">Our Mission & Values</h2>

            <div className="values-list">
              <div className="value-card">
                <div className="value-icon">
                  <div className="icon-emoji">💡</div>
                </div>
                <div className="value-text">
                  <h3 className="value-name">Creativity</h3>
                  <p className="value-description">Innovative ideas tailored to your brand.</p>
                </div>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <div className="icon-emoji">⭐</div>
                </div>
                <div className="value-text">
                  <h3 className="value-name">Quality</h3>
                  <p className="value-description">Delivering polished, professional results every time.</p>
                </div>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <div className="icon-emoji">📈</div>
                </div>
                <div className="value-text">
                  <h3 className="value-name">Growth</h3>
                  <p className="value-description">Helping your business expand with digital success.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action & Stats */}
          <div className="cta-stats">
            <button className="btn-more-info">More About Us</button>

            <div className="stats-info">
              <div className="stats-icon">
                <div className="icon-emoji">👥</div>
              </div>
              <div className="stats-text">
                <div className="stats-number">1495+</div>
                <div className="stats-label">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
