import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Fast Turnaround",
      description: "We prioritize your applications to ensure the quickest possible processing and delivery times.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '35px', height: '35px' }}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        </svg>
      )
    },
    {
      title: "Expert Consultation",
      description: "Our team of experienced professionals provides accurate guidance for all your registration needs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '35px', height: '35px' }}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: "Secure & Transparent",
      description: "We ensure complete data security and maintain transparency throughout the entire process.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '35px', height: '35px' }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <rect x="9" y="11" width="6" height="5" rx="1" />
        </svg>
      )
    }
  ];

  // Inline Styles object
  const styles = {
    section: { padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' },
    header: { marginBottom: '40px' },
    h1: { color: '#1e293b', fontSize: '2rem', marginBottom: '10px' },
    subtitle: { color: '#64748b', marginBottom: '40px' },
    grid: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
    card: { backgroundColor: '#f0f7ff', borderRadius: '15px', padding: '40px 20px', flex: '1', minWidth: '250px', textAlign: 'center' },
    iconCircle: { background: 'white', width: '70px', height: '70px', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', color: '#2563eb' },
    cardTitle: { color: '#1e293b', marginBottom: '12px', fontSize: '1.2rem' },
    cardText: { color: '#64748b', lineHeight: '1.5', fontSize: '0.95rem' }
  };

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h1 style={styles.h1}>Why Choose 24thmile ?</h1>
        <p style={styles.subtitle}>Comprehensive Solutions for Modern Business</p>
      </div>

      <div style={styles.grid}>
        {features.map((f, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.iconCircle}>{f.icon}</div>
            <h3 style={styles.cardTitle}>{f.title}</h3>
            <p style={styles.cardText}>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;