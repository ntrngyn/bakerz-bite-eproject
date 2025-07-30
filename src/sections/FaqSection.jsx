import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';

const FaqSection = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch('/data/faq.json').then(res => res.json()).then(data => setFaqs(data));
    }, []);

    return (
        <section id="faq" className="section">
            <SectionTitle title="Frequently Asked Questions" />
            <div className="faq-container container">
                {faqs.map(faq => (
                    <div key={faq.id} className="faq-item">
                        <h3 className="faq-question">{faq.question}</h3>
                        <p className="faq-answer">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqSection;