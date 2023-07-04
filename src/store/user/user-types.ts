export enum USER_ACTION_TYPES {
  EMAIL_SIGN_IN_START = "user/EMAIL_SIGN_IN_START",
  EMAIL_SIGN_UP_START = "user/EMAIL_SIGN_UP_START",
}

export type userType = {
  user: {
    email: string;
    name: string;
  };
  jwt: string;
};
export type userStateTypes = {
  user: userType;
  isLogin: Boolean;
  error: Error | null;
};
