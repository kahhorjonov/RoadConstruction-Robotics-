import React, { Component } from "react";
import axios from "axios";
import "../css/Roads.css";

class Roads extends Component {
  state = {
    Rejalashtirilmoqda: [],
    Tayyor: [],
    Tamirlanayotkan: [],
    total: 0,
  };

  async componentDidMount() {
    const companies = await axios.get(
      "http://yolproject.herokuapp.com/api/company/getcompanies"
    );

    const total = companies.data.total;

    this.setState({ total });
    console.log(this.state);

    try {
      const { data: roads } = await axios.get(
        "http://yolproject.herokuapp.com/api/road/getallcoordinate"
      );

      const Rejalashtirilmoqda = roads.filter(
        (road) => road.status === "Rejalashtirilmoqda"
      );
      const Tayyor = roads.filter((road) => road.status === "Tayyor");
      const Tamirlanayotkan = roads.filter(
        (road) => road.status === "Ta'mirlanmoqda"
      );

      this.setState({ Rejalashtirilmoqda, Tayyor, Tamirlanayotkan });
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
    return (
      <>
        <div className=" roadsmain main">
          <div className="row">
            <ol className="breadcrumb">
              <li>
                <a href="/admin">
                  <em className="fa fa-home mr-2"></em>
                </a>
              </li>
              <li className="active">Constructor Maps</li>
            </ol>
          </div>
          {/* <!--/.row--> */}
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">Roads</h1>
            </div>
          </div>
          {/* <!--/.row--> */}
          <div className="panel panel-container">
            <div className="row">
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-teal panel-widget border-right">
                  <div className="row no-padding">
                    <em className="fa fa-calendar-check-o fa-2x color-blue"></em>
                    <div className="large">
                      {this.state.Rejalashtirilmoqda.length}
                    </div>
                    <div className="text-muted">
                      Rejalashtirilayotgan Yo'llar
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-blue panel-widget border-right">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-road fa-2x color-orange"></em>
                    <div className="large">
                      {this.state.Tamirlanayotkan.length}
                    </div>
                    <div className="text-muted">Ta'mirlanayotgan Yo'llar</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-orange panel-widget border-right">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-check fa-2x color-teal"></em>
                    <div className="large">{this.state.Tayyor.length}</div>
                    <div className="text-muted">Tayyor Yo'llar</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-3 col-lg-3 no-padding">
                <div className="panel panel-red panel-widget">
                  <div className="row no-padding">
                    <em className="fa fa-xl fa-briefcase fa-2x color-grey"></em>
                    <div className="large">{this.state.total}</div>
                    <div className="text-muted">Hamkorlar</div>
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

export default Roads;
