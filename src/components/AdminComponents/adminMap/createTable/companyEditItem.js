import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const updateDataApi = "http://yolproject.herokuapp.com/api/road/createroad";
const getDataApi = "http://yolproject.herokuapp.com/api/road/getroad";
const getCompanyApi =
  "http://yolproject.herokuapp.com/api/company/getcompanies";
function EditItem({ onCancel, id }) {
  const { register, handleSubmit } = useForm();
  const [company, setCompany] = useState([]);
  const [data, setDataApi] = useState([]);

  console.log(id);
  useEffect(() => {
    axios.get(getCompanyApi).then((companyApi) => {
      setCompany(companyApi.data.data);
    });
    axios.get(`${getDataApi}/${id}`).then((data) => {
      setDataApi(data.data);
      console.log(data.data);
    });
  }, []);

  console.log("Company: ", company);
  console.log("Data: ", data);

  async function updateThisItem(newData) {
    try {
      const data = await axios.put(`${updateDataApi}/${id}`, {
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
          [41.3261972034574, 69.19426534853899],
          [41.35000263592932, 69.2188129254433],
          [41.347803588546725, 69.25057028017963],
          [41.348450374957295, 69.25554846011127],
          [41.346509996304185, 69.25983999453508],
          [41.33926540120726, 69.27151296816791],
          [41.33370203595143, 69.28232763491594],
          [41.33201999406196, 69.29503057681049],
          [41.33447834821788, 69.31116674624407],
          [41.327232404553584, 69.3144283124062],
          [41.31623254556716, 69.31065176211324],
          [41.30885512168692, 69.30412862978902],
          [41.3049719291311, 69.29846380434958],
          [41.2984994237237, 69.29691885195696],
          [41.291292995119434, 69.28378412864953],
        ],
      });
    } catch (error) {
      console.log("ERR", error);
    }
  }

  const onSubmit = (data) => {
    console.log(data);
    updateThisItem(data);
  };

  const oldCompName = (compId) => {
    // console.log(compId);
    company.map((comp) => {
      if (comp.id === compId) console.log(comp.fullname, "=", compId);
    });
  };

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
          defaultValue={data.startedAt}
          {...register("startedAt")}
          placeholder="Boshlangan sana*"
          required
        />
        <input
          type="date"
          defaultValue={data.finishedAt}
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
        <select
          defaultValue={oldCompName(data.id)}
          {...register("companyId", { required: true })}
        >
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
