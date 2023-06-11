import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { classNames } from "../../utils/joiner-class.utils";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOpen } from "../../store/user/user-slice";
import { navigation } from "../../utils/navigations.utils";
import ProfileMenu from "../profile-menu/profile-menu.component";
import MobileDeviceMenu from "../mobile-device-menu/mobile-device-menu.component";
import { user } from "../../utils/user-utils";
import MenuIcon from "../menu-icon/menu-icon.component";

const Navigation = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleProfileMenu = () => {
    dispatch(setOpen());
  };

  return (
    <Fragment>
      <div className=" bg-white shadow-sm w-full">
        <>
          {/* nav for mediom and larg devices */}
          <div className="mx-auto sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto "
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map(({ id, name, href, current }) => (
                    <Link
                      key={id}
                      to={href}
                      className={classNames(
                        `/${href}` === location.pathname
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                      )}
                      aria-current={current ? "page" : undefined}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3  justify-center hidden sm:flex items-center">
                <input
                  type="search"
                  placeholder="search for articles"
                  className="w-full border py-1 px-2 rounded-lg outline-none"
                />
              </div>
              <div className="hidden sm:ml-6 mt-4 sm:flex   sm:flex-col gap-4 sm:items-center">
                <div className=" flex">
                  {/* Profile dropdown */}
                  <div className=" ml-2 flex justify-center items-center">
                    {false ? (
                      <button
                        onClick={handleProfileMenu}
                        className="rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </button>
                    ) : (
                      <Link to="/login" className=" mt-1">
                        SIGN IN
                      </Link>
                    )}
                  </div>
                </div>
                <ProfileMenu />
              </div>
              {/* menu icon */}
              <MenuIcon />
              {/* end */}
            </div>
          </div>
          {/* end */}

          {/* nav for mobile devices */}
          <MobileDeviceMenu />
          {/* end */}
        </>
      </div>

      <div className="pt-10  z-10">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
