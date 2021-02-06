import React, { Component } from "react";
import classes from "./addressForm.module.css";

class AddressForm extends Component {
  state = {
    addressLine1: {
      isValid: false,
      value: "",
      isTouched: "",
      isRequired: true,
      // eslint-disable-next-line
      regex: /^[a-zA-Z0-9_ .-]*$/,
      style: "",
    },
    addressLine2: {
      isValid: true,
      value: "",
      isTouched: "",
      isRequired: false,
      // eslint-disable-next-line
      regex: /^[a-zA-Z0-9_.-]*$/,
      style: "",
    },
    city: {
      isValid: false,
      value: "",
      isTouched: "",
      isRequired: true,
      // eslint-disable-next-line
      regex: /^[a-zA-Z0-9_.-]*$/,
      style: "",
    },
    state: {
      isValid: false,
      value: "",
      isTouched: "",
      isRequired: true,
      // eslint-disable-next-line
      regex: /^[a-zA-Z0-9_.-]*$/,
      style: "",
    },
    zip: {
      isValid: false,
      value: "",
      isTouched: "",
      isRequired: true,
      // eslint-disable-next-line
      regex: /^.[0-9]{4,}$/,
      style: "",
    },
    phone: {
      isValid: false,
      value: "",
      isTouched: "",
      isRequired: true,
      // eslint-disable-next-line
      regex: /^.[0-9]{8,}$/,
      style: "",
    },
  };

  componentDidMount() {
    for (var field in this.state) {
      this.setState({
        [field]: {
          ...this.state[field],
          value: this.props.address[field],
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
    const isFormValid = this.validateForm();
    if (isFormValid) {
      const form = { ...this.state };
      const address = {};
      for (let field in form) {
        address[field] = form[field].value;
      }
      this.props.onAddressUpdate(address, this.props.address.type);
    }
  };

  validateForm = () => {
    const form = { ...this.state };
    let isValid = true;
    for (let field in form) {
      if (form[field].isRequired && !form[field].value) {
        isValid = !!form[field].isValid;
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

  render() {
    return (
      <div className={classes.addressEditLayout}>
        <div className={classes.backdrop}></div>
        <div className={classes.addressEditForm}>
          <div style={{ width: "100%" }}>
            <b>Edit Address</b>
            <button
              className={classes.closeBtn}
              onClick={() => this.props.onClose()}
            >
              X
            </button>
          </div>
          <input
            placeholder="Address line 1"
            id="addressLine1"
            value={this.state.addressLine1.value}
            onChange={(e) => this.inputHandler(e)}
            className={this.state.addressLine1.style}
          ></input>
          <input
            placeholder="Address line 2"
            id="addressLine2"
            value={this.state.addressLine2.value}
            onChange={(e) => this.inputHandler(e)}
            className={this.state.addressLine2.style}
          ></input>
          <input
            placeholder="City"
            id="city"
            value={this.state.city.value}
            onChange={(e) => this.inputHandler(e)}
            className={this.state.city.style}
          ></input>
          <input
            placeholder="State"
            id="state"
            value={this.state.state.value}
            onChange={(e) => this.inputHandler(e)}
            className={this.state.state.style}
          ></input>
          <input
            placeholder="Zip"
            id="zip"
            value={this.state.zip.value}
            onChange={(e) => this.inputHandler(e)}
            className={this.state.zip.style}
          ></input>
          <input
            placeholder="Phone"
            id="phone"
            value={this.state.phone.value}
            onChange={(e) => this.inputHandler(e)}
            className={this.state.phone.style}
          ></input>
          <button
            className={classes.actionButton}
            onClick={() => this.submitHandler()}
          >
            Update
          </button>
        </div>
      </div>
    );
  }
}

export default AddressForm;
