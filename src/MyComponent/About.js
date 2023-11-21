import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`about-container ${isVisible ? 'show' : ''}`}>
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <p className="about-paragraph">
          Hi, I'm <span className="highlighted-text">Yuvraj Warad</span>, a passionate developer with a love for creating
          web applications. I have a strong background in front-end development
          and a knack for building user-friendly and visually appealing websites.
        </p>
        <p className="about-paragraph">
          My journey in web development started when I learned HTML and CSS,
          and I've been expanding my skills ever since. I'm proficient in
          JavaScript, React, and various front-end libraries and frameworks.
        </p>
        <p className="about-paragraph">
          When I'm not coding, you can find me exploring new technologies,
          working on personal projects, or enjoying a good cup of coffee.
        </p>
      </div>
    </div>
  );
};

export default About;
