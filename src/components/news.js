import axios from "axios";
import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import dataTable from "../components/table-data";
import "../styles/news.css";

const getNewsApi = "http://yolproject.herokuapp.com/api/news/getnewses";
function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios.get(getNewsApi).then((news) => {
      setNewsData(news);
      console.log(news);
    });
  }, []);

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

      <NewsComp data={dataTable[dataTable.length - 1]} />
      <NewsComp data={dataTable[dataTable.length - 2]} />
      <NewsComp data={dataTable[dataTable.length - 3]} />
    </div>
  );
}

export default News;
