import React from "react";
import "../styles/tabletemplate.css";
import Image from "../images/userImage.jpg";

function MoreData(props) {
  return (
    <div className="datatable">
      <h1>{props.location.state.dataItem.nomi + " ko'chasi haqida"}</h1>

      <div className="template">
        <img src={Image} />
        <div className="information">
          <div className="card name">
            <h3 className="title">Yo'lning nomi</h3>
            <h2 className="subtitle">{props.location.state.dataItem.name}</h2>
          </div>
          <div className="card status">
            <h3 className="title">Yo'lning statusi</h3>
            <h2 className="subtitle">{props.location.state.dataItem.status}</h2>
          </div>
          <div className="card masofa">
            <h3 className="title">Ta`mirlanayotkan yolni oraliq kilometri</h3>
            <h2 className="subtitle">
              {props.location.state.dataItem.lenghth}
            </h2>
          </div>
          <div className="card start-date">
            <h3 className="title">Ta`mirlash boshlangan sana</h3>
            <h2 className="subtitle">
              {props.location.state.dataItem.startedAt.substr(0, 10)}
            </h2>
          </div>
          <div className="card end-date">
            <h3 className="title">Ta`mirlash tugagan sana</h3>
            <h2 className="subtitle">
              {props.location.state.dataItem.finishedAt.substr(0, 10)}
            </h2>
          </div>
          <div className="card money">
            <h3 className="title">Ajratilingan mablag miqdori</h3>
            <h2 className="subtitle">
              {props.location.state.dataItem.separatedMoney}
            </h2>
          </div>
          <div className="card save-money">
            <h3 className="title">O'zlashtirilgan mablag miqdori</h3>
            <h2 className="subtitle">
              {props.location.state.dataItem.usedMoney}
            </h2>
          </div>
          <div className="card asset">
            <h3 className="title">Moliya manbai</h3>
            <h2 className="subtitle">{props.location.state.dataItem.source}</h2>
          </div>
          <div className="card organization">
            <h3 className="title">Vakolatli organ</h3>
            <h2 className="subtitle">
              {props.location.state.dataItem.responsible}
            </h2>
          </div>
          <div className="card constructor">
            <h3 className="title">Pudratchi</h3>
            <h2 className="subtitle">
              {props.location.state.dataItem.companyId}
            </h2>
          </div>
          <div className="card date">
            <h3 className="title">Tashkil etilgan sana</h3>
            <h2 className="subtitle">{props.location.state.dataItem.sana}</h2>
          </div>
          <div className="card number">
            <h3 className="title">Ishchilar soni</h3>
            <h2 className="subtitle">
              {props.location.state.dataItem.ishchilar}
            </h2>
          </div>
          <div className="card save">
            <h3 className="title">
              <label for="pass">Saqlas</label>
            </h3>
            <a href="../images/userImage.jpg" download>
              Saqlash
            </a>
            {/* <input type="file" allows="pdf" /> */}
          </div>
        </div>
      </div> 
    </div>
  );
}

export default MoreData;
