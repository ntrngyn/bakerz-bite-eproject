// /src/sections/FeaturedMerch.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import './FeaturedMerch.css'; // Sẽ tạo file CSS ở bước 3

const FeaturedMerch = () => {
  return (
    // Sử dụng màu nền khác để làm nổi bật khu vực này
    <section id="featured-merch" className="section section--bg-alt">
      <SectionTitle 
        title="Our Merchandise" 
        subtitle="Take a Piece of Bakerz Bite Home" 
      />
      <div className="featured-merch-container container">
        <Link to="/merchandise" className="featured-merch-card">
          <img 
            src="/images/categories/merchandise-featured.jpg" 
            alt="Bakerz Bite Merchandise" 
            className="featured-merch-card__image" 
          />
          <div className="featured-merch-card__overlay">
            <span className="featured-merch-card__text button">Shop Now</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedMerch;