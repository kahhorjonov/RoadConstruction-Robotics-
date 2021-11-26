import { FaRoad } from "react-icons/fa";
import { MdAddRoad, MdEditRoad } from "react-icons/md";
import CountUp from "react-countup";

function YolStatistika({ roadLength }) {
  const StatBox = (props) => {
    return (
      <div className="statistika overflow-hidden">
        {props.data.icons}
        <h6 className="p-0 m-0">{props.data.holat}</h6>
        <h5 className="px-1 m-0">
          <CountUp end={props.data.uzunligi} duration={0.5} suffix=" km" />
        </h5>
      </div>
    );
  };

  return (
    <div
      className="d-flex flex-column"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="1600"
    >
      <h5
        className="text-center regionsName py-1"
        // data-aos="zoom-in"
        // data-aos-duration="1000"
        // data-aos-delay="1600"
      >
        {roadLength.viloyat}
      </h5>
      <div className="d-flex">
        <StatBox
          data={{
            holat: "Rejalashtirilgan yo'llar",
            uzunligi: roadLength.reja,
            icons: <MdAddRoad className="fs-3 text-black" />,
          }}
        />
        <StatBox
          data={{
            holat: "Tamirlanayotgan yo'llar",
            uzunligi: roadLength.tamir,
            icons: <MdEditRoad className="fs-3 text-black" />,
          }}
        />
        <StatBox
          data={{
            holat: "Tamirlanib bo'lgan yo'llar",
            uzunligi: roadLength.tayyor,
            icons: <FaRoad className="fs-3 text-black" />,
          }}
        />
      </div>
    </div>
  );
}

export default YolStatistika;
