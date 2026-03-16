import React from "react";
import Testimonials from '../components/Testimonials'
import "./About.css";
import luckyImage from '../assets/lucky.png';
import SkillsSection from "../components/SkillsSection";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About</h2>
      <div className="line"></div>

      <p className="about-subtitle">
        A passionate developer dedicated to building impactful and user-friendly digital experiences.
      </p>

      <div className="about-container">
        <div className="about-image">
          <img src={luckyImage} alt="Profile" />
        </div>

        <div className="about-content">
          <h3 className="about-role">UI/UX Designer & Web Developer.</h3>
          <p className="about-description">
            <em>
              I’m a detail-oriented 3rd-year engineering student with a strong passion for web technologies, clean design, and user-focused development.
            </em>
          </p>

          <div className="about-info-grid">
            <ul>
              <li><strong>Birthday:</strong> 25 August 2005</li>
              <li><strong>Website:</strong> www.luckysen.dev</li>
              <li><strong>Phone:</strong> +91 7773891415</li>
              <li><strong>City:</strong> MP, INDIA</li> {/* You can update city if needed */}
            </ul>
            <ul>
              <li><strong>Age:</strong> 19</li>
              <li><strong>Degree:</strong> B.Tech (3rd Year)</li>
              <li><strong>Email:</strong> senlucky2005@gmail.com</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>

          <p className="about-paragraph">
            I'm currently focused on full-stack web development, particularly in JavaScript, React, Node.js, and UI/UX design. 
            I enjoy solving real-world problems through code, optimizing user interfaces, and building scalable and maintainable web applications. 
            I’m open to freelance work, collaborations, and internship opportunities to grow professionally and contribute to meaningful projects.
          </p>
        </div>
      </div>

      <SkillsSection />
      <Testimonials/>
    </section>
  );
};

export default About;
