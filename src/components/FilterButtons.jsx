// src/components/FilterButtons.jsx - DÙNG LẠI PHIÊN BẢN CÓ <Link>

import React from 'react';
import { Link } from 'react-router-dom';
import './FilterButtons.css';

const FilterButtons = ({ categories, activeCategory }) => {
  return (
    <div className="filter-buttons">
      {categories.map((category) => (
        <Link
          key={category}
          to={category === 'All' ? '/products' : `/products/${category.toLowerCase()}`} 
          className={`filter-button ${activeCategory === category ? 'active' : ''}`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default FilterButtons;