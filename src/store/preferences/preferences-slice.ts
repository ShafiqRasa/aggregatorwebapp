import { createSlice } from "@reduxjs/toolkit";
import { preferencesTypes } from "./preference-types";

const INITIAL_VALUE: preferencesTypes & { readonly error: Error | null } = {
  fromDate: "",
  sources: ["Guardian"],
  categories: [],
  error: null,
};

export const addSrouce = (sources: string[], addSrc: string): string[] => {
  const sourceExist = sources.find((source) => source == addSrc);
  if (sourceExist) {
    return sources?.filter((source) => source != addSrc && source);
  }
  return [...sources, addSrc];
};
export const addCategory = (categories: string[], addCat: string): string[] => {
  const categoryExist = categories.find((category) => category == addCat);
  if (categoryExist) {
    return categories?.filter((category) => category != addCat && category);
  }
  return [...categories, addCat];
};

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState: INITIAL_VALUE,
  reducers: {
    setFromDate(state, action) {
      {
        state.fromDate = action.payload;
      }
    },
    setSource(state, action) {
      {
        state.sources = action.payload;
      }
    },
    setCategory(state, action) {
      {
        state.categories = action.payload;
      }
    },
    setAll(state, action) {
      {
        state.categories = action.payload.categories;
        state.fromDate = action.payload.fromDate;
      }
    },
    setAllFailed(state, action) {
      {
        state.error = action.payload;
      }
    },
    getPreferencesFailed(state, action) {
      {
        state.error = action.payload;
      }
    },
  },
});
export const {
  setFromDate,
  setSource,
  setCategory,
  setAll,
  setAllFailed,
  getPreferencesFailed,
} = preferencesSlice.actions;

export const preferencesReducer = preferencesSlice.reducer;
