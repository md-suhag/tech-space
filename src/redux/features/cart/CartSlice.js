import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { _id, price, stock, quantityToAdd = 1 } = action.payload;

      const existingItem = state.cartItems.find((i) => i._id === _id);

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantityToAdd;
        if (newQuantity <= stock) {
          existingItem.quantity = newQuantity;
          state.totalQuantity += quantityToAdd;
          state.totalPrice += price * quantityToAdd;
        }
      } else {
        if (quantityToAdd <= stock) {
          state.cartItems.push({
            ...action.payload,
            quantity: quantityToAdd,
          });
          state.totalQuantity += quantityToAdd;
          state.totalPrice += price * quantityToAdd;
        }
      }
    },
    decreaseFromCart: (state, action) => {
      const { _id, price } = action.payload;
      const existingItem = state.cartItems.find((i) => i._id === _id);

      existingItem.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalPrice -= price;
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );

      if (index !== -1) {
        const item = state.cartItems[index];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.cartItems.splice(index, 1);
      }
    },

    clearCart: () => initialState,
  },
});

export const { addToCart, removeFromCart, clearCart, decreaseFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
