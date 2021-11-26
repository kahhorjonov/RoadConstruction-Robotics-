// import React from 'react'
import Popup from './Popup'
import {useState} from 'react'
import './components/datatable.css'
import Image from "./logo192.png";

// function tabletemplate(props) {
//   console.log("props = ", props);

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);



  return (
    <div className="App">
      <main>
        <h1>React Popup</h1>
        <br/>
        <button onClick={() => setButtonPopup(true)}>Open Popup</button>
      </main>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="datatable">
            <div className="template">
              <img src={Image} />
              <div className="information">
                <div className="yolinfo">
                <div className="card name">
                  <h3 className="title">Yo'lning nomi</h3>
                  <h2 className="subtitle">Aviasozlar</h2>
                  {/* <h2 className="subtitle">{props.location.state.comp.nomi}</h2> */}
                </div>
                <div className="card status">
                  <h3 className="title">Yo'lning statusi</h3>
                  <h2 className="subtitle">Qurilmoqda</h2>
                </div>
                <div className="card masofa">
                  <h3 className="title">Ta`mirlanayotkan yolni oraliq kilometri</h3>
                  <h2 className="subtitle">3.5km</h2>
                </div>
                <div className="card start-date">
                  <h3 className="title">Ta`mirlash boshlangan sana</h3>
                  <h2 className="subtitle">12.06.2020</h2>
                </div>
                <div className="card end-date">
                  <h3 className="title">Ta`mirlash tugagan sana</h3>
                  <h2 className="subtitle">12.07.2020</h2>
                </div>
                <div className="card money">
                  <h3 className="title">Ajratilingan mablag miqdori</h3>
                  <h2 className="subtitle">80 mln</h2>
                </div>
                <div className="card save-money">
                  <h3 className="title">O'zlashtirilgan mablag miqdori</h3>
                  <h2 className="subtitle">35 mln</h2>
                </div>
                <div className="card asset">
                  <h3 className="title">Moliya manbai</h3>
                  <h2 className="subtitle">The Authoraty</h2>
                </div>
                <div className="card organization">
                  <h3 className="title">Vakolatli organ</h3>
                  <h2 className="subtitle">Yo'l Qurilish</h2>
                </div>
                </div>


                <div className="pudratchi">
                <div className="card constructor ">
                  <h3 className="title">Pudratchi</h3>
                  <h2 className="subtitle">Tashkent city</h2>
                </div>
                <div className="card constructor ">
                  <h3 className="title">INN</h3>
                  <h2 className="subtitle">123456789</h2>
                </div>
                <div className="card constructor ">
                  <h3 className="title">Tashkil etilgan sana</h3>
                  <h2 className="subtitle">10.05.1016</h2>
                </div>
                <div className="card number ">
                  <h3 className="title">Ishchilar soni</h3>
                  <h2 className="subtitle">150</h2>
                </div>
                <div className="card date ">
                  <h3 className="title">Tashkil etilgan sana</h3>
                  <h2 className="subtitle">05.06.2018</h2>
                </div>
                <div className="card constructor ">
                  <h3 className="title">qilingan ishlari</h3>
                  <div className="card save">
                  <a href="../assets/logo1.png" download>
                    Saqlash
                  </a>
                  {/* <input type="file" allows="pdf" /> */}
                </div>
                </div>
                <div className="card constructor ">
                  <h3 className="title">Litsenziya</h3>
                  <div className="card save">
                  <a href="../assets/logo1.png" download>
                    Saqlash
                  </a>
                  {/* <input type="file" allows="pdf" /> */}
                </div>
                </div>
                {/* <div className="card save">
                  <a href="../assets/logo1.png" download>
                    Saqlash
                  </a>
                  <input type="file" allows="pdf" />
                </div> */}
                </div>
              </div>
            </div>
          </div>      
        </Popup>

    </div>
  );
}

export default App;
