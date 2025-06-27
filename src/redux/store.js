import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import AuthReducer from "./features/auth/AuthSlice";
import CartReducer from "./features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    authR: AuthReducer,
    cartR: CartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
