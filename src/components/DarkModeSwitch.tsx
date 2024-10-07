import React, { useState } from "react";
import styled from "styled-components";
import { Sun, Moon } from 'lucide-react';

const DarkModeSwitch = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <StyledWrapper>
      <div className="toggle-switch">
        <button onClick={toggleDarkMode} className="dark-mode-button">
          {isDarkMode ? <Moon className="icon" size={24} /> : <Sun className="icon" size={24} />}
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  // Center the toggle switch within its container
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .toggle-switch {
    position: relative;
    width: auto;
    height: auto;
    // Custom CSS variables for color customization
    --light: #d8dbe0;
    --dark: #7E8290;
    --link: rgb(27, 129, 112);
    --link-hover: rgb(24, 94, 82);
  }

  .dark-mode-button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .dark-mode-button:hover {
    transform: scale(1.2);
  }

  .icon {
    color: var(--dark); // Icon color to match the slider theme
  }
`;

export default DarkModeSwitch;
