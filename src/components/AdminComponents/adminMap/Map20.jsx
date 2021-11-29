import React, { Component } from "react";
import { YMaps, Map, Polyline } from "react-yandex-maps";
import "../css/Roads.css";

const mapState = {
  center: [41.31983620420839, 69.28014875411984],
  zoom: 10,
  controls: [],
};

export let planningRoads = [];

class Map20 extends Component {
  state = {
    geom: [],
  };

  handleDelete = () => {
    const geom = [];
    this.setState({ geom });
    planningRoads = [...new Set(planningRoads)];
  };

  draw = (ref) => {
    planningRoads = [];
    ref.editor.startDrawing();

    ref.editor.events.add("statechange", (event) => {
      const coor = event.originalEvent.target.geometry._coordPath._coordinates;
      if (coor.length !== 0) {
        planningRoads.push(coor);
        this.props.changeCoor(coor);
      }
      console.log(event.originalEvent.target.geometry._coordPath._coordinates);
      console.log(planningRoads);
    });
  };

  render() {
    return (
      <div>
        <div className="roadsmain main">
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading d-flex align-items-center justify-content-between">
                  Draw lines to the map
                  <button
                    // getPlanningRoads={planningRoads}
                    onClick={() => this.handleDelete()}
                    className="pull-right btn btn-danger"
                  >
                    Delete Line
                  </button>
                </div>
                <div className="panel-body">
                  <div className="App">
                    {/* Yandex React Maps */}
                    <YMaps>
                      <Map
                        style={{
                          width: "100%",
                          height: "80vh",
                        }}
                        defaultState={mapState}
                        modules={["geoObject.addon.editor"]}
                      >
                        <Polyline
                          instanceRef={(ref) => ref && this.draw(ref)}
                          geometry={this.state.geom}
                          modules={["geoObject.addon.editor"]}
                          options={{
                            editorDrawingCursor: "crosshair",
                            // editorMaxPoints: "25",
                            fillColor: "#00FF00",
                            strokeColor: "#0000FF",
                            strokeWidth: 2,
                          }}
                        />
                      </Map>
                    </YMaps>
                    <map />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map20;
