import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DigitalSignature.css'; // Reusing the same CSS
import { FaCheckCircle } from 'react-icons/fa';
import { serviceData } from '../data/serviceData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const service = serviceData[serviceId];

  // If service not found, show error or redirect (simplified here)
  if (!service) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Service Not Found</h2>
        <button className="btn-back" onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <section className="dsc-section">
      <div className="dsc-card">
        <h2 className="dsc-title">{service.title}</h2>

        {/* Radio Options */}
        {service.options && service.options.length > 0 && (
          <div className="dsc-options">
            {service.options.map((option, index) => (
              <label key={index} className="radio-label">
                <input type="radio" name="service-option" defaultChecked={index === 0} /> {option}
              </label>
            ))}
          </div>
        )}

        {/* Pricing Info */}
        <div className="dsc-pricing">
          <p className="price-text">Price: <span className="highlight-red">{service.price}</span></p>
          {service.priceNote && <p className="note-text">{service.priceNote}</p>}
          
          <p className="delivery-text">Delivery Period: <span className="highlight-red">{service.delivery}</span></p>
          {service.deliveryNote && <p className="note-text">{service.deliveryNote}</p>}
        </div>

        <div className="dsc-content-grid">
          {/* Documents List */}
          <div className="dsc-docs">
            <h3>Required Documents</h3>
            <ul>
              {service.documents && service.documents.map((doc, index) => (
                <li key={index}><FaCheckCircle className="check-icon-blue" /> {doc}</li>
              ))}
            </ul>
          </div>

          {/* Description Box */}
          <div className="dsc-description-box">
            <h3>Brief Description about Service</h3>
            <p>{service.description}</p>
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

export default ServiceDetail;
