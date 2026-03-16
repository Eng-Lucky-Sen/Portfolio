// components/services/WebDevelopmentDetail.jsx
import React from 'react';
import './WebDevelopmentDetail.css'; // Import external CSS

const WebDevelopmentDetail = () => (
  <div className="webdev-container">
    <h1 className="webdev-heading">Web Development</h1>

    <p className="webdev-paragraph">
      We develop fast, scalable, and modern web applications using the latest web 
      technologies including React, Next.js, Node.js, and more.
    </p>

    <h2 className="webdev-subheading">Our Stack</h2>
    <ul className="webdev-list">
      <li>Frontend: React, Tailwind CSS</li>
      <li>Backend: Node.js, Express</li>
      <li>Deployment: Vercel, Netlify, AWS</li>
    </ul>
  </div>
);

export default WebDevelopmentDetail;
