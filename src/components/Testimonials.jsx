import React from 'react';

const Testimonials = () => {
  const data = [
    {
      quote: "Made compliance stress-free for our startup",
      body: "24thmile guided us through company registration and EXIM compliance without any confusion. The team explained everything clearly and handled all documentation on time. Highly recommended for startups entering global trade.",
      author: "Founder, Export Startup (Mumbai)"
    },
    {
      quote: "Professional, responsive, and reliable",
      body: "We struggled with export documentation earlier, but 24thmile simplified the entire process. Their quick responses and transparent approach really stood out.",
      author: "Operations Manager, Trading Firm"
    }
  ];

  const styles = {
    section: {
      padding: '80px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      backgroundColor: '#fff'
    },
    headerRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '60px',
      position: 'relative'
    },
    quoteWatermark: {
      position: 'absolute',
      left: '-30px',
      top: '-40px',
      fontSize: '120px',
      color: '#e0f2fe',
      fontWeight: 'bold',
      zIndex: 0,
      userSelect: 'none'
    },
    title: {
      fontSize: '42px',
      color: '#2d336b', // Deep navy blue
      fontWeight: '700',
      maxWidth: '400px',
      lineHeight: '1.2',
      margin: 0,
      zIndex: 1
    },
    navArrows: {
      display: 'flex',
      gap: '20px',
      paddingTop: '10px'
    },
    arrow: {
      fontSize: '24px',
      color: '#64748b',
      cursor: 'pointer',
      userSelect: 'none'
    },
    grid: {
      display: 'flex',
      gap: '0', // Gap is handled by borders and padding
      flexWrap: 'wrap'
    },
    card: {
      flex: '1',
      minWidth: '320px',
      padding: '0 40px 0 0',
      borderRight: '1px solid #e5e7eb',
      boxSizing: 'border-box'
    },
    lastCard: {
      borderRight: 'none',
      paddingLeft: '40px'
    },
    quoteText: {
      display: 'block',
      fontSize: '22px',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '25px',
      lineHeight: '1.4'
    },
    description: {
      fontSize: '16px',
      color: '#64748b',
      lineHeight: '1.8',
      marginBottom: '30px'
    },
    author: {
      fontSize: '15px',
      color: '#94a3b8',
      fontStyle: 'normal'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.headerRow}>
        <div style={styles.quoteWatermark}>“</div>
        <h2 style={styles.title}>What Our Customer are Saying</h2>
        
        <div style={styles.navArrows}>
          <span style={styles.arrow}>←</span>
          <span style={styles.arrow}>→</span>
        </div>
      </div>

      <div style={styles.grid}>
        {data.map((item, index) => (
          <div 
            key={index} 
            style={index === data.length - 1 ? {...styles.card, ...styles.lastCard} : styles.card}
          >
            <span style={styles.quoteText}>"{item.quote}"</span>
            <p style={styles.description}>{item.body}</p>
            <cite style={styles.author}>— {item.author}</cite>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;