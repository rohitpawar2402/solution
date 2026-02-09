import React from 'react';
import { FaLeaf, FaRecycle, FaCloud, FaHandHoldingHeart } from "react-icons/fa";
import './Sustainability.css';

const Sustainability = () => {
  const cards = [
    { icon: <FaLeaf />, title: "Green Logistics", desc: "Electric fleet transition and renewable energy warehouses." },
    { icon: <FaRecycle />, title: "Circular Economy", desc: "Reverse logistics programs and waste reduction initiatives." },
    { icon: <FaCloud />, title: "Carbon Reduction", desc: "Carbon-neutral shipping options and emissions tracking." },
    { icon: <FaHandHoldingHeart />, title: "ESG Commitment", desc: "Comprehensive environmental, social, and governance frameworks." }
  ];

  return (
    <section className="sustainability-section">
      <div className="container">
        <h2 className="sus-heading">Sustainable Logistics for a Better Tomorrow</h2>
        <p className="sus-subheading">Committed to ESG principles and carbon-neutral operations</p>

        <div className="sus-grid">
          {cards.map((card, index) => (
            <div className="sus-card" key={index}>
              <div className="sus-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;