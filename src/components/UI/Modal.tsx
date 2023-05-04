import { ReactNode } from "react";
import "./Modal.css";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className="modal" onClick={props.toggle}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h1>Enter new score</h1>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button type="button" onClick={props.toggle}>
                Cancel
              </button>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
