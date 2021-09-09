import "./styles/dialog.scss";
import Title from "./Title";
import Content from "./Content";
import Button from "./Button";

const text =
  "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.";

export default function Dialog(props) {
  return (
    <div className="container">
      <div className="container-modal">
        <div className="container-modal-header">
          <Title title="Modal title" className="container-modal-header-title" />
          <Button
            className="container-modal-header-btns"
            handleClick={props.handleXClick}
          >
            <span className="container-modal-header-btns_close">&times;</span>
          </Button>
        </div>

        <Content className="container-modal-body">{text}</Content>
        <div className="container-modal-footer">
          <div className="container-modal-footer-btns">
            <Button
              to="/"
              handleClick={props.handleConfirmClick}
              className="container-modal-footer-btns_confirm"
            >
              Confirm
            </Button>
            <Button
              to="/"
              handleClick={props.handleAbortClick}
              className="container-modal-footer-btns_abort"
            >
              Abort
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
