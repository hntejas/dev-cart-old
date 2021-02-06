import React, { Component } from "react";
import classes from "./paymentForm.module.css";

export default class PaymentForm extends Component {
  state = {
    cardNumber: {
      isValid: false,
      value: "",
      isTouched: "",
      isRequired: true,
      // eslint-disable-next-line
      regex: /^.[0-9]{14,}$/,
      style: "",
    },
    cardName: {
      isValid: true,
      value: "",
      isTouched: "",
      isRequired: true,
      // eslint-disable-next-line
      regex: /^[a-zA-Z0-9_.-]*$/,
      style: "",
    },
    expiryDate: {
      isValid: false,
      value: "",
      isTouched: "",
      isRequired: true,
      // eslint-disable-next-line
      regex: /^[a-zA-Z0-9_.-]*$/,
      style: "",
    },
    pin: {
      isValid: false,
      value: "",
      isTouched: "",
      isRequired: false,
      // eslint-disable-next-line
      regex: /^.[0-9]{2,}$/,
      style: "",
    },
  };

  componentDidMount() {
    for (var field in this.state) {
      this.setState({
        [field]: {
          ...this.state[field],
          value: this.props.payment[field],
        },
      });
    }
  }

  inputHandler = (e) => {
    const field = e.target.id;
    const input = { ...this.state[field] };
    input.value = e.target.value;
    input.isTouched = true;
    input.isValid = input.isRequired
      ? !!e.target.value && input.regex.test(e.target.value)
      : true;
    input.style = input.isValid ? classes.validInput : classes.inValidInput;
    this.setState({
      [field]: { ...input },
    });
  };

  submitHandler = () => {
    console.log("inside submit");
    const isFormValid = this.validateForm();
    console.log(isFormValid);
    if (isFormValid) {
      const form = { ...this.state };
      const payment = {};
      for (let field in form) {
        payment[field] = form[field].value;
      }
      this.props.onPaymentUpdate(payment, this.props.payment.type);
    }
  };

  validateForm = () => {
    const form = { ...this.state };
    let isValid = true;
    for (let field in form) {
      if (form[field].isRequired && !form[field].value) {
        isValid = !!form[field].isValid;
        console.log(field, isValid);
      }

      if (
        form[field].isRequired &&
        !form[field].value &&
        !form[field].isTouched
      ) {
        this.setState({
          ...this.state,
          [field]: {
            ...form[field],
            isValid: false,
            style: classes.inValidInput,
          },
        });
      }
      if (!isValid) {
        return isValid;
      }
    }
    return isValid;
  };

  _onFocus = (e) => {
    e.currentTarget.type = "date";
  };

  render() {
    return (
      <div className={classes.paymentEditLayout}>
        <div className={classes.backdrop}></div>
        <div className={classes.paymentEditForm}>
          <h3>Card Details</h3>
          <button
            className={classes.closeBtn}
            onClick={() => this.props.onClose("")}
          >
            X
          </button>
          <input
            id="cardName"
            placeholder="Name on Card"
            value={this.state.cardName.value}
            onChange={(e) => this.inputHandler(e)}
            className={this.state.cardName.style}
          ></input>
          <input
            id="cardNumber"
            placeholder="Card Number"
            value={this.state.cardNumber.value}
            onChange={(e) => this.inputHandler(e)}
            className={this.state.cardNumber.style}
          ></input>
          <input
            id="expiryDate"
            placeholder="Expiry Date"
            onFocus={(e) => this._onFocus(e)}
            value={this.state.expiryDate.value}
            onChange={(e) => this.inputHandler(e)}
            className={this.state.expiryDate.style}
          ></input>
          <input
            className={classes.cardPin}
            placeholder="CVV"
            type="password"
            maxLength="3"
          ></input>
          <button
            className={classes.actionButton}
            onClick={() => this.submitHandler()}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
