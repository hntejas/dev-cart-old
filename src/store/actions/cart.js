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

export const updateCartItemQuantity = (item, quantity) => {
  return {
    type: actionTypes.UPDATE_CARTITEM_QUANTITY,
    payload: {
      item: item,
      quantity: quantity,
    },
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      item: item,
    },
  };
};
