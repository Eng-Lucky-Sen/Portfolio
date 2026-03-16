import React, { useEffect, useRef } from 'react';
import './Cservices.css';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceRefs = useRef([]);

  const services = [
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user experiences through clean interfaces, wireframes, and user flows tailored to your audience.",
       link: "/services/ui-ux-design",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-1.6-1.6a1 1 0 0 0-1.4 0l-3.77 3.77a6 6 0 0 1 7.94-7.94l1.6 1.6a1 1 0 0 0 0-1.4l-3.77-3.77a6 6 0 0 0-7.94 7.94l1.6 1.6a1 1 0 0 0 0 1.4l-3.77 3.77a6 6 0 0 1 7.94-7.94l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 0-7.94-7.94l-1.6 1.6a1 1 0 0 0 0-1.4Z"></path>
        </svg>
      )
    },
    {
      title: "Web App Design",
      description: "Designing responsive, modern, and scalable web applications that ensure seamless interaction across all devices.",
       link: "/services/web-app-design",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor">
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <path d="M12 17v4"></path>
          <path d="M8 21h8"></path>
        </svg>
      )
    },
    {
      title: "Web Development",
      description: "Developing high-performance websites and web apps using the latest technologies to deliver fast, responsive, and reliable digital experiences.",
       link: "/services/web-development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    }
  ];


  return (
    <section className="my-services-section">
      <div className="my-services-container">
        <h2 className="my-services-heading animated-item"style={{ "--delay": "0s" }}>My services</h2>
        <div className="line"></div>
        <p className="my-services-intro animated-item" style={{ "--delay": "0.1s" }}>
          I specialize in UI/UX design and web development, crafting intuitive interfaces and responsive web apps.
          From wireframes to clean code, I turn ideas into seamless digital experiences.
        </p>

        <div className="my-services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item"
               style={{ "--delay": `${index * 0.15}s` }}
              ref={(el) => (serviceRefs.current[index] = el)}
            >
              <div className="service-icon-container">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link 
        to={service.link} className="read-more-link">READ MORE →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
