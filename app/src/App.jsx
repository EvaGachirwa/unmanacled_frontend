import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { browserHistory } from "react-router";
import HomePage from "./landingpage/HomePage";

class App extends Component {
  render() {
    return (
      <Router>
        <Route name="home" exact path="/" component={HomePage} />
      </Router>
    );
  }
}
export default App;
