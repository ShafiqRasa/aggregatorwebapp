import { motion, AnimatePresence } from "framer-motion";
import { menuAni } from "../../utils/motion.utils";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user-selector";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../utils/joiner-class.utils";
import { navigation, userNavigation } from "../../utils/navigations.utils";
import { user } from "../../utils/user-utils";

const MobileDeviceMenu = () => {
  const location = useLocation();
  const { isMenuOpen } = useSelector(userSelector);
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          {...menuAni}
          className="sm:hidden overflow-hidden absolute bg-white  w-full right-0"
        >
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map(({ id, name, href }) => (
              <Link
                key={id}
                to={href}
                className={classNames(
                  `/${href}` === location.pathname
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
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
          </div>

          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.imageUrl}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  {user.name}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {user.email}
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              {userNavigation.map((item) => (
                <button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default MobileDeviceMenu;
