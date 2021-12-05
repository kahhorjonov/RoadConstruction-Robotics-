import axios from "axios";
import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
// import dataTable from "../components/table-data";
import "../styles/news.css";
import MoreNewsModal from "./moreNewsModal";

const getNewsApi = "http://yolproject.herokuapp.com/api/news/getnewses";
function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios.get(getNewsApi).then((news) => {
      setNewsData(news.data.data);
    });
  }, []);

  function NewsComp({ data }) {
    const [modalShow, setModalShow] = useState(false);
    const [newsData, setNewsData] = useState([]);

    return (
      <div class="col-md-4 col-sm-6 content-card m-auto">
        <div class="card-big-shadow m-auto">
          <div
            class="card card-just-text"
            data-background="color"
            data-color="blue"
            data-radius="none"
          >
            <div class="content">
              <h4 class="title">{data.title}</h4>
              <p class="description">
                {data.text.substr(0, 100)} <br />
                <button
                  className="border-0 outline-none bg-transparent mt-1"
                  onClick={() => {
                    setModalShow(true);
                    setNewsData(data);
                  }}
                >
                  Batafsil...
                </button>
              </p>
              <h6 class="category">
                <FaCalendarAlt /> {data.createdTime.substr(0, 10)}
              </h6>
            </div>
            <MoreNewsModal
              show={modalShow}
              data={newsData}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="news py-4 d-flex flex-column justify-content-evenly align-items-center">
      <h2>Yangiliklar</h2>
      <div class="container bootstrap snippets bootdeys row">
        {newsData.map((news) => {
          return <NewsComp data={news} />;
        })}
      </div>
    </div>
  );
}

export default News;
