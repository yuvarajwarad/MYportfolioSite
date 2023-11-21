import React, { useState } from "react";
import "./Header.css"; // Import your CSS file
import { Link } from "react-router-dom";
import monkeyImage from "./monkey.png"; // Import your monkey image
import "../App.css";

const Header = () => {
  const [jumping, setJumping] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleJump = (event) => {
    const link = event.target.getBoundingClientRect();
    setPosition({
      top: link.top + window.scrollY - 60, // Adjust the position
      left: link.left + window.scrollX,
    });
    setJumping(true);

    setTimeout(() => {
      setJumping(false);
    }, 2000);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="yuvi-warad">
            <Link to="/">Yuvraj Warad</Link>
          </div>
          <div className="right">
            <ul>
              <li>
                <Link to="/" onClick={handleJump}>
                  Home
                </Link>
              </li>
              <li>
                <a href="#exp" onClick={handleJump}>
                  Work Experience
                </a>
              </li>
              <li>
                <Link to="/Skills" onClick={handleJump}>
                  My Skills
                </Link>
              </li>
              <li>
                <Link to="/Projects" onClick={handleJump}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/Education" onClick={handleJump}>
                  Education
                </Link>
              </li>
              <li>
                <Link to="/About" onClick={handleJump}>
                  About
                </Link>
              </li>

              <li>
                <Link to="/Contact" onClick={handleJump}>
                  Contact ME
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {jumping && (
          <div
            className="monkey"
            style={{
              top: position.top + "px",
              left: position.left + "px",
            }}
          >
            <img src={monkeyImage} alt="Jumping Monkey" />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
