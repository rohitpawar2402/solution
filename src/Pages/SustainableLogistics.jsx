import React from 'react';
import './Sustainability.css';
import projectImg from '../assets/New Project (30) 1.png';
import CircularEconomy from './CircularEconomy';
import BusinessImpact from './BusinessImpact';
import CarbonReduction from './CarbonReduction';
import ESGCommitment from './ESGCommitment';

// Importing the feature icons using the paths you provided
import costImg from '../assets/1.png';
import resilienceImg from '../assets/2.png';
import complianceImg from '../assets/3.png';
import performanceImg from '../assets/4.png';

const SustainableLogistics = () => {
  return (
    <div className="image-container">
      {/* Hero Section */}
      <div className="hero-wrapper">
        <img 
          src={projectImg} 
          alt="Sustainable Logistics Project" 
          className="custom-image" 
        />
        <div className="hero-overlay-text">
          <h1 className="hero-heading">
            <span className="text-green">Sustainable Logistics</span>
            <br />
            <span className="text-light-dark">for a </span> 
            <span className="text-dark">Better Tomorrow</span>
          </h1>
          <p className="hero-subtext">
            Empowering global supply chains with intelligent, eco-conscious solutions. 
            We combine cutting-edge technology with environmental responsibility to 
            deliver efficiency without compromise.
          </p>
        </div>
      </div>

      {/* Feature Blocks Section */}
      <div className="feature-blocks-container">
        <div className="feature-block">
          <img src={costImg} alt="Lower Carbon Emissions" className="feature-icon" />
          <h3 className="feature-title">Lower Carbon Emissions</h3>
          <p className="feature-info">Efficient, eco-friendly transport</p>
        </div>

        <div className="feature-block">
          <img src={resilienceImg} alt="Smart Route Planning" className="feature-icon" />
          <h3 className="feature-title">Smart Route Planning</h3>
          <p className="feature-info">Optimized, green logistics</p>
        </div>

        <div className="feature-block">
          <img src={complianceImg} alt="Paperless Process" className="feature-icon" />
          <h3 className="feature-title">Paperless Process</h3>
          <p className="feature-info">Digital and sustainable Operations</p>
        </div>

        <div className="feature-block no-border">
          <img src={performanceImg} alt="Eco-Friendly Packaging" className="feature-icon" />
          <h3 className="feature-title">Eco-Friendly Packaging</h3>
          <p className="feature-info">Reusable, reduced waste</p>
        </div>
      </div>
      {/* Circular Economy Section */}
      <CircularEconomy />
      {/* Business Impact Section */}
      <BusinessImpact />
      {/* Carbon Reduction Section */}
      <CarbonReduction />
      {/* ESG Commitment Section */}
      <ESGCommitment />
    </div>
  );
};


export default SustainableLogistics;