import React from 'react';
import SectionTitle from '../components/SectionTitle';

const AboutSection = () => {
    return (
        <section id="about" className="section">
            <SectionTitle title="About Us" subtitle="Our Story" />
            <div className="about-container container grid">
                <div className="about-image">
                    {/* Thêm một ảnh đẹp về cửa hàng ở đây */}
                    <img src="/images/store-front.jpg" alt="Bakerz Bite Store Front" />
                </div>
                <div className="about-text">
                    <h3>Our Mission And Vision</h3>
                    <p>
                        At Bakerz Bite, our mission is to create delightful moments through our handcrafted baked goods. We believe in using only the finest, freshest ingredients to deliver quality and taste in every bite.
                    </p>
                    <p>
                        Our vision is to be the heart of the community, a place where people gather to share smiles, stories, and the simple joy of a delicious treat.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;