import React from 'react';

import Text from '../Text';
import Room from './Room';

import './style.scss';

function Main(){
  return (
    <main className="main">
      <Room />
      <Text />
    </main>
  );
}

export default Main;