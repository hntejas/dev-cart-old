import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.css";

// import CartIcon from "../UI/CartIcon/CartIcon";
import { TiShoppingCart as CartIcon } from "react-icons/ti";

export default class Header extends Component {
  render() {
    return (
      <div className={classes.header}>
        <Link to="/shopping" style={{ textDecoration: "none", color: "white" }}>
          <div>
            <h3>Dev Cart</h3>
          </div>
        </Link>
        <Link
          to="/shopping/cart"
          style={{
            textDecoration: "none",
            color: "white",
            height: "90%",
            margin: "none",
          }}
        >
          <div className={classes.cart}>
            <CartIcon />
            <span> Cart</span>
          </div>
        </Link>
      </div>
    );
  }
}
