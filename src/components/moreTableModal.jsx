import { Modal, Button } from "react-bootstrap";
import { Image, ImageGroup } from "react-fullscreen-image";
import "../styles/moreTableModal.css";
import image from "../images/header-background.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const getDataTableApiId = "http://yolproject.herokuapp.com/api/road/getroad";
const getCompanyApiId =
  "http://yolproject.herokuapp.com/api/company/getcompany";

function MoreTableModal(props) {
  const [dataTable, setDataTable] = useState([]);
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    axios.get(`${getDataTableApiId}/${props.id}`).then((data) => {
      setDataTable(data.data);
      axios.get(`${getCompanyApiId}/${data.data.companyId}`).then((comp) => {
        setCompanyData(comp.data);
        console.log(comp.data);
      });
    });
  }, [props.id]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-uppercase"
        >
          Yo'l {dataTable.status}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex aboutWork">
          <div className=" left w-75 px-2">
            <div className="d-flex justify-content-around">
              <div className="px-2">
                <div>
                  <h5>{dataTable.region}</h5>
                  <h6>Viloyati</h6>
                </div>
                <div>
                  <h5>{dataTable.name}</h5>
                  <h6>Ko'cha nomi</h6>
                </div>
                <div>
                  <h5>{dataTable.status}</h5>
                  <h6>Xolati</h6>
                </div>
                <div>
                  <h5>{dataTable.lenghth}</h5>
                  <h6>Uzunligi</h6>
                </div>
                <div>
                  <h5>{dataTable.startedAt}</h5>
                  <h6>Boshlanadigan sana</h6>
                </div>
              </div>
              <div className="px-2">
                <div>
                  <h5>{dataTable.finishedAt}</h5>
                  <h6>Tugatiladigan sana</h6>
                </div>
                <div>
                  <h5>{dataTable.separatedMoney}</h5>
                  <h6>Ajiratilgan mablag'</h6>
                </div>
                <div>
                  <h5>{dataTable.usedMoney}</h5>
                  <h6>O'zlashtirilgan mablag'</h6>
                </div>
                <div>
                  <h5>{dataTable.source}</h5>
                  <h6>Moliya manbai</h6>
                </div>
                <div>
                  <h5>{dataTable.responsible}</h5>
                  <h6>Masul organ</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="pudratchi right w-25 px-1">
            <img className="w-100" src={image} alt="image" />

            <div>
              <h5>{companyData.fullname}</h5>
              <h6>Pudtartchi</h6>
            </div>
            <div>
              <h5>{companyData.inn}</h5>
              <h6>INN</h6>
            </div>
            <div>
              <h5>{companyData.numberOfEmployees}</h5>
              <h6>Ishchilari soni</h6>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-evenly">
          <a href={companyData.licenseFileName}>
            <button className="p-1 px-3 my-3 btn btn-success">
              Litsenziya
            </button>
          </a>
          <a href={companyData.sucessfullPlansFileName}>
            <button className="p-1 px-3 my-3 btn btn-success">
              Ishlari ro'yhati
            </button>
          </a>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MoreTableModal;
