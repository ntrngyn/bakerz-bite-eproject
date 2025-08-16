import React from 'react';
import { Link } from 'react-router-dom';
import './UnderConstruction.css';

// BƯỚC 1: IMPORT ẢNH VÀO MỘT BIẾN
import logoImage from '/images/Baker_BiteLOGO.png';


const UnderConstruction = () => {
  return (
    <main>
      <section className="under-construction">
        <div className="container">
          <div className="uc-container">
            <div className="uc-logo-container">
              {/* BƯỚC 2: SỬ DỤNG BIẾN ĐÃ IMPORT */}
              <img 
                src={logoImage} 
                alt="Baker Bite's Logo" 
                className="uc-logo" 
              />
            </div>

            <h1 className="uc-title">Something New is Coming Soon!</h1>

            <p className="uc-text">
            We're working hard to bring this feature to life. Please check back later. 
            Thanks for your patience!
            </p>

            <Link to="/" className="button">
            Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UnderConstruction;