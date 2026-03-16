import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaDribbble, FaBehance, FaLinkedin, FaGithub, FaBars, FaInstagram } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/resumeluky', label: 'Resume' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">
        <button className="hamburger" onClick={toggleMenu}>
          <FaBars size={20} />
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active-link' : ''}
              onClick={() => setIsMenuOpen(false)} // Close menu after click
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="branding">
          <h1>Lucky The Designer</h1>
          <p>UI/UX Designer & Web Developer</p>
        </div>

      <div className="social-icons">
  <a href="https://www.instagram.com/jugadu.coder/" target="_blank" rel="noopener noreferrer"><FaInstagram size={18} /></a>
  <a href="https://www.linkedin.com/in/lucky-sen-1369272b1/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={18} /></a>
  <a href="https://github.com/Eng-Lucky-Sen" target="_blank" rel="noopener noreferrer"><FaGithub size={18} /></a>
</div>

      </div>
    </header>
  );
};

export default Header;
