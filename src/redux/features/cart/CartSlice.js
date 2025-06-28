import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  error: null,
  success: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        _id,
        name,
        price,
        stock,
        imageUrl,
        quantityToAdd = 1,
      } = action.payload;
      const existingItem = state.cartItems.find((i) => i._id === _id);

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantityToAdd;
        if (newQuantity <= stock) {
          existingItem.quantity = newQuantity;
          state.totalQuantity += quantityToAdd;
          state.totalPrice += price * quantityToAdd;
          state.error = null;
          state.success = `Added ${quantityToAdd} more of ${name} to the cart.`;
        } else {
          state.error = `Cannot add more than available stock (${stock}).`;
          state.success = null;
        }
      } else {
        if (quantityToAdd <= stock) {
          state.cartItems.push({
            _id,
            name,
            price,
            stock,
            imageUrl,
            quantity: quantityToAdd,
          });
          state.totalQuantity += quantityToAdd;
          state.totalPrice += price * quantityToAdd;
          state.error = null;
          state.success = `Added ${quantityToAdd} of ${name} to the cart.`;
        } else {
          state.error = `Cannot add more than available stock (${stock}).`;
          state.success = null;
        }
      }
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
        state.error = null;
        state.success = `Removed ${item.name} from the cart.`;
      } else {
        state.error = `Item not found in cart.`;
        state.success = null;
      }
    },

    clearCart: () => initialState,
    clearMessages: (state) => {
      state.error = null;
      state.success = null;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, clearMessages } =
  cartSlice.actions;

export default cartSlice.reducer;
