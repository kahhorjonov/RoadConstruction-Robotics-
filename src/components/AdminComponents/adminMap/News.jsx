import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useForm } from "react-hook-form";
// import "../css/Roads.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./tableStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import EditItem from "./createTable/newsEditItem";
import CreateDataItem from "./createTable/newsCreateItem";
import Posts from "./createTable/newsPosts";
import Pagination from "./createTable/newsPagination";


// import EditItem from "./createTable/newsEditItem";


// const News = () => {
//   const { register, handleSubmit } = useForm({});
  // onSubmit = (data) => console.log(data);

  const apiEndpoint = "http://yolproject.herokuapp.com/api/road/deleteroad";
const api = "http://yolproject.herokuapp.com/api/news/getnewses";

const Table = () => {
  const [editId, setEditId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoaded(true);
      const res = await axios.get(api);
      setPosts(res.data.data);
      // (error) => {
      //   setError(error);
      //   setIsLoaded(true);
      // };
      // console.log(res.data.data);
      setIsLoaded(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDeleteItem = async (id) => {
    try {
      const apiData = await axios.delete(`${apiEndpoint}/${id}`);
    } catch (ex) {
      if (ex.response && ex.response.status !== 204) alert("Xatolik yuz berdi");
    }
  };

  const EdOrAdd = () => {
    if (editId) {
      {
        return <EditItem id={editId} onCancel={() => setEditId(null)} />;
      }
    } else return <CreateDataItem />;
  };


  return (
    <>
      <Sidebar />
      <div className="MainDiv my-4 overflow-hidden" id="table">
      <h1 class="jumbotron text-center text-primary mb-3">Yangiliklar</h1>
      <div className="container">
        <div className="container mt-5">
          <Posts
            posts={currentPosts}
            loading={isLoaded}
            error={error}
            onEdit={(id) => setEditId(id)}
            onDelete={handleDeleteItem}
          />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
          {EdOrAdd()}
        </div>
      </div>
    </div>

    </>
  );
};

export default Table;

{/* <div className="roadsmain main">
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
            {/* <form className="App">
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
</div> */}