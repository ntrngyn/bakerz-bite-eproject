import React, { useState } from 'react';
import './OfferSection.css';
import offersData from '../data/offers.json';
import { useEffect, useCallback } from 'react';

const OfferSection = () => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [isModalMounted, setIsModalMounted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentOfferIndex === 0;
    const newIndex = isFirstSlide ? offersData.length - 1 : currentOfferIndex - 1;
    setCurrentOfferIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentOfferIndex === offersData.length - 1;
    const newIndex = isLastSlide ? 0 : currentOfferIndex + 1;
    setCurrentOfferIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentOfferIndex(slideIndex);
  };
  
  const openModal = useCallback(() => {
    setIsModalMounted(true);
    setTimeout(() => {
      setIsModalVisible(true);
    }, 10);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
    setTimeout(() => {
      setIsModalMounted(false);
    }, 400);
  }, []);

  const currentOfferDetails = offersData[currentOfferIndex].details;

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

  return (
    <>
      <div className="offers-section">
        <h2 className="section__title">Special Offers</h2>
        
        <div className="offer-slider">
          <div className="slider-arrow left-arrow" onClick={goToPrevious}>
            &#10094;
          </div>

          <div className="offer-card" key={currentOfferIndex}>
            <div className="offer-image-container">
              <img 
                src={offersData[currentOfferIndex].image} 
                alt={offersData[currentOfferIndex].title}
                className="offer-image"
              />
            </div>
            <div className="offer-content">
              <h3 className="offer-title">{offersData[currentOfferIndex].title}</h3>
              <p className="offer-description">{offersData[currentOfferIndex].description}</p>
              <button className="button" onClick={openModal}>See More</button>
            </div>
          </div>
          
          <div className="slider-arrow right-arrow" onClick={goToNext}>
            &#10095;
          </div>
        </div>

        <div className="slider-dots">
          {offersData.map((_, slideIndex) => (
            <div
              key={slideIndex}
              className={`dot ${currentOfferIndex === slideIndex ? 'active' : ''}`}
              onClick={() => goToSlide(slideIndex)}
            ></div>
          ))}
        </div>
      </div>

      {isModalMounted && (
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