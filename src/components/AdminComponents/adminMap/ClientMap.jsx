import React, { Component } from "react";
import { YMaps, Map, Polyline } from "react-yandex-maps";
import axios from "axios";
import "../css/Roads.css";

const mapState = {
  center: [41.31983620420839, 69.28014875411984],
  zoom: 10,
};

class ClientMap extends Component {
  state = {
    roads: [],
  };

  async componentDidMount() {
    try {
      const { data: roads } = await axios.get(
        "http://yolproject.herokuapp.com/api/road/getallcoordinate"
      );
      this.setState({ roads });
    } catch (ex) {
      if (
        ex.response &&
        ex.response.status >= 400 &&
        ex.response.status < 500
      ) {
        alert("Connection Error");
      }
    }
  }

  render() {
    const roads = this.state.roads;
    return (
      <>
        <div className="roadsmain main">
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="App mt-4">
                    <YMaps>
                      <Map
                        style={{
                          width: "100%",
                          height: "93vh",
                        }}
                        defaultState={mapState}
                      >
                        {roads.map((obj) => {
                          let rang;
                          console.log(obj);
                          if (obj.status === "Rejalashtirilmoqda")
                            rang = "#00FF00";
                          if (obj.status === "Tayyor") rang = "#0000FF";
                          else rang = "#DC143C";
                          return (
                            <Polyline
                              key={obj.id}
                              geometry={obj.coordinates}
                              options={{
                                fillColor: rang,
                                strokeColor: rang,
                                strokeWidth: 2,
                              }}
                            />
                          );
                        })}
                      </Map>
                    </YMaps>
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

export default ClientMap;
