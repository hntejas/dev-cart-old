import * as actionTypes from "../actions/actionTypes";

const initialUserState = {
  isLoggedIn: true,
  billingSameAsShipping: false,
  billingAddress: {
    addressLine1: "#304, Vandana Celesta",
    addressLine2: "4th Main BOB colony",
    city: "Bangalore",
    state: "Karnataka",
    zip: "123121",
    phone: "123123123",
  },
  shippingAddress: {
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    phone: "",
  },
  payment: {
    cardNumber: "4111111111111111",
    cardName: "Test User",
    expiryDate: "23-09-2020",
  },
};

const updateUserAddress = (state, payload) => {
  const addressType =
    payload.type === "shipping" ? "shippingAddress" : "billingAddress";
  return {
    ...state,
    [addressType]: { ...payload.address },
  };
};

const updateUserPayment = (state, payload) => {
  return {
    ...state,
    payment: { ...payload.payment },
  };
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER_ADDRESS:
      return updateUserAddress(state, action.payload);
    case actionTypes.UPDATE_USER_PAYMENT:
      return updateUserPayment(state, action.payload);
    default:
      return state;
  }
};
