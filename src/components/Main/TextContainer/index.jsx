import React from 'react';

import TextAnimator from './TextAnimator';

const Theatre = window.Theatre;

class TextContainer extends React.PureComponent{
  project = Theatre.getProject('Lights Theory');
  timelineName = "Main Texts Timeline";
  mainTimeline = this.project.getTimeline(this.timelineName);;

  render(){
    return (
      <React.Fragment>
        <TextAnimator
          name="WelcomeMessage"
          timeline={this.mainTimeline}
          top={10}
          left={10}
        >
          Hey Alireza!
        </TextAnimator>
      </React.Fragment>
    );
  }
}

export default TextContainer;