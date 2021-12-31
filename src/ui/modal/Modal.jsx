import React from "react";
import classes from "./Modal.module.css";
import Button from "../form/Button";
import Card from "../layout/Card";
const Modal = (props) => {
  return (
    /** React JS converts the modular css classes so that the class names are unique and can be used in other components.
     *  We are passing class name so that we can retrieve the dynamically generated class name with the classes object reference.
     */
    <Card className='modal' classes={classes}>
      <div className={classes["modal-content"]}>
        <div className={classes["modal-header"]}>
          <span className={classes["close"]} onClick={props.onClick}>
            &times;
          </span>
          <h2>{props.heading}</h2>
        </div>
        <div className={classes["modal-body"]}>
          <p>{props.message}</p>
        </div>
        <div className={classes["modal-footer"]}>
          <Button onClick={props.onClick}>Close</Button>
        </div>
      </div>
    </Card>
  );
};

export default Modal;
