import { Middleware } from "@reduxjs/toolkit";
export const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  if (!action.type) next(action);
  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("previous store: ", store.getState());

  next(action);

  console.log("current store: ", store.getState());
};
