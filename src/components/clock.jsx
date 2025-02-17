import React, { Component } from 'react';
import TimerContext from '../context/timerContext'

class Clock extends Component {
    static contextType= TimerContext
    render() { 
        return (
            <h1>{this.context.pomodoroTimer}</h1>
        );
    }
}
 
export default Clock;