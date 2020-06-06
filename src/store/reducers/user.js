const initialUserState = {
  isLoggedIn: true,
  billingSameAsShipping: false,
  billingAddress: {
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    phone: "",
  },
  shippingAddress: {
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    phone: "",
  },
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
