import React from 'react';

const Stats = () => {
  return (
    <div style={{ backgroundColor: '#F4F4F4', padding: '50px 0' }}>
      <div className="container" style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    textAlign: 'center',
    flexWrap: 'wrap', // <-- YE ADD KARNA HAI
    gap: '20px'       // <-- YE ADD KARNA HAI
}}>
        
        <div>
          <h2 style={{ color: '#007bff', fontSize: '40px', fontWeight: 'bold' }}>25+</h2>
          <p style={{ color: '#555' }}>Years of Experience</p>
        </div>

        <div style={{ borderLeft: '1px solid #ccc' }}></div> {/* Divider Line */}

        <div>
          <h2 style={{ color: '#003366', fontSize: '40px', fontWeight: 'bold' }}>2k+</h2>
          <p style={{ color: '#555' }}>Shipments/Year</p>
        </div>

        <div style={{ borderLeft: '1px solid #ccc' }}></div>

        <div>
          <h2 style={{ color: '#003366', fontSize: '40px', fontWeight: 'bold' }}>99.9%</h2>
          <p style={{ color: '#555' }}>On-Time Rate</p>
        </div>

        <div style={{ borderLeft: '1px solid #ccc' }}></div>

        <div>
          <h2 style={{ color: '#003366', fontSize: '40px', fontWeight: 'bold' }}>20+</h2>
          <p style={{ color: '#555' }}>Enterprise Clients</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;