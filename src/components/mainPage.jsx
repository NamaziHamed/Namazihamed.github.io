import React, { Component } from "react";
import picture from "../assets/background-remover-result.png";

class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Social Media Icons */}
          <div className="col-md-1">
            <div className="row">
              <a className="icon-ref col-12" id="link-linkedin" href="">
                <i id="link-linkedin" className="fa-brands fa-linkedin"></i>
              </a>
              <a className="icon-ref col-12" id="link-insta" href="">
                <i id="link-insta" className="fa-brands fa-instagram"></i>
              </a>
              <a className="icon-ref col-12" id="link-x" href="">
                <i id="link-x" className="fa-brands fa-x-twitter"></i>
              </a>
              <a className="icon-ref col-12" id="link-github" href="">
                <i id="link-github" className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          {/* Intro text section */}
          <div className="col-md-7">
            <h1>I'am Hamed Namazi</h1>
            <h2>Web Developer</h2>
            <p>
              Specializing in frontend development. I'm proficient in HTML, CSS,
              and JavaScript, and I have experience working with Bootstrap and
              React to create responsive and dynamic user interfaces.
            </p>
       <button className="btn btn-primary" href="">Learn More</button>

          </div>
          {/* img div */}
          <div className="col-md-4">
            <img className="rounded-circle" src={picture} alt="my picture" />
          </div>
        </div>
      </div>

      // <div className="info-container">
      //   <div id="socialmedia-container" className="flex-center">

      //   </div>
      //   <div className="flex-center">
      //     <h1>I'am Hamed Namazi</h1>
      //     <h2>Web Developer</h2>
      //     <p>
      //       Specializing in frontend development. I'm proficient in HTML, CSS,
      //       and JavaScript, and I have experience working with Bootstrap and
      //       React to create responsive and dynamic user interfaces.
      //     </p>
      //     <button className="link-btn" href="">Learn More</button>
      //   </div>
      //   <div className="img-div flex-center">
      //     <img className="rounded-img" src={picture} alt="my picture" />
      //   </div>
      // </div>
    );
  }
}

export default MainPage;
