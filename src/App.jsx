import { DateTime, Duration } from "luxon";
import Clock from "./components/clock";
import TimerContext from "./context/timerContext"
import React, { Component } from 'react';



class App extends Component {
  state = { 
    pomodoroTimer: DateTime.now().plus({minutes:25}),
    shortBreak: DateTime.now().plus({minutes:5}),
    longBreak: DateTime.now().plus({minutes:15}),
    remainingTime: Duration.fromObject({minutes:25})
   } 
  render() { 
    return (
      <TimerContext.Provider 
      value={{
        pomodoroTimer: this.state.pomodoroTimer,
        remainingTime: this.state.remainingTime,
        shortBreak: this.state.shortBreak,
        longBreak: this.state.longBreak
        }}>
        <Clock />
      </TimerContext.Provider>
    );
  }
}
 
export default App;

