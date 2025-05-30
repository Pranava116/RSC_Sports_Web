import React from "react";
import LandingPage from "./pages/LandingPage";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgonesPage from "./pages/AgonesPage";
import StepUp from "./pages/StepUp.jsx";
import AboutPage from "./pages/about/AboutPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 200,
      y: mousePosition.y - 200,
    },
  };
  return (
    <div className="">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/agones" element={<AgonesPage />} />
          <Route path="/stepup" element={<StepUp />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
