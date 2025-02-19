import { DateTime, Duration } from "luxon";
import Clock from "./components/clock";
import TimerContext from "./context/timerContext";
import React, { Component } from "react";
import IntervalControllers from "./components/intervalControllers";
import InitiatorBtn from "./components/initiatorBtn";

class App extends Component {
  state = {
    pomodoroTimer: DateTime.now().plus({ minutes: 25 }),
    shortBreak: DateTime.now().plus({ minutes: 5 }),
    longBreak: DateTime.now().plus({ minutes: 15 }),
    remainingTime: Duration.fromObject({ minutes: 25 }),
    currentStatus: "stop"
  };
  render() {
    return (
      <TimerContext.Provider
        value={{
          pomodoroTimer: this.state.pomodoroTimer,
          remainingTime: this.state.remainingTime,
          shortBreak: this.state.shortBreak,
          longBreak: this.state.longBreak,
        }}
      >
        <div className="container pomodoro-section">
          <IntervalControllers />
          <Clock/>
          <InitiatorBtn/>
        </div>
      </TimerContext.Provider>
    );
  }
}

export default App;
