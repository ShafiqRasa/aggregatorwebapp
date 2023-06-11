import { BUTTON_TYPES } from "../../utils/button-types.utils";
const getBtnCSSClass = (btnType = BUTTON_TYPES.BLACK) =>
  ({
    [BUTTON_TYPES.BLACK]: "black-btn",
    [BUTTON_TYPES.WHITE]: "white-btn",
  }[btnType]);

const Button = ({ label, btnType }) => {
  const btnClass = getBtnCSSClass(btnType);
  return (
    <div className=" mt-4">
      <button className={btnClass}>{label}</button>
    </div>
  );
};
export default Button;
