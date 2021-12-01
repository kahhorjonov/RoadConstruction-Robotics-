import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
      postNewItem(data);
      alert("Muvaffaqiyatli qo'shildi");
    } else alert("Yo'lni belgilang");
  };

  async function postNewItem(newData) {
    try {
      const image = newData.image[0];
      console.log(image);
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
        adminId: "b076c00b-4337-4402-a700-959fe89a5e7d",
        cordinates: props.coor,
        images: image,
      });
      reset();
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
          <option>Farg‘ona viloyati</option>
          <option>Xorazm viloyati</option>
          <option>Toshkent shahri</option>
          <option>Qoraqalpog‘iston Respublikasi</option>
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
