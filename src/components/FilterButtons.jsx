// src/components/FilterButtons.jsx

import React from 'react';
import './FilterButtons.css';

// Component này nhận vào categories, activeCategory, và hàm onFilterChange
const FilterButtons = ({ categories, activeCategory, onFilterChange }) => {
  return (
    <div className="filter-buttons">
      {/* Lặp qua tất cả categories được truyền vào */}
      {categories.map((category) => (
        // SỬ DỤNG THẺ <button>
        <button
          key={category}
          // Khi nhấn, gọi hàm onFilterChange từ component cha
          onClick={() => onFilterChange(category)}
          className={`filter-button ${activeCategory === category ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;