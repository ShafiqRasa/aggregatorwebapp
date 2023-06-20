import { createAction } from "../../utils/reducer";
import { PREFERENCE_ACTION_TYPES } from "./preference-types";

export const setPreferences = (payload) =>
  createAction(PREFERENCE_ACTION_TYPES.SET_PREFERENCES_START, payload);