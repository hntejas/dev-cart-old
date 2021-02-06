import * as actionTypes from "./actionTypes";

export const submitOrder = (order) => {
  return {
    type: actionTypes.SUBMIT_ORDER,
    payload: {
      order: order,
    },
  };
};
