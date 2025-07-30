import React from 'react';
import './FilterButtons.css';

const FilterButtons = ({ categories, activeCategory, onFilterChange }) => {
  return (
    <div className="filter-buttons">
      <button 
        className={`filter-button ${activeCategory === 'All' ? 'active' : ''}`}
        onClick={() => onFilterChange('All')}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;