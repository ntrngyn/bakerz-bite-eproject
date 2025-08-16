import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import './FeaturedCategories.css';

const FeaturedCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/src/data/featuredCategories.json')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []); 

  return (
    <section id="featured-collections" className="section">
      <SectionTitle title="Our Collections" subtitle="Explore By Category" />
      <div className="featured-container container grid">
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