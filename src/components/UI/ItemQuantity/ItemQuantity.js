import React from "react";
import classes from "./itemQuantity.module.css";

function ItemQuantity(props) {
  return (
    <div className={classes.itemQuantityContainer}>
      <button
        className={classes.itemQuantityIncrement}
        onClick={() => props.increment()}
      >
        +
      </button>
      <input
        className={classes.itemQuantity}
        value={props.quantity}
        disabled
      ></input>
      <button
        className={classes.itemQuantityIncrement}
        onClick={() => props.decrement()}
      >
        -
      </button>
    </div>
  );
}

export default ItemQuantity;
