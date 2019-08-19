import React, { Component } from "react";
import { List } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <List floated="right" horizontal inverted>
          <List.Item href="#">© Unmanacled, Inc.</List.Item>
          <List.Item href="#">Terms</List.Item>
          <List.Item href="#">Privacy</List.Item>
          <List.Item href="#">Contact</List.Item>
        </List>

        <List horizontal inverted>
          <List.Item href="#">About Us</List.Item>
          <List.Item href="#">Jobs</List.Item>
        </List>
      </div>
    );
  }
}

export default Footer;
