import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import free from '../assets/free.PNG';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content-container">
        <div className="footer-left">
          <h2 className="footer-heading">Have a project idea. Get in touch and let's chat!</h2>
          <p className="footer-description">
            These are a few words from clients I've worked with—highlighting my commitment to quality, user-centered
            design, and reliable development. Their feedback reflects the value I bring to every project.
          </p>
          <button className="footer-button">LET'S WORK TOGETHER</button>
        </div>

        <div className="footer-right">
          <div className="freelancer-card">
            {/* Placeholder for Freelancer logo */}
            <img src={free} alt="Freelancer Logo" className="freelancer-logo" />
            <div className="freelancer-text">
              <span className="freelancer-title">Freelancer</span>
              <span className="freelancer-handle">@Luckysen</span>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              {/* Email Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span>senlucky2005@gmail.com</span>
            </div>
            <div className="contact-item">
              {/* Location Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                <path d="M12 18.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                <path d="M12 22v-4"></path>
                <path d="M12 6V2"></path>
                <path d="M18.3 12h-4"></path>
                <path d="M5.7 12h-4"></path>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z"></path>
              </svg>
              <span>Madhya Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>
     
       <footer className="footer-section2">
                    <div className="footer-container2">
                        {/* Copyright Information */}
                        <p className="copyright-text">
                            &copy; Copyright <span className="bold">Lucky Sen</span> All Rights Reserved
                        </p>

                        {/* Social Media Icons */}
                        <div className="social-icons-container">

  <a 
    href="https://github.com/Eng-Lucky-Sen"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon-link"
  >
    <i className="fab fa-github"></i>
  </a>

  <a 
    href="https://www.instagram.com/jugadu.coder/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon-link"
  >
    <i className="fab fa-instagram"></i>
  </a>

<a 
  href="https://www.linkedin.com/in/lucky-sen-1369272b1/"  
  target="_blank" 
  rel="noopener noreferrer" 
  className="social-icon-link"
>
  <i className="fab fa-linkedin-in"></i>
</a>

</div>

                        {/* Design Credits */}
                        <p className="credits-text">
                          Designed by <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lucky-sen-1369272b1/">Lucky Sen</a>. Created with Figma.
                        </p>
                    </div>
                </footer>
    </footer>
  );
};



export default Footer;
