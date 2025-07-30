import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    const onSuccess = () => {
      // Tạm thời chúng ta chỉ cần một vị trí giả lập hoặc đơn giản
      // Trong thực tế, bạn sẽ dùng position.coords.latitude và longitude
      // để gọi API chuyển đổi thành tên thành phố.
      // Ở đây, ta giả lập kết quả để đơn giản hóa.
      setState({
        loading: false,
        error: null,
        data: {
          city: "Ho Chi Minh City",
          country: "VN",
        },
      });
    };

    const onError = (error) => {
      setState({
        loading: false,
        error,
        data: null,
      });
    };

    // Kiểm tra xem trình duyệt có hỗ trợ Geolocation không
    if (!navigator.geolocation) {
      setState({
        loading: false,
        error: { message: "Geolocation is not supported by your browser." },
        data: null,
      });
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []); // Chạy một lần duy nhất

  return state;
};

export default useGeolocation;
