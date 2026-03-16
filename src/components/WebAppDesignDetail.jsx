// components/services/WebAppDesignDetail.jsx
import React from 'react';
import './WebAppDesignDetail.css'; // Importing external CSS

const WebAppDesignDetail = () => (
  <div className="webapp-container">
    <h1 className="webapp-heading">Web App Design Services</h1>

    <p className="webapp-paragraph">
      We build responsive, scalable web applications that offer seamless experiences 
      across devices using modern frameworks and design systems.
    </p>

    <h2 className="webapp-subheading">What We Do</h2>
    <ul className="webapp-list">
      <li>Responsive UI Architecture</li>
      <li>Design Systems & Component Libraries</li>
      <li>Performance Optimization</li>
    </ul>
  </div>
);

export default WebAppDesignDetail;
