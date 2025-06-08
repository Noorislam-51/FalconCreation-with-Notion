import React from 'react';
import '../styles/components/About.css';

const About = () => {
  return (
    <div className="agency-container"  id="About">
      <div className="agency-main">

        {/* Visual/Illustration Section */}
        <div className="agency-visuals">
         <img src='https://plus.unsplash.com/premium_vector-1682310918818-6e9a96a3ca2e?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        </div>

        {/* Content Section */}
        <div className="agency-content">
          <div className="label">About Us </div>

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
            <button className="btn primary-btn" >More About Us</button>

           
          
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
