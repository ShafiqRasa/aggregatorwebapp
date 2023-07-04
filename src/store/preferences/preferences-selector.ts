import { createSelector } from "reselect";
import { preferencesTypes } from "./preference-types";
import { rootState } from "../store";

export const preferenceReducer = (state: rootState): preferencesTypes =>
  state.preferences;

export const preferencesSelector = createSelector(
  [preferenceReducer],
  (preferences): preferencesTypes => preferences
);
