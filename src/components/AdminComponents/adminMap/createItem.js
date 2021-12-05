import axios from "axios";
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const addNewItemPost = "http://yolproject.herokuapp.com/api/road/createroad";

function CreateDataItem(props) {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get("http://yolproject.herokuapp.com/api/company/getcompanies")
      .then((apiData) => {
        setCompany(apiData.data.data);
      });
  }, []);

  const { register, handleSubmit, reset } = useForm({});

  const onSubmit = (data) => {
    if (props.coor) {
      // console.log(data);
      postNewItem(data);
      // alert("Muvaffaqiyatli qo'shildi");
    } else toast.error("Yo'lni belgilang");
  };

  async function postNewItem(newData) {
    const token = jwtDecode(localStorage.getItem("token"));
    const adminId = token.Id;

    // const bodyFormData = new FormData();
    // bodyFormData.append("name", newData.name);
    // bodyFormData.append("status", newData.status);
    // bodyFormData.append("lenghth", newData.lenghth);
    // bodyFormData.append("startedAt", newData.startedAt);
    // bodyFormData.append("finishedAt", newData.finishedAt);
    // bodyFormData.append("separatedMoney", newData.separatedMoney);
    // bodyFormData.append("usedMoney", newData.usedMoney);
    // bodyFormData.append("source", newData.source);
    // bodyFormData.append("responsible", newData.responsible);
    // bodyFormData.append("region", newData.region);
    // bodyFormData.append("companyId", newData.companyId);
    // bodyFormData.append("adminId", `${adminId}`);
    // bodyFormData.append("cordinates", [props.coor]);
    // bodyFormData.append("images", newData.image[0]);

    // console.log(bodyFormData);

    // for (var pair of bodyFormData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    // try {
    //   const result = await axios({
    //     method: "post",
    //     url: "http://yolproject.herokuapp.com/api/road/createroad",
    //     data: bodyFormData,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    //   console.log("result", result);
    //   if (result) reset();
    // } catch (err) {
    //   alert(err.message);
    // }

    try {
      const image = newData.image[0];

      const data = await axios.post(addNewItemPost, {
        region: newData.region,
        name: newData.name,
        status: newData.status,
        lenghth: newData.lenghth,
        separatedMoney: newData.separatedMoney,
        usedMoney: newData.usedMoney,
        startedAt: newData.startedAt,
        finishedAt: newData.finishedAt,
        source: newData.source,
        responsible: newData.responsible,
        companyId: newData.companyId,
        adminId: `${adminId}`,
        cordinates: props.coor,
        // images: image,
      });

      console.log(data);
      // reset();
    } catch (error) {
      console.log("ERR", error);
    }
  }

  return (
    <>
      <h3 className="text-center p-2">Yangi ma'lumot qo'shish</h3>
      <form className="addNewItems" onSubmit={handleSubmit(onSubmit)}>
        <select {...register("region")} required>
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
          <option>Farg'ona viloyati</option>
          <option>Xorazm viloyati</option>
          <option>Toshkent shahri</option>
          <option>Qoraqalpog'iston Respublikasi</option>
        </select>
        <input
          type="text"
          {...register("name")}
          placeholder="Ko'cha nomi*"
          required
        />

        <select {...register("status")} required>
          <option disabled selected>
            Holatni tanlang*
          </option>
          <option>Rejalashtirilmoqda</option>
          <option>Ta'mirlanmoqda</option>
          <option>Tayyor</option>
        </select>

        <input
          type="number"
          {...register("lenghth")}
          placeholder="Uzunligi*"
          required
        />
        <input
          type="number"
          {...register("separatedMoney")}
          placeholder="Arjiratilgan mablag'"
        />
        <input
          type="number"
          {...register("usedMoney")}
          placeholder="O'zlashtirilgan mablag'*"
          required
        />
        <input
          type="date"
          {...register("startedAt")}
          placeholder="Boshlangan sana*"
          required
        />
        <input
          type="date"
          {...register("finishedAt")}
          placeholder="Tugatiladigan sana*"
          required
        />
        <input
          type="text"
          {...register("source")}
          placeholder="Moliya manbai*"
          required
        />
        <input
          type="text"
          {...register("responsible")}
          placeholder="Organ*"
          required
        />
        <select {...register("companyId")} required>
          <option disabled selected>
            Pudratchini tanlang*
          </option>
          {company.map((comp) => {
            return (
              <>
                <option value={comp.id}>{comp.fullname}</option>
              </>
            );
          })}
        </select>

        <input
          {...register("image")}
          accept="image/*"
          className="form-control form-control-sm"
          id="formFileSm"
          type="file"
        />

        <button type="submit" className="btn btn-primary">
          QO'SHISH
        </button>
      </form>
    </>
  );
}

export default CreateDataItem;
