import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container container">
        <h1 className="hero-title">Where smiles are served daily</h1>
        <p className="hero-subtitle">
        Quality in every product, care in every service
        </p>
        <a href="#/products" className="button">Explore Our Menu</a>
      </div>
    </section>
  );
};

export default HeroSection;