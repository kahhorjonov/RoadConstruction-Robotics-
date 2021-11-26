import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./css/Roads.css";

function CreateCompany() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = async (data) => {
    const bodyFormData = new FormData();
    bodyFormData.append("fullname", data.fullname);
    bodyFormData.append("inn", data.inn);
    bodyFormData.append("licenseFile", data.licenseFile[0]);
    bodyFormData.append("sucessfullPlansFile", data.sucessfullPlansFile[0]);

    for (var pair of bodyFormData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    try {
      const result = await axios({
        method: "post",
        url: "http://yolproject.herokuapp.com/api/company/createcompany",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("result", result);
      if (result) reset();
    } catch (err) {
      alert(err.message);
    }
    // window.location = "/";
  };

  return (
    <div className="container creatcompany pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">Register page</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">To'liq ism:</label>
              <input
                type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("fullname", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>

            <div className="form-group">
              <label className="col-form-label">INN</label>
              <input
                type="number"
                min="0"
                max="999999999"
                className={`form-control ${errors.inn && "invalid"}`}
                {...register("inn", {
                  required: "inn is Required",
                  pattern: {
                    message: "Invalid INN no",
                  },
                })}
                onKeyUp={() => {
                  trigger("inn");
                }}
              />
              {errors.inn && (
                <small className="text-danger">{errors.inn.message}</small>
              )}
            </div>

            {/* <div className="form-group">
              <label className="col-form-label">Ishchilar soni</label>
              <input
                type="number"
                className={`form-control ${errors.empnum && "invalid"}`}
                {...register("numberOfEmployees", {
                  required: "empnum is Required",
                  pattern: {
                    message: "Invalid empnum no",
                  },
                })}
                onKeyUp={() => {
                  trigger("numberOfEmployees");
                }}
              />
              {errors.empnum && (
                <small className="text-danger">{errors.empnum.message}</small>
              )}
            </div> */}

            <div className="form-group">
              <label className="col-form-label">Successful plans:</label>
              <input
                // accept="pdf"
                type="file"
                className={`form-control ${
                  errors.successfulPlanes && "invalid"
                }`}
                {...register("sucessfullPlansFile", {
                  required: "sucessfullPlansFile is Required",
                })}
                onKeyUp={() => {
                  trigger("sucessfullPlansFile");
                }}
              />
              {errors.sucessfullPlansFile && (
                <small className="text-danger">
                  {errors.sucessfullPlansFile.message}
                </small>
              )}
            </div>

            <div className="form-group">
              <label className="col-form-label">Licence file:</label>
              <input
                // accept="pdf"
                type="file"
                className={`form-control ${errors.licenseFile && "invalid"}`}
                {...register("licenseFile", {
                  required: "licenseFile is Required",
                })}
                onKeyUp={() => {
                  trigger("licenseFile");
                }}
              />
              {errors.licenseFile && (
                <small className="text-danger">
                  {errors.licenseFile.message}
                </small>
              )}
            </div>

            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCompany;
