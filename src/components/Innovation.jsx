import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { 
  MdKeyboardDoubleArrowRight, 
  MdOutlineSecurity, 
  MdOutlineGridView, 
  MdOutlineStars,
  MdLanguage,
  MdOutlineBadge,
  MdOutlineLaptopMac 
} from "react-icons/md";
// Ensure this filename matches your physical file in src/components/
import "./Innovation.css"; 

const Innovation = () => {
  const techServices = [
    {
      id: 1,
      title: "AEO Certification",
      desc: "Trusted trader status with customs benefits.",
      icon: <MdOutlineSecurity />,
      bgColor: "#fff1eb", // Soft Orange
      iconColor: "#ff8a5c"
    },
    {
      id: 2,
      title: "Trade Portal Subscription",
      desc: "Annual access to export-import compliance portals.",
      icon: <MdOutlineGridView />,
      bgColor: "#eef2ff", // Soft Blue
      iconColor: "#6366f1"
    },
    {
      id: 3,
      title: "Star Export House",
      desc: "Recognition for high-performing exporters.",
      icon: <MdOutlineStars />,
      bgColor: "#fffbeb", // Soft Yellow
      iconColor: "#f59e0b"
    },
    {
      id: 4,
      title: "EXIM Process Outsourcing",
      desc: "Complete export-import operations managed for you.",
      icon: <MdLanguage />,
      bgColor: "#fff1eb", 
      iconColor: "#ff8a5c"
    },
    {
      id: 5,
      title: "Foreign Exchange Management",
      desc: "Compliant foreign exchange and RBI regulations support.",
      icon: <MdOutlineBadge />,
      bgColor: "#eef2ff", 
      iconColor: "#6366f1"
    },
    {
      id: 6,
      title: "Logistics & Clearance",
      desc: "End-to-end freight and customs handling.",
      icon: <MdOutlineLaptopMac />,
      bgColor: "#fffbeb", 
      iconColor: "#f59e0b"
    }
  ];

  return (
    <section className="innovation-grid-section">
      <div className="container">
        <h2 className="section-title">Export-Import (EXIM) Compliance & Trade Services</h2>
        <p className="section-subtitle">(End-to-end regulatory compliance and global trade support)</p>

        <div className="tech-grid-layout">
          {techServices.map((service) => (
            <div className="tech-card" key={service.id}>
              <div 
                className="icon-box-squircle" 
                style={{ backgroundColor: service.bgColor, color: service.iconColor }}
              >
                {service.icon}
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-desc">{service.desc}</p>
              <a href="#" className="apply-now-link">
                Apply now <MdKeyboardDoubleArrowRight className="arrow-icon" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="explore-btn-wrapper">
           <button className="btn-explore-blue">
             Explore all <FaArrowRight />
           </button>
        </div>
      </div>
    </section>
  );
};

export default Innovation;