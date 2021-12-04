import axios from "axios";
import { useEffect, useState } from "react";

const getAplicationApiId =
  "http://yolproject.herokuapp.com/api/application/getapplication";
const deleteAplicationApi =
  "http://yolproject.herokuapp.com/api/application/deleteapplication";

function ReadMessages({ id }) {
  const [readMessage, setReadMessage] = useState([]);

  useEffect(() => {
    axios.get(`${getAplicationApiId}/${id}`).then((mes) => {
      setReadMessage(mes.data);
    });
  }, [id]);

  const handleDeleteItem = async (id) => {
    try {
      const apiData = await axios.delete(`${deleteAplicationApi}/${id}`);
      alert("Muvaffaqiyatli o'chirildi. Ctrl + F5 juftligini bosing.");
    } catch (ex) {
      if (ex.response && ex.response.status !== 204) alert("Xatolik yuz berdi");
    }
  };

  return (
    <>
      <div id="chat-title">
        <span>{readMessage.fullName}</span>
        <i
          onClick={() => handleDeleteItem(id)}
          class="fa fa-trash text-danger fs-3"
          aria-hidden="true"
        ></i>
      </div>
      <div id="chat-message-list">
        <div className="message-row you-message">
          <div className="message-content">
            <div className="message-text ">
              <img src={readMessage.additionalFileName} alt="img" />
            </div>
          </div>
        </div>
        <div className="message-row other-message">
          <div className="message-content">
            <div className="message-text">Rasm :</div>
          </div>
        </div>
        <div className="message-row you-message">
          <div className="message-content">
            <div className="message-text ">{readMessage.applicationText}</div>
          </div>
        </div>
        <div className="message-row other-message">
          <div className="message-content">
            <div className="message-text">Xabar matni :</div>
          </div>
        </div>
        <div className="message-row you-message">
          <div className="message-content">
            <div className="message-text ">{readMessage.roadName}</div>
          </div>
        </div>
        <div className="message-row other-message">
          <div className="message-content">
            <div className="message-text">Ko'cha nomi :</div>
          </div>
        </div>
        <div className="message-row you-message">
          <div className="message-content">
            <div className="message-text">{readMessage.district}</div>
          </div>
        </div>
        <div className="message-row other-message">
          <div className="message-content">
            <div className="message-text">Tumani :</div>
          </div>
        </div>
        <div className="message-row you-message">
          <div className="message-content">
            <div className="message-text">{readMessage.province}</div>
          </div>
        </div>
        <div className="message-row other-message">
          <div className="message-content">
            <div className="message-text">Viloyati :</div>
          </div>
        </div>
        <div className="message-row you-message">
          <div className="message-content">
            <div className="message-text">{readMessage.phoneNumber}</div>
          </div>
        </div>
        <div className="message-row other-message">
          <div className="message-content">
            <div className="message-text">Telefon nomer :</div>
          </div>
        </div>
        <div className="message-row you-message">
          <div className="message-content">
            <div className="message-text">{readMessage.email}</div>
          </div>
        </div>
        <div className="message-row other-message">
          <div className="message-content">
            <div className="message-text">Email :</div>
          </div>
        </div>
        <div className="message-row you-message">
          <div className="message-content">
            <div className="message-text">{readMessage.fullName}</div>
          </div>
        </div>
        <div className="message-row other-message">
          <div className="message-content">
            <div className="message-text">Ism va familiya :</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadMessages;
