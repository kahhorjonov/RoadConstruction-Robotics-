import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Sidebar from "../adminMap/Sidebar";
import { useForm } from "react-hook-form";

const getAdminApi = "http://yolproject.herokuapp.com/api/admin/getadmins";

const CreateAdmin = () => {
  const { register, handleSubmit, reset } = useForm({});
  const [editAdminId, setEditAdminId] = useState(null);
  const [deleteAdminId, setDeleteAdminId] = useState(null);
  const [adminData, setAdminData] = useState([]);
  const onAdd = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    axios.get(getAdminApi).then((admin) => console.log(admin));
  });

  const ReadAdmin = () => {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>№</th>
            <th>F.I.O.</th>
            <th>Foydalanuvchi nomi</th>
            <th>Viloyati</th>
            <th>Telefon nomeri</th>
          </tr>
        </thead>
        <tbody>
          {/* {adminData.map((admin) => (
            <tr>
              <td>{num++}</td>
              <td>{admin.lastName + admin.firstName + admin.middleName}</td>
              <td>{admin.username}</td>
              <td>{admin.region}</td>
              <td>{admin.phoneNumber}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => setEditAdminId(admin.id)}
                >
                  🖋
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteCompany(admin.id)}
                >
                  🗑
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    );
  };

  const CreateAdminItem = () => {
    return (
      <form
        className="d-flex flex-column align-items-center w-50 m-auto"
        onSubmit={handleSubmit(onAdd)}
      >
        <h4>Yangi admin qo`shish</h4>

        <input
          {...register("firstName")}
          required
          className="w-75 p-2 my-2"
          type="text"
          placeholder="Ismi *"
        />
        <input
          {...register("lastName")}
          required
          className="w-75 p-2 my-2"
          type="text"
          placeholder="Familiya *"
        />
        <input
          {...register("middleName")}
          required
          className="w-75 p-2 my-2"
          type="text"
          placeholder="Otasining ismi *"
        />
        <select {...register("region")} required className="w-75 p-2 my-2">
          <option disabled selected>
            Viloyatni tanlang*
          </option>
          <option>Andijon viloyati</option>
          <option>Buxoro viloyati</option>
          <option>Jizzax viloyati</option>
          <option>Qashqadaryo viloyati</option>
          <option>Navoiy viloyati</option>
          <option>Namangan viloyati</option>
          <option>Samarqand viloyati</option>
          <option>Surxandaryo viloyati</option>
          <option>Sirdaryo viloyati</option>
          <option>Toshkent viloyati</option>
          <option>Farg‘ona viloyati</option>
          <option>Xorazm viloyati</option>
          <option>Toshkent shahri</option>
          <option>Qoraqalpog‘iston Respublikasi</option>
        </select>
        <input
          {...register("phoneNumber")}
          required
          className="w-75 p-2 my-2"
          type="number"
          placeholder="Telefon nomer *"
        />
        <input
          {...register("username")}
          required
          className="w-75 p-2 my-2"
          type="text"
          placeholder="Foydalanuvchi nomi *"
        />
        <input
          {...register("password")}
          required
          className="w-75 p-2 my-2"
          type="password"
          placeholder="Parol *"
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
              <div className="panel-heading d-flex align-items-center justify-content-between px-4">
                Create Admin
              </div>
              <ReadAdmin />
              <CreateAdminItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAdmin;
