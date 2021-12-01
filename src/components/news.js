import axios from "axios";
import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import dataTable from "../components/table-data";
import "../styles/news.css";

function News() {
  const [moreStat, setMoreStat] = useState(false);

  // const [dataAPI, setDataAPI] = useState([]);

  // useEffect(() => {
  //   const componentDidMount = async () => {
  //     axios
  //       .get("http://yolproject.herokuapp.com/api/road/getroads")
  //       .then((resultApi) => {
  //         setDataAPI(resultApi.data.data);
  //       });
  //   };
  //   componentDidMount();
  // }, []);

  // console.log("dataAPI: ", dataAPI);

  function NewsComp(props) {
    return (
      <div className="w-100 d-flex justify-content-center">
        <div className="d-flex flex-column align-items-center">
          <div className="newsCont w-100 d-flex py-4 justify-content-center">
            <h4
              className="w-25 mx-5 text-decoration-underline text-lg-end"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {props.data.statusi}
            </h4>
            <div>
              <h4
                data-aos="fade-down"
                data-aos-duration="1000"
                // data-aos-delay="300"
              >
                {props.data.nomi}
              </h4>
              <h6
                className="fst-italic fw-light"
                data-aos="fade-right"
                data-aos-duration="1000"
                // data-aos-delay="500"
              >
                <FaCalendarAlt /> Dushanba, {props.data.sana}
              </h6>
              <h5
                className="fw-light px-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                // data-aos-delay="700"
              >
                Describe your experience at school, what you learned, what
                useful skills you have acquired etc. <br />
                {/* <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Batafsil...
                </button> */}
              </h5>
            </div>
          </div>
          <hr className="w-100 text-lg-center" />
        </div>
      </div>
    );
  }

  return (
    <div className="news py-2 d-flex flex-column justify-content-evenly align-items-center">
      <h2>Yangiliklar</h2>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Batafsil...
      </button>
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <NewsComp data={dataTable[dataTable.length - 1]} />
      <NewsComp data={dataTable[dataTable.length - 2]} />
      <NewsComp data={dataTable[dataTable.length - 3]} />
    </div>
  );
}

export default News;
