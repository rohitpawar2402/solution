import React from 'react';
import { 
  FaCar, FaStore, FaShoppingCart, FaHospital, 
  FaIndustry, FaMicrochip, FaBolt, FaArrowRight, FaGlobe 
} from 'react-icons/fa';
import { 
  MdKeyboardDoubleArrowRight, MdOutlineDirectionsBoat, 
  MdOutlineAirplanemodeActive, MdAssignment 
} from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi2";
import { FiMonitor } from "react-icons/fi";
import './Industries.css';

const Industries = () => {
  // Service data for the Import-Export section based on your provided images
  const importExportServices = [
    {
      id: 1,
      title: "Import/Export Code (IEC)",
      desc: "Get 10-digit IEC for import/export",
      icon: <MdOutlineAirplanemodeActive />,
      bgColor: "#fff1eb", // Soft Peach
      iconColor: "#ff8a5c"
    },
    {
      id: 2,
      title: "Export/Import Registration",
      desc: "RCMC & required trade registrations",
      icon: <MdOutlineDirectionsBoat />,
      bgColor: "#eef2ff", // Soft Blue
      iconColor: "#6366f1"
    },
    {
      id: 3,
      title: "RCMC Registration",
      desc: "Export promotion council registration",
      icon: <MdAssignment />,
      bgColor: "#fffbeb", // Soft Yellow
      iconColor: "#f59e0b"
    },
    {
      id: 4,
      title: "DGFT Services",
      desc: "DGFT-related services support",
      icon: <FaGlobe />,
      bgColor: "#fff1eb", 
      iconColor: "#ff8a5c"
    },
    {
      id: 5,
      title: "ICEGATE Registration",
      desc: "Online customs filing & clearance",
      icon: <HiOutlineIdentification />,
      bgColor: "#eef2ff", 
      iconColor: "#6366f1"
    },
    {
      id: 6,
      title: "TAN Registrations",
      desc: "TAN registration for TDS compliance",
      icon: <FiMonitor />,
      bgColor: "#fffbeb", 
      iconColor: "#f59e0b"
    }
  ];

  const industries = [
    { id: 1, icon: <FaCar />, name: "Automotive" },
    { id: 2, icon: <FaStore />, name: "Consumer & Retail" },
    { id: 3, icon: <FaShoppingCart />, name: "E-Commerce" },
    { id: 4, icon: <FaHospital />, name: "Healthcare" },
    { id: 5, icon: <FaIndustry />, name: "Industrial & Manufacturing" },
    { id: 6, icon: <FaMicrochip />, name: "Technology" },
    { id: 7, icon: <FaBolt />, name: "Energy & Utilities" },
  ];

  return (
    <section className="industries-section">
      <div className="container">
        {/* 1. Import-Export Onboarding Section */}
        <h1 className="section-heading">Import-Export Onboarding & Compliance</h1>
        <p className="section-desc">(foundation services-required to start and operate a business)</p>

        <div className="compliance-grid">
          {importExportServices.map((service) => (
            <div className="compliance-card" key={service.id}>
              <div 
                className="icon-box-squircle" 
                style={{ backgroundColor: service.bgColor, color: service.iconColor }}
              >
                {service.icon}
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-desc">{service.desc}</p>
              <a href="#" className="apply-now">
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

export default Industries;