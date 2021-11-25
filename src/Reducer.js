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

    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex( (item) => item.id === action.id );
      let newCart = [...state.cart];

      if(index >= 0) {
        newCart.splice(index,1);  //TODO: Remove splice, not immutable -> use filter()
      } else {
        console.warn("Remove item failed - Item does not exist.");
      }

      return {...state, cart: newCart};

    default:
      return state;
  }
};

export default reducer;
