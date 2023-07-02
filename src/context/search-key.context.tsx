import { createContext, useReducer, ChangeEvent, FC, ReactNode } from "react";
import { AnyAction } from "@reduxjs/toolkit";

enum SEARCH_ACTION_TYPES {
  SET_KEY = "SET_KEY",
}

type initialValuesTypes = {
  key: string;
  setKey: (event: ChangeEvent<HTMLInputElement>) => void;
};
const INITIAL_VALUE: initialValuesTypes = {
  key: "",
  setKey: () => {},
};

export const SearchContext = createContext(INITIAL_VALUE);

const reducer = (state: initialValuesTypes, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_ACTION_TYPES.SET_KEY:
      return { ...state, key: payload };
    default:
      throw new Error(`an error on type ${type}`);
  }
};

type searchProviderProps = {
  children: ReactNode;
};

export const SearchProvider: FC<searchProviderProps> = ({ children }) => {
  const [{ key }, dispatch] = useReducer(reducer, INITIAL_VALUE);
  const setKey = (event: ChangeEvent<HTMLInputElement>) => {
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
