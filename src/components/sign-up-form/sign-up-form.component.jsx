import { useState } from "react";
import { Form, Formik } from "formik";
import FormControl from "../form-control/form-control.component";
import {
  signOutFormInitialValues,
  signOutFormValidationSchema,
} from "../../utils/yup-validation.utils";
import Button from "../button/button-component";
import { BUTTON_TYPES } from "../../utils/button-types.utils";
import { postRequest } from "../../utils/api-utils";
import Alert from "../alert/alert-component";
import { AnimatePresence } from "framer-motion";
import { alertMessage } from "../../utils/default-alert.utils";

const SignUpForm = () => {
  const [alert, setAlert] = useState(alertMessage);
  const handleDismis = () => {
    setAlert(alertMessage);
  };
  const handleSubmit = async (values, { resetForm }) => {
    const { status } = await postRequest(
      "http://127.0.0.1:8000/register",
      values
    );
    if (status) {
      resetForm();
      setAlert({
        status: true,
        isAlert: true,
        message: "Successfully, registered!",
      });
    } else {
      setAlert({
        status: false,
        isAlert: true,
        message: "Something went wrong, try again!",
      });
    }
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
        {({ isSubmitting }) => (
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
            <div className=" mt-4">
              <Button
                btnType={BUTTON_TYPES.WHITE}
                isSubmitting={isSubmitting}
                label="SIGN UP"
              />
            </div>
          </Form>
        )}
      </Formik>
      <AnimatePresence>
        {alert.isAlert && (
          <Alert
            status={alert.status}
            message={alert.message}
            handleDismis={handleDismis}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default SignUpForm;