import React from 'react';
import './CarbonReduction.css';
import carbonBg from '../assets/16.png';

const CarbonReduction = () => {
  return (
    <section className="carbon-section">
      <div className="carbon-hero-container">
        {/* Background Image */}
        <img src={carbonBg} alt="Carbon Reduction" className="carbon-bg-image" />
        
        {/* Text placed directly on the right side */}
        <div className="carbon-text-overlay">
          <h2 className="carbon-title">Carbon Reduction in Logistics</h2>
          
          <p className="carbon-paragraph">
            Carbon reduction is a key priority for modern logistics and supply chains. 
            With rising fuel costs, stricter regulations, and increasing ESG expectations, 
            businesses must adopt smarter, low-emission logistics strategies to remain competitive.
          </p>

          <p className="carbon-paragraph">
            Logistics operations generate emissions through transportation, warehousing, 
            and documentation processes. Inefficient routes, underutilized vehicles, 
            and energy-intensive facilities increase both carbon footprint and operating costs. 
            Reducing emissions improves sustainability while driving operational efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarbonReduction;