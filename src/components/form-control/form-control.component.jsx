import Input from "../formik/formik-input";

const FormControl = ({ element, ...otherPops }) => {
  switch (element) {
    case "input":
      return <Input {...otherPops} />;
    default:
      break;
  }
};

export default FormControl;
