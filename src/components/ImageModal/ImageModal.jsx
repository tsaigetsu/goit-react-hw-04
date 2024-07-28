import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onCloseClick, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseClick}
      className={s.modal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div>
        <img src={imageUrl} className={s.modalImage} />
      </div>
    </Modal>
  );
};

export default ImageModal;
