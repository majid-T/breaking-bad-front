import React from "react";

const CharModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <span
          className="btn-sm btn-danger mb-0 modal-close-btn"
          onClick={handleClose}
        >
          <i className="far fa-window-close"></i>
        </span>
      </section>
    </div>
  );
};

export default CharModal;
