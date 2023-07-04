import {
  ActionWithPayload,
  createAction,
  withMacher,
} from "../../utils/reducer";
import { PREFERENCE_ACTION_TYPES, preferencesTypes } from "./preference-types";

type payloadProps = {
  fields: preferencesTypes;
  jwt: string;
};

export type setPreferencesType = ActionWithPayload<
  PREFERENCE_ACTION_TYPES.SET_PREFERENCES_START,
  payloadProps
>;

/** withMacher method as a type predicate function compair the type with actual type from enum which should be equal   */
export const setPreferences = withMacher(
  (payload: payloadProps): setPreferencesType =>
    createAction(PREFERENCE_ACTION_TYPES.SET_PREFERENCES_START, payload)
);

export type getPreferencesType = ActionWithPayload<
  PREFERENCE_ACTION_TYPES.GET_PREFERENCES_START,
  { jwt: string }
>;
export const getPreferences = withMacher(
  (payload: { jwt: string }): getPreferencesType =>
    createAction(PREFERENCE_ACTION_TYPES.GET_PREFERENCES_START, payload)
);
