import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function CreateDataItem({ onChangeApiState }) {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get("http://yolproject.herokuapp.com/api/company/getcompanies")
      .then((apiData) => {
        setCompany(apiData.data.data);
      });
  }, []);

  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    // onChangeApiState(data);
  };

  const addNewItemPost = "http://yolproject.herokuapp.com/api/road/createroad";
  // async function postNewItem(newData) {
  //   try {
  //     const data = await axios.post(addNewItemPost, {
  //       //
  //     });
  //     // window.location("/");
  //   } catch (error) {
  //     console.log("ERR", error);
  //   }
  // }

  const width = {
    width: "550px",
  };

  return (
    <>
      <h3 className="text-center  p-2">Yangi ma'lumot qo'shish</h3>
      <form
        className="addNewItems w-50 d-flex m-auto flex-column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={width}
          type="text"
          {...register("name")}
          placeholder="Ism*"
          required
        />
        <input
          style={width}
          type="text"
          {...register("sureName")}
          placeholder="Familiya*"
          required
        />
        <input
          style={width}
          type="text"
          {...register("familyName")}
          placeholder="Otasining ismi*"
          required
        />
        <select style={width} required>
          <option disabled selected>
            Viloyatni tanlang*
          </option>
          <option>Andijon viloyati</option>
          <option>Buxoro viloyati</option>
          <option>Jizzax viloyati</option>
          <option>Qashqadaryo viloyati</option>
          <option>Navoiy viloyati</option>
          <option>Namangan viloyati</option>
          <option>Samarqand viloyati</option>
          <option>Surxandaryo viloyati</option>
          <option>Sirdaryo viloyati</option>
          <option>Toshkent viloyati</option>
          <option>Farg‘ona viloyati</option>
          <option>Xorazm viloyati</option>
          <option>Toshkent shahri</option>
          <option>Qoraqalpog‘iston Respublikasi</option>
        </select>
        <input
          style={width}
          type="text"
          {...register("userNname")}
          placeholder="Username*"
          required
        />
        <input
          style={width}
          type="password"
          {...register("password")}
          placeholder="Password*"
          required
        />

        <select style={width} {...register("role")} required>
          <option selected disabled>
            Role*
          </option>
          <option>Admin</option>
          <option>SuperAdmin</option>
        </select>

        <button type="submit" className="btn btn-primary">
          QO'SHISH
        </button>
      </form>
    </>
  );
}

export default CreateDataItem;
