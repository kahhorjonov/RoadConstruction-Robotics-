import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateDataItem from "./createItem";
import ReadOnly from "./readOnly";
import EditItem from "./editItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/AdminComponents/css/tableStyle.css";

const apiEndpoint = "http://yolproject.herokuapp.com/api/road/deleteroad";

const Table = () => {
  const [dataApi, setDataApi] = useState([]);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [apiStatus, setApiStatus] = useState(flase);

  const api = "http://yolproject.herokuapp.com/api/road/getroads";

  useEffect(() => {
    axios.get(api).then(
      (apiData) => {
        setDataApi(apiData.data.data);
        setIsLoaded(true);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  const handleDeleteItem = async (id) => {
    try {
      const apiData = await axios.delete(`${apiEndpoint}/${id}`);
      console.log(apiData.request.response);
      if (apiData.status === 204) {
        // const newData = await (await axios.get(api)).data.data;
        // const newData = dataApi.filter((road) => road.id !== id);
        // setDataApi(newData);
        // Working();
        // window.location.replace(false);
      } else {
        console.log("XATO");
      }
      // getApi();
    } catch (ex) {
      if (ex.response && ex.response.status !== 204) alert("Xatolik yuz berdi");
    }
  };

  const EdOrAdd = () => {
    if (editId) {
      {
        return <EditItem id={editId} onCancel={() => setEditId(null)} />;
      }
    } else
      return <CreateDataItem onChangeApiState={(data) => setDataApi(data)} />;
  };

  const Working = () => {
    let num = 1;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return dataApi.map((data) => (
        <ReadOnly
          num={num++}
          key={data.id}
          data={data}
          onEdit={(id) => setEditId(id)}
          onDelete={handleDeleteItem}
        />
      ));
    }
  };

  return (
    <>
      <div className="w-100 vh-100 m-auto">
        <table className="adminTable table table-striped">
          <thead>
            <tr>
              <th>№</th>
              <th>Viloyati</th>
              <th>Ko'cha nomi</th>
              <th>Holati</th>
              <th>Yo'l uzunligi</th>
              <th>Ajratilgan mablag'</th>
              <th>O'zlashtirilgan mablag'</th>
              <th>Boshlangan sana</th>
              <th>Tugatiladigan sana</th>
              <th>Moliya manbai</th>
              <th>Organ</th>
              <th>...</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>{Working()}</tbody>
        </table>

        {EdOrAdd()}
      </div>
    </>
  );
};

export default Table;
