import { FC, FormHTMLAttributes } from "react";
import { inputProps } from "../formik/formik-input";
import Input from "../formik/formik-input";

type formControlProps = {
  element: string;
} & inputProps;
const FormControl: FC<formControlProps> = ({ element, label, type, name }) => {
  switch (element) {
    case "input":
      return <Input label={label} type={type} name={name} />;
    default:
      break;
  }
};

export default FormControl;
