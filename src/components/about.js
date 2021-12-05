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
        <div className="w-50">
          <h3
            className="text-light pt-0"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Biz haqimizda
          </h3>
          <h5
            className="text-light fw-light my-3 w-75"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Ushbu saytning vazifasi va maqsadi yurtimizda bo`layotkan yo`l
            qurilishlari haqida ma`lumot berish va ko`rsatib berishdan iboratdir
          </h5>
          <h3
            className="text-light my-3"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Aloqa ma'lumotlari
          </h3>
          <h5
            className="text-light fw-light my-3"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Robotics Lab. tel: 555-555-5555 email: roboticslab@gmail.com
          </h5>
        </div>
      </div>
    </div>
  );
}

export default About;
