import React from 'react';
import { NavLink } from 'react-router-dom';
import './FAQ-Sitemap.css'; // Đảm bảo đã import file CSS

const Sitemap = ({ menuItems }) => {
    // Tách mục "Home" ra khỏi các mục menu chính
    const homeItem = menuItems.find(item => item.to === '/');
    const mainSections = menuItems.filter(item => item.to !== '/');

    return (
        <div className="sitemap-container">
            {/* === Gốc (Homepage) === */}
            {homeItem && (
                <div className="sitemap-root">
                    <NavLink to={homeItem.to} className="sitemap-node sitemap-node--root">
                        {homeItem.name}
                    </NavLink>
                </div>
            )}

            {/* === Các nhánh chính (Level 1) === */}
            <div className="sitemap-level-1-wrapper">
                {mainSections.map(item => (
                    <div key={item.to} className="sitemap-level-1-node">
                        {/* Nút của nhánh chính */}
                        <NavLink to={item.to} className="sitemap-node sitemap-node--level-1">
                            {item.name}
                        </NavLink>

                        {/* Nhánh con (Level 2) nếu có */}
                        {item.submenu && (
                            <ul className="sitemap-level-2-list">
                                {item.submenu.map(subItem => (
                                    <li key={subItem.to} className="sitemap-level-2-item">
                                        <NavLink to={subItem.to} className="sitemap-node sitemap-node--level-2">
                                            {subItem.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sitemap;