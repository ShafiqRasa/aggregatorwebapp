import { USER_ACTION_TYPES } from "./user-types";
import { createAction } from "../../utils/reducer";

export const emailSignIn = (payload) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, payload);

export const emailSignUp = (payload) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, payload);
