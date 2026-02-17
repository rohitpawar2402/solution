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
          <li><Link to="/knowledge">Knowledge </Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
        </ul>

        {/* BUTTON */}
        <button className="btn-primary" style={{width:'auto', padding: '10px 20px'}}>Get a quote</button>
      </div>
    </div>
  );
};

export default Navbar;