import React from "react";
import Sidebar from "./adminMap/Sidebar";

const CreateCompany = () => {
  return (
    <>
      <Sidebar />
      <div className="roadsmain main">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading d-flex align-items-center justify-content-between">
                Create Company
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCompany;
