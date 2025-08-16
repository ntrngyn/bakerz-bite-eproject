// src/components/FilterButtons.jsx

import React from 'react';
// 1. Import Link từ react-router-dom
import { Link } from 'react-router-dom';
import './FilterButtons.css';

// 2. Bỏ prop onFilterChange không còn dùng tới
const FilterButtons = ({ categories, activeCategory }) => {
  return (
    <div className="filter-buttons">
      {/* 3. Thay thế button "All" bằng Link */}
      <Link 
        to="/products" // Link đến trang sản phẩm chung
        className={`filter-button ${activeCategory === 'All' ? 'active' : ''}`}
      >
        All
      </Link>

      {/* 4. Thay thế các button category bằng Link */}
      {categories.map((category) => (
        <Link
          key={category}
          // URL sẽ có dạng /products/cakes, /products/cookies (chuyển thành chữ thường)
          to={`/products/${category.toLowerCase()}`} 
          className={`filter-button ${activeCategory === category ? 'active' : ''}`}
        >
          {/* Tên hiển thị vẫn giữ nguyên chữ hoa ban đầu */}
          {category}
        </Link>
      ))}
    </div>
  );
};

export default FilterButtons;