// src/App.jsx

import React from 'react';

// Import các file CSS cần thiết
import './App.css'; 

// Import các component lớn từ các thư mục tương ứng
// Hãy kiểm tra lại đường dẫn cho chính xác với cấu trúc của bạn
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import ProductsSection from './sections/ProductsSection';
import MerchandiseSection from './sections/MerchandiseSection';
import OffersSection from './sections/OffersSection';
import GallerySection from './sections/GallerySection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import FaqSection from './sections/FaqSection';
import Footer from './components/Footer';

function App() {
  return (
    // Sử dụng Fragment <>...</> để bọc các component
    <>
      {/* Lắp ráp các component theo đúng thứ tự bạn muốn chúng xuất hiện trên trang */}
      
      <Header />
      
      <main>
        {/* Mỗi section sẽ là một phần của trang chính */}
        {/* Thẻ <section> đã được đặt bên trong từng component section rồi */}
        <HeroSection />
        <ProductsSection />
        <MerchandiseSection />
        <OffersSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
        <FaqSection />
      </main>

      <Footer />
    </>
  );
}

export default App;