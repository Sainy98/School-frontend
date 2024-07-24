// src/Components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Springdale Public School is committed to providing quality education and fostering holistic development in our students.
          </p>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Address: 1234 School Lane, City, State, Zip Code</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@springdalepublicschool.com</p>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <p>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
