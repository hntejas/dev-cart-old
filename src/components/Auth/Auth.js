import React, { Component } from "react";
import classes from "./auth.module.css";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

class Auth extends Component {
  state = {
    isLogin: true,
    creds: {
      email: {
        isValid: false,
        value: "",
        isTouched: "",
        // eslint-disable-next-line
        regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      },
      password: {
        isValid: false,
        value: "",
        isTouched: "",
        // eslint-disable-next-line
        regex: /^.{6,}$/,
      },
    },
  };

  changeForm = () => {
    this.setState({
      isLogin: !this.state.isLogin,
      creds: {
        ...this.state.creds,
        password: {
          ...this.state.creds.password,
          value: "",
          isValid: false,
          isTouched: false,
        },
      },
    });
  };

  inputHandler = (e) => {
    const type = e.target.id;
    const input = { ...this.state.creds[type] };
    input.value = e.target.value;
    input.isTouched = true;
    input.isValid = input.regex.test(e.target.value);

    this.setState({
      creds: {
        ...this.state.creds,
        [type]: input,
      },
    });
  };

  render() {
    const form = this.state.isLogin ? (
      <Login
        changeForm={this.changeForm}
        creds={this.state.creds}
        inputHandler={this.inputHandler}
      ></Login>
    ) : (
      <Signup
        changeForm={this.changeForm}
        creds={this.state.creds}
        inputHandler={this.inputHandler}
      ></Signup>
    );
    return <div className={classes.authContainer}>{form}</div>;
  }
}

export default Auth;
