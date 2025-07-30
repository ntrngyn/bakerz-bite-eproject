import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';

const OffersSection = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('/data/offers.json').then(res => res.json()).then(data => setOffers(data));
    }, []);

    return (
        <section id="offers" className="section">
            <SectionTitle title="Special Offers" />
            <div className="offers-container container grid">
                {offers.map(offer => (
                    <div key={offer.id} className="offer-card">
                        <img src={offer.image} alt={offer.title} />
                        <h3>{offer.title}</h3>
                        <p>{offer.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OffersSection;