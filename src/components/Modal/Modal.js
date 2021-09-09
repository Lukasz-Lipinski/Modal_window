import { Button, Dialog } from "./components";
import { useState } from "react";

import "./styles/modal.scss";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  return (
    <div className="content">
      {modal ? (
        <Dialog
          handleXClick={showModal}
          handleConfirmClick={showModal}
          handleAbortClick={showModal}
        />
      ) : null}
      <Button handleClick={showModal} className="content-show_btn">
        Show dialog
      </Button>
    </div>
  );
}
