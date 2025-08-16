import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title-container">
      {subtitle && <h3 className="section-subtitle">{subtitle}</h3>}
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default SectionTitle;