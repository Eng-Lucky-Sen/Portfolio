import React from 'react';
import './CallToAction.css'
const CallToAction = () => {
  return (
 <section className="cta-section">
  <div className="cta-left-bg">
    <div className="cta-circle-container">
      <h2 className="cta-circle-heading">
        Do you need a designer<br />request a quote!
      </h2>
      <p className="cta-circle-text">
        Looking to build a stunning and user-friendly app? I specialize in mobile and web app design, creating intuitive interfaces that engage users and bring your product to life.
      </p>
      <p className="cta-circle-text-small">
        Let’s work together to turn your idea into a fully designed experience.
      </p>
      <a href="mailto:contact@dummy.com" className="cta-email">Senlucky2005@gmail.com</a>
    </div>
  </div>

  <div className="cta-right-bg">
    <div className="cta-right-content">
      <div className="cta-tags">
        <span className="cta-tag">UI/UX Designer</span>
        <span className="cta-tag">Web developer</span>
        <span className="cta-tag">Freelancer</span>
      </div>
      <h3 className="cta-right-heading">
        I’m a passionate designer &<br /> web developer with a keen eye for detail.
      </h3>
      <p className="cta-right-description">
        I design and build seamless web experiences that combine aesthetics with performance. From pixel-perfect UIs to responsive layouts and smooth interactivity, I deliver web solutions that engage users and meet business goals.
      </p>
      <button className="cta-button">LET’S WORK TOGETHER</button>
    </div>
  </div>
</section>

  );
};


export default CallToAction;
