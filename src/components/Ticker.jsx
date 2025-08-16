// src/components/Ticker.jsx

import React, { useState, useEffect } from 'react';
import useGeolocation from '../hooks/useGeolocation';
import './Ticker.css'; 

const Ticker = () => {
  const { loading, error, data: locationData } = useGeolocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const dateString = currentTime.toLocaleDateString('vi-VN');
  const timeString = currentTime.toLocaleTimeString('vi-VN');

  let locationString = "Loading location...";
  if (error) {
    locationString = "Location unavailable";
  } else if (!loading && locationData) {
    locationString = `${locationData.city}, ${locationData.country}`;
  }

  // Tạo một mảng nội dung
  const tickerItems = [
    `Date: ${dateString}`,
    `Time: ${timeString}`,
    `Location: ${locationString}`
  ];

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {/* Render mảng nội dung 2 lần để tạo hiệu ứng lặp vô hạn */}
        {tickerItems.map((item, index) => (
          <div key={`first-${index}`} className="ticker__item">{item}</div>
        ))}
        {tickerItems.map((item, index) => (
          <div key={`second-${index}`} className="ticker__item">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;