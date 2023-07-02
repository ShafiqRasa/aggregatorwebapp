import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to="/" className="text-gray-400 hover:text-gray-500">
            Home
          </Link>
          <Link to="/articles" className="text-gray-400 hover:text-gray-500">
            Articles
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2023 dsigned by Shafiq, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
