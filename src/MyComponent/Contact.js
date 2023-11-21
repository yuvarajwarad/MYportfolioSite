import React from "react";
import "./Contact.css";

const Contact = () => {
  const address = "At Post-Tolnur, Tal- Akkalkot Dist-Solapur, Pincode: 413227";
  const emailAddress = "waradys97@gmail.com";
  const phoneNumber = "Contact: 8766833640";
  const downloadResume = () => {
    window.open("/static/Yuvraj_Warad.pdf", "_blank");
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p className="address">Adress: {address}</p>
        <p className="email">
          Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </p>
        <p className="phone">{phoneNumber}</p>
        <button className="resume-button" onClick={downloadResume}>
          Download Resume
        </button>
      </div>
      <div className="social-links">
        <a
          href="https://instagram.com/mr_yuvraj_07_16_?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          <img src={require("./insta.png")} alt="Instagram Logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/yuvraj-warad-214bb2228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <img src={require("./Linkedin.png")} alt="LinkedIn Logo" />
        </a>
        <a
          href="https://github.com/yuvarajwarad"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <img src={require("./github1.png")} alt="GitHub Logo" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
