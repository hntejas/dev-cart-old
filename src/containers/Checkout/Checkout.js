import React, { Component } from "react";
import classes from "./checkout.module.css";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import AddressCard from "../../components/Address/AddressCard/AddressCard";
import AddressForm from "../../components/Address/AddressForm/AddressForm";
import { updateAddress, updatePayment } from "../../store/actions/user";
import PaymentForm from "../../components/Payment/PaymentForm/PaymentForm";
import PaymentCard from "../../components/Payment/PaymentCard/PaymentCard";
import { submitOrder } from "../../store/actions/order";

class Checkout extends Component {
  state = {
    openFormType: "",
    openEditForm: false,
  };

  toggleEditForm = (type) => {
    this.setState({
      openEditForm: !this.state.openEditForm,
      openFormType: type,
    });
  };

  updateAddress = (address, type) => {
    this.toggleEditForm("");
    this.props.updateAddress(address, type);
  };

  updatePayment = (payment, type) => {
    this.toggleEditForm("");
    this.props.updatePayment(payment, type);
  };

  submitOrder = () => {
    if (
      this.props.billingAddress.addressLine1 &&
      this.props.shippingAddress.addressLine1 &&
      this.props.payment.cardNumber
    ) {
      this.props.history.push("/shopping");
      this.props.submitOrder({
        billingAddress: this.props.billingAddress,
        shippingAddress: this.props.shippingAddress,
        items: this.props.items,
        payment: this.props.payment,
        total: this.props.total,
      });
    }
  };

  render() {
    const formToDisplay = this.state.openEditForm ? (
      this.state.openFormType === "billing" ||
      this.state.openFormType === "shipping" ? (
        <AddressForm
          address={
            this.state.openFormType === "shipping"
              ? { ...this.props.shippingAddress, type: "shipping" }
              : { ...this.props.billingAddress, type: "billing" }
          }
          onClose={this.toggleEditForm}
          onAddressUpdate={this.updateAddress}
        />
      ) : (
        <PaymentForm
          onClose={this.toggleEditForm}
          payment={this.props.payment}
          onPaymentUpdate={this.updatePayment}
        />
      )
    ) : null;
    return (
      <div className={classes.checkoutLayout}>
        <AddressCard
          address={{ ...this.props.shippingAddress, type: "shipping" }}
          onClick={this.toggleEditForm}
        />
        <AddressCard
          address={{ ...this.props.billingAddress, type: "billing" }}
          onClick={this.toggleEditForm}
        />
        <PaymentCard
          payment={this.props.payment}
          onClick={this.toggleEditForm}
        />
        <div className={classes.submitButtonWrapper}>
          <button
            className={classes.submitButton}
            onClick={() => this.submitOrder()}
          >
            Submit
          </button>
        </div>

        {formToDisplay}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    billingAddress: state.user.billingAddress,
    shippingAddress: state.user.shippingAddress,
    payment: state.user.payment,
    items: state.cart.items,
    total: state.cart.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAddress: (address, type) => dispatch(updateAddress(address, type)),
    updatePayment: (payment, type) => dispatch(updatePayment(payment, type)),
    submitOrder: (order) => dispatch(submitOrder(order)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
);
