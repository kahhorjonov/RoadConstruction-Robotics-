import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Sidebar from "../adminMap/Sidebar";
import { useForm } from "react-hook-form";

const CreateAdmin = () => {
  const { register, handleSubmit, reset } = useForm({});
  const [editAdminId, setEditAdminId] = useState(null);
  const [deleteAdminId, setDeleteAdminId] = useState(null);
  const [AdminData, setAdminData] = useState([]);
  const onAdd = (data) => {
    console.log(data);
    reset();
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
              <CreateAdminItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAdmin;
