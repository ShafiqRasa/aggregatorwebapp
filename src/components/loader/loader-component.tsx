import { classNames } from "../../utils/joiner-class.utils";

const Loading = ({ size = "sm", color = " text-white" }) => {
  return (
    <svg
      className={classNames(
        "-ml-1 mr-3 animate-spin ",
        size === "sm" ? "h-5 w-5" : size === "md" ? "h-8 w-8" : "h-12 w-12",
        color,
        color == "text-white"
          ? "group-hover:text-black"
          : "group-hover:text-white"
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default Loading;
