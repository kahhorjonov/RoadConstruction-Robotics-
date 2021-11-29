import axios from "axios";
import { data } from "jquery";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const updateDataApi = "http://yolproject.herokuapp.com/api/road/updateroad";
const getDataApi = "http://yolproject.herokuapp.com/api/road/getroad";
const getCompanyApi =
  "http://yolproject.herokuapp.com/api/company/getcompanies";

function EditItem({ onCancel, id }) {
  const { register, handleSubmit, reset } = useForm();
  const [company, setCompany] = useState([]);
  const [data, setDataApi] = useState([]);

  useEffect(() => {
    axios.get(getCompanyApi).then((companyApi) => {
      setCompany(companyApi.data.data);
    });
    axios.get(`${getDataApi}/${id}`).then((data) => {
      setDataApi(data.data);
    });
  }, []);

  const onSubmit = (data) => {
    updateThisItem(data);
  };

  async function updateThisItem(newData) {
    try {
      await axios.put(`${updateDataApi}/${id}`, {
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
        cordinates: data.cordinates,
      });
      alert("Muvaffaqiyatli yangilandi.");
      reset();
    } catch (error) {
      alert("Yangilashda xatolik bor.");
      console.log("ERR", error);
    }
  }

  return (
    <>
      <h3 className="text-center p-2">Ma'lumotlarni yangilash</h3>
      <form className="addNewItems" onSubmit={handleSubmit(onSubmit)}>
        <select
          defaultValue={data.region}
          {...register("region", { required: true })}
          required
        >
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
          defaultValue={data.name}
          {...register("name")}
          placeholder="Ko'cha nomi*"
          required
        />

        <select
          defaultValue={data.status}
          {...register("status", { required: true })}
        >
          <option selected disabled>
            Holatni tanlang*
          </option>
          <option>Rejalashtirilmoqda</option>
          <option>Ta'mirlanmoqda</option>
          <option>Tayyor</option>
        </select>
        <input
          type="number"
          defaultValue={data.lenghth}
          // value={data.lenghth}
          {...register("lenghth")}
          placeholder="Uzunligi*"
          required
        />
        <input
          type="number"
          defaultValue={data.separatedMoney}
          {...register("separatedMoney")}
          placeholder="Arjiratilgan mablag'"
          required
        />
        <input
          type="number"
          defaultValue={data.usedMoney}
          {...register("usedMoney")}
          placeholder="O'zlashtirilgan mablag'*"
          required
        />
        <input
          type="date"
          // defaultValue={data.startedAt}
          {...register("startedAt")}
          placeholder="Boshlangan sana*"
          required
        />
        <input
          type="date"
          // defaultValue={data.finishedAt}
          {...register("finishedAt")}
          placeholder="Tugatiladigan sana*"
          required
        />
        <input
          type="text"
          defaultValue={data.source}
          {...register("source")}
          placeholder="Moliya manbai*"
          required
        />
        <input
          type="text"
          defaultValue={data.responsible}
          {...register("responsible")}
          placeholder="Organ*"
          required
        />
        <select {...register("companyId", { required: true })}>
          <option selected disabled>
            Pudratchini tanlang*
          </option>
          {company.map((comp) => {
            return <option value={comp.id}>{comp.fullname}</option>;
          })}
        </select>
        <div></div>

        <button type="submit" className="btn btn-primary">
          SAQLASH
        </button>
        <button onClick={onCancel} className="btn btn-danger">
          BEKOR QILISH
        </button>
      </form>
    </>
  );
}

export default EditItem;
