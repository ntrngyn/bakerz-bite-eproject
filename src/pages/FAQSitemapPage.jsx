import React, { useState } from 'react';
import TabNav from '../sections/FAQ-TabNav';
import FaqList from '../sections/FAQ-FAQList';
import Sitemap from '../sections/FAQ-Sitemap';
import SectionTitle from '../components/SectionTitle';
import './FAQSitemapPage.css';

const menuItemsForSitemap = [
    { to: '/', name: 'Home' }, 
    { 
      to: '/products', 
      name: 'Products',
      submenu: [
        { to: '/products/cakes', name: 'Cakes' },
        { to: '/products/cookies', name: 'Cookies' },
        { to: '/products/pastries', name: 'Pastries' },
        { to: '/products/pies', name: 'Pies' },
        { to: '/products/coffee', name: 'Coffee' },
      ]
    },
    { to: '/merchandise', name: 'Merchandise' },
    { to: '/gallery', name: 'Gallery' },
    { to: '/offers', name: 'Offers' },
    { to: '/about', name: 'About Us' },
    { to: '/contact', name: 'Contact' },
    { to: '/faq-sitemap', name: 'FAQ & Sitemap' },
  ];

const FaqSitemapPage = () => {
    const [activeTab, setActiveTab] = useState('faq'); 

    return (
        <main className="page-container container">
            <section className="faq-sitemap-page section">
                <SectionTitle subtitle="WE'RE HERE TO HELP" title="Help Center" />
                
                <div className="container faq-sitemap-container">
                    <TabNav activeTab={activeTab} onTabClick={setActiveTab} />
                    
                    <div className="tab-content">
                        {activeTab === 'faq' && <FaqList />}
                        {activeTab === 'sitemap' && <Sitemap menuItems={menuItemsForSitemap} />}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FaqSitemapPage;