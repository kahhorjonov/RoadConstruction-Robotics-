import React from "react";
import Table from "./table";
import ReactDOM from "react-dom";
import TestApi from "./components/testApi";
// import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Table />
    {/* <TestApi /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
