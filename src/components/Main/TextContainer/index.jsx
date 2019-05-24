import React from 'react';

import Text from './Text/index';

class TextContainer extends React.PureComponent{
  componentDidMount(){
    const project = window.Theatre.getProject('Lights Theory');
  }
  render(){
    return (
      <Text>
        Hey Alireza!
      </Text>
    );
  }
}

export default TextContainer;