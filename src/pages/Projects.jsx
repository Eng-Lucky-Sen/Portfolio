import React from "react";
import CaseStudy from "../components/CaseStudy.jsx";
import Web from "../components/Web.jsx";
import './Project.css'
const Projects = () => {
  return (
    <>
      <style>{`
        .projects-container {
          padding: 60px 20px;
          max-width: 1200px;
          margin: auto;
          overflow-x: hidden;
        }

        .project-section {
          margin-bottom: 80px;
        }

        .project-title {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #111;
          position: relative;
          display: inline-block;
        }

        .project-title::after {
          content: "";
          display: block;
          width: 50%;
          height: 3px;
          background: black;
          margin-top: 6px;
        }

        .project-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 30px;
        }

        @media (max-width: 768px) {
          .project-title {
            font-size: 24px;
          }

          .projects-container {
            padding: 40px 15px;
          }
        }
      `}</style>

      <div className="projects-container">
        
        {/* UI/UX Section */}
        <section className="project-section">
          <h2 className="project-title">UI/UX Design Projects</h2>
          <p className="project-subtitle">
            A collection of user-focused designs showcasing creativity and usability.
          </p>
          <CaseStudy />
        </section>

        {/* Web Dev Section */}
        <section className="project-section">
          <h2 className="project-title">Web Development Projects</h2>
          <p className="project-subtitle">
            Real-world applications built using modern web technologies.
          </p>
          <Web />
        </section>

      </div>
    </>
  );
};

export default Projects;