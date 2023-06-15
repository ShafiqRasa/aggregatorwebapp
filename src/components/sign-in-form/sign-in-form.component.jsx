import { useState } from "react";
import { Form, Formik } from "formik";
import FormControl from "../form-control/form-control.component";
import {
  signInFormInitialValues,
  signInFormValidationSchema,
} from "../../utils/yup-validation.utils";
import Button from "../button/button-component";
import { BUTTON_TYPES } from "../../utils/button-types.utils";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user/user-slice";
import { postRequest } from "../../utils/api-utils";
import Alert from "../alert/alert-component";
import { AnimatePresence } from "framer-motion";
import { alertMessage } from "../../utils/default-alert.utils";

const SignInForm = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(alertMessage);
  const handleDismis = () => setAlert(alertMessage);

  const handleSubmit = async (values) => {
    try {
      const { data, status } = await postRequest("login", values, null);

      if (status) {
        const { user, jwt } = data;
        dispatch(setUser({ user, jwt }));
      } else {
        setAlert({
          status: false,
          isAlert: true,
          message: "Wrong credentials",
        });
      }
    } catch ({ code }) {
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
                    label="SIGN IN"
                  />
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
