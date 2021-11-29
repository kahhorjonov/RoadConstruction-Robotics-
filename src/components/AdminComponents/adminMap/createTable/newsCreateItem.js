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

  const addNewItemPost = "http://yolproject.herokuapp.com/api/news/createnews";
  async function postNewItem(newData) {
    try {
      const data = await axios.post(addNewItemPost, {
        title: newData.title,
        status: newData.status,
        text: newData.text,
        adminId: "8d202dd6-7aa4-4b70-a749-84c55195d1e8",
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
          {...register("title")}
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
          rows={20}
          type="textarea"
          {...register("text")}
          placeholder="Yangilik matni*"
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
