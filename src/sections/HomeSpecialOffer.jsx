import React from 'react';

// Import CSS
import './HomeSpecialOffer.css';

// Import component SectionTitle
import SectionTitle from '../components/SectionTitle';

// Dữ liệu (giữ nguyên)
const specialOffersData = [
  {
    id: 'loyalty-01',
    subtitle: "FOR OUR LOYAL FRIENDS",
    title: "Your Next Coffee Is On Us",
    description: "As a thank you for your continued support, enjoy a free handcrafted coffee with any purchase over $15.",
    image: "/src/assets/images/home-offers/offer-loyalty.jpg",
    link: "/offers",
    buttonText: "Discover More"
  },
  {
    id: 'weekend-01',
    subtitle: "WEEKEND SPECIAL",
    title: "The Ultimate Brunch Box",
    image: "/src/assets/images/home-offers/offer-weekend.jpg",
    link: "/offers"
  },
  {
    id: 'combo-01',
    subtitle: "PERFECT PAIRING",
    title: "Coffee & Cake Combo",
    image: "/src/assets/images/home-offers/offer-combo.jpg",
    link: "/offers"
  },
  {
    id: 'new-01',
    subtitle: "NEW ARRIVAL",
    title: "Meet The Ruby Chocolate Tart",
    image: "/src/assets/images/home-offers/offer-new-product.jpg",
    link: "/offers"
  },
];

// --- COMPONENT ---
const HomeSpecialOffer = () => {
    const featuredOffer = specialOffersData[0];
    const secondaryOffers = specialOffersData.slice(1, 4);

    return (
        <section className="home-special-offer section" id="offers">
            {/* THÊM LẠI SECTION TITLE Ở ĐÂY */}
            <SectionTitle subtitle="Curated For You" title="Today's Special Offers" />

            <div className="home-special-offer__grid container">
                {/* --- Cột Trái: Featured Offer Card --- */}
                <div className="home-special-offer__featured-column">
                    <a href={featuredOffer.link} className="home-special-offer__card home-special-offer__card--featured">
                        <div className="home-special-offer__img-wrapper">
                            <img src={featuredOffer.image} alt={featuredOffer.title} className="home-special-offer__img" />
                        </div>
                        <div className="home-special-offer__data">
                            <h3 className="home-special-offer__subtitle">{featuredOffer.subtitle}</h3>
                            <h2 className="home-special-offer__title">{featuredOffer.title}</h2>
                            <p className="home-special-offer__description">{featuredOffer.description}</p>
                            <span className="button home-special-offer__button">{featuredOffer.buttonText}</span>
                        </div>
                    </a>
                </div>

                {/* --- Cột Phải: Secondary Offers Grid --- */}
                <div className="home-special-offer__secondary-grid">
                    {secondaryOffers.map((offer) => (
                        <a href={offer.link} className="home-special-offer__card home-special-offer__card--secondary" key={offer.id}>
                            <img src={offer.image} alt={offer.title} className="home-special-offer__img" />
                            <div className="home-special-offer__data--secondary">
                                <h3 className="home-special-offer__subtitle--secondary">{offer.subtitle}</h3>
                                <h2 className="home-special-offer__title--secondary">{offer.title}</h2>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeSpecialOffer;