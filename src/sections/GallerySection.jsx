import React, { useState, useEffect } from 'react';
import './GallerySection.css';
import galleryData from '../data/gallery.json';
import { fixImagePath } from '../utils/pathUtils'; // <-- BƯỚC 1: IMPORT HÀM HELPER

const GallerySection = () => {
  // BƯỚC 2: XỬ LÝ DỮ LIỆU NGAY TỪ ĐẦU
  const images = galleryData.map(data => {
    // Tạo đường dẫn gốc giống như cách bạn đã làm
    const originalPath = `/images/Galleries/img${data.id}.png`;
    
    return {
      id: data.id,
      // Sửa đường dẫn bằng hàm helper
      src: fixImagePath(originalPath), // <-- SỬA Ở ĐÂY
      alt: `Gallery image ${data.id}`,
      title: data.title,
      description: data.description,
      category: data.category 
    };
  });

  // PHẦN CÒN LẠI CỦA COMPONENT KHÔNG CẦN THAY ĐỔI GÌ CẢ
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const filterCategories = ['All', 'Feed Back', 'Summer Event', 'Materials'];

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(image => image.category === activeFilter);

  useEffect(() => {
    setSelectedIndex(0);
  }, [activeFilter]);
  
  const openPopup = (index) => {
    setSelectedIndex(index);
    setTimeout(() => setIsPopupVisible(true), 10); 
  };
  
  const closePopup = () => {
    setIsPopupVisible(false);
    setTimeout(() => {
      setSelectedIndex(null);
    }, 400); 
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const nextIndex = (selectedIndex + 1) % filteredImages.length;
    setSelectedIndex(nextIndex);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    const prevIndex = (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedIndex(prevIndex);
  };
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') goToNext(e);
      else if (e.key === 'ArrowLeft') goToPrevious(e);
      else if (e.key === 'Escape') closePopup();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, filteredImages, closePopup]);

  // useEffect(() => {
  //   closePopup();
  // }, [activeFilter]);

  return (
    <div className="gallery-section-wrapper">
      <div className="Pastries-gallery-container">
        <div className="section-title-container">
          <span className="section-subtitle">A FEAST FOR THE EYES</span>
          <h2 className="section-main-title">Our Gallery</h2>
        </div>
        <div className="filter-controls">
          {filterCategories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="Pastries-gallery-grid">
          {filteredImages.map((image, index) => (
            <div key={image.id} className="Pastries-gallery-item" onClick={() => openPopup(index)}>
              <div className="pastries-gallery-image-wrapper">
                <img src={image.src} alt={image.alt} />
              </div>
              <div className="pastries-gallery-item-info">
                <h3 className="pastries-gallery-item-title">{image.title}</h3>
                <button className="view-details-btn">See More</button>
              </div>
            </div>
          ))}
        </div>

        {selectedIndex !== null && filteredImages[selectedIndex] && (
          <div 
            className={`popup-overlay ${isPopupVisible ? 'show' : ''}`} 
            onClick={closePopup}
          >
            <button className="popup-nav-button prev" onClick={goToPrevious}>&#10094;</button>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <div className="popup-text-content" key={`text-${selectedIndex}`}>
                <h3>{filteredImages[selectedIndex].title}</h3>
                <p>{filteredImages[selectedIndex].description}</p>
              </div>
              <div className="popup-image-container" key={`image-${selectedIndex}`}>
                 <img src={filteredImages[selectedIndex].src} alt={filteredImages[selectedIndex].alt} className="popup-image" />
              </div>
            </div>
            <button className="popup-nav-button next" onClick={goToNext}>&#10095;</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GallerySection;