export enum PREFERENCE_ACTION_TYPES {
  SET_PREFERENCES_START = "preferences/SET_PREFERENCES_START",
  GET_PREFERENCES_START = "preferences/GET_PREFERENCES_START",
}

export type preferencesTypes = {
  readonly fromDate: string;
  readonly sources: string[];
  readonly categories: string[];
};
