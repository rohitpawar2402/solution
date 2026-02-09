import React from 'react';
import './BusinessImpact.css';

// Importing the assets from the paths you provided
import optimizedCostsIcon from '../assets/12.png';
import resilienceIcon from '../assets/13.png';
import esgIcon from '../assets/14.png';
import performanceIcon from '../assets/15.png';

const BusinessImpact = () => {
  const impacts = [
    {
      title: "Optimized Costs",
      desc: "Lower waste and operating costs",
      icon: optimizedCostsIcon
    },
    {
      title: "Supply Chain Resilience",
      desc: "Stronger, more resilient supply chains",
      icon: resilienceIcon
    },
    {
      title: "ESG Compliance",
      desc: "Improved ESG & regulatory compliance",
      icon: esgIcon
    },
    {
      title: "Sustainability Performance",
      desc: "Enhanced environmental and sustainability impact",
      icon: performanceIcon
    }
  ];

  return (
    <div className="impact-page-wrapper">
      {/* Business Impact Grid Section */}
      <section className="impact-section">
        <h2 className="impact-main-title">Business Impact</h2>
        <div className="impact-grid">
          {impacts.map((item, index) => (
            <div key={index} className="impact-card">
              <div className="impact-icon-box">
                <img src={item.icon} alt={item.title} className="impact-img" />
              </div>
              <div className="impact-content">
                <h4 className="impact-card-title">{item.title}</h4>
                <p className="impact-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="cta-banner">
        <div className="cta-left">
          <h2 className="cta-heading">Build a Circular, Future-Ready Supply Chain</h2>
          <p className="cta-subtext">Partner with 24thmile to streamline your value chain, simplify global trade, and scale faster.</p>
        </div>
        <div className="cta-right">
          <button className="btn-filled">Get in Touch</button>
          <button className="btn-outline">Talk to Our Experts</button>
        </div>
      </section>
    </div>
  );
};

export default BusinessImpact;