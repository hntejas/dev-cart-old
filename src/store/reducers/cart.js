import * as actionTypes from "../actions/actionTypes";

const initialCartState = {
  items: [],
  total: 0,
};

const addToCart = (state, payload) => {
  const itemIndexInCart = state.items.findIndex((cartItem) => {
    return cartItem.item.id === payload.item.id;
  });

  let newCartItemList = [...state.items];
  if (itemIndexInCart === -1) {
    newCartItemList.push({
      item: payload.item,
      quantity: payload.quantity,
      amount: parseInt(payload.item.price) * parseInt(payload.quantity),
    });
  } else {
    newCartItemList[itemIndexInCart].quantity += payload.quantity;
    newCartItemList[itemIndexInCart].amount +=
      parseInt(payload.item.price) * parseInt(payload.quantity);
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

const updateCartItemQuantity = (state, payload) => {
  const cartItems = [...state.items];

  const itemToUpdateIndex = cartItems.findIndex((cartItem) => {
    return cartItem.item.id === payload.item.id;
  });

  cartItems[itemToUpdateIndex] = {
    ...cartItems[itemToUpdateIndex],
    quantity: payload.quantity,
    amount:
      parseInt(payload.quantity) *
      parseInt(cartItems[itemToUpdateIndex].item.price),
  };

  const total = cartItems.reduce((prevTotal, currentItem) => {
    return prevTotal + parseInt(currentItem.amount);
  }, 0);

  return {
    ...state,
    items: cartItems,
    total: total,
  };
};

const removeItemFromCart = (state, payload) => {
  const cartItems = [...state.items];

  const filteredCartItems = cartItems.filter((cartItem) => {
    return cartItem.item.id !== payload.item.id;
  });

  const total = filteredCartItems.reduce((prevTotal, currentItem) => {
    return prevTotal + parseInt(currentItem.amount);
  }, 0);

  return {
    ...state,
    items: filteredCartItems,
    total: total,
  };
};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return addToCart(state, action.payload);
    case actionTypes.UPDATE_CARTITEM_QUANTITY:
      return updateCartItemQuantity(state, action.payload);
    case actionTypes.REMOVE_ITEM_FROM_CART:
      return removeItemFromCart(state, action.payload);
    default:
      return state;
  }
};
