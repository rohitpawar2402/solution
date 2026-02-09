import React from 'react';
import './CircularEconomy.css';

// Importing assets from the paths you provided
import reverseLogisticsIcon from '../assets/11.png';
import recyclingIcon from '../assets/22.png';
import packagingIcon from '../assets/33.png';
import sourcingIcon from '../assets/44.png';

const CircularEconomy = () => {
  const deliveryItems = [
    {
      title: "Reverse Logistics",
      desc: "Efficient returns, repairs, refurbishments, and redistribution.",
      icon: reverseLogisticsIcon
    },
    {
      title: "Recycling & Resource Recovery",
      desc: "Reduced landfill waste through material recovery and reuse.",
      icon: recyclingIcon
    },
    {
      title: "Sustainable Packaging",
      desc: "Reusable and recyclable packaging to minimise waste.",
      icon: packagingIcon
    },
    {
      title: "Responsible Sourcing & Distribution",
      desc: "Optimised networks that lower emissions and resource use.",
      icon: sourcingIcon
    }
  ];

  return (
    <section className="circular-section">
      <div className="circular-container">
        {/* Header Section */}
        <h2 className="circular-main-title">Circular Economy</h2>
        <p className="circular-intro">
          A circular economy reduces waste, extends product life cycles, and maximises resource efficiency. 
          At 24thmile, we help businesses move from linear supply chains to circular models that drive 
          sustainability, compliance, and long-term value.
        </p>

        {/* Sub-header */}
        <h3 className="circular-sub-title">What We Deliver</h3>

        {/* Delivery Grid */}
        <div className="delivery-grid">
          {deliveryItems.map((item, index) => (
            <div key={index} className="delivery-card">
              <div className="delivery-icon-container">
                <img src={item.icon} alt={item.title} className="delivery-icon" />
              </div>
              <h4 className="delivery-card-title">{item.title}</h4>
              <p className="delivery-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircularEconomy;