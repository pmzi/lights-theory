import React from 'react';

import './style.scss';

function Text({opacity, right, top, left, bottom, children}) {
  return (
    <div
      style={
        {
          opacity,
          left: left ? `${left}px` : 'auto',
          top: top ? `${top}px` : 'auto',
          bottom: bottom ? `${bottom}px` : 'auto',
          right: right ? `${right}px` : 'auto',
        }
      }
      className="text"
    >
      { children }
    </div>
  );
}

export default Text;