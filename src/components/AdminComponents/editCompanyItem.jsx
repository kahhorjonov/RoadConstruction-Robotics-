import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const getCompanyApiId =
  "http://yolproject.herokuapp.com/api/company/getcompany";

const EditCompanyItem = ({ id, cancel }) => {
  const [companyDataId, setCompanyDataId] = useState([]);
  const { register, handleSubmit, reset } = useForm({});

  const onEdit = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    axios
      .get(`${getCompanyApiId}/${id}`)
      .then((comp) => setCompanyDataId(comp.data));
  }, []);
  return (
    <form
      className="d-flex flex-column align-items-center w-50 m-auto"
      onSubmit={handleSubmit(onEdit)}
    >
      <h4>Kompaniya ma'lumotlarini tahrirlash</h4>

      <input
        defaultValue={companyDataId.fullname}
        {...register("fullname")}
        required
        className="w-75 p-2 my-2"
        type="text"
        placeholder="Kompaniya nomi *"
      />
      <input
        defaultValue={companyDataId.inn}
        {...register("inn")}
        required
        className="w-75 p-2 my-2"
        type="number"
        placeholder="INN *"
      />
      <input
        defaultValue={companyDataId.numberOfEmployees}
        {...register("numberOfEmployees")}
        required
        className="w-75 p-2 my-2"
        type="number"
        placeholder="Ishchilar soni *"
      />
      <div className="d-flex w-75 my-2 align-items-center justify-content-between">
        <label for="formFileSm" className="w-25 form-label my-2">
          Ishlar ro'yxati*
        </label>
        <input
          {...register("sucessfullPlansFileName")}
          accept="application/pdf,application/vnd.ms-excel"
          className="form-control form-control-sm w-75"
          id="formFileSm"
          type="file"
        />
      </div>
      <div className="d-flex w-75 my-2 align-items-center justify-content-between">
        <label for="formFileSm" className="w-25 form-label ">
          Litsenziya*
        </label>
        <input
          {...register("licenseFileName")}
          accept="application/pdf,application/vnd.ms-excel"
          className="form-control form-control-sm w-75"
          id="formFileSm"
          type="file"
        />
      </div>
      <div className="d-flex w-75 ">
        <button type="submit" className="btn btn-primary w-50 p-2 m-2">
          Saqlash
        </button>
        <button
          className="btn btn-secondary w-50 p-2 my-2"
          onClick={() => cancel()}
        >
          Bekor qilish
        </button>
      </div>
    </form>
  );
};

export default EditCompanyItem;
