// /src/components/Ticker.jsx 

import React, { useState, useEffect } from 'react';
import useGeolocation from '../hooks/useGeolocation';
import './Ticker.css'; 

const Ticker = () => {
  const { loading, data: locationData } = useGeolocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const dateString = currentTime.toLocaleDateString('vi-VN');
  const timeString = currentTime.toLocaleTimeString('vi-VN');

  let locationString;
  if (loading) {
    locationString = "Determining location...";
  } else if (locationData) {
    locationString = `${locationData.city}, ${locationData.country}`;
  } else {
    locationString = "Location Not Available"; 
  }

  // Mảng đối tượng vẫn giữ nguyên, nhưng thêm 'type' để dễ xử lý
  const tickerItems = [
    { type: 'date', icon: 'uil uil-calendar-alt', text: `Date: ${dateString}` },
    { type: 'time', icon: 'uil uil-clock', text: `Time: `, value: timeString }, // Tách giá trị time ra
    { type: 'location', icon: 'uil uil-map-marker', text: `Location: ${locationString}` }
  ];

  // Hàm render một khối nội dung
  const renderContentBlock = (copyKey) => (
    <div key={copyKey} className="ticker-content">
      {tickerItems.map((item, index) => {
        // Nếu là item thời gian, render theo cách đặc biệt
        if (item.type === 'time') {
          return (
            <span key={`${copyKey}-${index}`} className="ticker__item">
              <i className={item.icon}></i>
              {item.text}
              <span className="ticker__time">{item.value}</span>
            </span>
          );
        }
        // Render các item khác bình thường
        return (
          <span key={`${copyKey}-${index}`} className="ticker__item">
            <i className={item.icon}></i>
            {item.text}
          </span>
        );
      })}
    </div>
  );

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {/* Render ra 2 hoặc 3 bản sao của khối nội dung */}
        {renderContentBlock('first')}
        {renderContentBlock('second')}
        {renderContentBlock('third')}
      </div>
    </div>
  );
};

export default Ticker;