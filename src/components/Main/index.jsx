import React from 'react';

import Text from '../Text/index';
import Room from '../Room/index';

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