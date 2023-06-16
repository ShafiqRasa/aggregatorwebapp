const Date = ({ name, handleDate, value }) => {
  return (
    <input
      type="date"
      name={name}
      onChange={handleDate}
      value={value}
      className=" border p-2 rounded-md mt-2"
    />
  );
};
export default Date;
