// /src/sections/FeaturedCategories.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Sử dụng Link để điều hướng
import SectionTitle from '../components/SectionTitle';
import './FeaturedCategories.css'; // Sẽ tạo file CSS ở bước 3

const categories = [
  {
    name: 'Cakes',
    image: '/images/categories/cake-featured.jpg',
    path: '/products/cakes'
  },
  {
    name: 'Cookies',
    image: '/images/categories/cookies-featured.jpg',
    path: '/products/cookies'
  },
  {
    name: 'Pastries',
    image: '/images/categories/pastries-featured.jpg',
    path: '/products/pastries'
  },
  {
    name: 'Pies',
    image: '/images/categories/pies-featured.jpg',
    path: '/products/pies'
  },
  {
    name: 'Coffee',
    image: '/images/categories/coffee-featured.jpg',
    path: '/products/coffee'
  }
];

const FeaturedCategories = () => {
  return (
    <section id="featured-categories" className="section">
      <SectionTitle title="Our Collections" subtitle="Explore By Category" />
      <div className="featured-container container grid">
        {categories.map((category) => (
          <Link to={category.path} key={category.name} className="featured-card">
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