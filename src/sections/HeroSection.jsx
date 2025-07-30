import React from 'react';
import './HeroSection.css'; // Tạo file CSS riêng

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container container">
        <h1 className="hero-title">Where Smiles Are Served Daily</h1>
        <p className="hero-subtitle">
          Discover our passion for baking with the finest ingredients.
        </p>
        <a href="#products" className="button">Explore Our Menu</a>
      </div>
    </section>
  );
};

export default HeroSection;