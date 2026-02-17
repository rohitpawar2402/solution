import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCar, FaStore, FaShoppingCart, FaHospital, 
  FaIndustry, FaMicrochip, FaBolt, FaArrowRight, FaGlobe 
} from 'react-icons/fa';
import { 
  MdKeyboardDoubleArrowRight, MdOutlineDirectionsBoat, 
  MdOutlineAirplanemodeActive, MdAssignment, MdImportExport 
} from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi2";
import { FiMonitor } from "react-icons/fi";
import { FaPlay, FaPassport, FaFileContract, FaRegistered } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import './Industries.css';

const Industries = () => {
  // Service data for the Import-Export section based on your provided images
  // Service data for the Import-Export section based on your provided images
  const importExportServices = [
    {
      id: 1,
      title: "First Step to Start Business",
      desc: "Initial guidance for new exporters/importers",
      icon: <FaPlay />,
      bgColor: "#eef2ff", // Soft Blue
      iconColor: "#6366f1",
      slug: "first-step-export-import"
    },
    {
      id: 2,
      title: "Basic Registration",
      desc: "Essential registrations to start business",
      icon: <FaPassport />,
      bgColor: "#fffbeb", // Soft Yellow
      iconColor: "#f59e0b",
      slug: "basic-export-import-registration"
    },
    {
      id: 3,
      title: "First Time Registration",
      desc: "Setup for first-time exporters/importers",
      icon: <MdImportExport />,
      bgColor: "#fff1eb", // Soft Peach
      iconColor: "#ff8a5c",
      slug: "first-time-export-import-registration"
    },
    {
      id: 4,
      title: "Letter of Undertaking (LUT)",
      desc: "LUT for export without payment of IGST",
      icon: <FaFileContract />,
      bgColor: "#eef2ff", 
      iconColor: "#6366f1",
      slug: "letter-of-undertaking"
    },
    {
      id: 5,
      title: "REX System",
      desc: "Registered Exporter System registration",
      icon: <FaRegistered />,
      bgColor: "#fffbeb", 
      iconColor: "#f59e0b",
      slug: "rex-registration"
    },
    {
      id: 6,
      title: "Certificate of Origin (CoO)",
      desc: "Proof of origin for exported goods",
      icon: <TbCertificate />,
      bgColor: "#fff1eb", 
      iconColor: "#ff8a5c",
      slug: "certificate-of-origin"
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
              <Link to={`/service/${service.slug}`} className="apply-now">
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

export default Industries;