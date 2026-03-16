import React, { useEffect, useState } from "react";
import "./SkillsSection.css";

const skills = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 90 },
  { name: "JAVASCRIPT", level: 50 },
  { name: "REACT", level: 80 },
  { name: "EXPRESS", level: 90 },
  { name: "NODE", level: 55 },
];

const SkillsSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Delay animation until component is mounted
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300); // matches section delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-underline"></div>
      <p className="skills-subtitle">
        Skills developed through experience and dedication
      </p>
      <div className="skills-container">
        <div className="skills-column">
          {skills.slice(0, 3).map((skill, index) => (
            <SkillBar key={index} skill={skill} animate={animate} />
          ))}
        </div>
        <div className="skills-column">
          {skills.slice(3).map((skill, index) => (
            <SkillBar key={index} skill={skill} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ skill, animate }) => {
  return (
    <div className="skill-bar">
      <div className="skill-header">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="bar-bg">
        <div
          className="bar-fill"
          style={{ width: animate ? `${skill.level}%` : 0 }}
        ></div>
      </div>
    </div>
  );
};

export default SkillsSection;
