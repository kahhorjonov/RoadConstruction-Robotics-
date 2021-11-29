import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../css/Roads.css";
import Table from "./table";

class AllRoads extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div className="paddingTop ">
          <div className="roadsmain main ">
            <div className="mb-2">
              <ol className="breadcrumb">
                <li>
                  <a href="/admin">
                    <em className="fa fa-home"></em>
                  </a>
                </li>
                <li className="active">All Roads </li>
              </ol>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading d-flex align-items-center">
                    All Roads Table
                  </div>
                  <div className="panel-body no-padding">
                    {<Table />}
                    <div className="App"></div>
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
