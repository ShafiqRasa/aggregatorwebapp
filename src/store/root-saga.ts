import { call, all } from "typed-redux-saga/macro";
import { userSaga } from "./user/user-saga";
import { preferenceSaga } from "./preferences/preference-saga";

export function* rootSaga() {
  yield* all([call(userSaga), call(preferenceSaga)]);
}
