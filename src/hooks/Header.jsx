import React from 'react';
import useVisitorCount from '../hooks/useVisitorCount'; // Import hook

const Header = () => {
  const visitorCount = useVisitorCount(); // Sử dụng hook

  return (
    //...
    <div className="nav__visitor-count">
      Lượt truy cập: {visitorCount.toLocaleString('en-US')} {/* Dùng toLocaleString để có dấu phẩy */}
    </div>
    //...
  );
};

export default Header;