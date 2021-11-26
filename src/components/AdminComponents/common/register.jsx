import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import * as userService from "../services/userService";
import "../css/Roads.css";

class RegisterForm extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      middleName: "",
      username: "",
      password: "",
      region: "",
      role: "",
    },
    errors: {},
  };

  schema = {
    firstName: Joi.string().required().label("Ismingiz"),
    lastName: Joi.string().required().label("Familiyangiz"),
    middleName: Joi.string().required().label("Sharfingiz"),
    username: Joi.string().required().label("Username"),
    password: Joi.string().min(6).required().label("Password"),
    region: Joi.string().required().label("Region"),
    role: Joi.string().required().label("Role"),
  };

  doSubmit = async () => {
    try {
      userService.register(this.state.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="rigisterForm">
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstName", "Ism")}
          {this.renderInput("lastName", "Familiya")}
          {this.renderInput("middleName", "Otasining Ismi")}
          {this.renderInput("region", "Hudud")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          <h2>Admin or SuperAdmin?</h2>
          {this.renderInput("role", "Role")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
