// /src/hooks/useGeolocation.js

import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null, // Bắt đầu với data là null
  });

  useEffect(() => {
    let isMounted = true; // Cờ để tránh cập nhật state trên component đã unmount

    // Hàm an toàn để cập nhật state
    const setSafeState = (newState) => {
      if (isMounted) {
        setState(newState);
      }
    };

    // Hàm sẽ được gọi khi lấy vị trí thành công
    const onSuccess = async (position) => {
      try {
        const { latitude, longitude } = position.coords;
        const geoApiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        const response = await fetch(geoApiUrl, {
          headers: { "User-Agent": "BakerzBiteEProject/1.0" },
        });

        if (!response.ok) {
          throw new Error(
            `Nominatim API failed with status: ${response.status}`
          );
        }

        const geoData = await response.json();

        if (geoData && geoData.address) {
          setSafeState({
            loading: false,
            error: null,
            data: {
              city:
                geoData.address.city || geoData.address.state || "Unknown Area",
              country: geoData.address.country_code?.toUpperCase() || "N/A",
            },
          });
        } else {
          throw new Error("Invalid data format from Nominatim API.");
        }
      } catch (apiError) {
        // Nếu có lỗi khi gọi API, đặt data về null
        console.error("Geocoding API error:", apiError);
        setSafeState({ loading: false, error: apiError, data: null });
      }
    };

    // Hàm sẽ được gọi khi có lỗi từ trình duyệt
    const onError = (error) => {
      console.error("Geolocation error:", error.message);
      // Khi có lỗi, đặt data về null
      setSafeState({ loading: false, error, data: null });
    };

    // Bắt đầu quá trình
    if (!navigator.geolocation) {
      onError({ message: "Geolocation is not supported by your browser." });
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // Hàm dọn dẹp
    return () => {
      isMounted = false;
    };
  }, []); // Mảng rỗng đảm bảo useEffect chỉ chạy một lần

  return state;
};

export default useGeolocation;
