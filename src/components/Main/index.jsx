import React from 'react';

import TextContainer from './TextContainer/index';
import Room from './Room/index';

import './style.scss';

const Theatre = window.Theatre;

class Main extends React.PureComponent{
  project = Theatre.getProject('Lights Theory');
  timelineName = "Main Texts Timeline";
  mainTimeline = this.project.getTimeline(this.timelineName);

  componentDidMount(){
    window.addEventListener('scroll', ()=>{
      this.mainTimeline.time = window.scrollY * 2;
    });
  }

  render(){
    const { animationTime } = this.props;
    const height = animationTime * 1000;

    return (
      <main style={
        {
          height: `${height}px`,
        }
      } className="main">
        <div className="main__content">
          <Room
            timeline={this.mainTimeline}
          />
          <TextContainer
            timeline={this.mainTimeline}
          />
        </div>
      </main>
    );
  }
}

export default Main;