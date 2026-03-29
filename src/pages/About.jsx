import React, { useState, useEffect } from "react";
import "./About.css";
import luckyImage from "../assets/lucky.png";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const info = [
    { label: "Birthday", value: "25 August 2005" },
    { label: "Website", value: "www.luckysen.dev" },
    { label: "Phone", value: "+91 7773891415" },
    { label: "City", value: "MP, India" },
    { label: "Age", value: "19" },
    { label: "Degree", value: "B.Tech — 3rd Year" },
    { label: "Email", value: "senlucky2005@gmail.com" },
    { label: "Freelance", value: "Available ✦" },
  ];

  return (
    <section className={`about-section${visible ? " about-visible" : ""}`}>
      {/* ── Ambient blobs ── */}
      <div className="about-blob blob-1" />
      <div className="about-blob blob-2" />
      <div className="about-blob blob-3" />

      {/* ── Header ── */}
      <div className="about-header">
        <span className="about-eyebrow">Who I am</span>
        <h2 className="about-title">
          About <em>Me</em>
        </h2>
        <div className="about-title-line" />
        <p className="about-subtitle">
          A passionate developer dedicated to building impactful and
          user-friendly digital experiences.
        </p>
      </div>

      {/* ── Main layout ── */}
      <div className="about-container">
        {/* ── Left: Photo ── */}
        <div className="about-image-col">
          <div className="about-image-wrap">
            <img src={luckyImage} alt="Lucky Sen" className="about-photo" />
            {/* Floating badge */}
            <div className="about-badge">
              <span className="badge-dot" />
              Open to work
            </div>
            {/* Decorative corner frame */}
            <div className="about-frame-tl" />
            <div className="about-frame-br" />
          </div>

          {/* Quick stat pills */}
        </div>

        {/* ── Right: Content ── */}
        <div className="about-content">
          {/* Animated role tags */}
          <div className="about-roles-row">
            <span className="role-tag role-tag-orange">UI/UX Designer</span>
            <span className="role-divider">·</span>
            <span className="role-tag role-tag-purple">Web Developer</span>
            <span className="role-divider">·</span>
            <span className="role-tag role-tag-green">Data Scientist</span>
          </div>

          <h3 className="about-role">
            Building interfaces,
            <br />
            <em>decoding data.</em>
          </h3>

          <p className="about-description">
            I'm a detail-oriented 3rd-year engineering student with a strong
            passion for web technologies, clean design, data science, and
            user-focused development.
          </p>

          {/* Info grid */}
          <div className="about-info-grid">
            {info.map((item) => (
              <div className="info-item" key={item.label}>
                <span className="info-label">{item.label}</span>
                <span className="info-value">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Paragraph */}
          <p className="about-paragraph">
            I'm currently focused on full-stack web development and data science
            — working with JavaScript, React, Node.js for the web, and Python,
            Pandas, TensorFlow for building intelligent data-driven solutions. I
            enjoy solving real-world problems through code, designing clean
            interfaces, and uncovering insights from complex datasets. I'm open
            to freelance work, collaborations, and internship opportunities to
            grow professionally and contribute to meaningful projects.
          </p>

          {/* ── CTA Buttons ── */}
          <div className="about-actions">
            <a
              href="/lucky-cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-view"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View CV
            </a>

            <a
              href="/lucky-cv.pdf"
              download="LuckySen_CV.pdf"
              className="btn-download"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default About;
