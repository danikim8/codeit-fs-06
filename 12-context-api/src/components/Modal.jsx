import React from "react";
import { useModal } from "../contexts/modal.context";

function Modal({ children }) {
  const modal = useModal();

  return (
    <div className="backdrop" onClick={modal.close}>
      <div className="modal">{children}</div>
    </div>
  );
}

export default Modal;
