import { AnyAction } from "@reduxjs/toolkit";
import { FC, ReactNode, createContext, useReducer, useEffect } from "react";
import { useLocation } from "react-router-dom";

enum LAYOUT_ACTION_TYPES {
  SET_IS_MENU_OPEN = "SET_IS_MENU_OPEN",
  SET_IS_PROFILE_OPEN = "SET_IS_PROFILE_OPEN",
}
type initialValuesTypes = {
  isMenuOpen: boolean;
  isProfileOpen: boolean;
};
const INITIAL_VALUES: initialValuesTypes = {
  isMenuOpen: false,
  isProfileOpen: false,
};

export const LayoutContext = createContext({
  isMenuOpen: false,
  isProfileOpen: false,
  setIsProfileOpen: () => {},
  setIsMenueOpen: (isOpen: boolean) => {},
});

const reducer = (state: initialValuesTypes, action: AnyAction) => {
  const { type } = action;
  switch (type) {
    case LAYOUT_ACTION_TYPES.SET_IS_MENU_OPEN:
      return { ...state, isMenuOpen: action.payload };
    case LAYOUT_ACTION_TYPES.SET_IS_PROFILE_OPEN:
      return { ...state, isProfileOpen: !state.isProfileOpen };
    default:
      throw new Error(`An error catched with type:${type}`);
  }
};
type layoutProviderPops = {
  children: ReactNode;
};
export const LayoutProvider: FC<layoutProviderPops> = ({ children }) => {
  const location = useLocation();
  const [{ isMenuOpen, isProfileOpen }, dispatch] = useReducer(
    reducer,
    INITIAL_VALUES
  );
  const setIsProfileOpen = () =>
    dispatch({ type: LAYOUT_ACTION_TYPES.SET_IS_PROFILE_OPEN });
  const setIsMenueOpen = (isOpen: boolean) =>
    dispatch({ type: LAYOUT_ACTION_TYPES.SET_IS_MENU_OPEN, payload: isOpen });

  useEffect(() => {
    dispatch({ type: LAYOUT_ACTION_TYPES.SET_IS_MENU_OPEN, payload: false });
  }, [location.pathname]);

  const values = {
    setIsProfileOpen,
    setIsMenueOpen,
    isMenuOpen,
    isProfileOpen,
  };
  return (
    <LayoutContext.Provider value={values}>{children}</LayoutContext.Provider>
  );
};
