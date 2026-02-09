import React from 'react';
import './ESGCommitment.css';

// Importing assets using the paths you provided
import truckGlobeImg from '../assets/truck-globe.png';
import handsPlantImg from '../assets/hands-plant.png'; // Corrected the extension based on your input
import greenTruckImg from '../assets/green-truck.png';

const ESGCommitment = () => {
  return (
    <section className="esg-section">
      <div className="esg-container">
        {/* Left Side: Text Content */}
        <div className="esg-text-side">
          <h2 className="esg-title">ESG Commitment</h2>
          <p className="esg-description">
            At 24thmile, ESG is integral to how we operate and grow. 
            Our Environmental, Social, and Governance commitments guide 
            responsible decision-making across our supply chain, ensuring 
            long-term value for customers, partners, communities, and the environment.
          </p>
          <p className="esg-description">
            We embed sustainability, ethics, and transparency into every 
            aspect of our logistics operations delivering measurable impact 
            while supporting compliant, resilient, and future-ready supply chains.
          </p>
        </div>

        {/* Right Side: Image Grid */}
        <div className="esg-image-side">
          <div className="esg-main-image-wrapper">
            <img src={truckGlobeImg} alt="Logistics and Earth" className="esg-img-large" />
          </div>
          <div className="esg-secondary-images">
            <img src={handsPlantImg} alt="Nurturing Growth" className="esg-img-small" />
            <img src={greenTruckImg} alt="Sustainable Transport" className="esg-img-small" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGCommitment;