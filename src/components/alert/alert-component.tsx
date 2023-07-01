import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const alertAni = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    type: "spring",
    stiffness: 150,
  },
  exit: {
    opacity: 0,
  },
};
type alertProps = {
  status: Boolean;
  message: string;
  handleDismis: () => {};
};
const Alert = ({ status = true, message, handleDismis }: alertProps) => {
  return (
    <motion.div
      {...alertAni}
      className={`rounded-md p-4 my-4 ${status ? "bg-green-50" : "bg-red-50 "}`}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          {status ? (
            <CheckCircleIcon
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          ) : (
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          )}
        </div>
        <div className="ml-3">
          <p
            className={`text-sm font-medium ${
              status ? "text-green-800" : "text-red-800 "
            }`}
          >
            {message}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              onClick={handleDismis}
              className={`inline-flex rounded-md  p-1.5 focus:ring-2 focus:outline-none focus:ring-offset-2  ${
                status
                  ? "bg-green-50 text-green-500 hover:bg-green-100   focus:ring-green-600 focus:ring-offset-green-50"
                  : "bg-red-50 text-red-500 hover:bg-red-100   focus:ring-red-600 focus:ring-offset-red-50"
              }`}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Alert;
