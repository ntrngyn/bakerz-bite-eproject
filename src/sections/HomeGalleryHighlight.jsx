
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle'; 
import './HomeGalleryHighlight.css'; 

const highlightData = [
  {
    id: 1,
    title: 'Feedback',
    imageSrc: '/src/assets/images/highlight-gallery/highlight-feedback.png',
    altText: 'A collage of positive customer feedback'
  },
  {
    id: 2,
    title: 'Events',
    imageSrc: '/src/assets/images/highlight-gallery/highlight-event.png',
    altText: 'A photo from a special event at our bakery'
  },
  {
    id: 3,
    title: 'Materials',
    imageSrc: '/src/assets/images/highlight-gallery/highlight-materials.png',
    altText: 'High-quality ingredients like flour and fresh berries'
  }
];

const GalleryHighlight = () => {
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