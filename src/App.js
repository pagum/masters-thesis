import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
import LoginPage from "./AuthModule/LoginPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
  }
}

export default App;
