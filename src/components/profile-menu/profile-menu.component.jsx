import { motion, AnimatePresence } from "framer-motion";
import { profileMenuAni } from "../../utils/motion.utils";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LayoutContext } from "../../context/layout-context";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user/user-slice";

const ProfileMenu = () => {
  const { isProfileOpen, setIsProfileOpen } = useContext(LayoutContext);
  const dispatch = useDispatch();
  const handleLogeOut = () => {
    dispatch(setUser({}));
    setIsProfileOpen();
  };
  return (
    <AnimatePresence>
      {isProfileOpen && (
        <motion.div {...profileMenuAni} className="">
          <div className=" w-32 origin-top-right rounded-md bg-white overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
            <Link to="profile">
              <span className="block hover:text-black px-4 py-2 text-sm text-gray-700 bg-gray-100">
                Your Profile
              </span>
            </Link>
            <button
              className="block w-full hover:text-black px-4 py-2 text-sm text-gray-700 bg-gray-100"
              onClick={handleLogeOut}
            >
              SIGN OUT
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileMenu;
