// src/sections/ProductsSection.jsx - PHIÊN BẢN HOÀN CHỈNH

import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import FilterButtons from '../components/FilterButtons';
import Pagination from '../components/Pagination';
import './ProductsSection.css';
import productsData from '../data/products.json';
import { fixImagePath } from '../utils/pathUtils';

// Xử lý dữ liệu ảnh một lần duy nhất khi file này được import
const processedProductsData = productsData.map(product => ({
  ...product,
  image: fixImagePath(product.image)
}));

// Lấy danh sách categories ra ngoài để chỉ tính một lần
const allCategories = ['All', ...new Set(processedProductsData.map(p => p.category))];

const ProductsSection = ({ initialCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  // State cho modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [productsPerPage] = useState(12);

  // useEffect này chỉ chạy khi `initialCategory` từ URL thay đổi.
  // Nó có nhiệm vụ thiết lập bộ lọc ban đầu khi người dùng vào trang.
  useEffect(() => {
    let categoryToFilter = 'All';
    if (initialCategory) {
      // Tìm tên category gốc trong danh sách của chúng ta
      const foundCategory = allCategories.find(c => c.toLowerCase() === initialCategory.toLowerCase());
      if (foundCategory) {
        categoryToFilter = foundCategory;
      }
    }
    // Gọi hàm lọc chính để áp dụng bộ lọc ban đầu
    handleFilterChange(categoryToFilter);
  }, [initialCategory]);

  // Hàm "bộ não" xử lý việc lọc khi người dùng nhấn vào các nút filter
  const handleFilterChange = (category) => {
    setActiveCategory(category);
    
    if (category === 'All') {
      setFilteredProducts(processedProductsData);
    } else {
      const filtered = processedProductsData.filter(p => p.category === category);
      setFilteredProducts(filtered);
    }
    
    // Rất quan trọng: Luôn reset về trang 1 mỗi khi đổi bộ lọc
    setCurrentPage(1); 
  };
  
  // Hàm xử lý khi nhấn vào một card sản phẩm để mở modal
  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
        setSelectedProduct(null);
    }, 300); // Đợi animation kết thúc
  };

  // Hàm xử lý việc chuyển trang, chỉ cập nhật state
  const paginate = (pageNumber) => {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Logic tính toán sản phẩm cho trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <section id="products" className="section">
      <SectionTitle title="Our Products" subtitle="Freshly Baked Every Day" />
      <div className="products-container container">
        <FilterButtons
          categories={allCategories}
          activeCategory={activeCategory}
          onFilterChange={handleFilterChange} // Truyền hàm xử lý xuống
        />
        <div className="products-grid grid">
          {currentProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onCardClick={() => handleCardClick(product)} 
            />
          ))}
        </div>
        <Pagination 
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <ProductModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        product={selectedProduct} 
      />
    </section>
  );
};

export default ProductsSection;