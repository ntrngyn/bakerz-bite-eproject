// /src/hooks/useGeolocation.js

import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    let isMounted = true;

    const setSafeState = (newState) => {
      if (isMounted) {
        setState(newState);
      }
    };

    const onSuccess = async (position) => {
      try {
        const { latitude, longitude } = position.coords;

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        // Gửi kèm header User-Agent để cố gắng tránh lỗi 403
        const response = await fetch(geoApiUrl, {
          headers: { "User-Agent": "BakerzBiteEProject/1.0" },
        });

        if (!response.ok) {
          throw new Error(
            `Nominatim API failed with status: ${response.status}`
          );
        }

        const geoData = await response.json();

        if (geoData && (geoData.city || geoData.principalSubdivision)) {
          setSafeState({
            loading: false,
            error: null,
            data: {
              city: geoData.city || geoData.principalSubdivision,
              country: geoData.countryCode,
            },
          });
        } else {
          throw new Error("Invalid data from API.");
        }
      } catch (apiError) {
        console.error("Geocoding API error:", apiError);
        setSafeState({ loading: false, error: apiError, data: null });
      }
    };

    const onError = (error) => {
      console.error("Geolocation error:", error.message);
      setSafeState({ loading: false, error, data: null });
    };

    if (!navigator.geolocation) {
      onError({ message: "Geolocation is not supported by your browser." });
    } else {
      // Gọi Geolocation API một cách đơn giản
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
};

export default useGeolocation;
