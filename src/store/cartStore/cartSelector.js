export const selectCart = (state) => state.cart.cart;
export const selectCartCount = (state) => state.cart.cart.reduce((total, item) => total + item.quantity, 0);
export const selectTotalPrice = (state) =>
   state.cart.cart.reduce((total, item) => total + item.price * item.quantity, 0);
