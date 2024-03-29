import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "./services/authService";
import { Redirect } from "react-router";

import "./loginStyle.css";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    console.log(this.state.data);

    try {
      const { username, password } = this.state.data;
      await auth.login(username, password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/not-found";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/admin" />;

    return (
      <div className="loginDiv">
        <h1 className="text-center">Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
