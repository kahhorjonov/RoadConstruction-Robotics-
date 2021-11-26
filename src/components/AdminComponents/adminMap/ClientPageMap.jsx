import React, { Component } from "react";
import ClientMap from "./ClientMap";
import Sidebar from "./Sidebar";

class ClientPageMap extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <ClientMap />
      </>
    );
  }
}

export default ClientPageMap;
