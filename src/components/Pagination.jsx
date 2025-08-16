// src/components/Pagination.jsx

import React, { useState } from 'react'; // <-- 1. Import thêm useState
import './Pagination.css';

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // 2. Thêm state để lưu giá trị người dùng nhập vào ô input
  const [jumpToPageInput, setJumpToPageInput] = useState('');

  // Nếu chỉ có 1 trang hoặc không có sản phẩm nào, không hiển thị
  if (totalPages <= 1) {
    return null;
  }
  
  // --- 3. Thêm các hàm xử lý cho ô input ---

  // Cập nhật state mỗi khi người dùng gõ phím
  const handleInputChange = (event) => {
    setJumpToPageInput(event.target.value);
  };

  // Xử lý khi người dùng nhấn phím trong ô input
  const handleJumpToPage = (event) => {
    // Chỉ thực hiện khi người dùng nhấn "Enter"
    if (event.key === 'Enter') {
      event.preventDefault(); // Ngăn hành vi mặc định của form
      const pageNumber = parseInt(jumpToPageInput, 10);

      // --- Validation ---
      // Kiểm tra xem có phải là số hợp lệ và nằm trong khoảng trang cho phép không
      if (pageNumber && pageNumber > 0 && pageNumber <= totalPages) {
        paginate(pageNumber); // Chuyển đến trang mong muốn
      }

      // Xóa nội dung trong ô input sau khi đã xử lý
      setJumpToPageInput('');
    }
  };


  // --- Logic để tạo các số trang (giữ nguyên từ trước) ---
  const getPageNumbers = () => {
    const pageNeighbours = 1;
    const totalNumbers = (pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    const startPage = Math.max(2, currentPage - pageNeighbours);
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
    let pages = Array.from({ length: (endPage - startPage) + 1 }, (_, i) => startPage + i);
    const hasLeftSpill = startPage > 2;
    const hasRightSpill = (totalPages - endPage) > 1;
    const spillOffset = totalNumbers - (pages.length + 1);

    switch (true) {
      case (hasLeftSpill && !hasRightSpill): {
        const extraPages = Array.from({ length: spillOffset }, (_, i) => startPage - spillOffset + i);
        pages = ["...", ...extraPages, ...pages];
        break;
      }
      case (!hasLeftSpill && hasRightSpill): {
        const extraPages = Array.from({ length: spillOffset }, (_, i) => endPage + 1 + i);
        pages = [...pages, ...extraPages, "..."];
        break;
      }
      default: {
        pages = ["...", ...pages, "..."];
        break;
      }
    }
    return [1, ...pages, totalPages];
  };

  const pageNumbers = getPageNumbers();
  // Để đảm bảo chỉ có 1 ô input, ta dùng một biến cờ
  let ellipsisRendered = false;

  return (
    <nav>
      <ul className="pagination">
        {/* Nút Previous (giữ nguyên) */}
        <li className="page-item">
          <a onClick={() => paginate(currentPage - 1)} href="#!" className={`page-link page-link-arrow ${currentPage === 1 ? 'disabled' : ''}`}>&lt;</a>
        </li>
        
        {/* --- 4. CẬP NHẬT LOGIC RENDER --- */}
        {pageNumbers.map((number, index) => {
          // Nếu là dấu "..."
          if (number === "...") {
            // Và chưa có ô input nào được render
            if (!ellipsisRendered) {
              ellipsisRendered = true; // Đánh dấu là đã render
              return (
                <li key={`ellipsis-input-${index}`} className="page-item">
                  <input
                    type="number"
                    className="page-link page-link-input" // Dùng class mới
                    placeholder="..."
                    value={jumpToPageInput}
                    onChange={handleInputChange}
                    onKeyDown={handleJumpToPage}
                    min="1"
                    max={totalPages}
                  />
                </li>
              );
            }
            // Nếu đã có ô input, chỉ hiển thị dấu "..." tĩnh
            return <li key={`ellipsis-static-${index}`} className="page-item page-item--ellipsis"><span>...</span></li>;
          }
          
          // Render số trang như bình thường
          return (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} href="#!" className={`page-link ${currentPage === number ? 'active' : ''}`}>
                {number}
              </a>
            </li>
          );
        })}
        
        {/* Nút Next (giữ nguyên) */}
        <li className="page-item">
          <a onClick={() => paginate(currentPage + 1)} href="#!" className={`page-link page-link-arrow ${currentPage === totalPages ? 'disabled' : ''}`}>&gt;</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;