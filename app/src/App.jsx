import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { browserHistory } from "react-router";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Best I ever had</h1>
          {/* <Route name="home" exact path="/" component={HomePage} /> */}
        </div>
      </Router>
    );
  }
}
export default App;
