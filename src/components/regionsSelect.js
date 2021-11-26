import { useState } from "react";
import RegionList from "./regionList.json";

function RegionsSelect(props) {
  const [options, setOptions] = useState([]);
  const handleChange = (e) => {
    setOptions([
      {
        value: e.target.value,
        text: e.target.options[e.target.selectedIndex].text,
      },
    ]);
  };

  const Tumanlar = () => {
    return (
      <div>
        <label
          for="district"
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-delay="800"
        >
          Tuman *
        </label>
        <select
          required
          className="district"
          id="district"
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-delay="900"
          // {...register("tuman")}
        >
          <option selected disabled>
            Tuman tanlang
          </option>
          <option>Andijon tumani</option>
          <option>Bo'ston tumani</option>

          {/* {RegionList[0].forEach((element) => (
          <option>{element}</option>
        ))} */}
        </select>
      </div>
    );
  };

  const Viloyatlar = ({ change }) => {
    return (
      <>
        <div className="d-flex align-items-center">
          <label
            for="regionSelect"
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-delay="600"
          >
            Viloyat *
          </label>
          <select
            required
            id="regionSelect"
            className="regionSelect"
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-delay="700"
            onChange={(e) => props.addValue(`viloyat: ${e.target.value}`)}
            // {...register("viloyat")}
          >
            <option selected disabled>
              Viloyatni tanlang
            </option>
            <option value="0">Andijon viloyati</option>
            <option value="1">Fargona viloyati</option>
            <option value="2">Namangan viloyati</option>
          </select>
        </div>
        <Tumanlar />
      </>
    );
  };

  return <Viloyatlar change={handleChange} />;
}

export default RegionsSelect;
