
import React from 'react';
// Import hook useParams từ react-router-dom
import { useParams } from 'react-router-dom';
import ProductsSection from '../sections/ProductsSection';

const ProductsPage = () => {
  // Lấy giá trị 'category' từ URL, ví dụ: "cakes", "cookies"
  const { category } = useParams();

  return (
    <div className="page-container container">
      {/* Truyền category xuống cho ProductsSection */}
      <ProductsSection initialCategory={category} />
    </div>
  );
};

export default ProductsPage;