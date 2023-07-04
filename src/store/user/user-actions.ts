import { USER_ACTION_TYPES } from "./user-types";
import {
  createAction,
  ActionWithPayload,
  withMacher,
} from "../../utils/reducer";

export type authPayloadProps = {
  email: string;
  password: string;
};

type emailSignInType = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  authPayloadProps
>;
export const emailSignIn = withMacher(
  (payload: authPayloadProps): emailSignInType =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, payload)
);

type emailSignUpType = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_UP_START,
  authPayloadProps & { name: string }
>;
export const emailSignUp = withMacher(
  (payload: authPayloadProps & { name: string }): emailSignUpType =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, payload)
);
