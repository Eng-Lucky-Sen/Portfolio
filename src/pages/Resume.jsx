import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="container">
        <h2 className="section-title animated-item" style={{ "--delay": "0s" }}>Resume</h2>
        <div className="line animate-up animate-delay-2 animated-item" style={{ "--delay": "0.1s" }}></div>

        <p className="section-subtitle animated-item" style={{ "--delay": "0.2s" }}>
          Enthusiastic frontend developer skilled in ReactJS, HTML, CSS, and JavaScript. Seeking a work-from-home internship to contribute to scalable and responsive web applications while gaining hands-on experience in collaborative development and modern web technologies.
        </p>

        <div className="resume-content">
          <div className="left-column">
            {/* Summary Section */}
            <div className="resume-block summary-block animated-item" style={{ "--delay": "0.3s" }}>
              <h3>Summary</h3>
              <div className="resume-item">
                <h4 className="resume-item-title">Lucky Sen</h4>
                <p>
                  Frontend Developer | Engineering Student<br />
                  <strong>Email:</strong> senlucky2005@gmail.com<br />
                  <strong>Phone:</strong> 7737891415<br />
                  <strong>GitHub:</strong> <a href="https://github.com/Eng-Lucky-Sen" target="_blank">github.com/Eng-Lucky-Sen</a><br />
                  <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/lucky-sen-1369272b1" target="_blank">linkedin.com/in/lucky-sen-1369272b1</a><br />
                  <strong>Figma:</strong> <a href="https://www.figma.com/file/1385189556609794315" target="_blank">figma.com/file/1385189556609794315</a>
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="resume-block skills-block animated-item" style={{ "--delay": "0.45s" }}>
              <h3>Skills</h3>
              <div className="resume-item">
                <ul>
                  <li><strong>Languages:</strong> HTML, CSS, JavaScript</li>
                  <li><strong>Frameworks/Libraries:</strong> ReactJS, Tailwind CSS, Bootstrap</li>
                  <li><strong>Tools:</strong> Git, GitHub</li>
                  <li><strong>Other:</strong> REST APIs, JSON, Responsive Design, Debugging</li>
                </ul>
              </div>
            </div>

            {/* Education Section */}
            <div className="resume-block education-block animated-item" style={{ "--delay": "0.6s" }}>
              <h3>Education</h3>
              <div className="resume-item">
                <p><strong>B.Tech in Computer Science Engineering</strong><br />Medi-Caps University, Indore</p>
                <p><strong>Current Semester:</strong> 3rd</p>
              </div>
            </div>
          </div>

          <div className="right-column">
            {/* Projects Section */}
            <div className="resume-block experience-block animated-item" style={{ "--delay": "0.75s" }}>
              <h3>Projects</h3>

              <div className="resume-item animated-item" style={{ "--delay": "0.9s" }}>
                <h4 className="resume-item-title">E-Commerce Website</h4>
                <ul>
                  <li>ReactJS, JavaScript, Tailwind CSS</li>
                  <li>Designed and developed a modern, responsive e-commerce website with product listing, filtering, and cart functionality.</li>
                  <li>Integrated mock APIs for dynamic product handling and state management.</li>
                </ul>
              </div>

              <div className="resume-item animated-item" style={{ "--delay": "1.05s" }}>
                <h4 className="resume-item-title">Tour & Travel Booking Platform</h4>
                <ul>
                  <li>ReactJS, CSS, JavaScript</li>
                  <li>Created a user-friendly travel booking web app allowing users to explore and book trips.</li>
                  <li>Implemented responsive layouts, booking forms, and destination-based filters.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
