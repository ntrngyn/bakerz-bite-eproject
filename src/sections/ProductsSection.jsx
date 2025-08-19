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
  // State `products` không còn cần thiết nữa vì ta đã có `processedProductsData`
  // const [products, setProducts] = useState(processedProductsData); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12); 

    // useEffect này chỉ chạy một lần để khởi tạo
  useEffect(() => {
    const uniqueCategories = ['All', ...new Set(processedProductsData.map(p => p.category))];
    setCategories(uniqueCategories);

    let categoryToFilter = 'All';
    if (initialCategory) {
      const foundCategory = uniqueCategories.find(c => c.toLowerCase() === initialCategory.toLowerCase());
      if (foundCategory) {
        categoryToFilter = foundCategory;
      }
    }
    handleFilterChange(categoryToFilter);
  }, [initialCategory]); // Chỉ phụ thuộc vào initialCategory từ route

  // =================================================================
  // === BƯỚC 1: TẠO HÀM ĐỂ XỬ LÝ VIỆC LỌC KHI NHẤN NÚT ===
  // =================================================================
  const handleFilterChange = (category) => {
    setActiveCategory(category);
    
    if (category === 'All') {
      setFilteredProducts(processedProductsData);
    } else {
      const filtered = processedProductsData.filter(p => p.category === category);
      setFilteredProducts(filtered);
    }
    
    // Quan trọng: Luôn reset về trang 1 mỗi khi đổi bộ lọc
    setCurrentPage(1); 
  };
  
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
          // =========================================================
          // === BƯỚC 2: TRUYỀN HÀM XUỐNG CHO COMPONENT CON ===
          // =========================================================
          onFilterChange={handleFilterChange}
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