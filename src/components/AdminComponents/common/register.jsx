// import React from "react";
// import Joi from "joi-browser";
// import Form from "./form";
// import * as userService from "../services/userService";
// import "../css/Roads.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./../adminMap/Sidebar";
import EditItem from "../adminMap/createTable/adminEditItem";
import CreateDataItem from "../adminMap/createTable/adminCreateItem";
import Posts from "../adminMap/createTable/adminPosts";
import Pagination from "../adminMap/createTable/adminPagination";

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
        <h1 class="jumbotron text-center text-primary mb-3">
          Admin Registration Form
        </h1>
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

// return (
//   <>
//         <Sidebar />
//       </>
//   //   );
//   // }
// }

// export default RegisterForm;
// class RegisterForm extends Form {
//   state = {
//     data: {
//       firstName: "",
//       lastName: "",
//       middleName: "",
//       username: "",
//       password: "",
//       region: "",
//       role: "",
//     },
//     errors: {},
//   };

//   schema = {
//     firstName: Joi.string().required().label("Ismingiz"),
//     lastName: Joi.string().required().label("Familiyangiz"),
//     middleName: Joi.string().required().label("Sharfingiz"),
//     username: Joi.string().required().label("Username"),
//     password: Joi.string().min(6).required().label("Password"),
//     region: Joi.string().required().label("Region"),
//     role: Joi.string().required().label("Role"),
//   };

//   doSubmit = async () => {
//     try {
//       userService.register(this.state.data);
//     } catch (ex) {
//       if (ex.response && ex.response.status === 400) {
//         const errors = { ...this.state.errors };
//         errors.username = ex.response.data;
//         this.setState({ errors });
//       }
//     }
//   };

//   render() {

{
  /* <div className="rigisterForm">
  <h1>Register Form</h1>
  <form onSubmit={this.handleSubmit}>
    {this.renderInput("firstName", "Ism")}
    {this.renderInput("lastName", "Familiya")}
    {this.renderInput("middleName", "Otasining Ismi")}
    {this.renderInput("region", "Hudud")}
    {this.renderInput("username", "Username")}
    {this.renderInput("password", "Password", "password")}
    <h2>Admin or SuperAdmin?</h2>
    {this.renderInput("role", "Role")}
    {this.renderButton("Register")}
  </form>
</div> */
}
