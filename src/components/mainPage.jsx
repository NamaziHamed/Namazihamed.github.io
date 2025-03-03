import React, { Component } from "react";
import picture from "../assets/background-remover-result.png";

class MainPage extends Component {
  render() {
    return (
      <div className="info-container">
        <div id="socialmedia-container" className="flex-center">
          <a className="icon-ref" id="link-linkedin" href="">
            <i id="link-linkedin" className="fa-brands fa-linkedin"></i>
          </a>
          <a className="icon-ref" id="link-insta" href="">
            <i id="link-insta" className="fa-brands fa-instagram"></i>
          </a>
          <a className="icon-ref" id="link-x" href="">
            <i id="link-x" className="fa-brands fa-x-twitter"></i>
          </a>
          <a className="icon-ref" id="link-github" href="">
            <i id="link-github" className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="flex-center">
          <h1>I'am Hamed Namazi</h1>
          <h2>Web Developer</h2>
          <p>
            Specializing in frontend development. I'm proficient in HTML, CSS,
            and JavaScript, and I have experience working with Bootstrap and
            React to create responsive and dynamic user interfaces.
          </p>
          <button className="link-btn" href="">Learn More</button>
        </div>
        <div className="img-div flex-center">
          <img className="rounded-img" src={picture} alt="my picture" />
        </div>
      </div>
    );
  }
}

export default MainPage;
