import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useForm } from "react-hook-form";
// import { tsAnyKeyword } from "@babel/types";

const CreateNews = () => {
  const { register, handleSubmit, reset } = useForm({});
  const [editNewsId, setEditNewsId] = useState(null);
  const [newsData, setNewsData] = useState([
    {
      title: "Tayyor",
      name: "Oydin k",
      date: "13.11.2000",
      newsMessage: "Hozir yangilik yo'q",
    },
  ]);
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const ReadNews = ({ data }) => {
    return (
      <div class="card w-50 mx-2">
        <div class="card-header">{data.title + "  |  " + data.date}</div>
        <div class="card-body bg-white">
          <h5 class="card-title">{data.name}</h5>
          <p class="card-text">{data.newsMessage}</p>
          <div className="d-flex justify-content-between ">
            <button href="#" class="btn btn-warning">
              Edit
            </button>
            <button href="#" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  const CreateNewsItem = () => {
    return (
      <form
        className="d-flex flex-column align-items-center w-50 m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4>Yangilik qo`shish</h4>
        <select {...register("title")} className="w-75 p-2 my-2">
          <option selected disabled>
            Holatni tanlang*
          </option>
          <option>Rejalashtirilmoqda</option>
          <option>Ta'mirlanmoqda</option>
          <option>Tayyor</option>
        </select>
        <input
          {...register("name")}
          required
          className="w-75 p-2 my-2"
          type="text"
          placeholder="Ko'cha nomi"
        />
        <input
          {...register("date")}
          required
          className="w-75 p-2 my-2"
          type="date"
          placeholder="Sana"
        />
        <textarea
          {...register("newsMessage")}
          required
          className="w-75 p-2 my-2"
          cols="30"
          rows="10"
          placeholder="Yangilik matni"
        />
        <button className="btn btn-primary w-75 p-2 my-2">Saqlash</button>
      </form>
    );
  };

  const EditNewsItem = () => {
    return (
      <form
        className="d-flex flex-column align-items-center w-50 m-auto"
        onSubmit={handleSubmit(onSubmit)}
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
          {...register("name")}
          required
          className="w-75 p-2 my-2"
          type="text"
          placeholder="Ko'cha nomi"
        />
        <input
          {...register("date")}
          required
          className="w-75 p-2 my-2"
          type="date"
          placeholder="Sana"
        />
        <textarea
          {...register("newsMessage")}
          required
          className="w-75 p-2 my-2"
          cols="30"
          rows="10"
          placeholder="Yangilik matni"
        />
        <button className="btn btn-primary w-75 p-2 my-2">Saqlash</button>
      </form>
    );
  };

  return (
    <>
      <Sidebar />
      <div className="roadsmain main">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading d-flex align-items-center justify-content-between">
                News
              </div>
              <div className="d-flex justify-content-between m-2">
                <ReadNews data={newsData[0]} />
                <ReadNews data={newsData[0]} />
                <ReadNews data={newsData[0]} />
              </div>
              <CreateNewsItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNews;
