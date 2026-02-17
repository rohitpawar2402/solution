
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { detailedServiceData } from '../data/detailedServices';

const AllServices = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="services-section" style={{ paddingTop: '40px' }}>
      <div className="container">
        <h2 className="section-title">All Business Setup & Statutory Registrations</h2>
        <p className="section-desc">Comprehensive list of services for your business needs</p>

        <div className="services-grid">
          {detailedServiceData.map((service, index) => (
            <div className="service-card" key={index}>
              <div 
                className="icon-box" 
                style={{ backgroundColor: service.bgColor, color: service.iconColor }}
              >
                {service.icon}
              </div>
              
              <h3 className="card-title">{service.title}</h3>
              <p className="card-desc">{service.desc}</p>
              
              <Link to={service.path || "#"} className="apply-now">
                Apply now <MdKeyboardDoubleArrowRight className="arrow-icon" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
