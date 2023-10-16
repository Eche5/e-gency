import React from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";
const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
export default function Modal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop />, document.getElementById("overlays"))}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </React.Fragment>
  );
}
