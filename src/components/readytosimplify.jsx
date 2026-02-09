import React from 'react';
import './ReadyToSimplify.css';
import { 
  MdOutlineAirplanemodeActive, 
  MdOutlineDirectionsBoat, 
  MdAssignment 
} from "react-icons/md"; 
import { HiOutlineIdentification } from "react-icons/hi2";
import { FiMonitor } from "react-icons/fi";
import { FaGlobe, FaArrowRight } from 'react-icons/fa';

const ReadyToSimplify = () => {
  // Preservation of specific service data
  const importExportServices = [
   
  ];

  return (
    <section className="ready-simplify-wrapper">
      <div className="container">
        {/* Service Grid Section */}
        <div className="services-grid">
          {importExportServices.map((service) => (
            <div className="service-card" key={service.id}>
              <div 
                className="icon-box-squircle" 
                style={{ backgroundColor: service.bgColor, color: service.iconColor }}
              >
                {service.icon}
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-desc">{service.desc}</p>
              <a href="#" className="apply-now">
                Apply now <span className="arrow-symbol">»</span>
              </a>
            </div>
          ))}
        </div>

        
      </div>

      {/* --- BLUE COMPLIANCE CTA BANNER --- */}
      <div className="compliance-cta-banner">
        <div className="container cta-flex">
          <div className="cta-text-content">
            <h2 className="cta-heading">Ready to Simplify Your Compliance?</h2>
            <p className="cta-subtext">
              Join thousands of businesses that trust ComplianceHub for their regulatory needs.
            </p>
          </div>
          <div className="cta-action">
            <button className="btn-contact-white">Contact us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToSimplify;