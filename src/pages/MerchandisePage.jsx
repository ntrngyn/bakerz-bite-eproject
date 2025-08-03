// /src/pages/MerchandisePage.jsx

import React from 'react';
import MerchandiseSection from '../sections/MerchandiseSection';

const MerchandisePage = () => {
  return (
    <div className="page-container container">
      {/* 
        Bạn có thể thêm một tiêu đề chung cho trang ở đây nếu muốn,
        hoặc để SectionTitle trong MerchandiseSection tự xử lý.
      */}
      <MerchandiseSection />
    </div>
  );
};

export default MerchandisePage;