import React, { useEffect, useState } from 'react';
import './CaseStudy.css';

import DualImage from '../assets/Dual.jpg';
import CarImage from '../assets/car.jpg';
import OlaImage from '../assets/ola.jpg';
import NikeImage from '../assets/nike.jpg';
import WebImage from '../assets/web.jpg';
import MLogoImage from '../assets/mm.PNG';

const CaseStudy = () => {
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    setTimeout(() => setStartAnim(true), 800);
  }, []);

  const projects = [
    { title: "DUAL SENSE Wireless Controller", image: DualImage },
    { title: "CURVV", image: CarImage },
    { title: "OLA - LET'S RIDE THE FUTURE", image: OlaImage },
    { title: "AIR MIX - NIKE AIRMAX", image: NikeImage },
    { title: "Design System", image: WebImage },
    { title: "M Logo Design", image: MLogoImage }
  ];

  return (
    <section className="case-study-section">
      <div className="case-study-container">
        <h2 className="case-study-heading">Recent case study</h2>
        <div className="line"></div>
        <p className="case-study-description">
          Designed and developed a stunning mobile and web app with intuitive UI/UX.
        </p>

        <div className="case-study-grid">
          {projects.map((project, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;

            // final grid position
            const x = (col - 1) * 320; // center = 0, left = -320, right = +320
            const y = row * 260;

            return (
              <div
                key={index}
                className="case-study-item"
                style={{
                  transform: startAnim
                    ? `translate(${x}px, ${y}px)`
                    : `translate(0px, 0px) scale(0.8)`,
                  transition: `all 0.8s ease ${index * 0.2}s`
                }}
              >
                <img src={project.image} alt="" className="case-study-image" />
                <div className="case-study-info">
                  <h3>{project.title}</h3>
                  <p>UI/UX Design</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;