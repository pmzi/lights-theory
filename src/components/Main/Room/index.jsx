import React from 'react';

import './style.scss';

class Room extends React.Component {

    constructor (props) {
        super(props);
        this.canvas = React.createRef();
    }

    componentDidMount () {
        console.log(this.canvas.current)
    }

    render () {
        return (
            <div className="room">
                <canvas ref={this.canvas} className="room__canvas" />  
            </div>
        );
    }

}

export default Room;