import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import EditItem from "./createTable/newsEditItem";
import CreateDataItem from "./createTable/newsCreateItem";
import Posts from "./createTable/newsPosts";
import Pagination from "./createTable/newsPagination";
import "jquery/dist/jquery.min.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import "datatables.net-dt/css/jquery.dataTables.min.css";

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
