import React, { useState } from 'react';
import { Link, scroller } from 'react-scroll';
import './Header.css'; // File CSS sẽ được cập nhật ở bước 2

// Import hook nếu bạn đã tạo
import useVisitorCount from '../hooks/useVisitorCount';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const visitorCount = useVisitorCount();

  const menuItems = [
    { to: 'products', name: 'Products' },
    { to: 'merchandise', name: 'Merchandise' },
    { to: 'offers', name: 'Offers' },
    { to: 'gallery', name: 'Gallery' },
    { to: 'about', name: 'About Us' },
    { to: 'contact', name: 'Contact' },
  ];

  // Hàm để đóng menu sau khi click vào một link (trên mobile)
  const closeMenuAndScroll = (target) => {
    setIsMenuOpen(false);
    scroller.scrollTo(target, {
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
    });
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Bakerz Bite
        </a>

        {/* Thêm class 'show-menu' khi isMenuOpen là true */}
        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            {menuItems.map((item) => (
              <li className="nav__item" key={item.to}>
                {/* Sử dụng hàm mới cho onClick trên mobile */}
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav__link"
                  activeClass="active-link"
                  onClick={() => closeMenuAndScroll(item.to)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Nút đóng menu trên mobile */}
          <div className="nav__close" onClick={() => setIsMenuOpen(false)}>
            <i className="uil uil-times"></i> {/* Icon 'x' */}
          </div>
        </div>
        
        <div className="nav__right-group">
          <div className="nav__visitor-count">
            Lượt truy cập: {visitorCount.toLocaleString()}
          </div>
          {/* Nút bật/tắt menu trên mobile */}
          <div className="nav__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="uil uil-apps"></i> {/* Icon hamburger */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;