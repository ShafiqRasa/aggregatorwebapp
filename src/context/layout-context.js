import { createContext, useReducer } from "react";

const LAYOUT_ACTION_TYPES = {
  SET_IS_MENU_OPEN: "SET_IS_MENU_OPEN",
  SET_IS_PROFILE_OPEN: "SET_IS_PROFILE_OPEN",
};
const INITIAL_VALUES = {
  isMenuOpen: false,
  isProfileOpen: false,
};

export const LayoutContext = createContext({
  isMenuOpen: false,
  isProfileOpen: false,
  setIsProfileOpen: () => {},
  setIsMenueOpen: () => {},
});

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case LAYOUT_ACTION_TYPES.SET_IS_MENU_OPEN:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case LAYOUT_ACTION_TYPES.SET_IS_PROFILE_OPEN:
      return { ...state, isProfileOpen: !state.isProfileOpen };
    default:
      throw new Error(`An error catched with type:${type}`);
  }
};
export const LayoutProvider = ({ children }) => {
  const [{ isMenuOpen, isProfileOpen }, dispatch] = useReducer(
    reducer,
    INITIAL_VALUES
  );
  const setIsProfileOpen = () =>
    dispatch({ type: LAYOUT_ACTION_TYPES.SET_IS_PROFILE_OPEN });
  const setIsMenueOpen = () =>
    dispatch({ type: LAYOUT_ACTION_TYPES.SET_IS_MENU_OPEN });

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
