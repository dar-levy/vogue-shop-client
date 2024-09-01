// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Component } from "react";
import auth from "../services/authService";
import Cookies from "js-cookie";
import config from "../config.json";

class LogoutForm extends Component {
  async componentDidMount() {
    await auth.logout();
    Cookies.remove(config.cookieName);
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default LogoutForm;
