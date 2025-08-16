// src/sections/ProductsSection.js

import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import FilterButtons from '../components/FilterButtons';
import Pagination from '../components/Pagination';
import './ProductsSection.css';
import productsData from '../data/products.json';
import { fixImagePath } from '../utils/pathUtils';

const processedProductsData = productsData.map(product => ({
  ...product,
  image: fixImagePath(product.image)
}));

const ProductsSection = ({ initialCategory }) => {
  const [products, setProducts] = useState(processedProductsData); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12); 

  useEffect(() => {
    const uniqueCategories = [...new Set(processedProductsData.map(p => p.category))];
    setCategories(uniqueCategories);
    
    if (initialCategory) {
      const originalCategory = uniqueCategories.find(c => c.toLowerCase() === initialCategory.toLowerCase());
      setActiveCategory(originalCategory || 'All');

      const filtered = processedProductsData.filter(p => p.category.toLowerCase() === initialCategory.toLowerCase());
      setFilteredProducts(filtered);
    } else {
      setActiveCategory('All');
      setFilteredProducts(processedProductsData);
    }
    
    setCurrentPage(1); 
  }, [initialCategory]);

  // --- Logic Modal (giữ nguyên) ---
  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // --- Logic Phân trang (giữ nguyên) ---
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="products" className="section">
      <SectionTitle title="Our Products" subtitle="Freshly Baked Every Day" />
      <div className="products-container container">
        <FilterButtons
          categories={categories}
          activeCategory={activeCategory}
          // 3. Xóa prop onFilterChange
        />
        <div className="products-grid grid">
          {currentProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onCardClick={handleCardClick} 
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