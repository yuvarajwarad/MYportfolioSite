import React from "react";
import "./App.css";
import Header from "./MyComponent/Header";
import About from "./MyComponent/About";
import { Route, Routes } from "react-router-dom";

import Education from "./MyComponent/Education";
import Home from "./MyComponent/Home";
import Contact from "./MyComponent/Contact";
import Projects from "./MyComponent/Projects";
import Skills from "./MyComponent/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
