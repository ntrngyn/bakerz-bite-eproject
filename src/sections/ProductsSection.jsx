import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import FilterButtons from '../components/FilterButtons';
import './ProductsSection.css';

// Import trực tiếp file JSON
import productsData from '../data/products.json';

const ProductsSection = ({ initialCategory }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'All');
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Không cần fetch nữa, dữ liệu đã có sẵn
    setProducts(productsData);
    const uniqueCategories = [...new Set(productsData.map(p => p.category))];
    setCategories(uniqueCategories);

    if (initialCategory) {
      const filtered = productsData.filter(p => p.category.toLowerCase() === initialCategory.toLowerCase());
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productsData);
    }
  }, [initialCategory]);

  // Hàm xử lý khi thay đổi bộ lọc
  const handleFilterChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(p => p.category === category);
      setFilteredProducts(filtered);
    }
  };

  // Hàm xử lý khi click vào một card sản phẩm
  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="section">
      <SectionTitle title="Our Products" subtitle="Freshly Baked Every Day" />
      <div className="products-container container">
        <FilterButtons
          categories={categories}
          activeCategory={activeCategory}
          onFilterChange={handleFilterChange}
        />
        <div className="products-grid grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onCardClick={handleCardClick} 
            />
          ))}
        </div>
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