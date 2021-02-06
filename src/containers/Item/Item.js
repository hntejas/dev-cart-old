import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./item.module.css";

import ItemQuantity from "../../components/UI/ItemQuantity/ItemQuantity";
import { loadItems } from "../../store/actions/items";
import { addToCart } from "../../store/actions/cart";
import { withRouter } from "react-router-dom";

class Item extends Component {
  state = {
    item: {},
    quantity: 1,
  };

  componentDidMount() {
    const itemId = this.props.match.params.id;
    if (this.props.items.length <= 0) {
      this.props.loadItems();
    } else {
      const item = this.props.items.find(
        (item) => item.id === parseInt(itemId)
      );
      this.setState({
        item: item,
      });
    }
  }

  componentDidUpdate() {
    const itemId = this.props.match.params.id;
    if (this.props.items.length > 0 && !this.state.item.hasOwnProperty("id")) {
      const item = this.props.items.find(
        (item) => item.id === parseInt(itemId)
      );
      this.setState({
        item: item,
      });
    }
  }

  addToCart = () => {
    this.props.addToCart(this.state.item, this.state.quantity);
    this.setState({
      quantity: 1,
    });
  };

  incrementQuantity = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };

  decrementQuantity = () => {
    this.setState({
      quantity: this.state.quantity - 1 < 2 ? 1 : this.state.quantity - 1,
    });
  };

  render() {
    let itemPage;
    let images = require.context("../../assets/images", true);
    const img = this.state.item.image && images("./" + this.state.item.image);
    if (this.state.item) {
      itemPage = (
        <div className={classes.itemContainer}>
          <div className={classes.itemImageContainer}>
            <img src={img} alt="Mug"></img>
          </div>
          <div className={classes.itemDetailsContainer}>
            <h2 className={classes.itemTitle}>{this.state.item.name}</h2>
            <p>{this.state.item.description}</p>
            <h3>Price: Rs {this.state.item.price}</h3>
            <ItemQuantity
              increment={this.incrementQuantity}
              decrement={this.decrementQuantity}
              quantity={this.state.quantity}
            />
            <button
              className={classes.addToCartBtn}
              onClick={() => this.addToCart()}
            >
              Add To Cart
            </button>
          </div>
        </div>
      );
    } else {
      itemPage = (
        <div className={classes.itemContainer}>
          <h1>Item Not Found</h1>
        </div>
      );
    }
    return <React.Fragment>{itemPage}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToActions = (dispatch) => {
  return {
    loadItems: () => dispatch(loadItems()),
    addToCart: (item, quantity) => dispatch(addToCart(item, quantity)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToActions)(Item));
