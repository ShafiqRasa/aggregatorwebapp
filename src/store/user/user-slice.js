import { createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUES = {
  user: {},
  isLogin: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_VALUES,
  reducers: {
    signInSuccess(state, action) {
      state.user = action.payload;
      state.isLogin = true;
    },
    signInFailed(state, action) {
      state.error = action.payload;
      state.isLogin = false;
    },
    signOut(state) {
      state.user = {};
      state.isLogin = false;
    },
  },
});

export const { signInSuccess, signInFailed, signOut } = userSlice.actions;

export const userReducer = userSlice.reducer;
