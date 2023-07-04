import { createSlice } from "@reduxjs/toolkit";
import { userStateTypes } from "./user-types";

const userInitialValue = {
  user: {
    email: "",
    name: "",
  },
  jwt: "",
};
const INITIAL_VALUES: userStateTypes = {
  user: userInitialValue,
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
      state.user = userInitialValue;
      state.isLogin = false;
    },
  },
});

export const { signInSuccess, signInFailed, signOut } = userSlice.actions;

export const userReducer = userSlice.reducer;
