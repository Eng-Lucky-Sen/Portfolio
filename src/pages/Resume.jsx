// import React from 'react';
// import './Resume.css';

// const Resume = () => {
//   return (
//     <section className="resume-section">
//       <div className="container">
//         <h2 className="section-title animated-item" style={{ "--delay": "0s" }}>Resume</h2>
//         <div className="line animate-up animate-delay-2 animated-item" style={{ "--delay": "0.1s" }}></div>

//         <p className="section-subtitle animated-item" style={{ "--delay": "0.2s" }}>
//           Enthusiastic frontend developer skilled in ReactJS, HTML, CSS, and JavaScript. Seeking a work-from-home internship to contribute to scalable and responsive web applications while gaining hands-on experience in collaborative development and modern web technologies.
//         </p>

//         <div className="resume-content">
//           <div className="left-column">
//             {/* Summary Section */}
//             <div className="resume-block summary-block animated-item" style={{ "--delay": "0.3s" }}>
//               <h3>Summary</h3>
//               <div className="resume-item">
//                 <h4 className="resume-item-title">Lucky Sen</h4>
//                 <p>
//                   Frontend Developer | Engineering Student<br />
//                   <strong>Email:</strong> senlucky2005@gmail.com<br />
//                   <strong>Phone:</strong> 7737891415<br />
//                   <strong>GitHub:</strong> <a href="https://github.com/Eng-Lucky-Sen" target="_blank">github.com/Eng-Lucky-Sen</a><br />
//                   <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/lucky-sen-1369272b1" target="_blank">linkedin.com/in/lucky-sen-1369272b1</a><br />
//                   <strong>Figma:</strong> <a href="https://www.figma.com/file/1385189556609794315" target="_blank">figma.com/file/1385189556609794315</a>
//                 </p>
//               </div>
//             </div>

//             {/* Skills Section */}
//             <div className="resume-block skills-block animated-item" style={{ "--delay": "0.45s" }}>
//               <h3>Skills</h3>
//               <div className="resume-item">
//                 <ul>
//                   <li><strong>Languages:</strong> HTML, CSS, JavaScript</li>
//                   <li><strong>Frameworks/Libraries:</strong> ReactJS, Tailwind CSS, Bootstrap</li>
//                   <li><strong>Tools:</strong> Git, GitHub</li>
//                   <li><strong>Other:</strong> REST APIs, JSON, Responsive Design, Debugging</li>
//                 </ul>
//               </div>
//             </div>

//             {/* Education Section */}
//             <div className="resume-block education-block animated-item" style={{ "--delay": "0.6s" }}>
//               <h3>Education</h3>
//               <div className="resume-item">
//                 <p><strong>B.Tech in Computer Science Engineering</strong><br />Medi-Caps University, Indore</p>
//                 <p><strong>Current Semester:</strong> 3rd</p>
//               </div>
//             </div>
//           </div>

//           <div className="right-column">
//             {/* Projects Section */}
//             <div className="resume-block experience-block animated-item" style={{ "--delay": "0.75s" }}>
//               <h3>Projects</h3>

//               <div className="resume-item animated-item" style={{ "--delay": "0.9s" }}>
//                 <h4 className="resume-item-title">E-Commerce Website</h4>
//                 <ul>
//                   <li>ReactJS, JavaScript, Tailwind CSS</li>
//                   <li>Designed and developed a modern, responsive e-commerce website with product listing, filtering, and cart functionality.</li>
//                   <li>Integrated mock APIs for dynamic product handling and state management.</li>
//                 </ul>
//               </div>

//               <div className="resume-item animated-item" style={{ "--delay": "1.05s" }}>
//                 <h4 className="resume-item-title">Tour & Travel Booking Platform</h4>
//                 <ul>
//                   <li>ReactJS, CSS, JavaScript</li>
//                   <li>Created a user-friendly travel booking web app allowing users to explore and book trips.</li>
//                   <li>Implemented responsive layouts, booking forms, and destination-based filters.</li>
//                 </ul>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resume;

import React, { useState } from "react";

const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Instrument+Sans:wght@300;400;500&display=swap');
  `}</style>
);

/* ─── SKILL DATA ─── */
const categories = [
  {
    id: "languages",
    label: "Languages",
    accent: "#B85C38",
    soft: "#FDF0EA",
    border: "#F2CBBA",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  },
  {
    id: "datascience",
    label: "Data Science & AI",
    accent: "#2D6A4F",
    soft: "#EAF4EF",
    border: "#B7DAC9",
    skills: [
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "Matplotlib", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
      { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    accent: "#4A3F8C",
    soft: "#EEEAF8",
    border: "#C5BCEB",
    skills: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Database",
    accent: "#7A4419",
    soft: "#FBF0E7",
    border: "#E8C9A8",
    skills: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    accent: "#1A5F7A",
    soft: "#E8F4F8",
    border: "#A8D4E2",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ],
  },
];

/* ─── GLOBAL STYLES ─── */
const G = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes barGrow {
      from { width: 0%; }
      to   { width: var(--w); }
    }
    @keyframes popIn {
      from { opacity: 0; transform: scale(0.88); }
      to   { opacity: 1; transform: scale(1); }
    }

    .skill-card {
      background: #fff;
      border-radius: 14px;
      padding: 18px 16px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      border: 1px solid #efefef;
      cursor: default;
      transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                  box-shadow 0.35s cubic-bezier(0.22,1,0.36,1),
                  border-color 0.25s;
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .skill-card:hover {
      transform: translateY(-6px) scale(1.03);
      box-shadow: 0 20px 48px rgba(0,0,0,0.10);
    }

    .cat-tab {
      font-family: 'Instrument Sans', sans-serif;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 9px 20px;
      border-radius: 30px;
      border: 1.5px solid #e8e8e8;
      background: #fff;
      cursor: pointer;
      transition: all 0.22s ease;
      white-space: nowrap;
      color: #aaa;
    }
    .cat-tab:hover { border-color: #ccc; color: #666; }
    .cat-tab.active {
      color: #fff !important;
      border-color: transparent !important;
    }

    .bar-track {
      width: 100%;
      height: 4px;
      background: #f0f0f0;
      border-radius: 2px;
      overflow: hidden;
    }
    .bar-fill {
      height: 100%;
      border-radius: 2px;
      animation: barGrow 0.8s cubic-bezier(0.22,1,0.36,1) both;
    }

    ::-webkit-scrollbar { height: 4px; width: 4px; }
    ::-webkit-scrollbar-track { background: #fafafa; }
    ::-webkit-scrollbar-thumb { background: #e0e0e0; border-radius: 2px; }
  `}</style>
);

/* ─── DECO BLOB ─── */
function Blob({ size, x, y, color }) {
  return (
    <div style={{
      position: "absolute", width: size, height: size,
      borderRadius: "50%", background: color,
      opacity: 0.06, left: x, top: y,
      pointerEvents: "none", filter: "blur(70px)", zIndex: 0,
    }} />
  );
}

/* ─── SKILL CARD ─── */
function SkillCard({ skill, accent, soft, border, delay }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="skill-card"
      style={{
        animation: `popIn 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}s both`,
        "--hover-border": border,
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = border}
      onMouseLeave={e => e.currentTarget.style.borderColor = "#efefef"}
    >
      {/* Logo */}
      <div style={{
        width: 52, height: 52,
        background: soft,
        borderRadius: 12,
        display: "flex", alignItems: "center", justifyContent: "center",
        border: `1px solid ${border}`,
        flexShrink: 0,
        overflow: "hidden",
      }}>
        <img
          src={skill.logo}
          alt={skill.name}
          onLoad={() => setLoaded(true)}
          style={{
            width: 32, height: 32,
            objectFit: "contain",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />
      </div>

      {/* Name */}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 14,
        fontWeight: 400,
        color: "#1a1a1a",
        textAlign: "center",
        lineHeight: 1.2,
      }}>{skill.name}</div>

     

      {/* Bar */}
      
    </div>
  );
}

/* ─── SECTION ─── */
function CategorySection({ cat }) {
  return (
    <div style={{
      animation: "fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) both",
      marginBottom: 56,
    }}>
      {/* Section header */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: cat.accent, flexShrink: 0 }} />
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 26,
          fontWeight: 400,
          color: "#1a1a1a",
        }}>{cat.label}</h2>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #e8e8e8, transparent)" }} />
        <span style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 10,
          color: cat.accent,
          background: cat.soft,
          padding: "4px 10px",
          borderRadius: 20,
          border: `1px solid ${cat.border}`,
          letterSpacing: "0.1em",
        }}>{cat.skills.length} skills</span>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
        gap: 14,
      }}>
        {cat.skills.map((s, i) => (
          <SkillCard
            key={s.name}
            skill={s}
            accent={cat.accent}
            soft={cat.soft}
            border={cat.border}
            delay={i * 0.06}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const displayed = activeTab === "all"
    ? categories
    : categories.filter(c => c.id === activeTab);

  const totalSkills = categories.reduce((a, c) => a + c.skills.length, 0);

  return (
    <>
      <FontLink />
      <G />
      <div style={{
        minHeight: "100vh",
        background: "#FAF9F6",
        padding: "0 48px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Instrument Sans', sans-serif",
      }}>
        {/* Blobs */}
        <Blob size={500} x="-100px" y="-80px" color="#B85C38" />
        <Blob size={400} x="65%" y="5%" color="#4A3F8C" />
        <Blob size={350} x="15%" y="60%" color="#2D6A4F" />

     

        {/* ── Tabs ── */}
        <div style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          padding: "40px 0 36px",
          position: "relative",
          zIndex: 1,
          animation: "fadeUp 0.7s 0.2s both",
        }}>
          {/* All tab */}
          <button
            className={`cat-tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
            style={activeTab === "all" ? {
              background: "#1a1a1a",
              color: "#fff",
              borderColor: "transparent",
            } : {}}
          >All</button>

          {categories.map(cat => (
            <button
              key={cat.id}
              className={`cat-tab ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
              style={activeTab === cat.id ? {
                background: cat.accent,
                color: "#fff",
                borderColor: "transparent",
              } : {}}
            >{cat.label}</button>
          ))}
        </div>

        {/* ── Skills ── */}
        <div style={{ position: "relative", zIndex: 1, paddingBottom: 80 }}>
          {displayed.map(cat => (
            <CategorySection key={cat.id} cat={cat} />
          ))}
        </div>

        {/* Footer */}
        <footer style={{
          borderTop: "1px solid #ebebeb",
          padding: "28px 0",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 10,
          color: "#ccc",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          position: "relative",
          zIndex: 1,
        }}>
          <span>Skills · {new Date().getFullYear()}</span>
          <span>Always learning</span>
        </footer>
      </div>
    </>
  );
}
