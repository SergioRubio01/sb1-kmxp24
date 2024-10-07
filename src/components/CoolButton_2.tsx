import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CoolButton_2 = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <StyledWrapper>
      <motion.button
        className="button" // Add the class name to use the styles from StyledWrapper
        whileHover={{ scale: 1.05 }} // Hover animation to increase size
        whileTap={{ scale: 0.9 }} // Click animation to decrease size
        onClick={handleClick} // Handle the click event
      >
        <span className="button-content font-bold font-mono">{children}</span> {/* Wrap children inside a span with class button-content */}
      </motion.button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    position: relative;
    overflow: hidden;
    height: 2.5rem;
    padding: 0 2rem;
    border-radius: 1rem;
    background: #3d3a4e;
    background-size: 400%;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .button:hover::before {
    transform: scaleX(1);
  }

  .button-content {
    position: relative;
    z-index: 2; // Increase z-index to ensure text is above the ::before pseudo-element
    color: #fff; // Ensure the text color remains visible during hover
  }

  .button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(150, 100, 94, 1) 70%
    );
    transition: all 0.2s;
    z-index: 1; // Ensure the background is below the button content
  }
`;

export default CoolButton_2;