import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { LayoutContext } from "../../context/layout-context";

const MenuIcon = () => {
  const { isMenuOpen, setIsMenueOpen } = useContext(LayoutContext);
  const handleMenu = () => {
    setIsMenueOpen();
  };
  return (
    <div className="flex items-center sm:hidden ">
      {/* Mobile menu button */}
      <div className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        {/* Open main menu */}
        {isMenuOpen ? (
          <XMarkIcon
            onClick={handleMenu}
            className="block h-6 w-6 cursor-pointer"
            aria-hidden="true"
          />
        ) : (
          <Bars3Icon
            onClick={handleMenu}
            className="block h-6 w-6 cursor-pointer"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};
export default MenuIcon;
