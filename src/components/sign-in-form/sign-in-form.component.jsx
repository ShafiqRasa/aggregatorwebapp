import { Form, Formik } from "formik";
import FormControl from "../form-control/form-control.component";
import {
  signInFormInitialValues,
  signInFormValidationSchema,
} from "../../utils/yup-validation.utils";
import Button from "../button/button-component";
import { BUTTON_TYPES } from "../../utils/button-types.utils";

const SignInForm = () => {
  const handleSubmit = async (values) => {
    await fetch("http://127.0.0.1:8000/user", {
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="mx-auto">
      <h1 className=" text-black font-bold text-3xl leading-[5rem] tracking-wider">
        I have already an account
      </h1>
      <h2 className=" text-gray-900 text-xl tracking-wider mt-2 mb-4">
        Sign in with your email and password
      </h2>
      <div className=" w-full">
        <Formik
          initialValues={signInFormInitialValues}
          validationSchema={signInFormValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => {
            return (
              <Form>
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
                  label="Password"
                />
                <Button btnType={BUTTON_TYPES.BLACK} label="SIGN IN" />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
export default SignInForm;
