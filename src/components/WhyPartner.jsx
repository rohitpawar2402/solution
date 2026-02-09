import React from 'react';
import './WhyPartner.css';
import { FaPlay } from 'react-icons/fa';
// Import the local image from your assets folder
import aboutIllustration from '../assets/Aboutus.png'; 

const WhyPartner = () => {
  return (
    <section className="why-partner-section">
      <div className="container why-partner-container">
        
        <div className="why-partner-content">
          <div className="about-pill-wrapper">
            <span className="about-pill">About us</span>
          </div>
          
          <h2 className="why-partner-heading">
            Simplifying Business Setup & EXIM Compliance for Growing Startups
          </h2>
          
          <p className="why-partner-description">
            24thmile helps startups and growing businesses stay compliant from day one. 
            We simplify business setup, statutory registrations, and EXIM compliance. 
            From import–export onboarding to export documentation and certifications, 
            we handle it all—so you can focus on growth.
          </p>
          
          <div className="why-partner-actions">
            <button className="btn-explore">Explore</button>
            <button className="btn-get-started">
              <span className="play-icon-container">
                <FaPlay className="play-icon-small" />
              </span>
              Get Started
            </button>
          </div>
        </div>

        <div className="why-partner-image-wrapper">
          <img 
            src={aboutIllustration} 
            alt="24thmile Business Illustration" 
            className="about-illustration-img"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyPartner;