import * as actionTypes from "../actions/actionTypes";
import { items } from "../../../src/assets/files/items.json";

export const loadItems = (state) => {
  return [...items];
};

const initialItemState = [];

export const itemsReducer = (state = initialItemState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_ITEMS:
      return loadItems(state);
    default:
      return state;
  }
};
