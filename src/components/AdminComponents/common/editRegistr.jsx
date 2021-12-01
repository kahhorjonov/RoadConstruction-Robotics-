import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const getAdminApiId = "http://yolproject.herokuapp.com/api/admin/getadmin";

const EditAdminItem = ({ id, cancel }) => {
  const [adminDataId, setAdminDataId] = useState([]);
  const { register, handleSubmit, reset } = useForm({});

  const onEdit = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    axios
      .get(`${getAdminApiId}/${id}`)
      .then((admin) => setAdminDataId(admin.data));
  }, []);

  return (
    <form
      className="d-flex flex-column align-items-center w-50 m-auto"
      onSubmit={handleSubmit(onEdit)}
    >
      <h4>Admin ma'lumotlarini tahrirlash</h4>

      <input
        defaultValue={adminDataId.firstName}
        {...register("firstName")}
        required
        className="w-75 p-2 my-2"
        type="text"
        placeholder="Ismi *"
      />
      <input
        defaultValue={adminDataId.lastName}
        {...register("lastName")}
        required
        className="w-75 p-2 my-2"
        type="text"
        placeholder="Familiya *"
      />
      <input
        defaultValue={adminDataId.middleName}
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
        defaultValue={adminDataId.phoneNumber}
        {...register("phoneNumber")}
        required
        className="w-75 p-2 my-2"
        type="number"
        placeholder="Telefon nomer *"
      />
      <input
        defaultValue={adminDataId.username}
        {...register("username")}
        required
        className="w-75 p-2 my-2"
        type="text"
        placeholder="Foydalanuvchi nomi *"
      />
      <input
        defaultValue={adminDataId.password}
        {...register("password")}
        required
        className="w-75 p-2 my-2"
        type="password"
        placeholder="Parol *"
      />
      <button className="btn btn-primary w-75 p-2 my-2">Saqlash</button>
      <button
        className="btn btn-secondary w-75 p-2 my-2"
        onClick={() => cancel()}
      >
        Bekor qilish
      </button>
    </form>
  );
};

export default EditAdminItem;
