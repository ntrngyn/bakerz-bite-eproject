import React from 'react';
import './AboutSection.css';

// BƯỚC 1: IMPORT CÁC FILE ẢNH VÀO CÁC BIẾN
import aboutImage1 from '/images/abtUS/abtUSimg1.png';
import aboutImage2 from '/images/abtUS/abtUSimg2.png';


const AboutSection = () => {
  return (
    <div className="about-us-container">
      <section className="about-section text-center-layout">
        <h4 className="about-pre-title">Our Story</h4>
        <h2 className="about-main-title">About Bakerz Bite</h2>
        <p className="about-paragraph">
          Bakerz Bite's mission is to create moments of happiness through meticulously handcrafted baked goods. We understand that excellence comes from the smallest details, which is why we are committed to using only the freshest and finest ingredients. This commitment ensures every bite you take is a perfect blend of premium quality and unforgettable flavor.
        </p>
      </section>
      <section className="about-section two-column-layout">
        <div className="text-content">
          <h4 className="about-pre-title">Our Vision</h4>
          <h2 className="about-main-title">Community</h2>
          <p className="about-paragraph">
            Our vision extends beyond baking. We aspire to be the vibrant heart of the community, where every handcrafted pastry serves as a centerpiece for connection—a space where friendships are forged, smiles are shared, and the simple joy of great food brings people together.
          </p>
        </div>
        <div className="image-content">
          {/* BƯỚC 2: SỬ DỤNG BIẾN ĐÃ IMPORT */}
          <img 
            src={aboutImage1} 
            alt="A team of happy bakers working together with passion" 
          />
        </div>
      </section>
      <section className="about-section two-column-layout">
        <div className="image-content">
          {/* BƯỚC 2: SỬ DỤNG BIẾN ĐÃ IMPORT */}
          <img 
            src={aboutImage2} 
            alt="High-quality ingredients like real butter, cream, and unbleached flour" 
          />
        </div>
        <div className="text-content">
          <h4 className="about-pre-title">Our Commitment</h4>
          <h2 className="about-main-title">Crafted With The Finest Ingredients</h2>
          <p className="about-paragraph">
            We treat our customers like family, which means we only use ingredients we would proudly serve to our own. Our promise lies in using real butter, pure cream, and unbleached flour. This dedication to quality isn’t just a standard—it’s the foundation of the trust you place in us with every bite.
          </p>
        </div>
      </section>
      <section className="about-section text-center-layout">
        <h4 className="about-pre-title">Our Collection</h4>
        <h2 className="about-main-title">A World of Flavors Awaits</h2>
        <p className="about-paragraph">
          Innovation is at the heart of our craft. With a range of over 300 different baked goods, from artisan pastries to gourmet cakes, there’s always something new to discover at Bakerz Bite. We invite you to explore our creations and find your new favorite today.
        </p>
      </section>
    </div>
  );
};

export default AboutSection;