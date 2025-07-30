import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) {
    return null; // Không render gì cả nếu không được mở hoặc không có sản phẩm
  }

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>×</button>
        <div className="modal-body">
          <img src={product.image} alt={product.name} className="modal-image" />
          <div className="modal-info">
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-price">{product.price}</p>
            <p className="modal-description">{product.description}</p>
            <div className="modal-ingredients">
              <h4>Ingredients:</h4>
              <ul>
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;