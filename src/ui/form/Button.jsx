import React from "react";
// Modularize the stylesheet so that it can be imported in other components and do not clutter the global scope
import classes from "./Button.module.css";
// Named Imports
import { arrayToString } from "../../utility/arrayFunctions";
import { getValuesFromPropertyName } from "../../utility/objectFunctions";
// Component to present a form input
const Button = (props) => {
  /**
   *  Use props classes attribute to retrieve css classes from the classes object provided in the component property,
   * otherwise use current css module reference
   *
   */
  return (
    <button
      type={props.type}
      id={props.id || ""}
      name={props.name || ""}
      className={`${classes.button} ${
        props.className
          ? arrayToString(
              getValuesFromPropertyName(
                props.classes || classes,
                props.className
              )
            )
          : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
