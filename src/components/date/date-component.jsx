const Date = ({ name, handleDate }) => {
  return (
    <input
      type="date"
      name={name}
      onChange={handleDate}
      className=" border p-2 rounded-md mt-2"
    />
  );
};
export default Date;
