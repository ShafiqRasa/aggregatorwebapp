import { createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUES = {
  isMenuOpen: false,
  isProfileOpen: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_VALUES,
  reducers: {
    setOpen(state) {
      state.isProfileOpen = !state.isProfileOpen;
    },
    setMenuOpen(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { setOpen, setMenuOpen } = userSlice.actions;

export const userReducer = userSlice.reducer;
