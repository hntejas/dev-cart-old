import * as actionTypes from "./actionTypes";

export const loginUser = (email, password) => {
  return {
    type: actionTypes.UPDATE_USER_ADDRESS,
    payload: {
      email: email,
      password: password,
    },
  };
};

export const signupUser = (email, password) => {
  return {
    type: actionTypes.UPDATE_USER_ADDRESS,
    payload: {
      email: email,
      password: password,
    },
  };
};

export const updateAddress = (address, type) => {
  return {
    type: actionTypes.UPDATE_USER_ADDRESS,
    payload: {
      address: address,
      type: type,
    },
  };
};

export const updatePayment = (payment, type) => {
  return {
    type: actionTypes.UPDATE_USER_PAYMENT,
    payload: {
      payment: payment,
      type: type,
    },
  };
};
