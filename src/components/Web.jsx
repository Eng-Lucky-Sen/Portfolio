import React, { useState, useEffect, useRef } from "react";
import chatlog from "../assets/chatLog.png";
import chatMain from "../assets/chatMain.png";
import chatProfile from "../assets/chatProfile.png";
import elog from "../assets/elog.png";
import emain from "../assets/emain.png";
import ehome from "../assets/ehome.png";


const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Instrument+Sans:wght@300;400;500&display=swap');
  `}</style>
);

const projects = [
  {
    name: "E-Commerce App",
    num: "01",
    tag: "Fullstack",
    accent: "#B85C38",
    soft: "#FDF0EA",
    border: "#F2CBBA",
    description:
      "A full-stack e-commerce platform with authentication, cart, and payment integration. Built with React, Node.js, and Stripe.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    images: [
      ehome,
      elog,
      emain,
    ],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-ecommerce-live.com",
  },
  {
    name: "Chat Application",
    num: "02",
    tag: "Realtime",
      accent: "#B85C38",
    soft: "#FDF0EA",
    border: "#F2CBBA",
    description:
      "Real-time chat app using Socket.io with live messaging, read receipts, and push notifications.",
    tech: ["Socket.io", "React", "Redis", "PostgreSQL"],
    images: [
      chatlog,
    chatMain,
    chatProfile,
    ],
    github: "https://github.com/Eng-Lucky-Sen/ChatApp",
    live: "https://your-chat-live.com",
  },
 
];

const G = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes slideRight {
      from { transform: scaleX(0); }
      to   { transform: scaleX(1); }
    }

    .card {
      background: #fff;
      border-radius: 16px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.45s cubic-bezier(0.22,1,0.36,1),
                  box-shadow 0.45s cubic-bezier(0.22,1,0.36,1);
      box-shadow: 0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04);
    }
    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 24px 60px rgba(0,0,0,0.13), 0 4px 16px rgba(0,0,0,0.07);
    }
    .card-img img {
      transition: transform 0.55s cubic-bezier(0.22,1,0.36,1);
      display: block; width: 100%;
    }
    .card:hover .card-img img { transform: scale(1.06); }

    .thumb {
      cursor: pointer;
      border-radius: 8px;
      overflow: hidden;
      transition: opacity 0.2s, box-shadow 0.2s;
      opacity: 0.55;
    }
    .thumb:hover { opacity: 0.85; }
    .thumb.active { opacity: 1; }

    .pill {
      font-family: 'Instrument Sans', sans-serif;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 4px 11px;
      border-radius: 20px;
    }

    .chip {
      font-family: 'Instrument Sans', sans-serif;
      font-size: 10px;
      font-weight: 400;
      letter-spacing: 0.08em;
      padding: 4px 10px;
      border-radius: 5px;
    }

    .btn {
      font-family: 'Instrument Sans', sans-serif;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 13px 30px;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: all 0.25s ease;
      border: none;
    }
    .btn:hover { transform: translateY(-2px); }

    .nav-btn {
      font-family: 'Instrument Sans', sans-serif;
      font-size: 11px;
      font-weight: 400;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      padding: 10px 22px;
      border-radius: 6px;
      cursor: pointer;
      background: transparent;
      border: 1px solid #ddd;
      color: #888;
      transition: all 0.2s;
    }
    .nav-btn:hover { background: #f5f5f5; color: #444; }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #fafafa; }
    ::-webkit-scrollbar-thumb { background: #ddd; border-radius: 2px; }
  `}</style>
);

/* ── floating deco circle ── */
function DecoCircle({ size, x, y, color, opacity = 0.07 }) {
  return (
    <div style={{
      position: "absolute",
      width: size, height: size,
      borderRadius: "50%",
      background: color,
      opacity,
      left: x, top: y,
      pointerEvents: "none",
      filter: "blur(60px)",
    }} />
  );
}

/* ── divider line ── */
function Divider({ label, count }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 18,
      padding: "36px 0 28px",
      animation: "fadeIn 0.8s 0.3s both",
    }}>
      <span style={{
        fontFamily: "'Instrument Sans', sans-serif",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.22em",
        color: "#bbb",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #e8e8e8, transparent)" }} />
      <span style={{
        fontFamily: "'Instrument Sans', sans-serif",
        fontSize: 10,
        color: "#ccc",
        letterSpacing: "0.1em",
      }}>0{count}</span>
    </div>
  );
}

/* ── Project Card ── */
function ProjectCard({ project, index, onClick }) {
  return (
    <div
      className="card"
      onClick={() => onClick(index)}
      style={{ animation: `fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 0.13}s both` }}
    >
      {/* Image */}
      <div className="card-img" style={{ height: 200, background: project.soft, overflow: "hidden" }}>
        <img src={project.images[0]} alt={project.name}
          style={{ height: "100%", objectFit: "cover" }} />
      </div>

      {/* Accent strip */}
      <div style={{ height: 3, background: project.accent }} />

      {/* Body */}
      <div style={{ padding: "22px 24px 26px", background: "#fff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 11,
            fontWeight: 300,
            color: "#bbb",
            letterSpacing: "0.15em",
          }}>{project.num}</span>
          <span className="pill" style={{
            background: project.soft,
            color: project.accent,
            border: `1px solid ${project.border}`,
          }}>{project.tag}</span>
        </div>

        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 24,
          fontWeight: 400,
          color: "#1a1a1a",
          lineHeight: 1.2,
          marginBottom: 10,
        }}>{project.name}</h3>

        <p style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 12,
          lineHeight: 1.85,
          color: "#999",
          marginBottom: 18,
        }}>{project.description.slice(0, 82)}…</p>

        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
          {project.tech.map(t => (
            <span key={t} className="chip" style={{
              background: project.soft,
              color: project.accent,
              border: `1px solid ${project.border}`,
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── HOME ── */
function Home({ onNavigate }) {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#FAF9F6",
      color: "#1a1a1a",
      padding: "0 48px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Ambient blobs */}
      <DecoCircle size={500} x="-120px" y="-80px" color="#B85C38" opacity={0.06} />
      <DecoCircle size={400} x="60%" y="10%" color="#4A3F8C" opacity={0.05} />
      <DecoCircle size={350} x="20%" y="65%" color="#2D6A4F" opacity={0.05} />

      {/* Header */}
      <header style={{
        paddingTop: 60,
        paddingBottom: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        animation: "fadeIn 0.9s ease both",
        position: "relative",
        zIndex: 1,
      }}>
        <div>
          <div style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.3em",
            color: "#bbb",
            textTransform: "uppercase",
            marginBottom: 18,
          }}>Portfolio · 2025</div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(52px, 8vw, 100px)",
            fontWeight: 400,
            lineHeight: 0.92,
            color: "#1a1a1a",
            letterSpacing: "-0.02em",
          }}>
            Selected<br />
            <em style={{ fontStyle: "italic", color: "#bbb" }}>Works</em>
          </h1>
        </div>

        {/* Status card */}
        <div style={{
          background: "#fff",
          border: "1px solid #ebebeb",
          borderRadius: 14,
          padding: "20px 24px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          textAlign: "right",
          minWidth: 200,
          marginTop: 8,
        }}>
          <div style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 11,
            color: "#bbb",
            marginBottom: 6,
            letterSpacing: "0.08em",
          }}>Full-Stack Developer</div>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 13,
            color: "#444",
            marginBottom: 14,
          }}>Available for work</div>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            background: "#EDFAF3",
            color: "#2D6A4F",
            padding: "6px 14px",
            borderRadius: 20,
            fontSize: 10,
            fontFamily: "'Instrument Sans', sans-serif",
            fontWeight: 500,
            letterSpacing: "0.08em",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2D6A4F" }} />
            Open to opportunities
          </div>
        </div>
      </header>

      <Divider label="Projects" count={projects.length} />

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 22,
        paddingBottom: 80,
        position: "relative",
        zIndex: 1,
      }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} onClick={onNavigate} />
        ))}
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #ebebeb",
        padding: "28px 0",
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "'Instrument Sans', sans-serif",
        fontSize: 10,
        color: "#ccc",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        position: "relative",
        zIndex: 1,
      }}>
        <span>© 2025 — All rights reserved</span>
        <span>Crafted with care</span>
      </footer>
    </div>
  );
}

/* ── PROJECT DETAIL ── */
function ProjectDetail({ project, onBack }) {
  const [activeImg, setActiveImg] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 40);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FAF9F6",
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(18px)",
      transition: "opacity 0.55s ease, transform 0.55s ease",
      position: "relative",
      overflow: "hidden",
    }}>
      <DecoCircle size={500} x="-80px" y="-100px" color={project.accent} opacity={0.05} />

      {/* Sticky Nav */}
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(250,249,246,0.88)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid #ebebeb",
        padding: "18px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <button className="nav-btn" onClick={onBack}>← Back</button>
        <span style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.22em",
          color: "#ccc",
          textTransform: "uppercase",
        }}>Project Detail</span>
        <div style={{ width: 80 }} />
      </div>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "64px 48px 100px", position: "relative", zIndex: 1 }}>

        {/* Top header */}
        <div style={{ marginBottom: 52 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
            <span style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 11,
              color: "#ccc",
              letterSpacing: "0.18em",
            }}>{project.num}</span>
            <span className="pill" style={{
              background: project.soft,
              color: project.accent,
              border: `1px solid ${project.border}`,
            }}>{project.tag}</span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(44px, 7vw, 78px)",
            fontWeight: 400,
            lineHeight: 0.95,
            color: "#1a1a1a",
            letterSpacing: "-0.02em",
            marginBottom: 28,
          }}>{project.name}</h1>

          {/* Accent line */}
          <div style={{
            width: 52, height: 3,
            background: project.accent,
            borderRadius: 2,
            marginBottom: 26,
            transformOrigin: "left",
            animation: "slideRight 0.5s 0.3s both",
          }} />

          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 14,
            lineHeight: 1.9,
            color: "#888",
            maxWidth: 520,
          }}>{project.description}</p>
        </div>

        {/* Tech chips */}
        <div style={{
          display: "flex", gap: 9, flexWrap: "wrap",
          marginBottom: 52,
          paddingBottom: 52,
          borderBottom: "1px solid #ebebeb",
        }}>
          {project.tech.map(t => (
            <span key={t} className="chip" style={{
              background: project.soft,
              color: project.accent,
              border: `1px solid ${project.border}`,
              fontSize: 11,
              padding: "6px 14px",
            }}>{t}</span>
          ))}
        </div>

        {/* 2-col layout: main image + side info */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 280px",
          gap: 24,
          marginBottom: 20,
          alignItems: "start",
        }}>
          {/* Main image */}
          <div style={{
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid #ebebeb",
            background: project.soft,
            boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
          }}>
            <img src={project.images[activeImg]} alt=""
              style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }} />
          </div>

          {/* Side panel */}
          <div style={{
            background: "#fff",
            border: "1px solid #ebebeb",
            borderRadius: 14,
            padding: "28px 24px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
          }}>
            <div style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.2em",
              color: "#bbb",
              textTransform: "uppercase",
              marginBottom: 18,
            }}>About this project</div>

            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 16,
              lineHeight: 1.7,
              color: "#444",
              marginBottom: 28,
              fontStyle: "italic",
            }}>
              "{project.description.split(".")[0]}."
            </div>

            <div style={{
              height: 1,
              background: "#f0f0f0",
              marginBottom: 22,
            }} />

            <div style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.2em",
              color: "#bbb",
              textTransform: "uppercase",
              marginBottom: 12,
            }}>Stack</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {project.tech.map(t => (
                <div key={t} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: 12,
                  color: "#666",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: project.accent, flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div style={{ display: "flex", gap: 10, marginBottom: 48 }}>
          {project.images.map((img, i) => (
            <div key={i} className={`thumb ${i === activeImg ? "active" : ""}`}
              onClick={() => setActiveImg(i)}
              style={{
                width: 84, height: 56,
                border: i === activeImg ? `2px solid ${project.accent}` : "2px solid transparent",
                borderRadius: 8,
                overflow: "hidden",
                background: project.soft,
              }}>
              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 14 }}>
          <a href={project.github} target="_blank" rel="noreferrer"
            className="btn"
            style={{ background: project.accent, color: "#fff" }}>
            GitHub Repo
          </a>
          <a href={project.live} target="_blank" rel="noreferrer"
            className="btn"
            style={{
              background: "transparent",
              color: project.accent,
              border: `1.5px solid ${project.border}`,
            }}>
            Live Project ↗
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── APP ── */
export default function App() {
  const [activePage, setActivePage] = useState(null);
  return (
    <>
      <FontLink />
      <G />
      {activePage === null
        ? <Home onNavigate={setActivePage} />
        : <ProjectDetail project={projects[activePage]} onBack={() => setActivePage(null)} />
      }
    </>
  );
}