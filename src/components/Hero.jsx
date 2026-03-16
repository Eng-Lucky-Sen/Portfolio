import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import './Hero.css';
import luckyImage from '../assets/lucky.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <p className="hero-heading">
         <Typewriter
          words={["Hey, I’m Lucky Sen."]}
          loop={1} // 0 means infinite
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />

        </p>
        <p className="hero-subheading">

         <Typewriter
          words={[ "UI/UX Designer & Web Developer"]}
          loop={0} // 0 means infinite
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        </p>
        <p className="hero-subheading">based in Indore, India</p>
        
        <div className='PP'>
        <div className="hero-button">
          <p>Scroll down </p>
          <div>↓</div>
        </div>
        </div>

       <div className="main-content-grid">
            <div className="hero-image-wrapper">
                <div className="hero-image-container">
                    <img src={luckyImage} alt="Lucky Sen" className="hero-image" />
                </div>
            </div>

            {/* Bio */}
            <div className="bio-left-column">
                <h3 className="bio-title">Biography</h3>
                <p className="bio-desc">
                    Aspiring Full Stack Developer and UI/UX Designer with hands-on experience in building responsive websites.
                    Seeking an internship to apply my skills, contribute to real projects, and grow in modern web development.
                </p>
                <h4 className="bio-subtitle">My Services</h4>
                <ul className="bio-services">
                    <li>User Experience Design</li>
                    <li>Usability Improvements</li>
                    <li>Information Architecture</li>
                </ul>
                <h4 className="bio-subtitle">My Location</h4>
                <p className="bio-location">Indore, Madhya Pradesh, India</p>
            </div>

            {/* Right column: Experience & Clients */}
            <div className="bio-right-column">
                {/* Experience */}
                <div className="experience-section">
                    <h3 className="stat-number">2+ <i className="fa fa-layer-group"></i></h3>
                    <p className="stat-label">Years of Experience</p>
                    <h3 className="stat-number">20+ <i className="fas fa-shopping-bag"></i></h3>
                    <p className="stat-label">Completed Projects</p>
                    <h3 className="stat-number">15+ <i className="fas fa-smile"></i></h3>
                    <p className="stat-label">Happy Clients</p>
                </div>

                
            </div>
        </div>
            {/* Clients */}
                <div className="clients-section">
                    <h4 className="bio-subtitle">My clients all over the world</h4>
                    <div className="clients-logos">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="Spotify" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
                    </div>
                </div>
      </div>
    </section>
  );
};

export default Hero;
