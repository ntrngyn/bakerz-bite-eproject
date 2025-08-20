import React, { useState, useEffect, useCallback } from 'react';
import './OfferSection.css';
import offersData from '../data/offers.json';
import { fixImagePath } from '../utils/pathUtils'; // <-- BƯỚC 1: IMPORT HÀM HELPER
import SectionTitle from '../components/SectionTitle'; 

const OfferSection = () => {
  // BƯỚC 2: TẠO STATE MỚI ĐỂ LƯU DỮ LIỆU ĐÃ XỬ LÝ
  const [processedOffers, setProcessedOffers] = useState([]);
  
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [isModalMounted, setIsModalMounted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // BƯỚC 3: DÙNG useEffect ĐỂ XỬ LÝ DỮ LIỆU MỘT LẦN KHI COMPONENT MOUNT
  useEffect(() => {
    const updatedOffers = offersData.map(offer => ({
      ...offer,
      image: fixImagePath(offer.image),
      details: {
        ...offer.details,
        features: offer.details.features.map(feature => ({
          ...feature,
          image: fixImagePath(feature.image)
        }))
      }
    }));
    setProcessedOffers(updatedOffers);
  }, []); // Mảng rỗng đảm bảo useEffect chỉ chạy 1 lần

  // BƯỚC 4: SỬA LẠI COMPONENT ĐỂ DÙNG `processedOffers` THAY VÌ `offersData`

  const goToPrevious = () => {
    // Dùng processedOffers.length
    const isFirstSlide = currentOfferIndex === 0;
    const newIndex = isFirstSlide ? processedOffers.length - 1 : currentOfferIndex - 1;
    setCurrentOfferIndex(newIndex);
  };

  const goToNext = () => {
    // Dùng processedOffers.length
    const isLastSlide = currentOfferIndex === processedOffers.length - 1;
    const newIndex = isLastSlide ? 0 : currentOfferIndex + 1;
    setCurrentOfferIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentOfferIndex(slideIndex);
  };
  
  const openModal = useCallback(() => {
    setIsModalMounted(true);
    setTimeout(() => setIsModalVisible(true), 10);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
    setTimeout(() => setIsModalMounted(false), 400);
  }, []);

  // Thêm Optional Chaining (?.) để tránh lỗi khi processedOffers đang rỗng lúc render lần đầu
  const currentOfferDetails = processedOffers[currentOfferIndex]?.details;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalMounted) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalMounted, closeModal]);

  // Nếu chưa có dữ liệu, có thể hiện loading hoặc không hiện gì cả
  if (processedOffers.length === 0) {
    return null; // hoặc <p>Loading...</p>
  }

  return (
    <>
      <div className="offers-section">
        <SectionTitle subtitle="Curated For You" title="Today's Special Offers" />
        
        <div className="offer-slider">
          <div className="slider-arrow left-arrow" onClick={goToPrevious}>
            &#10094;
          </div>

          <div className="offer-card" key={currentOfferIndex}>
            <div className="offer-image-container">
              <img 
                src={processedOffers[currentOfferIndex].image} 
                alt={processedOffers[currentOfferIndex].title}
                className="offer-image"
              />
            </div>
            <div className="offer-content">
              <h3 className="offer-title">{processedOffers[currentOfferIndex].title}</h3>
              <p className="offer-description">{processedOffers[currentOfferIndex].description}</p>
              <button className="button" onClick={openModal}>See More</button>
            </div>
          </div>
          
          <div className="slider-arrow right-arrow" onClick={goToNext}>
            &#10095;
          </div>
        </div>

        <div className="slider-dots">
          {processedOffers.map((_, slideIndex) => (
            <div
              key={slideIndex}
              className={`dot ${currentOfferIndex === slideIndex ? 'active' : ''}`}
              onClick={() => goToSlide(slideIndex)}
            ></div>
          ))}
        </div>
      </div>

      {isModalMounted && currentOfferDetails && (
        <div 
          className={`offer-modal-overlay ${isModalVisible ? 'show' : ''}`} 
          onClick={closeModal}
        >
          <div className="offer-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>&times;</button>
            <div className="modal-header">
              <h2>{currentOfferDetails.title}</h2>
              <p>{currentOfferDetails.main_text}</p>
            </div>
            <div className="modal-features-grid">
              {currentOfferDetails.features.map((feature, index) => (
                <div className="feature-card" key={index}>
                  <div className="feature-image-container">
                    <img src={feature.image} alt={feature.title} />
                  </div>
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OfferSection;