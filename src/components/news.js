import axios from "axios";
import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
// import dataTable from "../components/table-data";
import "../styles/news.css";

const getNewsApi = "http://yolproject.herokuapp.com/api/news/getnewses";
function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios.get(getNewsApi).then((news) => {
      setNewsData(news.data.data);
      // console.log("useEffect");
    });
  }, []);

  function NewsComp({ data }) {
    // console.log(data);
    return (
      <div className="w-100 d-flex justify-content-center">
        <div className="d-flex flex-column align-items-center">
          <div className="newsCont w-100 d-flex py-4 justify-content-center">
            <h4
              className="w-25 mx-5 text-decoration-underline text-lg-end"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {data.title}
            </h4>
            <div className="w-75">
              <h4
                data-aos="fade-down"
                data-aos-duration="1000"
                // data-aos-delay="300"
              >
                {data.title}
              </h4>
              <h6
                className="fst-italic fw-light"
                data-aos="fade-right"
                data-aos-duration="1000"
                // data-aos-delay="500"
              >
                <FaCalendarAlt />
                {data.createdTime.substr(0, 10)}
              </h6>
              <h5
                className="fw-light px-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                // data-aos-delay="700"
              >
                {data.text} <br />
              </h5>
            </div>
          </div>
          <hr className="w-100 text-lg-center" />
        </div>
      </div>
    );
  }
  // console.log("return");
  let num = 1;
  const ReadNews = ({ data }) => {
    // console.log(data);
    return (
      <tr>
        <td>{num++}</td>
        <td>{data.title.substr(0, 20)}...</td>
        <td>{data.createdTime.substr(0, 10)}</td>
        <td>{data.text.substr(0, 20)}...</td>
        <td>
          <button className="btn btn-warning">🖋</button>
        </td>
        <td>
          <button className="btn btn-danger">🗑</button>
        </td>
      </tr>
    );
  };

  return (
    <div className="news py-2 d-flex flex-column justify-content-evenly align-items-center">
      <h2>Yangiliklar</h2>
      {/* 
      {newsData.map((news) => {
        return <NewsComp data={news} />;
      })} */}
      {/* <NewsComp data={newsData[0]} />; */}
      {/* <NewsComp data={newsData[newsData.length - 2]} />; */}
      {/* <NewsComp data={newsData[newsData.length - 1]} />; */}
    </div>
  );
}

export default News;
