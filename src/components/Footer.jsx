import React from 'react';
import Ticker from './Ticker'; 
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">

      <Ticker />

      <div className="footer-container">
        <div className="footer-section about">
          <h3 className="footer-section-title">Bakerz Bite</h3>
          <p>
          "Where smiles are served daily. We are proud to bring you the finest and freshest baked goods, made from carefully selected ingredients."
          </p>
        </div>

        <div className="footer-section links">
          <h3 className="footer-section-title">Our Collections</h3>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="/products/cakes">Cakes</a></li>
            <li><a href="/products/pastries">Pastries</a></li>
            <li><a href="/products/pies">Pies</a></li>
            <li><a href="/products/coffee">Coffee</a></li>
            <li><a href="/merchandise">Merchandise</a></li>
            <li><a href="/offers">Offers</a></li>
          </ul>
        </div>

        <div className="footer-section support-links">
          <h3 className="footer-section-title">Information</h3>
          <ul>
            <li><a href="/about">About US</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3 className="footer-section-title">Contact</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Bakery Street, District 1, Ho Chi Minh City
          </p>
          <p>
            <i className="fas fa-phone"></i> (012) 345 6789
          </p>
          <p>
            <i className="fas fa-envelope"></i> contact@bakerzbite.com
          </p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>

          <div className="footer-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d548.1750593516891!2d105.77921222407366!3d10.033780787170524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0881f9a732075%3A0xfa43fbeb2b00ca73!2sCUSC%20-%20Cantho%20University%20Software%20Center!5e0!3m2!1svi!2s!4v1754798455694!5m2!1svi!2s" 
              width="100%" 
              height="150" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Bakerz Bite. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer; 