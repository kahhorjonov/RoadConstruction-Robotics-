import React from "react";
import Sidebar from "./Sidebar";
import { useForm } from "react-hook-form";
import "../css/Roads.css";

const News = () => {
  const { register, handleSubmit } = useForm({});
  // onSubmit = (data) => console.log(data);

  return (
    <>
      <Sidebar />
      <div className="roadsmain main">
        <div className="row marBot">
          <ol className="breadcrumb">
            <li>
              <a href="/">
                <em className="fa fa-home"></em>
              </a>
            </li>
            <li className="active">News </li>
          </ol>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">News</div>
              <div className="panel-body">
                <div className="App">
                  {/* <form className="App" onSubmit={handleSubmit(onSubmit())}> */}
                  <form className="App">
                    <input
                      {...register("title")}
                      className="formcontrol formcontrol-head"
                      type="text"
                      id="head"
                      name="head"
                      placeholder="Mavzu..."
                      required
                    />
                    <select
                      {...register("status")}
                      required
                      name="town"
                      id=""
                      className="formcontrol formcontrol-choose"
                    >
                      <option disabled selected>
                        Holatni tanlang
                      </option>
                      <option>Rejalashtirilmoqda</option>
                      <option>Ta'mirlanmoqda</option>
                      <option>Tamomlangan</option>
                    </select>
                    <textarea
                      {...register("message")}
                      name="text"
                      required
                      placeholder="Text kiritish"
                      className="formcontrol formcontrol-text"
                      rows="10"
                    />
                    <input
                      {...register("image")}
                      type="file"
                      accept="image/*"
                      required
                      className="formcontrol formcontrol-upload"
                    />
                    <input type="submit" className="formcontrol-btn" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
