import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard'; 
import ProductModal from '../components/ProductModal';
import merchandiseData from '../data/merchandise.json'; // <-- BƯỚC 1: IMPORT DỮ LIỆU
import { fixImagePath } from '../utils/pathUtils'; // <-- BƯỚC 2: IMPORT HÀM HELPER

const MerchandiseSection = () => {
    const [merch, setMerch] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // BƯỚC 3: XỬ LÝ DỮ LIỆU TRƯỚC KHI SET STATE
        const updatedMerch = merchandiseData.map(item => ({
            ...item,
            image: fixImagePath(item.image)
        }));
        setMerch(updatedMerch);
    }, []); // useEffect chỉ chạy 1 lần khi component mount

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
                    {/* Phần này không cần thay đổi, nó sẽ tự động dùng dữ liệu đã đúng */}
                    {merch.map(item => (
                        <ProductCard 
                          key={item.id} 
                          product={item}
                          onCardClick={handleCardClick} 
                        />
                    ))}
                </div>
            </div>
            <ProductModal 
              isOpen={isModalOpen} 
              onClose={closeModal} 
              product={selectedItem}
              variant="merchandise" 
            />
        </section>
    );
};

export default MerchandiseSection;