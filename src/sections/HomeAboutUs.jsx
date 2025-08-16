import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { fixImagePath } from '../utils/pathUtils'; // <-- BƯỚC 1: IMPORT HÀM HELPER

// Import file CSS đã được thiết kế lại
import './HomeAboutUs.css'; 

const HomeAboutUs = () => {
    // BƯỚC 2: TẠO ĐƯỜNG DẪN ĐÚNG
    const storeFrontImagePath = fixImagePath('/images/store-front.png');

    return (
        <section id="about" className="section">
            <SectionTitle title="About Us" subtitle="Our Story" />
            
            <div className="about-container container grid">
                {/* Khối 1: Hình ảnh có thể nhấn vào */}
                <Link to="/about" className="about-image-link">
                    {/* BƯỚC 3: SỬ DỤNG ĐƯỜNG DẪN ĐÃ ĐÚNG */}
                    <img src={storeFrontImagePath} alt="Bakerz Bite Store Front" className="about-image" />
                </Link>
                
                {/* Khối 2: Văn bản mô tả */}
                <div className="about-text-content">
                    <h3>Our Mission And Vision</h3>
                    <p>
                        At Bakerz-Bite, we create moments of happiness with meticulously handcrafted baked goods, using only the freshest and finest ingredients for premium quality and unforgettable flavor.
                    </p>
                    <p>
                        We aspire to be the vibrant heart of the community, where our pastries foster connection, friendship, and the shared joy of great food.
                    </p>
                    <Link to="/about" className="see-more-link">
                        See More &raquo; 
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeAboutUs;