import React, { useState, useEffect } from 'react';
import './FAQ-FAQList.css';
import faqData from '../data/faq.json'; // <-- BƯỚC 1: IMPORT TRỰC TIẾP

const FaqList = () => {
    const [faqs, setFaqs] = useState([]);
    const [openFaqId, setOpenFaqId] = useState(null);

    useEffect(() => {
        // BƯỚC 2: XÓA FETCH VÀ GÁN DỮ LIỆU TRỰC TIẾP
        try {
            setFaqs(faqData);
        } catch (err) {
            console.error("Could not process FAQ data:", err);
        }
    }, []); // Mảng rỗng đảm bảo useEffect chỉ chạy 1 lần

    const toggleFaq = (id) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    return (
        <div className="faq-list">
            {faqs.map((faq) => (
                <div className="faq-item" key={faq.id}>
                    <button className="faq-question" onClick={() => toggleFaq(faq.id)}>
                        <span>{faq.question}</span>
                        <i className={`uil uil-angle-down faq-arrow ${openFaqId === faq.id ? 'open' : ''}`}></i>
                    </button>
                    {/* Đoạn này có thể được tối ưu bằng CSS thay vì render có điều kiện,
                        nhưng để sửa lỗi thì cứ giữ nguyên.
                    */}
                    {openFaqId === faq.id && (
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FaqList;