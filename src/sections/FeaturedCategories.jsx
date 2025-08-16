import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { fixImagePath } from '../utils/pathUtils'; // <-- BƯỚC 1: IMPORT HÀM HELPER
import './FeaturedCategories.css';

const FeaturedCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Thay thế fetch bằng import() động để Vite xử lý
    import('../data/featuredCategories.json')
      .then(response => {
        // BƯỚC 2: XỬ LÝ DỮ LIỆU
        const updatedCategories = response.default.map(category => ({
          ...category,
          image: fixImagePath(category.image) // Sửa đường dẫn ảnh
        }));
        // BƯỚC 3: SET STATE VỚI DỮ LIỆU ĐÃ SỬA
        setCategories(updatedCategories);
      });
  }, []); 

  return (
    <section id="featured-collections" className="section">
      <SectionTitle title="Our Collections" subtitle="Explore By Category" />
      <div className="featured-container container grid">
        {/* Phần này không cần thay đổi */}
        {categories.map((category) => (
          <Link to={category.path} key={category.id} className="featured-card">
            <img src={category.image} alt={category.name} className="featured-card__image" />
            <div className="featured-card__overlay">
              <h3 className="featured-card__title">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;