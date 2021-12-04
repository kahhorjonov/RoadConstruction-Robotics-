import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import auth from "../services/authService";
import logo from "../css/camera-icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../css/Roads.css";
import "../css/styles.css";

class Sidebar extends Component {
  state = {};

  async componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState(user);
  }

  render() {
    const user = this.state;
    return (
      <>
        <div id="sidebar-collapse" className=" sidebar">
          <div className="profile-sidebar">
            <div className="profile-userpic">
              <img src={logo} className="img-responsive" alt="" />
            </div>
            <div className="profile-usertitle">
              <div className="profile-usertitle-name">{user.Name}</div>
              <div className="profile-usertitle-status">
                <span className="indicator label-success"></span>
                {user.Role}
              </div>
            </div>
            <div className="clear"></div>
          </div>

          <div className="divider"></div>
          <ul className="nav menu admin_sidebar">
            <li>
              <Link className="nav-item nav-link" to="/admin">
                <em className="fa fa-dashboard color-grey">&nbsp;</em>{" "}
                Constructor Maps
              </Link>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/ClientPageMap">
                <em className="fa fa-calendar color-grey">&nbsp;</em>Client Page
                Map
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/createNews">
                <em className="fa fa-newspaper-o" aria-hidden="true">
                  &nbsp;
                </em>{" "}
                News
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/createAdmin">
                <em className="fa fa-user-circle-o">&nbsp;</em> Create Admin
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/createCompany">
                <em className="fa fa-users">&nbsp;</em> Create Company
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/messages">
                <em className="fa fa-envelope">&nbsp;</em> Xabarlar
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item nav-link" to="/logout">
                <em className="fa fa-power-off">&nbsp;</em> Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Sidebar;
