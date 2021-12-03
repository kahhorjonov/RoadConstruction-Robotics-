import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const getNewsApiId = "http://yolproject.herokuapp.com/api/news/getnews";

const EditNewsItems = ({ id, cancel }) => {
  const { register, handleSubmit, reset } = useForm({});
  const [newsDataId, setNewsDataId] = useState([]);
  const onEdit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    axios.get(`${getNewsApiId}/${id}`).then((newsId) => setNewsDataId(newsId));
  });
  return (
    <form
      className="d-flex flex-column align-items-center w-50 m-auto"
      onSubmit={handleSubmit(onEdit)}
    >
      <h4>Yangilikni tahrirlash</h4>
      <select {...register("title")} className="w-75 p-2 my-2">
        <option selected disabled>
          Holatni tanlang*
        </option>
        <option>Rejalashtirilmoqda</option>
        <option>Ta'mirlanmoqda</option>
        <option>Tayyor</option>
      </select>
      <input
        defaultValue={newsDataId.name}
        {...register("name")}
        required
        className="w-75 p-2 my-2"
        type="text"
        placeholder="Ko'cha nomi"
      />
      <input
        defaultValue={newsDataId.date}
        {...register("date")}
        required
        className="w-75 p-2 my-2"
        type="date"
        placeholder="Sana"
      />
      <textarea
        defaultValue={newsDataId.newsMessage}
        {...register("newsMessage")}
        required
        className="w-75 p-2 my-2"
        cols="30"
        rows="10"
        placeholder="Yangilik matni"
      />
      <div className="d-flex align-items-center justify-content-between w-75">
        <label for="imageTo" className="w-25">
          Rasm yuborish *
        </label>
        <input
          {...register("image")}
          accept="image/*"
          className="form-control form-control-sm p-2 my-2 w-75"
          type="file"
          id="imageTo"
        />
      </div>
      <div className="d-flex w-75 ">
        <button type="submit" className="btn btn-primary w-50 p-2 m-2">
          Saqlash
        </button>
        <button
          className="btn btn-secondary w-50 p-2 my-2"
          onClick={() => cancel()}
        >
          Bekor qilish
        </button>
      </div>
    </form>
  );
};

export default EditNewsItems;
