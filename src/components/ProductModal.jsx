// /src/components/ProductModal.jsx

import React, { useState, useEffect } from 'react';
import QuantitySelector from './QuantitySelector';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose, variant }) => {
  // State để quản lý số lượng và trạng thái nút bấm
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Reset state mỗi khi modal mở ra với một sản phẩm mới
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setIsAdded(false);
    }
  }, [isOpen, product]);

  if (!isOpen || !product) {
    return null;
  }

  // Hàm xử lý khi nhấn nút "Add to Cart"
  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart.`);
    setIsAdded(true);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  // Tạo style inline cho ảnh nền
  const imageBackgroundStyle = {
    backgroundImage: `url(${product.image})`
  };

  // Thêm class 'variant' vào modal-content nếu có
  const modalContentClass = `modal-content ${variant || ''}`;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <button className="modal-close-button" onClick={onClose}>
        <i className="uil uil-times"></i> {/* Sử dụng icon cho nhất quán */}
      </button>
      
      <div className={modalContentClass} onClick={(e) => e.stopPropagation()}>
        {/* CỘT 1: HÌNH ẢNH NỀN */}
        <div className="modal-background-image" style={imageBackgroundStyle}></div>

        {/* CỘT 2: NỘI DUNG */}
        <div className="modal-foreground-content">
          {/* TIÊU ĐỀ & GIÁ */}
          <div>
            <h2 className="modal-title">{product.name}</h2>
            <span className="modal-price">{product.price}</span>
          </div>

          {/* VÙNG CÓ THỂ CUỘN */}
          <div className="modal-scrollable-content">
            <p className="modal-description">{product.description}</p>
            
            {/* Thành phần (Ingredients) */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="modal-ingredients">
                <h4>Ingredients</h4>
                <div className="modal-ingredients-list">
                  {product.ingredients.map((ingredient, index) => (
                    <span key={index} className="ingredient-tag">{ingredient}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* KHU VỰC HÀNH ĐỘNG (Nằm ở dưới cùng) */}
          <div className="modal-actions">
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <button 
              className={`button modal-cta-button ${isAdded ? 'added' : ''}`}
              onClick={handleAddToCart}
              disabled={isAdded}
            >
              {isAdded ? 'Added to Cart!' : `Add ${quantity} to Cart`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;