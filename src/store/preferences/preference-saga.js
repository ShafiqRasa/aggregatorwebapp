import { all, call, put, takeLatest } from "redux-saga/effects";
import { PREFERENCE_ACTION_TYPES } from "./preference-types";
import { getRequest, postRequest } from "../../utils/api-utils";
import { getPreferences } from "./preference-actions";
import {
  setAllFailed,
  getPreferencesFailed,
  setAll,
} from "./preferences-slice";

/**** START ** set preferences to the database */
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

/** START ** get preferences from database */
export function* getPreferencesAsync({ payload: { jwt } }) {
  try {
    const {
      data: { categories, fromDate },
    } = yield call(getRequest, "preferences", jwt);
    yield put(setAll({ categories, fromDate }));
  } catch (error) {
    yield put(getPreferencesFailed(error));
  }
}

export function* onGetPreferences() {
  yield takeLatest(
    PREFERENCE_ACTION_TYPES.GET_PREFERENCES_START,
    getPreferencesAsync
  );
}
/** END ** get preferences from database */

export function* preferenceSaga() {
  yield all([call(onSetPreferences), call(onGetPreferences)]);
}
