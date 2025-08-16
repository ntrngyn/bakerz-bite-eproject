import { useState, useEffect } from "react";

const useVisitorCount = () => {
  const [count, setCount] = useState(() => {
    try {
      const savedCount = localStorage.getItem("visitorCount");
      return savedCount ? parseInt(savedCount, 10) : 0;
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return 0;
    }
  });

  useEffect(() => {
    try {
      const newCount = count + 1;
      setCount(newCount);
      // Lưu giá trị mới vào localStorage
      localStorage.setItem("visitorCount", newCount.toString());
    } catch (error) {
      console.error("Error writing to localStorage", error);
    }
    // Mảng dependency rỗng `[]` đảm bảo effect này chỉ chạy 1 lần
  }, []);

  return count;
};

export default useVisitorCount;
