import React from "react";
// Modularize the stylesheet so that it can be imported in other components and do not clutter the global scope
import classes from "./Form.module.css";
// Named Imports
import { arrayToString } from "../../utility/arrayFunctions";
import { getValuesFromPropertyName } from "../../utility/objectFunctions";
// Component to present a form
const Form = (props) => {
  /**
   *  Use props classes attribute to retrieve css classes from the classes object provided in the component property,
   * otherwise use current css module reference
   *
   */
  return (
    <form
      onSubmit={props.onSubmit}
      className={`${classes.form} ${
        props.className
          ? arrayToString(
              getValuesFromPropertyName(
                props.classes || classes,
                props.className
              )
            )
          : ""
      }`}
    >
      {props.children}
    </form>
  );
};

export default Form;
