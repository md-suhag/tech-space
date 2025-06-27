import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToAuth: (state, action) => {
      const { data } = action.payload;
      state.user = data?.user;
      state.token = data?.token;
    },
    logOut: () => {
      return initialState;
    },
  },
});

export const { saveToAuth, logOut } = authSlice.actions;

export default authSlice.reducer;
