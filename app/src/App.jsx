import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { browserHistory } from "react-router";
import HomePage from "./landingpage/HomePage";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <h1>Best I ever had</h1>
          <Route name="home" exact path="/" component={HomePage} />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
