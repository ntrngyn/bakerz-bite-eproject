// src/components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Component này không render ra bất cứ thứ gì, nó chỉ là một "helper"
function ScrollToTop() {
  // Lấy ra đối tượng location, trong đó có `pathname` (ví dụ: "/about", "/products/cakes")
  const { pathname } = useLocation();

  // Sử dụng useEffect để thực hiện một hành động mỗi khi `pathname` thay đổi
  useEffect(() => {
    // Ra lệnh cho cửa sổ trình duyệt cuộn về vị trí (0, 0) - tức là trên cùng
    window.scrollTo(0, 0);
  }, [pathname]); // Mảng phụ thuộc, effect này sẽ chạy lại MỖI KHI `pathname` thay đổi

  // Component này không cần hiển thị gì cả
  return null;
}

export default ScrollToTop;