import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import './FeaturedMerch.css';

// BƯỚC 1: IMPORT ẢNH VÀO MỘT BIẾN
import merchImage from '/images/categories/merchandise-featured.jpg';

const FeaturedMerch = () => {
  return (
    <section id="featured-merch" className="section section--bg-alt">
      <SectionTitle 
        title="Our Merchandise" 
        subtitle="Wear Your Favorite Bakery" 
      />
      <div className="featured-merch-container container">
        <Link to="/merchandise" className="featured-merch-card">
          {/* BƯỚC 2: SỬ DỤNG BIẾN ĐÃ IMPORT */}
          <img 
            src={merchImage} 
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