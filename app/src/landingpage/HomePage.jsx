import React, { Component } from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <NavBar />
          <h1 className="bannerText">Best I ever had</h1>
        </div>
        <header>HomePage</header>
        <p>Hello there I am Home hello!!</p>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
