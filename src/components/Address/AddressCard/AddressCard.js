import React, { Component } from "react";
import classes from "./addressCard.module.css";

export default class AddressCard extends Component {
  render() {
    const content = this.props.address.addressLine1 ? (
      <React.Fragment>
        <span>{this.props.address.addressLine1}</span>
        <span>{this.props.address.addressLine2}</span>
        <span>{this.props.address.city + " " + this.props.address.state}</span>
        <span>{this.props.address.zip}</span>
        <div>
          {this.props.address.phone ? <b>Phone: </b> : null}
          {this.props.address.phone}
        </div>
      </React.Fragment>
    ) : (
      <h2>Add Address</h2>
    );
    const addressCardClasses = [classes.addressCard];
    !this.props.address.addressLine1
      ? addressCardClasses.push(classes.errorBackground)
      : addressCardClasses.push(classes.validBackground);
    return (
      <div
        className={addressCardClasses.join(" ")}
        onClick={() => this.props.onClick(this.props.address.type)}
      >
        <b style={{ textTransform: "capitalize" }}>
          {this.props.address.type + " Address"}
        </b>
        {content}
      </div>
    );
  }
}
