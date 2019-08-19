import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class NavBar extends Component {
  render() {
    return (
      <header>
        <List celled horizontal>
          <List.Item>
            <Link to="">Home</Link>
          </List.Item>
          <List.Item>Contact</List.Item>
          <List.Item>Support</List.Item>
        </List>
      </header>
    );
  }
}

export default NavBar;
