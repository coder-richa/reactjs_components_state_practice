import React from "react";
// Modularize the stylesheet so that it can be imported in other components and do not clutter the global scope
import classes from "./Input.module.css";
// Named Imports
import { arrayToString } from "../../utility/arrayFunctions";
import { getValuesFromPropertyName } from "../../utility/objectFunctions";
// Component to present a form input
const Input = (props) => {
  /**
   *  Use props classes attribute to retrieve css classes from the classes object provided in the component property,
   * otherwise use current css module reference
   *
   */
  return (
    <input
      type={props.type}
      id={props.id || null}
      name={props.name || null}
      value={props.value || ""}
      onChange={props.onChange}
      onBlur={props.onBlur || null}
      onFocus={props.onFocus || null}
      min={props.min || null}
      max={props.max || null}
      className={`${classes.input} ${
        props.className
          ? arrayToString(
              getValuesFromPropertyName(
                props.classes || classes,
                props.className
              )
            )
          : ""
      }`}
    />
  );
};

export default Input;
