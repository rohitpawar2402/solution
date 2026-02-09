import React from 'react';
import './ESG.css';

const ESG = () => {
  return (
    <section className="esg-section">
      <div className="esg-container">
        
        {/* Left Content Side */}
        <div className="esg-content">
          <h1 className="esg-title">ESG Commitment</h1>
          <div className="esg-description">
            <p>
              At 24thmile, ESG is integral to how we operate and grow. 
              Our Environmental, Social, and Governance commitments guide 
              responsible decision-making across our supply chain, ensuring 
              long-term value for customers, partners, communities, and the environment.
            </p>
            <p>
              We embed sustainability, ethics, and transparency into every aspect 
              of our logistics operations delivering measurable impact while 
              supporting compliant, resilient, and future-ready supply chains.
            </p>
          </div>
        </div>

        {/* Right Image Grid Side */}
        <div className="esg-grid">
          
          {/* Main Large Image & Sub-grid */}
          <div className="es-grid-main">
            <div className="image-wrapper main-card">
              <img src="/assets/truck-globe.jpg" alt="Sustainability Globe" />
            </div>
            
            {/* The small technical labels matching your screenshot */}
            <div className="esg-sub-info">
              <div className="thumb-stack">
                <img src="/assets/thumb1.jpg" alt="detail" />
                <img src="/assets/thumb2.jpg" alt="detail" />
              </div>
              <div className="label-box">
                <span>main-image</span>
                <span>top</span>
                <span className="mt-auto">bottom-image</span>
              </div>
            </div>
          </div>

          {/* Top Right Staggered Image */}
          <div className="image-wrapper top-right-card">
            <img src="/assets/hands-plant.jpg" alt="Growth" />
          </div>

          {/* Bottom Right Image */}
          <div className="image-wrapper bottom-right-card">
            <img src="/assets/leaf-truck.jpg" alt="Green Logistics" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ESG;