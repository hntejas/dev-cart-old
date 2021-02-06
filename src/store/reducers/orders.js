import * as actionTypes from "../actions/actionTypes";

const initialOrdersState = [];

const submitOrder = (state, payload) => {
  const newOrderState = [...state];
  newOrderState.push(payload.order);
  return newOrderState;
};

export const ordersReducer = (state = initialOrdersState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_ORDER:
      return submitOrder(state, action.payload);
    default:
      return state;
  }
};
