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

const SignInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      const { user, jwt } = await postRequest(
        "http://localhost:8000/login",
        values,
        null
      );
      dispatch(setUser({ user, jwt }));
    } catch ({ code }) {
      console.log("error catched:", code);
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
