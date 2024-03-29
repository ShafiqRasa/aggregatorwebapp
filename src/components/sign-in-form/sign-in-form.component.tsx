import { useState } from "react";
import { Form, Formik } from "formik";
import FormControl from "../form-control/form-control.component";
import {
  signInFormInitialValues,
  signInFormValidationSchema,
  signInFormInitialValuesType,
} from "../../utils/yup-validation.utils";
import Button from "../button/button-component";
import { BUTTON_TYPES } from "../../utils/button-types.utils";
import { useDispatch } from "react-redux";
import Alert from "../alert/alert-component";
import { AnimatePresence } from "framer-motion";
import { alertMessage } from "../../utils/default-alert.utils";
import { emailSignIn } from "../../store/user/user-actions";

const SignInForm = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(alertMessage);
  const handleDismis = () => setAlert(alertMessage);

  const handleSubmit = (values: signInFormInitialValuesType) => {
    try {
      dispatch(emailSignIn(values));
      setAlert({
        status: false,
        isAlert: true,
        message: "I am so sorry, at the moment server is not available",
      });
      // setAlert({
      //   status: true,
      //   isAlert: true,
      //   message: "User signed in successfully",
      // });
    } catch (error) {
      setAlert({
        status: false,
        isAlert: true,
        message: "Wrong credentials",
      });
    }
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
          {({ isSubmitting }) => {
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
                <div className=" mt-4">
                  <Button
                    btnType={BUTTON_TYPES.BLACK}
                    isSubmitting={isSubmitting}
                  >
                    SIGN IN
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
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
export default SignInForm;
