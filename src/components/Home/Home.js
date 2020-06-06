import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./home.module.css";

import ItemCard from "../ItemCard/ItemCard";
import { loadItems } from "../../store/actions/items";

class Home extends Component {
  componentDidMount() {
    if (this.props.items.length <= 0) {
      this.props.loadItems();
    }
  }

  render() {
    return (
      <div className={classes.home}>
        {this.props.items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    );
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
  };
};

export default connect(mapStateToProps, mapDispatchToActions)(Home);
