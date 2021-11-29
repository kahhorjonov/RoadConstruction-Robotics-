import React, { useEffect, useState } from "react";
import axios from "axios";
import EditItem from "./adminMap/createTable/companyEditItem";
import CreateDataItem from "./adminMap/createTable/companyCreateItem";
import Posts from "./adminMap/createTable/companyPosts";
import Pagination from "./adminMap/createTable/companyPagination";
import Sidebar from "./adminMap/Sidebar";






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
      <h1 class="jumbotron text-center text-primary mb-3">Company Registration Form</h1>
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











// import React from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import "./css/Roads.css";
// import Sidebar from "./adminMap/Sidebar";

// function CreateCompany() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     trigger,
//   } = useForm();

//   const onSubmit = async (data) => {
//     const bodyFormData = new FormData();
//     bodyFormData.append("fullname", data.fullname);
//     bodyFormData.append("inn", data.inn);
//     bodyFormData.append("licenseFile", data.licenseFile[0]);
//     bodyFormData.append("sucessfullPlansFile", data.sucessfullPlansFile[0]);

//     for (var pair of bodyFormData.entries()) {
//       console.log(pair[0] + ", " + pair[1]);
//     }

//     try {
//       const result = await axios({
//         method: "post",
//         url: "http://yolproject.herokuapp.com/api/company/createcompany",
//         data: bodyFormData,
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log("result", result);
//       if (result) reset();
//     } catch (err) {
//       alert(err.message);
//     }
//     // window.location = "/";
//   };

//   return (
//     <>
//       <Sidebar />
//       <div className="container creatcompany pt-5">
//         <div className="row justify-content-sm-center pt-5">
//           <div className="col-sm-6 shadow round pb-3">
//             <h1 className="text-center pt-3 text-secondary">Register page</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="form-group">
//                 <label className="col-form-label">To'liq ism:</label>
//                 <input
//                   type="text"
//                   className={`form-control ${errors.name && "invalid"}`}
//                   {...register("fullname", { required: "Name is Required" })}
//                   onKeyUp={() => {
//                     trigger("name");
//                   }}
//                 />
//                 {errors.name && (
//                   <small className="text-danger">{errors.name.message}</small>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label className="col-form-label">INN</label>
//                 <input
//                   type="number"
//                   min="0"
//                   max="999999999"
//                   className={`form-control ${errors.inn && "invalid"}`}
//                   {...register("inn", {
//                     required: "inn is Required",
//                     pattern: {
//                       message: "Invalid INN no",
//                     },
//                   })}
//                   onKeyUp={() => {
//                     trigger("inn");
//                   }}
//                 />
//                 {errors.inn && (
//                   <small className="text-danger">{errors.inn.message}</small>
//                 )}
//               </div>

//               {/* <div className="form-group">
//               <label className="col-form-label">Ishchilar soni</label>
//               <input
//                 type="number"
//                 className={`form-control ${errors.empnum && "invalid"}`}
//                 {...register("numberOfEmployees", {
//                   required: "empnum is Required",
//                   pattern: {
//                     message: "Invalid empnum no",
//                   },
//                 })}
//                 onKeyUp={() => {
//                   trigger("numberOfEmployees");
//                 }}
//               />
//               {errors.empnum && (
//                 <small className="text-danger">{errors.empnum.message}</small>
//               )}
//             </div> */}

//               <div className="form-group">
//                 <label className="col-form-label">Successful plans:</label>
//                 <input
//                   // accept="pdf"
//                   type="file"
//                   className={`form-control ${
//                     errors.successfulPlanes && "invalid"
//                   }`}
//                   {...register("sucessfullPlansFile", {
//                     required: "sucessfullPlansFile is Required",
//                   })}
//                   onKeyUp={() => {
//                     trigger("sucessfullPlansFile");
//                   }}
//                 />
//                 {errors.sucessfullPlansFile && (
//                   <small className="text-danger">
//                     {errors.sucessfullPlansFile.message}
//                   </small>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label className="col-form-label">Licence file:</label>
//                 <input
//                   // accept="pdf"
//                   type="file"
//                   className={`form-control ${errors.licenseFile && "invalid"}`}
//                   {...register("licenseFile", {
//                     required: "licenseFile is Required",
//                   })}
//                   onKeyUp={() => {
//                     trigger("licenseFile");
//                   }}
//                 />
//                 {errors.licenseFile && (
//                   <small className="text-danger">
//                     {errors.licenseFile.message}
//                   </small>
//                 )}
//               </div>

//               <input
//                 type="submit"
//                 className="btn btn-primary my-3"
//                 value="Register"
//               />
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CreateCompany;
