import React from 'react';

import Text from './Text/index';

const Theatre = window.Theatre;

class TextAnimator extends React.PureComponent{

  state = {
    opacity: 0,
  };

  componentDidMount(){
    this.initializeTheatre();
  }

  initializeTheatre(){
    const { name, timeline } = this.props;

    const textAnimatorObject = timeline.getObject(name, {}, {
      props: {
        // x: {
        //   type: 'number',
        // },
        // y: {
        //   type: 'number',
        // },
        opacity: {
          type: 'number',
        },
      },
    });

    textAnimatorObject.onValuesChange(({ opacity })=>{
      this.setState({
        opacity,
      })
    })
  }

  render(){
    const { opacity } = this.state;
    
    return (
      <Text
        { ...this.props }
        opacity={opacity}
      />
    );
  }
}

export default TextAnimator;