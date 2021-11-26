import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../css/Roads.css";
import Table from "./../../table";

class AllRoads extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div className="paddingTop ">
          <div className="roadsmain main ">
            <div className="row marBot">
              <ol className="breadcrumb">
                <li>
                  <a href="/">
                    <em className="fa fa-home"></em>
                  </a>
                </li>
                <li className="active">All Roads </li>
              </ol>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading">All Roads Table</div>
                  <div className="panel-body no-padding">
                    <div className="App">{<Table />}</div>
                    {/* <CreateTableAdmin /> */}
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

export default AllRoads;
