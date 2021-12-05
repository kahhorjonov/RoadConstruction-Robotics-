import React, { Component } from "react";
import { YMaps, Map, Polyline, ZoomControl } from "react-yandex-maps";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

class YandexMap extends Component {
  mapState = {
    center: this.props.centerCoor,
    zoom: 10,
    controls: [],
  };
  state = {
    // hintLayout: "hello",
    coordinatesAPI: [],
  };

  async componentDidMount() {
    const coordinates = await axios.get(
      "http://yolproject.herokuapp.com/api/road/getallcoordinate"
    );
    this.setState({ coordinatesAPI: coordinates.data });
  }

  changeColor = (status) => {
    if (status === "Ta'mirlanmoqda") return "#00FF00";
    else if (status === "Tayyor") return "#0000FF";
    else return "#DC143C";
  };

  render() {
    return (
      <>
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2">
          <div className="row">
            <div>
              <div className="panel panel-default">
                {/* <div className="panel-heading">Client Page Map</div> */}
                <div className="panel-body">
                  <div>
                    <YMaps>
                      <Map
                        style={{
                          width: "100vw",
                          height: "100vh",
                        }}
                        // instanceRef={(ref) => {
                        //   ref && ref.behaviors.disable("scrollZoom");
                        // }}
                        defaultState={this.mapState}
                      >
                        <ZoomControl options={{ float: "left" }} />
                        {this.state.coordinatesAPI.map((obj) => {
                          return (
                            <Polyline
                              key={obj.id}
                              geometry={obj.coordinates}
                              options={{
                                fillColor: this.changeColor(obj.status),
                                strokeColor: this.changeColor(obj.status),
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

        {/* Map 2.1 Client Map End */}
      </>
    );
  }
}

export default YandexMap;
