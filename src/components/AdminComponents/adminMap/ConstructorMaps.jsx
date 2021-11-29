import React, { Component } from "react";
import Map20 from "./Map20";
import Roads from "./Roads";
import Sidebar from "./Sidebar";
import Table from "./table";
import "../css/Roads.css";
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

class ConstructorMaps extends Component {
  async componentDidMount() {}

  render() {
    return (
      <>
        <Sidebar />
        <Roads />
        <Map20 />
        <div className="roadsmain main">
          <div className="row">
            <div className="col-xl-12 col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading d-flex align-items-center justify-content-between">
                  All Roads Table
                </div>
                <div className="panel-body no-padding">
                  <div className="App">
                    <Table />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ConstructorMaps;
