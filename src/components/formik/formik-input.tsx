import { Field, ErrorMessage } from "formik";
export type inputProps = {
  label: string;
  type: string;
  name: string;
};
const Input = (props: inputProps) => {
  const { label, type, name } = props;
  return (
    <div className="form-row flex flex-col my-2">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <Field
        type={type}
        name={name}
        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <ErrorMessage name={name} component="span" className="error" />
    </div>
  );
};
export default Input;
