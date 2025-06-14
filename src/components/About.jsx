import React, { useState } from 'react';
import '../styles/components/about.css';

const About = () => {
  const [showServe, setShowServe] = useState(false);

  const toggleServeSection = () => {
    setShowServe((prev) => {
      const newState = !prev;
      setTimeout(() => {
        if (newState) {
          const section = document.getElementById('serve-section');
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // allow DOM render
      return newState;
    });
  };

  return (
    <div className="agency-container" id="About">
      <div className="agency-main">
        {/* Visual/Illustration Section */}
        <div className="agency-visuals">
          <img
            src="https://plus.unsplash.com/premium_vector-1682310918818-6e9a96a3ca2e?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Agency Visual"
          />
        </div>

        {/* Content Section */}
        <div className="agency-content">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="label">About Us</div>
          </div>


          <h1 className="agency-heading">
            More Than Just Services
            <span className="highlight-text"> — We Craft Digital Stories.</span>
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
            {/* Conditional Who We Serve */}
            {showServe && (
              <div className="who-we-serve small-view" id="serve-section">
                <h2 className="serve-heading">Whom We Serve</h2>
                <p className="serve-intro">
                  FalconCreation partners with a wide variety of clients across industries to help them grow in the digital space.
                </p>

                <div className="serve-cards">
                  <div className="serve-card">
                    <i className="fa-solid fa-rocket serve-icon"></i>
                    <h3 className="serve-title">Startups</h3>
                    <p className="serve-description">
                      We help ambitious startups launch faster with complete web, branding, and media solutions.
                    </p>
                  </div>

                  <div className="serve-card">
                    <i className="fa-solid fa-store serve-icon"></i>
                    <h3 className="serve-title">Small Businesses</h3>
                    <p className="serve-description">
                      From websites to promo videos, we boost local businesses' online visibility and appeal.
                    </p>
                  </div>

                  <div className="serve-card">
                    <i className="fa-solid fa-chalkboard-user serve-icon"></i>
                    <h3 className="serve-title">Educators & Trainers</h3>
                    <p className="serve-description">
                      We design platforms, edit tutorials, and craft visuals for coaches and online educators.
                    </p>
                  </div>

                  <div className="serve-card">
                    <i className="fa-solid fa-camera-retro serve-icon"></i>
                    <h3 className="serve-title">Content Creators</h3>
                    <p className="serve-description">
                      We provide thumbnails, channel branding, and video editing services for YouTubers & streamers.
                    </p>
                  </div>

                  <div className="serve-card">
                    <i className="fa-solid fa-bullhorn serve-icon"></i>
                    <h3 className="serve-title">Marketing Teams</h3>
                    <p className="serve-description">
                      We support agencies and in-house teams with creative design, edits, and landing pages.
                    </p>
                  </div>

                  <div className="serve-card">
                    <i className="fa-solid fa-hands-helping serve-icon"></i>
                    <h3 className="serve-title">Anyone Who Needs Us</h3>
                    <p className="serve-description">
                      Whether you’re an individual, a team, or an organization — if you need digital solutions, we’re here to serve you with dedication and creativity.
                    </p>
                  </div>
                </div>
              </div>

            )}
          </div>


          {/* Toggle Button */}
          <div className="cta-stats">
            <button className="btn primary-btn" onClick={toggleServeSection}>
              {showServe ? 'Show Less' : 'More About Us'}
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
