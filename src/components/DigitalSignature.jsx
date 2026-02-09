import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DigitalSignature.css';
import { FaCheckCircle } from 'react-icons/fa';

const DigitalSignature = () => {
  const navigate = useNavigate();

  return (
    <section className="dsc-section">
      <div className="dsc-card">
        <h2 className="dsc-title">Digital Signature (DSC)</h2>

        {/* Radio Options */}
        <div className="dsc-options">
          <label className="radio-label">
            <input type="radio" name="dsc-type" /> ICEGATE (Individual Class III)
          </label>
          <label className="radio-label">
            <input type="radio" name="dsc-type" defaultChecked /> DGFT (Individual Class III)
          </label>
          <label className="radio-label">
            <input type="radio" name="dsc-type" /> DGFT Combo Organization Base
          </label>
          <label className="radio-label">
            <input type="radio" name="dsc-type" /> Tender Combo Organisation
          </label>
        </div>

        {/* Pricing Info */}
        <div className="dsc-pricing">
          <p className="price-text">Delivery Price: <span className="highlight-red">INR 500/- (+ GST)</span></p>
          <p className="note-text">*Note: Receipt fees (tentatively INR 2,500 per year) will be payable at actual after completing the video verification.</p>
          
          <p className="delivery-text">Delivery Period: <span className="highlight-red">Two to three Working Days</span></p>
          <p className="note-text">*All Documents should be in PDF Format with Clear Image Passport size Photo in JPG Only.</p>
        </div>

        <div className="dsc-content-grid">
          {/* Documents List */}
          <div className="dsc-docs">
            <h3>Required Documents</h3>
            <ul>
              <li><FaCheckCircle className="check-icon-blue" /> PAN Card of the Company/LLP</li>
              <li><FaCheckCircle className="check-icon-blue" /> Certificate of the Incorporation of the Company/LLP</li>
              <li><FaCheckCircle className="check-icon-blue" /> GST Registration Certificate (All 3 Pages)</li>
              <li><FaCheckCircle className="check-icon-blue" /> IEC Certificate of the Company/LLP</li>
              <li><FaCheckCircle className="check-icon-blue" /> Board Resolution</li>
              <li><FaCheckCircle className="check-icon-blue" /> Letter of Authorization & Identity</li>
            </ul>
          </div>

          {/* Description Box */}
          <div className="dsc-description-box">
            <h3>Brief Description about Service</h3>
            <p>
              Digital signature Certificate for Foreign Trade (DGFT) has now made it easy for the 
              Export and Import Organizations to make the best use of Digital Signature Certificate 
              for the authentication of the documents. Usage for DGFT ex. IEC Registration and Renewal, 
              claiming for Export Incentive.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="dsc-actions">
          <button className="btn-back" onClick={() => navigate(-1)}>Back</button>
          <button className="btn-payment">Payment</button>
        </div>
      </div>
    </section>
  );
};

export default DigitalSignature;