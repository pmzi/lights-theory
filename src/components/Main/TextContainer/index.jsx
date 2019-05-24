import React from 'react';

import TextAnimator from './TextAnimator';

function TextContainer({ timeline }){
  return (
    <React.Fragment>
      <TextAnimator
        name="WelcomeMessage"
        timeline={timeline}
        top={10}
        left={10}
      >
        Hey Alireza!
      </TextAnimator>
    </React.Fragment>
  );
}

export default TextContainer;