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
    postNewItem(data);
    // onChangeApiState(data);
  };

  const addNewItemPost = "http://yolproject.herokuapp.com/api/road/createroad";
  async function postNewItem(newData) {
    try {
      const data = await axios.post(addNewItemPost, {
        name: newData.name,
        status: newData.status,
        news: newData.Yangilik,
        img: newData.img,
        adminId: "8d202dd6-7aa4-4b70-a749-84c55195d1e8",
        cordinates: [
          [41.171650839592864, 69.21888695032128],
          [41.17528261681081, 69.20704231531151],
          [41.182804938531916, 69.19863090784084],
          [41.19473511155064, 69.1878162410928],
          [41.19981198980439, 69.18447450667651],
          [41.20785002528566, 69.18773607283859],
          [41.22042366565926, 69.19837907820974],
        ],
      });
      // window.location("/");
    } catch (error) {
      console.log("ERR", error);
    }
  }

  const width = {
    width: "635px",
  };

  return (
    <>
      <h3 className="text-center p-2">Yangi ma'lumot qo'shish</h3>
      <form
        className="addNewItems w-50 d-flex m-auto flex-column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={width}
          type="text"
          {...register("name")}
          placeholder="Yangilik Mavzusi*"
          required
        />

        <select style={width} {...register("status")} required>
          <option selected disabled>
            Holatni tanlang*
          </option>
          <option>Rejalashtirilmoqda</option>
          <option>Ta'mirlanmoqda</option>
          <option>Tayyor</option>
        </select>
        <textarea
          cols={40}
          rows={15}
          type="textarea"
          {...register("news")}
          placeholder="Yangilik matni*"
          required
        />
        <input
          style={width}
          type="File"
          {...register("img")}
          placeholder="Rasm yuklash*"
          required
        />

        <button type="submit" className="btn btn-primary">
          QO'SHISH
        </button>
      </form>
    </>
  );
}

export default CreateDataItem;
