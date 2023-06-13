import { createContext, useReducer } from "react";

const SEARCH_ACTION_TYPES = {
  SET_KEY: "SET_KEY",
  SET_SOURCES: "SET_SOURCES",
  SET_CATEGORIES: "SET_CATEGORIES",
  SET_DATE: "SET_DATE",
};
const INITIAL_VALUE = {
  key: "",
  fromDate: "",
  sources: [],
  categories: [],
  setKey: () => {},
  setSources: () => {},
  setCategories: () => {},
  setFromDate: () => {},
};
export const SearchContext = createContext({
  key: "",
  fromDate: "",
  sources: [],
  categories: [],
});

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_ACTION_TYPES.SET_KEY:
      return { ...state, key: payload };
    case SEARCH_ACTION_TYPES.SET_SOURCES:
      return { ...state, sources: payload };
    case SEARCH_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    case SEARCH_ACTION_TYPES.SET_DATE:
      return { ...state, fromDate: payload };
    default:
      throw new Error(`an error on type ${type}`);
  }
};

export const addSrouce = (sources, addSrc) => {
  const sourceExist = sources.find((source) => source == addSrc);
  if (sourceExist) {
    return sources.filter((source) => source != addSrc && source);
  }
  return [...sources, addSrc];
};
export const addCategory = (categories, addCat) => {
  const categoryExist = categories.find((category) => category == addCat);
  if (categoryExist) {
    return categories.filter((category) => category != addCat && category);
  }
  return [...categories, addCat];
};

export const SearchProvider = ({ children }) => {
  const [{ key, sources, categories, fromDate }, dispatch] = useReducer(
    reducer,
    INITIAL_VALUE
  );
  const setKey = (event) => {
    dispatch({
      type: SEARCH_ACTION_TYPES.SET_KEY,
      payload: event.target.value,
    });
  };

  const setSources = (event) => {
    const addSrc = event.target.value;
    const newSources = addSrouce(sources, addSrc);
    dispatch({
      type: SEARCH_ACTION_TYPES.SET_SOURCES,
      payload: newSources,
    });
  };

  const setCategories = (event) => {
    const addCat = event.target.value;
    const newCategories = addCategory(categories, addCat);
    dispatch({
      type: SEARCH_ACTION_TYPES.SET_CATEGORIES,
      payload: newCategories,
    });
  };

  const setFromDate = (event) =>
    dispatch({
      type: SEARCH_ACTION_TYPES.SET_DATE,
      payload: event.target.value,
    });

  const value = {
    key,
    sources,
    categories,
    fromDate,
    setKey,
    setSources,
    setCategories,
    setFromDate,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
