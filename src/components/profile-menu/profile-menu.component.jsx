import { motion, AnimatePresence } from "framer-motion";
import { userNavigation } from "../../utils/navigations.utils";
import { profileMenuAni } from "../../utils/motion.utils";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user-selector";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const { isProfileOpen } = useSelector(userSelector);
  return (
    <AnimatePresence>
      {isProfileOpen && (
        <motion.div {...profileMenuAni} className="">
          <div className=" w-48 origin-top-right rounded-md bg-white overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map(({ id, name, href }) => (
              <Link to={href} key={id}>
                <span className="block px-4 py-2 text-sm text-gray-700 bg-gray-100">
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileMenu;
