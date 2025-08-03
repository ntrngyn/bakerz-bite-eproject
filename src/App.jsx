// /src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import các component dùng chung
import Header from './components/Header';
import Footer from './components/Footer';

// Import các trang (pages)
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import MerchandisePage from './pages/MerchandisePage'; 
import GalleryPage from './pages/GalleryPage';       
import OffersPage from './pages/OffersPage';        
import AboutPage from './pages/AboutPage';           
import ContactPage from './pages/ContactPage';       

import './App.css';

function App() {
  return (
    <>
      <Header /> {/* Header và Footer sẽ xuất hiện trên mọi trang */}
      
      <main>
        {/* Routes sẽ quản lý việc render các trang */}
        <Routes>
          {/* Định nghĩa các Route cho từng trang */}
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/merchandise" element={<MerchandisePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Route động này sẽ khớp với "/products/cakes", "/products/cookies", v.v. */}
          <Route path="/products/:category" element={<ProductsPage />} />

          {/* (Tùy chọn) Route cho trang 404 Not Found */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;