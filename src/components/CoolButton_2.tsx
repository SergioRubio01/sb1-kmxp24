import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CoolButton_2 = ({ children, height, href, paddingX }) => {
  // State to track if the button was clicked
  const [isClicked, setIsClicked] = useState(false);

  // useEffect hook to reset the click state after a timeout
  useEffect(() => {
    let timeout;
    if (isClicked) {
      // Set a timeout to reset the click state after 200ms
      timeout = setTimeout(() => {
        setIsClicked(false);
      }, 200);
    }
    // Cleanup function to clear the timeout when component unmounts or `isClicked` changes
    return () => clearTimeout(timeout);
  }, [isClicked]);

  // Handle click event
  const handleClick = (event) => {
    if (href) {
      // If href is provided, set click state to true
      setIsClicked(true);
    } else {
      // Prevent default behavior if no href is provided (e.g., prevent link navigation)
      event.preventDefault();
    }
  };

  return (
    <StyledWrapper height={height} paddingX={paddingX}>
      <motion.a
        className="button"
        // Animation to slightly increase the size when hovered
        whileHover={{ scale: 1.05 }}
        // Animation to slightly decrease the size when clicked
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        href={href}
        // Open link in a new tab if href is provided
        // target={href ? "_blank" : undefined}
        rel="noopener noreferrer"
      >
        <span className="button-content font-bold font-mono">{children}</span>
      </motion.a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    height: ${(props) => props.height || "2rem"};
    padding: 0 ${(props) => props.paddingX || "2rem"};
    border-radius: 1rem;
    background: #3d3a4e;
    background-size: 200%;
    color: #fff;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: transform 0.2s;
    will-change: transform; // Hint to the browser to optimize the transform property for better performance
  }

  .button:hover::before {
    // Scale the background gradient when the button is hovered
    transform: scaleX(1);
  }

  .button-content {
    position: relative;
    z-index: 2; // Ensure the button text is always above the background gradient
    color: #fff;
  }

  .button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0); // Initially scale the gradient to 0 (hidden)
    transform-origin: left center; // Scale from the left side
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(150, 100, 94, 1) 70%
    );
    transition: all 0.2s;
    z-index: 1; // Ensure the background gradient is below the button text
  }
`;

export default CoolButton_2;