import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle'; 
import './HomeGalleryHighlight.css'; 

// BƯỚỚC 1: IMPORT CÁC FILE ẢNH VÀO CÁC BIẾN
import feedbackImage from '/images/highlight-gallery/highlight-feedback.png';
import eventImage from '/images/highlight-gallery/highlight-event.png';
import materialsImage from '/images/highlight-gallery/highlight-materials.png';


// BƯỚC 2: SỬ DỤNG CÁC BIẾN ĐÓ TRONG MẢNG DỮ LIỆU
const highlightData = [
  {
    id: 1,
    title: 'Feedback',
    imageSrc: feedbackImage, // <-- SỬA Ở ĐÂY
    altText: 'A collage of positive customer feedback'
  },
  {
    id: 2,
    title: 'Events',
    imageSrc: eventImage, // <-- SỬA Ở ĐÂY
    altText: 'A photo from a special event at our bakery'
  },
  {
    id: 3,
    title: 'Materials',
    imageSrc: materialsImage, // <-- SỬA Ở ĐÂY
    altText: 'High-quality ingredients like flour and fresh berries'
  }
];

const GalleryHighlight = () => {
  // Phần còn lại của component không cần thay đổi gì cả
  return (
    <section id="gallery-highlight" className="section">
      <SectionTitle title="Our Gallery" subtitle="A Glimpse Into Our World" />
      
      <div className="container">
        <div className="gallery-highlight-grid">
          {highlightData.map((item) => (
            <Link to="/gallery" className="highlight-card" key={item.id}>
              <img src={item.imageSrc} alt={item.altText} className="highlight-card__image" />
              <div className="highlight-card__overlay">
                <h3 className="highlight-card__title">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryHighlight;