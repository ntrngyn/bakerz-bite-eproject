import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom'; // <-- 1. Thay đổi import
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* <-- 2. Thay đổi component ở đây */}
      <App />
    </HashRouter>
  </React.StrictMode>,
);