import React from "react";
// Modularize the stylesheet so that it can be imported in other components and do not clutter the global scope
import classes from "./Textarea.module.css";
// Named Imports
import { arrayToString } from "../../utility/arrayFunctions";
import { getValuesFromPropertyName } from "../../utility/objectFunctions";
// Component to present a form textarea
const Textarea = (props) => {
  /**
   *  Use props classes attribute to retrieve css classes from the classes object provided in the component property,
   * otherwise use current css module reference
   *
   */
  return (
    <textarea
      id={props.id || null}
      name={props.name || null}
      value={props.value || ""}
      onChange={props.onChange}
      onBlur={props.onBlur || null}
      onFocus={props.onFocus || null}
      className={`${classes.textarea} ${
        props.className
          ? arrayToString(
              getValuesFromPropertyName(
                props.classes || classes,
                props.className
              )
            )
          : ""
      }`}
    ></textarea>
  );
};

export default Textarea;
