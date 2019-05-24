import React from 'react';

import './Room.scss';

class Room extends React.Component {

    constructor (props) {
        super(props);

    }

    render () {
        return (<div className="room">
            <canvas className="room__canvas" />  
        </div>);
    }

}

export default Room;