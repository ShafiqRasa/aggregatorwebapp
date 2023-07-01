import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user-slice";
import { preferencesReducer } from "./preferences/preferences-slice";

export const rootReducer = combineReducers({
  user: userReducer,
  preferences: preferencesReducer,
});
