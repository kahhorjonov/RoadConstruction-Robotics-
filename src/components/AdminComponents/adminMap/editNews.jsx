import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import jwtDecode from "jwt-decode";

const getNewsApiId = "http://yolproject.herokuapp.com/api/news/getnews";

const EditNewsItems = ({ id, cancel }) => {
  const { register, handleSubmit, reset } = useForm({});
  const [newsDataId, setNewsDataId] = useState([]);

  useEffect(() => {
    axios
      .get(`${getNewsApiId}/${id}`)
      .then((newsId) => setNewsDataId(newsId.data));
  }, [id]);

  const onEdit = (data) => {
    // console.log(data);
    editNews(newsDataId);
  };

  const editNews = async (data) => {
    console.log(newsDataId);

    const bodyFormData = new FormData();
    bodyFormData.append("title", data.title);
    bodyFormData.append("text", data.text);
    bodyFormData.append("imageFile", data.imageName);
    bodyFormData.append(
      "adminId",
      `${jwtDecode(localStorage.getItem("token")).Id}`
    );

    console.log(bodyFormData);

    for (var pair of bodyFormData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    try {
      const result = await axios({
        method: "put",
        url: `http://yolproject.herokuapp.com/api/news/getnews/${id}`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (result) {
        // console.log(result);
        reset();
      }
    } catch (err) {
      alert(err.message);
    }
    reset();
  };

  return (
    <form
      className="d-flex flex-column align-items-center w-50 m-auto"
      onSubmit={handleSubmit(onEdit)}
    >
      <h4>Yangilikni tahrirlash</h4>
      <input
        defaultValue={newsDataId.title}
        {...register("title")}
        required
        type="text"
        className="w-75 p-2 my-2"
        placeholder="Sarlavha"
      />
      <textarea
        defaultValue={newsDataId.text}
        {...register("text")}
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
          defaultValue={newsDataId.imageName}
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
