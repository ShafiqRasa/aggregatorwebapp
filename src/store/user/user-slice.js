import { createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUES = {
  user: {},
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_VALUES,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isLogin = !state.isLogin;
    },
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
