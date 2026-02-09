import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { LuSignature } from "react-icons/lu"; 
import { HiOutlineIdentification } from "react-icons/hi2";
import { AiOutlineFileText } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FiBriefcase, FiFileText, FiActivity } from "react-icons/fi"; // Added new icons
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const serviceData = [
    {
      title: "Digital Signature",
      desc: "Legally secure documents with Class 3 DSC.",
      icon: <LuSignature />,
      bgColor: "#fff1eb", 
      iconColor: "#ff8a5c",
      path: "/service/digital-signature"
    },
    {
      title: "PAN Registrations",
      desc: "Quick PAN for individuals & businesses",
      icon: <HiOutlineIdentification />,
      bgColor: "#eef2ff", 
      iconColor: "#6366f1",
      path: "/service/pan-registration"
    },
    {
      title: "TAN Registrations",
      desc: "TAN registration for TDS compliance",
      icon: <AiOutlineFileText />,
      bgColor: "#fffbeb", 
      iconColor: "#f59e0b",
      path: "/service/tan-registration"
    },
    {
      title: "Business Registration",
      desc: "Company, LLP & partnership registration",
      icon: <FiBriefcase />,
      bgColor: "#fff1eb", 
      iconColor: "#ff8a5c",
      path: "/service/business-registration"
    },
    {
      title: "GST Registration",
      desc: "GST registration for tax compliance",
      icon: <FiFileText />,
      bgColor: "#eef2ff", 
      iconColor: "#6366f1",
      path: "/service/gst-registration"
    },
    {
      title: "MSME Registration",
      desc: "MSME registration for government benefits",
      icon: <FiActivity />,
      bgColor: "#fffbeb", 
      iconColor: "#f59e0b",
      path: "/service/msme-registration"
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Business Setup & Statutory Registration</h2>
        <p className="section-desc">(foundation services-required to start and operate a business)</p>

        <div className="services-grid">
          {serviceData.map((service, index) => (
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

        {/* Explore All Button Section */}
        <div className="services-footer">
          <button className="explore-btn">
            Explore all <FaArrowRight className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;