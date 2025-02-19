import React, { Component } from "react";
import timerContext from "../context/timerContext";

class InitiatorBtn extends Component {
  static contextType = timerContext;

  handleDisplay = () => {
    if (this.context.currentStatus === "stop") {
      return {
        display: "none",
      };
    } else {
      return {
        display: "block",
      };
    }
  };

  handleStart = () => {
    if (this.context.currentStatus === "stop") {
      return {
        display: "block",
      };
    } else {
      return {
        display: "none",
      };
    }
  };

  render() {
    return (
      <div className="container text-center justify-content-between">
        <div className="row text-center ">
          <div className="col" style={this.handleStart()}>
            <button
              id="start"
              onClick={this.context.handleBtnClick}
              className="btn col-4"
            >
              Start
            </button>
          </div>
          <div style={this.handleDisplay()}>
            <button
              id="pause"
              onClick={this.context.handleBtnClick}
              className="btn"
            >
              Pause
            </button>
            <button
              id="reset"
              onClick={this.context.handleBtnClick}
              className="btn"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default InitiatorBtn;
