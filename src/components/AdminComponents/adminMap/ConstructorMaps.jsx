import React, { Component } from "react";
import Map20 from "./Map20";
import Roads from "./Roads";
import Sidebar from "./Sidebar";
import "../css/Roads.css";
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

class ConstructorMaps extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <Roads />
        <Map20 />
      </>
    );
  }
}

export default ConstructorMaps;
