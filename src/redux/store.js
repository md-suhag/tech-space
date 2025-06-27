import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import AuthReducer from "./features/auth/AuthSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    authR: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
