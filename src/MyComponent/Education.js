import React, { useEffect, useState } from "react";
import "./Education.css";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`education-container ${isVisible ? "show" : ""}`}>
      <h2 className="education-heading">Education</h2>
      <div className="education-item">
        <h3>
          Bachelors of Engineering - Electronics and Telecommunication
          Engineering
        </h3>
        <p>Vidhyarthi Grihas College of Engineering and Technology</p>
        <p>Pune • June 2023</p>
        <p>CGPA: 8.1</p>
      </div>
      <div className="education-item">
        <h3>Diploma - Electronics and Telecommunication Engineering</h3>
        <p>
          Shri Vatavriksha Swami Maharaj Devasthan's, KKI Polytechnic college
        </p>
        <p>Solapur • June 2020</p>
        <p>Percentage: 89.12%</p>
      </div>
      <div className="education-item">
        <h3>10th Schooling</h3>
        <p>Shri Siddheshwar High School Tolnur</p>
        <p>Akkalkot • June 2017</p>
        <p>Percentage: 70%</p>
      </div>
    </div>
  );
};

export default Education;
