import { ChangeEvent } from "react";

type dateProps = {
  name: string;
  handleDate: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
const Date = ({ name, handleDate, value }: dateProps) => {
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
