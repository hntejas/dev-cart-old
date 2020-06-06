import * as actionTypes from "../actions/actionTypes";

const initialCartState = {
  items: [],
  total: 0,
};

const addToCart = (state, action) => {
  const itemIndexInCart = state.items.findIndex((cartItem) => {
    return cartItem.item.id === action.payload.item.id;
  });

  let newCartItemList = [...state.items];
  if (itemIndexInCart === -1) {
    newCartItemList.push({
      item: action.payload.item,
      quantity: action.payload.quantity,
      amount:
        parseInt(action.payload.item.price) * parseInt(action.payload.quantity),
    });
  } else {
    newCartItemList[itemIndexInCart].quantity += action.payload.quantity;
    newCartItemList[itemIndexInCart].amount +=
      parseInt(action.payload.item.price) * parseInt(action.payload.quantity);
  }

  const total = newCartItemList.reduce((prevTotal, currentItem) => {
    return prevTotal + parseInt(currentItem.amount);
  }, 0);

  return {
    ...state,
    items: newCartItemList,
    total: total,
  };
};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return addToCart(state, action);
    default:
      return state;
  }
};
