import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

class LoginForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Username</label>
          <input placeholder="Enter Username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Enter Password" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="Remember Me" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default LoginForm;
