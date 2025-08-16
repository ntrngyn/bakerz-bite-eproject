// /src/components/ProductModal.jsx

import { Link } from 'react-router-dom'; // Đừng quên import Link!


import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose, variant }) => {
  if (!isOpen || !product) {
    return null;
  }

  // Tạo một style inline để đặt ảnh làm nền
  const imageBackgroundStyle = {
    backgroundImage: `url(${product.image})`
  };

  const modalContentClass = `modal-content ${variant || ''}`;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <button className="modal-close-button" onClick={onClose}>&times;</button>
      
      <div className={modalContentClass} onClick={(e) => e.stopPropagation()}>
        {/* Hình ảnh giờ sẽ là một phần của content, làm nền */}
        <div className="modal-background-image" style={imageBackgroundStyle}></div>

        {/* Nội dung sẽ nằm bên trên ảnh */}
        <div className="modal-foreground-content">
          <h2 className="modal-title">{product.name}</h2>
          <span className="modal-price">{product.price}</span>
          
          <div className="modal-scrollable-content">
            <p className="modal-description">{product.description}</p>
            <div className="modal-ingredients">
              <h4>Key Components:</h4>
              <div className="modal-ingredients-list">
                {product.ingredients.map((ingredient, index) => (
                  <span key={index} className="ingredient-tag">{ingredient}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-cta-container">
              <Link to="/under-construction" className="button modal-cta-button">
                  Add to Cart
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;