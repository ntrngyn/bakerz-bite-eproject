// /src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import file CSS toàn cục mà bạn đã tạo
import './assets/global.css'; 

// Import file CSS mặc định (bạn có thể tùy chỉnh hoặc xóa nếu global.css đã đủ)
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)