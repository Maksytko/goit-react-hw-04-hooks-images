import { createPortal } from "react-dom";
import style from "./Modal.module.css";
import propTypes from "prop-types";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

function Modal({ toggleModal, image }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  function handleKeydown(event) {
    if (event.code === "Escape") {
      toggleModal();
    }
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  }

  return createPortal(
    <div className={style.Overlay} onClick={handleBackdropClick}>
      <div className={style.Modal}>
        <img src={image} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  image: propTypes.string,
  toggleModal: propTypes.func,
};

export default Modal;
