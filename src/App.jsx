import { DateTime, Duration } from "luxon";
import Clock from "./components/clock";
import TimerContext from "./context/timerContext";
import React, { Component } from "react";
import IntervalControllers from "./components/intervalControllers";
import InitiatorBtn from "./components/initiatorBtn";
import PomodoroCountDisplay from "./components/pomodoroCountDisplay";
import startSound from "./assets/sounds/start.mp3";
import endSound from "./assets/sounds/end.mp3";

class App extends Component {
  state = {
    pomodoroTimer: 25,
    shortBreak: 5,
    longBreak: 30,
    remainingTime: Duration.fromObject({ minutes: 25 }),
    pomodoroCount: 1,
    currentStatus: "stop",
    currentTimer: "pomodoro",
  };

  timerStartSound = () => {
    const audio = new Audio(startSound);
    audio.play();
  };

  timerEndSound = () => {
    const audio = new Audio(endSound);
    audio.play();
  };

  componentDidMount() {
    this.applyBtnStyle();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentTimer !== this.state.currentTimer) {
      this.applyBtnStyle();
    }
  }

  applyBtnStyle = () => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((btn) => {
      btn.className = "btn mx-1 my-3";
      if (btn.id === this.state.currentTimer) {
        btn.classList.add("btn-dark");
      } else {
        btn.classList.add("btn-outline-dark");
      }
    });
  };

  handleBtnClick = (event) => {
    const eventType = event.target.id;
    let min;

    switch (eventType) {
      case "pomodoro": {
        min = this.state.pomodoroTimer;
        this.setState({ currentTimer: "pomodoro" });
        break;
      }
      case "short-break": {
        min = this.state.shortBreak;
        this.setState({ currentTimer: "short-break" });
        break;
      }
      case "long-break": {
        min = this.state.longBreak;
        this.setState({ currentTimer: "long-break" });
        break;
      }
      case "start": {
        this.interval = setInterval(this.reduceRemainingTime, 1000);
        this.setState({ currentStatus: "start" });
        this.timerStartSound()
        return;
      }
      case "pause": {
        clearInterval(this.interval);
        this.setState({ currentStatus: "pause" });
        return;
      }
      case "skip-break": {
        min = this.state.pomodoroTimer;
        clearInterval(this.interval);
        this.setState(
          {
            currentStatus: "start",
            currentTimer: "pomodoro",
            remainingTime: Duration.fromObject({ minutes: min }),
          },
          () => {
            this.interval = setInterval(this.reduceRemainingTime, 1000);
            this.timerStartSound()
          }
        );
        return;
      }
      case "resume": {
        this.interval = setInterval(this.reduceRemainingTime, 1000);
        this.setState({ currentStatus: "start" });
        this.timerStartSound()
        return;
      }
      case "reset": {
        clearInterval(this.interval);
        this.setState({
          currentStatus: "stop",
          remainingTime: Duration.fromObject({
            minutes: this.state.pomodoroTimer,
          }),
        });
        return;
      }
      default:
        console.error(`Unknown event type: ${eventType}`);
    }

    if (min !== undefined) {
      this.updateRemainingTime(min);
    }

    this.applyBtnStyle();
  };

  reduceRemainingTime = () => {
    this.setState((prevState) => {
      const newRemainingTime = prevState.remainingTime.minus({ seconds: 1 });

      if (newRemainingTime.as("seconds") <= 0) {
        this.timerEndSound();
        clearInterval(this.interval);

        if (prevState.currentTimer === "pomodoro") {
          return {
            remainingTime: Duration.fromObject({ minutes: 0, seconds: 0 }),
            pomodoroCount: prevState.pomodoroCount + 1,
            currentStatus: "stop",
          };
        } else {
          this.playEndSound()
          return {
            remainingTime: Duration.fromObject({ minutes: 0, seconds: 0 }),
            currentStatus: "nstop",
          };
        }
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
          currentTimer: this.state.currentTimer,
          handleBtnClick: this.handleBtnClick,
        }}
      >
        <div className="container pomodoro-section">
          <IntervalControllers />
          <Clock />
          <InitiatorBtn />
          <PomodoroCountDisplay />
        </div>
      </TimerContext.Provider>
    );
  }
}

export default App;
