import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink để tạo link
import SectionTitle from '../components/SectionTitle';
import './HomeFAQ.css'; // **Đổi tên file CSS** để không trùng lặp

const HomeFAQ = () => {
    // Đổi tên các state để không trùng với component khác nếu cần
    const [homeFaqs, setHomeFaqs] = useState([]);
    const [openHomeFaqId, setOpenHomeFaqId] = useState(null);

    useEffect(() => {
        fetch('/src/data/faq.json')
            .then(res => res.json())
            .then(data => {
                // **FIX:** Chỉ lấy 3 câu hỏi đầu tiên
                const homepageFaqs = data.slice(0, 3);
                setHomeFaqs(homepageFaqs);
                // Mặc định mở câu hỏi đầu tiên
                if (homepageFaqs.length > 0) {
                    setOpenHomeFaqId(homepageFaqs[0].id);
                }
            })
            .catch(err => console.error("Could not fetch FAQ data:", err));
    }, []);

    const toggleHomeFaq = (id) => {
        setOpenHomeFaqId(openHomeFaqId === id ? null : id);
    };

    return (
        <section id="faq" className="section">
            <SectionTitle subtitle="WE'RE HERE TO HELP" title="Common Questions" />

            {/* **Đổi tên class container chính** */}
            <div className="home-faq__container container">
                <div className="home-faq__list">
                    {homeFaqs.map(faq => (
                        // **Đổi tên các class con**
                        <div className={`home-faq__item ${openHomeFaqId === faq.id ? 'is-open' : ''}`} key={faq.id}>
                            <button className="home-faq__question" onClick={() => toggleHomeFaq(faq.id)}>
                                <span>{faq.question}</span>
                                <span className="home-faq__icon"></span>
                            </button>
                            
                            <div className="home-faq__answer-wrapper">
                                <div className="home-faq__answer-content">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* **FIX:** Thêm nút "Xem thêm" */}
                <div className="home-faq__view-more">
                    <p>Can't find the answer you're looking for?</p>
                    <NavLink to="/faq-sitemap" className="button">
                        View All FAQs
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default HomeFAQ;