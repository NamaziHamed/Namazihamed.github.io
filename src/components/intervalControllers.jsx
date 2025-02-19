import React, { Component } from "react";

class IntervalControllers extends Component {
  render() {
    return (
      <div className="container justify-content-between">
        <div className="row">
          <button  className="btn col">Pomodoro</button>
          <button  className="btn col">Short Break</button>
          <button  className="btn col">Long Break</button>
        </div>
      </div>
    );
  }
}

export default IntervalControllers;
