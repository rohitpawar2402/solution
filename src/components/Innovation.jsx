import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { 
  MdKeyboardDoubleArrowRight, 
  MdCurrencyExchange, 
  MdOutlinePolicy,
  MdOutlineInventory,
  MdOutlineLocalShipping 
} from "react-icons/md";
import { FaHandHoldingUsd, FaFileInvoiceDollar, FaTools, FaFileContract, FaRegistered } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";
// Ensure this filename matches your physical file in src/components/
import "./Innovation.css"; 

const Innovation = () => {
  const techServices = [
    {
      id: 1,
      title: "Export Incentives Advisory",
      desc: "Maximize benefits from government schemes",
      icon: <FaHandHoldingUsd />,
      bgColor: "#eef2ff", // Soft Blue
      iconColor: "#6366f1",
      slug: "export-incentives-advisory"
    },
    {
      id: 2,
      title: "RoDTEP Refund",
      desc: "Refund of Duties and Taxes on Exported Products",
      icon: <FaFileInvoiceDollar />,
      bgColor: "#fffbeb", // Soft Yellow
      iconColor: "#f59e0b",
      slug: "rodtep-refund"
    },
    {
      id: 3,
      title: "EPCG Scheme",
      desc: "Export Promotion Capital Goods scheme",
      icon: <FaTools />,
      bgColor: "#fff1eb", // Soft Orange
      iconColor: "#ff8a5c",
      slug: "epcg-scheme"
    },
    {
      id: 4,
      title: "Advance Authorisation",
      desc: "Duty-free import of inputs for export",
      icon: <FaFileContract />,
      bgColor: "#eef2ff", 
      iconColor: "#6366f1",
      slug: "advance-authorisation"
    },
    {
      id: 5,
      title: "Duty Drawback (DBK)",
      desc: "Refund of custom duties paid on inputs",
      icon: <RiGovernmentFill />,
      bgColor: "#fffbeb", 
      iconColor: "#f59e0b",
      slug: "duty-drawback-refund"
    },
    {
      id: 6,
      title: "Star Export House",
      desc: "Status certification for exporters",
      icon: <FaRegistered />,
      bgColor: "#fff1eb", 
      iconColor: "#ff8a5c",
      slug: "star-export-house"
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
              <Link to={`/service/${service.slug}`} className="apply-now-link">
                Apply now <MdKeyboardDoubleArrowRight className="arrow-icon" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="explore-btn-wrapper">
           <Link to="/services" className="btn-explore-blue">
             Explore all <FaArrowRight />
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Innovation;