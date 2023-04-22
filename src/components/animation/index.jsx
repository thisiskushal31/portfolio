import React from 'react';
import './style.css';

const Animation = ({ children, type = 'fadeUp', delay = 0 }) => {
  const timing = 'ease-out';
  const duration =  400;
  const fillMode = 'backwards';

  return (
    <div
      style={{
        animationName: `${type}`,
        animationTimingFunction: `${timing}`,
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: `${fillMode}`,
      }}
    >
        {children}
    </div>
  );
}

export default Animation;