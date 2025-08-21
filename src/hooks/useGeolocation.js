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

        const geoApiUrl = `/api/nominatim/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        const response = await fetch(geoApiUrl);

        if (!response.ok) {
          throw new Error(`Proxied API failed with status: ${response.status}`);
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
          throw new Error("Invalid data format from proxied API.");
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

    // ... (phần còn lại của hook giữ nguyên) ...
    if (!navigator.geolocation) {
      onError({ message: "Geolocation is not supported by your browser." });
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
};

export default useGeolocation;
