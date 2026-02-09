import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Import Link for routing
import { IoIosArrowDown } from "react-icons/io";
import { 
  FaCar, FaStore, FaShoppingCart, FaHospital, 
  FaIndustry, FaMicrochip, FaBolt 
} from 'react-icons/fa';

// Logo import
import logoImg from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="container navbar-container">
        
        {/* --- LOGO SECTION --- */}
        <div className="logo-section">
          {/* Logo also links to Home */}
          <Link to="/">
            <img 
              src={logoImg} 
              alt="24thmile Logo" 
              className="navbar-logo" 
            />
          </Link>
        </div>

        {/* MENU LINKS */}
        <ul className="nav-links">
          {/* Changed <a> to <Link> for internal routing */}
          <li><Link to="/">Home</Link></li>
          
          {/* --- SERVICES DROPDOWN --- */}
          <li className="dropdown-parent">
            <span>Services <IoIosArrowDown size={12}/></span>
            <div className="dropdown-menu services-menu">
              <div className="dropdown-row">
                <div className="dropdown-col">
                  <h4>Supply Chain Solutions</h4>
                  <ul>
                    <li>Courier & Express Delivery</li>
                    <li>Spare Parts Logistics</li>
                    <li>Technical Deployment</li>
                    <li>Maintenance Support</li>
                    <li>Repair & Refurbishment</li>
                  </ul>
                </div>
                <div className="dropdown-col">
                  <h4>Import & Export Documentation</h4>
                  <ul>
                    <li>Import & Export Documentation</li>
                    <li>Customs Clearance & Regulatory</li>
                    <li>Compliance</li>
                    <li>HS Classification & Duty Optimization</li>
                    <li>License, Certificate & Trade Compliance</li>
                    <li>Support</li>
                  </ul>
                </div>
                <div className="dropdown-col">
                  <h4>Global Freight Solutions</h4>
                  <ul>
                    <li>Consulting & Optimization</li>
                    <li>Strategic Sourcing</li>
                    <li>Manufacturing Support</li>
                    <li>Warehousing & Fulfillment</li>
                    <li>Packaging Solutions</li>
                    <li>Transportation Management</li>
                    <li>Reverse Logistics</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          
          {/* --- SECTOR DROPDOWN --- */}
          <li className="dropdown-parent">
            <span>Sector <IoIosArrowDown size={12}/></span>
            <div className="dropdown-menu sector-menu">
              <ul>
                <li><FaCar className="menu-icon"/> Automotive</li>
                <li><FaStore className="menu-icon"/> Consumer & Retail</li>
                <li><FaShoppingCart className="menu-icon"/> E-Commerce</li>
                <li><FaHospital className="menu-icon"/> Healthcare</li>
                <li><FaIndustry className="menu-icon"/> Industrial & Manufacturing</li>
                <li><FaMicrochip className="menu-icon"/> Technology</li>
                <li><FaBolt className="menu-icon"/> Energy & Utilities</li>
              </ul>
            </div>
          </li>
          
          {/* --- INNOVATION DROPDOWN --- */}
          <li className="dropdown-parent">
            <span>Innovation Technology <IoIosArrowDown size={12}/></span>
            <div className="dropdown-menu innovation-menu">
              <ul>
                <li><strong>B2B Connect</strong><p>Global Buyer-Seller Network</p></li>
                <li><strong>e-Filing</strong><p>Legal & Statutory Compliance</p></li>
                <li><strong>EXIM Automation</strong><p>Export-Import Processes</p></li>
                <li><strong>ERP Solutions</strong><p>Automated Business Operations</p></li>
                <li><strong>24thmile Technology</strong><p>Technology Support</p></li>
              </ul>
            </div>
          </li>
          
          {/* --- SUSTAINABILITY CHANGE APPLIED HERE --- */}
          <li><Link to="/sustainability">Sustainability</Link></li>
          
          <li><Link to="/about">About</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        {/* BUTTON */}
        <button className="btn-primary" style={{width:'auto', padding: '10px 20px'}}>Get ShipQuote</button>
      </div>
    </div>
  );
};

export default Navbar;