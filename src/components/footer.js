import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div
        className="w-100 py-5 d-flex flex-column justify-content-between align-items-center bg-dark"
        id="footer"
      >
        <div className="messengers d-flex w-25 justify-content-evenly my-3">
          <a href="https://t.me/talabaTFK">
            <FaTelegram
              className="text-white fs-1 p-1"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-offset="10"
            />
          </a>
          <a href="https://www.instagram.com/faryozbekTFK">
            <FaInstagram
              className="text-white fs-1 p-1"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-offset="10"
            />
          </a>
          <a href="https://wwww.facebook.com">
            <FaFacebook
              className="text-white fs-1 p-1"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-offset="10"
            />
          </a>
          <a href="https://wwww.twitter.com">
            <FaTwitter
              className="text-white fs-1 p-1"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-offset="10"
            />
          </a>
        </div>
        <h6
          className="my-4 text-secondary text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="0"
        >
          © Copyright 2021 FaToKom_TFK * Design by RoboticsLab
        </h6>
      </div>
    </>
  );
}

export default Footer;
