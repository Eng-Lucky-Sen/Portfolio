import React from "react";
import "./Cservices.css";
import oracleImg from "../assets/oracaleC.jpeg"; // ✅ correct import

const achievements = [
  {
    id: 1,
    title: "Oracle Certified Professional – Data Science",
    issuer: "Oracle University",
    description:
      "Certified in Oracle Cloud Infrastructure (OCI) Data Science. Demonstrates skills in machine learning, data analysis, and cloud-based AI solutions.",
    image: oracleImg,
    date: "Oct 2025",
  },
];

const Cservices = () => {
  return (
    <section className="achievements">
      <h2 className="title">My Achievements</h2>

      <div className="achievements-container">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="achievement-card"
            onClick={() => window.open(item.image, "_blank")} // 🔥 click to open full image
          >
            <div className="image-box">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="content">
              <h3>{item.title}</h3>
              <p className="issuer">{item.issuer}</p>
              <p className="desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cservices;