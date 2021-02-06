import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./cart.module.css";

import CartItem from "../../components/CartItem/CartItem";

class Cart extends Component {
  componentDidUpdate() {
    console.log(this.props.cart);
  }

  render() {
    const cartItems = this.props.cart.items.map((cartItem) => {
      return <CartItem key={cartItem.item.id} cartItem={cartItem} />;
    });

    return (
      <div className={classes.cartContainer}>
        <h2>Your Cart</h2>
        <hr></hr>
        {cartItems}
        <h3>Total: Rs. {this.props.cart.total}</h3>

        <button className={classes.checkoutBtn}>
          <Link
            to="/checkout"
            className={classes.link}
            style={{
              pointerEvents:
                !this.props.cart.items.length > 0 ? "none" : "initial",
            }}
          >
            Proceed To Buy
          </Link>
        </button>
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
