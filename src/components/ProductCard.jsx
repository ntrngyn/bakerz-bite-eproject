import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onCardClick }) => {
  // Destructuring props để dễ sử dụng
  const { name, price, image } = product;

  return (
    <div className="product-card" onClick={() => onCardClick(product)}>
      <div className="product-card__image-container">
        <img src={image} alt={name} className="product-card__image" />
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">{price}</p>
        <button className="button product-card__button">View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;