import React from 'react';

import TextContainer from './TextContainer/index';
import Room from './Room/index';

import './style.scss';

function Main({ animationTime }){
  const height = animationTime;

  return (
    <main style={
      {
        height: `${height}px`,
      }
    } className="main">
      <div className="main__content">
        <Room />
        <TextContainer />
      </div>
    </main>
  );
}

export default Main;