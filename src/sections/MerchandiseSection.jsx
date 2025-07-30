import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard'; // Tái sử dụng ProductCard
import ProductModal from '../components/ProductModal'; // Tái sử dụng ProductModal

const MerchandiseSection = () => {
    const [merch, setMerch] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('/data/merchandise.json')
            .then(res => res.json())
            .then(data => setMerch(data));
    }, []);

    const handleCardClick = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <section id="merchandise" className="section">
            <SectionTitle title="Our Merchandise" subtitle="Take a Piece of Bakerz Bite Home" />
            <div className="products-container container">
                <div className="products-grid grid">
                    {merch.map(item => (
                        <ProductCard 
                          key={item.id} 
                          product={item} // Truyền dữ liệu merch vào prop 'product'
                          onCardClick={handleCardClick} 
                        />
                    ))}
                </div>
            </div>
            <ProductModal 
              isOpen={isModalOpen} 
              onClose={closeModal} 
              product={selectedItem} 
            />
        </section>
    );
};

export default MerchandiseSection;