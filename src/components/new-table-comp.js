import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables.js";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $, { data } from "jquery";
import dataTable from "./table-data.json";
import tabletemplates from "./tabletemplate"
import { FiFilePlus } from "react-icons/fi";
import axios from "axios";
import { Link } from "react-router-dom";
import {useState} from 'react'
import Image from "../images/userImage.jpg";



class NewTableComp extends React.Component {
  
  
  
  state = {
    selectStatus: "",
    dataAPI: [],
  };
  
  async componentDidMount() {
    const dataApiRead = await axios.get(
      "http://yolproject.herokuapp.com/api/road/getroads"
      );
      
      // console.log(dataApiRead);
      this.setState({ dataAPI: dataApiRead.data.data });
      
      //initialize datatable
      $(document).ready(function () {
        $("#example").DataTable();
      });
    }
    
    render() {
      let id = 0;
      
      // selectni filtrlash boshlash
    const handleSelectStatusChange = (e) => {
      const selectStatus = e.target.value;
      this.setState({ selectStatus: selectStatus });
    };
    
    function selectFilter(val, statusVal) {
      if (statusVal === "barchasi" || statusVal === "") return val;
      else if (val.status.toLowerCase() === statusVal) return val;
    }
    
    
    // selectni filtrlash tugatish
    
    //Datatable HTML
    return (
      <div className="MainDiv my-4 overflow-hidden" id="table">
        <div class="jumbotron text-center bg-sky">
          <h3 data-aos="fade-down" data-aos-duration="1000">
            Yo'llar ro'yxati
          </h3>
          <select
            className="selectStatus"
            name="status"
            onChange={handleSelectStatusChange}
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{
              padding: "5px",
              border: "2px solid gray",
              outline: "none",
              borderRadius: "3px",
              marginTop: "10px",
            }}
          >
            <option value="default" selected disabled>
              Holatni tanlang
            </option>
            <option value="barchasi">Barchasi</option>
            <option value="ta'mirlanmoqda">Ta'mirlanayotgan yo'llar</option>
            <option value="rejalashtirilmoqda">
              Ta'mirlanishi rejalashtirilgan yo'llar
            </option>
            <option value="tayyor">Ta'mirlanib bo'lgan yo'llar</option>
          </select>
        </div>

        <div className="container">
          <table id="example" class="display">
            <thead>
              <tr
                data-aos="flip-up"
                data-aos-offset="50"
                data-aos-duration="1000"
              >
                <th>№</th>
                <th>Viloyat</th>
                <th>Ko'cha nomi</th>
                <th>Xolati</th>
                <th>Yo'l uzunligi</th>
                <th>Boshlangan sana</th>
                <th>Tugatilgan sana</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {this.state.dataAPI
                .filter((val) => selectFilter(val, this.state.selectStatus))
                .map((dataItem) => {
                  return (
                    <tr
                      data-aos="flip-up"
                      data-aos-offset="50"
                      data-aos-duration="1000"
                    >
                      <td>{++id}</td>
                      <td>{dataItem.region}</td>
                      <td>{dataItem.name}</td>
                      <td>{dataItem.status}</td>
                      <td>{dataItem.lenghth} km</td>
                      <td>{dataItem.startedAt.substr(0, 10)}</td>
                      <td>{dataItem.finishedAt.substr(0, 10)}</td>
                      <td>
                        <Link to={{ pathname: "/more", state: { dataItem } }}>
                          <FiFilePlus /> batafsil...
                          {/* <FiFilePlus /><button>Open Popup</button> */}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot
              data-aos="flip-up"
              data-aos-offset="50"
              data-aos-duration="1000"
            >
              <tr>
                <th>№</th>
                <th>Ko'cha nomi</th>
                <th>Xolati</th>
                <th>Yo'l uzunligi</th>
                <th>Boshlangan sana</th>
                <th>Tugatilgan sana</th>
                <th>...</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
export default NewTableComp;

