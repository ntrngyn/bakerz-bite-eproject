import { useState, useEffect } from "react";

const useVisitorCount = () => {
  // Khởi tạo state, lấy giá trị từ localStorage hoặc bắt đầu từ 0
  const [count, setCount] = useState(() => {
    try {
      const savedCount = localStorage.getItem("visitorCount");
      // Thêm một số ngẫu nhiên ban đầu để bộ đếm trông "thật" hơn
      return savedCount ? parseInt(savedCount, 10) : 12345;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return 12345;
    }
  });

  // useEffect này chỉ chạy một lần duy nhất khi component mount
  useEffect(() => {
    try {
      // Tăng số đếm lên 1
      const newCount = count + 1;
      // Cập nhật state
      setCount(newCount);
      // Lưu giá trị mới vào localStorage
      localStorage.setItem("visitorCount", newCount.toString());
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
    // Mảng dependency rỗng `[]` đảm bảo effect này chỉ chạy 1 lần
  }, []);

  // Hook trả về số đếm hiện tại để component có thể sử dụng
  return count;
};

export default useVisitorCount;
