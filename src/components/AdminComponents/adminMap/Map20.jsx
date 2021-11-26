import React, { Component } from "react";
import { YMaps, Map, Polyline } from "react-yandex-maps";
import "../css/Roads.css";

const mapState = {
  center: [41.31983620420839, 69.28014875411984],
  zoom: 10,
  controls: [],
};

export let planningRoads = [
  [
    [41.33799025174951, 69.25718190745432],
    [41.344200076914014, 69.25786855296217],
    [41.35403107991685, 69.26765325144846],
    [41.356747277525315, 69.27228810862623],
    [41.36282597263513, 69.28430440501293],
    [41.36528315509431, 69.28979756907543],
    [41.36631773026623, 69.29220082835278],
    [41.36243798791138, 69.2994106061848],
    [41.35015059951546, 69.31966664866529],
    [41.33824900637617, 69.33992269114573],
    [41.3293213732174, 69.33013799265943],
    [41.31767478165131, 69.31743505076489],
    [41.31858070287997, 69.3114269025715],
  ],
  [
    [41.3261972034574, 69.19426534853899],
    [41.35000263592932, 69.2188129254433],
    [41.347803588546725, 69.25057028017963],
    [41.348450374957295, 69.25554846011127],
    [41.346509996304185, 69.25983999453508],
    [41.33926540120726, 69.27151296816791],
    [41.33370203595143, 69.28232763491594],
    [41.33201999406196, 69.29503057681049],
    [41.33447834821788, 69.31116674624407],
    [41.327232404553584, 69.3144283124062],
    [41.31623254556716, 69.31065176211324],
    [41.30885512168692, 69.30412862978902],
    [41.3049719291311, 69.29846380434958],
    [41.2984994237237, 69.29691885195696],
    [41.291292995119434, 69.28378412864953],
  ],
  [
    [41.171650839592864, 69.21888695032128],
    [41.17528261681081, 69.20704231531151],
    [41.182804938531916, 69.19863090784084],
    [41.19473511155064, 69.1878162410928],
    [41.19981198980439, 69.18447450667651],
    [41.20785002528566, 69.18773607283859],
    [41.22042366565926, 69.19837907820974],
  ],
];

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
      if (coor.length !== 0) planningRoads.push(coor);
      // console.log(event.originalEvent.target.geometry._coordPath._coordinates);
      // console.log(planningRoads);
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
