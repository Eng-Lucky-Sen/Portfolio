// WorkProcess.jsx
import React, { useEffect, useRef } from 'react';
import './WorkProcess.css';

const WorkProcess = () => {
  const sectionRef = useRef(null);

  const workProcessSteps = [
    {
      title: "Introduction",
      description: "Understanding project goals, gathering detailed requirements, defining scope, setting expectations, and aligning vision between client and developer for smooth execution.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-lightbulb" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
          <path d="M9 18h6"/>
          <path d="M10 22h4"/>
          <path d="M11 17v5"/>
          <path d="M13 17v5"/>
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      description: "Creating wireframes, prototypes, and mockups that ensure intuitive user experience, visual consistency, and accessibility across all devices and screen sizes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-brush" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m9.06 11.94-2.12 2.12c-.81.81-1.14 1.9-.92 3.01A6 6 0 0 0 16.01 16.9c1.11-.22 2.1-.55 3.01-.92l2.12-2.12c1.24-1.23 1.24-3.24 0-4.47l-4.47-4.47c-1.23-1.24-3.24-1.24-4.47 0Z"/>
          <path d="M19 14v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"/>
        </svg>
      )
    },
    {
      title: "Develop",
      description: "Writing clean frontend and backend code, integrating APIs, building responsive layouts, managing data flow, and ensuring scalability across browsers and platforms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-code" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    },
    {
      title: "Deployment",
      description: "Conducting final tests, fixing bugs, optimizing performance, configuring servers, pushing code live, and monitoring post-launch to ensure everything runs smoothly.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-package" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m7.5 4.27 9 5.14"/>
          <path d="M2.8 9.1a2 2 0 0 0 0 3.8l1.6.9a2 2 0 0 1 0 3.8l-1.6.9a2 2 0 0 0 0 3.8l1.85 1.1a2 2 0 0 0 2.17 0L12 21.8l3.18-1.9a2 2 0 0 0 2.17 0l1.85-1.1a2 2 0 0 0 0-3.8l-1.6-.9a2 2 0 0 1 0-3.8l1.6-.9a2 2 0 0 0 0-3.8l-1.85-1.1a2 2 0 0 0-2.17 0L12 2.2l-3.18 1.9a2 2 0 0 0-2.17 0Z"/>
          <path d="M12 12v10"/>
          <path d="m17.5 10.27-9 5.14"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    const elements = sectionRef.current.querySelectorAll('.work-process-step, .line, .work-process-heading, .work-process-intro-text');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="work-process-section" ref={sectionRef}>
      <h2 className="work-process-heading animate-up" style={{ "--delay": "0s" }}>My work process</h2>
      <div className="line animate-up" style={{ "--delay": "0.1s" }}></div>

      <p className="work-process-intro-text animate-up" style={{ "--delay": "0.2s" }}>
        I follow a structured workflow from planning and designing to development and deployment.
        Every step ensures clarity, quality, and performance in the final product.
      </p>

      <div className="work-process-grid">
        {workProcessSteps.map((step, i) => (
          <div
            key={i}
            className="work-process-step"
            style={{ "--delay": `${0.3 + i * 0.15}s` }}
          >
            <div className="step-header">
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-number">{String(i + 1).padStart(2, '0')}</h3>
            </div>
            <h4 className="step-title">{step.title}</h4>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
