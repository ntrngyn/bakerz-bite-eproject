
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import FeedbackForm from '../components/FeedbackForm';

import './HomeContactUs.css';

const HomeContactUs = () => {
    return (
        <section id="contact" className="section">
            <SectionTitle title="Contact Us" subtitle="Get In Touch" />
            <div className="contact-container container grid">
                <div className="contact-info">
                    <h3>Our Address</h3>
                    <p>1 Đ. Lý Tự Trọng, Thới Bình, Ninh Kiều, Cần Thơ, Việt Nam</p>
                    <h3>Email Us</h3>
                    <p>hello@bakerzbite.com</p>
                    <h3>Call Us</h3>
                    <p>(+84) 987 654 321</p>
                </div>
                <div className="contact-form-wrapper">
                    <h3>Send us a message</h3>
                    <FeedbackForm /> 
                </div>
            </div>
        </section>
    );
};

export default HomeContactUs;