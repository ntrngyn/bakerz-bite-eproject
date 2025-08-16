
import React from 'react';

import HeroSection from '../sections/HeroSection';
import FeaturedCategories from '../sections/FeaturedCategories'; 
import FeaturedMerch from '../sections/FeaturedMerch';
import GalleryHighlight from '../sections/HomeGalleryHighlight';
import HomeSpecialOffer from '../sections/HomeSpecialOffer';
import HomeAboutUs from '../sections/HomeAboutUs';
import HomeContactUs from '../sections/HomeContactUs';
import HomeFAQ from '../sections/HomeFAQ';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedMerch />
      <HomeSpecialOffer />
      <GalleryHighlight />
      <HomeAboutUs />
      <HomeContactUs />
      <HomeFAQ />
    </>
  );
};

export default HomePage;