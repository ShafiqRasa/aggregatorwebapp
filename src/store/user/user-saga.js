import { all, call, put, takeLatest } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user-types";
import { postRequest } from "../../utils/api-utils";
import { signInSuccess, signInFailed } from "./user-slice";

/**** START ** user sign in */
export function* emailSignIn({ payload }) {
  try {
    const {
      data: { user, jwt },
    } = yield call(postRequest, "login", payload);

    yield put(signInSuccess({ user, jwt }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onEmailSignIn() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, emailSignIn);
}
/**** END ** user sign in */

/**** START ** sign up */
export function* emailSignUp({ payload }) {
  const { email, password } = payload;
  try {
    yield call(postRequest, "register", payload);
    const {
      data: { user, jwt },
    } = yield call(postRequest, "login", { email, password });
    yield put(signInSuccess({ user, jwt }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onEmailSignUp() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, emailSignUp);
}
/**** END ** sign up */
export function* userSaga() {
  yield all([call(onEmailSignIn), call(onEmailSignUp)]);
}
