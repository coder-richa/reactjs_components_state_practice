import React from "react";
// Modularize the stylesheet so that it can be imported in other components and do not clutter the global scope
import classes from "./Card.module.css";
// Named Imports
import { arrayToString } from "../../utility/arrayFunctions";
import { getValuesFromPropertyName } from "../../utility/objectFunctions";
// Component to present a card
const Card = (props) => {
  /**
   *  Use props classes attribute to retrieve css classes from the classes object provided in the component property,
   * otherwise use current css module reference
   *
   */
  return (
    <div
      className={`${classes.card} ${
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
    </div>
  );
};

export default Card;
