import { Form, Formik } from "formik";
import FormControl from "../form-control/form-control.component";
import {
  signOutFormInitialValues,
  signOutFormValidationSchema,
} from "../../utils/yup-validation.utils";
import Button from "../button/button-component";
import { BUTTON_TYPES } from "../../utils/button-types.utils";
import { postRequest } from "../../utils/api-utils";

const SignUpForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    const { status } = await postRequest(
      "http://127.0.0.1:8000/register",
      values
    );
    status && resetForm();
  };
  return (
    <div className=" mx-auto">
      <h1 className=" text-black font-bold text-3xl leading-[5rem] tracking-wider">
        I do not have an account
      </h1>
      <h2 className=" text-gray-900 text-xl tracking-wider mt-2 mb-4">
        Sign up with your email and password
      </h2>
      <Formik
        initialValues={signOutFormInitialValues}
        validationSchema={signOutFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <FormControl element="input" type="text" name="name" label="Name" />
            <FormControl
              element="input"
              type="email"
              name="email"
              label="Email"
            />
            <FormControl
              element="input"
              type="password"
              name="password"
              label="password"
            />
            <FormControl
              element="input"
              type="password"
              name="confirmPassword"
              label="Confirm Password"
            />
            <Button btnType={BUTTON_TYPES.WHITE} label="SIGN UP" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SignUpForm;
