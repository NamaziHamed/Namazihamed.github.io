import Clock from "./components/clock";
import TimerContext from "./context/timerContext"
import React, { Component } from 'react';


class App extends Component {
  state = { 
    pomodoroTimer: "25:00"
   } 
  render() { 
    return (
      <TimerContext.Provider value={{pomodoroTimer: this.state.pomodoroTimer}}>
        <Clock />
      </TimerContext.Provider>
    );
  }
}
 
export default App;

