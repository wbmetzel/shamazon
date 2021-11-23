export const initialState = {
  cart: [],
};

// Selector for subtotal
export const getCartTotal = (cart) => {
  return cart?.reduce((amount, item) => amount + item.price, 0);
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
