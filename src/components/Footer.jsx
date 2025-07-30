import React from 'react';
import Ticker from './Ticker'; // Import Ticker component
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Ticker /> {/* Component chạy chữ đã được tách ra */}
      <div className="footer__container container">
        <p className="footer__copy">
          © 2025 Bakerz Bite. All rights reserved.
        </p>
        <div className="footer__links">
          {/* Bạn có thể dùng Link của react-scroll ở đây nếu muốn */}
          <a href="#sitemap-section" className="footer__link">Sitemap</a>
          <a href="#faq" className="footer__link">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;