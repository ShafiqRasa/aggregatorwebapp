const Logo = () => {
  return (
    <div className="flex gap-x-1 flex-shrink-0 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 block font-bold text-red-700 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
      <h2 className=" font-bold text-blue-700">Challenge</h2>
    </div>
  );
};
export default Logo;
