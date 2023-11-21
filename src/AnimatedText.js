import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
const AnimatedText = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const phrases = useMemo(
    () => [
      "Web Developer",
      "Coder",
      "Embedded Developer",
      "Frontend Developer",
      "React Developer",
      "NextJs Developer",
    ],
    []
  );

  useEffect(() => {
    let timeout;

    const updateText = () => {
      const currentPhrase = phrases[index];
      if (!currentPhrase) return;

      const currentIndex = text.length;
      const nextChar = currentPhrase[currentIndex];

      if (nextChar) {
        setText((prevText) => prevText + nextChar);
      } else {
        // All letters for the current phrase have been shown
        clearTimeout(timeout);
        setTimeout(() => {
          setText("");
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 2000); // Adjust the delay between phrases
        return;
      }

      timeout = setTimeout(updateText, 100); // Adjust the delay as needed for letter drop speed
    };

    updateText();

    return () => {
      clearTimeout(timeout);
    };
  }, [index, phrases, text]);

  return (
    <div className="animated-text-container">
      {text.split("").map((letter, letterIndex) => (
        <span key={letterIndex} className="animated-letter">
          {letter}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
