import React from "react";
import MessagePanel from "./messagePanel";
import Sidebar from "./Sidebar";

const Messages = () => {
  return (
    <>
      <Sidebar />
      <div className="roadsmain main">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading d-flex align-items-center justify-content-between px-4">
                Xabarlar
              </div>
              <MessagePanel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
