import React, { Component } from "react";
import Navbar from "./components/navbar";
import MainPage from "./components/mainPage";
import ControllerContext from "./components/controllerContext";

class App extends Component {
  state = {
    language: "en",
    theme: "light",
  };

  render() {
    return (
      <ControllerContext.Provider
        value={{
          language: this.state.language,
          theme: this.state.theme,
        }}
      >
        <Navbar />
        <MainPage />
      </ControllerContext.Provider>
    );
  }
}

export default App;
