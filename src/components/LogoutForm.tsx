// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Component } from "react";
import auth from "../services/authService";

class LogoutForm extends Component {
  componentDidMount() {
    auth.logout();

    window.location = "/";
  }

  render() {
    return null;
  }
}

export default LogoutForm;
