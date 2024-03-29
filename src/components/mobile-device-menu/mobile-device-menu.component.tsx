import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuAni } from "../../utils/motion.utils";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../utils/joiner-class.utils";
import { navigation } from "../../utils/navigations.utils";
import { LayoutContext } from "../../context/layout-context";
import { userSelector } from "../../store/user/user-selector";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/user/user-slice";
import { SearchContext } from "../../context/search-key.context";

const MobileDeviceMenu = () => {
  const location = useLocation();
  const { isMenuOpen, setIsProfileOpen } = useContext(LayoutContext);
  const { setKey } = useContext(SearchContext);
  const { isLogin, user } = useSelector(userSelector);
  const dispatch = useDispatch();

  const handleLogeOut = () => {
    dispatch(signOut());
    setIsProfileOpen();
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          {...menuAni}
          className="sm:hidden overflow-hidden bg-white h-[50vh]"
        >
          <div className="w-full mr-16 my-4 flex justify-center items-center">
            {/* search bar, search based on user inputs */}
            <input
              type="search"
              onChange={setKey}
              disabled={location.pathname != "/articles"}
              placeholder="search for articles"
              className="w-full border py-1 px-2 rounded-md outline-none mx-4"
            />
            {/* end */}
          </div>
          <div className="space-y-1 pb-3 pt-2">
            {/* Nav bar menus */}
            {navigation.map(({ id, name, href }) => (
              <Link
                key={id}
                to={href}
                className={classNames(
                  `/${href}` === location.pathname
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700 "
                    : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                )}
                aria-current={
                  `/${href}` === location.pathname ? "page" : undefined
                }
              >
                {name}
              </Link>
            ))}
            {/* end */}
          </div>

          <div className="border-t border-gray-200 pb-3 pt-4 ">
            <div className=" mb-2">
              {/* on nav bar, sign in and sign out buttons rendered conditionaly */}
              {isLogin ? (
                <button
                  onClick={handleLogeOut}
                  className="border-transparent w-full text-start text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  to="login"
                  className="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                >
                  SIGN IN
                </Link>
              )}
              {/* end */}
            </div>
            {/* if the user authenticated, give access to the user preferences section */}
            {isLogin && (
              <div className="flex items-center px-4">
                <div className="flex-shrink-0 border border-blue-500 rounded-full p-1 ">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/assets/icons/user.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {user.user.name}
                  </div>
                  <Link
                    to="/profile"
                    className="text-sm font-medium text-blue-500"
                  >
                    profile
                  </Link>
                </div>
              </div>
            )}
            {/* end */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default MobileDeviceMenu;
