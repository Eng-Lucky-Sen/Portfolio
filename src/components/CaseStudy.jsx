import React from 'react';
import './CaseStudy.css';

// Importing images
import DualImage from '../assets/Dual.jpg';
import CarImage from '../assets/car.jpg';
import OlaImage from '../assets/ola.jpg';
import NikeImage from '../assets/nike.jpg';
import WebImage from '../assets/web.jpg';
import MLogoImage from '../assets/mm.PNG';

const CaseStudy = () => {
  const projects = [
    {
      title: "DUAL SENSE Wireless Controller",
      description: "UI/UX Design",
      image: DualImage,
      alt: "Dual Sense Wireless Controller"
    },
    {
      title: "CURVV ",
      description: "UI/UX Design",
      image: CarImage,
      alt: "Machine Learning with Python book"
    },
    {
      title: "OLA - LET'S RIDE THE FUTURE",
      description: "UI/UX Design",
      image: OlaImage,
      alt: "OLA App"
    },
    {
      title: "AIR MIX - NIKE AIRMAX",
      description: "UI/UX Design",
      image: NikeImage,
      alt: "Nike Airmax shoes"
    },
    {
      title: "Design System",
      description: "UI/UX Design",
      image: WebImage,
      alt: "Design System"
    },
    {
      title: "M Logo Design",
      description: "UI/UX Design",
      image: MLogoImage,
      alt: "M Logo Design"
    }
  ];

  return (
    <section className="case-study-section">
      <div className="case-study-container">
        <h2 className="case-study-heading animate-up animate-delay-1">Recent case study</h2>
        <div className="line animate-up animate-delay-2"></div>
        <p className="case-study-description">
          Designed and developed a stunning mobile and web app with intuitive UI/UX, clean responsive layouts, and smooth user journeys, boosting user retention by 30%.
        </p>
        <a href="#" className="case-study-project-link">Project</a>

        <div className="case-study-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="case-study-item"
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <img src={project.image} alt={project.alt} className="case-study-image" />
              <div className="case-study-info">
                <h3 className="case-study-item-title">{project.title}</h3>
                <p className="case-study-item-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
