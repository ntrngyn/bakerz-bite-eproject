// src/utils/pathUtils.js

const BASE_URL = import.meta.env.BASE_URL;

/**
 * Sửa đường dẫn ảnh từ file JSON hoặc code để hoạt động trên GitHub Pages.
 * @param {string} originalPath - Đường dẫn gốc (ví dụ: '/images/a.jpg' hoặc 'public/images/b.png')
 * @returns {string} - Đường dẫn đã được sửa (ví dụ: '/ntrngyn-bakerz-bite-eproject/images/a.jpg')
 */
export function fixImagePath(originalPath) {
  // Nếu không có đường dẫn hoặc nó đã là một URL đầy đủ, không làm gì cả
  if (!originalPath || originalPath.startsWith("http")) {
    return originalPath;
  }

  // Xóa '/public/' hoặc 'public/' ở đầu nếu có
  let cleanPath = originalPath.replace(/^(\/)?public\//, "");

  // Xóa dấu '/' ở đầu nếu có, để tránh bị lặp (//) khi nối chuỗi
  if (cleanPath.startsWith("/")) {
    cleanPath = cleanPath.substring(1);
  }

  // Nối BASE_URL (ví dụ: '/ntrngyn-bakerz-bite-eproject/') với đường dẫn đã được làm sạch
  return BASE_URL + cleanPath;
}
