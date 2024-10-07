import React, { useEffect } from 'react';
import '../AnimatedStars.css';

const BgImage_3 = () => {
  useEffect(() => {
    const svg = document.getElementById('animatedStars');
    const lines = [];
    const numFixedLines = 100; // Increased density of fixed lines
    const numAnimatedLines = 20; // Animated lines that randomly appear
    const svgWidth = svg.clientWidth;
    const svgHeight = svg.clientHeight;

    // Create fixed lines at 45-degree angle
    for (let i = 0; i < numFixedLines; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      line.setAttribute('width', Math.random() * 200 + 199); // Random width between 50 and 250
      line.setAttribute('height', 1);
      line.setAttribute('x', Math.random() * svgWidth - 100); // Random x-coordinate across the entire width
      line.setAttribute('y', Math.random() * svgHeight - 100); // Random y-coordinate across the entire height
      line.setAttribute('rx', 1);
      line.setAttribute('transform', 'rotate(45)'); // All lines rotated to the same angle
      line.setAttribute('fill', 'url(#ffflurry-grad)');
      line.setAttribute('opacity', Math.random().toFixed(2));
      svg.appendChild(line);
      lines.push(line);
    }

    // Create animated lines that appear randomly
    for (let i = 0; i < numAnimatedLines; i++) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      line.setAttribute('width', Math.random() * 200 + 50); // Random width between 50 and 250
      line.setAttribute('height', 1);
      line.setAttribute('x', Math.random() * svgWidth + 100); // Random x-coordinate across the entire width
      line.setAttribute('y', Math.random() * svgHeight + 100); // Random y-coordinate across the entire height
      line.setAttribute('rx', 1);
      line.setAttribute('transform', 'rotate(45)'); // All lines rotated to the same angle
      line.setAttribute('fill', 'url(#ffflurry-grad)');
      line.setAttribute('opacity', Math.random().toFixed(2));
      line.classList.add('animated-line');
      svg.appendChild(line);
      lines.push(line);
    }

    return () => {
      // Cleanup lines
      lines.forEach((line) => svg.removeChild(line));
    };
  }, []);

  return (
    <svg
      id="animatedStars"
      width="100%"
      height="100%"
      style={{
        background: '#000',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1, // Send to the back of all elements
        width: '100vw',
        height: '100vh',
      }}
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ffflurry-grad" gradientTransform="rotate(270)">
          <stop stopColor="hsl(0, 0%, 0%)" stopOpacity="1" offset="0%"></stop>
          <stop stopColor="hsl(185, 53%, 55%)" stopOpacity="1" offset="45%"></stop>
          <stop stopColor="hsl(0, 73%, 55%)" stopOpacity="1" offset="100%"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BgImage_3;