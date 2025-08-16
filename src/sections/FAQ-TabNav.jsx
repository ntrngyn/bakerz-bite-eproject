import React from 'react';
import './FAQ-TabNav.css'

const TabNav = ({ activeTab, onTabClick }) => {
    return (
        <div className="tab-nav">
            <button
                className={`tab-nav__button ${activeTab === 'faq' ? 'active' : ''}`}
                onClick={() => onTabClick('faq')}
            >
                FAQ
            </button>
            <button
                className={`tab-nav__button ${activeTab === 'sitemap' ? 'active' : ''}`}
                onClick={() => onTabClick('sitemap')}
            >
                Sitemap
            </button>
        </div>
    );
};

export default TabNav;