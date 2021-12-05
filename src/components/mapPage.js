import YandexMap from "./yandexMap";
import { FaBackspace, FaRoad } from "react-icons/fa";
import { MdAddRoad, MdEditRoad } from "react-icons/md";
import { Link } from "react-router-dom";

function MapPage(props) {
  return (
    <div
      className="d-flex bg-secondary position-relative align-items-center overflow-hidden"
      style={{ width: "99vw", height: "100%" }}
    >
      <h3
        className="bg-secondary p-2 px-3 my-1 position-absolute text-light"
        style={{ zIndex: 1, top: "10px", left: "-7px", borderRadius: "5px" }}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        {props.location.state.viloyat}
      </h3>
      <Link to="/">
        <FaBackspace
          className="bg-secondary my-1 position-absolute h1 p-1 px-2"
          style={{
            zIndex: 1,
            top: "10px",
            right: "15px",
            borderRadius: "5px",
            fill: "#fff",
          }}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="1000"
        />
      </Link>
      <YandexMap centerCoor={props.location.state.centerCoor} />
      <div
        className="d-flex position-absolute justify-content-center gap-2"
        style={{ zIndex: 1, width: "100vw", bottom: "-13px" }}
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <h6
          className="bg-secondary py-2 px-4 text-center text-light"
          style={{ borderRadius: "10px", width: "290px" }}
        >
          <MdAddRoad
            className="fs-3 text-black mx-2 text-danger"
            style={{ fill: "#DC143C" }}
          />
          Rejalashtirilayotkan yo'llar
        </h6>
        <h6
          className="bg-secondary py-2 px-4 text-center text-light"
          style={{ borderRadius: "10px", width: "290px" }}
        >
          <MdEditRoad
            className="fs-3 text-black mx-2 text-danger"
            style={{ fill: "#00FF00" }}
          />
          Ta'mirlanayotkan yo'llar
        </h6>
        <h6
          className="bg-secondary py-2 px-4 text-center text-light"
          style={{ borderRadius: "10px", width: "290px" }}
        >
          <FaRoad
            className="fs-3 text-black mx-2 text-danger"
            style={{ fill: "#0000FF" }}
          />
          Tayyor yo'llar
        </h6>
      </div>
    </div>
  );
}

export default MapPage;
