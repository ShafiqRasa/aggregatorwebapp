import { createContext, useReducer } from "react";

const SEARCH_ACTION_TYPES = {
  SET_KEY: "SET_KEY",
};

const INITIAL_VALUE = {
  key: "",
  setKey: () => {},
};

export const SearchContext = createContext({
  key: "",
});

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_ACTION_TYPES.SET_KEY:
      return { ...state, key: payload };
    default:
      throw new Error(`an error on type ${type}`);
  }
};

export const SearchProvider = ({ children }) => {
  const [{ key }, dispatch] = useReducer(reducer, INITIAL_VALUE);
  const setKey = (event) => {
    dispatch({
      type: SEARCH_ACTION_TYPES.SET_KEY,
      payload: event.target.value,
    });
  };

  const value = {
    key,
    setKey,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
