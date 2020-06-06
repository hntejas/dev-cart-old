import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { itemsReducer } from "./items";
import { userReducer } from "./user";
import { ordersReducer } from "./orders";

export const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
});
