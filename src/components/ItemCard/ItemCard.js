import React from "react";
import classes from "./itemcard.module.css";
import { Link } from "react-router-dom";

function ItemCard(props) {
  let images = require.context("../../assets/images", true);
  const img = props.item.image && images("./" + props.item.image);
  return (
    <Link
      to={"/shopping/item/" + props.item.id}
      style={{ textDecoration: "none" }}
    >
      <div className={classes.itemcard}>
        <img src={img} alt="mug"></img>
        <div className={classes.itemdetails}>
          <p><b>{props.item.name}</b></p>
          <p>Price: Rs {props.item.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
