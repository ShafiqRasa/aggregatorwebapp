import { USER_ACTION_TYPES } from "./user-types";
import {
  createAction,
  ActionWithPayload,
  withMacher,
} from "../../utils/reducer";

type payloadProps = {
  email: string;
  password: string;
};

type emailSignInType = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  payloadProps
>;
export const emailSignIn = withMacher(
  (payload: payloadProps): emailSignInType =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, payload)
);

type emailSignUpType = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_UP_START,
  payloadProps & { name: string }
>;
export const emailSignUp = withMacher(
  (payload: payloadProps & { name: string }): emailSignUpType =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, payload)
);
