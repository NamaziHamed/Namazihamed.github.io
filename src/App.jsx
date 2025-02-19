import { DateTime, Duration } from "luxon";
import Clock from "./components/clock";
import TimerContext from "./context/timerContext";
import React, { Component } from "react";
import IntervalControllers from "./components/intervalControllers";
import InitiatorBtn from "./components/initiatorBtn";

class App extends Component {
  state = {
    pomodoroTimer: 25,
    shortBreak: 5,
    longBreak: 30,
    remainingTime: Duration.fromObject({ minutes: 25 }),
    pomodoroCount: 0,
    currentStatus: "stop",
  };

  componentDidMount (){
    this.applyBtnStyle()
  }

  applyBtnStyle = ()=>{
    const buttons = document.querySelectorAll("button")

    buttons.forEach(btn=>{
      btn.classList.add("btn-outline-dark")
      btn.classList.add("mx-1")
      btn.classList.add("my-3")
    })
  }
  handleBtnClick = (event) => {
    const eventType = event.target.id;
    switch (eventType) {
      case "pomodoro": {
        this.updateRemainingTime(this.state.pomodoroTimer);
        break;
      }
      case "short-break": {
        this.updateRemainingTime(this.state.shortBreak);
        break;
      }
      case "long-break": {
        this.updateRemainingTime(this.state.longBreak);
        break;
      }
      case "start": {
        this.interval = setInterval(this.reduceRemainingTime, 1000);
        this.setState({currentStatus:"start"})
        return
      }
      case "pause": {
      }
      case "reset": {
      }
    }
  };

  reduceRemainingTime = () => {
    this.setState((prevState) => {
      const newRemainingTime = prevState.remainingTime.minus({ seconds: 1 });
      if (newRemainingTime.as("seconds") <= 0) {
        clearInterval(this.interval);
        return {
          remainingTime: Duration.fromObject({ minutes: 0, seconds: 0 }),
        };
      }
      return { remainingTime: newRemainingTime };
    });
  };

  updateRemainingTime = (int) => {
    this.setState({ remainingTime: Duration.fromObject({ minutes: int }) });
  };
  render() {
    return (
      <TimerContext.Provider
        value={{
          pomodoroTimer: this.state.pomodoroTimer,
          remainingTime: this.state.remainingTime,
          shortBreak: this.state.shortBreak,
          longBreak: this.state.longBreak,
          pomodoroCount: this.state.pomodoroCount,
          currentStatus: this.state.currentStatus,
          handleBtnClick: this.handleBtnClick,
        }}
      >
        <div className="container pomodoro-section">
          <IntervalControllers />
          <Clock />
          <InitiatorBtn />
        </div>
      </TimerContext.Provider>
    );
  }
}

export default App;
