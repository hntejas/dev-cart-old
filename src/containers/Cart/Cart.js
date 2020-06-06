import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./cart.module.css";

class Cart extends Component {
  render() {
    return (
      <div className={classes.cartContainer}>
        {this.props.cart.items.map((cartItem) => {
          return (
            <div className={classes.cartItemCard}>
              <p key={cartItem.item.id}>{cartItem.item.name}</p>
              <p>{cartItem.quantity}</p>
              <p>{cartItem.amount}</p>
            </div>
          );
        })}
        <p>Total: {this.props.cart.total}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);
