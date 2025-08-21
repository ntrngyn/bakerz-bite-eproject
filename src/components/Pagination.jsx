// src/components/Pagination.jsx - PHIÊN BẢN SỬA DÙNG <button>

import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const [jumpToPageInput, setJumpToPageInput] = useState('');

  if (totalPages <= 1) {
    return null;
  }
  
  const handleInputChange = (event) => {
    setJumpToPageInput(event.target.value);
  };

  const handleJumpToPage = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const pageNumber = parseInt(jumpToPageInput, 10);
      if (pageNumber && pageNumber > 0 && pageNumber <= totalPages) {
        paginate(pageNumber);
      }
      setJumpToPageInput('');
    }
  };

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
  let ellipsisRendered = false;

  return (
    <nav>
      <ul className="pagination">
        {/* Nút Previous */}
        <li className="page-item">
          <button 
            onClick={() => paginate(currentPage - 1)} 
            className="page-link page-link-arrow"
            disabled={currentPage === 1} // Dùng disabled thay cho class
          >
            &lt;
          </button>
        </li>
        
        {pageNumbers.map((number, index) => {
          if (number === "...") {
            if (!ellipsisRendered) {
              ellipsisRendered = true;
              return (
                <li key={`ellipsis-input-${index}`} className="page-item">
                  <input
                    type="number"
                    id="jump-to-page" 
                    name="jump-to-page"
                    className="page-link page-link-input"
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
            return <li key={`ellipsis-static-${index}`} className="page-item page-item--ellipsis"><span>...</span></li>;
          }
          
          return (
            <li key={number} className="page-item">
              <button 
                onClick={() => paginate(number)} 
                className={`page-link ${currentPage === number ? 'active' : ''}`}
              >
                {number}
              </button>
            </li>
          );
        })}
        
        {/* Nút Next */}
        <li className="page-item">
          <button 
            onClick={() => paginate(currentPage + 1)} 
            className="page-link page-link-arrow"
            disabled={currentPage === totalPages} // Dùng disabled thay cho class
          >
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;