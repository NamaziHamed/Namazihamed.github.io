import React, { Component } from 'react';

class InitiatorBtn extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container text-center justify-content-between">
                <button className="btn">Start</button>
                <button className="btn hide">Reset</button>
            </div>
        );
    }
}
 
export default InitiatorBtn;