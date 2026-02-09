import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Leadership</li>
            <li>Press & Media</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Supply Chain</li>
            <li>Freight Forwarding</li>
            <li>Contract Logistics</li>
            <li>Technology Solutions</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Digital Solution</h4>
          <ul>
            <li>B2B Connect Platform</li>
            <li>e-Filing & Documentation</li>
            <li>EXIM Automation</li>
            <li>ERP Integration Solutions</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li>Contact Us</li>
            <li>Get a Quote</li>
            <li>Careers</li>
            <li>Locations</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2025 24thmile.com All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;