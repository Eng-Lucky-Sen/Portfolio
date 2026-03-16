import React from 'react';
import { Link } from 'react-router-dom';
import luckyImage from '../assets/lucky.png';


import './ThankYou.css'; // Import the CSS file

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      {/* Top Section */}
      <div className="top-section">
        <h1 className="thank-you-heading">THANK YOU !</h1>
        <div className="check-mark-circle">
          <svg className="check-mark" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9,20.42L2.79,14.21L5.62,11.38L9,14.76L18.38,5.38L21.21,8.21L9,20.42Z" />
          </svg>
        </div>
        <p className="download-text">Your message has been successfully sent </p>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="ebook-info">
          {/* This image might show: tracie todd judge */}
          <img src={luckyImage} alt="lucky img" className="ebook-cover" /> {/* Placeholder for the ebook image */}
          {/* You'd replace the src with your actual ebook cover image URL */}
        </div>
        <div className="enjoy-reading">
         <h2>Lucky sen</h2>
         <p>UI/UX designer & and web developer</p>
          <Link to="/">
        <button className="back-home-btn">Back to Home</button>
      </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;