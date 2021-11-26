import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function CreateDataItem({ onChangeApiState }) {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get("http://yolproject.herokuapp.com/api/company/getcompanies")
      .then((apiData) => {
        setCompany(apiData.data.data);
      });
  }, []);

  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    postNewItem(data);
    // onChangeApiState(data);
  };

  const addNewItemPost = "http://yolproject.herokuapp.com/api/road/createroad";
  async function postNewItem(newData) {
    try {
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
        adminId: "8d202dd6-7aa4-4b70-a749-84c55195d1e8",
        cordinates: [
          [41.171650839592864, 69.21888695032128],
          [41.17528261681081, 69.20704231531151],
          [41.182804938531916, 69.19863090784084],
          [41.19473511155064, 69.1878162410928],
          [41.19981198980439, 69.18447450667651],
          [41.20785002528566, 69.18773607283859],
          [41.22042366565926, 69.19837907820974],
        ],
      });
      // window.location("/");
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
          <option selected disabled>
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
          <option selected disabled>
            Pudratchini tanlang*
          </option>
          {company.map((comp) => {
            return <option value={comp.id}>{comp.fullname}</option>;
          })}
        </select>

        <button type="submit" className="btn btn-primary">
          QO'SHISH
        </button>
      </form>
    </>
  );
}

export default CreateDataItem;
