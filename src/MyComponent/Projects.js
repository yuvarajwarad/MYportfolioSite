import React, { useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "React To-Do List Application",
    description:
      "Users can create, manage, and remove tasks with ease, marking them as completed or uncompleted, by simply entering a title and optional description.",
  },
  {
    title: "My Portfolio site",
    description: "I Created my portfolio site website by using reactjs",
  },
  {
    title: "Internship Project",
    description: "Description for your internship project.",
  },
  {
    title: "Internship Project",
    description: "Description for your internship project.",
  },
];

const Projects = () => {
  const [projectDetails, setProjectDetails] = useState(null);

  function closeProjectDetails() {
    setProjectDetails(null);
  }

  return (
    <section className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="project-cards">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      {projectDetails && (
        <div className="project-details-popup">
          <div className="project-details-content">
            <button className="close-button" onClick={closeProjectDetails}>
              X
            </button>
            <h3>Project Details</h3>
            <p>{projectDetails}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
