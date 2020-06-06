import { createStore } from "redux";
import { rootReducer } from "./reducers";

// const initialState = {
//   items: [],
//   user: {
//     isLoggedIn: true,
//     billingSameAsShipping: false,
//     billingAddress: {},
//     shippingAddress: {},
//   },
//   cart: {
//     items: [
//       {
//         id: 1,
//         quantity: 1,
//       },
//     ],
//     total: 0,
//   },
//   orders: [
//     {
//       items: [],
//       total: 123,
//     },
//   ],
// };

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
