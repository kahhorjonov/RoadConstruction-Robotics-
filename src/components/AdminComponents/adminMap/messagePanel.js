import axios from "axios";
import { useEffect, useState } from "react";
import "../css/messagePanel.css";
import ReadMessages from "./readMessage";

const getAplicationApi =
  "http://yolproject.herokuapp.com/api/application/getapplications";

function MessagePanel() {
  const [applicationData, setAplicationData] = useState([]);
  const [messageId, setMessageId] = useState(null);

  useEffect(() => {
    axios.get(getAplicationApi).then((message) => {
      setAplicationData(message.data.data);
    });
  }, []);

  

  return (
    <div id="chat-container">
      <div id="search-container">
        <i class="fa fa-search fs-5" aria-hidden="true"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div id="conversation-list">
        {applicationData.map((message) => {
          return (
            <button
              className="conversation"
              value={message.id}
              onClick={(e) => {
                setMessageId(e.target.value);
              }}
            >
              <div className="d-flex align-items-center">
                <em className="fa fa-user-circle-o fs-2">&nbsp;</em>
                {message.fullName}
              </div>
              <div className="created-date">
                {message.createdTime.substr(0, 10)}
              </div>
            </button>
          );
        })}
      </div>
      {messageId ? (
        <ReadMessages id={messageId} />
      ) : (
        <h1 className="m-auto my-5 py-5">No message</h1>
      )}
    </div>
  );
}

export default MessagePanel;
