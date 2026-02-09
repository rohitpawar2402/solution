import React from 'react';
import './Hero.css';
import { FaCheck } from 'react-icons/fa'; 
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <h1>Compliance Made<br/> <span className="blue-text">Simple & Secure</span></h1>
          <p>
            Streamline your business compliance with our all-in-one platform.
            Automated documentation, government certifications, and enterprise-level
            security—all in one place.
          </p>

          {/* Feature List */}
          <div className="hero-features">
            <div className="feature-item">
              <span className="check-icon"><FaCheck /></span>
              <span>Instant verification</span>
            </div>
            <div className="feature-item">
              <span className="check-icon"><FaCheck /></span>
              <span>100% Online and Paperless Process</span>
            </div>
            <div className="feature-item">
              <span className="check-icon"><FaCheck /></span>
              <span>Dedicated support team available 24/7 for enterprise-tier accounts.</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary-large">Explore Our Services</button>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="hero-form-wrapper">
          <div className="registration-card">
            <p className="form-category">Registration Service</p>
            
            <form className="hero-form">
              <div className="form-group">
                <label>Select Registration Service</label>
                <div className="select-wrapper">
                  <select defaultValue="">
                    <option value="" disabled>Select registration service</option>
                    <option value="gst">GST Registration</option>
                    <option value="pan">PAN Card Service</option>
                    <option value="iec">IEC Registration</option>
                  </select>
                  {/* Only this arrow icon will be visible now */}
                  <IoIosArrowDown className="select-arrow" />
                </div>
              </div>

              <div className="form-group">
                <label>PAN</label>
                <input type="text" placeholder="Enter your PAN number" />
              </div>

              <div className="form-group">
                <label>Country</label>
                <div className="select-wrapper">
                  <select defaultValue="">
                    <option value="" disabled>Select country</option>
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                  </select>
                  {/* Only this arrow icon will be visible now */}
                  <IoIosArrowDown className="select-arrow" />
                </div>
              </div>

              <button type="submit" className="btn-apply">Apply Now</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;