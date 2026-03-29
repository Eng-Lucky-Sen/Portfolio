import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Services from "../components/Cservices";
import ThankYou from "../components/ThankYou";
import UiUxDesignDetail from "../components/UiUxDesignDetail";
import WebAppDesignDetail from "../components/WebAppDesignDetail";
import WebDevelopmentDetail from "../components/WebDevelopmentDetail";
import SkillsPage from "../pages/Resume";
const Router = () => {
  return (
    <Routes>
    
  
      <Route path="/about" element={<About />} />
      <Route path="/resumeluky" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/Achievements" element={<Services />} />
   
      <Route
        path="/services/web-development"
        element={<WebDevelopmentDetail />}
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
};

export default Router;
