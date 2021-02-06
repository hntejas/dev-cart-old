import React, { Component } from "react";
import classes from "./paymentCard.module.css";

export default class PaymentCard extends Component {
  render() {
    const paymentCardClasses = [classes.paymentCard];
    !this.props.payment.cardNumber
      ? paymentCardClasses.push(classes.errorBackground)
      : paymentCardClasses.push(classes.validBackground);
    return (
      <div
        className={paymentCardClasses.join(" ")}
        onClick={() => this.props.onClick("payment")}
      >
        <b style={{ textTransform: "capitalize" }}>Card Details</b>
        <span>{this.props.payment.cardNumber}</span>
        <span>{this.props.payment.cardName}</span>
        <span>{this.props.payment.expiryDate}</span>
      </div>
    );
  }
}
