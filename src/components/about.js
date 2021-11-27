import "../styles/about.css";
import userImage from "../images/userImage.jpg";

function About() {
  return (
    <div
      className="about w-100 d-flex justify-content-center overflow-hidden"
      id="about"
    >
      <div className="aboutContainer">
        <img
          src={userImage}
          className="userImage top-50"
          data-aos="zoom-in"
          data-aos-duration="1000"
        />
        <div className="w-50 py-lg-5">
          <h3
            className="text-light my-3"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            Biz haqimizda
          </h3>
          <h5
            className="text-light fw-light my-3 w-75"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            Use this bio section as your way of describing yourself and saying
            what you do, what technologies you like to use or feel most
            comfortable with, describing your personality, or whatever else you
            feel like throwing in.
          </h5>
          <h3
            className="text-light my-3"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Aloqa ma'lumotlari
          </h3>
          <h5
            className="text-light fw-light my-3"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="1200"
          >
            Tim Baker (Your Street) (Your City) (Your State), (Your Zip/Postal
            Code) 555-555-5555 youremailhere@gmail.com
          </h5>
        </div>
      </div>
    </div>
  );
}

export default About;
