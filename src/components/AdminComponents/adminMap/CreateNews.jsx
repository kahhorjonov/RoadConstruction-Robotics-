import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useForm } from "react-hook-form";
// import { tsAnyKeyword } from "@babel/types";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useEffect } from "react";
import EditNewsItems from "./editNews";

const getNewsApi = "http://yolproject.herokuapp.com/api/news/getnewses";

const CreateNews = () => {
  const { register, handleSubmit, reset } = useForm({});
  const [editNewsId, setEditNewsId] = useState(null);
  const [deleteNewsId, setDeleteNewsId] = useState(null);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios.get(getNewsApi).then((news) => {
      console.log(news);
      setNewsData(news.data.data);
    });
  }, []);

  const onAdd = (data) => {
    postNews(data);
  };

  const postNews = async (data) => {
    const bodyFormData = new FormData();
    bodyFormData.append("title", data.title);
    bodyFormData.append("text", data.text);
    bodyFormData.append("imageFile", data.image[0]);
    bodyFormData.append(
      "adminId",
      `${jwtDecode(localStorage.getItem("token")).Id}`
    );

    for (var pair of bodyFormData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    try {
      const result = await axios({
        method: "post",
        url: "http://yolproject.herokuapp.com/api/news/createnews",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("result", result);
      if (result) reset();
    } catch (err) {
      alert(err.message);
    }
    // window.location = "/createNews";
    reset();
  };

  const ReadNews = ({ data }) => {
    console.log(data);
    return (
      <h1>vaaay</h1>
      //   <div class="card w-50 mx-2">
      //     <div class="card-header">{data.title}</div>
      //     <div class="card-body bg-white">
      //       <p class="card-text">{data.text}</p>
      //       <div className="d-flex justify-content-end ">
      //         <button
      //           href="#"
      //           class="btn btn-warning m-1"
      //           onClick={() => setEditNewsId(data.id)}
      //         >
      //           🖋
      //         </button>
      //         <button
      //           href="#"
      //           class="btn btn-danger m-1"
      //           onClick={() => setDeleteNewsId(data.id)}
      //         >
      //           🗑
      //         </button>
      //       </div>
      //     </div>
      //   </div>
    );
  };

  const CreateNewsItem = () => {
    return (
      <form
        className="d-flex flex-column align-items-center w-50 m-auto"
        onSubmit={handleSubmit(onAdd)}
      >
        <h4>Yangilik qo`shish</h4>
        <input
          {...register("title")}
          required
          type="text"
          className="w-75 p-2 my-2"
          placeholder="Sarlavha"
        />
        <textarea
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
            {...register("image")}
            accept="image/*"
            className="form-control form-control-sm p-2 my-2 w-75"
            type="file"
            id="imageTo"
          />
        </div>
        <button className="btn btn-primary w-75 p-2 my-2">Saqlash</button>
      </form>
    );
  };

  const AddOrEd = (id) => {
    if (id)
      return (
        <EditNewsItems id={editNewsId} cancel={() => setEditNewsId(null)} />
      );
    else return <CreateNewsItem />;
  };

  return (
    <>
      <Sidebar />
      <div className="roadsmain main">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading d-flex align-items-center justify-content-between px-4">
                News
              </div>
              <div className="d-flex justify-content-between m-2">
                <ReadNews data={newsData[newsData.length - 1]} />
                <ReadNews data={newsData[newsData.length - 2]} />
                <ReadNews data={newsData[newsData.length - 3]} />
              </div>
              {AddOrEd(editNewsId)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNews;
