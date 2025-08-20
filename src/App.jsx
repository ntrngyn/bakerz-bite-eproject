
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import MerchandisePage from './pages/MerchandisePage'; 
import GalleryPage from './pages/GalleryPage';       
import OffersPage from './pages/OffersPage';        
import AboutPage from './pages/AboutPage';           
import ContactPage from './pages/ContactPage';
import FaqSitemapPage from './pages/FAQSitemapPage';  
import UnderConstruction from './pages/UnderConstruction';


import './App.css';

function App() {
  return (
    <>
      <Header />
      <ScrollToTop /> 

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/merchandise" element={<MerchandisePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq-sitemap" element={<FaqSitemapPage />} />
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;