import React, { useEffect, useState } from "react";
import "./Skills.css";

const skillsData = [
  "C",
  "C++",
  "Data Structures and Algorithms",
  "CSS",
  "HTML",
  "JavaScript",
  "React.js",
  "Next.js",
  "SQL",
  "Embedded Systems",
  // Add more skills as needed
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`skills-container ${isVisible ? "show" : ""}`}>
      <h2 className="skills-heading">My Skills</h2>
      <div className="skill-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
