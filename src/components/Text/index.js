import React from 'react';

import './style.scss';

function Text({opacity, x, y, children}) {
  return (
    <div
      style={
        {
          opacity,
          left: `${x}px`,
          top: `${y}px`,
        }
      }
      className="text"
    >
      { children }
    </div>
  );
}

export default Text;