// /src/components/QuantitySelector.jsx

import React from 'react';
import './QuantitySelector.css'; // Sẽ tạo ở bước 2

const QuantitySelector = ({ quantity, setQuantity }) => {
  const handleDecrement = () => {
    // Không cho giảm xuống dưới 1
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    // Có thể giới hạn số lượng tối đa nếu muốn, ví dụ: 99
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button type="button" className="quantity-button" onClick={handleDecrement}>-</button>
      <input 
        type="text" 
        className="quantity-input" 
        value={quantity} 
        readOnly // Chỉ cho phép thay đổi bằng nút +/-
      />
      <button type="button" className="quantity-button" onClick={handleIncrement}>+</button>
    </div>
  );
};

export default QuantitySelector;