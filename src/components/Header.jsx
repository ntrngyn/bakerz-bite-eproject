// Header.js - Đã cập nhật
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useVisitorCount from '../hooks/useVisitorCount';
import logoImage from '/images/Baker_BiteLOGO.png';

const Header = () => {
  // State cho menu chính trên mobile (hamburger menu)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State cho dropdown trên desktop
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null); 
  // State cho submenu (accordion) trên mobile
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const visitorCount = useVisitorCount();

  const menuItems = [
    { 
      to: '/products', 
      name: 'Products',
      submenu: [
        { to: '/products/cakes', name: 'Cakes' },
        { to: '/products/cookies', name: 'Cookies' },
        { to: '/products/pastries', name: 'Pastries' },
        { to: '/products/pies', name: 'Pies' },
        { to: '/products/coffees', name: 'Coffees' },
      ]
    },
    { to: '/merchandise', name: 'Merchandise' },
    { to: '/offers', name: 'Offers' },
    { to: '/gallery', name: 'Gallery' },
    { to: '/about', name: 'About Us' },
    { to: '/contact', name: 'Contact' },
    { to: '/faq-sitemap', name: 'FAQ & Sitemap' },
  ];

  // Hàm xử lý đóng/mở submenu trên mobile
  const handleMobileSubmenuToggle = (e, itemName) => {
    // Chỉ hoạt động trên mobile (kiểm tra qua class của nav__menu)
    // Hoặc đơn giản hơn là chỉ kích hoạt khi isMenuOpen = true
    if (window.innerWidth <= 768) {
        e.preventDefault(); // Ngăn chuyển trang khi nhấn vào link cha
        setOpenMobileSubmenu(openMobileSubmenu === itemName ? null : itemName);
    }
  };

  // Hàm đóng tất cả menu
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenMobileSubmenu(null);
  }

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo" onClick={closeAllMenus}>
          <img src={logoImage} alt="Bakerz Bite Logo" className="nav__logo-img" />
        </NavLink>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            {menuItems.map((item) => (
              <li 
                // Thêm class 'is-open' khi submenu trên mobile được mở
                className={`nav__item ${item.submenu ? 'nav__item--dropdown' : ''} ${openMobileSubmenu === item.name ? 'is-open' : ''}`} 
                key={item.to}
                // Dành cho desktop
                onMouseEnter={() => item.submenu && setOpenDesktopDropdown(item.name)}
                onMouseLeave={() => item.submenu && setOpenDesktopDropdown(null)}
              >
                <NavLink
                  to={item.to}
                  className="nav__link"
                  // Nhấn vào link sẽ xử lý submenu trên mobile hoặc đóng menu chính
                  onClick={(e) => {
                    if (item.submenu) {
                      handleMobileSubmenuToggle(e, item.name);
                    } else {
                      closeAllMenus();
                    }
                  }}
                >
                  {item.name}
                  {/* Thêm icon mũi tên cho mục có submenu */}
                  {item.submenu && <i className="nav__link-arrow"></i>}
                </NavLink>

                {/* --- SUBMENU --- */}
                {item.submenu && (
                  <ul className={`dropdown__menu ${openDesktopDropdown === item.name ? 'show-dropdown' : ''}`}>
                    {item.submenu.map((subItem) => (
                      <li className="dropdown__item" key={subItem.to}>
                        <NavLink
                          to={subItem.to}
                          className="dropdown__link"
                          onClick={closeAllMenus}
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {/* Nút đóng cho menu mobile */}
          <div className="nav__close" onClick={() => setIsMenuOpen(false)}>
            &times;
          </div>
        </div>
        
        <div className="nav__right-group">
          <div className="nav__visitor-count">
            Visitors: {visitorCount.toLocaleString()}
          </div>
          {/* Nút mở menu mobile (Hamburger Icon) */}
          <div className="nav__toggle" onClick={() => setIsMenuOpen(true)}>
            &#9776;
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;