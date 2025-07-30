import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';

const GallerySection = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/data/gallery.json').then(res => res.json()).then(data => setImages(data));
    }, []);

    return (
        <section id="gallery" className="section">
            <SectionTitle title="Our Gallery" />
            <div className="gallery-container container grid">
                {images.map(image => (
                    <div key={image.id} className="gallery-item">
                        <img src={image.imageUrl} alt={image.altText} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GallerySection;