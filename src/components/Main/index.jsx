import React from 'react';

import TextContainer from './TextContainer';
import Room from './Room/index';

import './style.scss';

function Main(){
  return (
    <main className="main">
      <Room />
      <TextContainer />
    </main>
  );
}

export default Main;