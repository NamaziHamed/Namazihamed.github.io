import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
        <div className="m-5 text-center">
          <button className="btn element m-2 col-4 col-md-3">About</button>
          <button className="btn element m-2 col-4 col-md-3">Experience</button>
          <button className="btn element m-2 col-4 col-md-3">Projects</button>
          <button className="btn element m-2 col-4 col-md-3">Contact</button>

        </div>
    );
  }
}

export default Navbar;
