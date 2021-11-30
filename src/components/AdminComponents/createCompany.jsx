import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "./adminMap/Sidebar";
import axios from "axios";
import EditCompanyItem from "./editCompanyItem";

const getCompanyApi =
  "http://yolproject.herokuapp.com/api/company/getcompanies";

const CreateCompany = () => {
  const { register, handleSubmit, reset } = useForm({});
  const [editCompanyId, setEditCompanyId] = useState(null);
  const [deleteCompanyId, setDeleteCompId] = useState(null);
  const [companyData, setCompanyData] = useState([]);

  let num = 1;
  const onAdd = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    axios.get(getCompanyApi).then((comp) => setCompanyData(comp.data.data));
  }, []);

  const CreateCompanyItem = () => {
    return (
      <form
        className="d-flex flex-column align-items-center w-50 m-auto"
        onSubmit={handleSubmit(onAdd)}
      >
        <h4>Yangi kompaniya qo`shish</h4>

        <input
          {...register("fullname")}
          required
          className="w-75 p-2 my-2"
          type="text"
          placeholder="Kompaniya nomi *"
        />
        <input
          {...register("inn")}
          required
          className="w-75 p-2 my-2"
          type="number"
          placeholder="INN *"
        />
        <input
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
        <button className="btn btn-primary w-75 p-2 my-2">Saqlash</button>
      </form>
    );
  };

  const ReadCompany = () => {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>№</th>
            <th>Kompaniya nomi</th>
            <th>INN</th>
            <th>Ishchilari soni</th>
            <th>Ishlari ro'yxati</th>
            <th>Litsenziyasi</th>
          </tr>
        </thead>
        <tbody>
          {companyData.map((comp) => (
            <tr>
              <td>{num++}</td>
              <td>{comp.fullname}</td>
              <td>{comp.inn}</td>
              <td>{comp.numberOfEmployees}</td>
              <td>
                <a
                  href={comp.licenseFileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Litsenziya
                </a>
              </td>
              <td>
                <a
                  href={comp.sucessfullPlansFileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Ishlar ro'yxati
                </a>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => setEditCompanyId(comp.id)}
                >
                  🖋
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => setDeleteCompId(comp.id)}
                >
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const AddOrEd = (id) => {
    if (id)
      return <EditCompanyItem id={id} cancel={() => setEditCompanyId(null)} />;
    else return <CreateCompanyItem />;
  };

  return (
    <>
      <Sidebar />
      <div className="roadsmain main">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading d-flex align-items-center justify-content-between px-4">
                Create Company
              </div>
              <ReadCompany />
              {AddOrEd(editCompanyId)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCompany;
