import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DigitalSignature.css'; // Reusing the same CSS
import { FaCheckCircle } from 'react-icons/fa';
import { serviceData } from '../data/serviceData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const service = serviceData[serviceId];
  
  const [selectedOption, setSelectedOption] = React.useState(null);

  React.useEffect(() => {
    if (service && service.options && service.options.length > 0) {
      setSelectedOption(service.options[0]);
    }
  }, [service]);

  // If service not found, show error or redirect (simplified here)
  if (!service) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Service Not Found</h2>
        <button className="btn-back" onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  // Determine which data to display based on selected option
  const baseData = (service.variants && selectedOption && service.variants[selectedOption]) 
    ? { ...service, ...service.variants[selectedOption] } 
    : service;

  const [selectedChecklist, setSelectedChecklist] = React.useState([]);

  // Clear checklist selection when variant changes
  React.useEffect(() => {
    setSelectedChecklist([]);
  }, [selectedOption]);

  const handleChecklistChange = (index) => {
    setSelectedChecklist(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  // Determine which data to display based on selected option
  const currentData = baseData;

  return (
    <section className="dsc-section">
      <div className="dsc-card">
        <h2 className="dsc-title">{service.title}</h2>

        {/* Radio Options */}
        {service.options && service.options.length > 0 && (
          <div className="dsc-options">
            {service.options.map((option, index) => (
              <label key={index} className="radio-label">
                <input 
                  type="radio" 
                  name="service-option" 
                  checked={selectedOption === option} 
                  onChange={() => setSelectedOption(option)}
                /> {option}
              </label>
            ))}
          </div>
        )}

        {/* Checklist for Variants */}
        {currentData.checklist && (
          <div className="dsc-checklist" style={{ margin: '20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', alignItems: 'start' }}>
            {currentData.checklist.map((item, idx) => {
              const isSelected = selectedChecklist.includes(idx);
              const label = item.label || item;
              
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ display: 'flex', alignItems: 'start', gap: '10px', fontSize: '14px', color: '#1a365d', cursor: 'pointer', lineHeight: '1.4' }}>
                    <input 
                      type="checkbox" 
                      checked={isSelected}
                      onChange={() => handleChecklistChange(idx)}
                      style={{ width: '16px', height: '16px', marginTop: '3px', cursor: 'pointer' }} 
                    />
                    {item.link ? (
                      <span 
                        onClick={(e) => { e.stopPropagation(); navigate(item.link); }} 
                        style={{ textDecoration: 'underline', color: '#0066cc', cursor: 'pointer' }}
                      >
                        {label}
                      </span>
                    ) : (
                      <span>{label}</span>
                    )}
                  </label>
                  
                  {isSelected && (item.price || item.documents || item.briefDescription) && (
                    <div style={{ marginTop: '10px', marginLeft: '26px', padding: '15px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                       {item.price && (
                         <p style={{ fontSize: '14px', marginBottom: '10px', fontFamily: 'sans-serif' }}>
                           <span style={{ color: '#008080', fontWeight: 'bold' }}>Charges :</span>{' '}
                           <span style={{ fontWeight: 'bold' }}>
                            {item.price.split('INR').length > 1 ? (
                              <>INR <span style={{color: 'red'}}>{item.price.split('INR')[1].split('/-')[0]}</span> /-{item.price.split('/-')[1]}</>
                            ) : item.price}
                           </span>
                         </p>
                       )}
                       {item.briefDescription && (
                         <div style={{ marginBottom: '10px' }}>
                           <h5 style={{ fontSize: '14px', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>Brief Description about Service :</h5>
                           <p style={{ fontSize: '13px', color: '#333', margin: 0 }}>{item.briefDescription}</p>
                         </div>
                       )}
                       {item.documents && (
                         <div>
                           <h5 style={{ fontSize: '14px', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>Required Documents :</h5>
                           <ol style={{ paddingLeft: '20px', margin: 0, fontSize: '13px', color: '#333' }}>
                             {item.documents.map((doc, i) => (
                               <li key={i} style={{ marginBottom: '4px' }}>{doc}</li>
                             ))}
                           </ol>
                         </div>
                       )}
                       {item.notes && (
                         <div style={{ marginTop: '15px' }}>
                           <h5 style={{ fontSize: '14px', fontWeight: 'bold', color: '#000', marginBottom: '8px' }}>Important Notes :</h5>
                           <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '13px', color: '#333' }}>
                             {item.notes.map((note, n) => (
                               <li key={n} style={{ marginBottom: '4px' }}>{note}</li>
                             ))}
                           </ul>
                         </div>
                       )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}



        {/* Pricing Info */}
        <div className="dsc-pricing">
          {currentData.price && (
            <div>
              <p className="price-text">Price: <span className="highlight-red">
                {currentData.price.includes('(+ GST)') ? (
                  <>
                    {currentData.price.split('(+ GST)')[0]}
                    <span style={{ color: 'black' }}>(+ GST)</span>
                    {currentData.price.split('(+ GST)')[1]}
                  </>
                ) : currentData.price}
              </span></p>
              {currentData.priceNote && <p className="note-text">{currentData.priceNote}</p>}
            </div>
          )}
          
          {currentData.delivery && (
            <div style={{ marginTop: currentData.price ? '10px' : '0' }}>
              <p className="delivery-text">Delivery Period: <span className="highlight-black">{currentData.delivery}</span></p>
              {currentData.deliveryNote && <p className="note-text">{currentData.deliveryNote}</p>}
            </div>
          )}
        </div>

        <div className="dsc-content-grid">
          {/* Documents List */}
          <div className="dsc-docs">
            {currentData.documents && currentData.documents.length > 0 && (
              <>
            {currentData.documents && currentData.documents.length > 0 && (
              <>
                <h3>Required Documents</h3>
                <ul>
                  {currentData.documents.map((doc, index) => (
                    <li key={index}><FaCheckCircle className="check-icon-blue" /> {doc}</li>
                  ))}
                </ul>
              </>
            )}
              </>
            )}

            {/* Output Documents - New Section */}
            {currentData.outputDocuments && currentData.outputDocuments.length > 0 && (
              <div style={{ marginTop: '30px' }}>
                <h3>Output Documents</h3>
                <ul>
                  {currentData.outputDocuments.map((doc, index) => (
                    <li key={index}><FaCheckCircle className="check-icon-blue" /> {doc}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sub-sections (e.g. Company Details) */}
            {currentData.subSections && currentData.subSections.map((section, idx) => (
              <div key={idx} style={{ marginTop: '30px' }}>
                <h4 style={{ fontSize: '18px', color: '#1a365d', marginBottom: '15px' }}>{section.title}</h4>
                <ul>
                  {section.items && section.items.map((item, i) => (
                    <li key={i}><FaCheckCircle className="check-icon-blue" /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Description Box */}
          {currentData.description && (
            <div className="dsc-description-box">
              <h3>Brief Description about Service</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{currentData.description}</p>
            </div>
          )}
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
