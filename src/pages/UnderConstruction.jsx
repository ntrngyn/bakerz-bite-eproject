import React from 'react';
import { Link } from 'react-router-dom';

import './UnderConstruction.css';

const UnderConstruction = () => {
  return (
    <main>
      <section className="under-construction">
        <div className="container">
          <div className="uc-container">
            <div className="uc-logo-container">
              <img 
                src="/src/assets/images/Baker_BiteLOGO.png" 
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