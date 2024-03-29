import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import { BUTTON_TYPES } from "../../utils/button-types.utils";
import Loading from "../loader/loader-component";
const getBtnCSSClass = (btnType: string = BUTTON_TYPES.BLACK) =>
  ({
    [BUTTON_TYPES.BLACK]: "black-btn",
    [BUTTON_TYPES.WHITE]: "white-btn",
  }[btnType]);

type buttonProps = {
  children: ReactNode;
  btnType?: string;
  isSubmitting?: boolean;
  handleSubmit?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<buttonProps> = ({
  children,
  btnType,
  isSubmitting = false,
  handleSubmit = () => {},
}) => {
  const btnClass = getBtnCSSClass(btnType);
  return (
    <div className="">
      <button
        disabled={isSubmitting}
        onClick={handleSubmit}
        className={`${btnClass} group`}
      >
        {isSubmitting ? (
          <Loading
            color={btnType === BUTTON_TYPES.WHITE ? "text-black" : "text-white"}
          />
        ) : (
          children
        )}
      </button>
    </div>
  );
};
export default Button;
