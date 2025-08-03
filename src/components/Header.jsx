// /src/components/Header.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useVisitorCount from '../hooks/useVisitorCount';
import logoImage from '../../public/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State mới để quản lý dropdown nào đang mở (dành cho desktop)
  const [openDropdown, setOpenDropdown] = useState(null); 
  const visitorCount = useVisitorCount();

  // Cấu trúc lại menuItems để hỗ trợ submenu
  const menuItems = [
    { 
      to: '/products', 
      name: 'Products',
      // Thêm một mảng submenu
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
  ];
  
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo" onClick={() => setIsMenuOpen(false)}>
          {/* Sửa lại ở đây */}
          <img src={logoImage} alt="Bakerz Bite Logo" className="nav__logo-img" />
        </NavLink>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            {menuItems.map((item, index) => (
              // Thêm class 'nav__item--dropdown' nếu có submenu
              <li 
                className={`nav__item ${item.submenu ? 'nav__item--dropdown' : ''}`} 
                key={item.to}
                // Xử lý hover cho dropdown trên desktop
                onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                onMouseLeave={() => item.submenu && setOpenDropdown(null)}
              >
                <NavLink
                  to={item.to}
                  className="nav__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {/* Thêm icon mũi tên nếu có submenu */}
                  {item.submenu && <i className="uil uil-angle-down nav__arrow"></i>}
                </NavLink>

                {/* Render dropdown nếu có submenu */}
                {item.submenu && (
                  <ul className={`dropdown__menu ${openDropdown === item.name ? 'show-dropdown' : ''}`}>
                    {item.submenu.map((subItem) => (
                      <li className="dropdown__item" key={subItem.to}>
                        <NavLink
                          to={subItem.to}
                          className="dropdown__link"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
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
          <div className="nav__close" onClick={() => setIsMenuOpen(false)}>
            <i className="uil uil-times"></i>
          </div>
        </div>
        
        <div className="nav__right-group">
          <div className="nav__visitor-count">
            Visitors: {visitorCount.toLocaleString()}
          </div>
          <div className="nav__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;