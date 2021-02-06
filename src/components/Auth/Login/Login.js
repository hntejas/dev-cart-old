import React, { Component } from "react";
import classes from "../auth.module.css";

class Login extends Component {
  render() {
    return (
      <div className={classes.loginForm}>
        <h3>Login</h3>
        <input
          type="text"
          placeholder="email"
          id="email"
          className={
            this.props.creds.email.isTouched
              ? this.props.creds.email.isValid
                ? classes.validInput
                : classes.inValidInput
              : null
          }
          value={this.props.creds.email.value}
          onChange={(e) => this.props.inputHandler(e)}
        ></input>
        <input
          type="password"
          placeholder="password"
          id="password"
          className={
            this.props.creds.password.isTouched
              ? this.props.creds.password.isValid
                ? classes.validInput
                : classes.inValidInput
              : null
          }
          value={this.props.creds.password.value}
          onChange={(e) => this.props.inputHandler(e)}
        ></input>
        <button className={classes.actionButton}>Login</button>
        <p>
          New user?{" "}
          <span
            className={classes.changeAuthType}
            onClick={() => this.props.changeForm()}
          >
            Signup now
          </span>
        </p>
      </div>
    );
  }
}

export default Login;
