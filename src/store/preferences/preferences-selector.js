import { createSelector } from "reselect";

export const preferenceReducer = (state) => state.preferences;

export const preferencesSelector = createSelector(
  [preferenceReducer],
  (preferences) => preferences
);
