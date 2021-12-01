import NavBar from "./navbar";
import "../styles/header.css";
import Uzbmapsvg from "./uzbmapsvg";
import { useEffect, useState } from "react";
import YolStatistika from "./yolStatistika";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import axios from "axios";

function Header() {
  const [image, setImage] = useState();
  const [regionRoadLength, setRegionRoadLength] = useState({});

  const duration = 1000;

  return (
    <div
      className="header w-100 d-flex flex-column overflow-hidden"
      id="header"
    >
      <NavBar />
      <div className="headerContainer">
        <div className="malumotCont d-flex flex-column w-25">
          <h2
            className="malumot text-light"
            data-aos="fade-right"
            data-aos-duration={duration}
            data-aos-delay="1000"
          >
            O'zbekiton Respublikasi yo'llari haqida ma'lumot olishni istaysizmi?
          </h2>
          <h4
            className="py-3 text-light"
            data-aos="fade-right"
            data-aos-duration={duration}
            data-aos-delay="1200"
          >
            Viloyatingizni tanlang.
          </h4>
        </div>
        <div className="map">
          <div className="statCont d-flex align-items-center justify-content-center">
            <YolStatistika roadLength={regionRoadLength} />
          </div>
          <Uzbmapsvg
            duration={duration}
            changeRoadLength={(roadLength) => {
              setRegionRoadLength(roadLength);
            }}
          />
        </div>
      </div>
      <div className="messengers">
        <FaTelegram
          className="fs-1 icons"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1600"
        />
        <FaInstagram
          className="fs-1 icons"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1800"
        />
        <FaFacebook
          className="fs-1 icons"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2000"
        />
        <FaTwitter
          className="fs-1 icons"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2200"
        />
      </div>
    </div>
  );
}

export default Header;
