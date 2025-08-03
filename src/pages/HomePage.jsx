// /src/pages/HomePage.jsx

import React from 'react';

// Import TẤT CẢ các section bạn muốn hiển thị trên trang chủ
import HeroSection from '../sections/HeroSection';
import FeaturedCategories from '../sections/FeaturedCategories'; 
import FeaturedMerch from '../sections/FeaturedMerch';
import OffersSection from '../sections/OffersSection';
import GallerySection from '../sections/GallerySection';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import FaqSection from '../sections/FaqSection';

const HomePage = () => {
  return (
    <>
      {/* Lắp ráp tất cả các section lại với nhau */}
      <HeroSection />
      <FeaturedCategories />
      <FeaturedMerch />
      <OffersSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <FaqSection />
    </>
  );
};

export default HomePage;