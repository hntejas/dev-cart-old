import * as actionTypes from "./actionTypes";

export const addToCart = (item, quantity) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      item: item,
      quantity: quantity,
    },
  };
};
