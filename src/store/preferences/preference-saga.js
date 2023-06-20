import { all, call, put, takeLatest } from "redux-saga/effects";
import { PREFERENCE_ACTION_TYPES } from "./preference-types";
import { postRequest } from "../../utils/api-utils";
import { setAllFailed } from "./preferences-slice";

/**** START ** set preferences */
export function* setPreferences({ payload: { fields, jwt } }) {
  try {
    yield call(postRequest, "setting", fields, jwt);
  } catch (error) {
    yield put(setAllFailed(error));
  }
}

export function* onSetPreferences() {
  yield takeLatest(
    PREFERENCE_ACTION_TYPES.SET_PREFERENCES_START,
    setPreferences
  );
}
/**** END ** set preferences */

export function* preferenceSaga() {
  yield all([call(onSetPreferences)]);
}
