import { Modal, Button } from "react-bootstrap";

function MoreNewsModal(props) {
  const ImageHave = (img) => {
    if (img)
      return (
        <Modal.Body className="d-flex">
          <img src={props.data.imageName} className="w-25" alt="imgNews" />
          {/* <h4>{props.data.createdTime}</h4> */}F
          <p className="w-75">{props.data.text}</p>
        </Modal.Body>
      );
    else
      return (
        <Modal.Body>
          {/* <h4>{props.data.createdTime}</h4> */}
          <p>{props.data.text}</p>
        </Modal.Body>
      );
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.title}
        </Modal.Title>
      </Modal.Header>
      {ImageHave(props.data.imageName)}
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MoreNewsModal;
