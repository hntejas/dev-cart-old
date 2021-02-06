import React from "react";
import classes from "./cartItem.module.css";

import { MdDelete as Delete } from "react-icons/md";

import ItemQuantity from "../../components/UI/ItemQuantity/ItemQuantity";
import {
  updateCartItemQuantity,
  removeItemFromCart,
} from "../../store/actions/cart";
import { connect } from "react-redux";

function CartItem(props) {
  const incrementQuantity = () => {
    props.updateCartItemQuantity(
      props.cartItem.item,
      props.cartItem.quantity + 1
    );
  };

  const decrementQuantity = () => {
    if (props.cartItem.quantity > 1) {
      props.updateCartItemQuantity(
        props.cartItem.item,
        props.cartItem.quantity - 1
      );
    }
  };

  const removeItemFromCartOnClick = () => {
    props.removeItemFromCart(props.cartItem.item);
  };

  let images = require.context("../../assets/images", true);
  const img =
    props.cartItem.item.image && images("./" + props.cartItem.item.image);

  return (
    <div className={classes.cartItemCard}>
      <img
        src={img}
        className={classes.cartImage}
        alt={props.cartItem.item.name}
      ></img>
      <h3>{props.cartItem.item.name}</h3>

      <ItemQuantity
        quantity={props.cartItem.quantity}
        increment={incrementQuantity}
        decrement={decrementQuantity}
      />
      <h4>Rs. {props.cartItem.amount}</h4>
      <button
        className={classes.deleteItem}
        onClick={() => removeItemFromCartOnClick()}
      >
        <Delete />
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartItemQuantity: (item, quantity) => {
      dispatch(updateCartItemQuantity(item, quantity));
    },
    removeItemFromCart: (item) => {
      dispatch(removeItemFromCart(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
