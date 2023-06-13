const Checkbox = ({ label, name, value, handleCheckbox }) => {
  return (
    <div className="relative flex gap-x-3">
      <div className="flex h-6 items-center">
        <input
          name={name}
          type="checkbox"
          onChange={handleCheckbox}
          value={value}
          className="h-4 w-4 rounded border-gray-300 text-white-600 focus:ring-red-600"
        />
      </div>
      <div className="text-sm leading-6">
        <label
          htmlFor="comments"
          className="font-medium text-[#fff] opacity-100"
        >
          {label}
        </label>
      </div>
    </div>
  );
};
export default Checkbox;
