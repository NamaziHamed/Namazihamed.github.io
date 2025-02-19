import { DateTime, Duration } from "luxon";
import Clock from "./components/clock";
import TimerContext from "./context/timerContext";
import React, { Component } from "react";
import IntervalControllers from "./components/intervalControllers";
import InitiatorBtn from "./components/initiatorBtn";

class App extends Component {
  state = {
    pomodoroTimer: Duration.fromObject({ minutes: 25 }),
    shortBreak: Duration.fromObject({ minutes: 5 }),
    longBreak: Duration.fromObject({ minutes: 30 }),
    remainingTime: Duration.fromObject({ minutes: 25 }),
    pomodoroCount: 0,
    currentStatus: "stop"
  };

  handleBtnClick = (event)=>{
    const eventType = event.target.id
    switch (eventType){
      case "pomodoro":{ 
        this.updateRemainingTime(this.state.pomodoroTimer)
        break;
      }
      case "short-break":{ 
        this.updateRemainingTime(this.state.shortBreak)
        break;
      }
      case "long-break":{ 
        this.updateRemainingTime(this.state.longBreak)
        break;
      }
      case "start":{}
      case "pause":{}
      case "reset":{}
    }
  }

  updateRemainingTime = (int)=>{
    this.setState({remainingTime:int})
  }
  render() {
    return (
      <TimerContext.Provider
        value={{
          pomodoroTimer: this.state.pomodoroTimer,
          remainingTime: this.state.remainingTime,
          shortBreak: this.state.shortBreak,
          longBreak: this.state.longBreak,
          pomodoroCount: this.state.pomodoroCount,
          handleBtnClick : this.handleBtnClick
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
