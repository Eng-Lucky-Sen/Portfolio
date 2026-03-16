import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Services from "../components/Cservices";
import ThankYou from "../components/ThankYou";
import UiUxDesignDetail from "../components/UiUxDesignDetail";
import WebAppDesignDetail from "../components/WebAppDesignDetail";
import WebDevelopmentDetail from "../components/WebDevelopmentDetail";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resumeluky" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/ui-ux-design" element={<UiUxDesignDetail />} />
      <Route path="/services/web-app-design" element={<WebAppDesignDetail />} />
      <Route
        path="/services/web-development"
        element={<WebDevelopmentDetail />}
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
};

export default Router;
