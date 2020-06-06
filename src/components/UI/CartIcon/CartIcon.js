import React from "react";
import classes from "./cartIcon.module.css";

function CartIcon() {
  return (
    <div className={classes["icon-cart"]}>
      <div className={classes["cart-line-1"]} style={style}></div>
      <div className={classes["cart-line-2"]} style={style}></div>
      <div className={classes["cart-line-3"]} style={style}></div>
      <div className={classes["cart-wheel"]} style={style}></div>
    </div>
  );
}

const style = {
  backgroundColor: "white",
};

export default CartIcon;
