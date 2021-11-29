import "../styles/contact.css";
import { FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import YandexMap from "./yandexMap";
import { useState } from "react";

function Contact() {
  const [options, setOptions] = useState([]);
  const { register, handleSubmit } = useForm();
  const onReg = (reg) => console.log(reg);

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
        <label for="district" data-aos="fade-right" data-aos-duration="400">
          Tuman *
        </label>
        <select
          required
          className="district"
          id="district"
          data-aos="fade-right"
          data-aos-duration="400"
          {...register("tuman")}
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
          >
            Viloyat *
          </label>
          <select
            required
            id="regionSelect"
            className="regionSelect"
            data-aos="fade-right"
            data-aos-duration="400"
            {...register("viloyat")}
          >
            <option selected disabled>
              Viloyatni tanlang
            </option>
            <option>Andijon viloyati</option>
            <option>Fargona viloyati</option>
            <option>Namangan viloyati</option>
          </select>
        </div>
        <Tumanlar />
      </>
    );
  };

  return (
    <div className="d-flex justify-content-center overflow-hidden" id="contact">
      <div className="contact d-flex flex-column align-items-center py-4">
        <h1
          className="py-1 text-light"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <FaEnvelope /> Biz bilan aloqa
        </h1>
        <div className="contactCont d-flex justify-content-center gap-5">
          <form
            className="d-flex flex-column form"
            onSubmit={handleSubmit(onReg)}
          >
            <div>
              <label for="name" data-aos="fade-right" data-aos-duration="400">
                F.I.O. *
              </label>
              <input
                {...register("fio")}
                type="text"
                id="name"
                required
                data-aos="fade-right"
                data-aos-duration="400"
              />
            </div>
            <div>
              <label for="email" data-aos="fade-right" data-aos-duration="400">
                Email *
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                required
                data-aos="fade-right"
                data-aos-duration="400"
              />
            </div>
            <Viloyatlar change={handleChange} />
            <div>
              <label for="adres" data-aos="fade-right" data-aos-duration="400">
                Ko'cha nomi *
              </label>
              <input
                {...register("adress")}
                type="text"
                id="adres"
                required
                data-aos="fade-right"
                data-aos-duration="400"
              />
            </div>
            <div className="d-flex align-items-start">
              <label
                for="message"
                className="my-2"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                Xabar matni *
              </label>
              <textarea
                {...register("message")}
                id="message"
                required
                rows="6"
                data-aos="fade-right"
                data-aos-duration="400"
              />
            </div>
            <div>
              <label
                for="fileSend"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-offset="0"
              >
                Rasm yuborish
              </label>
              <input
                {...register("fileSend")}
                type="file"
                accept="image/*"
                id="fileSend"
                className="text-decoration-underline"
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-offset="0"
              />
            </div>
            <button
              type="submit"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-offset="0"
            >
              JO'NATISH
            </button>
          </form>

          <div className="contactAboutCont w-25">
            <h3
              data-aos="fade-down"
              data-aos-duration="400"
              className="text-light"
            >
              Tashkilot haqida ma'lumot
            </h3>
            <h5
              className="fw-light text-light"
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-offset="0"
            >
              Use this bio section as your way of describing yourself and saying
              what you do, what technologies you like to use or feel most
              comfortable with, describing your personality, or whatever else
              you feel like throwing in.
            </h5>
            <br />

            <h3
              data-aos="fade-down"
              data-aos-duration="400"
              className="text-light"
            >
              Manzil va telefon
            </h3>
            <h5
              className="fw-light text-light"
              data-aos="fade-left"
              data-aos-duration="400"
            >
              Tashkilot nomi (Manzili) (Toshkent shahar), (O'zbekiston
              Respublika) 10080 <br />
              <a
                className="text-decoration-none text-"
                href="tel: +998 99 999 99 99"
              >
                +998-99-999-99-99
              </a>
            </h5>

            <iframe
              src="https://yandex.ua/map-widget/v1/?um=constructor%3A5323026e6e2c03580814bb322d618c525c305e57892ac51a51f00831787981d0&amp;source=constructor"
              width="370"
              height="195"
              className="my-2"
              frameborder="0"
              data-aos="zoom-in"
              data-aos-duration="1000"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
