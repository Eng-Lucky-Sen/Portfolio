import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaLinkedin,
  FaGithub,
  FaBars,
  FaInstagram
} from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
   
    { path: '/', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/achievements', label: 'Achievementss' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Hamburger */}
        <button className="hamburger" onClick={toggleMenu}>
          <FaBars size={20} />
        </button>

        {/* Nav */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active-link' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Branding */}
        <div className="branding">
          <h1>Lucky The Designer</h1>
          <p>UI/UX Designer & Web Developer</p>
        </div>

        {/* Social */}
        <div className="social-icons">
          <a href="https://www.instagram.com/jugadu.coder/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={18} />
          </a>
          <a href="https://www.linkedin.com/in/lucky-sen-1369272b1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={18} />
          </a>
          <a href="https://github.com/Eng-Lucky-Sen" target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} />
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;