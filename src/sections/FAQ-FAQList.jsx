import React, { useState, useEffect } from 'react';
import './FAQ-FAQList.css';

const FaqList = () => {
    const [faqs, setFaqs] = useState([]);
    const [openFaqId, setOpenFaqId] = useState(null);

    useEffect(() => {
        fetch('/src/data/faq.json') 
            .then(res => res.json())
            .then(data => setFaqs(data))
            .catch(err => console.error("Could not fetch FAQ data:", err));
    }, []);

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