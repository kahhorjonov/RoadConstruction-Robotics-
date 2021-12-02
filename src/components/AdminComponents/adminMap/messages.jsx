import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const getAplicationApi =
  "http://yolproject.herokuapp.com/api/application/getapplications";

function Messages() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get(getAplicationApi).then((message) => {
      setMessages(message.data.data);
      console.log(message.data.data);
    }, []);
  });
  return (
    <>
      <Sidebar />
      <div className="roadsmain main">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading d-flex align-items-center justify-content-between px-4">
                Xabarlar
              </div>
              <div className="w-25 bg-blue">
                {/* {messages.map((message) => {
                  //   return <h4>{message.}</h4>
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Messages;
