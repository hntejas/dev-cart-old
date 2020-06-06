import React from "react";
import classes from "./itemcard.module.css";
import { Link } from "react-router-dom";

import imgUrl from "../../assets/images/mug-1.jpg";

function ItemCard(props) {
  return (
    <Link
      to={"/shopping/item/" + props.item.id}
      style={{ textDecoration: "none" }}
    >
      <div className={classes.itemcard}>
        <img src={imgUrl} alt="mug"></img>
        <div className={classes.itemdetails}>
          <p>{props.item.name}</p>
          <p>Price: Rs {props.item.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
